/* =============================================================
   RENDER — turns js/data.js into markup.
   You shouldn't need to edit this to change content.
   ============================================================= */
(function () {
  const S = window.SITE;
  if (!S) return;

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const img = (o, cls = "") => o ? `<figure class="img reveal-img ${cls}"><img src="${esc(o.src)}" alt="${esc(o.alt)}" loading="lazy" decoding="async"></figure>` : "";
  const set = (attr, val) => $$(`[data-text="${attr}"]`).forEach((el) => (el.textContent = val));

  /* ---------- simple text slots ---------- */
  set("name", S.name);
  set("status", S.status);
  set("location", S.location);
  set("hero-lede", S.hero.lede);
  set("hero-role", S.hero.role);
  set("about-heading", S.about.heading);

  /* ---------- hero ---------- */
  // each line gets its own overflow-hidden wrapper so it can rise into place
  const heroName = $('[data-render="hero-name"]');
  if (heroName) {
    // joined with a newline so the accessible name reads "Himanshu Ramteke"
    heroName.innerHTML = S.hero.name
      .map((l) => `<span class="ln"><span>${esc(l)}</span></span>`)
      .join("\n");
  }
  const portrait = $(".chero__portrait img");
  if (portrait && S.hero.portrait) {
    portrait.src = S.hero.portrait.src;
    portrait.alt = S.hero.portrait.alt;
  }

  /* ---------- strip ---------- */
  const strip = $('[data-render="strip"]');
  if (strip) {
    const words = ["User flows", "Information architecture", "Design systems", "Brand identity", "AI-assisted development", "Prototyping", "Frontend implementation", "Prompt engineering", "Interaction design"];
    const one = words.map((w) => `<span>${esc(w)}</span>`).join("");
    strip.innerHTML = one + one; // duplicated for seamless loop
  }

  /* ---------- menu meta ---------- */
  const mm = $('[data-render="menu-meta"]');
  if (mm) mm.innerHTML = `<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>` + S.links.filter(l => l.label !== "Email").map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");

  /* ---------- projects ---------- */
  const meta = (pr) => `<p class="meta"><span><b>${esc(pr.role)}</b></span><span>${esc(pr.type)}</span><span>${esc(pr.year)}</span></p>`;
  const name = (pr) => `<h3 class="name display"><span class="idx">${esc(pr.index)}</span>${esc(pr.name)}</h3>`;
  const visit = (pr) => pr.url ? `<a class="link" href="${esc(pr.url)}" target="_blank" rel="noopener">Visit live site <span class="arr" aria-hidden="true">↗</span></a>` : "";

  const renderers = {
    split: (pr) => `
      <article class="project split" id="p-${esc(pr.id)}">
        <div class="copy rv">
          ${meta(pr)}
          ${name(pr)}
          <p class="tagline" style="margin-top:var(--s-3)">${esc(pr.tagline)}</p>
          <p class="outcome" style="margin-top:var(--s-3)"><b>Outcome —</b> ${esc(pr.outcome)}</p>
          <div class="actions">${visit(pr)}</div>
        </div>
        <div class="visual">
          ${pr.images.map((im, i) => `<figure class="img reveal-img">${i === 0 && pr.logo ? `<span class="logo-chip"><img src="${esc(pr.logo)}" alt="" loading="lazy"></span>` : ""}<img src="${esc(im.src)}" alt="${esc(im.alt)}" loading="lazy" decoding="async"></figure>`).join("")}
        </div>
      </article>`,

    dark: (pr) => `
      <article class="project dark on-pine" id="p-${esc(pr.id)}">
        <div class="copy rv">
          ${meta(pr)}
          ${name(pr)}
          <p class="tagline" style="margin-top:var(--s-3)">${esc(pr.tagline)}</p>
          <p class="outcome" style="margin-top:var(--s-3)"><b>Outcome —</b> ${esc(pr.outcome)}</p>
          <ol class="flow" aria-label="Donation flow">
            ${(pr.flow || []).map((f, i) => `<li><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="t">${esc(f)}</span></li>`).join("")}
          </ol>
          <div class="actions">${visit(pr)}</div>
        </div>
        <div class="visual rv" data-delay="1">
          <div class="stat"><span class="n">$4.5M</span><span class="t">capital campaign with live progress tracking on the site</span></div>
          ${pr.image ? img(pr.image) : `
          <div class="give" aria-label="Illustration of the mobile donation flow">
            <div class="top"><span>Scanned on-site</span><span>Zeffy</span></div>
            <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:1rem"><h5>Support the new temple</h5><span class="qr" aria-hidden="true"></span></div>
            <div class="amts"><span>$25</span><span>$108</span><span>$501</span></div>
            <div><div class="top" style="margin-bottom:.4rem"><span>Campaign progress</span><span>Live</span></div><div class="bar"></div></div>
            <div class="cta">Give securely</div>
          </div>`}
        </div>
      </article>`,

    pair: (pr) => `
      <article class="project pair" id="p-${esc(pr.id)}">
        <div class="copy rv">
          ${meta(pr)}
          ${name(pr)}
          <p class="tagline" style="margin-top:var(--s-3)">${esc(pr.tagline)}</p>
        </div>
        <div class="visual">
          ${pr.items.map((it, i) => `
            <div class="item rv" data-delay="${i}">
              ${it.images ? `<div class="phones">${it.images.map((im) => img(im)).join("")}</div>` : `<div class="wide">${img(it.image)}</div>`}
              <h4 class="h3">${esc(it.name)}</h4>
              <p>${esc(it.desc)}</p>
            </div>`).join("")}
        </div>
      </article>`
  };
  const projects = $('[data-render="projects"]');
  if (projects) projects.innerHTML = S.projects.map((pr) => (renderers[pr.layout] || renderers.split)(pr)).join("");

  /* ---------- featured ---------- */
  const F = S.featured, fe = $('[data-render="featured"]');
  if (fe) fe.innerHTML = `
    <header class="sec-head rv">
      <span class="idx">${esc(F.eyebrow)}</span>
      <h2 class="title display">${esc(F.name)} — <em>${esc(F.oneLiner)}</em></h2>
      <p class="aside">A self-initiated product concept, researched with real learners. The one I'd want you to read.</p>
    </header>
    ${img(F.hero, "hero-img rv")}
    <div class="grid">
      <div>
        <div class="col rv"><h4>Problem</h4><p>${esc(F.problem)}</p></div>
        <div class="col rv"><h4>Context</h4><p>${esc(F.context)}</p></div>
        <div class="col rv"><h4>My role</h4><p>${esc(F.role)}</p></div>
        <div class="col rv"><h4>Process</h4><ul class="chips">${F.process.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div class="col rv"><h4>Key decision</h4><p class="decision" style="color:var(--fg)">${esc(F.decision).replace("recovery instead of streaks", "<em>recovery instead of streaks</em>")}</p></div>
        <div class="col rv"><a class="btn solid" href="${esc(F.cta.href)}">${esc(F.cta.label)} <span class="arr" aria-hidden="true">→</span></a></div>
      </div>
      <div class="side">
        <ul class="insights rv" aria-label="Research insights">${F.insights.map((i) => `<li><span class="n">${esc(i.n)}</span><p class="t">${esc(i.t)}</p></li>`).join("")}</ul>
        <div class="screens rv" data-delay="1">${F.screens.map((sc) => img(sc)).join("")}</div>
      </div>
    </div>`;

  /* ---------- about ---------- */
  const ab = $('[data-render="about"]');
  if (ab) ab.innerHTML = `
    <div class="rv">${S.about.paragraphs.map((t) => `<p>${esc(t)}</p>`).join("<br>")}</div>
    <ul class="interests rv" data-delay="1" aria-label="Interests">${S.about.interests.map((t, i) => `<li><span>${esc(t)}</span><span>${String(i + 1).padStart(2, "0")}</span></li>`).join("")}</ul>`;

  /* ---------- process ---------- */
  const pr = $('[data-render="process"]');
  if (pr) pr.innerHTML = S.process.map((st) => `<li class="step rv"><span class="n">${esc(st.n)}</span><h3 class="t">${esc(st.title)}</h3><p>${esc(st.text)}</p></li>`).join("");

  /* ---------- skills ---------- */
  const sk = $('[data-render="skills"]');
  if (sk) sk.innerHTML = S.skills.map((g, i) => `
    <div class="group rv ${g.group === "AI" ? "ai" : ""}" data-delay="${i % 4}">
      <h3><span>${esc(g.group)}</span><span>${String(g.items.length).padStart(2, "0")}</span></h3>
      <ul>${g.items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    </div>`).join("");

  /* ---------- ai ---------- */
  const ai = $('[data-render="ai"]');
  if (ai) ai.innerHTML = `
    <header class="sec-head rv">
      <span class="idx">05 — Design × AI</span>
      <h2 class="title display">Where AI actually <em>shows up</em> in my work.</h2>
    </header>
    <div class="top">
      <p class="big rv">${esc(S.ai.heading).replace("It doesn't decide", "<em>It doesn't decide</em>")}</p>
      <p class="intro rv" data-delay="1">${esc(S.ai.intro)}</p>
    </div>
    <div class="rows">
      ${S.ai.rows.map((r, i) => `<div class="row rv" data-delay="${i % 3}"><span class="stage">${esc(r.stage)}</span><span class="arrow" aria-hidden="true">→</span><p class="how">${esc(r.ai)}</p></div>`).join("")}
    </div>`;

  /* ---------- experience ---------- */
  const ex = $('[data-render="experience"]');
  if (ex) ex.innerHTML = S.experience.map((e) => `
    <article class="item rv">
      <span class="year" aria-hidden="true">${esc(e.year)}</span>
      <div>
        <h3 class="role">${esc(e.role)}</h3>
        <p class="company">${esc(e.company)}</p>
        <p class="when">${esc(e.when)}${e.meta ? ` · <span style="text-transform:none;letter-spacing:0">${esc(e.meta)}</span>` : ""}</p>
      </div>
      <div>
        ${e.points.length ? `<ul class="points">${e.points.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        ${e.highlight ? `<span class="highlight">${esc(e.highlight)}</span>` : ""}
      </div>
    </article>`).join("");

  /* ---------- contact ---------- */
  const ct = $('[data-render="contact"]');
  if (ct) ct.innerHTML = `
    <div class="top">
      <h2 class="headline display rv">${S.contact.headline.map((l) => `<span class="line">${esc(l)}</span>`).join("")}</h2>
      <div class="rv" data-delay="1">
        <p class="sub">${esc(S.contact.sub)}</p>
        <div class="cta-row" style="margin-top:var(--s-4)">
          <a class="btn solid" href="mailto:${esc(S.email)}">Email me <span class="arr" aria-hidden="true">→</span></a>
          <a class="btn" href="${esc(S.resume)}" download>Download résumé <span class="arr" aria-hidden="true">↓</span></a>
        </div>
      </div>
    </div>
    <div class="rows">
      <a class="email" href="mailto:${esc(S.email)}">${esc(S.email)}</a>
      <div class="links">
        ${S.links.filter((l) => l.label !== "Email").map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} <span class="arr" aria-hidden="true">↗</span></a>`).join("")}
        <a href="tel:${esc(S.phone.replace(/\s/g, ""))}">${esc(S.phone)}</a>
      </div>
    </div>
    <div class="colophon">
      <span>© <span data-year></span> ${esc(S.name)}</span>
      <span>${esc(S.location)}</span>
      <span>Designed & built by hand — HTML, CSS, JS</span>
      <span>Type: Instrument Serif · Instrument Sans · JetBrains Mono</span>
    </div>`;

  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
