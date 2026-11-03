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
      const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
    updateHeader();
      window.addEventListener("scroll", updateHeader, { passive: true });
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

  /* ---------- Programme filtering ---------- */
  const programmeGrid = document.querySelector("[data-programme-grid]");
  if (programmeGrid) {
    const filterButtons = document.querySelectorAll("[data-filter]");
    const programmeCards = Array.from(programmeGrid.querySelectorAll("[data-programme-card]"));
    const countLabel = document.querySelector("[data-filter-count]");
    const emptyState = document.querySelector("[data-filter-empty]");

    const filterProgrammes = (filter) => {
      let visible = 0;
      programmeCards.forEach((card) => {
        const show =
          filter === "all" ||
          card.dataset.state === filter ||
          card.dataset.type === filter;
        card.hidden = !show;
        if (show) {
          visible += 1;
          card.classList.add("is-visible");
        }
      });
      filterButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
      });
      if (countLabel) {
        countLabel.textContent = `Showing ${visible} ${visible === 1 ? "opportunity" : "opportunities"}`;
      }
      if (emptyState) emptyState.hidden = visible !== 0;
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => filterProgrammes(button.dataset.filter));
    });
  }

  /* ---------- Programme data & dialog ---------- */
  const programmes = {
    fellowship: {
      title: "AfriYouth Research Fellowship",
      tags: ["Fellowship", "Cohort 01 · 2027", "Applications open"],
      lead: "A 12-week, practice-led fellowship for early-career researchers who want to move beyond the report — into policy, programmes and public conversation.",
      do: [
        "Frame a research question with real decision-making value",
        "Learn participatory methods and evidence synthesis",
        "Work with a mentor on a live policy or programme challenge",
        "Turn your findings into a brief, a story and a practical ask"
      ],
      who: "Early-career researchers, recent graduates, youth researchers and practitioners aged 18–30 who are curious about how evidence can influence public decisions.",
      details: [
        "Duration · 12 weeks",
        "Format · Hybrid, Kigali",
        "Commitment · 8–10 hours per week",
        "Cost · Free to participate",
        "Cohort begins · April 2027"
      ],
      gain: "A stronger research practice, a public-facing evidence product, a peer network and a clearer route from evidence to influence.",
      applyLabel: "Start your application",
      applyHref: "/contact?topic=programme&programme=research-fellowship"
    },
    policy: {
      title: "Policy Innovation Lab",
      tags: ["Policy lab", "Cohort 01 · 2027", "Applications open"],
      lead: "An eight-week lab for young policy actors working on a live public challenge, with mentorship, systems tools and direct access to decision-makers.",
      do: [
        "Work in a small team on a real policy challenge",
        "Map the system, stakeholders and decision points",
        "Develop a practical policy option with users",
        "Present recommendations in a decision-maker forum"
      ],
      who: "Young policy analysts, civil servants, advocates and civic technologists aged 18–32 who want to move from critique to practical influence.",
      details: [
        "Duration · 8 weeks",
        "Format · Hybrid",
        "Commitment · 6–8 hours per week",
        "Cost · Free to participate",
        "Cohort begins · May 2027"
      ],
      gain: "Hands-on policy design experience, a stronger systems lens, a network across sectors and a practical policy product to take forward.",
      applyLabel: "Apply to the policy lab",
      applyHref: "/contact?topic=programme&programme=policy-lab"
    },
    venture: {
      title: "Youth Venture Studio",
      tags: ["Venture studio", "Cohort 01", "Coming soon"],
      lead: "A 16-week studio for young founders building solutions in climate, agriculture, health and education. We help good ideas become durable ventures.",
      do: [
        "Stress-test your problem, customer and business model",
        "Prototype with real users and early partners",
        "Work with founders, operators and sector mentors",
        "Prepare for a public demo and follow-on support"
      ],
      who: "Early-stage founders and founding teams aged 18–35, with an idea or working prototype and a clear problem they are committed to solving.",
      details: [
        "Duration · 16 weeks",
        "Format · Kigali, with online sessions",
        "Team · 2–4 founders",
        "Stage · Idea to early traction",
        "Applications · Opening soon"
      ],
      gain: "A tested model, a sharper pitch, a founder community and a route to mentors, partners and potential funders.",
      applyLabel: "Join the interest list",
      applyHref: "/contact?topic=programme&programme=venture-studio"
    },
    design: {
      title: "HCD Design Sprint",
      tags: ["Design sprint", "Rolling intake", "Remote + Kigali"],
      lead: "A six-week sprint to understand a service challenge, prototype with the people who use it and leave with a tested solution and a clear path forward.",
      do: [
        "Run discovery and synthesis with real users",
        "Create a service blueprint of the current experience",
        "Co-design and test two or three prototypes",
        "Leave with a tested solution and a scale plan"
      ],
      who: "Project teams, social enterprises, programme teams and young designers or researchers who want practical experience applying human-centred design.",
      details: [
        "Duration · 6 weeks",
        "Format · Remote + Kigali",
        "Intake · Rolling, with the next cohort in March 2027",
        "Team · Small multidisciplinary teams",
        "Cost · Free for selected teams"
      ],
      gain: "A tangible prototype, user evidence, a design toolkit and the confidence to keep designing with people rather than guessing for them.",
      applyLabel: "Register your interest",
      applyHref: "/contact?topic=programme&programme=design-sprint"
    },
    futures: {
      title: "Futures Academy",
      tags: ["Futures learning", "Cohort 01", "Waitlist open"],
      lead: "A four-week introduction to strategic foresight for young thinkers who want to see further, challenge assumptions and shape what comes next.",
      do: [
        "Explore signals, trends and drivers of change",
        "Build scenarios for a challenge you care about",
        "Facilitate a youth futures conversation",
        "Translate foresight into a practical agenda"
      ],
      who: "Curious young people, organisers, researchers, designers and policy actors aged 18–30 who want a structured way to think about long-term change.",
      details: [
        "Duration · 4 weeks",
        "Format · Online",
        "Time · Two sessions per week",
        "Cost · Free to participate",
        "First cohort · 2027"
      ],
      gain: "Foresight methods you can use immediately, a futures project, and a community of peers thinking beyond the next news cycle.",
      applyLabel: "Join the waitlist",
      applyHref: "/contact?topic=programme&programme=futures-academy"
    },
    mel: {
      title: "MEL for Impact Clinic",
      tags: ["For organisations", "Tailored clinic", "Open for enquiries"],
      lead: "A practical four-day clinic for teams who want monitoring, evaluation and learning to inform real decisions — not just satisfy a reporting requirement.",
      do: [
        "Interrogate the questions your measurement should answer",
        "Map your current data and learning loops",
        "Design a lean, useful MEL framework",
        "Build a practical learning rhythm for your team"
      ],
      who: "Programme teams, funders, networks and public institutions who want a stronger link between what they measure and the decisions they make.",
      details: [
        "Duration · 4 days",
        "Format · Tailored, on-site or virtual",
        "Group · Up to 18 participants",
        "Cost · Quoted per engagement",
        "Timing · Enquire anytime"
      ],
      gain: "A fit-for-purpose learning framework, shared clarity across the team and practical habits for using evidence as the work unfolds.",
      applyLabel: "Enquire about the clinic",
      applyHref: "/contact?topic=commission&service=mel-clinic"
    }
  };

  const programmeModal = document.getElementById("programme-modal");
  if (programmeModal) {
    let programmeOpener = null;

    const fillList = (list, items) => {
      if (!list) return;
      list.replaceChildren();
      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.append(li);
      });
    };

    const openProgramme = (id, opener) => {
      const data = programmes[id];
      if (!data) return;
      programmeOpener = opener;
      programmeModal.querySelector("[data-modal-title]").textContent = data.title;
      programmeModal.querySelector("[data-modal-lead]").textContent = data.lead;
      programmeModal.querySelector("[data-modal-who]").textContent = data.who;
      programmeModal.querySelector("[data-modal-gain]").textContent = data.gain;
      const meta = programmeModal.querySelector("[data-modal-meta]");
      meta.replaceChildren();
      data.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.className = "chip";
        span.textContent = tag;
        meta.append(span);
      });
      fillList(programmeModal.querySelector("[data-modal-do]"), data.do);
      fillList(programmeModal.querySelector("[data-modal-details]"), data.details);
      const apply = programmeModal.querySelector("[data-modal-apply]");
      apply.href = data.applyHref;
      apply.innerHTML = `${data.applyLabel} <span class="btn__icon" aria-hidden="true">↗</span>`;
      programmeModal.showModal();
      body.style.overflow = "hidden";
      programmeModal.querySelector("[data-modal-close]")?.focus();
    };

    document.querySelectorAll("button[data-programme]").forEach((button) => {
      button.addEventListener("click", () => openProgramme(button.dataset.programme, button));
    });

    programmeModal.querySelector("[data-modal-close]")?.addEventListener("click", () => {
      programmeModal.close();
    });
    programmeModal.addEventListener("click", (event) => {
      if (event.target === programmeModal) programmeModal.close();
    });
    programmeModal.addEventListener("close", () => {
      body.style.overflow = "";
      programmeOpener?.focus();
    });
  }

  /* ---------- Insight filtering ---------- */
  const resourceGrid = document.querySelector("[data-resource-grid]");
  if (resourceGrid) {
    const resourceButtons = document.querySelectorAll("[data-resource-filter]");
    const cards = Array.from(resourceGrid.querySelectorAll("[data-category]"));
    const countLabel = document.querySelector("[data-resource-count]");
    const empty = document.querySelector("[data-resource-empty]");

    const filterResources = (filter) => {
      let visible = 0;
      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.hidden = !show;
        if (show) {
          visible += 1;
          card.classList.add("is-visible");
        }
      });
      resourceButtons.forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.resourceFilter === filter)
        );
      });
      if (countLabel) {
        countLabel.textContent = `Showing ${visible} ${visible === 1 ? "resource" : "resources"}`;
      }
      if (empty) empty.hidden = visible !== 0;
    };

    resourceButtons.forEach((button) => {
      button.addEventListener("click", () => filterResources(button.dataset.resourceFilter));
    });
  }

  /* ---------- Insight reader ---------- */
  const insights = {
    state: {
      category: "Field report",
      read: "12 min read",
      title: "The state of youth innovation in Africa",
      lead: "A snapshot of where youth innovation stands in Africa — and where the next openings lie for young people, partners and institutions.",
      body: [
        "This field scan brings together desk research, conversations and signals from across the continent. It does not claim to be exhaustive. It is a starting point for better questions.",
        "The strongest signal is not a shortage of ideas. It is a shortage of infrastructure to help those ideas survive contact with institutions. Young innovators are building in the gaps — often with resourcefulness that formal systems struggle to recognise.",
        "Three openings stand out. First, make youth-led research a normal part of programme design. Second, shift funding from one-off pilots toward patient, flexible capital. Third, give young people real governance power, not only advisory roles.",
        "The opportunity for partners is clear: move earlier, share risk and invest in the connective tissue between evidence, policy, design and enterprise. That is where durable change is built."
      ]
    },
    "future-work": {
      category: "Foresight",
      read: "9 min read",
      title: "Why the future of work needs youth at the design table",
      lead: "The jobs young Africans will hold in 2035 don’t exist yet. What changes if we design for work — not just train for it?",
      body: [
        "Most conversations about the future of work begin with a skills gap. Very few begin with a design question: what kind of work do we want young people to be able to do?",
        "Across the continent, young people are already improvising the answer. They are building platforms, cooperatives and new services in the gaps left by formal systems. Too often, these innovations are treated as side projects rather than evidence of how work itself is changing.",
        "A youth-centred approach asks young people to help define the problem, not just prepare for the solution. It means involving them in the design of training, enterprise support and labour policy — with real authority, not a seat at the edge of the table.",
        "The practical shift is modest but consequential: fund youth-led research on working lives; put young people on the governance of skills programmes; and measure whether work is not only available, but decent, secure and meaningful."
      ]
    },
    "evidence-policy": {
      category: "Policy",
      read: "6 min read",
      title: "From evidence to a seat at the table",
      lead: "Good research rarely changes a decision on its own. A practical look at the relational work of evidence-informed policy.",
      body: [
        "The research-to-policy pipeline is a useful metaphor and a misleading one. Evidence does not travel neatly from a report into a decision. It moves through relationships, timing and the questions decision-makers are already asking.",
        "That means the work of influence begins earlier than the final report. It starts with agreeing on the question, understanding the decision calendar and identifying the people who will have to defend the choice.",
        "Young researchers are often excluded from this relational layer. They are asked to collect data, not to hold the relationships that make data useful. Changing that is one of the most direct ways to strengthen both the evidence and the decision.",
        "A practical test: for every research project, name the decision it is meant to inform, the person who owns that decision and the moment it will be made. If those are unclear, the report is not the problem."
      ]
    },
    "design-with": {
      category: "Human-centred design",
      read: "5 min read",
      title: "Designing with, not for",
      lead: "Participation is not a workshop. Three shifts that turn co-design from a photo opportunity into shared decision-making.",
      body: [
        "Co-design is in danger of becoming a ritual. A room is booked, sticky notes are distributed, a photograph is taken. Later, the real decisions are made somewhere else.",
        "The first shift is power: decide up front what participants can actually influence. If the answer is nothing, do not call it co-design.",
        "The second shift is incentives: compensate people for their time, make sessions accessible and go to where people already are. Convenience for the organisation is not the same as inclusion.",
        "The third shift is time: keep people involved beyond the workshop. Co-design is not an event; it is a relationship that continues through prototyping, testing and delivery."
      ]
    },
    "youth-research": {
      category: "Research",
      read: "7 min read",
      title: "The case for youth-led research",
      lead: "What becomes visible when young people hold the research questions — and what institutions gain when they listen.",
      body: [
        "Youth-led research is often framed as a capacity-building activity. That framing undersells it. Young researchers can see dynamics that outsiders miss, ask questions that adults do not think to ask and access spaces that are closed to formal institutions.",
        "Proximity is not the same as rigour. Youth-led research still needs method, supervision and ethical care. But rigour improves when the people closest to a problem help define what counts as evidence.",
        "The biggest barrier is not capability. It is trust, payment and time. Institutions often expect young researchers to work for exposure, on short timelines, with little decision-making power.",
        "The upside is worth the redesign: stronger data, more credible recommendations and a generation of researchers who know how to move evidence into the spaces where decisions happen."
      ]
    },
    scale: {
      category: "Enterprise",
      read: "8 min read",
      title: "Beyond the pilot: routes to scale",
      lead: "Why so many promising youth-led ventures stall after the first grant — and the capabilities that help them grow.",
      body: [
        "The pilot is a comfortable place to hide. It is small enough to look successful, short enough to avoid structural problems and often funded in a way that masks how thin the business model really is.",
        "Moving beyond it requires three forms of clarity: a value proposition people will pay for, an operating model that does not depend on heroic effort, and a partnership strategy that can reach more people without losing quality.",
        "Youth-led ventures often face an additional barrier: funders reward novelty and storytelling, while growth requires boring things like procurement, data systems and governance. Both matter.",
        "The best support does not just write a cheque. It connects founders to customers, helps them negotiate contracts and creates the accountability that lets them make better decisions under pressure."
      ]
    },
    measurement: {
      category: "Impact & learning",
      read: "6 min read",
      title: "Measuring what matters",
      lead: "Five questions that help a learning system inform decisions instead of producing another report nobody reads.",
      body: [
        "Measurement is not the same as counting. A useful learning system begins with the decision it needs to inform, not the indicator that is easiest to collect.",
        "Question one: who will use this evidence, and when? Question two: what would change our mind? Question three: what are we assuming? Question four: what will different levels of progress look like? Question five: who is missing from this picture?",
        "The answers will not fit neatly into a funder’s template. That is fine. Create the simple shared dashboard first, then adapt the reporting around it rather than the other way round.",
        "Most importantly, build a rhythm: short check-ins, honest conversations and the authority to act on what you learn. Learning without permission to change is just documentation."
      ]
    }
  };

  const insightModal = document.getElementById("insight-modal");
  if (insightModal) {
    let insightOpener = null;

    const openInsight = (id, opener) => {
      const data = insights[id];
      if (!data) return;
      insightOpener = opener;
      insightModal.querySelector("[data-insight-title]").textContent = data.title;
      insightModal.querySelector("[data-insight-lead]").textContent = data.lead;
      const meta = insightModal.querySelector("[data-insight-meta]");
      meta.replaceChildren();
      [data.category, data.read, "AfriYouth field notes"].forEach((label) => {
        const span = document.createElement("span");
        span.className = "chip";
        span.textContent = label;
        meta.append(span);
      });
      const articleBody = insightModal.querySelector("[data-insight-body]");
      articleBody.replaceChildren();
      data.body.forEach((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        articleBody.append(p);
      });
      insightModal.showModal();
      body.style.overflow = "hidden";
      insightModal.querySelector("[data-insight-close]")?.focus();
    };

    document.querySelectorAll("button[data-insight]").forEach((button) => {
      button.addEventListener("click", () => openInsight(button.dataset.insight, button));
    });

    insightModal.querySelector("[data-insight-close]")?.addEventListener("click", () => {
      insightModal.close();
    });
    insightModal.addEventListener("click", (event) => {
      if (event.target === insightModal) insightModal.close();
    });
    insightModal.addEventListener("close", () => {
      body.style.overflow = "";
      insightOpener?.focus();
    });
  }

  /* ---------- Contact form ---------- */
  const contactForm = document.querySelector("[data-contact-form]");
  const contactEmail = "hello@afriyouthlabs.org";

  if (contactForm) {
    const topicSelect = contactForm.querySelector("#contact-topic");
    const success = document.querySelector("[data-form-success]");
    const error = document.querySelector("[data-form-error]");
    const validTopics = ["programme", "partner", "commission", "network", "media", "other"];
    const topicLabels = {
      programme: "Programme enquiry",
      partner: "Partnership enquiry",
      commission: "Commission enquiry",
      network: "Network enquiry",
      media: "Media & speaking",
      other: "General enquiry"
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
      const country = String(data.get("country") || "").trim();
      const topic = String(data.get("topic") || "other");
      const message = String(data.get("message") || "").trim();

      const subject = `[${topicLabels[topic] || "Website enquiry"}] from ${name}`;
      const lines = [
        `Name: ${name}`,
        `Email: ${email}`,
        organisation ? `Organisation: ${organisation}` : null,
        country ? `Country: ${country}` : null,
        `Enquiry type: ${topicLabels[topic] || "Website enquiry"}`,
        "",
        message
      ].filter(Boolean);
      const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

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
