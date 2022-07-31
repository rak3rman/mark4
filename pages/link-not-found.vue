<template>
  <div class="h-full">
    <Body class="h-full" />
    <RAFBanner />
    <div class="min-h-full pt-16 pb-12 flex flex-col bg-white">
      <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex-shrink-0 flex justify-center">
          <NuxtLink to="/" class="inline-flex">
            <span class="sr-only">RAkerman</span>
            <img class="h-10 w-auto" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/3f01c971-e3db-40a2-5116-659eab771900/md" alt="" />
          </NuxtLink>
        </div>
        <div class="py-16">
          <div class="text-center">
            <p class="text-sm font-semibold text-primary uppercase tracking-wide">Broken Link</p>
            <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Link not found.</h1>
            <p class="mt-2 text-base text-gray-500">Sorry, we couldn't find a link matching your request.</p>
            <div class="mt-6">
              <NuxtLink to="/" class="text-base font-medium text-primary">Back home<span aria-hidden="true"> &rarr;</span></NuxtLink>
            </div>
          </div>
        </div>
      </main>
      <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex justify-center space-x-4">
          <NuxtLink to="https://www.rakerman.com" class="text-sm font-medium text-gray-500 hover:text-gray-600">Home</NuxtLink>
          <span class="inline-block border-l border-gray-300" aria-hidden="true" />
          <NuxtLink to="https://status.rakerman.com" class="text-sm font-medium text-gray-500 hover:text-gray-600">Status</NuxtLink>
          <span class="inline-block border-l border-gray-300" aria-hidden="true" />
          <NuxtLink to="https://www.rakerman.com/contact" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact</NuxtLink>
        </nav>
      </footer>
    </div>
  </div>
</template>
