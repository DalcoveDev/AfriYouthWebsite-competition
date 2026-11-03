/* ===========================================================================
   AfriYouth Innovation Labs — Figma design file builder
   ---------------------------------------------------------------------------
   Generates a complete, editable Figma design file from the Next.js site.
   Built for a free Figma plan: 3 pages maximum.

     • 01 · Cover + design system  (one page, stacked and labelled)
     • 02 · Desktop screens (1440): Home, About, Work, Programs, Insights, Contact
     • 03 · Mobile screens  (390):  the same six screens

   Every screen has a visible label above it, and all six screens of each
   size share one page, so the file stays inside the free 3-page limit.
   Run: Figma → Plugins → Development → Import plugin from manifest… → Run
   Fonts: Fraunces + Instrument Sans (free Google fonts, in Figma by default)
   =========================================================================== */

/* global figma */

const VERSION = "1.1.0";
const FREE_PAGE_LIMIT = 3;

const PAGE_NAMES = {
  combined: "01 · Cover + design system",
  desktop: "02 · Desktop screens · 1440",
  mobile: "03 · Mobile screens · 390",
};

/* Pages created by older versions of this plugin. They are removed on run so
   the rebuilt file does not exceed the free plan's 3-page limit. */
const GENERATED_PAGE_NAMES = [
  "00 · Cover",
  "01 · Design system",
  "01 · Cover + design system",
  "02 · Desktop screens · 1440",
  "03 · Mobile screens · 390",
];

/* ------------------------------- Tokens ---------------------------------- */

const C = {
  ink: "#0D251D",
  forest: "#173D2E",
  deep: "#081A14",
  paper: "#F2EDE2",
  cream: "#FBF8F0",
  white: "#FFFDF7",
  coral: "#E9592E",
  coralDeep: "#BC3B19",
  lime: "#DFF06A",
  limeSoft: "#EDF4B9",
  sky: "#B9D8E6",
  mint: "#C7DFCE",
  clay: "#E7BD94",
  muted: "#55645A",
};

const D = { w: 1440, g: 76, c: 1288, sec: 128 };
const M = { w: 390, g: 20, c: 350 };

const PALETTE = [
  ["Ink", C.ink, "body text · dark bands"],
  ["Forest", C.forest, "feature cards"],
  ["Deep", C.deep, "footer"],
  ["Paper", C.paper, "page background"],
  ["Cream", C.cream, "alternating bands"],
  ["White", C.white, "cards / input fills"],
  ["Coral", C.coral, "accent · CTA band"],
  ["Coral deep", C.coralDeep, "links · small accents on light"],
  ["Lime", C.lime, "highlight · stats"],
  ["Lime soft", C.limeSoft, "soft tint"],
  ["Sky", C.sky, "programme tint"],
  ["Mint", C.mint, "image tint"],
  ["Clay", C.clay, "image tint"],
  ["Muted", C.muted, "secondary text"],
];

/* -------------------------------- Copy ----------------------------------- */

const NAV = [
  { label: "About", href: "/about" },
  { label: "Our work", href: "/work" },
  { label: "Programs", href: "/programs" },
  { label: "Insights", href: "/insights" },
];

const DISCIPLINES = [
  "Research & evidence",
  "Policy & systems",
  "Human-centred design",
  "Entrepreneurship",
  "Strategic foresight",
  "Impact & learning",
];

const SERVICES = [
  {
    n: "01",
    title: "Research & evidence",
    desc: "Rigorous, locally grounded knowledge that makes complex problems legible — and actionable.",
    tags: ["Applied research", "Evidence synthesis", "Data stories"],
  },
  {
    n: "02",
    title: "Policy & systems",
    desc: "Practical policy options, coalitions and implementation pathways that move evidence into public decisions.",
    tags: ["Policy analysis", "Systems mapping", "Coalitions"],
  },
  {
    n: "03",
    title: "Human-centred design",
    desc: "Services, programmes and products co-designed with the people who use them — and the people who deliver them.",
    tags: ["Co-design", "Service design", "Prototyping"],
  },
  {
    n: "04",
    title: "Entrepreneurship & ventures",
    desc: "Support for young founders to test, build and scale ventures that solve real problems with durable models.",
    tags: ["Venture design", "Validation", "Growth support"],
  },
  {
    n: "05",
    title: "Strategic foresight",
    desc: "Structured ways to anticipate change, navigate uncertainty and make better long-term decisions.",
    tags: ["Scenario building", "Trend analysis", "Visioning"],
  },
  {
    n: "06",
    title: "Impact & learning",
    desc: "Measurement and learning systems that help organisations understand what changed, for whom and why.",
    tags: ["MEL design", "Learning loops", "Capability"],
  },
];

const PROGRAMMES = [
  {
    status: "Applications open",
    tone: "lime",
    index: "01",
    type: "Fellowship · Cohort 01",
    name: "AfriYouth Research Fellowship",
    desc: "A 12-week learning lab for early-career researchers ready to turn evidence into policy, practice and public conversation.",
    meta: [["Duration", "12 weeks"], ["Format", "Hybrid · Kigali"], ["Who", "Ages 18–30"]],
    deadline: "30 January 2027",
    note: "Application deadline",
    fill: C.forest,
    dark: true,
  },
  {
    status: "Applications open",
    tone: "ink",
    index: "02",
    type: "Policy Lab · Cohort 01",
    name: "Policy Innovation Lab",
    desc: "An eight-week lab for young policy actors working on a live public challenge alongside mentors and decision-makers.",
    meta: [["Duration", "8 weeks"], ["Format", "Hybrid"], ["Who", "Ages 18–32"]],
    deadline: "15 February 2027",
    note: "Application deadline",
    fill: C.coral,
    dark: false,
  },
  {
    status: "Coming soon",
    tone: "ink",
    index: "03",
    type: "Venture Studio · Cohort 01",
    name: "Youth Venture Studio",
    desc: "A 16-week studio for young founders building solutions in climate, agriculture, health and education.",
    meta: [["Duration", "16 weeks"], ["Format", "Kigali"], ["Who", "Ages 18–35"]],
    deadline: "Applications soon",
    note: "Join the interest list",
    fill: C.lime,
    dark: false,
  },
  {
    status: "Rolling intake",
    tone: "ink",
    index: "04",
    type: "Design Sprint · Rolling",
    name: "HCD Design Sprint",
    desc: "A six-week sprint to understand a service challenge, prototype with users and leave with a tested solution.",
    meta: [["Duration", "6 weeks"], ["Format", "Remote + Kigali"], ["Who", "Project teams"]],
    deadline: "March 2027",
    note: "Next cohort",
    fill: C.sky,
    dark: false,
  },
  {
    status: "Waitlist open",
    tone: "ink",
    index: "05",
    type: "Futures Academy · Cohort 01",
    name: "Futures Academy",
    desc: "A four-week introduction to strategic foresight for young thinkers who want to shape what comes next.",
    meta: [["Duration", "4 weeks"], ["Format", "Online"], ["Who", "Ages 18–30"]],
    deadline: "Waitlist open",
    note: "First cohort announced soon",
    fill: C.cream,
    dark: false,
  },
  {
    status: "Open for enquiries",
    tone: "lime",
    index: "06",
    type: "For organisations · Clinic",
    name: "MEL for Impact Clinic",
    desc: "A practical four-day clinic for teams who want measurement to inform decisions, not just satisfy reporting.",
    meta: [["Duration", "4 days"], ["Format", "Tailored"], ["Who", "Teams"]],
    deadline: "Enquire anytime",
    note: "Designed with your team",
    fill: C.paper,
    dark: false,
  },
];

const RESOURCES = [
  {
    cat: "Foresight",
    title: "Why the future of work needs youth at the design table.",
    desc: "The jobs young Africans will hold in 2035 don’t exist yet. What changes if we design for work — not just train for it?",
    meta: "9 min read · Field note",
  },
  {
    cat: "Policy",
    title: "From evidence to a seat at the table.",
    desc: "What it actually takes to move a research finding into a public decision — and who has to be in the room.",
    meta: "6 min read",
  },
  {
    cat: "Design",
    title: "Designing with, not for.",
    desc: "Three habits that turn consultation into co-authorship, from the first workshop to the final service.",
    meta: "5 min read",
  },
  {
    cat: "Research",
    title: "The case for youth-led research.",
    desc: "Young people ask different questions. Here is what changes when they lead the study, not just the survey.",
    meta: "8 min read",
  },
  {
    cat: "Enterprise",
    title: "Beyond the pilot: routes to scale.",
    desc: "Why promising ventures stall after the first cohort, and the support that helps them hold.",
    meta: "7 min read",
  },
  {
    cat: "Impact",
    title: "Measuring what matters.",
    desc: "A practical frame for learning what changed, for whom, and what to do differently next time.",
    meta: "7 min read",
  },
];

const VALUES = [
  ["01", "Youth empowerment", "Young people are co-authors of the work, not the subjects of it."],
  ["02", "Human-centred design", "We design with the people who live the consequences."],
  ["03", "Innovation with intent", "New approaches need rigour, imagination and the courage to be wrong in public."],
  ["04", "Leadership that multiplies", "We grow the confidence, judgement and networks of the next generation."],
  ["05", "Sustainability by design", "We build for the long term — in the environment, the institutions and the team."],
  ["06", "Global impact, local roots", "Local questions, continental relevance, global ambition."],
];

const STEPS = [
  ["01", "Listen", "We begin with people, context and the evidence that already exists. No assumptions smuggled in as facts."],
  ["02", "Frame", "We agree on the real question, the decision it needs to inform and the measures of progress."],
  ["03", "Prototype", "We test options with users and decision-makers, learning quickly before investing at scale."],
  ["04", "Influence", "We translate findings into tools, relationships and moments that can move a decision."],
  ["05", "Learn", "We build feedback loops and capability so the work keeps improving after we leave."],
];

const FAQS = [
  ["Do I need a university degree to apply?", "For most programmes, no. We care more about how you think, what you’ve done and the question you want to explore."],
  ["Is there a participation fee?", "No. Our open programmes are free to participate in. Any stipend, travel support or organisational fee is stated in the programme details."],
  ["Can I apply if I don’t live in Rwanda?", "Yes. We work across Africa. Most programmes are hybrid or online, with in-person moments where they add value."],
  ["Can I apply to more than one programme?", "You can, but we recommend choosing the one closest to where you are now. Ask us and we’ll help you find the best fit."],
  ["Do you offer accessibility or care accommodations?", "Yes. Tell us what you need during the application or once you join, and we’ll work with you to make it possible."],
  ["Can our organisation co-design a programme?", "Yes. We design custom labs, clinics and learning experiences with partners. Start a conversation with our team."],
];

const SECTORS = [
  "Development partners",
  "Public institutions",
  "Universities & research networks",
  "Foundations & funders",
  "Youth networks",
  "Private sector",
];

/* ----------------------------- Colour utils ------------------------------ */

function rgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
  };
}

function solid(hex, opacity = 1) {
  return { type: "SOLID", color: rgb(hex), opacity };
}

/* -------------------------------- Fonts ---------------------------------- */

const FONT_CACHE = {};

function fkey(kind, weight, italic) {
  return kind + "|" + weight + (italic ? "|italic" : "");
}

function candidates(kind, weight, italic) {
  if (kind === "display") {
    if (italic) {
      return weight === "medium"
        ? ["Medium Italic", "Italic", "SemiBold Italic"]
        : ["Italic", "Light Italic", "Regular Italic"];
    }
    if (weight === "medium") return ["Medium", "Regular", "SemiBold"];
    if (weight === "semibold") return ["SemiBold", "Medium", "Regular"];
    if (weight === "bold") return ["Bold", "SemiBold", "Medium"];
    return ["Regular", "Light", "Medium"];
  }
  if (italic) return ["Italic", "Regular Italic"];
  if (weight === "bold") return ["Bold", "SemiBold", "Medium"];
  if (weight === "semibold") return ["SemiBold", "Medium", "Bold"];
  if (weight === "medium") return ["Medium", "Regular"];
  return ["Regular", "Medium"];
}

function interStyle(weight, italic) {
  if (italic) return "Italic";
  if (weight === "bold") return "Bold";
  if (weight === "semibold") return "Semi Bold";
  if (weight === "medium") return "Medium";
  return "Regular";
}

async function loadOne(kind, weight, italic) {
  const family = kind === "display" ? "Fraunces" : "Instrument Sans";
  for (const style of candidates(kind, weight, italic)) {
    try {
      const fontName = { family, style };
      await figma.loadFontAsync(fontName);
      return fontName;
    } catch (e) {
      /* try next style */
    }
  }
  const fallback = { family: "Inter", style: interStyle(weight, italic) };
  await figma.loadFontAsync(fallback);
  return fallback;
}

async function loadFonts() {
  const jobs = [
    ["display", "regular", false],
    ["display", "medium", false],
    ["display", "semibold", false],
    ["display", "regular", true],
    ["display", "medium", true],
    ["body", "regular", false],
    ["body", "medium", false],
    ["body", "semibold", false],
    ["body", "bold", false],
  ];
  for (const [kind, weight, italic] of jobs) {
    FONT_CACHE[fkey(kind, weight, italic)] = await loadOne(kind, weight, italic);
  }
}

function pickFont(kind, weight, italic) {
  const key = fkey(kind, weight || "regular", !!italic);
  const font = FONT_CACHE[key];
  if (!font) throw new Error("Font not loaded: " + key);
  return font;
}

/* ------------------------------ Primitives ------------------------------- */

function mkFrame(o) {
  const opts = o || {};
  const dir = opts.dir || "VERTICAL";
  const w = opts.w;
  const h = opts.h;

  if (dir !== "NONE" && w === undefined && h === undefined) {
    throw new Error("Frame needs a width or height: " + (opts.name || "unnamed"));
  }

  const f = figma.createFrame();
  f.name = opts.name || "Frame";
  f.fills = [];
  f.clipsContent = !!opts.clip;
  f.layoutMode = dir;

  if (dir === "NONE") {
    f.resize(w || 100, h || 100);
  } else {
    f.primaryAxisSizingMode = "FIXED";
    f.counterAxisSizingMode = "FIXED";
    f.resize(w || 120, h || 60);

    if (dir === "VERTICAL") {
      if (h === undefined) f.primaryAxisSizingMode = "AUTO";
      if (w === undefined) f.counterAxisSizingMode = "AUTO";
    } else {
      if (w === undefined) f.primaryAxisSizingMode = "AUTO";
      if (h === undefined) f.counterAxisSizingMode = "AUTO";
    }

    f.itemSpacing = opts.gap || 0;
    f.primaryAxisAlignItems = opts.justify || "MIN";
    f.counterAxisAlignItems = opts.align || "MIN";
    f.paddingTop = opts.pt || 0;
    f.paddingRight = opts.pr || 0;
    f.paddingBottom = opts.pb || 0;
    f.paddingLeft = opts.pl || 0;
    if (opts.wrap) f.layoutWrap = "WRAP";
  }

  if (opts.fill) {
    f.fills = [solid(opts.fill, opts.fillOpacity === undefined ? 1 : opts.fillOpacity)];
  }
  if (opts.radius !== undefined) f.cornerRadius = opts.radius;
  if (opts.radiusTop !== undefined) {
    f.topLeftRadius = opts.radiusTop;
    f.topRightRadius = opts.radiusTop;
    f.bottomLeftRadius = opts.radius || 0;
    f.bottomRightRadius = opts.radius || 0;
  }
  if (opts.stroke) {
    f.strokes = [solid(opts.stroke, opts.strokeOpacity === undefined ? 1 : opts.strokeOpacity)];
    f.strokeWeight = opts.strokeWeight || 1;
    f.strokeAlign = "INSIDE";
  }
  return f;
}

function mkText(str, o) {
  const opts = o || {};
  const t = figma.createText();
  t.fontName = pickFont(opts.family || "body", opts.weight || "regular", !!opts.italic);
  t.fontSize = opts.size || 17;
  t.lineHeight = { unit: "PIXELS", value: Math.max(1, opts.lh || Math.round((opts.size || 17) * 1.45)) };
  t.letterSpacing = { unit: "PIXELS", value: opts.ls || 0 };
  t.fills = [solid(opts.color || C.ink, opts.opacity === undefined ? 1 : opts.opacity)];
  if (opts.align) t.textAlignHorizontal = opts.align;
  t.characters = str;

  if (opts.width) {
    t.textAutoResize = "HEIGHT";
    t.resize(opts.width, 10);
  } else {
    t.textAutoResize = "WIDTH_AND_HEIGHT";
  }
  t.name = opts.name || "Text / " + String(str).slice(0, 28);
  return t;
}

function mkRich(segments, o) {
  const opts = o || {};
  const baseWeight = opts.weight || "regular";
  const t = figma.createText();
  t.fontName = pickFont(opts.family || "display", baseWeight, !!opts.italic);
  t.fontSize = opts.size || 48;
  t.lineHeight = { unit: "PIXELS", value: Math.max(1, opts.lh || Math.round((opts.size || 48) * 1.05)) };
  t.letterSpacing = { unit: "PIXELS", value: opts.ls || 0 };
  t.fills = [solid(opts.color || C.ink)];
  if (opts.align) t.textAlignHorizontal = opts.align;

  t.characters = segments.map((s) => s.t).join("");
  t.textAutoResize = "HEIGHT";
  if (opts.width) t.resize(opts.width, 10);

  let index = 0;
  for (const seg of segments) {
    const end = index + seg.t.length;
    if (seg.italic || seg.weight || seg.family) {
      t.setRangeFontName(
        index,
        end,
        pickFont(seg.family || opts.family || "display", seg.weight || baseWeight, seg.italic || !!opts.italic)
      );
    }
    if (seg.color) t.setRangeFills(index, end, [solid(seg.color)]);
    if (seg.ls !== undefined) {
      t.setRangeLetterSpacing(index, end, { unit: "PIXELS", value: seg.ls });
    }
    index = end;
  }
  t.name = opts.name || "Display heading";
  return t;
}

function add(parent, child, o) {
  const opts = o || {};
  parent.appendChild(child);
  if (opts.fill || opts.fillV) {
    if (parent.layoutMode === "NONE") {
      throw new Error("Cannot use fill inside a frame without auto layout: " + parent.name);
    }
    if (opts.fill) child.layoutSizingHorizontal = "FILL";
    if (opts.fillV) child.layoutSizingVertical = "FILL";
  }
  return child;
}

function rule(w, color, opacity) {
  return mkFrame({
    name: "Rule",
    w,
    h: 1,
    fill: color || C.ink,
    fillOpacity: opacity === undefined ? 0.18 : opacity,
  });
}

