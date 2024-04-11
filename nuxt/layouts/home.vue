<template>
  <FadeInWrapper>
    <div class="h-full bg-base-100">
      <div class="pb-16">
        <Navbar
          :nav_elements="[
            { name: 'About', href: '#about' },
            { name: 'Experience', href: '#experience' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' },
            {
              name: 'Resume',
              href: '/radison-akerman-resume.pdf',
              is_cta: true,
              target: '_blank'
            },
          ]"
          :has_hero="true"
          :nav_listen="true"
        />
        <main>
          <slot />
          <HomeWrapper>
            <Footer />
          </HomeWrapper>
        </main>
      </div>
    </div>
  </FadeInWrapper>
</template>