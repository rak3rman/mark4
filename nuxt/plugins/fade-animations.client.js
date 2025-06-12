export default defineNuxtPlugin((nuxtApp) => {
  let animationTimeout = null;

  const triggerFadeAnimations = () => {
    // Clear any pending animations to prevent rapid firing
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }

    animationTimeout = setTimeout(() => {
      const fadeElements = document.querySelectorAll(
        ".fade-in-nav, .fade-in-hero",
      );

      fadeElements.forEach((elem) => {
        // Only animate if element is currently faded out
        const currentOpacity = window.getComputedStyle(elem).opacity;
        if (parseFloat(currentOpacity) < 0.9) {
          elem.style.opacity = "1";
          elem.style.transform = "scale(1)";
          elem.style.filter = "blur(0)";
        }
      });
      animationTimeout = null;
    }, 50);
  };

  // Trigger on initial load
  nuxtApp.hook("app:mounted", () => {
    setTimeout(triggerFadeAnimations, 100);
  });

  // Trigger on route changes with debouncing
  nuxtApp.hook("page:finish", () => {
    setTimeout(triggerFadeAnimations, 200);
  });
});