function imageSlot(file, w, h, o) {
  const opts = o || {};
  const box = mkFrame({
    name: "Photo / " + file,
    dir: "NONE",
    w,
    h,
    radius: opts.radius || 0,
  });
  box.fills = [solid(opts.fill || C.mint)];
  box.strokes = [solid(opts.stroke || C.ink, opts.strokeOpacity === undefined ? 0.12 : opts.strokeOpacity)];
  box.strokeWeight = opts.strokeWeight || 1;
  box.clipsContent = true;

  if (opts.radiusTop) {
    box.topLeftRadius = opts.radiusTop;
    box.topRightRadius = opts.radiusTop;
    box.bottomLeftRadius = opts.radius || 0;
    box.bottomRightRadius = opts.radius || 0;
  }

  const tone = figma.createEllipse();
  tone.resize(Math.round(w * 0.8), Math.round(h * 0.7));
  tone.fills = [solid(opts.tone || C.cream, 0.28)];
  tone.x = Math.round(w * 0.38);
  tone.y = Math.round(-h * 0.16);
  box.appendChild(tone);

  const label = mkText("PHOTO · /assets/img/" + file, {
    size: 9,
    weight: "bold",
    ls: 0.8,
    color: opts.dark ? C.cream : C.ink,
    opacity: opts.dark ? 0.55 : 0.4,
    width: w - 32,
  });
  box.appendChild(label);
  label.x = 16;
  label.y = h - 24;

  return box;
}

function rings(size, color, opacity) {
  const box = mkFrame({ name: "Orbit rings", dir: "NONE", w: size, h: size });
  const specs = [
    [0, 1],
    [size * 0.16, 0.68],
    [size * 0.31, 0.38],
  ];
  for (const [inset, scale] of specs) {
    const d = size * scale;
    const e = figma.createEllipse();
    e.resize(d, d);
    e.x = inset;
    e.y = inset;
    e.fills = [];
    e.strokes = [solid(color || C.ink, opacity === undefined ? 0.18 : opacity)];
    e.strokeWeight = 1.5;
    box.appendChild(e);
  }
  return box;
}

function star(size, color, opacity) {
  return mkText("✦", {
    family: "display",
    size,
    color: color || C.ink,
    opacity: opacity === undefined ? 0.22 : opacity,
  });
}

/* ------------------------------- Atoms ----------------------------------- */

function eyebrow(label, o) {
  const opts = o || {};
  const row = mkFrame({
    name: "Eyebrow",
    dir: "HORIZONTAL",
    h: 16,
    gap: 10,
    align: "CENTER",
  });
  const dot = figma.createEllipse();
  dot.resize(7, 7);
  dot.fills = [solid(opts.dotColor || C.coral)];
  row.appendChild(dot);
  row.appendChild(
    mkText(String(label).toUpperCase(), {
      size: 11,
      weight: "bold",
      ls: 1.5,
      lh: 14,
      color: opts.light ? C.cream : opts.color || C.ink,
      name: "Eyebrow label",
    })
  );
  return row;
}

function btn(label, variant, o) {
  const opts = o || {};
  const styles = {
    primary: { fill: C.ink, color: C.cream },
    coral: { fill: C.coral, color: C.ink },
    light: { fill: C.cream, color: C.ink },
    outline: { fill: null, color: C.ink, stroke: C.ink, strokeOpacity: 0.24 },
    outlineLight: { fill: null, color: C.cream, stroke: C.cream, strokeOpacity: 0.3 },
  };
  const style = styles[variant] || styles.primary;
  const small = !!opts.small;
  const height = small ? 43 : opts.tall ? 58 : 52;
  const b = mkFrame({
    name: "Button / " + label,
    dir: "HORIZONTAL",
    h: height,
    gap: 10,
    align: "CENTER",
    justify: "CENTER",
    fill: style.fill,
    radius: 999,
    pt: 0,
    pb: 0,
    pl: small ? 18 : 24,
    pr: small ? 18 : 24,
    stroke: style.stroke,
    strokeOpacity: style.strokeOpacity,
  });
  if (!style.fill) b.fills = [];
  b.appendChild(
    mkText(label, {
      size: small ? 13 : 14,
      weight: "semibold",
      color: opts.color || style.color,
    })
  );
  if (opts.icon !== false) {
    const iconBg = mkFrame({
      name: "Icon",
      dir: "NONE",
      w: 26,
      h: 26,
      radius: 999,
      fill: variant === "primary" || variant === "outlineLight" ? C.cream : C.ink,
      fillOpacity: variant === "primary" || variant === "outlineLight" ? 0.14 : 0.08,
    });
    const glyph = mkText("↗", {
      size: 13,
      weight: "medium",
      color: opts.color || style.color,
      align: "CENTER",
      width: 26,
    });
    iconBg.appendChild(glyph);
    glyph.x = 0;
    glyph.y = 5;
    b.appendChild(iconBg);
  }
  return b;
}

function chip(label, tone, o) {
  const opts = o || {};
  const tones = {
    outline: { fill: null, color: C.ink, stroke: C.ink, strokeOpacity: 0.2 },
    light: { fill: null, color: C.cream, stroke: C.cream, strokeOpacity: 0.25 },
    lime: { fill: C.lime, color: C.ink },
    coral: { fill: C.coral, color: C.ink },
    cream: { fill: C.cream, color: C.ink, stroke: C.ink, strokeOpacity: 0.14 },
    ink: { fill: C.ink, color: C.cream },
  };
  const style = tones[tone] || tones.outline;
  const box = mkFrame({
    name: "Chip / " + label,
    dir: "HORIZONTAL",
    h: opts.small ? 26 : 30,
    gap: 6,
    align: "CENTER",
    pl: opts.small ? 10 : 12,
    pr: opts.small ? 10 : 12,
    radius: 999,
    fill: style.fill,
    stroke: style.stroke,
    strokeOpacity: style.strokeOpacity,
  });
  box.appendChild(
    mkText(String(label).toUpperCase(), {
      size: opts.small ? 9.5 : 10,
      weight: "semibold",
      ls: 0.6,
      color: style.color,
    })
  );
  return box;
}

function statusPill(label, tone) {
  const dotColor = tone === "lime" ? C.lime : tone === "ink" ? C.ink : C.coral;
  const dark = tone === "lime";
  const box = mkFrame({
    name: "Status / " + label,
    dir: "HORIZONTAL",
    h: 26,
    gap: 7,
    align: "CENTER",
    pl: 10,
    pr: 11,
    radius: 999,
    fill: dark ? C.lime : C.cream,
    fillOpacity: dark ? 1 : 0.9,
    stroke: C.ink,
    strokeOpacity: dark ? 0 : 0.12,
  });
  const dot = figma.createEllipse();
  dot.resize(6, 6);
  dot.fills = [solid(dotColor)];
  box.appendChild(dot);
  box.appendChild(
    mkText(label, {
      size: 10,
      weight: "semibold",
      ls: 0.3,
      color: C.ink,
    })
  );
  return box;
}

function textLink(label, color, size) {
  const row = mkFrame({
    name: "Link / " + label,
    dir: "HORIZONTAL",
    h: 22,
    gap: 7,
    align: "CENTER",
  });
  const t = mkText(label, {
    size: size || 13,
    weight: "semibold",
    color: color || C.coralDeep,
  });
  row.appendChild(t);
  row.appendChild(mkText("↗", { size: (size || 13) + 1, weight: "medium", color: color || C.coralDeep }));
  return row;
}

function brandMark(size, light) {
  const m = mkFrame({
    name: "Brand mark",
    dir: "NONE",
    w: size,
    h: size,
    fill: light ? C.cream : C.ink,
    radius: Math.round(size * 0.29),
  });
  const dot = size * 0.3;
  const quadrants = [
    [0.21, 0.21, C.sky],
    [0.49, 0.21, C.lime],
    [0.21, 0.49, light ? C.mint : C.cream],
    [0.49, 0.49, C.coral],
  ];
  for (const [x, y, color] of quadrants) {
    const e = figma.createEllipse();
    e.resize(dot, dot);
    e.x = size * x;
    e.y = size * y;
    e.fills = [solid(color)];
    m.appendChild(e);
  }
  const center = figma.createEllipse();
  center.resize(size * 0.18, size * 0.18);
  center.x = size * 0.41;
  center.y = size * 0.41;
  center.fills = [solid(light ? C.forest : C.ink)];
  m.appendChild(center);
  return m;
}

function brand(light, size) {
  const s = size || 41;
  const row = mkFrame({
    name: "Brand",
    dir: "HORIZONTAL",
    h: s,
    gap: 10,
    align: "CENTER",
  });
  row.appendChild(brandMark(s, light));
  const stack = mkFrame({ name: "Wordmark", w: 118, gap: 4 });
  stack.appendChild(
    mkText("AfriYouth", {
      family: "display",
      size: s * 0.52,
      weight: "medium",
      ls: -0.8,
      lh: s * 0.56,
      color: light ? C.cream : C.ink,
    })
  );
  stack.appendChild(
    mkText("INNOVATION LABS", {
      size: s * 0.22,
      weight: "bold",
      ls: 1.7,
      color: light ? C.cream : C.ink,
      opacity: light ? 0.7 : 0.85,
    })
  );
  row.appendChild(stack);
  return row;
}

function navItem(label, active, light) {
  const width = Math.max(44, label.length * 7.6);
  const box = mkFrame({ name: "Nav / " + label, w: width, gap: 6 });
  box.appendChild(
    mkText(label, {
      size: 13.5,
      weight: active ? "semibold" : "medium",
      color: light ? C.cream : C.ink,
    })
  );
  box.appendChild(
    mkFrame({
      name: active ? "Active underline" : "Underline space",
      w: width,
      h: 1.5,
      fill: active ? C.coral : C.paper,
      fillOpacity: active ? 1 : 0,
    })
  );
  return box;
}

/* --------------------------- Shared chrome ------------------------------- */

function announceBar() {
  const bar = mkFrame({
    name: "Announcement",
    w: D.w,
    h: 38,
    fill: C.ink,
    dir: "HORIZONTAL",
    justify: "CENTER",
    align: "CENTER",
    gap: 12,
    pl: D.g,
    pr: D.g,
  });
  const dot = figma.createEllipse();
  dot.resize(6, 6);
  dot.fills = [solid(C.lime)];
  bar.appendChild(dot);
  bar.appendChild(
    mkText("Applications open for the AfriYouth Research Fellowship, Cohort 01", {
      size: 12,
      color: C.cream,
      lh: 16,
    })
  );
  bar.appendChild(
    mkText("Explore ↗", { size: 12, weight: "semibold", color: C.lime })
  );
  return bar;
}

function siteHeader(active) {
  const header = mkFrame({
    name: "Header",
    w: D.w,
    h: 82,
    fill: C.paper,
    dir: "HORIZONTAL",
    justify: "SPACE_BETWEEN",
    align: "CENTER",
    pl: D.g,
    pr: D.g,
  });
  header.appendChild(brand(false, 41));

  const nav = mkFrame({
    name: "Primary nav",
    dir: "HORIZONTAL",
    h: 30,
    gap: 34,
    align: "CENTER",
  });
  for (const item of NAV) {
    nav.appendChild(navItem(item.label, active === item.label, false));
  }
  header.appendChild(nav);

  header.appendChild(btn("Let’s collaborate", "primary", { small: true }));
  return header;
}

function ctaBand(o) {
  const opts = o || {};
  const section = mkFrame({
    name: "Section / CTA band",
    w: D.w,
    fill: C.coral,
    pt: 104,
    pb: 104,
    pl: D.g,
    pr: D.g,
    clip: true,
  });

  const inner = mkFrame({
    name: "CTA inner",
    dir: "HORIZONTAL",
    w: D.c,
    gap: 60,
    justify: "SPACE_BETWEEN",
    align: "MAX",
  });

  const copy = mkFrame({ name: "CTA copy", w: 760, gap: 18 });
  copy.appendChild(eyebrow(opts.eyebrow || "Let’s make it move", { dotColor: C.ink }));
  copy.appendChild(
    mkRich([{ t: opts.title || "Have a problem worth solving?" }], {
      size: 74,
      lh: 68,
      ls: -3,
      width: 740,
      color: C.ink,
    })
  );
  copy.appendChild(
    mkText(
      opts.body ||
        "Tell us what you’re working on. We’ll come with questions, a multidisciplinary lens and a practical way forward.",
      { size: 16.5, lh: 25, color: C.ink, opacity: 0.78, width: 540 }
    )
  );

  const actions = mkFrame({
    name: "CTA actions",
    dir: "HORIZONTAL",
    h: 56,
    gap: 12,
    align: "CENTER",
  });
  actions.appendChild(btn(opts.primary || "Start a conversation", "primary"));
  actions.appendChild(btn(opts.secondary || "Find a program", "outline"));

  inner.appendChild(copy);
  inner.appendChild(actions);
  section.appendChild(inner);

  const orbit = rings(520, C.ink, 0.18);
  section.appendChild(orbit);
  orbit.layoutPositioning = "ABSOLUTE";
  orbit.x = 1090;
  orbit.y = 90;

  const spark = star(56, C.ink, 0.22);
  section.appendChild(spark);
  spark.layoutPositioning = "ABSOLUTE";
  spark.x = 1252;
  spark.y = 44;

  return section;
}

function footerBar() {
  const footer = mkFrame({
    name: "Footer",
    w: D.w,
    fill: C.deep,
    pt: 96,
    pb: 28,
    pl: D.g,
    pr: D.g,
    gap: 0,
  });

  const top = mkFrame({
    name: "Footer top",
    dir: "HORIZONTAL",
    w: D.c,
    gap: 120,
    align: "MIN",
  });

  const pitch = mkFrame({ name: "Footer pitch", w: 620, gap: 22 });
  pitch.appendChild(brand(true, 41));
  pitch.appendChild(
    mkRich([{ t: "The future is a team sport." }], {
      size: 50,
      lh: 50,
      ls: -1.8,
      width: 480,
      color: C.cream,
    })
  );
  pitch.appendChild(
    mkText(
      "We’re building a connected home for young people who refuse to accept the way things are — and the partners who want to back them.",
      { size: 15.5, lh: 24, color: C.cream, opacity: 0.64, width: 440 }
    )
  );
  pitch.appendChild(
    mkText("hello@afriyouthlabs.org", {
      family: "display",
      size: 30,
      italic: true,
      ls: -0.6,
      color: C.cream,
    })
  );

  const aside = mkFrame({ name: "Footer aside", w: 540, gap: 32 });
  const navCols = mkFrame({ name: "Footer nav", dir: "HORIZONTAL", w: 540, gap: 48 });
  const cols = [
    ["EXPLORE", ["About AfriYouth", "Our work", "Programs & opportunities", "Insights & resources"]],
    ["CONNECT", ["Join a program", "Partner with us", "Commission our work", "Media & speaking"]],
  ];
  for (const [title, links] of cols) {
    const col = mkFrame({ name: "Footer col / " + title, w: 210, gap: 10 });
    col.appendChild(
      mkText(title, { size: 10, weight: "bold", ls: 1.6, color: C.cream, opacity: 0.48 })
    );
    for (const link of links) {
      col.appendChild(
        mkText(link, { size: 13.5, color: C.cream, opacity: 0.82, lh: 20 })
      );
    }
    navCols.appendChild(col);
  }
  aside.appendChild(navCols);
  aside.appendChild(
    mkText("AfriYouth Innovation Labs\nKigali, Rwanda\nWorking across Africa and beyond", {
      size: 12.5,
      lh: 21,
      color: C.cream,
      opacity: 0.64,
      width: 300,
    })
  );

  top.appendChild(pitch);
  top.appendChild(aside);
  footer.appendChild(top);

  const spacer = mkFrame({ name: "Footer spacer", w: D.c, h: 56 });
  footer.appendChild(spacer);
  footer.appendChild(rule(D.c, C.cream, 0.18));

  const bottom = mkFrame({
    name: "Footer bottom",
    dir: "HORIZONTAL",
    w: D.c,
    gap: 40,
    justify: "SPACE_BETWEEN",
    align: "CENTER",
    pt: 22,
  });
  bottom.appendChild(
    mkText(
      "© 2026 AfriYouth Innovation Labs. A digital concept built for the AfriYouth Web Design Challenge.",
      { size: 11.5, color: C.cream, opacity: 0.5, width: 760 }
    )
  );
  bottom.appendChild(
    mkText("Back to top ↑", { size: 11.5, color: C.cream, opacity: 0.68 })
  );
  footer.appendChild(bottom);
  return footer;
}

/* --------------------------- Page scaffolding ---------------------------- */

function pageFrame(name, width) {
  return mkFrame({ name, w: width, fill: C.paper, gap: 0 });
}

function dSec(name, o) {
  const opts = o || {};
  return mkFrame({
    name,
    w: D.w,
    fill: opts.bg || C.paper,
    pt: opts.pt === undefined ? D.sec : opts.pt,
    pb: opts.pb === undefined ? D.sec : opts.pb,
    pl: D.g,
    pr: D.g,
    gap: opts.gap || 0,
    clip: !!opts.clip,
  });
}

function sectionHead(o) {
  const opts = o || {};
  const light = !!opts.light;
  const width = opts.width || D.c;
  const row = mkFrame({
    name: "Section head",
    dir: "HORIZONTAL",
    w: width,
    gap: 60,
    justify: "SPACE_BETWEEN",
    align: "MAX",
  });
  const left = mkFrame({ name: "Head copy", w: Math.round(width * 0.58), gap: 18 });
  left.appendChild(eyebrow(opts.eyebrow, { light }));
  const segments = Array.isArray(opts.title) ? opts.title : [{ t: opts.title }];
  left.appendChild(
    mkRich(segments, {
      size: opts.size || 66,
      lh: opts.lh || 61,
      ls: -2.6,
      width: Math.round(width * 0.55),
      color: light ? C.cream : C.ink,
    })
  );

  const right = mkFrame({ name: "Head side", w: Math.min(360, Math.round(width * 0.32)), gap: 18 });
  if (opts.body) {
    right.appendChild(
      mkText(opts.body, {
        size: 14.5,
        lh: 22,
        color: light ? C.cream : C.muted,
        opacity: light ? 0.7 : 1,
        width: Math.min(350, Math.round(width * 0.31)),
      })
    );
  }
  if (opts.link) {
    right.appendChild(textLink(opts.link, light ? C.lime : C.coralDeep));
  }
  row.appendChild(left);
  row.appendChild(right);
  return row;
}

