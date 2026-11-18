/* =========================================================
   AfriYouth Innovation Labs — site content
   Single source of truth for labs, products and programmes.
   ========================================================= */

export const brand = {
  name: "AfriYouth Innovation Labs",
  // Official brand tagline (Brand Guidelines), with the product line kept as a secondary line.
  tagline: "Fueling Innovators for Sustainable Development",
  secondaryTaglines: [
    "From Evidence to Impact.",
    "Research. Design. Innovate. Transform.",
    "Evidence. Innovation. Impact.",
  ],
  philosophy: ["Think", "Research", "Design", "Build", "Influence", "Scale"],
  // The six branding keywords defined in the Brand Guidelines.
  keywords: [
    "Innovation",
    "Youth Empowerment",
    "Sustainability",
    "Global Impact",
    "Human Centered Design",
    "Leadership Development",
  ],
  capabilities: [
    "Research",
    "Policy",
    "Human-Centred Design",
    "Entrepreneurship",
    "Foresight",
  ],
  // Mission and vision as set out in the 2026 About document.
  mission:
    "To empower Africa's youth to generate evidence, shape policy, and develop innovative solutions to Africa's most pressing socio-economic challenges through research, human-centered design, and entrepreneurship.",
  vision:
    "To build an Africa where empowered young people use evidence, innovation, and entrepreneurship to solve complex challenges, shape policies and drive inclusive and sustainable socio-economic transformation by 2050.",
  // The brand guidelines set out this shorter statement of the mission; it is
  // shown beneath the mission and vision cards on /about.
  brandStatement:
    "Broadening the critical thinking skills of the youth while enhancing their innovative ideas for sustainable development goals (SDGs) in Africa.",
  // Organisation boilerplate, verbatim from the About document.
  intro:
    "AfriYouth Innovation Labs is a research, innovation and policy consulting firm that identifies, nurtures, and advances promising ideas from Africa's young innovators to address the Sustainable Development Goals (SDGs). Through human-centered design, applied research, and innovation, we transform community-driven ideas into practical and scalable solutions that contribute to the socio-economic transformation of Africa and beyond.",
  context:
    "By 2030, Africa will have the largest workforce in the world. We need to give youth the ability and capacity to solve African problems, thus empowering their future independence and self-reliance.",
  email: "hello@afriyouthlabs.org",
  reach: "Working across Africa and beyond",
};

export const toRoman = (n) => {
  const table = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"],
    [1, "I"],
  ];
  let out = "";
  let rest = n;
  for (const [value, numeral] of table) {
    while (rest >= value) {
      out += numeral;
      rest -= value;
    }
  }
  return out;
};

