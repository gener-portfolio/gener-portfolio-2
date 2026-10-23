
/* ==========================================
   SCROLL-RESPONSIVE DARK BLUE BACKGROUND
   ========================================== */

(() => {
  const root = document.documentElement;
  let scheduled = false;

  function updateBackground() {
    const maxScroll =
      root.scrollHeight - window.innerHeight;

    const progress = maxScroll > 0
      ? Math.max(
          0,
          Math.min(window.scrollY / maxScroll, 1)
        )
      : 0;

    // Move the blue gradient
    root.style.setProperty(
      "--bg-x",
      `${progress * 45}%`
    );

    root.style.setProperty(
      "--bg-y",
      `${progress * 35}%`
    );

    // Move the purple gradient in the opposite direction
    root.style.setProperty(
      "--bg-x2",
      `${100 - progress * 45}%`
    );

    root.style.setProperty(
      "--bg-y2",
      `${100 - progress * 35}%`
    );

    scheduled = false;
  }

  function requestBackgroundUpdate() {
    if (scheduled) return;

    scheduled = true;
    window.requestAnimationFrame(updateBackground);
  }

  // Update while scrolling
  window.addEventListener(
    "scroll",
    requestBackgroundUpdate,
    { passive: true }
  );

  // Recalculate after resizing
  window.addEventListener(
    "resize",
    requestBackgroundUpdate
  );

  // Set the initial background position
  updateBackground();
})();

/* Charcoal background that shifts as you scroll */
(() => {
  const root = document.documentElement;
  let pending = false;

  function updateBackground() {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = maxScroll > 0
      ? Math.max(0, Math.min(window.scrollY / maxScroll, 1))
      : 0;

    root.style.setProperty("--bg-x", `${20 + progress * 60}%`);
    root.style.setProperty("--bg-y", `${30 + progress * 25}%`);
    root.style.setProperty("--bg-x2", `${80 - progress * 60}%`);
    root.style.setProperty("--bg-y2", `${70 - progress * 25}%`);

    pending = false;
  }

  function onScroll() {
    if (!pending) {
      pending = true;
      requestAnimationFrame(updateBackground);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateBackground);
  updateBackground();
})();