function innerHero(o) {
  const opts = o || {};
  const section = dSec("Section / Page hero", { pt: 92, pb: 72, gap: 44, clip: true });
  const grid = mkFrame({
    name: "Hero grid",
    dir: "HORIZONTAL",
    w: D.c,
    gap: 80,
    justify: "SPACE_BETWEEN",
    align: "MAX",
  });

  const copy = mkFrame({ name: "Hero copy", w: 760, gap: 22 });
  copy.appendChild(eyebrow(opts.eyebrow));
  copy.appendChild(
    mkRich(opts.title, {
      size: 86,
      lh: 79,
      ls: -3.8,
      width: 760,
    })
  );

  const aside = mkFrame({ name: "Hero aside", w: 400, gap: 22 });
  aside.appendChild(
    mkText(opts.lede, { size: 18.5, lh: 28, color: C.muted, width: 400 })
  );
  if (opts.chips && opts.chips.length) {
    const chipRow = mkFrame({ name: "Chips", dir: "HORIZONTAL", w: 400, gap: 8, wrap: true });
    for (const label of opts.chips) chipRow.appendChild(chip(label, "outline"));
    aside.appendChild(chipRow);
  }

  grid.appendChild(copy);
  grid.appendChild(aside);
  section.appendChild(grid);

  if (opts.disciplines) {
    const row = mkFrame({ name: "Disciplines", dir: "HORIZONTAL", w: D.c, gap: 10, wrap: true, pt: 12 });
    for (const label of DISCIPLINES) row.appendChild(chip(label, "cream"));
    section.appendChild(row);
  }

  return section;
}

function serviceRow(item, width) {
  const w = width;
  const wrap = mkFrame({ name: "Service / " + item.title, w, gap: 0 });
  const row = mkFrame({
    name: "Row",
    dir: "HORIZONTAL",
    w,
    gap: 24,
    justify: "SPACE_BETWEEN",
    align: "CENTER",
    pt: 26,
    pb: 26,
  });
  row.appendChild(
    mkText(item.n, { size: 11.5, weight: "semibold", ls: 1, color: C.coralDeep })
  );
  row.appendChild(
    mkText(item.title, { family: "display", size: 25, lh: 27, ls: -0.8, width: 340 })
  );

  const desc = mkFrame({ name: "Description", w: 600, gap: 9 });
  desc.appendChild(mkText(item.desc, { size: 13.5, lh: 20, color: C.muted, width: 590 }));
  const tags = mkFrame({ name: "Tags", dir: "HORIZONTAL", w: 590, gap: 8, wrap: true });
  for (const tag of item.tags) tags.appendChild(chip(tag, "outline", { small: true }));
  desc.appendChild(tags);
  row.appendChild(desc);
  row.appendChild(mkText("↗", { size: 17, color: C.ink }));

  wrap.appendChild(row);
  wrap.appendChild(rule(w));
  return wrap;
}

function statCell(value, label, note, w, h) {
  const cell = mkFrame({
    name: "Stat / " + value,
    w,
    h,
    gap: 10,
    pt: 22,
    pr: 22,
    pb: 20,
    pl: 22,
    stroke: C.cream,
    strokeOpacity: 0.2,
  });
  cell.appendChild(
    mkText(value, {
      family: "display",
      size: 62,
      lh: 58,
      ls: -2,
      italic: true,
      color: C.lime,
    })
  );
  cell.appendChild(mkText(label, { size: 12.5, lh: 18, color: C.cream, opacity: 0.72, width: w - 60 }));
  cell.appendChild(
    mkText(note.toUpperCase(), { size: 9, weight: "semibold", ls: 1.1, color: C.cream, opacity: 0.5 })
  );
  return cell;
}

function faqList(width, count) {
  const list = mkFrame({ name: "FAQ list", w: width, gap: 0 });
  FAQS.slice(0, count || FAQS.length).forEach(([q]) => {
    const row = mkFrame({
      name: "FAQ / " + q,
      dir: "HORIZONTAL",
      w: width,
      gap: 24,
      justify: "SPACE_BETWEEN",
      align: "CENTER",
      pt: 20,
      pb: 20,
    });
    row.appendChild(
      mkText(q, { family: "display", size: 19, lh: 24, ls: -0.4, width: width - 44 })
    );
    row.appendChild(mkText("+", { size: 18, color: C.ink, opacity: 0.55 }));
    list.appendChild(row);
    list.appendChild(rule(width));
  });
  return list;
}

/* ------------------------------- Cover ----------------------------------- */

function coverPage() {
  const cover = mkFrame({
    name: "Cover / AfriYouth design file",
    dir: "NONE",
    w: 1440,
    h: 1024,
    fill: C.ink,
  });
  cover.clipsContent = true;

  const orbit = rings(760, C.cream, 0.14);
  cover.appendChild(orbit);
  orbit.x = 900;
  orbit.y = -120;

  const brandBlock = brand(true, 56);
  cover.appendChild(brandBlock);
  brandBlock.x = 76;
  brandBlock.y = 70;

  const tag = mkText("DESIGN FILE · V" + VERSION, {
    size: 11,
    weight: "bold",
    ls: 1.8,
    color: C.lime,
  });
  cover.appendChild(tag);
  tag.x = 78;
  tag.y = 268;

  const title = mkRich(
    [
      { t: "AfriYouth\nInnovation " },
      { t: "Labs", italic: true, color: C.coral },
    ],
    { size: 104, lh: 92, ls: -5, width: 1000, color: C.cream }
  );
  cover.appendChild(title);
  title.x = 76;
  title.y = 300;

  const sub = mkText(
    "A design system and 12 screen designs for the AfriYouth Innovation Labs website — research, policy, human-centred design, enterprise and foresight in motion.",
    { size: 18, lh: 28, color: C.cream, opacity: 0.66, width: 600 }
  );
  cover.appendChild(sub);
  sub.x = 78;
  sub.y = 620;

  const swatchY = 760;
  const swatchColors = [C.paper, C.cream, C.coral, C.lime, C.sky, C.mint, C.clay, C.forest];
  swatchColors.forEach((color, i) => {
    const sq = mkFrame({
      name: "Swatch / " + color,
      dir: "NONE",
      w: 72,
      h: 72,
      fill: color,
      radius: 10,
    });
    cover.appendChild(sq);
    sq.x = 78 + i * 82;
    sq.y = swatchY;
  });

  const metaLines = [
    ["SOURCE", "Next.js 15 · App Router"],
    ["TYPE", "Fraunces · Instrument Sans"],
    ["SCREENS", "6 desktop · 6 mobile"],
    ["PAGES", "3 · free plan friendly"],
    ["PREPARED", "November 2026"],
  ];
  metaLines.forEach(([key, value], i) => {
    const y = 620 + i * 48;
    const k = mkText(key, {
      size: 9,
      weight: "bold",
      ls: 1.4,
      color: C.cream,
      opacity: 0.42,
    });
    cover.appendChild(k);
    k.x = 1000;
    k.y = y;
    const v = mkText(value, { size: 13, color: C.cream, opacity: 0.86 });
    cover.appendChild(v);
    v.x = 1000;
    v.y = y + 16;
  });

  const note = mkText(
    "Photography is represented by labelled placeholders — swap in files from /public/assets/img.",
    { size: 10.5, color: C.cream, opacity: 0.4, width: 700 }
  );
  cover.appendChild(note);
  note.x = 78;
  note.y = 890;

  return cover;
}

/* --------------------------- Design system ------------------------------- */

function designSystemPage() {
  const page = mkFrame({
    name: "Design system / AfriYouth",
    w: 1600,
    fill: C.paper,
    pt: 76,
    pb: 96,
    pl: 76,
    pr: 76,
    gap: 76,
  });

  /* header */
  const head = mkFrame({ name: "DS / Header", w: 1448, gap: 20 });
  head.appendChild(brand(false, 48));
  head.appendChild(
    mkRich([{ t: "Design " }, { t: "system", italic: true, color: C.coral }], {
      size: 76,
      lh: 72,
      ls: -3,
      width: 1000,
    })
  );
  head.appendChild(
    mkText(
      "The visual language behind the site: an editorial field journal for systems change. Warm paper, deep green ink, coral accents and a lime highlighter — Fraunces for voice, Instrument Sans for clarity.",
      { size: 17, lh: 27, color: C.muted, width: 900 }
    )
  );
  page.appendChild(head);

  /* palette */
  const paletteSec = mkFrame({ name: "DS / Colour", w: 1448, gap: 24 });
  paletteSec.appendChild(
    mkText("01 · COLOUR", { size: 11, weight: "bold", ls: 1.8, color: C.coralDeep })
  );
  paletteSec.appendChild(
    mkText("Paper, ink and a confident accent.", {
      family: "display",
      size: 40,
      lh: 42,
      ls: -1.4,
      color: C.ink,
    })
  );
  const swatchGrid = mkFrame({ name: "Swatches", dir: "HORIZONTAL", w: 1448, gap: 16, wrap: true });
  for (const [name, hex, usage] of PALETTE) {
    const card = mkFrame({ name: "Swatch / " + name, w: 192, gap: 8 });
    const block = mkFrame({
      name: "Colour",
      dir: "NONE",
      w: 192,
      h: 104,
      fill: hex,
      radius: 14,
    });
    block.strokes = [solid(C.ink, 0.1)];
    block.strokeWeight = 1;
    card.appendChild(block);
    card.appendChild(mkText(name, { size: 12.5, weight: "semibold", color: C.ink }));
    card.appendChild(mkText(hex.toUpperCase(), { size: 10.5, color: C.muted, ls: 0.4 }));
    card.appendChild(
      mkText(usage, { size: 10, lh: 14, color: C.muted, opacity: 0.8, width: 180 })
    );
    swatchGrid.appendChild(card);
  }
  paletteSec.appendChild(swatchGrid);
  page.appendChild(paletteSec);

  /* type */
  const typeSec = mkFrame({ name: "DS / Typography", w: 1448, gap: 24 });
  typeSec.appendChild(
    mkText("02 · TYPOGRAPHY", { size: 11, weight: "bold", ls: 1.8, color: C.coralDeep })
  );
  typeSec.appendChild(
    mkText("Fraunces for voice. Instrument Sans for the work.", {
      family: "display",
      size: 40,
      lh: 42,
      ls: -1.4,
    })
  );

  const typeRows = [
    ["Display / H1", 78, "display", "regular", -3.2, 74, "Africa’s next chapter is youth-written."],
    ["Display / H2", 54, "display", "regular", -1.9, 53, "Six disciplines. One connected practice."],
    ["Display / H3", 30, "display", "regular", -0.8, 33, "There’s more than one way in."],
    ["Body / Lede", 20, "body", "regular", 0, 30, "We connect evidence, policy and enterprise to turn ideas into systems change."],
    ["Body / Default", 16, "body", "regular", 0, 25, "Rigorous, locally grounded knowledge that makes complex problems legible."],
    ["Label / Eyebrow", 11, "body", "bold", 1.5, 14, "RESEARCH · POLICY · DESIGN · ENTERPRISE"],
  ];
  for (const [name, size, family, weight, ls, lh, sample] of typeRows) {
    const row = mkFrame({
      name: "Type / " + name,
      dir: "HORIZONTAL",
      w: 1448,
      gap: 40,
      align: "CENTER",
      pt: 22,
      pb: 22,
    });
    const labelStack = mkFrame({ name: "Label", w: 210, gap: 4 });
    labelStack.appendChild(mkText(name, { size: 12, weight: "semibold", color: C.ink }));
    labelStack.appendChild(
      mkText(
        (family === "display" ? "Fraunces" : "Instrument Sans") + " · " + size + "px",
        { size: 10.5, color: C.muted }
      )
    );
    const sampleText = mkText(sample, {
      family,
      size,
      weight,
      lh,
      ls,
      width: 1150,
      color: family === "display" ? C.ink : C.muted,
    });
    row.appendChild(labelStack);
    row.appendChild(sampleText);
    row.strokes = [solid(C.ink, 0.14)];
    row.strokeWeight = 1;
    row.strokeAlign = "INSIDE";
    typeSec.appendChild(row);
  }
  page.appendChild(typeSec);

  /* components */
  const compSec = mkFrame({ name: "DS / Components", w: 1448, gap: 28 });
  compSec.appendChild(
    mkText("03 · COMPONENTS", { size: 11, weight: "bold", ls: 1.8, color: C.coralDeep })
  );
  compSec.appendChild(
    mkText("Buttons, chips and status.", { family: "display", size: 40, lh: 42, ls: -1.4 })
  );

  const btnRow = mkFrame({ name: "Buttons", dir: "HORIZONTAL", w: 1448, gap: 14, wrap: true });
  btnRow.appendChild(btn("Find your next opportunity", "primary"));
  btnRow.appendChild(btn("See how we work", "outline"));
  btnRow.appendChild(btn("Explore the fellowship", "light"));
  btnRow.appendChild(btn("Start a conversation", "coral"));
  compSec.appendChild(btnRow);

  const chipRow = mkFrame({ name: "Chips", dir: "HORIZONTAL", w: 1448, gap: 10, wrap: true });
  ["Kigali · Rwanda", "Pan-African outlook", "Youth-led"].forEach((c) =>
    chipRow.appendChild(chip(c, "outline"))
  );
  chipRow.appendChild(chip("Applications open", "lime"));
  chipRow.appendChild(chip("Research & evidence", "cream"));
  compSec.appendChild(chipRow);

  const pills = mkFrame({ name: "Status pills", dir: "HORIZONTAL", w: 1448, gap: 10, wrap: true });
  pills.appendChild(statusPill("Applications open", "lime"));
  pills.appendChild(statusPill("Coming soon", "ink"));
  pills.appendChild(statusPill("Rolling intake", "ink"));
  compSec.appendChild(pills);

  page.appendChild(compSec);

  /* layout */
  const layoutSec = mkFrame({ name: "DS / Layout", w: 1448, gap: 22 });
  layoutSec.appendChild(
    mkText("04 · LAYOUT & TOKENS", { size: 11, weight: "bold", ls: 1.8, color: C.coralDeep })
  );
  layoutSec.appendChild(
    mkText("A 1440 grid with generous gutters; a 390 canvas with room to breathe.", {
      family: "display",
      size: 36,
      lh: 40,
      ls: -1.2,
      width: 900,
    })
  );

  const gridRow = mkFrame({ name: "Grids", dir: "HORIZONTAL", w: 1448, gap: 32 });
  const desk = mkFrame({ name: "Desktop grid", w: 900, gap: 10 });
  desk.appendChild(mkText("Desktop · 1440", { size: 12, weight: "semibold" }));
  const dg = mkFrame({ name: "Diagram", dir: "NONE", w: 900, h: 220 });
  dg.fills = [solid(C.cream)];
  dg.strokes = [solid(C.ink, 0.12)];
  dg.strokeWeight = 1;
  dg.cornerRadius = 12;
  const dgContent = mkFrame({
    name: "Content area 1288 / 90rem",
    dir: "NONE",
    w: 804,
    h: 148,
    fill: C.paper,
    stroke: C.coral,
    strokeOpacity: 0.5,
    radius: 6,
  });
  dg.appendChild(dgContent);
  dgContent.x = 48;
  dgContent.y = 36;
  const gutterLeft = mkFrame({ name: "Gutter 76", dir: "NONE", w: 48, h: 148, fill: C.coral, fillOpacity: 0.12 });
  dg.appendChild(gutterLeft);
  gutterLeft.x = 0;
  gutterLeft.y = 36;
  const gutterRight = mkFrame({ name: "Gutter 76", dir: "NONE", w: 48, h: 148, fill: C.coral, fillOpacity: 0.12 });
  dg.appendChild(gutterRight);
  gutterRight.x = 852;
  gutterRight.y = 36;
  desk.appendChild(dg);
  desk.appendChild(
    mkText("Gutter 76 · content 1288 · section rhythm 128 · max width 90rem", {
      size: 10.5,
      color: C.muted,
    })
  );

  const mob = mkFrame({ name: "Mobile grid", w: 390, gap: 10 });
  mob.appendChild(mkText("Mobile · 390", { size: 12, weight: "semibold" }));
  const mg = mkFrame({
    name: "Mobile diagram",
    dir: "NONE",
    w: 390,
    h: 220,
    fill: C.cream,
    radius: 12,
  });
  mg.strokes = [solid(C.ink, 0.12)];
  mg.strokeWeight = 1;
  const mgContent = mkFrame({
    name: "Content 350",
    dir: "NONE",
    w: 350,
    h: 160,
    fill: C.paper,
    stroke: C.coral,
    strokeOpacity: 0.5,
    radius: 6,
  });
  mg.appendChild(mgContent);
  mgContent.x = 20;
  mgContent.y = 30;
  mob.appendChild(mg);
  mob.appendChild(
    mkText("Gutter 20 · content 350 · type scales from 48 → 38", {
      size: 10.5,
      color: C.muted,
    })
  );
  gridRow.appendChild(desk);
  gridRow.appendChild(mob);
  layoutSec.appendChild(gridRow);

  const tokenRow = mkFrame({ name: "Tokens", dir: "HORIZONTAL", w: 1448, gap: 40 });
  const tokenCols = [
    ["RADIUS", ["Cards 24 · feature 36", "Pills 999", "Inputs 10"]],
    ["SPACING", ["4 · 8 · 12 · 16 · 24 · 32", "40 · 56 · 76 · 128"]],
    ["MOTION", ["ease cubic-bezier(.22,1,.36,1)", "reveal 850ms · hover 250ms"]],
  ];
  for (const [title, lines] of tokenCols) {
    const col = mkFrame({ name: "Tokens / " + title, w: 300, gap: 10 });
    col.appendChild(
      mkText(title, { size: 10, weight: "bold", ls: 1.5, color: C.muted })
    );
    for (const line of lines) {
      col.appendChild(mkText(line, { size: 12, lh: 18, color: C.ink }));
    }
    tokenRow.appendChild(col);
  }
  layoutSec.appendChild(tokenRow);
  page.appendChild(layoutSec);

  return page;
}

/* ----------------------------- Cards ------------------------------------- */

function programmeCard(p) {
  const ink = p.dark ? C.cream : C.ink;
  const accent = p.dark
    ? C.lime
    : p.fill === C.coral || p.fill === C.lime || p.fill === C.paper
      ? C.ink
      : p.fill === C.sky
        ? C.forest
        : C.coralDeep;
  const card = mkFrame({
    name: "Programme / " + p.name,
    w: 413,
    h: 468,
    fill: p.fill,
    radius: 24,
    pt: 24,
    pr: 24,
    pb: 22,
    pl: 24,
    gap: 13,
    clip: true,
  });

  const top = mkFrame({ name: "Card top", dir: "HORIZONTAL", w: 365, justify: "SPACE_BETWEEN", align: "CENTER" });
  top.appendChild(statusPill(p.status, p.tone));
  top.appendChild(mkText(p.index, { family: "display", size: 14, color: accent }));
  card.appendChild(top);

  const ring = figma.createEllipse();
  ring.resize(44, 44);
  ring.fills = [];
  ring.strokes = [solid(ink, 0.4)];
  ring.strokeWeight = 1;
  card.appendChild(ring);

  card.appendChild(mkText(p.type.toUpperCase(), { size: 9, weight: "semibold", ls: 1.2, color: ink, opacity: 0.55, width: 365 }));
  card.appendChild(mkText(p.name, { family: "display", size: 25, lh: 27, ls: -0.7, color: ink, width: 365 }));
  card.appendChild(mkText(p.desc, { size: 13, lh: 19, color: ink, opacity: 0.74, width: 360 }));

  const meta = mkFrame({ name: "Meta", w: 365, gap: 6, pt: 2 });
  for (const [k, v] of p.meta) {
    const row = mkFrame({ dir: "HORIZONTAL", w: 365, justify: "SPACE_BETWEEN" });
    row.appendChild(mkText(k, { size: 10.5, color: ink, opacity: 0.5 }));
    row.appendChild(mkText(v, { size: 11.5, weight: "semibold", color: ink }));
    meta.appendChild(row);
  }
  card.appendChild(meta);

  const foot = mkFrame({ name: "Footer", w: 365, gap: 6, pt: 4 });
  foot.appendChild(rule(365, ink, 0.22));
  foot.appendChild(mkText(p.deadline, { size: 11, weight: "semibold", color: ink }));
  foot.appendChild(mkText(p.note, { size: 10, color: ink, opacity: 0.55 }));
  card.appendChild(foot);
  return card;
}

