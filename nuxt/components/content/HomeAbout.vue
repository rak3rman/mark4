<template>
  <HomeWrapper id="about">
    <Header
      num="01."
      topic="About"
      title="Relentlessly radical."
      punchline="Building something... better."
      description="Constantly exploring new ideas, technologies, and methods to create software that genuinely moves the needle."
      fade
    />
    <div class="mt-4">
      <!-- Photos -->
      <div class="relative lg:float-right lg:pb-7 lg:pl-5 lg:pt-1"></div>
      <!-- Content Text Slot -->
      <div class="mt-8 lg:mt-0">
        <div
          class="mx-auto text-accent lg:col-start-1 lg:row-start-1 lg:max-w-full"
        >
          <slot />
        </div>
      </div>
    </div>
  </HomeWrapper>
</template>
