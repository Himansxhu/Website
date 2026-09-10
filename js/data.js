/* =============================================================
   SITE CONTENT
   -------------------------------------------------------------
   Edit this file to update the portfolio. Everything below is
   rendered by js/render.js — no need to touch the HTML.
   Only include facts you can stand behind.
   ============================================================= */

window.SITE = {

  /* ---------- Identity ---------- */
  name: "Himanshu Ramteke",
  role: "UI/UX Designer · AI Product Designer",
  location: "Bhilai, India",
  status: "Design Intern at Chiplabs Solution",     // shown in hero + footer
  email: "himanshuramteke711@gmail.com",
  phone: "+91 6260566457",
  resume: "assets/Himanshu-Ramteke-Resume.pdf",

  /* Social / external links. Add GitHub, Behance, etc. here when you have them. */
  links: [
    { label: "LinkedIn",  url: "https://linkedin.com/in/himanshu-ramteke", short: "in" },
    { label: "Email",     url: "mailto:himanshuramteke711@gmail.com",       short: "@"  }
    // { label: "GitHub",  url: "https://github.com/your-handle", short: "gh" },
  ],

  /* ---------- Hero ----------
     The name is set line by line so it can be animated and layered.
     Keep it to two lines — it's sized to fill the viewport.
     -------------------------------------------------------------- */
  hero: {
    name: ["Himanshu", "Ramteke"],
    role: "UI/UX Designer · AI Product Designer",
    lede: "Designing digital products where human experience meets intelligent technology.",
    portrait: {
      src: "assets/img/himanshu-portrait.webp",
      alt: "Portrait of Himanshu Ramteke, lit from the right by warm studio light."
    }
  },

  /* ---------- Selected work ----------
     layout options: "split" | "dark" | "pair"
     ----------------------------------- */
  projects: [
    {
      id: "maavie",
      index: "01",
      layout: "split",
      name: "Maavie Rituals",
      tagline: "A science-led women's hormonal health brand — from identity to a live, interactive website.",
      role: "Product & Web Design, Brand System, Frontend",
      type: "Client project · Chiplabs",
      year: "2026",
      outcome: "Shipped end-to-end: interactive symptom quiz, a hormone explorer mapping one hormone across six body systems, expert profiles and an article hub. Brand system extended into campaigns, social and Reels.",
      url: "https://maavie-web.vercel.app",
      images: [
        { src: "assets/img/maavie-skinshot.webp", alt: "Maavie Skin Shot liquid-gel sachet styled with grapes and a glass of water" },
        { src: "assets/img/maavie-radiance.webp", alt: "Hand holding the Maavie Radiance tube" },
        { src: "assets/img/maavie-collagen.webp", alt: "Maavie collagen stick pack, 10g of collagen per serving" }
      ],
      logo: "assets/img/maavie-logo.webp"
    },
    {
      id: "iskcon",
      index: "02",
      layout: "dark",
      name: "ISKCON Austin",
      tagline: "A two-location temple website with a donation flow designed to work from a physical QR scan to a completed gift on mobile.",
      role: "UX/UI, Mobile UX, Payment Integration",
      type: "Client project · US nonprofit",
      year: "2026",
      outcome: "Clear information architecture for a broad, non-technical audience — visit planning, weekly schedules, festival calendar, virtual tour and media. Donation flow integrated with Zeffy, with live progress tracking for a $4.5M capital campaign.",
      url: "https://iskcon-austin-woad.vercel.app",
      flow: ["Scan on-site QR", "Land on mobile", "Choose a gift", "Pay via Zeffy", "See campaign progress"],
      /* Add a real screenshot here when ready:
         image: { src: "assets/img/iskcon-home.webp", alt: "ISKCON Austin homepage" } */
    },
    {
      id: "concepts",
      index: "03",
      layout: "pair",
      name: "App concepts",
      tagline: "Two self-initiated mobile products used to practise flows, states and systems end to end.",
      role: "UI/UX · Figma",
      type: "Personal projects",
      year: "2025 – 2026",
      items: [
        {
          name: "Food delivery",
          desc: "Built around a low-friction checkout: wireframes, high-fidelity UI and a small design system of colour, type scale and icons.",
          images: [
            { src: "assets/img/food-01.webp", alt: "Food delivery app onboarding screen" },
            { src: "assets/img/food-03.webp", alt: "Food delivery app home and search screen" },
            { src: "assets/img/food-05.webp", alt: "Food delivery app order successful screen" }
          ]
        },
        {
          name: "Social media",
          desc: "Onboarding, feed, profile and notifications with mapped user flows and interaction states, applying Material Design and WCAG guidance.",
          image: { src: "assets/img/social-screens.webp", alt: "Social media app profile, explore and chat screens" }
        }
      ]
    }
  ],

  /* ---------- Featured case study (Nudge) ---------- */
  featured: {
    eyebrow: "Featured case study",
    name: "Nudge",
    oneLiner: "A learning companion that helps people come back after they miss a day.",
    problem: "People start online courses motivated and drop off quietly. Platforms host content; almost none of them help a learner recover after an interruption.",
    context: "Self-initiated product concept. Research with 15 learners across students, working professionals and career switchers.",
    role: "Research, product strategy, UX, UI, design system",
    process: ["Interviews", "Journey map", "Persona", "HMW", "Flows", "UI + system"],
    decision: "Design for recovery instead of streaks. Missing a day triggers a 5-minute catch-up and a calm message — not a broken streak and a guilt notification.",
    insights: [
      { n: "53%", t: "said consistency was their biggest challenge" },
      { n: "87%", t: "used YouTube as their primary learning source" },
      { n: "15",  t: "learners interviewed" }
    ],
    hero: { src: "assets/img/nudge-hero.webp", alt: "Nudge app hero — a phone on a green podium reading 'Learn anything. Stay consistent.'" },
    screens: [
      { src: "assets/img/nudge-s09.webp", alt: "Nudge recovery screen: 'You missed 2 days. That's okay. Your progress is still here.'" },
      { src: "assets/img/nudge-s06.webp", alt: "Nudge home screen with a 4-day streak and today's 10-minute goal" },
      { src: "assets/img/nudge-s10.webp", alt: "Nudge growth screen showing lessons done, time spent and confidence before vs now" }
    ],
    cta: { label: "Read the full case study", href: "nudge.html" }
  },

  /* ---------- About ---------- */
  about: {
    heading: "I came to design through engineering, and I never fully left.",
    paragraphs: [
      "I'm finishing a B.Tech in Computer Science with a focus on AI, and somewhere between the coursework and the freelance logo briefs I realised the part I cared about most was the moment a person meets a product — and whether it makes sense to them.",
      "So my work sits in the middle. I do the research and the flows, I draw the interfaces and build the design systems, and then I stay in the room while it gets built — often building the frontend myself with AI-assisted workflows. That last step changes how I design: I stop drawing things that can't ship.",
      "The AI part isn't a gimmick to me. Tools like Claude collapse the distance between an idea and a working screen, which means more of my time goes to the questions that matter — who is this for, what are they really trying to do, and what happens when they fail?"
    ],
    interests: ["Behaviour-first products", "Design systems", "Design-to-code", "Designing AI features people trust"]
  },

  /* ---------- Process ---------- */
  process: [
    { n: "01", title: "Understand",  text: "Talk to the people who'll use it. For Nudge that meant 15 learner interviews before a single screen." },
    { n: "02", title: "Frame",       text: "Turn what I heard into a persona, a journey map and a sharp How-Might-We — so the team argues about the right problem." },
    { n: "03", title: "Explore",     text: "Flows, information architecture and wireframes. Many cheap options before one expensive one." },
    { n: "04", title: "Systemise",   text: "Tokens, type scale, components. A brand and a design system that survive the second and third feature." },
    { n: "05", title: "Prototype & test", text: "Make it real enough to react to. Then change it." },
    { n: "06", title: "Ship",        text: "Build the responsive frontend with AI-assisted development, hand off cleanly, and stay close to what happens after launch." }
  ],

  /* ---------- Skills ---------- */
  skills: [
    { group: "Product & UX", items: ["Product thinking", "User flows", "Information architecture", "Wireframing", "Prototyping", "Interaction design", "Accessibility", "Design iteration", "Cross-functional collaboration"] },
    { group: "Visual & Brand", items: ["UI design", "Design systems", "Typography", "Colour systems", "Visual hierarchy", "Brand identity", "Layout", "Product mockups", "Visual storytelling"] },
    { group: "AI", items: ["AI product design", "Generative AI", "Prompt engineering", "AI-assisted development", "Claude"] },
    { group: "Build & Tools", items: ["Frontend implementation", "HTML", "CSS", "JavaScript", "Responsive design", "Material Design", "Figma", "Photoshop", "Illustrator", "Canva"] }
  ],

  /* ---------- Design × AI ---------- */
  ai: {
    heading: "AI speeds up the loop. It doesn't decide what's worth building.",
    intro: "I use generative tools the way I use a grid — as leverage, not as a substitute for judgement. Here's where they actually show up in my work.",
    rows: [
      { stage: "Ideation",       ai: "Rapid exploration of directions, copy and layout options before committing in Figma." },
      { stage: "Design → code",  ai: "Claude and prompt engineering to turn approved designs into responsive frontends, then iterate on the real thing instead of the mockup." },
      { stage: "Shipping",       ai: "AI-assisted implementation on Maavie and ISKCON Austin — production sites, not prototypes." },
      { stage: "Designing AI features", ai: "In Nudge, an AI doubt-support feature designed to answer clearly and point back to the lesson — helpful without being the product." }
    ]
  },

  /* ---------- Experience ---------- */
  experience: [
    {
      when: "02/2026 — Present",
      year: "2026",
      company: "Chiplabs Solution Pvt. Ltd.",
      role: "Design Intern",
      meta: "Integrated marketing company · India + US · chiplabs.tech",
      points: [
        "Design end-to-end digital experiences for startup and client projects — user flows, responsive interfaces, visual systems and production-ready frontends.",
        "Use Figma alongside AI-assisted development with Claude to accelerate design-to-development iteration.",
        "Work directly with founders and cross-functional teams to turn business goals into UI concepts, brand systems and shipped products."
      ],
      highlight: "Maavie Rituals and ISKCON Austin shipped here."
    },
    {
      when: "2025 — Present",
      year: "2025",
      company: "Independent clients",
      role: "Freelance Graphic Designer",
      meta: "Remote · multiple industries",
      points: [
        "Branding, visual design, product mockups, social creatives and promotional assets — owning each project from concept to final delivery."
      ],
      highlight: "Café, construction and campus-media identities, print and social."
    },
    {
      when: "2022 — 2026",
      year: "2022",
      company: "Bhilai Institute of Technology, Durg",
      role: "B.Tech, Computer Science & Engineering (AI)",
      meta: "Chhattisgarh, India",
      points: [],
      highlight: ""
    }
  ],

  /* ---------- Contact ---------- */
  contact: {
    headline: ["If you're building something", "people need to come back to,", "let's talk."],
    sub: "Product design roles, freelance product and brand work, or a second pair of eyes on a flow that isn't converting."
  }
};