function resourceCard(r, i) {
  const card = mkFrame({
    name: "Resource / " + r.title,
    w: 413,
    h: 286,
    fill: C.cream,
    stroke: C.ink,
    strokeOpacity: 0.14,
    radius: 22,
    pt: 24,
    pr: 24,
    pb: 22,
    pl: 24,
    gap: 12,
  });
  const top = mkFrame({ dir: "HORIZONTAL", w: 365, justify: "SPACE_BETWEEN", align: "CENTER" });
  top.appendChild(mkText(r.cat.toUpperCase(), { size: 9.5, weight: "bold", ls: 1.4, color: C.coralDeep }));
  top.appendChild(mkText(String(i + 1).padStart(2, "0"), { size: 10.5, color: C.ink, opacity: 0.4 }));
  card.appendChild(top);
  card.appendChild(mkText(r.title, { family: "display", size: 23, lh: 26, ls: -0.6, width: 360 }));
  card.appendChild(mkText(r.desc, { size: 13, lh: 19, color: C.muted, width: 360 }));
  card.appendChild(mkText(r.meta.toUpperCase(), { size: 9, weight: "semibold", ls: 1, color: C.ink, opacity: 0.45 }));
  return card;
}

function caseCard(c) {
  const card = mkFrame({ name: "Case / " + c.title, w: 413, gap: 0 });
  card.appendChild(imageSlot(c.file, 413, 230, { radius: 20, fill: c.tint }));
  const body = mkFrame({ name: "Body", w: 413, gap: 10, pt: 18 });
  body.appendChild(chip(c.tag, "outline", { small: true }));
  body.appendChild(mkText(c.title, { family: "display", size: 23, lh: 26, ls: -0.6, width: 380 }));
  body.appendChild(mkText(c.desc, { size: 13, lh: 19, color: C.muted, width: 380 }));
  body.appendChild(mkText(c.meta.toUpperCase(), { size: 9, weight: "semibold", ls: 1.1, color: C.ink, opacity: 0.45 }));
  card.appendChild(body);
  return card;
}

function valueCard(v) {
  const card = mkFrame({
    name: "Value / " + v[1],
    w: 413,
    h: 186,
    fill: C.cream,
    stroke: C.ink,
    strokeOpacity: 0.14,
    radius: 20,
    pt: 22,
    pr: 22,
    pb: 20,
    pl: 22,
    gap: 10,
  });
  const top = mkFrame({ dir: "HORIZONTAL", w: 369, justify: "SPACE_BETWEEN", align: "CENTER" });
  top.appendChild(mkText(v[0], { size: 10.5, weight: "semibold", ls: 1, color: C.coralDeep }));
  const dot = figma.createEllipse();
  dot.resize(7, 7);
  dot.fills = [solid(C.lime)];
  top.appendChild(dot);
  card.appendChild(top);
  card.appendChild(mkText(v[1], { family: "display", size: 22, lh: 24, ls: -0.5, width: 360 }));
  card.appendChild(mkText(v[2], { size: 12.5, lh: 18, color: C.muted, width: 360 }));
  return card;
}

function serviceRowWithRule(item) {
  return serviceRow(item, D.c);
}

/* ------------------------------- Home ------------------------------------ */

function heroFacts(width) {
  const facts = [
    ["06", "connected disciplines"],
    ["01", "shared agenda: young people shaping systems"],
    ["∞", "possible collaborations"],
  ];
  const row = mkFrame({ name: "At a glance", dir: "HORIZONTAL", w: width, gap: 56, align: "CENTER" });
  for (const [num, label] of facts) {
    const item = mkFrame({ name: "Fact", dir: "HORIZONTAL", h: 40, gap: 10, align: "CENTER" });
    item.appendChild(
      mkText(num, { family: "display", size: 32, lh: 32, ls: -1, color: C.ink })
    );
    item.appendChild(
      mkText(label.toUpperCase(), { size: 9.5, weight: "semibold", ls: 1.2, color: C.muted, width: 180 })
    );
    row.appendChild(item);
  }
  return row;
}

function homeDesktop() {
  const page = pageFrame("Home / Desktop", D.w);
  page.appendChild(announceBar());
  page.appendChild(siteHeader(null));
  page.appendChild(rule(D.w));

  /* hero */
  const hero = dSec("Section / Hero", { pt: 70, pb: 96, gap: 60, clip: true });
  const orbit = rings(720, C.ink, 0.12);
  hero.appendChild(orbit);
  orbit.layoutPositioning = "ABSOLUTE";
  orbit.x = 760;
  orbit.y = -300;

  const grid = mkFrame({ name: "Hero grid", dir: "HORIZONTAL", w: D.c, gap: 40, justify: "SPACE_BETWEEN", align: "CENTER" });
  const copy = mkFrame({ name: "Hero copy", w: 720, gap: 24 });
  copy.appendChild(eyebrow("Research · Policy · Design · Enterprise"));
  copy.appendChild(
    mkRich(
      [
        { t: "Africa’s next chapter is " },
        { t: "youth-written.", italic: true, color: C.coral },
      ],
      { size: 104, lh: 92, ls: -5, width: 700 }
    )
  );
  copy.appendChild(
    mkRich(
      [
        { t: "We connect evidence, policy, human-centred design and enterprise to turn young people’s ideas into " },
        { t: "lasting systems change.", weight: "semibold", color: C.ink },
      ],
      { family: "body", size: 20.5, lh: 32, width: 520, color: C.muted }
    )
  );

  const actions = mkFrame({ name: "Hero actions", dir: "HORIZONTAL", h: 52, gap: 12, align: "CENTER" });
  actions.appendChild(btn("Find your next opportunity", "primary"));
  actions.appendChild(btn("See how we work", "outline", { icon: false }));
  copy.appendChild(actions);

  const note = mkFrame({ name: "Hero note", dir: "HORIZONTAL", h: 16, gap: 10, align: "CENTER" });
  note.appendChild(rule(26, C.ink, 0.2));
  note.appendChild(
    mkRich(
      [
        { t: "A LAB FOR " },
        { t: "YOUNG CHANGEMAKERS, PARTNERS AND INSTITUTIONS", color: C.ink },
      ],
      { family: "body", size: 9.5, lh: 13, ls: 1.1, width: 430, color: C.muted }
    )
  );
  copy.appendChild(note);

  /* media composition */
  const media = mkFrame({ name: "Hero media", dir: "NONE", w: 470, h: 600 });
  const arch = imageSlot("hero-community.webp", 396, 500, { radiusTop: 180, radius: 28, fill: C.mint });
  media.appendChild(arch);
  arch.x = 66;
  arch.y = 0;

  const portrait = imageSlot("portrait.webp", 196, 208, {
    radius: 16,
    fill: C.clay,
    stroke: C.paper,
    strokeOpacity: 1,
    strokeWeight: 8,
  });
  media.appendChild(portrait);
  portrait.x = 0;
  portrait.y = 392;

  const seal = mkFrame({ name: "Seal", dir: "NONE", w: 104, h: 104, radius: 999, fill: C.ink });
  const sealStar = mkText("✦", { size: 30, color: C.lime, align: "CENTER", width: 104 });
  seal.appendChild(sealStar);
  sealStar.y = 26;
  const sealText = mkText("KIGALI", { size: 7, weight: "bold", ls: 1.6, color: C.cream, align: "CENTER", width: 104 });
  seal.appendChild(sealText);
  sealText.y = 64;
  media.appendChild(seal);
  seal.x = 330;
  seal.y = 430;

  const annot = mkFrame({ name: "Annotation", dir: "HORIZONTAL", h: 34, gap: 8, align: "CENTER", fill: C.cream, radius: 999, pl: 14, pr: 14 });
  const annotDot = figma.createEllipse();
  annotDot.resize(6, 6);
  annotDot.fills = [solid(C.coral)];
  annot.appendChild(annotDot);
  annot.appendChild(mkText("Open for collaboration", { size: 10.5, weight: "medium", color: C.ink }));
  media.appendChild(annot);
  annot.x = 14;
  annot.y = 140;

  const coordinate = mkText("KIGALI, RWANDA · FIELD NOTE 001", { size: 9, weight: "semibold", ls: 1.2, color: C.muted });
  media.appendChild(coordinate);
  coordinate.x = 70;
  coordinate.y = 512;

  grid.appendChild(copy);
  grid.appendChild(media);
  hero.appendChild(grid);

  const factsWrap = mkFrame({ name: "Facts", w: D.c, gap: 20 });
  factsWrap.appendChild(rule(D.c));
  factsWrap.appendChild(heroFacts(D.c));
  hero.appendChild(factsWrap);
  page.appendChild(hero);

  /* marquee */
  const marquee = mkFrame({ name: "Marquee", w: D.w, h: 50, fill: C.ink, dir: "HORIZONTAL", justify: "CENTER", align: "CENTER" });
  const marqueeSegments = [];
  DISCIPLINES.forEach((d, i) => {
    if (i) marqueeSegments.push({ t: "  ✦  ", color: C.lime });
    marqueeSegments.push({ t: d.toUpperCase() });
  });
  marqueeSegments.push({ t: "  ✦", color: C.lime });
  marquee.appendChild(mkRich(marqueeSegments, { family: "body", size: 11, lh: 15, ls: 1.8, color: C.cream }));
  page.appendChild(marquee);

  /* intro */
  const intro = dSec("Section / Intro", { gap: 0 });
  const introRow = mkFrame({ name: "Intro grid", dir: "HORIZONTAL", w: D.c, gap: 80, align: "MIN" });
  const side = mkFrame({ name: "Side index", w: 190, gap: 14 });
  side.appendChild(mkText("01", { family: "display", size: 42, lh: 42, ls: -1.4, color: C.coral }));
  side.appendChild(mkText("A LAB, NOT A LANE\nKIGALI · PAN-AFRICAN", { size: 9.5, weight: "semibold", ls: 1.2, lh: 16, color: C.muted }));
  side.appendChild(rule(70));

  const introBody = mkFrame({ name: "Intro body", w: 1018, gap: 24 });
  introBody.appendChild(eyebrow("Who we are"));
  introBody.appendChild(
    mkRich(
      [
        { t: "A lab for the questions that " },
        { t: "shape tomorrow.", italic: true, color: C.coral },
      ],
      { size: 64, lh: 59, ls: -2.5, width: 860 }
    )
  );
  introBody.appendChild(
    mkText(
      "AfriYouth Innovation Labs exists to empower Africa’s youth to generate evidence, shape policy and build innovative solutions to the challenges that matter most. We bring research, design, entrepreneurship and foresight into the same room — and keep them there long enough for change to take root.",
      { size: 19, lh: 30, color: C.muted, width: 800 }
    )
  );

  const principles = mkFrame({ name: "Principles", dir: "HORIZONTAL", w: 1018, gap: 40, pt: 8 });
  const principleCopy = [
    ["i.", "Youth at the centre", "Young people are not the audience. They are researchers, designers, founders and decision-makers."],
    ["ii.", "Evidence with context", "We start with lived experience and local knowledge — not imported answers."],
    ["iii.", "Systems over silos", "We work beyond the pilot, connecting ideas to the institutions and incentives that can scale them."],
  ];
  for (const [num, title, body] of principleCopy) {
    const cell = mkFrame({ name: "Principle / " + title, w: 312, gap: 8 });
    cell.appendChild(mkText(num, { family: "display", size: 15, color: C.coralDeep }));
    cell.appendChild(mkText(title, { family: "display", size: 21, lh: 23, ls: -0.5, width: 300 }));
    cell.appendChild(mkText(body, { size: 12.5, lh: 19, color: C.muted, width: 295 }));
    principles.appendChild(cell);
  }
  introBody.appendChild(principles);
  introBody.appendChild(textLink("Meet AfriYouth"));

  introRow.appendChild(side);
  introRow.appendChild(introBody);
  intro.appendChild(introRow);
  page.appendChild(intro);

  /* services */
  const work = dSec("Section / Disciplines", { bg: C.cream, gap: 44 });
  work.appendChild(
    sectionHead({
      eyebrow: "What we do",
      title: "Six disciplines. One connected practice.",
      body: "From the first question to the final system, we build the connective tissue between evidence, people and action.",
      link: "Explore our work",
    })
  );
  const serviceRows = mkFrame({ name: "Service list", w: D.c, gap: 0 });
  for (const item of SERVICES) serviceRows.appendChild(serviceRowWithRule(item));
  work.appendChild(serviceRows);
  page.appendChild(work);

  /* impact */
  const impact = dSec("Section / Impact", { bg: C.ink, pt: 136, pb: 126, gap: 54, clip: true });
  const ghost = mkText("systems", { family: "display", italic: true, size: 280, color: C.cream, opacity: 0.05, ls: -12 });
  impact.appendChild(ghost);
  ghost.layoutPositioning = "ABSOLUTE";
  ghost.x = 480;
  ghost.y = 470;

  const impactGrid = mkFrame({ name: "Impact grid", dir: "HORIZONTAL", w: D.c, gap: 80, align: "MIN" });
  const impactCopy = mkFrame({ name: "Impact copy", w: 560, gap: 22 });
  impactCopy.appendChild(eyebrow("The change we want", { light: true }));
  impactCopy.appendChild(
    mkRich([{ t: "We don’t just ask what works. We ask who it works for." }], {
      size: 64,
      lh: 59,
      ls: -2.6,
      width: 520,
      color: C.cream,
    })
  );
  impactCopy.appendChild(
    mkText(
      "Our measure of success is not a packed room or a polished report. It is evidence that is used, young people with real influence, and systems that work better for the next generation.",
      { size: 17.5, lh: 27, color: C.cream, opacity: 0.62, width: 500 }
    )
  );
  impactCopy.appendChild(chip("Our 2030 ambition", "light"));

  const stats = mkFrame({ name: "Stats", w: 640, gap: 0 });
  const statRows = [
    [["1,000", "Young changemakers equipped to lead change", "2030 ambition"], ["100", "Cross-sector collaborations brokered", "2030 ambition"]],
    [["30", "Youth-led ventures supported to grow", "2030 ambition"], ["06", "Disciplines connected in every engagement", "By design"]],
  ];
  for (const pair of statRows) {
    const row = mkFrame({ dir: "HORIZONTAL", w: 640, gap: 0 });
    for (const [value, label, note] of pair) {
      row.appendChild(statCell(value, label, note, 320, 186));
    }
    stats.appendChild(row);
  }

  impactGrid.appendChild(impactCopy);
  impactGrid.appendChild(stats);
  impact.appendChild(impactGrid);

  const through = mkFrame({ name: "Throughline", w: D.c, gap: 16, pt: 8 });
  through.appendChild(rule(D.c, C.cream, 0.2));
  const throughRow = mkFrame({ dir: "HORIZONTAL", w: D.c, gap: 14, align: "CENTER" });
  ["Listen", "Frame", "Prototype", "Influence", "Learn"].forEach((label, i) => {
    if (i) throughRow.appendChild(mkText("→", { size: 12, color: C.coral }));
    throughRow.appendChild(mkText(label.toUpperCase(), { size: 9.5, weight: "semibold", ls: 1.3, color: C.cream, opacity: 0.6 }));
  });
  through.appendChild(throughRow);
  impact.appendChild(through);
  page.appendChild(impact);

  /* featured programme */
  const feature = dSec("Section / Featured programme", { gap: 44 });
  feature.appendChild(
    sectionHead({
      eyebrow: "Opportunities",
      title: "Your next move starts here.",
      body: "Fellowships, labs and learning spaces for young people ready to turn curiosity into capability.",
      link: "Browse all programs",
    })
  );

  const card = mkFrame({ name: "Feature card", dir: "HORIZONTAL", w: D.c, h: 520, fill: C.forest, radius: 36, clip: true });
  card.appendChild(imageSlot("programme.webp", 600, 520, { fill: C.mint, dark: true }));
  const cardBody = mkFrame({ name: "Card body", w: 688, gap: 14, pt: 40, pr: 44, pb: 36, pl: 44 });
  cardBody.appendChild(mkText("01", { family: "display", size: 13, color: C.cream, opacity: 0.4 }));
  cardBody.appendChild(eyebrow("Applications are open", { light: true }));
  cardBody.appendChild(mkText("Turn evidence into influence.", { family: "display", size: 42, lh: 43, ls: -1.5, width: 520, color: C.cream }));
  cardBody.appendChild(
    mkText(
      "The AfriYouth Research Fellowship is a 12-week, practice-led programme for early-career researchers ready to move beyond the report — into policy, programmes and public conversation.",
      { size: 14.5, lh: 22, color: C.cream, opacity: 0.72, width: 560 }
    )
  );
  const facts = mkFrame({ name: "Facts", dir: "HORIZONTAL", w: 600, gap: 56, pt: 6 });
  const factPairs = [[["Format", "Hybrid · Kigali"], ["Duration", "12 weeks"]], [["Who it’s for", "Ages 18–30"], ["Commitment", "8–10 hrs / week"]]];
  for (const group of factPairs) {
    const col = mkFrame({ w: 250, gap: 12 });
    for (const [k, v] of group) {
      const fact = mkFrame({ w: 250, gap: 3 });
      fact.appendChild(mkText(k.toUpperCase(), { size: 8.5, weight: "semibold", ls: 1.1, color: C.cream, opacity: 0.55 }));
      fact.appendChild(mkText(v, { size: 12.5, weight: "semibold", color: C.cream }));
      col.appendChild(fact);
    }
    facts.appendChild(col);
  }
  cardBody.appendChild(facts);

  const cardFoot = mkFrame({ name: "Card footer", dir: "HORIZONTAL", w: 600, justify: "SPACE_BETWEEN", align: "CENTER", gap: 20, pt: 10 });
  cardFoot.appendChild(mkText("Applications close 30 January 2027", { size: 10.5, color: C.cream, opacity: 0.6 }));
  cardFoot.appendChild(btn("Explore the fellowship", "light", { small: true }));
  cardBody.appendChild(cardFoot);

  card.appendChild(cardBody);
  feature.appendChild(card);
  page.appendChild(feature);

  /* ways in */
  const ways = dSec("Section / Ways in", { bg: C.cream, gap: 44 });
  ways.appendChild(
    sectionHead({
      eyebrow: "Ways in",
      title: "There’s more than one way in.",
      body: "Whether you’re building your practice, looking for a research partner or commissioning expertise, the door starts here.",
    })
  );
  const waysRow = mkFrame({ name: "Ways grid", dir: "HORIZONTAL", w: D.c, gap: 24 });
  const wayData = [
    ["01", "For young changemakers", "Build your practice, find your people and take an idea further through fellowships, labs and learning spaces.", "Explore programs →", C.coral, "#F8E6DD"],
    ["02", "For partners", "Co-create research, programmes and ventures with a youth-centred lab that connects disciplines and networks.", "Start a partnership →", C.lime, "#F1F4D7"],
    ["03", "For institutions", "Commission evidence, facilitation and systems support built around your mandate and the people you serve.", "Commission our expertise →", C.sky, "#E8F0F3"],
  ];
  for (const [num, title, body, link, accent, tint] of wayData) {
    const wCard = mkFrame({ name: "Way / " + title, w: 413, h: 316, fill: tint, radius: 24, pt: 24, pr: 24, pb: 22, pl: 24, gap: 14 });
    const wTop = mkFrame({ dir: "HORIZONTAL", w: 365, justify: "SPACE_BETWEEN", align: "CENTER" });
    wTop.appendChild(mkText(num, { size: 10.5, weight: "semibold", ls: 1, color: C.ink, opacity: 0.5 }));
    wTop.appendChild(mkText("↗", { size: 16, color: C.ink }));
    wCard.appendChild(wTop);
    const icon = figma.createEllipse();
    icon.resize(44, 44);
    icon.fills = [];
    icon.strokes = [solid(accent)];
    icon.strokeWeight = 1.5;
    wCard.appendChild(icon);
    wCard.appendChild(mkText(title, { family: "display", size: 23, lh: 25, ls: -0.6, width: 340 }));
    wCard.appendChild(mkText(body, { size: 12.5, lh: 19, color: C.muted, width: 340 }));
    wCard.appendChild(mkText(link, { size: 12, weight: "semibold", color: C.ink }));
    waysRow.appendChild(wCard);
  }
  ways.appendChild(waysRow);
  page.appendChild(ways);

  /* insights preview */
  const insights = dSec("Section / Insights preview", { gap: 44 });
  insights.appendChild(
    sectionHead({
      eyebrow: "Insights",
      title: "Thinking out loud. Working in the open.",
      body: "Ideas, evidence and provocations from the edge of research, policy and design.",
      link: "Visit the library",
    })
  );
  const insightsRow = mkFrame({ name: "Insights layout", dir: "HORIZONTAL", w: D.c, gap: 36, align: "MIN" });
  const featureInsight = mkFrame({ name: "Featured insight", w: 764, gap: 14 });
  featureInsight.appendChild(imageSlot("insight.webp", 764, 360, { radius: 22, fill: C.sky, dark: true }));
  const metaRow = mkFrame({ dir: "HORIZONTAL", w: 764, gap: 14 });
  ["Foresight", "9 min read", "Field note"].forEach((m) =>
    metaRow.appendChild(mkText(m.toUpperCase(), { size: 9, weight: "semibold", ls: 1.2, color: C.muted }))
  );
  featureInsight.appendChild(metaRow);
  featureInsight.appendChild(mkText("Why the future of work needs youth at the design table.", { family: "display", size: 34, lh: 36, ls: -1.1, width: 700 }));
  featureInsight.appendChild(
    mkText("The jobs young Africans will hold in 2035 don’t exist yet. We explore what it takes to design for work — not just train for it.", { size: 14, lh: 21, color: C.muted, width: 620 })
  );
  featureInsight.appendChild(textLink("Read the field note"));

  const sideList = mkFrame({ name: "More insights", w: 488, gap: 6 });
  sideList.appendChild(mkText("MORE FROM THE FIELD", { size: 9, weight: "bold", ls: 1.4, color: C.muted }));
  [
    ["01", "From evidence to a seat at the table", "Policy · 6 min read"],
    ["02", "Designing with, not for", "Human-centred design · 5 min read"],
    ["03", "Measuring what matters", "Impact & learning · 7 min read"],
  ].forEach(([num, title, meta]) => {
    const item = mkFrame({ name: "Insight / " + title, dir: "HORIZONTAL", w: 488, gap: 14, pt: 16, pb: 16, align: "CENTER" });
    item.appendChild(mkText(num, { size: 9.5, weight: "semibold", color: C.coralDeep }));
    const body = mkFrame({ w: 400, gap: 4 });
    body.appendChild(mkText(title, { family: "display", size: 17, lh: 20, ls: -0.4, width: 390 }));
    body.appendChild(mkText(meta.toUpperCase(), { size: 8.5, weight: "semibold", ls: 1, color: C.muted }));
    item.appendChild(body);
    item.appendChild(mkText("↗", { size: 14, color: C.ink, opacity: 0.5 }));
    sideList.appendChild(item);
    sideList.appendChild(rule(488, C.ink, 0.14));
  });

  insightsRow.appendChild(featureInsight);
  insightsRow.appendChild(sideList);
  insights.appendChild(insightsRow);
  page.appendChild(insights);

  /* partner band */
  const partner = dSec("Section / Partnerships", { bg: C.cream, pt: 100, pb: 100, gap: 0 });
  const partnerRow = mkFrame({ name: "Partner grid", dir: "HORIZONTAL", w: D.c, gap: 100, align: "MIN" });
  const partnerLeft = mkFrame({ w: 410, gap: 16 });
  partnerLeft.appendChild(eyebrow("Partnerships"));
  partnerLeft.appendChild(mkText("Built for the people who build with us.", { family: "display", size: 33, lh: 35, ls: -1, width: 380 }));
  const partnerRight = mkFrame({ name: "Partner body", w: 770, gap: 18 });
  partnerRight.appendChild(
    mkText("We work with organisations that are serious about shifting systems — not just funding another pilot. Bring us a question, a mandate or a knotty challenge.", { size: 15, lh: 23, color: C.muted, width: 720 })
  );
  const sectorRow = mkFrame({ name: "Sectors", dir: "HORIZONTAL", w: 740, gap: 8, wrap: true });
  for (const sector of SECTORS) sectorRow.appendChild(chip(sector, "outline", { small: true }));
  partnerRight.appendChild(sectorRow);
  partnerRight.appendChild(textLink("Start a partnership conversation"));
  partnerRow.appendChild(partnerLeft);
  partnerRow.appendChild(partnerRight);
  partner.appendChild(partnerRow);
  page.appendChild(partner);

  page.appendChild(ctaBand({}));
  page.appendChild(footerBar());
  return page;
}