export const labs = [
  {
    id: "innovation",
    n: "I",
    name: "Youth Innovation & Venture Lab",
    tagline: "Ideas into investable ventures",
    short:
      "We help young innovators take a promising idea from first spark to investor-ready.",
    body:
      "We work with young founders and community innovators from first idea to real business. We shape the idea, test it with real users, build a business model, then support them through incubation, acceleration and Demo Day.",
    services: [
      "Idea discovery",
      "Human-centred design",
      "Design thinking",
      "Business-model development",
      "Prototype development",
      "Market validation",
      "Incubation",
      "Acceleration",
      "Pitch preparation",
      "Investor readiness",
      "Impact measurement",
    ],
    productLabel: "Flagship product",
    product: "AfriYouth Innovation Accelerator",
    productNote: "Our model: Incubation → Acceleration → Demo Day.",
    image: "/assets/img/brand/venture-startup.webp",
    alt: "A young innovator holding a hand-made “Start Up” sign",
  },
  {
    id: "research",
    n: "II",
    name: "Research & Evidence Lab",
    tagline: "Evidence that can be used",
    short:
      "We produce rigorous, locally grounded evidence on the challenges Africa faces now.",
    body:
      "We find out what is really happening and why. We combine policy research, economic analysis and data collected by young people, so decision-makers can see a problem clearly and act.",
    services: [
      "Applied policy research",
      "Socio-economic research",
      "Youth research and surveys",
      "Baseline and endline studies",
      "Impact assessments",
      "Programme evaluations",
      "Institutional and stakeholder analysis",
      "Political-economy analysis",
      "Research reports",
      "Policy briefs",
      "Evidence synthesis",
    ],
    productLabel: "Flagship product",
    product: "AfriYouth Evidence Reports",
    productNote: "Commissioned evidence reports for companies and organisations.",
    image: "/assets/img/brand/field-energy.webp",
    alt: "Young engineers reviewing plans at a solar installation",
  },
  {
    id: "policy",
    n: "III",
    name: "Policy & Governance Lab",
    tagline: "Research into public decisions",
    short:
      "We turn evidence into practical policy choices, institutional reform and real delivery.",
    body:
      "We connect research to the people who make and deliver public decisions. We test options against political reality, bring everyone into the same conversation, and help institutions do what they promised.",
    services: [
      "Policy analysis and design",
      "Policy review",
      "Regulatory analysis",
      "Policy briefs",
      "Governance diagnostics",
      "Public-sector innovation",
      "Stakeholder mapping",
      "Policy dialogue facilitation",
      "Policy implementation support",
    ],
    productLabel: "Most important intellectual product",
    product: "AfriYouth Policy Solutions Series",
    productNote:
      "Our most important intellectual product — practical options for real public problems.",
    image: "/assets/img/brand/immersive-work.webp",
    alt: "A young professional working with an immersive display at a desk",
  },
  {
    id: "challenge",
    n: "IV",
    name: "Policy Innovation Challenge",
    tagline: "Our most distinctive programme",
    short:
      "Instead of asking young people what business to start, we ask what problem they can solve with evidence.",
    body:
      "Teams take on a real public problem. They research it with the people affected, work out why it persists, then design and test a practical proposal before pitching it to decision-makers.",
    services: [
      "Youth employment",
      "Education",
      "Digital transformation",
      "Artificial intelligence",
      "Agriculture",
      "Climate",
      "Health",
      "Entrepreneurship",
      "Urban development",
      "Regional integration",
    ],
    servicesLabel: "Challenge themes",
    productLabel: "Final product",
    product: "Policy Innovation Demo Day",
    productNote:
      "Research → Diagnosis → Policy proposal → Prototype → Policy pitch.",
    image: "/assets/img/brand/digital-learning.webp",
    alt: "A young person exploring a virtual-reality headset",
  },
  {
    id: "foresight",
    n: "V",
    name: "Strategic Foresight & Futures Lab",
    tagline: "Practise the future",
    short:
      "Practical ways to see change coming, plan for uncertainty and make better long-term calls.",
    body:
      "We help young people and institutions look further ahead. Using scenarios, trend scanning and new-technology analysis, we plan for 2030, 2040 and 2050 instead of just the next cycle.",
    services: [
      "Scenario planning",
      "Horizon scanning",
      "PESTLE / STEEPV analysis",
      "Future-of-work studies",
      "Emerging technology analysis",
      "Strategic foresight",
      "2030 / 2040 / 2050 scenarios",
    ],
    productLabel: "Flagship product",
    product: "Africa 2050 Futures Series",
    productNote:
      "For example: Africa’s Youth Workforce in 2050 — Four Possible Futures.",
    image: "/assets/img/brand/electronics.webp",
    alt: "Close-up of a young innovator working on a circuit board",
  },
  {
    id: "academy",
    n: "VI",
    name: "Career & Professional Development Academy",
    tagline: "From education to meaningful work",
    short:
      "Hands-on employability and professional skills that move young people from learning to earning.",
    body:
      "The Academy is practical and built around results, not another certificate. With real briefs, hands-on practice and honest feedback, participants move from education into work and career growth.",
    services: [
      "CV and cover-letter customisation",
      "LinkedIn optimisation",
      "Portfolio development",
      "Job-search strategies",
      "Understanding job descriptions",
      "Application customization",
      "Applicant Tracking Systems (ATS)",
      "Networking for employment",
      "Interview readiness and professional etiquette",
      "Professional competency assessment",
      "Leadership and management",
      "Critical thinking and problem-solving",
      "Digital and AI skills",
    ],
    productLabel: "Products",
    product:
      "Employability Bootcamp · University Employability Programme · Professional Skills Academy",
    productNote:
      "Learn → Practice → Apply → Receive feedback → Improve → Demonstrate.",
    image: "/assets/img/brand/prototyping.webp",
    alt: "A young person working carefully on an electronics prototype",
  },
];

