<template>
  <BaseHero :arrow-delay="400">
    <div class="w-full">
      <h6
        class="fade-in-hero pb-1 pt-1 text-left text-5xl font-bold text-primary md:text-6xl"
        :style="{ 'transition-delay': 200 + 'ms' }"
      >
        <slot name="head" mdc-unwrap="p" />
      </h6>
      <h6
        class="fade-in-hero max-w-2xl py-2 text-left text-lg leading-normal text-accent md:text-xl"
        :style="{ 'transition-delay': 300 + 'ms' }"
      >
        <slot name="desc" mdc-unwrap="p" />
      </h6>
    </div>
  </BaseHero>
</template>
