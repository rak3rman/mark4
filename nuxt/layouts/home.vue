<template>
  <FadeInWrapper>
    <div class="h-full bg-base-100">
      <div class="pb-16">
        <HomeNavbar
          :navigation="[
            { name: 'Hero', href: '#hero', type: 'hidden' },
            { name: 'About', href: '#hero', type: 'text' },
            { name: 'Experience', href: '#hero', type: 'text' },
            { name: 'Projects', href: '#hero', type: 'text' },
            { name: 'Contact', href: '#hero', type: 'text' },
            {
              name: 'Resume',
              href: '/radison-akerman-resume.pdf',
              type: 'pill',
            },
          ]"
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