/* ------------------------------- About ----------------------------------- */

function aboutDesktop() {
  const page = pageFrame("About / Desktop", D.w);
  page.appendChild(announceBar());
  page.appendChild(siteHeader("About"));
  page.appendChild(rule(D.w));

  page.appendChild(
    innerHero({
      eyebrow: "About AfriYouth",
      title: [{ t: "We connect the dots that " }, { t: "change systems.", italic: true, color: C.coral }],
      lede: "A youth-centred research, policy and innovation lab working to make evidence useful, institutions more responsive and young people impossible to ignore.",
      chips: ["Kigali · Rwanda", "Pan-African outlook", "Youth-led"],
    })
  );

  const media = dSec("Section / About media", { pt: 0, pb: 80, gap: 24 });
  const mediaRow = mkFrame({ name: "Media pair", dir: "HORIZONTAL", w: D.c, gap: 24 });
  const figures = [
    ["collaboration.webp", "The work is collective", "Field note / 02", C.sky],
    ["design.webp", "Make room for the new", "Kigali", C.clay],
  ];
  for (const [file, caption, note, tint] of figures) {
    const fig = mkFrame({ name: "Figure / " + file, w: 632, gap: 10 });
    fig.appendChild(imageSlot(file, 632, 400, { radius: 20, fill: tint }));
    const cap = mkFrame({ dir: "HORIZONTAL", w: 632, justify: "SPACE_BETWEEN" });
    cap.appendChild(mkText(caption, { family: "display", italic: true, size: 13, color: C.ink, opacity: 0.7 }));
    cap.appendChild(mkText(note.toUpperCase(), { size: 8.5, weight: "semibold", ls: 1.2, color: C.muted }));
    fig.appendChild(cap);
    mediaRow.appendChild(fig);
  }
  media.appendChild(mediaRow);
  page.appendChild(media);

  const manifesto = dSec("Section / Manifesto", { gap: 0 });
  const mRow = mkFrame({ name: "Manifesto grid", dir: "HORIZONTAL", w: D.c, gap: 80, align: "MIN" });
  const mSide = mkFrame({ w: 200, gap: 14 });
  mSide.appendChild(eyebrow("Why we exist"));
  mSide.appendChild(mkText("A different kind of institution for a different kind of challenge.", { family: "display", italic: true, size: 14, lh: 21, color: C.muted, width: 180 }));
  mSide.appendChild(rule(80));
  const mBody = mkFrame({ name: "Manifesto body", w: 1000, gap: 30 });
  mBody.appendChild(
    mkRich(
      [
        { t: "Africa doesn’t need another pipeline of ideas that stop at the pilot. It needs " },
        { t: "the infrastructure", italic: true, color: C.coral },
        { t: " to move good ideas into policy, practice and enterprise." },
      ],
      { size: 44, lh: 49, ls: -1.5, width: 980 }
    )
  );
  const mFoot = mkFrame({ name: "Manifesto foot", dir: "HORIZONTAL", w: 980, gap: 60, pt: 8 });
  mFoot.appendChild(
    mkText("Too often, research sits on shelves, young people are consulted but not entrusted, and promising innovations never reach the systems they were built to change. We exist to close those gaps.", { size: 14, lh: 21, color: C.muted, width: 430 })
  );
  mFoot.appendChild(mkText("Our work begins where disciplines end.", { family: "display", italic: true, size: 18, lh: 24, color: C.ink, width: 380 }));
  mBody.appendChild(mFoot);
  mRow.appendChild(mSide);
  mRow.appendChild(mBody);
  manifesto.appendChild(mRow);
  page.appendChild(manifesto);

  const purpose = dSec("Section / Mission and vision", { bg: C.cream, gap: 24 });
  const purposeRow = mkFrame({ name: "Purpose grid", dir: "HORIZONTAL", w: D.c, gap: 24 });
  const purposeCards = [
    ["01 / MISSION", "Empower Africa’s youth to generate evidence, shape policy and build solutions that matter.", "We do this through research, human-centred design and entrepreneurship — creating the conditions for young people to lead change, not simply inherit it.", false],
    ["02 / VISION", "An Africa where young people shape the systems they live in.", "A continent where evidence, innovation and entrepreneurship are used by empowered young people to drive inclusive, sustainable transformation.", true],
  ];
  for (const [label, title, body, dark] of purposeCards) {
    const card = mkFrame({
      name: "Purpose / " + label,
      w: 632,
      h: 320,
      fill: dark ? C.forest : C.cream,
      stroke: dark ? null : C.ink,
      strokeOpacity: 0.14,
      radius: 28,
      pt: 30,
      pr: 30,
      pb: 26,
      pl: 30,
      gap: 16,
    });
    card.appendChild(mkText(label, { size: 9.5, weight: "bold", ls: 1.3, color: dark ? C.lime : C.coralDeep }));
    card.appendChild(mkText(title, { family: "display", size: 29, lh: 32, ls: -0.9, width: 540, color: dark ? C.cream : C.ink }));
    card.appendChild(mkText(body, { size: 13.5, lh: 20, color: dark ? C.cream : C.muted, opacity: dark ? 0.65 : 1, width: 540 }));
    purposeRow.appendChild(card);
  }
  purpose.appendChild(purposeRow);
  page.appendChild(purpose);

  const approach = dSec("Section / Approach", { bg: C.ink, pt: 124, pb: 124, gap: 48, clip: true });
  const aHead = mkFrame({ name: "Approach head", dir: "HORIZONTAL", w: D.c, gap: 80, justify: "SPACE_BETWEEN", align: "MAX" });
  const aLeft = mkFrame({ w: 720, gap: 18 });
  aLeft.appendChild(eyebrow("Our approach", { light: true }));
  aLeft.appendChild(mkRich([{ t: "Change is not a straight line. Neither are we." }], { size: 62, lh: 58, ls: -2.5, width: 700, color: C.cream }));
  aHead.appendChild(aLeft);
  aHead.appendChild(mkText("We combine the rigour of research, the empathy of design and the momentum of enterprise — moving between them as the question demands.", { size: 16.5, lh: 26, color: C.cream, opacity: 0.62, width: 420 }));
  approach.appendChild(aHead);

  const stepsRow = mkFrame({ name: "Approach steps", dir: "HORIZONTAL", w: D.c, gap: 20, pt: 10 });
  for (const [num, title, body] of STEPS) {
    const step = mkFrame({ name: "Step / " + title, w: 238, gap: 10 });
    step.appendChild(rule(238, C.cream, 0.22));
    step.appendChild(mkText(num, { size: 9.5, weight: "semibold", ls: 1.2, color: C.cream, opacity: 0.5 }));
    step.appendChild(mkText(title, { family: "display", size: 23, lh: 25, ls: -0.6, color: C.cream }));
    step.appendChild(mkText(body, { size: 12, lh: 18, color: C.cream, opacity: 0.6, width: 225 }));
    stepsRow.appendChild(step);
  }
  approach.appendChild(stepsRow);
  page.appendChild(approach);

  const values = dSec("Section / Values", { gap: 44 });
  values.appendChild(
    sectionHead({
      eyebrow: "What we hold close",
      title: "Principles before polish.",
      body: "These are not wall posters. They are the tests we use when the work gets difficult.",
    })
  );
  const valueRows = mkFrame({ name: "Values grid", w: D.c, gap: 20 });
  for (let i = 0; i < VALUES.length; i += 3) {
    const row = mkFrame({ dir: "HORIZONTAL", w: D.c, gap: 24 });
    for (const v of VALUES.slice(i, i + 3)) row.appendChild(valueCard(v));
    valueRows.appendChild(row);
  }
  values.appendChild(valueRows);
  page.appendChild(values);

  const collective = dSec("Section / Collective", { bg: C.cream, gap: 0 });
  const cRow = mkFrame({ name: "Collective grid", dir: "HORIZONTAL", w: D.c, gap: 70, align: "MIN" });
  const cMedia = mkFrame({ name: "Collective media", dir: "NONE", w: 620, h: 440 });
  const cImage = imageSlot("programme.webp", 620, 440, { radius: 24, fill: C.mint });
  cMedia.appendChild(cImage);
  const stamp = mkText("MADE OF\nMANY MINDS", { family: "display", italic: true, size: 22, lh: 24, color: C.paper, align: "CENTER", width: 180 });
  cMedia.appendChild(stamp);
  stamp.x = 24;
  stamp.y = 350;
  const cCopy = mkFrame({ name: "Collective copy", w: 598, gap: 18 });
  cCopy.appendChild(eyebrow("How we’re built"));
  cCopy.appendChild(mkText("Small core. Wide network.", { family: "display", size: 50, lh: 50, ls: -1.8, width: 500 }));
  cCopy.appendChild(
    mkText("AfriYouth brings together researchers, policy actors, designers, entrepreneurs and foresight practitioners. Some sit in the core team; many join through projects, fellowships and partnerships.", { size: 16, lh: 25, color: C.muted, width: 540 })
  );
  const roles = [
    ["Researchers & data storytellers", "Evidence"],
    ["Policy & systems thinkers", "Influence"],
    ["Designers & facilitators", "Experience"],
    ["Entrepreneurs & venture builders", "Enterprise"],
    ["Foresight & learning specialists", "Anticipation"],
    ["Youth leaders & community organisers", "Leadership"],
  ];
  const roleList = mkFrame({ name: "Roles", w: 598, gap: 0, pt: 6 });
  for (const [role, tag] of roles) {
    const roleRow = mkFrame({ dir: "HORIZONTAL", w: 598, justify: "SPACE_BETWEEN", pt: 11, pb: 11 });
    roleRow.appendChild(mkText(role, { size: 13.5, color: C.ink, width: 420 }));
    roleRow.appendChild(mkText(tag.toUpperCase(), { size: 8.5, weight: "semibold", ls: 1.2, color: C.muted }));
    roleList.appendChild(roleRow);
    roleList.appendChild(rule(598, C.ink, 0.14));
  }
  cCopy.appendChild(roleList);
  cCopy.appendChild(textLink("Join our network"));
  cRow.appendChild(cMedia);
  cRow.appendChild(cCopy);
  collective.appendChild(cRow);
  page.appendChild(collective);

  page.appendChild(
    ctaBand({
      eyebrow: "Work with us",
      title: "We’re looking for questions, partners and people who want to move.",
      body: "If you share our belief that Africa’s next chapter will be shaped by its young people, let’s find the right way to work together.",
      primary: "Start a conversation",
      secondary: "Explore our work",
    })
  );
  page.appendChild(footerBar());
  return page;
}

/* -------------------------------- Work ----------------------------------- */

