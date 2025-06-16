<template>
  <div class="relative h-full w-full bg-base-100">
    <div class="pb-16">
      <Navbar
        :nav_elements="[
          {
            name: 'Return Home',
            href: '/',
            is_cta: true,
          },
        ]"
        :has_hero="true"
      />
      <main>
        <slot />
        <HomeWrapper>
          <Footer />
        </HomeWrapper>
      </main>
    </div>
  </div>
</template>
