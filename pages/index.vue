<template>
  <div class="h-full">
    <Body class="bg-primary" />
    <div class="pb-16">
      <HomeNavbar :nav="navigation"/>
      <main class="relative container overflow-hidden max-w-7xl mx-auto px-4 sm:px-6">
        <HomeHero />
        <div class="container mx-auto items-center">

          <HomeAbout />
          <HomeExperience />
          <HomeProjects />
          <HomeContact />

          <Footer />

        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
</script>