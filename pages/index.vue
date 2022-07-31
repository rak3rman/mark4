<template>
  <div class="h-full">
    <Body class="bg-primary" />
    <div class="pb-16">
      <HomeNavbar />
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