function workDesktop() {
  const page = pageFrame("Work / Desktop", D.w);
  page.appendChild(announceBar());
  page.appendChild(siteHeader("Our work"));
  page.appendChild(rule(D.w));

  page.appendChild(
    innerHero({
      eyebrow: "Our work",
      title: [{ t: "One lab. " }, { t: "Six ways in.", italic: true, color: C.coral }],
      lede: "Whether you have a question that needs evidence, a service that needs redesign or a system that needs to move — we bring the right mix of disciplines to the table.",
      chips: ["For partners", "For institutions", "For funders"],
      disciplines: true,
    })
  );

  const services = dSec("Section / Services", { bg: C.cream, gap: 44 });
  services.appendChild(
    sectionHead({
      eyebrow: "What we bring",
      title: "No off-the-shelf answers.",
      body: "Every engagement is designed around the question, the context and the people who need to act on it.",
      link: "Commission our expertise",
    })
  );

  const openItem = SERVICES[0];
  const openBox = mkFrame({ name: "Service open / " + openItem.title, w: D.c, gap: 0 });
  const openHead = mkFrame({ dir: "HORIZONTAL", w: D.c, gap: 24, justify: "SPACE_BETWEEN", align: "CENTER", pt: 26, pb: 18 });
  openHead.appendChild(mkText(openItem.n, { size: 11.5, weight: "semibold", ls: 1, color: C.ink, opacity: 0.5 }));
  openHead.appendChild(mkText(openItem.title, { family: "display", size: 28, lh: 30, ls: -0.9, width: 380 }));
  openHead.appendChild(mkText(openItem.desc, { size: 13.5, lh: 20, color: C.muted, width: 520 }));
  openHead.appendChild(mkText("−", { size: 18, color: C.ink }));
  openBox.appendChild(openHead);

  const openBody = mkFrame({ name: "Open body", dir: "HORIZONTAL", w: D.c, gap: 48, pb: 34 });
  const openCopy = mkFrame({ w: 660, gap: 16 });
  openCopy.appendChild(
    mkText("We generate rigorous, locally grounded evidence that helps decision-makers see a problem clearly and act on it with confidence. Our work is participatory by default: young people help shape the questions, collect the data and make sense of what it means.", { size: 14.5, lh: 22, color: C.muted, width: 660 })
  );
  const whoChips = mkFrame({ dir: "HORIZONTAL", w: 660, gap: 8, wrap: true });
  for (const c of ["Development partners", "Public agencies", "Foundations", "Universities"]) whoChips.appendChild(chip(c, "outline", { small: true }));
  openCopy.appendChild(whoChips);
  openCopy.appendChild(textLink("Talk to us about research"));
  openBody.appendChild(openCopy);
  openBody.appendChild(imageSlot("research.webp", 380, 240, { radius: 18, fill: C.sky }));
  openBox.appendChild(openBody);
  openBox.appendChild(rule(D.c));
  services.appendChild(openBox);

  const serviceRows = mkFrame({ name: "Service list", w: D.c, gap: 0 });
  for (const item of SERVICES.slice(1)) serviceRows.appendChild(serviceRowWithRule(item));
  services.appendChild(serviceRows);
  page.appendChild(services);

  const process = dSec("Section / Process", { bg: C.ink, pt: 124, pb: 124, gap: 46 });
  const pHead = mkFrame({ name: "Process head", dir: "HORIZONTAL", w: D.c, gap: 80, justify: "SPACE_BETWEEN", align: "MAX" });
  const pCopy = mkFrame({ w: 700, gap: 18 });
  pCopy.appendChild(eyebrow("How we work", { light: true }));
  pCopy.appendChild(mkRich([{ t: "A practical, participatory way forward." }], { size: 62, lh: 58, ls: -2.5, width: 680, color: C.cream }));
  pHead.appendChild(pCopy);
  pHead.appendChild(mkText("No mystery process. We define the question, work in the open and leave behind capability, not dependency.", { size: 16, lh: 25, color: C.cream, opacity: 0.62, width: 420 }));
  process.appendChild(pHead);

  const processList = mkFrame({ name: "Process list", w: D.c, gap: 0, pt: 8 });
  for (const [num, title, body] of STEPS) {
    const row = mkFrame({ dir: "HORIZONTAL", w: D.c, gap: 30, pt: 20, pb: 20, align: "CENTER" });
    row.appendChild(mkText(num, { size: 10.5, weight: "semibold", color: C.coral, width: 50 }));
    row.appendChild(mkText(title, { family: "display", size: 24, lh: 26, ls: -0.6, color: C.cream, width: 200 }));
    row.appendChild(mkText(body, { size: 13.5, lh: 20, color: C.cream, opacity: 0.6, width: 700 }));
    row.appendChild(mkText("↗", { size: 15, color: C.cream, opacity: 0.4 }));
    processList.appendChild(row);
    processList.appendChild(rule(D.c, C.cream, 0.18));
  }
  process.appendChild(processList);
  page.appendChild(process);

  const cases = dSec("Section / Cases", { gap: 44 });
  cases.appendChild(
    sectionHead({
      eyebrow: "Where it comes together",
      title: "Three ways the work comes together.",
      body: "Illustrative engagement formats that show how our disciplines combine. Every project starts from the partner’s real question.",
    })
  );
  const caseRow = mkFrame({ name: "Cases", dir: "HORIZONTAL", w: D.c, gap: 24 });
  const caseData = [
    ["research.webp", "Research + Policy", "A youth evidence agenda for the future of work.", "A participatory study with young people, employers and policymakers to surface what decent work means now — and what should change.", "Evidence · Policy · Coalition", C.mint],
    ["design.webp", "Design + Enterprise", "A better front door to youth finance.", "A service redesign and prototype sprint with young customers and financial providers to make access simpler, fairer and more trusted.", "Service design · Prototyping · Access", C.clay],
    ["foresight.webp", "Foresight + Impact", "A 2035 learning agenda for a changing region.", "Scenarios, youth futures panels and a shared measurement agenda to help a coalition plan beyond the electoral cycle.", "Scenarios · Learning · Strategy", C.sky],
  ];
  for (const [file, tag, title, desc, meta, tint] of caseData) {
    caseRow.appendChild(caseCard({ file, tag, title, desc, meta, tint }));
  }
  cases.appendChild(caseRow);
  page.appendChild(cases);

  page.appendChild(
    ctaBand({
      eyebrow: "Start here",
      title: "Good work starts with a better conversation.",
      body: "Bring us a question, a mandate or a knotty challenge. We’ll come back with a practical way forward.",
      primary: "Start a conversation",
      secondary: "Browse programs",
    })
  );
  page.appendChild(footerBar());
  return page;
}

/* ------------------------------ Programs --------------------------------- */

function programsDesktop() {
  const page = pageFrame("Programs / Desktop", D.w);
  page.appendChild(announceBar());
  page.appendChild(siteHeader("Programs"));
  page.appendChild(rule(D.w));

  const hero = innerHero({
    eyebrow: "Programs & opportunities",
    title: [{ t: "Your next move starts " }, { t: "here.", italic: true, color: C.coral }],
    lede: "Fellowships, labs and learning spaces for young people ready to turn curiosity into capability — and capability into change.",
  });
  const noteRow = mkFrame({ dir: "HORIZONTAL", w: D.c, gap: 24, pt: 6 });
  noteRow.appendChild(mkText("Four opportunities are currently open or rolling.", { size: 12, weight: "semibold", color: C.ink }));
  noteRow.appendChild(mkText("RESEARCH FELLOWSHIP · POLICY LAB · DESIGN SPRINT · MEL CLINIC", { size: 9, weight: "semibold", ls: 1.2, color: C.muted }));
  hero.appendChild(noteRow);
  page.appendChild(hero);

  const programmes = dSec("Section / Programmes", { bg: C.cream, gap: 32 });
  programmes.appendChild(
    sectionHead({
      eyebrow: "Find your fit",
      title: "Open doors, not hoops.",
      body: "Our selection process is human. We look for potential, lived experience and a real question — not just perfect credentials.",
    })
  );

  const filter = mkFrame({ name: "Filter bar", dir: "HORIZONTAL", w: D.c, justify: "SPACE_BETWEEN", align: "CENTER", gap: 20, pt: 6 });
  const filterGroup = mkFrame({ name: "Filters", dir: "HORIZONTAL", h: 26, gap: 8, align: "CENTER" });
  const filterData = [
    ["All programmes", "06", true],
    ["Open now", "04", false],
    ["Fellowships", "02", false],
    ["Labs & studios", "03", false],
    ["For organisations", "01", false],
  ];
  for (const [label, count, active] of filterData) {
    filterGroup.appendChild(chip(label + "  " + count, active ? "ink" : "outline", { small: true }));
  }
  filter.appendChild(filterGroup);
  filter.appendChild(mkText("Showing 6 opportunities", { size: 10.5, color: C.muted }));
  programmes.appendChild(filter);

  const grid = mkFrame({ name: "Programme grid", w: D.c, gap: 24 });
  for (let i = 0; i < PROGRAMMES.length; i += 3) {
    const row = mkFrame({ dir: "HORIZONTAL", w: D.c, gap: 24 });
    for (const p of PROGRAMMES.slice(i, i + 3)) row.appendChild(programmeCard(p));
    grid.appendChild(row);
  }
  programmes.appendChild(grid);
  page.appendChild(programmes);

  const apply = dSec("Section / Apply process", { bg: C.cream, pt: 96, pb: 96, gap: 40 });
  const applyHead = mkFrame({ name: "Apply head", dir: "HORIZONTAL", w: D.c, gap: 80, justify: "SPACE_BETWEEN", align: "MAX" });
  const applyCopy = mkFrame({ w: 700, gap: 16 });
  applyCopy.appendChild(eyebrow("How it works"));
  applyCopy.appendChild(mkText("From interest to impact.", { family: "display", size: 54, lh: 54, ls: -2, width: 600 }));
  applyHead.appendChild(applyCopy);
  applyHead.appendChild(mkText("A clear, human process from first question to first session. We’ll tell you exactly where you stand at every stage.", { size: 15, lh: 23, color: C.muted, width: 420 }));
  apply.appendChild(applyHead);

  const applySteps = mkFrame({ name: "Apply steps", dir: "HORIZONTAL", w: D.c, gap: 20 });
  const applyData = [
    ["01", "Explore", "Find the programme that fits where you are now. Not sure? Ask us — we’ll point you clearly."],
    ["02", "Apply", "Tell us about your experience, your question and what you want to change. No perfect CV required."],
    ["03", "Talk", "Shortlisted applicants have a conversation with our team — a two-way exchange, not an interrogation."],
    ["04", "Begin", "Accepted participants receive a full pack, a cohort welcome and a clear plan for the weeks ahead."],
  ];
  for (const [num, title, body] of applyData) {
    const step = mkFrame({ name: "Apply / " + title, w: 307, gap: 10 });
    step.appendChild(rule(307));
    step.appendChild(mkText(num, { size: 9.5, weight: "semibold", ls: 1.2, color: C.coralDeep, pt: 0 }));
    step.appendChild(mkText(title, { family: "display", size: 24, lh: 26, ls: -0.6 }));
    step.appendChild(mkText(body, { size: 12, lh: 18, color: C.muted, width: 290 }));
    applySteps.appendChild(step);
  }
  apply.appendChild(applySteps);
  page.appendChild(apply);

  const faq = dSec("Section / FAQ", { gap: 0 });
  const faqRow = mkFrame({ name: "FAQ grid", dir: "HORIZONTAL", w: D.c, gap: 80, align: "MIN" });
  const faqIntro = mkFrame({ w: 380, gap: 18 });
  faqIntro.appendChild(eyebrow("Questions"));
  faqIntro.appendChild(mkText("Before you apply.", { family: "display", size: 54, lh: 54, ls: -2, width: 360 }));
  faqIntro.appendChild(mkText("The things people most often ask us about programmes, eligibility and getting started.", { size: 15, lh: 23, color: C.muted, width: 340 }));
  faqIntro.appendChild(textLink("Ask us anything"));
  faqRow.appendChild(faqIntro);
  faqRow.appendChild(faqList(828, 5));
  faq.appendChild(faqRow);
  page.appendChild(faq);

  page.appendChild(
    ctaBand({
      eyebrow: "Not sure where to start?",
      title: "Start with a conversation.",
      body: "Tell us where you are now and what you want to change. We’ll help you find the right door.",
      primary: "Start a conversation",
      secondary: "See how we work",
    })
  );
  page.appendChild(footerBar());
  return page;
}

/* ------------------------------ Insights --------------------------------- */

function insightsDesktop() {
  const page = pageFrame("Insights / Desktop", D.w);
  page.appendChild(announceBar());
  page.appendChild(siteHeader("Insights"));
  page.appendChild(rule(D.w));

  page.appendChild(
    innerHero({
      eyebrow: "Insights & resources",
      title: [{ t: "Ideas for the work " }, { t: "ahead.", italic: true, color: C.coral }],
      lede: "Research, field notes and practical provocations from the edge of evidence, policy, design and enterprise.",
      chips: ["Read in the open", "Use what works"],
    })
  );

  const report = dSec("Section / Featured report", { bg: C.ink, pt: 96, pb: 96, gap: 0 });
  const reportRow = mkFrame({ name: "Report feature", dir: "HORIZONTAL", w: D.c, gap: 64, align: "CENTER" });
  const cover = mkFrame({
    name: "Report cover",
    w: 380,
    h: 480,
    fill: C.cream,
    radius: 8,
    pt: 26,
    pr: 26,
    pb: 24,
    pl: 26,
    gap: 14,
    stroke: C.ink,
    strokeOpacity: 0.1,
  });
  const coverTop = mkFrame({ dir: "HORIZONTAL", w: 328, justify: "SPACE_BETWEEN", align: "CENTER" });
  coverTop.appendChild(mkText("AFRIYOUTH FIELD REPORT · 01", { size: 8.5, weight: "bold", ls: 1.2, color: C.ink, opacity: 0.55 }));
  coverTop.appendChild(brandMark(32, false));
  cover.appendChild(coverTop);
  cover.appendChild(mkRich([{ t: "The state of youth innovation " }, { t: "Africa 2026", italic: true, color: C.coral }], { size: 38, lh: 42, ls: -1.2, width: 328 }));
  cover.appendChild(mkText("EVIDENCE · PRACTICE · FUTURES", { size: 8.5, weight: "bold", ls: 1.3, color: C.muted }));

  const reportCopy = mkFrame({ name: "Report copy", w: 760, gap: 18 });
  reportCopy.appendChild(eyebrow("Featured report", { light: true }));
  reportCopy.appendChild(mkRich([{ t: "The state of youth innovation in Africa." }], { size: 50, lh: 50, ls: -2, width: 700, color: C.cream }));
  reportCopy.appendChild(
    mkText("A field scan of the ideas, barriers and bright spots shaping how young people build solutions across the continent — and what funders, policymakers and institutions should do next.", { size: 16, lh: 25, color: C.cream, opacity: 0.64, width: 640 })
  );
  const reportActions = mkFrame({ dir: "HORIZONTAL", h: 52, gap: 12, pt: 6 });
  reportActions.appendChild(btn("Read the executive summary", "light"));
  reportActions.appendChild(btn("Browse the library", "outlineLight", { icon: false }));
  reportCopy.appendChild(reportActions);
  reportCopy.appendChild(mkText("12 MIN READ · PUBLISHED NOVEMBER 2026", { size: 9, weight: "semibold", ls: 1.2, color: C.cream, opacity: 0.55 }));

  reportRow.appendChild(cover);
  reportRow.appendChild(reportCopy);
  report.appendChild(reportRow);
  page.appendChild(report);

  const library = dSec("Section / Library", { gap: 40 });
  library.appendChild(
    sectionHead({
      eyebrow: "The library",
      title: "Useful, not just impressive.",
      body: "Read, borrow, challenge. If something here is useful to your work, we’d love to know.",
    })
  );
  const libraryGrid = mkFrame({ name: "Library grid", w: D.c, gap: 24 });
  for (let i = 0; i < RESOURCES.length; i += 3) {
    const row = mkFrame({ dir: "HORIZONTAL", w: D.c, gap: 24 });
    RESOURCES.slice(i, i + 3).forEach((r, j) => row.appendChild(resourceCard(r, i + j)));
    libraryGrid.appendChild(row);
  }
  library.appendChild(libraryGrid);
  page.appendChild(library);

  page.appendChild(
    ctaBand({
      eyebrow: "Let’s think together",
      title: "Let’s make the thinking useful.",
      body: "Commission a study, co-write a field note or invite us into a conversation that needs evidence.",
      primary: "Start a conversation",
      secondary: "Explore our work",
    })
  );
  page.appendChild(footerBar());
  return page;
}

/* ------------------------------- Contact --------------------------------- */

function field(label, placeholder, width, tall) {
  const f = mkFrame({ name: "Field / " + label, w: width, gap: 7 });
  f.appendChild(mkText(label, { size: 11, weight: "semibold", color: C.ink }));
  const input = mkFrame({
    name: "Input",
    w: width,
    h: tall ? 112 : 46,
    fill: C.white,
    stroke: C.ink,
    strokeOpacity: 0.18,
    radius: 10,
    pt: 13,
    pl: 14,
    pr: 14,
  });
  input.appendChild(mkText(placeholder, { size: 12, color: C.muted, opacity: 0.85, width: width - 28 }));
  f.appendChild(input);
  return f;
}

function contactDesktop() {
  const page = pageFrame("Contact / Desktop", D.w);
  page.appendChild(announceBar());
  page.appendChild(siteHeader(null));
  page.appendChild(rule(D.w));

  page.appendChild(
    innerHero({
      eyebrow: "Contact",
      title: [{ t: "Bring us the question. " }, { t: "We’ll bring the lab.", italic: true, color: C.coral }],
      lede: "Whether you’re looking for your next opportunity or a partner for a problem that matters, this is the place to start.",
      chips: ["Programs", "Partnerships", "Commissions"],
    })
  );

  const contact = dSec("Section / Contact form", { gap: 0 });
  const layout = mkFrame({ name: "Contact layout", dir: "HORIZONTAL", w: D.c, gap: 40, align: "MIN" });

  const formWrap = mkFrame({ name: "Form", w: 810, gap: 16 });
  formWrap.appendChild(mkText("Tell us what you’re working on.", { family: "display", size: 30, lh: 32, ls: -0.9, width: 600 }));
  formWrap.appendChild(mkText("Share a little context and we’ll route your message to the right person. No forms for the sake of forms.", { size: 13, lh: 20, color: C.muted, width: 600 }));

  const fieldsRow = mkFrame({ name: "Fields", dir: "HORIZONTAL", w: 790, gap: 20, wrap: true, pt: 6 });
  fieldsRow.appendChild(field("Your name (required)", "Full name", 385, false));
  fieldsRow.appendChild(field("Email address (required)", "you@example.org", 385, false));
  fieldsRow.appendChild(field("Organisation (optional)", "Where you work or study", 385, false));
  fieldsRow.appendChild(field("Country (optional)", "Where you’re based", 385, false));
  fieldsRow.appendChild(field("What brings you here? (required)", "Choose a pathway  ▾", 790, false));
  fieldsRow.appendChild(field("What are you hoping to explore? (required)", "A few sentences about the question, opportunity or collaboration on your mind.", 790, true));
  formWrap.appendChild(fieldsRow);

  const consent = mkFrame({ name: "Consent", dir: "HORIZONTAL", w: 790, gap: 10, align: "CENTER", pt: 4 });
  const box = mkFrame({ name: "Checkbox", dir: "NONE", w: 16, h: 16, fill: C.white, stroke: C.ink, strokeOpacity: 0.35, radius: 4 });
  consent.appendChild(box);
  consent.appendChild(mkText("I’m happy for AfriYouth Innovation Labs to use these details to respond to my enquiry.", { size: 11.5, lh: 17, color: C.muted, width: 720 }));
  formWrap.appendChild(consent);

  const submitRow = mkFrame({ name: "Submit", dir: "HORIZONTAL", w: 790, gap: 20, align: "CENTER", pt: 8 });
  submitRow.appendChild(btn("Send message", "primary"));
  submitRow.appendChild(mkText("This opens your email app with the message ready to send.", { size: 10.5, color: C.muted, width: 320 }));
  formWrap.appendChild(submitRow);

  const panel = mkFrame({ name: "Direct line", w: 438, fill: C.ink, radius: 24, pt: 28, pr: 28, pb: 26, pl: 28, gap: 18 });
  panel.appendChild(eyebrow("Direct line", { light: true }));
  panel.appendChild(mkText("hello@afriyouthlabs.org", { family: "display", italic: true, size: 23, color: C.cream, ls: -0.4 }));
  panel.appendChild(mkText("Kigali, Rwanda\nWorking across Africa", { size: 12.5, lh: 20, color: C.cream, opacity: 0.7 }));
  panel.appendChild(chip("Copy email", "light", { small: true }));
  panel.appendChild(rule(382, C.cream, 0.2));
  panel.appendChild(mkText("CHOOSE YOUR PATH", { size: 9, weight: "bold", ls: 1.2, color: C.cream, opacity: 0.5 }));
  const paths = ["Programmes & applications", "Partnerships", "Research & advisory", "Media & speaking"];
  for (const path of paths) {
    const pRow = mkFrame({ dir: "HORIZONTAL", w: 382, justify: "SPACE_BETWEEN", pt: 10, pb: 10 });
    pRow.appendChild(mkText(path, { size: 12.8, color: C.cream, opacity: 0.78 }));
    pRow.appendChild(mkText("→", { size: 12, color: C.cream, opacity: 0.32 }));
    panel.appendChild(pRow);
    panel.appendChild(rule(382, C.cream, 0.16));
  }

  layout.appendChild(formWrap);
  layout.appendChild(panel);
  contact.appendChild(layout);
  page.appendChild(contact);

  const faq = dSec("Section / Contact FAQ", { bg: C.cream, gap: 0 });
  const faqRow = mkFrame({ name: "FAQ grid", dir: "HORIZONTAL", w: D.c, gap: 80, align: "MIN" });
  const faqIntro = mkFrame({ w: 380, gap: 18 });
  faqIntro.appendChild(eyebrow("Before you write"));
  faqIntro.appendChild(mkText("A few useful answers.", { family: "display", size: 54, lh: 54, ls: -2, width: 360 }));
  faqIntro.appendChild(mkText("Short answers to the questions that usually land in our inbox.", { size: 15, lh: 23, color: C.muted, width: 340 }));
  faqIntro.appendChild(textLink("Email us directly"));
  faqRow.appendChild(faqIntro);
  faqRow.appendChild(faqList(828, 4));
  faq.appendChild(faqRow);
  page.appendChild(faq);

  page.appendChild(
    ctaBand({
      eyebrow: "Still exploring?",
      title: "Find the right next step.",
      body: "Browse open opportunities or see how our six disciplines connect to the change you want to make.",
      primary: "Explore programs",
      secondary: "See our work",
    })
  );
  page.appendChild(footerBar());
  return page;
}

