<template>
  <div class="container mx-auto flex items-center min-h-screen">
    <div class="w-full">
      <h6 class="pt-1 pb-1 text-4xl md:text-6xl text-neutral font-bold leading-tight text-left">
        <slot />
      </h6>
      <h6 class="py-2 leading-normal text-accent text-lg md:text-xl max-w-2xl text-left">
        <slot name="description"/>
      </h6>
    </div>
  </div>
</template>