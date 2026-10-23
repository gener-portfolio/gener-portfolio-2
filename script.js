
/* Scroll-responsive background */
(() => {
  let scheduled = false;

  function updateBackground() {
    const maxScroll =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress = maxScroll > 0
      ? Math.max(0, Math.min(window.scrollY / maxScroll, 1))
      : 0;

    document.documentElement.style.setProperty(
      "--bg-x",
      `${progress * 45}%`
    );

    document.documentElement.style.setProperty(
      "--bg-y",
      `${progress * 35}%`
    );

    document.documentElement.style.setProperty(
      "--bg-x2",
      `${100 - progress * 45}%`
    );

    document.documentElement.style.setProperty(
      "--bg-y2",
      `${100 - progress * 35}%`
    );

    scheduled = false;
  }

  window.addEventListener("scroll", () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateBackground);
    }
  }, { passive: true });

  window.addEventListener("resize", updateBackground);
  updateBackground();
})();
