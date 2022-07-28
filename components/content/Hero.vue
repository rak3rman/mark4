<template>
  <div class="container mx-auto flex items-center min-h-screen">
    <div class="w-full">
      <h6 class="pt-1 pb-1 text-5xl md:text-6xl text-neutral font-bold text-left">
        <Markdown :use="$slots.head" unwrap="p" />
      </h6>
      <h6 class="py-2 leading-normal text-accent text-lg md:text-xl max-w-2xl text-left">
        <Markdown :use="$slots.desc" unwrap="p" />
      </h6>
    </div>
  </div>
</template>