/* ------------------------------- Mobile ---------------------------------- */

function mSec(name, o) {
  const opts = o || {};
  return mkFrame({
    name,
    w: M.w,
    fill: opts.bg || C.paper,
    pt: opts.pt === undefined ? 52 : opts.pt,
    pb: opts.pb === undefined ? 52 : opts.pb,
    pl: M.g,
    pr: M.g,
    gap: opts.gap || 0,
  });
}

function mAnnounce() {
  const bar = mkFrame({ name: "Announcement", w: M.w, h: 34, fill: C.ink, dir: "HORIZONTAL", justify: "CENTER", align: "CENTER", gap: 8, pl: M.g, pr: M.g });
  const dot = figma.createEllipse();
  dot.resize(5, 5);
  dot.fills = [solid(C.lime)];
  bar.appendChild(dot);
  bar.appendChild(mkText("Applications open · Research Fellowship, Cohort 01", { size: 9, color: C.cream }));
  return bar;
}

function mHeader() {
  const bar = mkFrame({ name: "Header", w: M.w, h: 64, fill: C.paper, dir: "HORIZONTAL", justify: "SPACE_BETWEEN", align: "CENTER", pl: M.g, pr: M.g });
  bar.appendChild(brand(false, 32));
  const toggle = mkFrame({ name: "Menu toggle", dir: "NONE", w: 38, h: 38, radius: 999, stroke: C.ink, strokeOpacity: 0.2 });
  [12, 18, 24].forEach((y) => {
    const line = mkFrame({ name: "Line", dir: "NONE", w: 16, h: 1.5, fill: C.ink });
    toggle.appendChild(line);
    line.x = 11;
    line.y = y;
  });
  bar.appendChild(toggle);
  return bar;
}

function mHero(eyebrowLabel, title, lede, chips) {
  const sec = mSec("Section / Page hero", { pt: 26, pb: 34, gap: 18 });
  sec.appendChild(eyebrow(eyebrowLabel));
  sec.appendChild(mkRich(title, { size: 46, lh: 41, ls: -2.2, width: 350 }));
  if (lede) sec.appendChild(mkText(lede, { size: 15, lh: 23, color: C.muted, width: 350 }));
  if (chips && chips.length) {
    const row = mkFrame({ dir: "HORIZONTAL", w: 350, gap: 6, wrap: true });
    for (const label of chips) row.appendChild(chip(label, "outline", { small: true }));
    sec.appendChild(row);
  }
  return sec;
}

function mHead(eyebrowLabel, title, body) {
  const box = mkFrame({ name: "Section head", w: 350, gap: 12 });
  box.appendChild(eyebrow(eyebrowLabel));
  box.appendChild(
    mkRich(Array.isArray(title) ? title : [{ t: title }], {
      size: 34,
      lh: 34,
      ls: -1.2,
      width: 350,
    })
  );
  if (body) box.appendChild(mkText(body, { size: 13.5, lh: 21, color: C.muted, width: 350 }));
  return box;
}

function mButtons(primary, secondary) {
  const box = mkFrame({ name: "Buttons", w: 350, gap: 10 });
  const first = btn(primary, "primary");
  box.appendChild(first);
  first.layoutSizingHorizontal = "FILL";
  if (secondary) {
    const second = btn(secondary, "outline", { icon: false });
    box.appendChild(second);
    second.layoutSizingHorizontal = "FILL";
  }
  return box;
}

function mFacts() {
  const row = mkFrame({ name: "Facts", dir: "HORIZONTAL", w: 350, gap: 24, pt: 14, justify: "SPACE_BETWEEN" });
  const data = [["06", "disciplines"], ["01", "shared agenda"], ["∞", "collaborations"]];
  for (const [num, label] of data) {
    const item = mkFrame({ w: 100, gap: 2 });
    item.appendChild(mkText(num, { family: "display", size: 22, lh: 24, color: C.ink }));
    item.appendChild(mkText(label.toUpperCase(), { size: 7.5, weight: "semibold", ls: 1, color: C.muted }));
    row.appendChild(item);
  }
  return row;
}

function mServiceRows(items) {
  const list = mkFrame({ name: "Services", w: 350, gap: 0 });
  for (const item of items) {
    const idx = SERVICES.indexOf(item) + 1;
    const row = mkFrame({ name: "Service / " + item.title, w: 350, gap: 7, pt: 15, pb: 15 });
    const top = mkFrame({ dir: "HORIZONTAL", w: 350, justify: "SPACE_BETWEEN", align: "CENTER" });
    const left = mkFrame({ dir: "HORIZONTAL", h: 24, gap: 10, align: "CENTER" });
    left.appendChild(mkText(String(idx).padStart(2, "0"), { size: 9.5, weight: "semibold", color: C.coralDeep }));
    left.appendChild(mkText(item.title, { family: "display", size: 20, lh: 22, ls: -0.5, width: 280 }));
    top.appendChild(left);
    top.appendChild(mkText("↗", { size: 13, color: C.ink, opacity: 0.55 }));
    row.appendChild(top);
    row.appendChild(mkText(item.desc, { size: 12, lh: 18, color: C.muted, width: 340 }));
    list.appendChild(row);
    list.appendChild(rule(350));
  }
  return list;
}

function mCTA(o) {
  const opts = o || {};
  const sec = mkFrame({ name: "Section / CTA", w: M.w, fill: C.coral, pt: 52, pb: 52, pl: M.g, pr: M.g, gap: 16 });
  sec.appendChild(eyebrow(opts.eyebrow || "Let’s make it move", { dotColor: C.ink }));
  sec.appendChild(mkRich([{ t: opts.title || "Have a problem worth solving?" }], { size: 36, lh: 35, ls: -1.4, width: 350, color: C.ink }));
  sec.appendChild(mkText(opts.body || "Tell us what you’re working on. We’ll come with questions and a practical way forward.", { size: 13.5, lh: 21, color: C.ink, opacity: 0.78, width: 340 }));
  sec.appendChild(mButtons(opts.primary || "Start a conversation", opts.secondary || "Find a program"));
  return sec;
}

function mFooter() {
  const footer = mkFrame({ name: "Footer", w: M.w, fill: C.deep, pt: 48, pb: 22, pl: M.g, pr: M.g, gap: 18 });
  footer.appendChild(brand(true, 34));
  footer.appendChild(mkText("The future is a team sport.", { family: "display", size: 30, lh: 32, ls: -1.1, width: 330, color: C.cream }));
  footer.appendChild(mkText("We’re building a connected home for young people who refuse to accept the way things are.", { size: 12.5, lh: 19, color: C.cream, opacity: 0.62, width: 320 }));
  footer.appendChild(mkText("hello@afriyouthlabs.org", { family: "display", italic: true, size: 18, color: C.cream }));
  footer.appendChild(rule(350, C.cream, 0.2));
  const cols = mkFrame({ name: "Footer nav", dir: "HORIZONTAL", w: 350, gap: 30 });
  for (const [title, links] of [
    ["EXPLORE", ["About AfriYouth", "Our work", "Programs", "Insights"]],
    ["CONNECT", ["Join a program", "Partner with us", "Commission work", "Media"]],
  ]) {
    const col = mkFrame({ w: 160, gap: 8 });
    col.appendChild(mkText(title, { size: 8.5, weight: "bold", ls: 1.4, color: C.cream, opacity: 0.45 }));
    for (const l of links) col.appendChild(mkText(l, { size: 11.5, color: C.cream, opacity: 0.8 }));
    cols.appendChild(col);
  }
  footer.appendChild(cols);
  footer.appendChild(mkText("Kigali, Rwanda · Working across Africa", { size: 10.5, color: C.cream, opacity: 0.5 }));
  footer.appendChild(rule(350, C.cream, 0.18));
  footer.appendChild(mkText("© 2026 AfriYouth Innovation Labs", { size: 9.5, color: C.cream, opacity: 0.45 }));
  return footer;
}

function mProgrammeCard(p) {
  const ink = p.dark ? C.cream : C.ink;
  const accent = p.dark
    ? C.lime
    : p.fill === C.coral || p.fill === C.lime || p.fill === C.paper
      ? C.ink
      : p.fill === C.sky
        ? C.forest
        : C.coralDeep;
  const card = mkFrame({ name: "Programme / " + p.name, w: 350, fill: p.fill, radius: 20, pt: 18, pr: 18, pb: 16, pl: 18, gap: 9 });
  const top = mkFrame({ dir: "HORIZONTAL", w: 314, justify: "SPACE_BETWEEN", align: "CENTER" });
  top.appendChild(statusPill(p.status, p.tone));
  top.appendChild(mkText(p.index, { family: "display", size: 12, color: accent }));
  card.appendChild(top);
  card.appendChild(mkText(p.type.toUpperCase(), { size: 8, weight: "semibold", ls: 1.1, color: ink, opacity: 0.55 }));
  card.appendChild(mkText(p.name, { family: "display", size: 21, lh: 23, ls: -0.5, color: ink, width: 314 }));
  card.appendChild(mkText(p.desc, { size: 11.5, lh: 17, color: ink, opacity: 0.72, width: 314 }));
  card.appendChild(rule(314, ink, 0.22));
  const meta = mkFrame({ dir: "HORIZONTAL", w: 314, justify: "SPACE_BETWEEN" });
  meta.appendChild(mkText(p.deadline, { size: 10, weight: "semibold", color: ink }));
  meta.appendChild(mkText(p.note, { size: 9, color: ink, opacity: 0.55 }));
  card.appendChild(meta);
  return card;
}

/* --------------------------- Mobile screens ------------------------------ */

function mobileHome() {
  const page = pageFrame("Home / Mobile", M.w);
  page.appendChild(mAnnounce());
  page.appendChild(mHeader());

  const hero = mSec("Section / Hero", { pt: 24, pb: 38, gap: 16 });
  hero.appendChild(eyebrow("Research · Policy · Design · Enterprise"));
  hero.appendChild(mkRich([{ t: "Africa’s next chapter is " }, { t: "youth-written.", italic: true, color: C.coral }], { size: 46, lh: 41, ls: -2.2, width: 350 }));
  hero.appendChild(mkText("We connect evidence, policy, human-centred design and enterprise to turn young people’s ideas into lasting systems change.", { size: 14.5, lh: 22, color: C.muted, width: 345 }));
  hero.appendChild(mButtons("Find your next opportunity", "See how we work"));
  hero.appendChild(mkText("A LAB FOR YOUNG CHANGEMAKERS & PARTNERS", { size: 8, weight: "semibold", ls: 1.2, color: C.muted }));
  hero.appendChild(imageSlot("hero-community.webp", 350, 380, { radiusTop: 160, radius: 24, fill: C.mint }));
  hero.appendChild(mFacts());
  page.appendChild(hero);

  const marquee = mkFrame({ name: "Marquee", w: M.w, h: 40, fill: C.ink, dir: "HORIZONTAL", justify: "CENTER", align: "CENTER" });
  marquee.appendChild(mkText("RESEARCH ✦ POLICY ✦ DESIGN ✦ ENTERPRISE ✦ FORESIGHT", { size: 8, weight: "semibold", ls: 1.6, color: C.cream }));
  page.appendChild(marquee);

  const intro = mSec("Section / Intro", { gap: 18 });
  intro.appendChild(eyebrow("Who we are"));
  intro.appendChild(mkRich([{ t: "A lab for the questions that " }, { t: "shape tomorrow.", italic: true, color: C.coral }], { size: 34, lh: 34, ls: -1.3, width: 350 }));
  intro.appendChild(mkText("AfriYouth empowers Africa’s youth to generate evidence, shape policy and build solutions that matter — bringing research, design, entrepreneurship and foresight into the same room.", { size: 13.5, lh: 21, color: C.muted, width: 350 }));
  for (const [num, title, body] of [
    ["i.", "Youth at the centre", "Young people are researchers, designers, founders and decision-makers."],
    ["ii.", "Evidence with context", "We start with lived experience and local knowledge."],
    ["iii.", "Systems over silos", "We work beyond the pilot, connecting ideas to institutions."],
  ]) {
    const row = mkFrame({ w: 350, gap: 4, pt: 8 });
    row.appendChild(mkText(num, { family: "display", size: 13, color: C.coralDeep }));
    row.appendChild(mkText(title, { family: "display", size: 19, lh: 21, ls: -0.4 }));
    row.appendChild(mkText(body, { size: 12, lh: 18, color: C.muted, width: 340 }));
    intro.appendChild(row);
  }
  intro.appendChild(textLink("Meet AfriYouth"));
  page.appendChild(intro);

  const services = mSec("Section / Disciplines", { bg: C.cream, gap: 18 });
  services.appendChild(mHead("What we do", "Six disciplines. One connected practice."));
  services.appendChild(mServiceRows(SERVICES.slice(0, 4)));
  services.appendChild(textLink("Explore all six", C.coralDeep));
  page.appendChild(services);

  const feature = mSec("Section / Featured programme", { gap: 18 });
  feature.appendChild(mHead("Opportunities", "Your next move starts here."));
  feature.appendChild(imageSlot("programme.webp", 350, 220, { radius: 20, fill: C.mint, dark: true }));
  feature.appendChild(mkText("Turn evidence into influence.", { family: "display", size: 26, lh: 28, ls: -0.8, width: 330 }));
  feature.appendChild(mkText("A 12-week, practice-led fellowship for early-career researchers ready to move beyond the report.", { size: 12.5, lh: 19, color: C.muted, width: 340 }));
  feature.appendChild(mkText("APPLICATIONS CLOSE 30 JANUARY 2027", { size: 8.5, weight: "semibold", ls: 1.1, color: C.coralDeep }));
  feature.appendChild(textLink("Explore the fellowship"));
  page.appendChild(feature);

  const ways = mSec("Section / Ways in", { bg: C.cream, gap: 16 });
  ways.appendChild(mHead("Ways in", "There’s more than one way in."));
  for (const [title, body, tint] of [
    ["For young changemakers", "Fellowships, labs and learning spaces to take an idea further.", "#F8E6DD"],
    ["For partners", "Co-create research, programmes and ventures with a youth-centred lab.", "#F1F4D7"],
    ["For institutions", "Commission evidence, facilitation and systems support.", "#E8F0F3"],
  ]) {
    const card = mkFrame({ w: 350, fill: tint, radius: 18, pt: 18, pr: 18, pb: 16, pl: 18, gap: 7 });
    card.appendChild(mkText(title, { family: "display", size: 20, lh: 22, ls: -0.4 }));
    card.appendChild(mkText(body, { size: 11.5, lh: 17, color: C.muted, width: 310 }));
    card.appendChild(mkText("Explore →", { size: 10.5, weight: "semibold", color: C.ink }));
    ways.appendChild(card);
  }
  page.appendChild(ways);

  const insights = mSec("Section / Insights", { gap: 16 });
  insights.appendChild(mHead("Insights", "Thinking out loud. Working in the open."));
  for (const [cat, title] of [["Foresight", "Why the future of work needs youth at the design table."], ["Policy", "From evidence to a seat at the table."]]) {
    const item = mkFrame({ w: 350, gap: 5, pt: 12, pb: 12 });
    item.appendChild(mkText(cat.toUpperCase(), { size: 8.5, weight: "bold", ls: 1.2, color: C.coralDeep }));
    item.appendChild(mkText(title, { family: "display", size: 18, lh: 21, ls: -0.4, width: 330 }));
    insights.appendChild(item);
    insights.appendChild(rule(350));
  }
  insights.appendChild(textLink("Visit the library"));
  page.appendChild(insights);

  page.appendChild(mCTA({ title: "Have a problem worth solving?" }));
  page.appendChild(mFooter());
  return page;
}

