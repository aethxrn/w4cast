// src/utils/disableZoom.js
export function disableZoom() {
  // Prevent zooming with Ctrl + +/-/0
  window.addEventListener("keydown", (event) => {
    if (
      (event.ctrlKey || event.metaKey) &&
      (event.key === "+" || event.key === "-" || event.key === "0")
    ) {
      event.preventDefault();
    }
  });

  // Prevent zooming with Ctrl + mouse wheel
  window.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    },
    { passive: false }
  );
}
