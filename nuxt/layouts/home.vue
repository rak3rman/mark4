<template>
  <FadeInWrapper>
    <div class="h-full bg-primary">
      <div class="pb-16">
        <HomeNavbar />
        <main>
          <HomeHero
            class="container relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6"
          />
          <HomeAbout
            class="container mx-auto max-w-7xl snap-none items-center px-4 sm:px-6"
          />
          <HomeExperience />
          <HomeProjects
            class="container mx-auto max-w-7xl snap-none items-center px-4 sm:px-6"
          />
          <!--<HomePhotography />-->
          <div
            class="container mx-auto max-w-7xl snap-none items-center px-4 sm:px-6"
          >
            <HomeContact />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  </FadeInWrapper>
</template>
<script setup lang="ts"></script>
