
/* =========================================================
   GENER PORTFOLIO
   PORTRAIT BACKGROUND THAT MOVES WHILE SCROLLING
   ========================================================= */

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

    /*
      These variables are used by the background-image
      rule in style.css.

      The photo moves subtly from left to right and
      slightly vertically as the visitor scrolls.
    */

    root.style.setProperty(
      "--bg-image-x",
      `${35 + progress * 30}%`
    );

    root.style.setProperty(
      "--bg-image-y",
      `${35 + progress * 20}%`
    );

    scheduled = false;
  }

  function requestBackgroundUpdate() {
    if (scheduled) return;

    scheduled = true;
    window.requestAnimationFrame(updateBackground);
  }

  // Update the background as the visitor scrolls.
  window.addEventListener(
    "scroll",
    requestBackgroundUpdate,
    { passive: true }
  );

  // Recalculate when the browser window changes size.
  window.addEventListener(
    "resize",
    requestBackgroundUpdate
  );

  // Set the correct initial background position.
  updateBackground();
})();