export const supportiveServices = [
  {
    id: "impact",
    n: "VII",
    title: "Impact & Learning Services",
    intro:
      "Many organisations implement projects but struggle to demonstrate whether they actually work. We help teams understand, measure, evaluate and communicate the change they create.",
    services: [
      "Theory of Change",
      "Logical frameworks",
      "M&E systems",
      "KPIs",
      "Baseline studies",
      "Outcome measurement",
      "Impact measurement and evaluation",
      "Learning reports",
      "Impact storytelling",
    ],
    product: "AfriYouth Impact Dashboard",
  },
  {
    id: "funding",
    n: "VIII",
    title: "Funding & Investment Readiness",
    intro:
      "A fundraising service built around one question: how do you prepare, position and fund work that matters? We support organisations and founders from donor mapping to due diligence.",
    services: [
      "Grant opportunity intelligence",
      "Grant strategy",
      "Proposal development",
      "Donor mapping",
      "Investor readiness",
      "Pitch deck development",
      "Business case development",
      "Financial modelling",
      "Partnership development",
      "Due-diligence preparation",
    ],
    product: "Evidence-to-Impact Accelerator",
  },
];

export const acceleratorStages = [
  {
    n: "I",
    name: "Discover",
    copy: "Identify the problem through community research and lived experience.",
  },
  {
    n: "II",
    name: "Diagnose",
    copy: "Understand root causes using systems and political-economy analysis.",
  },
  {
    n: "III",
    name: "Research",
    copy: "Generate and analyse credible, locally grounded evidence.",
  },
  {
    n: "IV",
    name: "Design",
    copy: "Develop a human-centred solution with the people who use it.",
  },
  {
    n: "V",
    name: "Prototype",
    copy: "Build, test and improve the solution in small, honest ways.",
  },
  {
    n: "VI",
    name: "Policy",
    copy: "Develop the policy recommendations or business case that can carry it.",
  },
  {
    n: "VII",
    name: "Finance",
    copy: "Connect the solution to funders, investors and partners.",
  },
  {
    n: "VIII",
    name: "Implement",
    copy: "Pilot the solution with the institutions that will deliver it.",
  },
  {
    n: "IX",
    name: "Measure",
    copy: "Evaluate outcomes and impact, and learn what actually changed.",
  },
  {
    n: "X",
    name: "Scale",
    copy: "Scale what works — and build the capability to sustain it.",
  },
];

/* The ten stages, grouped into six moments for the visual journey. */
export const acceleratorJourney = [
  {
    id: "discover",
    n: "I",
    title: "Discover",
    moment: "A community problem appears.",
    copy:
      "Young people and community members name the challenge in their own words — before anyone rushes to a solution.",
    stages: [acceleratorStages[0]],
    image: "/assets/img/hero-community.webp",
    alt: "A group of young people laughing together outdoors",
    caption: "Community listening",
    illustration: "discover",
  },
  {
    id: "diagnose",
    n: "II",
    title: "Diagnose",
    moment: "The underlying causes become visible.",
    copy:
      "Systems and political-economy analysis reveal what is really holding the problem in place — not just its symptoms.",
    stages: [acceleratorStages[1]],
    image: "/assets/img/collaboration.webp",
    alt: "Three colleagues discussing a challenge around a table with laptops",
    caption: "Systems mapping",
    illustration: "diagnose",
  },
  {
    id: "research",
    n: "III",
    title: "Research",
    moment: "Evidence and insights emerge.",
    copy:
      "Locally grounded evidence is generated and analysed with the people closest to the problem, so the next decision rests on more than opinion.",
    stages: [acceleratorStages[2]],
    image: "/assets/img/research.webp",
    alt: "A group of young researchers listening during a meeting",
    caption: "Evidence review",
    illustration: "research",
  },
  {
    id: "design-prototype",
    n: "IV",
    title: "Design & prototype",
    moment: "An idea becomes a testable solution.",
    copy:
      "A human-centred idea is designed with its users, then built, tested and improved in small, honest ways.",
    stages: [acceleratorStages[3], acceleratorStages[4]],
    image: "/assets/img/design.webp",
    alt: "Young people sketching and making things together at a work table",
    caption: "Co-design and testing",
    illustration: "design",
  },
  {
    id: "policy-finance",
    n: "V",
    title: "Policy & finance",
    moment: "The solution gains institutional and financial support.",
    copy:
      "A policy case and a business case give the solution somewhere to land — with the institutions, funders and partners that can carry it.",
    stages: [acceleratorStages[5], acceleratorStages[6]],
    image: "/assets/img/policy.webp",
    alt: "A young woman speaking into a microphone at a podium",
    caption: "Policy dialogue",
    illustration: "policy",
  },
  {
    id: "implement-measure-scale",
    n: "VI",
    title: "Implement, measure & scale",
    moment: "The solution moves into the real world.",
    copy:
      "It is piloted with the institutions that will deliver it, evaluated for what actually changed, and grown only where it works.",
    stages: [acceleratorStages[7], acceleratorStages[8], acceleratorStages[9]],
    image: "/assets/img/brand/field-energy.webp",
    alt: "A field team inspecting a solar installation",
    caption: "Delivery and learning",
    illustration: "scale",
  },
];

