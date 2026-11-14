/* AfriYouth Innovation Labs — design tokens
   Values are resolved at the 1440px desktop breakpoint so the plugin
   reproduces the live site's computed layout, not its clamp() ranges. */

const VIEW = 1440;
const GUTTER = 66; // 4.6vw at 1440, under the 4.75rem cap
const CONTENT = VIEW - GUTTER * 2; // 1308
const SECTION = 130; // 9vw at 1440
const CHAPTER = 115; // 8vw at 1440
const RADIUS = 20; // 1.25rem
const RADIUS_LG = 32; // 2rem

const COLORS = {
  ink: "#0D0624",
  deep: "#070212",
  duke: "#0200A7",
  blue: "#0301FF",
  pink: "#C723DF",
  violet: "#7407F5",
  purple: "#3A0A86",
  paper: "#F4F3F8",
  cream: "#FBFAFF",
  white: "#FFFFFF",
  muted: "#5B5574",
  mutedSoft: "#7D7794",
  lineStrong: "#0D062440",
  limeSoft: "#EBE9FF",
  sky: "#C9C5FF",
  mint: "#EFEAFF",
  clay: "#F3DBFF",
  coralDeep: "#8C0BC0",
};

const LINE = 1;

// Type scale (size, line-height multiplier, letter-spacing in em)
const TYPE = {
  hero: { size: 95, lh: 0.9, ls: -0.058, weight: "SemiBold" },
  h1: { size: 101, lh: 0.94, ls: -0.052, weight: "SemiBold" },
  pageH1: { size: 89, lh: 0.94, ls: -0.052, weight: "SemiBold" },
  h2: { size: 66, lh: 0.99, ls: -0.048, weight: "SemiBold" },
  chapter: { size: 76, lh: 0.94, ls: -0.052, weight: "SemiBold" },
  belief: { size: 89, lh: 0.94, ls: -0.055, weight: "SemiBold" },
  h3: { size: 40, lh: 1.06, ls: -0.035, weight: "SemiBold" },
  h4: { size: 25, lh: 1.15, ls: -0.03, weight: "SemiBold" },
  cardTitle: { size: 30, lh: 1.12, ls: -0.035, weight: "SemiBold" },
  stageTitle: { size: 20, lh: 1.1, ls: -0.03, weight: "SemiBold" },
  lede: { size: 20, lh: 1.62, ls: 0, weight: "Regular" },
  body: { size: 17, lh: 1.6, ls: 0, weight: "Regular" },
  small: { size: 15, lh: 1.6, ls: 0, weight: "Regular" },
  tiny: { size: 13, lh: 1.45, ls: 0, weight: "Regular" },
  eyebrow: { size: 11, lh: 1.3, ls: 0.15, weight: "Bold", uppercase: true },
  label: { size: 10, lh: 1.4, ls: 0.15, weight: "Bold", uppercase: true },
  micro: { size: 11, lh: 1.5, ls: 0.11, weight: "Bold", uppercase: true },
  nav: { size: 13.6, lh: 1.2, ls: 0, weight: "Medium" },
  button: { size: 14, lh: 1.2, ls: 0, weight: "SemiBold" },
};

const FONT_ROLES = ["display", "body"];
const FONT_WEIGHTS = ["Regular", "Medium", "SemiBold", "Bold", "ExtraBold"];
const FONTS = { display: "Poppins", body: "Plus Jakarta Sans" };

const DOC = {
  email: "hello@afriyouthlabs.org",
  location: "Kigali, Rwanda",
};
