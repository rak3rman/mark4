<!--
  PillSolidSmall Button Component
  
  A small pill-shaped button with solid styling and hover effects.
  Features smooth transitions, active state scaling, and secondary color theme.
-->
<template>
  <div
    class="h-min rounded-lg border-[1.5px] border-secondary bg-secondary px-[12px] py-[4.75px] leading-none text-primary transition-all duration-200 ease-out hover:border-accent hover:bg-base-100 active:scale-95"
  >
    <slot />
  </div>
</template>

<style scoped>
/* Enhanced transition effects for smooth interactions */
div {
  transition:
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 200ms ease-out,
    background-color 200ms ease-out,
    color 200ms ease-out;
}
</style>
