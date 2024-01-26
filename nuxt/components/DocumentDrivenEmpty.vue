<template>
  <div class="container mx-auto flex min-h-screen items-center">
    <div class="w-full">
      <h6
        class="fade-in-hero pb-1 pt-1 text-left text-5xl font-bold text-neutral md:text-6xl"
        :style="{ 'transition-delay': 200 + 'ms' }"
      >
        Whoops.
      </h6>
      <h6
        class="fade-in-hero max-w-2xl py-2 text-left text-lg leading-normal text-accent md:text-xl"
        :style="{ 'transition-delay': 300 + 'ms' }"
      >
        There should be something here but it appears we can't find it.
        <br />
        70% chance this page is under construction. 30% chance we created this
        page by accident.
      </h6>
    </div>
  </div>
</template>
