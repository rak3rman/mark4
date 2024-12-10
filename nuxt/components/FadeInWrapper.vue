<template>
  <slot />
</template>

<script>
const isElemVisible = (el) => {
  let rect = el.getBoundingClientRect();
  let elemTop = rect.top + 140; // 200 = buffer
  let elemBottom = rect.bottom;
  return elemTop < window.innerHeight && elemBottom >= 0;
};

const handleScroll = (evt) => {
  let elements = Array.from(document.getElementsByClassName("fade-in"));
  for (let i = 0; i < elements.length; i++) {
    let elem = elements[i];
    if (isElemVisible(elem)) {
      elem.style.opacity = "1";
      elem.style.transform = "scale(1)";
    }
  }
};

const showOnloads = () => {
  let elements = Array.from(
    document.getElementsByClassName("fade-in-nav"),
  ).concat(Array.from(document.getElementsByClassName("fade-in-hero")));
  
  elements.forEach(elem => {
    elem.style.opacity = "1";
    elem.style.transform = "scale(1)";
    elem.style.filter = "blur(0)";
  });
};

const initializeAnimations = () => {
  // If document is already loaded, run immediately
  if (document.readyState === 'complete') {
    showOnloads();
    return;
  }

  // If not loaded, wait for load event
  window.addEventListener('load', showOnloads, { once: true });
  
  // Fallback timer in case load event doesn't fire
  setTimeout(showOnloads, 2000);
};

export default {
  mounted() {
    initializeAnimations();
    document.addEventListener("scroll", handleScroll);
  },
  unmounted() {
    document.removeEventListener("scroll", handleScroll);
    window.removeEventListener('load', showOnloads);
  },
};
</script>
