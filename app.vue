<template>
  <Html class="h-full bg-white scroll-smooth">
  <Head>
    <Meta charset="UTF-8" />
    <Title>{{ title }}</Title>
    <Meta name="HandheldFriendly" content="True" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Meta name="referrer" content="no-referrer-when-downgrade" />
    <Link rel="icon" type="png" href="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/sm" />
    <Link rel="canonical" :content="url" />
    <Meta property="og:site_name" :content="title" />
    <Meta property="og:title" :content="title" />
    <Meta name="description" :content="desc" />
    <Meta property="og:description" :content="desc" />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" :content="url" />
    <Meta property="og:image" content="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/fa35b458-67ec-4711-0256-9f68535cbd00/md" />
    <Meta property="og:image:width" content="600" />
    <Meta property="og:image:height" content="450" />
  </Head>
  </Html>
  <Body class="h-full" />
  <div class="h-full">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
  <Script src="https://status.rakerman.com/api/alert" />
</template>

<script setup>
const title = "Radison Akerman"
const desc = "I am highly skilled in internet. You might find me solving niche problems with programming, over yonder with my camera, or working on something radical."
const url = "https://www.rakerman.com"
</script>

<script>
let fadeInElements = []
let fadeInOnloadElements = []

const isElemVisible = (el) => {
  let rect = el.getBoundingClientRect()
  let elemTop = rect.top + 140 // 200 = buffer
  let elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

const handleScroll = (evt) => {
  for (let i = 0; i < fadeInElements.length; i++) {
    let elem = fadeInElements[i]
    if (isElemVisible(elem)) {
      elem.style.opacity = '1'
      elem.style.transform = 'scale(1)'
      fadeInElements.splice(i, 1) // only allow it to run once
    }
  }
}

const showOnloads = (evt) => {
  for (let i = 0; i < fadeInOnloadElements.length; i++) {
    let elem = fadeInOnloadElements[i]
    elem.style.opacity = '1'
    elem.style.transform = 'scale(1)'
  }
}

export default {
  mounted() {
    // Get all elements that can be a part of scrollable fade in
    fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
    // Add event listeners for scroll events
    document.addEventListener('scroll', handleScroll)
    handleScroll()
    // Now that we are mounted, trigger onload fadein elements
    fadeInOnloadElements = Array
            .from(document.getElementsByClassName('fade-in-nav'))
            .concat(Array.from(document.getElementsByClassName('fade-in-hero')))
    showOnloads()
  },
  unmounted() {
    document.removeEventListener('scroll', handleScroll)
  }
}
</script>

