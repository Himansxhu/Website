/* =============================================================
   HERO — entrance + scroll-driven parallax
   No dependencies. Writes a single custom property (--sp) that
   the CSS layers read, so all the motion stays declarative.
   ============================================================= */
(function () {
  const hero = document.querySelector(".chero");
  if (!hero) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const small  = window.matchMedia("(max-width: 720px)");

  /* ---------- entrance ---------- */
  const enter = () => {
    hero.classList.add("is-ready");
    hero.style.setProperty("--enter", "1");
  };
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(enter).catch(enter);
  } else {
    enter();
  }
  setTimeout(enter, 1400);              // safety net if the fonts never resolve

  /* ---------- scroll-driven layers ---------- */
  let ticking = false;
  let last = -1;

  const update = () => {
    ticking = false;
    if (reduce.matches) return;

    const h = hero.offsetHeight || 1;
    // 0 while the hero fills the viewport → 1 once it has scrolled away
    const p = Math.min(Math.max(window.scrollY / h, 0), 1);
    const v = Math.round(p * 1000) / 1000;
    if (v === last) return;
    last = v;
    hero.style.setProperty("--sp", small.matches ? v * 0.35 : v);
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  // stop doing any work once the hero is well out of view
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
      } else {
        window.removeEventListener("scroll", onScroll);
      }
    }, { rootMargin: "20% 0px" });
    io.observe(hero);
  }

  reduce.addEventListener?.("change", () => {
    if (reduce.matches) hero.style.setProperty("--sp", "0");
    else onScroll();
  });

  update();
})();
