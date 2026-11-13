/* =========================================================
   AfriYouth Innovation Labs — site content
   Single source of truth for labs, products and programmes.
   ========================================================= */

export const brand = {
  name: "AfriYouth Innovation Labs",
  tagline: "From Evidence to Impact.",
  secondaryTaglines: [
    "Research. Design. Innovate. Transform.",
    "Evidence. Innovation. Impact.",
  ],
  philosophy: ["Think", "Research", "Design", "Build", "Influence", "Scale"],
  capabilities: [
    "Research",
    "Policy",
    "Human-Centred Design",
    "Entrepreneurship",
    "Foresight",
  ],
  mission:
    "To empower Africa’s youth to generate evidence, shape policy, and develop innovative solutions to Africa’s most pressing socio-economic challenges through research, human-centred design, and entrepreneurship.",
  vision:
    "To build an Africa where empowered young people use evidence, innovation, and entrepreneurship to solve complex challenges, shape policies and drive inclusive and sustainable socio-economic transformation by 2050.",
  email: "hello@afriyouthlabs.org",
  location: "Kigali, Rwanda",
  reach: "Working across Africa and beyond",
};

export const labs = [
  {
    id: "innovation",
    n: "01",
    name: "Youth Innovation & Venture Lab",
    tagline: "Ideas into investable ventures",
    short:
      "We identify, nurture and advance promising ideas from young innovators — from first insight to investor readiness.",
    body:
      "The Youth Innovation & Venture Lab builds on our original incubation idea. We work alongside young founders and community innovators through human-centred design, business-model development, prototyping and market validation, then stay with them through incubation, acceleration and Demo Day.",
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
    image: "/assets/img/enterprise.webp",
    alt: "A young entrepreneur building a venture in a bright studio",
  },
  {
    id: "research",
    n: "02",
    name: "Research & Evidence Lab",
    tagline: "Evidence that can be used",
    short:
      "We generate rigorous, locally grounded evidence on Africa’s emerging socio-economic challenges.",
    body:
      "In the Research & Evidence Lab we investigate what is actually happening — and why. Our work combines applied policy research, socio-economic analysis and youth-led data collection so that decision-makers see a problem clearly and can act on it with confidence.",
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
    image: "/assets/img/research.webp",
    alt: "A facilitated research discussion around a table",
  },
  {
    id: "policy",
    n: "03",
    name: "Policy & Governance Lab",
    tagline: "Research into public decisions",
    short:
      "We translate evidence into practical policy options, institutional reform and implementation pathways.",
    body:
      "The Policy & Governance Lab connects research findings with the people who make and deliver public decisions. We test policy options against political reality, facilitate dialogue across stakeholders and support institutions to implement what they commit to.",
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
    image: "/assets/img/policy.webp",
    alt: "A young woman speaking at a policy conference",
  },
  {
    id: "challenge",
    n: "04",
    name: "Policy Innovation Challenge",
    tagline: "Our most distinctive programme",
    short:
      "Instead of asking young people what business to start, we ask what problem they can solve with evidence.",
    body:
      "The Policy Innovation Challenge asks a different question: “What is one of Africa’s most pressing problems, and what evidence-based solution can you design?” Young people work on real policy problems — producing research, diagnosis, a policy proposal, a working prototype and a final policy pitch.",
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
    image: "/assets/img/collaboration.webp",
    alt: "Young people collaborating on a policy challenge around a table",
  },
  {
    id: "foresight",
    n: "05",
    name: "Strategic Foresight & Futures Lab",
    tagline: "Practise the future",
    short:
      "Structured ways to anticipate change, navigate uncertainty and make better long-term decisions.",
    body:
      "Our Strategic Foresight & Futures Lab is what separates AfriYouth from conventional innovation hubs. We use scenarios, horizon scanning and emerging-technology analysis to help young people and institutions think beyond the next cycle — and plan for 2030, 2040 and 2050.",
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
    image: "/assets/img/foresight.webp",
    alt: "Two young women in a futures and strategy conversation",
  },
  {
    id: "academy",
    n: "06",
    name: "Career & Professional Development Academy",
    tagline: "From education to meaningful work",
    short:
      "Practical employability and professional development that moves young people from learning to earning.",
    body:
      "The Academy is practical, evidence-based and outcome-oriented — not another certificate programme. Participants progress from education to employability, employment and career progression through experiential learning, real briefs and professional feedback.",
    services: [
      "CV and cover-letter customisation",
      "LinkedIn optimisation",
      "Portfolio development",
      "Job-search strategies",
      "Understanding job descriptions",
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
    image: "/assets/img/programme.webp",
    alt: "Young professionals collaborating during a career development workshop",
  },
];

export const supportiveServices = [
  {
    id: "impact",
    n: "07",
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
    n: "08",
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
    n: "01",
    name: "Discover",
    copy: "Identify the problem through community research and lived experience.",
  },
  {
    n: "02",
    name: "Diagnose",
    copy: "Understand root causes using systems and political-economy analysis.",
  },
  {
    n: "03",
    name: "Research",
    copy: "Generate and analyse credible, locally grounded evidence.",
  },
  {
    n: "04",
    name: "Design",
    copy: "Develop a human-centred solution with the people who use it.",
  },
  {
    n: "05",
    name: "Prototype",
    copy: "Build, test and improve the solution in small, honest ways.",
  },
  {
    n: "06",
    name: "Policy",
    copy: "Develop the policy recommendations or business case that can carry it.",
  },
  {
    n: "07",
    name: "Finance",
    copy: "Connect the solution to funders, investors and partners.",
  },
  {
    n: "08",
    name: "Implement",
    copy: "Pilot the solution with the institutions that will deliver it.",
  },
  {
    n: "09",
    name: "Measure",
    copy: "Evaluate outcomes and impact, and learn what actually changed.",
  },
  {
    n: "10",
    name: "Scale",
    copy: "Scale what works — and build the capability to sustain it.",
  },
];

export const divisions = [
  {
    n: "01",
    name: "Research & Evidence",
    products: "Evidence Reports · Surveys · Impact Studies",
  },
  {
    n: "02",
    name: "Policy & Governance",
    products: "Policy Lab · Policy Papers · Policy Innovation Challenges",
  },
  {
    n: "03",
    name: "Innovation & Entrepreneurship",
    products: "Innovation Accelerator · Human-Centred Design Lab",
  },
  {
    n: "04",
    name: "Foresight & Futures",
    products: "Africa 2030/2050 Scenarios · Futures Studies",
  },
  {
    n: "05",
    name: "Leadership & Capacity Building",
    products:
      "Employability Skills Lab · Professional Skills Academy · Impact & Learning Services",
  },
];

export const capabilities = [
  {
    name: "Research",
    copy:
      "We start with evidence, context and the questions that decision-makers are actually asking.",
  },
  {
    name: "Policy",
    copy:
      "We turn findings into options, coalitions and implementation pathways that survive contact with reality.",
  },
  {
    name: "Human-Centred Design",
    copy:
      "We design with the people who live the consequences — not for them in a workshop.",
  },
  {
    name: "Entrepreneurship",
    copy:
      "We help ideas become durable ventures with a model, a market and a route to capital.",
  },
  {
    name: "Foresight",
    copy:
      "We help young people and institutions anticipate change instead of reacting to it.",
  },
];

export const values = [
  {
    n: "01",
    title: "Curiosity over assumptions",
    copy:
      "We begin with questions, not answers — and we test what we think we know.",
  },
  {
    n: "02",
    title: "Evidence over speculation",
    copy:
      "Good intentions are not enough. We bring method, data and honest analysis to the work.",
  },
  {
    n: "03",
    title: "People over projects",
    copy:
      "Young people are researchers, designers, founders and decision-makers — not beneficiaries.",
  },
  {
    n: "04",
    title: "Systems over silos",
    copy:
      "We connect research, policy, design and enterprise because the problems do.",
  },
  {
    n: "05",
    title: "Sustainability over quick fixes",
    copy:
      "We build for the long term — in institutions, in the environment and in the team.",
  },
  {
    n: "06",
    title: "Local roots, continental ambition",
    copy:
      "Local questions, African relevance and a global standard of rigour.",
  },
];

export const programmes = [
  {
    id: "accelerator",
    name: "AfriYouth Innovation Accelerator",
    status: "Applications open",
    type: "Venture lab · Cohort 01",
    description:
      "A 24-week pipeline for early-stage founders and community innovators: incubation, acceleration and Demo Day with partners, funders and decision-makers.",
    meta: [
      ["Duration", "24 weeks"],
      ["Format", "Hybrid · Kigali"],
      ["Who", "Ages 18–35"],
    ],
    deadline: "Rolling intake · Cohort 01 2027",
    image: "/assets/img/enterprise.webp",
    alt: "A young entrepreneur presenting a venture",
    tone: "dark",
  },
  {
    id: "challenge",
    name: "Policy Innovation Challenge",
    status: "Applications open",
    type: "Signature challenge · Cohort 01",
    description:
      "Young people take on a real public problem and produce research, a diagnosis, a policy proposal, a prototype and a final pitch at Policy Innovation Demo Day.",
    meta: [
      ["Duration", "12 weeks"],
      ["Format", "Hybrid"],
      ["Who", "Ages 18–32"],
    ],
    deadline: "Cohort 01 · 2027",
    image: "/assets/img/policy.webp",
    alt: "A young policy innovator speaking at a conference",
    tone: "coral",
  },
  {
    id: "bootcamp",
    name: "Employability Bootcamp",
    status: "Rolling intake",
    type: "Academy · Graduates",
    description:
      "A practical career-readiness bootcamp for graduates: applications, ATS, interviews, salary negotiation and a full employability simulation with real feedback.",
    meta: [
      ["Duration", "6 weeks"],
      ["Format", "Kigali + online"],
      ["Who", "Graduates"],
    ],
    deadline: "Next cohort · March 2027",
    image: "/assets/img/programme.webp",
    alt: "Graduates working through a career development session",
    tone: "lime",
  },
  {
    id: "university",
    name: "University Employability Programme",
    status: "Expressions of interest",
    type: "Academy · Universities",
    description:
      "A campus-based programme that prepares students for the transition from education to employment, delivered with universities and employer partners.",
    meta: [
      ["Duration", "One semester"],
      ["Format", "On campus"],
      ["Who", "Students"],
    ],
    deadline: "Expressions of interest open",
    image: "/assets/img/collaboration.webp",
    alt: "Students collaborating in a university employability workshop",
    tone: "sky",
  },
  {
    id: "skills",
    name: "Professional Skills Academy",
    status: "Rolling intake",
    type: "Academy · Professionals",
    description:
      "Leadership, critical thinking, communication, digital and AI skills, project management and career development — assessed, practised and demonstrated.",
    meta: [
      ["Duration", "8 weeks"],
      ["Format", "Remote + Kigali"],
      ["Who", "Young professionals"],
    ],
    deadline: "Rolling intake",
    image: "/assets/img/design.webp",
    alt: "Young professionals in a practical training workshop",
    tone: "paper",
  },
  {
    id: "futures",
    name: "Africa 2050 Futures Academy",
    status: "Waitlist open",
    type: "Foresight · Cohort 01",
    description:
      "A four-week introduction to strategic foresight: signals, scenarios and the future of work, culminating in a youth futures panel and a published scenario brief.",
    meta: [
      ["Duration", "4 weeks"],
      ["Format", "Online"],
      ["Who", "Ages 18–30"],
    ],
    deadline: "Waitlist open",
    image: "/assets/img/foresight.webp",
    alt: "Young people in a futures and scenario workshop",
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

export const publications = [
  {
    category: "Foresight",
    n: "01",
    title: "Africa’s Youth Workforce in 2050: Four Possible Futures",
    copy:
      "Scenarios for the continent’s largest generation — what changes if we design for work rather than only train for it.",
    meta: "Africa 2050 Futures Series",
    tone: "#c723df",
  },
  {
    category: "Policy",
    n: "02",
    title: "Policy Solutions: Youth Employment",
    copy:
      "A practical policy brief on the incentives, institutions and delivery models that can move young people into decent work.",
    meta: "Policy Solutions Series",
    tone: "#0301ff",
  },
  {
    category: "Research",
    n: "03",
    title: "Evidence Report: The State of Youth Innovation",
    copy:
      "A field scan of the ideas, barriers and bright spots shaping how young people build solutions across the continent.",
    meta: "Evidence Reports",
    tone: "#7407f5",
  },
  {
    category: "Impact",
    n: "04",
    title: "Measuring What Matters",
    copy:
      "A practical toolkit for teams who want monitoring and learning to inform decisions, not just satisfy reporting.",
    meta: "Impact & Learning",
    tone: "#0200a7",
  },
  {
    category: "Enterprise",
    n: "05",
    title: "Beyond the Pilot: Routes to Scale",
    copy:
      "Why promising youth-led ventures stall after the first grant — and the capabilities that help them grow.",
    meta: "Innovation & Venture Lab",
    tone: "#8c0bc0",
  },
  {
    category: "Design",
    n: "06",
    title: "Designing With, Not For",
    copy:
      "Three shifts that turn co-design from a photo opportunity into shared decision-making with real authority.",
    meta: "Human-Centred Design Lab",
    tone: "#c31a5b",
  },
];

export const navigation = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our work" },
  { href: "/programs", label: "Programs" },
  { href: "/insights", label: "Insights" },
];
