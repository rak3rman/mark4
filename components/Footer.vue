<template>
  <div class="w-full pt-16 text-sm text-center md:text-left fade-in">
    <h1 class="text-neutral opacity-70 pb-1 md:float-left md:mr-1">&copy; Radison Akerman {{new Date().getFullYear()}}.</h1>
    <h1 class="text-neutral opacity-70 pb-1 md:float-left md:mr-1">Designed and built from scratch.</h1>
    <h1 class="text-neutral opacity-70 pb-1 md:float-right"><a href="https://github.com/rak3rman/mark4">Mark 4. Release {{ config.public.gitMasterTag }}.</a></h1>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
</script>