export const divisions = [
  {
    n: "I",
    name: "Research & Evidence",
    products: "Evidence Reports · Surveys · Impact Studies",
  },
  {
    n: "II",
    name: "Policy & Governance",
    products: "Policy Lab · Policy Papers · Policy Innovation Challenges",
  },
  {
    n: "III",
    name: "Innovation & Entrepreneurship",
    products: "Innovation Accelerator · Human-Centred Design Lab",
  },
  {
    n: "IV",
    name: "Foresight & Futures",
    products: "Africa 2030/2050 Scenarios · Futures Studies",
  },
  {
    n: "V",
    name: "Leadership & Capacity Building",
    products:
      "Employability Skills Lab · Professional Skills Academy · Impact & Learning Services",
  },
];

export const capabilities = [
  {
    name: "Research",
    copy:
      "We begin with evidence, context and the questions decision-makers are really asking.",
  },
  {
    name: "Policy",
    copy:
      "We turn findings into practical options and coalitions that hold up in the real world.",
  },
  {
    name: "Human-Centred Design",
    copy:
      "We design with the people who live with the consequences — not for them.",
  },
  {
    name: "Entrepreneurship",
    copy:
      "We help ideas grow into ventures with a model, a market and a route to funding.",
  },
  {
    name: "Foresight",
    copy:
      "We help young people and institutions get ahead of change instead of chasing it.",
  },
];

// Brand voice attributes — Brand Guidelines, "Voice & Tone".
export const voice = [
  {
    n: "I",
    title: "Inspirational",
    copy:
      "Inspire and motivate our audience, especially young people, with positive and uplifting messages.",
  },
  {
    n: "II",
    title: "Empowering",
    copy:
      "Empower individuals to take action, make a difference, and be part of our mission.",
  },
  {
    n: "III",
    title: "Innovative",
    copy:
      "Reflect our commitment to innovation and creativity in addressing challenges.",
  },
  {
    n: "IV",
    title: "Informative",
    copy:
      "Provide valuable information and insights related to our programs, initiatives, and impact.",
  },
  {
    n: "V",
    title: "Passionate",
    copy:
      "Convey our dedication and passion for empowering African youth and driving positive change.",
  },
];

export const programmes = [
  {
    id: "accelerator",
    name: "AfriYouth Innovation Accelerator",
    status: "Venture lab",
    type: "Youth Innovation & Venture Lab",
    description:
      "Our first programme, now an accelerator. We help young founders test an idea with real users, build a business model, and move through incubation, acceleration and Demo Day.",
    meta: [
      ["Model", "Incubation → Acceleration → Demo Day"],
      ["Built on", "Idea discovery · Human-centred design · Prototyping"],
      ["Product", "AfriYouth Innovation Accelerator"],
    ],
    note: "Idea discovery → Incubation → Acceleration → Demo Day",
    image: "/assets/img/brand/venture-startup.webp",
    alt: "A young innovator holding a hand-made “Start Up” sign",
    tone: "dark",
  },
  {
    id: "challenge",
    name: "Policy Innovation Challenge",
    status: "Signature challenge",
    type: "Our most unique product",
    description:
      "Instead of asking what business to start, we ask what problem you can solve with evidence. Teams take on a real public problem, propose a policy, build a prototype and pitch it at Demo Day.",
    meta: [
      ["Outputs", "Research → Diagnosis → Policy proposal → Prototype → Policy pitch"],
      ["Themes", "Youth employment · Education · AI · Climate and more"],
      ["Final product", "Policy Innovation Demo Day"],
    ],
    note: "Ten challenge themes, from youth employment to regional integration",
    image: "/assets/img/brand/digital-learning.webp",
    alt: "A young person exploring a virtual-reality headset beside a table of electronics",
    tone: "coral",
  },
  {
    id: "bootcamp",
    name: "Employability Bootcamp",
    status: "Academy product",
    type: "For graduates",
    description:
      "A practical career programme for graduates. You work through one fictional job from start to finish: application, screening, test, interview, case study and salary talk.",
    meta: [
      ["For", "Graduates"],
      ["Covers", "CV and cover letters · LinkedIn · ATS · Interview readiness"],
      ["Model", "Learn → Practice → Apply → Feedback → Demonstrate"],
    ],
    note: "Part of the Career & Professional Development Academy",
    image: "/assets/img/brand/prototyping.webp",
    alt: "A young person working carefully on an electronics prototype",
    tone: "lime",
  },
  {
    id: "university",
    name: "University Employability Programme",
    status: "Academy product",
    type: "For university students",
    description:
      "The university version of our employability work, helping students move from study into work and on to career growth.",
    meta: [
      ["For", "University students"],
      ["Pathway", "Education → Employability → Employment"],
      ["Covers", "The core employability curriculum"],
    ],
    note: "Part of the Career & Professional Development Academy",
    image: "/assets/img/brand/field-energy.webp",
    alt: "Three young engineers reviewing plans at a solar installation",
    tone: "sky",
  },
  {
    id: "skills",
    name: "Professional Skills Academy",
    status: "Academy product",
    type: "For young professionals",
    description:
      "Practical professional development, not certificate collecting. Six skill tracks, each one assessed, practised and shown in a portfolio.",
    meta: [
      ["Track 01", "Leadership & Management"],
      ["Track 02", "Critical Thinking & Problem-Solving"],
      ["Tracks 03–06", "Communication · Digital & AI · Projects · Career"],
    ],
    note: "Assessment → Training → Real-world challenge → Feedback → Portfolio",
    image: "/assets/img/brand/immersive-work.webp",
    alt: "A young professional working at a desk with a virtual-reality headset",
    tone: "paper",
  },
];

