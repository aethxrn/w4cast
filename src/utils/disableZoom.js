export function disableZoom() {
  // Prevent mobile screen zoom
  window.addEventListener("keydown", (event) => {
    if (
      (event.ctrlKey || event.metaKey) &&
      (event.key === "+" || event.key === "-" || event.key === "0")
    ) {
      event.preventDefault();
    }
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  // Prevent mobile screen zoom
  document.addEventListener(
    "touchstart",
    function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });

  document.addEventListener(
    "touchmove",
    function (event) {
      if (event.scale !== undefined && event.scale !== 1) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  let lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    function (event) {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );
}
