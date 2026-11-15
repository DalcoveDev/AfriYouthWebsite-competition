/* =========================================================
   AfriYouth Innovation Labs — interactions
   ========================================================= */
let headerBound = false;

export function initSite() {
  "use strict";
  const cleanups = [];

  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Toast ---------- */
  const toast = document.querySelector("[data-toast]");
  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
  };

  /* ---------- Header & mobile menu ---------- */
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const siteNav = document.getElementById("site-nav");
  let menuOpen = false;

  const setMenu = (open) => {
    if (!navToggle || !siteNav) return;
    menuOpen = open;
    body.classList.toggle("menu-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) {
      const firstLink = siteNav.querySelector("a");
      if (firstLink) window.setTimeout(() => firstLink.focus(), 260);
    }
  };

  if (!headerBound) {
    headerBound = true;

    if (header) {
      const progress = document.querySelector("[data-scroll-progress]");
      const updateHeader = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 10);
        if (progress) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          const value = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
          progress.style.transform = `scaleX(${value})`;
        }
      };
      updateHeader();
      window.addEventListener("scroll", updateHeader, { passive: true });
      window.addEventListener("resize", updateHeader);
    }

    if (navToggle) {
    navToggle.addEventListener("click", () => setMenu(!menuOpen));
    siteNav?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (event) => {
      if (!menuOpen) return;
      if (event.key === "Escape") {
        setMenu(false);
        navToggle.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const candidates = Array.from(
        document.querySelectorAll("[data-header] a, [data-header] button")
      ).filter((element) => element.offsetParent !== null && !element.hasAttribute("disabled"));
      if (!candidates.length) return;
      const first = candidates[0];
      const last = candidates[candidates.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1120 && menuOpen) setMenu(false);
    });
    }
  }

  /* ---------- Scroll reveals ---------- */
  const revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
      );
      revealItems.forEach((item) => revealObserver.observe(item));
      cleanups.push(() => revealObserver.disconnect());
    }
  }

  /* ---------- Count-up figures ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    const format = (value) => Math.round(value).toLocaleString("en-US");
    const runCounter = (element) => {
      const target = Number(element.dataset.count);
      if (!Number.isFinite(target)) return;
      if (reduceMotion) {
        element.textContent = format(target);
        return;
      }
      const duration = 1500;
      const start = window.performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = format(target * eased);
        if (progress < 1) window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      counters.forEach(runCounter);
    } else {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            runCounter(entry.target);
            counterObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((counter) => counterObserver.observe(counter));
      cleanups.push(() => counterObserver.disconnect());
    }
  }

  /* ---------- Floating work preview ---------- */
  const serviceList = document.querySelector(".service-list");
  const servicePreview = document.querySelector(".service-preview");
  if (serviceList && servicePreview && canHover) {
    const previewImage = servicePreview.querySelector("[data-preview-image]");
    let previewFrame = null;

    serviceList.addEventListener("pointermove", (event) => {
      if (!previewImage) return;
      const row = event.target.closest("[data-preview]");
      if (!row) {
        servicePreview.classList.remove("is-visible");
        return;
      }
      const src = row.getAttribute("data-preview");
      if (previewImage.getAttribute("src") !== src) previewImage.src = src;
      previewImage.alt = "";
      const x = Math.min(Math.max(event.clientX, 150), window.innerWidth - 150);
      const y = Math.min(Math.max(event.clientY, 130), window.innerHeight - 130);
      window.cancelAnimationFrame(previewFrame);
      previewFrame = window.requestAnimationFrame(() => {
        servicePreview.style.left = `${x}px`;
        servicePreview.style.top = `${y}px`;
        servicePreview.classList.add("is-visible");
      });
    });

    serviceList.addEventListener("pointerleave", () => {
      servicePreview.classList.remove("is-visible");
    });

    serviceList.querySelectorAll("[data-preview]").forEach((row) => {
      row.addEventListener("focus", () => servicePreview.classList.remove("is-visible"));
    });
  }

  /* ---------- Details from URL hash ---------- */
  const openHashedDetails = () => {
    if (!window.location.hash) return;
    let target;
    try {
      target = document.querySelector(window.location.hash);
    } catch (error) {
      target = null;
    }
    if (target?.matches("details")) {
      target.open = true;
    }
  };
  openHashedDetails();
  window.addEventListener("hashchange", openHashedDetails);

  /* ---------- Contact form ---------- */
  const contactForm = document.querySelector("[data-contact-form]");
  const contactEmail = "hello@afriyouthlabs.org";

  if (contactForm) {
    const topicSelect = contactForm.querySelector("#contact-topic");
    const success = document.querySelector("[data-form-success]");
    const error = document.querySelector("[data-form-error]");
    const validTopics = ["general", "programme", "research", "partner", "other"];
    const topicLabels = {
      general: "General Inquiry",
      programme: "Programs & Opportunities",
      research: "Research & Consulting",
      partner: "Partnerships & Collaboration",
      other: "Other"
    };

    const setTopicFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const topic = params.get("topic");
      if (topic && validTopics.includes(topic) && topicSelect) {
        topicSelect.value = topic;
      }
      const programme = params.get("programme");
      if (programme) {
        const message = contactForm.querySelector("#contact-message");
        if (message && !message.value) {
          const readable = programme
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          message.value = `I’d like to learn more about the ${readable}.\n\n`;
        }
      }
    };
    setTopicFromUrl();

    document.querySelectorAll("[data-topic-shortcut]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!topicSelect) return;
        topicSelect.value = button.dataset.topicShortcut;
        contactForm.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        window.setTimeout(() => topicSelect.focus({ preventScroll: true }), 400);
      });
    });

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        if (error) error.hidden = false;
        return;
      }
      if (error) error.hidden = true;

      const data = new FormData(contactForm);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const organisation = String(data.get("organisation") || "").trim();
      const topic = String(data.get("topic") || "other");
      const subjectLine = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();

      const mailSubject = `${subjectLine || topicLabels[topic] || "Website inquiry"} — ${name}`;
      const headerLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        organisation ? `Organisation: ${organisation}` : null,
        `Inquiry type: ${topicLabels[topic] || "Other"}`,
        subjectLine ? `Subject: ${subjectLine}` : null
      ].filter((line) => line !== null);
      const body = [...headerLines, "", message].join("\n");
      const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;

      if (success) {
        success.hidden = false;
        success.focus({ preventScroll: false });
      }
      showToast("Your email app is opening. Press send to reach us.");
      window.setTimeout(() => {
        window.location.href = mailto;
      }, 250);
    });

    contactForm.addEventListener("input", () => {
      if (error) error.hidden = true;
      if (success) success.hidden = true;
    });
  }

  /* ---------- Copy email ---------- */
  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      const email = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        button.textContent = "Copied";
        showToast(`${email} copied to clipboard.`);
      } catch (error) {
        const input = document.createElement("textarea");
        input.value = email;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.append(input);
        input.select();
        document.execCommand("copy");
        input.remove();
        button.textContent = "Copied";
        showToast(`${email} copied to clipboard.`);
      }
      window.setTimeout(() => {
        button.textContent = "Copy email";
      }, 2500);
    });
  });

  /* ---------- Footer year (keeps current automatically) ---------- */
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
  cleanups.push(() => {
    window.removeEventListener("hashchange", openHashedDetails);
    body.style.overflow = "";
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}