export const academyTracks = [
  {
    title: "Leadership & Management",
    copy:
      "Strategic leadership, teamwork, conflict management and change management.",
  },
  {
    title: "Critical Thinking & Problem-Solving",
    copy:
      "Analytical thinking, decision-making, systems thinking and creativity.",
  },
  {
    title: "Communication & Professionalism",
    copy:
      "Professional communication, presentation, negotiation and workplace etiquette.",
  },
  {
    title: "Digital & AI Skills",
    copy:
      "Digital productivity, AI literacy, responsible AI use and data literacy.",
  },
  {
    title: "Project & Performance Management",
    copy:
      "Project management, results-based management, M&E and impact measurement.",
  },
  {
    title: "Career & Personal Development",
    copy:
      "Personal branding, networking, career planning, adaptability and continuous learning.",
  },
];

export const employabilitySteps = [
  "Analyse the job description",
  "Research the organisation",
  "Customise the CV",
  "Write a tailored cover letter",
  "Submit the application",
  "Complete a psychometric test",
  "Attend the interview",
  "Complete a case study",
  "Negotiate the salary",
  "Receive structured feedback",
];

// The three publication series set out in the About document. Programme and
// service products (Demo Day, the Impact Dashboard, the Accelerator) belong on
// Programs and Our Work, not in the insights library.
export const publications = [
  {
    category: "Foresight",
    n: "I",
    title: "Africa’s Youth Workforce in 2050: Four Possible Futures",
    copy:
      "A study from our Africa 2050 Futures Series: four futures for the continent’s largest generation.",
    meta: "Africa 2050 Futures Series",
    tone: "#c723df",
    image: "/assets/img/foresight.webp",
    imageAlt: "A young researcher working with scenario maps and horizon planning",
  },
  {
    category: "Policy",
    n: "II",
    title: "AfriYouth Policy Solutions Series",
    copy:
      "Practical policy options for real public problems, built on our research.",
    meta: "Policy & Governance Lab",
    tone: "#c723df",
    image: "/assets/img/policy.webp",
    imageAlt: "A policy roundtable in discussion around a public problem",
  },
  {
    category: "Research",
    n: "III",
    title: "AfriYouth Evidence Reports",
    copy:
      "Commissioned evidence reports for companies and organisations: research, surveys and impact studies.",
    meta: "Research & Evidence Lab",
    tone: "#c723df",
    image: "/assets/img/research.webp",
    imageAlt: "A researcher reviewing evidence and survey data with a team",
  },
];

// Participant and partner stories for the homepage. Each card needs a real
// person or partner, so this stays empty until the stories are confirmed; the
// homepage section renders only once there is at least one entry. Shape:
//   {
//     theme: "Digital economy",
//     country: "Kenya",
//     name: "Full name",
//     role: "Innovation Accelerator participant",
//     title: "One line on what they built or changed.",
//     image: "/assets/img/hero-community.webp",
//     alt: "Describe the person in the photograph",
//     href: "/contact?topic=programs",
//   }
export const stories = [];

export const navigation = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our work" },
  { href: "/programs", label: "Programs" },
  { href: "/insights", label: "Insights" },
];