function mobileAbout() {
  const page = pageFrame("About / Mobile", M.w);
  page.appendChild(mAnnounce());
  page.appendChild(mHeader());
  page.appendChild(mHero("About AfriYouth", [{ t: "We connect the dots that " }, { t: "change systems.", italic: true, color: C.coral }], "A youth-centred research, policy and innovation lab working to make evidence useful and young people impossible to ignore.", ["Kigali · Rwanda", "Pan-African", "Youth-led"]));

  const media = mSec("Section / Media", { pt: 0, pb: 44, gap: 12 });
  media.appendChild(imageSlot("collaboration.webp", 350, 230, { radius: 18, fill: C.sky }));
  media.appendChild(imageSlot("design.webp", 350, 200, { radius: 18, fill: C.clay }));
  page.appendChild(media);

  const manifesto = mSec("Section / Manifesto", { gap: 14 });
  manifesto.appendChild(eyebrow("Why we exist"));
  manifesto.appendChild(mkRich([{ t: "Africa doesn’t need another pipeline of ideas that stop at the pilot. It needs " }, { t: "the infrastructure", italic: true, color: C.coral }, { t: " to move them." }], { size: 28, lh: 32, ls: -1, width: 350 }));
  manifesto.appendChild(mkText("Too often, research sits on shelves, young people are consulted but not entrusted, and promising innovations never reach the systems they were built to change.", { size: 13, lh: 20, color: C.muted, width: 345 }));
  page.appendChild(manifesto);

  const purpose = mSec("Section / Purpose", { bg: C.cream, gap: 12 });
  for (const [label, title, body, dark] of [
    ["01 / MISSION", "Empower Africa’s youth to generate evidence, shape policy and build solutions that matter.", "Through research, human-centred design and entrepreneurship.", false],
    ["02 / VISION", "An Africa where young people shape the systems they live in.", "A continent where evidence and innovation drive inclusive transformation.", true],
  ]) {
    const card = mkFrame({ w: 350, fill: dark ? C.forest : C.cream, stroke: C.ink, strokeOpacity: dark ? 0 : 0.14, radius: 20, pt: 20, pr: 20, pb: 18, pl: 20, gap: 10 });
    card.appendChild(mkText(label, { size: 8.5, weight: "bold", ls: 1.2, color: dark ? C.lime : C.coralDeep }));
    card.appendChild(mkText(title, { family: "display", size: 22, lh: 25, ls: -0.6, color: dark ? C.cream : C.ink, width: 310 }));
    card.appendChild(mkText(body, { size: 11.5, lh: 17, color: dark ? C.cream : C.muted, opacity: dark ? 0.65 : 1, width: 310 }));
    purpose.appendChild(card);
  }
  page.appendChild(purpose);

  const approach = mSec("Section / Approach", { bg: C.ink, gap: 14 });
  approach.appendChild(eyebrow("Our approach", { light: true }));
  approach.appendChild(mkRich([{ t: "Change is not a straight line. Neither are we." }], { size: 30, lh: 32, ls: -1.1, width: 350, color: C.cream }));
  for (const [num, title, body] of STEPS) {
    const row = mkFrame({ w: 350, gap: 4, pt: 10 });
    row.appendChild(rule(350, C.cream, 0.2));
    row.appendChild(mkText(num, { size: 8.5, weight: "semibold", color: C.cream, opacity: 0.5 }));
    row.appendChild(mkText(title, { family: "display", size: 20, lh: 22, color: C.cream }));
    row.appendChild(mkText(body, { size: 11, lh: 17, color: C.cream, opacity: 0.6, width: 340 }));
    approach.appendChild(row);
  }
  page.appendChild(approach);

  const values = mSec("Section / Values", { gap: 12 });
  values.appendChild(mHead("What we hold close", "Principles before polish."));
  for (const [num, title, body] of VALUES.slice(0, 3)) {
    const card = mkFrame({ w: 350, stroke: C.ink, strokeOpacity: 0.14, radius: 16, pt: 16, pr: 16, pb: 14, pl: 16, gap: 6 });
    card.appendChild(mkText(num, { size: 8.5, weight: "semibold", color: C.coralDeep }));
    card.appendChild(mkText(title, { family: "display", size: 18, lh: 20 }));
    card.appendChild(mkText(body, { size: 11, lh: 16, color: C.muted, width: 315 }));
    values.appendChild(card);
  }
  page.appendChild(values);

  page.appendChild(mCTA({ eyebrow: "Work with us", title: "We’re looking for questions, partners and people who want to move.", primary: "Start a conversation", secondary: "Explore our work" }));
  page.appendChild(mFooter());
  return page;
}

function mobileWork() {
  const page = pageFrame("Work / Mobile", M.w);
  page.appendChild(mAnnounce());
  page.appendChild(mHeader());
  page.appendChild(mHero("Our work", [{ t: "One lab. " }, { t: "Six ways in.", italic: true, color: C.coral }], "A question that needs evidence, a service that needs redesign or a system that needs to move — we bring the right mix.", ["For partners", "For institutions", "For funders"]));

  const services = mSec("Section / Services", { gap: 16 });
  services.appendChild(mHead("What we bring", "No off-the-shelf answers."));
  services.appendChild(mServiceRows(SERVICES));
  page.appendChild(services);

  const process = mSec("Section / Process", { bg: C.ink, gap: 14 });
  process.appendChild(eyebrow("How we work", { light: true }));
  process.appendChild(mkRich([{ t: "A practical, participatory way forward." }], { size: 30, lh: 32, ls: -1.1, width: 350, color: C.cream }));
  for (const [num, title, body] of STEPS) {
    const row = mkFrame({ w: 350, gap: 4, pt: 10 });
    row.appendChild(rule(350, C.cream, 0.18));
    row.appendChild(mkText(num + "  " + title, { family: "display", size: 19, lh: 21, color: C.cream }));
    row.appendChild(mkText(body, { size: 11, lh: 17, color: C.cream, opacity: 0.6, width: 340 }));
    process.appendChild(row);
  }
  page.appendChild(process);

  const cases = mSec("Section / Cases", { gap: 16 });
  cases.appendChild(mHead("Where it comes together", "Three ways the work comes together."));
  cases.appendChild(imageSlot("research.webp", 350, 200, { radius: 18, fill: C.mint }));
  cases.appendChild(mkText("A youth evidence agenda for the future of work.", { family: "display", size: 21, lh: 24, ls: -0.5, width: 330 }));
  cases.appendChild(mkText("A participatory study with young people, employers and policymakers.", { size: 11.5, lh: 17, color: C.muted, width: 335 }));
  page.appendChild(cases);

  page.appendChild(mCTA({ title: "Good work starts with a better conversation.", primary: "Start a conversation", secondary: "Browse programs" }));
  page.appendChild(mFooter());
  return page;
}

function mobilePrograms() {
  const page = pageFrame("Programs / Mobile", M.w);
  page.appendChild(mAnnounce());
  page.appendChild(mHeader());
  page.appendChild(mHero("Programs & opportunities", [{ t: "Your next move starts " }, { t: "here.", italic: true, color: C.coral }], "Fellowships, labs and learning spaces for young people ready to turn curiosity into capability."));

  const programmes = mSec("Section / Programmes", { bg: C.cream, gap: 14 });
  programmes.appendChild(mHead("Find your fit", "Open doors, not hoops."));
  const filters = mkFrame({ dir: "HORIZONTAL", w: 350, gap: 6, wrap: true, pb: 4 });
  ["All programmes 06", "Open now 04", "Fellowships 02"].forEach((f, i) => filters.appendChild(chip(f, i === 0 ? "ink" : "outline", { small: true })));
  programmes.appendChild(filters);
  for (const p of PROGRAMMES.slice(0, 3)) programmes.appendChild(mProgrammeCard(p));
  page.appendChild(programmes);

  const apply = mSec("Section / Apply", { gap: 14 });
  apply.appendChild(mHead("How it works", "From interest to impact."));
  for (const [num, title, body] of [
    ["01", "Explore", "Find the programme that fits where you are now."],
    ["02", "Apply", "Tell us about your experience, your question and what you want to change."],
    ["03", "Talk", "A conversation with our team — a two-way exchange."],
    ["04", "Begin", "A full pack, a cohort welcome and a clear plan."],
  ]) {
    const step = mkFrame({ w: 350, gap: 4, pt: 10 });
    step.appendChild(rule(350));
    step.appendChild(mkText(num, { size: 8.5, weight: "semibold", color: C.coralDeep }));
    step.appendChild(mkText(title, { family: "display", size: 19, lh: 21 }));
    step.appendChild(mkText(body, { size: 11, lh: 17, color: C.muted, width: 340 }));
    apply.appendChild(step);
  }
  page.appendChild(apply);

  page.appendChild(mCTA({ eyebrow: "Not sure where to start?", title: "Start with a conversation.", primary: "Start a conversation", secondary: "See how we work" }));
  page.appendChild(mFooter());
  return page;
}

function mobileInsights() {
  const page = pageFrame("Insights / Mobile", M.w);
  page.appendChild(mAnnounce());
  page.appendChild(mHeader());
  page.appendChild(mHero("Insights & resources", [{ t: "Ideas for the work " }, { t: "ahead.", italic: true, color: C.coral }], "Research, field notes and practical provocations from the edge of evidence, policy, design and enterprise."));

  const report = mSec("Section / Featured report", { bg: C.ink, gap: 14 });
  const cover = mkFrame({ w: 350, h: 300, fill: C.cream, radius: 8, pt: 20, pr: 20, pb: 18, pl: 20, gap: 10 });
  cover.appendChild(mkText("AFRIYOUTH FIELD REPORT · 01", { size: 8, weight: "bold", ls: 1.2, color: C.muted }));
  cover.appendChild(brandMark(32, false));
  cover.appendChild(mkRich([{ t: "The state of youth innovation " }, { t: "Africa 2026", italic: true, color: C.coral }], { size: 28, lh: 31, ls: -0.9, width: 300 }));
  cover.appendChild(mkText("EVIDENCE · PRACTICE · FUTURES", { size: 8, weight: "bold", ls: 1.2, color: C.muted }));
  report.appendChild(cover);
  report.appendChild(eyebrow("Featured report", { light: true }));
  report.appendChild(mkRich([{ t: "The state of youth innovation in Africa." }], { size: 30, lh: 32, ls: -1.1, width: 350, color: C.cream }));
  report.appendChild(mkText("A field scan of the ideas, barriers and bright spots shaping how young people build solutions across the continent.", { size: 12.5, lh: 19, color: C.cream, opacity: 0.64, width: 340 }));
  report.appendChild(btn("Read the executive summary", "light", { small: true }));
  page.appendChild(report);

  const library = mSec("Section / Library", { gap: 12 });
  library.appendChild(mHead("The library", "Useful, not just impressive."));
  for (const r of RESOURCES.slice(0, 3)) {
    const card = mkFrame({ w: 350, stroke: C.ink, strokeOpacity: 0.14, radius: 16, pt: 16, pr: 16, pb: 14, pl: 16, gap: 6 });
    card.appendChild(mkText(r.cat.toUpperCase(), { size: 8.5, weight: "bold", ls: 1.2, color: C.coralDeep }));
    card.appendChild(mkText(r.title, { family: "display", size: 18, lh: 21, ls: -0.4, width: 315 }));
    card.appendChild(mkText(r.meta.toUpperCase(), { size: 8, weight: "semibold", ls: 1, color: C.muted }));
    library.appendChild(card);
  }
  page.appendChild(library);

  page.appendChild(mCTA({ title: "Let’s make the thinking useful.", primary: "Start a conversation", secondary: "Explore our work" }));
  page.appendChild(mFooter());
  return page;
}

function mobileContact() {
  const page = pageFrame("Contact / Mobile", M.w);
  page.appendChild(mAnnounce());
  page.appendChild(mHeader());
  page.appendChild(mHero("Contact", [{ t: "Bring us the question. " }, { t: "We’ll bring the lab.", italic: true, color: C.coral }], "Whether you’re looking for your next opportunity or a partner for a problem that matters, this is where to start."));

  const form = mSec("Section / Form", { gap: 12 });
  form.appendChild(mkText("Tell us what you’re working on.", { family: "display", size: 26, lh: 28, ls: -0.8, width: 340 }));
  form.appendChild(mkText("Share a little context and we’ll route your message to the right person.", { size: 12, lh: 18, color: C.muted, width: 340 }));
  form.appendChild(field("Your name (required)", "Full name", 350, false));
  form.appendChild(field("Email address (required)", "you@example.org", 350, false));
  form.appendChild(field("What brings you here? (required)", "Choose a pathway  ▾", 350, false));
  form.appendChild(field("What are you hoping to explore? (required)", "A few sentences about your question or collaboration.", 350, true));
  const submit = mkFrame({ w: 350, gap: 8 });
  submit.appendChild(btn("Send message", "primary"));
  submit.children[0].layoutSizingHorizontal = "FILL";
  form.appendChild(submit);
  page.appendChild(form);

  const panel = mSec("Section / Direct line", { bg: C.cream, gap: 12 });
  panel.appendChild(eyebrow("Direct line"));
  panel.appendChild(mkText("hello@afriyouthlabs.org", { family: "display", italic: true, size: 20, color: C.ink }));
  panel.appendChild(mkText("Kigali, Rwanda · Working across Africa", { size: 11.5, color: C.muted }));
  for (const path of ["Programmes & applications", "Partnerships", "Research & advisory", "Media & speaking"]) {
    const row = mkFrame({ dir: "HORIZONTAL", w: 350, justify: "SPACE_BETWEEN", pt: 9, pb: 9 });
    row.appendChild(mkText(path, { size: 12, color: C.ink }));
    row.appendChild(mkText("→", { size: 11, color: C.coralDeep }));
    panel.appendChild(row);
    panel.appendChild(rule(350));
  }
  page.appendChild(panel);

  page.appendChild(mCTA({ eyebrow: "Still exploring?", title: "Find the right next step.", primary: "Explore programs", secondary: "See our work" }));
  page.appendChild(mFooter());
  return page;
}

/* ------------------------------ Page helpers ----------------------------- */

/* A visible label that sits above each screen on the canvas. */
function canvasLabel(title, meta, width) {
  const label = mkFrame({ name: "Label / " + title, w: width, h: 68, gap: 6 });
  label.appendChild(
    mkText(title, {
      family: "display",
      size: 30,
      lh: 32,
      ls: -0.9,
      color: C.ink,
    })
  );
  if (meta) {
    label.appendChild(
      mkText(meta.toUpperCase(), {
        size: 10,
        weight: "bold",
        ls: 1.6,
        color: C.coralDeep,
      })
    );
  }
  return label;
}

function placeNode(node, page, x, y) {
  if (node.parent !== page) page.appendChild(node);
  node.x = x;
  node.y = y;
}

function addLabelledScreen(page, frame, title, kind, x, y) {
  const label = canvasLabel(
    title,
    kind + " screen · " + Math.round(frame.width) + " × " + Math.round(frame.height),
    frame.width
  );
  placeNode(label, page, x, y);
  placeNode(frame, page, x, y + label.height + 28);
  return frame;
}

/* Reuse an empty page before creating one, so a brand-new Figma file (which
   already starts with "Page 1") still ends up with exactly 3 pages. */
function claimPage(name) {
  const pages = [...figma.root.children];
  let page = pages.find((p) => p.children.length === 0);

  if (!page) {
    if (pages.length >= FREE_PAGE_LIMIT) {
      throw new Error(
        "Figma's free plan allows " + FREE_PAGE_LIMIT + " pages per file, and this file already has " +
          pages.length + ". Delete a page, then run the plugin again."
      );
    }
    page = figma.createPage();
  }

  page.name = name;
  page.backgrounds = [solid(C.paper)];
  return page;
}

/* --------------------------------- Run ----------------------------------- */

async function run() {
  await loadFonts();
  await figma.loadAllPagesAsync();

  /* Start clean: remove pages created by a previous run of this plugin.
     Keep the last page (Figma always needs one) and clear it instead. */
  for (const page of [...figma.root.children]) {
    if (!GENERATED_PAGE_NAMES.includes(page.name)) continue;
    if (figma.root.children.length > 1) {
      page.remove();
    } else {
      for (const child of [...page.children]) child.remove();
      page.name = "Page 1";
    }
  }

  const pages = [...figma.root.children];
  if (pages.length > FREE_PAGE_LIMIT) {
    throw new Error(
      "This file has " + pages.length + " pages. Figma's free plan allows " + FREE_PAGE_LIMIT +
        " — delete pages until " + FREE_PAGE_LIMIT + " remain, then run again."
    );
  }

  /* A page can only be claimed if it is empty; otherwise it would be unsafe
     to overwrite existing work. Fail early with clear advice. */
  const emptyCount = pages.filter((p) => p.children.length === 0).length;
  const claimable = emptyCount + Math.max(0, FREE_PAGE_LIMIT - pages.length);
  if (claimable < FREE_PAGE_LIMIT) {
    throw new Error(
      "The plugin needs 3 free pages, but only " + claimable + " are available. " +
        "Delete or empty a page, then run again."
    );
  }

  /* 01 — cover + design system together on one page */
  const page1 = claimPage(PAGE_NAMES.combined);
  await figma.setCurrentPageAsync(page1);

  const cover = coverPage();
  const coverLabel = canvasLabel("Cover", "AfriYouth design file · v" + VERSION, cover.width);
  const top = 88;
  placeNode(coverLabel, page1, 0, top);
  placeNode(cover, page1, 0, top + coverLabel.height + 28);

  const ds = designSystemPage();
  const dsTop = cover.y + cover.height + 170;
  const dsLabel = canvasLabel("Design system", "Colour · typography · components · layout", ds.width);
  placeNode(dsLabel, page1, 0, dsTop);
  placeNode(ds, page1, 0, dsTop + dsLabel.height + 28);

  /* 02 — all six desktop screens on one page, each labelled */
  const deskPage = claimPage(PAGE_NAMES.desktop);
  await figma.setCurrentPageAsync(deskPage);
  const desktopBuilders = [
    [homeDesktop, "01 · Home"],
    [aboutDesktop, "02 · About"],
    [workDesktop, "03 · Our work"],
    [programsDesktop, "04 · Programs"],
    [insightsDesktop, "05 · Insights"],
    [contactDesktop, "06 · Contact"],
  ];
  desktopBuilders.forEach(([build, title], i) => {
    const frame = build();
    addLabelledScreen(deskPage, frame, title, "Desktop", i * 1560, 96);
  });

  /* 03 — all six mobile screens on one page, each labelled */
  const mobPage = claimPage(PAGE_NAMES.mobile);
  await figma.setCurrentPageAsync(mobPage);
  const mobileBuilders = [
    [mobileHome, "01 · Home"],
    [mobileAbout, "02 · About"],
    [mobileWork, "03 · Our work"],
    [mobilePrograms, "04 · Programs"],
    [mobileInsights, "05 · Insights"],
    [mobileContact, "06 · Contact"],
  ];
  mobileBuilders.forEach(([build, title], i) => {
    const frame = build();
    addLabelledScreen(mobPage, frame, title, "Mobile", i * 470, 96);
  });

  await figma.setCurrentPageAsync(page1);
  figma.viewport.scrollAndZoomIntoView([cover]);
  figma.notify("AfriYouth design file built · 3 pages · 6 desktop + 6 mobile screens, labelled");
  figma.closePlugin();
}

run().catch((error) => {
  console.error(error);
  figma.notify("AfriYouth build failed: " + error.message, { error: true, timeout: 12000 });
  figma.closePlugin();
});
