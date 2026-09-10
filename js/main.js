/* =============================================================
   MAIN — navigation, motion, interactions. No dependencies.
   ============================================================= */
(function () {
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine   = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* Hero entrance and parallax live in js/hero.js */

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
  $$(".rv, .reveal-img, .process .step").forEach((el) => io.observe(el));

  /* ---------- Nav: hide on scroll down, show on up; current section ---------- */
  const nav = $("#nav");
  let lastY = window.scrollY, ticking = false;
  const sections = $$("main section[id]");
  const navLinks = $$("#nav nav a");
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) {
      if (y > lastY && y > 160) nav.classList.add("is-hidden"); else nav.classList.remove("is-hidden");
    }
    lastY = y;
    // safety net: anything already scrolled past gets revealed
    $$(".rv:not(.is-in), .reveal-img:not(.is-in)").forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in"); });
    // current section
    let cur = null;
    for (const s of sections) { if (s.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = s.id; }
    navLinks.forEach((a) => a.setAttribute("aria-current", a.getAttribute("href") === `#${cur}` ? "true" : "false"));
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const btn = $("#menuBtn"), menu = $("#menu");
  const setMenu = (open) => {
    if (!btn || !menu) return;
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Close" : "Menu";
    document.body.style.overflow = open ? "hidden" : "";
    if (open) menu.querySelector("a")?.focus();
  };
  btn?.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  menu?.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu?.classList.contains("is-open")) { setMenu(false); btn?.focus(); } });

  /* ---------- Magnetic buttons (desktop only) ---------- */
  if (fine && !reduce) {
    $$(".btn").forEach((b) => {
      const strength = 0.25;
      b.addEventListener("mousemove", (e) => {
        const r = b.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        b.style.transform = `translate(${x}px, ${y}px)`;
      });
      b.addEventListener("mouseleave", () => { b.style.transform = ""; b.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)"; setTimeout(() => (b.style.transition = ""), 500); });
    });
  }

  /* ---------- Cursor dot ---------- */
  const cur = $(".cursor");
  if (cur && fine && !reduce) {
    let x = 0, y = 0, tx = 0, ty = 0, on = false;
    window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; if (!on) { on = true; cur.classList.add("is-on"); } }, { passive: true });
    document.addEventListener("mouseleave", () => { cur.classList.remove("is-on"); on = false; });
    const loop = () => { x += (tx - x) * 0.22; y += (ty - y) * 0.22; cur.style.transform = `translate(${x}px, ${y}px)` + (cur.classList.contains("is-link") ? " scale(3.2)" : ""); requestAnimationFrame(loop); };
    loop();
    document.addEventListener("mouseover", (e) => { cur.classList.toggle("is-link", !!e.target.closest("a, button, .img")); });
  }

  /* ---------- Subtle parallax on project images ---------- */
  if (fine && !reduce) {
    $$(".project .visual").forEach((v) => {
      v.addEventListener("mousemove", (e) => {
        const r = v.getBoundingClientRect();
        const dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
        $$(".img img", v).forEach((im, i) => { const k = 6 + i * 3; im.style.transform = `scale(1.04) translate(${-dx * k}px, ${-dy * k}px)`; });
      });
      v.addEventListener("mouseleave", () => $$(".img img", v).forEach((im) => (im.style.transform = "")));
    });
  }
})();
