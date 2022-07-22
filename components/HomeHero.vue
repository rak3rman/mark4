<template>
  <div class="container mx-auto flex items-center min-h-screen">
    <div class="mt-8 lg:grid lg:grid-cols-5 lg:gap-8 w-full">
      <div class="hidden lg:flex items-center justify-center lg:row-start-1 lg:col-start-4 lg:col-span-2">
        <Portrait1 class="max-w-full"/>
      </div>
      <div class="lg:col-span-3 flex items-center">
        <Portrait1 class="absolute left-[18%] w-[130%] pb-48 lg:hidden opacity-10" style="transform: rotateY(180deg)"/>
        <div class="flex flex-col w-full justify-center overflow-y-hidden">
          <p class="py-2 leading-normal text-secondary font-mono text-lg md:text-xl text-left">
            Hi there, my name is
          </p>
          <h1 class="pt-1 pb-1 text-4xl md:text-6xl text-neutral font-bold leading-tight text-left">
            Radison Akerman.
          </h1>
          <p class="py-2 leading-normal text-accent text-lg md:text-lg max-w-2xl text-left">
            I lead teams who deliver exceptional digital experiences.
            Currently, I'm studying CS + Business @ <a class="text-secondary underline underline-offset-2" href="https://uic.edu">UIC</a>, project managing a team of 8, and co-building <a class="text-secondary underline underline-offset-2" href="https://pulqra.com">Pulqra</a>, a wildly successful creative marketing collective.
          </p>
          <span class="py-3 inline-flex rounded-md shadow">
            <a href="https://youtu.be/cD53M7NHQoM" class="inline-flex items-center px-4 py-2 border border-secondary text-base leading-normal font-mono rounded-md text-secondary hover:bg-primary-focus"> Check out my lecture at UIC! </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>