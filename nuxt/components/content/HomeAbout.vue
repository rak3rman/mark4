<template>
  <HomeWrapper id="about">
    <Header num="01." title="About Me" fade />
    <div class="mt-4">
      <!-- Photos -->
      <div class="relative lg:float-right lg:pb-7 lg:pl-5 lg:pt-1">
        <div class="relative mx-auto max-w-prose text-base lg:max-w-md">
          <figure class="lg:h-[40rem] lg:w-[28rem]">
            <div
              class="fade-in aspect-h-7 aspect-w-12 lg:aspect-none lg:hidden"
            >
              <NuxtImg
                class="object-cover object-center shadow-lg bg-base-200 [mask-image:linear-gradient(to_bottom,black_70%,transparent_95%)] scale-[118%] sm:scale-[100%]"
                src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/af63a776-af55-4f19-22a7-604a95399b00/xl"
                alt="Portrait of Radison"
              />
            </div>
            <div class="fade-in ml-[2rem] hidden lg:block">
              <NuxtImg
                class="w-[19rem] rounded-lg object-cover object-top shadow-lg bg-base-200"
                src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/60165710-ba66-465f-f366-ba1c3b73cd00/xl"
                alt="Portrait of Radison"
              />
            </div>
            <div
              class="fade-in absolute left-0 top-0 ml-[0rem] mt-[26rem] hidden overflow-hidden rounded-lg shadow-xl lg:block"
            >
              <NuxtImg
                class="h-[15rem] w-[16rem] object-cover object-top bg-base-200"
                src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/b6b21ae7-e308-443c-a354-976ae0a02300/2xl"
                alt="Radison Lecturing at UIC"
              />
            </div>
            <div
              class="fade-in absolute left-0 top-0 ml-[12rem] mt-[13rem] hidden overflow-hidden rounded-lg shadow-xl lg:block"
            >
              <NuxtImg
                class="w-[18rem] -translate-x-2 scale-[135%] object-cover object-top bg-base-200"
                src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/b6cd4c78-5828-4edf-7ce0-603681a5cf00/2xl"
                alt="Radison Biking"
              />
            </div>
          </figure>
        </div>
      </div>
      <!-- Content Text Slot -->
      <div class="mt-8 lg:mt-0">
        <div
          class="mx-auto text-accent lg:col-start-1 lg:row-start-1 lg:max-w-full"
        >
          <slot />
        </div>
      </div>
    </div>
  </HomeWrapper>
</template>
