<template>
  <FadeInWrapper>
    <div class="h-full bg-base-100">
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
