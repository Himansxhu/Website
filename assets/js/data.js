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
      tagline: "A science-led women's hormonal health brand — identity through to a live, interactive site.",
      role: "Product & Web Design, Brand System, Frontend",
      type: "Client project · Chiplabs",
      year: "2026",
      outcome: "Symptom quiz, a hormone explorer across six body systems, expert profiles, article hub. Brand extended into campaigns and social.",
      url: "https://maavie-web.vercel.app",
      /* Shown under the images. Delete this line to remove the caption. */
      note: "Product visuals intentionally blurred — the range has not launched publicly yet.",
      /* Alt text deliberately doesn't name individual products: the shots are
         blurred, so describing detail nobody can see would be misleading. */
      images: [
        { src: "assets/img/maavie-skinshot.webp", alt: "Maavie product photography — blurred, the range is unreleased" },
        { src: "assets/img/maavie-radiance.webp", alt: "A Maavie tube held in one hand — blurred, the range is unreleased" },
        { src: "assets/img/maavie-collagen.webp", alt: "A Maavie bottle in a styled still life — blurred, the range is unreleased" }
      ],
      logo: "assets/img/maavie-logo.webp"
    },
    {
      id: "iskcon",
      index: "02",
      layout: "dark",
      name: "ISKCON Austin",
      tagline: "A two-location temple site whose donation flow runs from a physical QR scan to a completed gift on mobile.",
      role: "UX/UI, Mobile UX, Payment Integration",
      type: "Client project · US nonprofit",
      year: "2026",
      outcome: "Visit planning, schedules, calendar and media in one clear structure. Zeffy-integrated giving with live campaign tracking.",
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
      tagline: "Two self-initiated products, used to practise flows, states and systems end to end.",
      role: "UI/UX · Figma",
      type: "Personal projects",
      year: "2025 – 2026",
      items: [
        {
          name: "Food delivery",
          desc: "Built around a low-friction checkout — wireframes through to a small system of colour, type and icons.",
          images: [
            { src: "assets/img/food-01.webp", alt: "Food delivery app onboarding screen" },
            { src: "assets/img/food-03.webp", alt: "Food delivery app home and search screen" },
            { src: "assets/img/food-05.webp", alt: "Food delivery app order successful screen" }
          ]
        },
        {
          name: "Social media",
          desc: "Onboarding, feed, profile and notifications — mapped flows and states, following Material Design and WCAG.",
          image: { src: "assets/img/social-screens.webp", alt: "Social media app profile, explore and chat screens" }
        }
      ]
    }
  ],

  /* ---------- Creative & visual design ----------
     Graphic / campaign work that sits apart from the product UI case
     studies above: social creatives, product photography, banners, print.
     Image paths point at assets/img/creative-*.webp.
     ----------------------------------------------------------------- */
  creative: {
    idx: "02 — Creative",
    // heading is injected as HTML so the <em> can take the accent
    heading: "Campaigns, creatives &amp; <em>product visuals</em>.",
    aside: "Graphic and campaign work beyond the product UI — social creatives, product photography, web banners and print, made for Maavie and freelance clients.",
    groups: [
      {
        label: "Maavie — hormone-health social campaign",
        count: "07",
        layout: "social",
        images: [
          { src: "assets/img/creative-social-01.webp", caption: "“And still snapped” — awake at 2am", alt: "Maavie social creative: a woman resting her chin on her hands under the bold headline ‘And still snapped — awake at 2am’" },
          { src: "assets/img/creative-social-02.webp", caption: "“Doing everything right” — but still feeling stuck", alt: "Maavie social creative on a warm orange background with the headline ‘Doing everything right — but still feeling stuck’" },
          { src: "assets/img/creative-social-03.webp", caption: "Breakouts, dull skin — and 2am wake-ups", alt: "Maavie social creative featuring a presenter in a white coat with the headline ‘Breakouts, dull skin and 2am wake-ups together’" },
          { src: "assets/img/creative-social-04.webp", caption: "“Sleep isn’t just rest — it’s metabolic health”", alt: "Maavie social creative on a sage background with a crescent-moon motif and the headline ‘Sleep isn’t just rest — it’s metabolic health’" },
          { src: "assets/img/creative-social-05.webp", caption: "Dry skin — skin-health explainer", alt: "Maavie educational creative with a skin-layer diagram and the headline ‘Dry skin’" },
          { src: "assets/img/creative-social-06.webp", caption: "“Why do 35s’ rules stop working at 45?”", alt: "Maavie social creative on a deep purple background with the headline ‘Why do 35s rules stop working at 45’" },
          { src: "assets/img/creative-social-07.webp", caption: "“In perimenopause, estrogen drops…”", alt: "Maavie educational creative with a blood-glucose graphic and the headline ‘In perimenopause, estrogen drops, insulin resistance rises’" }
        ]
      },
      {
        label: "Brand & fashion campaigns",
        count: "03",
        layout: "campaign",
        images: [
          { src: "assets/img/creative-campaign-01.webp", caption: "Shaista Studio — “Simple Symmetry” fashion campaign", alt: "Fashion product campaign for The Shaista Studio — a model in an embroidered blush-pink kurta beside the headline ‘Simple Symmetry’" },
          { src: "assets/img/creative-campaign-02.webp", caption: "Shaista Studio — “Pure Versatility” collection promo", alt: "Collection promotion for The Shaista Studio — two models in embroidered outfits on a warm peach set under the headline ‘Drape yourself in pure versatility’" },
          { src: "assets/img/creative-campaign-03.webp", caption: "Maavie — “What genuinely helps, and what doesn’t”", alt: "Maavie social creative on a deep plum floral background with the editorial headline ‘What genuinely helps, and honestly, what doesn’t’" }
        ]
      },
      {
        label: "Product & campaign visuals",
        count: "09",
        layout: "product",
        images: [
          { src: "assets/img/creative-product-01.webp", alt: "Maavie product styling — a tube and carton on an earthy still-life set with warm, premium lighting" },
          { src: "assets/img/creative-product-02.webp", alt: "Maavie product composition — two cream products on a lilac set with hard directional light" },
          { src: "assets/img/creative-product-03.webp", alt: "Maavie product range composition staged on blue blocks with a jar of gummies" },
          { src: "assets/img/creative-product-04.webp", alt: "Maavie product range on sculptural blocks against a bright sky backdrop" },
          { src: "assets/img/creative-product-05.webp", alt: "Maavie product range arranged on terracotta podiums with long shadows" },
          { src: "assets/img/creative-product-06.webp", alt: "Maavie products laid flat across colour-blocked lilac, peach and teal panels" },
          { src: "assets/img/creative-product-07.webp", alt: "Maavie product range on pastel colour-blocked blocks with a jar of gummies on a mint podium" },
          { src: "assets/img/creative-product-08.webp", alt: "Maavie product range staged on yellow, purple and teal colour blocks" },
          { src: "assets/img/creative-product-09.webp", alt: "Maavie product duo on a soft lilac set with a jar of gummies" }
        ]
      },
      {
        label: "Web banners",
        count: "02",
        layout: "banners",
        images: [
          { src: "assets/img/creative-banner-01.webp", alt: "Wide Maavie web banner — four products lined up on a deep red backdrop with reflections" },
          { src: "assets/img/creative-banner-02.webp", alt: "Wide Maavie web banner — three products on a deep red backdrop" }
        ]
      },
      {
        label: "Education poster — freelance",
        count: "01",
        layout: "poster",
        text: [
          "Promotional poster for Monali Mam’s Science Tutorial — concept-based coaching for classes 8th–10th.",
          "Built around a clear hierarchy: a bold headline, the teaching promises as ticked points, and contact details anchored bottom-right over a photograph of a student."
        ],
        images: [
          { src: "assets/img/creative-poster.webp", alt: "Monali Mam’s Science Tutorial poster — a smiling student holding books beside the headline ‘Expert coaching for classes 8th, 9th & 10th’ with contact numbers" }
        ]
      }
    ]
  },

  /* ---------- Featured case study (Nudge) ---------- */
  featured: {
    eyebrow: "Featured case study",
    name: "Nudge",
    oneLiner: "A learning companion that helps people come back after they miss a day.",
    problem: "People start motivated and drop off quietly. Platforms host content; almost none help a learner recover after an interruption.",
    context: "Self-initiated concept. 15 learners interviewed — students, working professionals, career switchers.",
    role: "Research, product strategy, UX, UI, design system",
    process: ["Interviews", "Journey map", "Persona", "HMW", "Flows", "UI + system"],
    decision: "Design for recovery instead of streaks. Miss a day and you get a 5-minute catch-up, not a guilt notification.",
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
      "I'm finishing a B.Tech in Computer Science with a focus on AI. Somewhere between the coursework and the freelance logo briefs, what I cared about most turned out to be the moment a person meets a product.",
      "So I do the research and the flows, draw the interfaces, build the system — then stay in the room while it gets built, often writing the frontend myself. That last step changes how I design: I stop drawing things that can't ship."
    ],
    portrait: { src: "assets/img/himanshu-detail.webp", alt: "Himanshu Ramteke, photographed in warm low light" },
    interests: ["Behaviour-first products", "Design systems", "Design-to-code", "Designing AI features people trust"]
  },

  /* ---------- Process ---------- */
  process: [
    { n: "01", title: "Understand",  text: "Talk to the people who'll use it. Nudge took 15 interviews before a single screen." },
    { n: "02", title: "Frame",       text: "A persona, a journey map, one sharp How-Might-We — so we argue about the right problem." },
    { n: "03", title: "Explore",     text: "Flows, architecture, wireframes. Many cheap options before one expensive one." },
    { n: "04", title: "Systemise",   text: "Tokens, type scale, components — a system that survives the third feature." },
    { n: "05", title: "Prototype",   text: "Make it real enough to react to. Then change it." },
    { n: "06", title: "Ship",        text: "Build the frontend, hand off clean, stay close to what happens after launch." }
  ],
  /* a real artefact from the Nudge research, shown beside the steps */
  processArtefact: { src: "assets/img/nudge-journey.webp", alt: "Journey map from the Nudge research: motivation, daily learning, a missed day, then the drop-off zone", caption: "Step 02 — the journey map that located the real problem" },

  /* ---------- Skills ---------- */
  /* Trimmed to the strongest 26. The full list is still on the resume —
     add any of these back if a role calls for it: Design iteration,
     Cross-functional collaboration, Visual hierarchy, Layout,
     Product mockups, Material Design, Canva. */
  skills: [
    { group: "Product & UX", items: ["Product thinking", "User flows", "Information architecture", "Wireframing", "Prototyping", "Interaction design", "Accessibility"] },
    { group: "Visual & Brand", items: ["UI design", "Design systems", "Typography", "Colour systems", "Brand identity", "Visual storytelling"] },
    { group: "AI", items: ["AI product design", "Generative AI", "Prompt engineering", "AI-assisted development", "Claude"] },
    { group: "Build & Tools", items: ["Frontend implementation", "HTML", "CSS", "JavaScript", "Responsive design", "Figma", "Photoshop", "Illustrator"] }
  ],

  /* ---------- Design × AI ---------- */
  ai: {
    proof: { src: "assets/img/nudge-s12.webp", alt: "Nudge's ask-a-doubt screen: an AI answer with a link back to the related lesson", caption: "Nudge — AI doubt support, designed to hand you back to the lesson" },
    heading: "AI speeds up the loop. It doesn't decide what's worth building.",
    intro: "I use generative tools the way I use a grid — as leverage, not as a substitute for judgement.",
    rows: [
      { stage: "Ideation",       ai: "Rapid exploration of directions, copy and layout before committing in Figma." },
      { stage: "Design → code",  ai: "Approved designs become responsive frontends, then I iterate on the real thing instead of the mockup." },
      { stage: "Shipping",       ai: "Maavie and ISKCON Austin were built this way — production sites, not prototypes." },
      { stage: "Designing AI features", ai: "Nudge's doubt-support answers clearly and points back to the lesson. Helpful without being the product." }
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
        "End-to-end digital experiences for client projects — flows, interfaces, visual systems, production frontends.",
        "Figma alongside AI-assisted development, working directly with founders to turn business goals into shipped products."
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
        "Branding, visual design, product mockups and social creatives, owned from concept to delivery."
      ],
      marks: [
        { src: "assets/img/brand-marvelous.webp", alt: "Marvelous Café & Restro logo — a stylised M built from a cup, steam and cutlery" },
        { src: "assets/img/brand-vip.webp",       alt: "VIP Construction logo — a roof-inspired mark above a serif wordmark" },
        { src: "assets/img/brand-vireon.webp",    alt: "Vireon logo — a camera and wing mark for a college media club" }
      ],
      highlight: "Identities for a café, a construction firm and a campus media club."
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
