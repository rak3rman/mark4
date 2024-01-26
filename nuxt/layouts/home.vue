<template>
  <FadeInWrapper>
    <div class="h-full bg-primary">
      <div class="pb-16">
        <HomeNavbar />
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
