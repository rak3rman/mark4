<!-- RF Nuxt Header, Rev. 03/31/23 -->

<template>
    <Html class="h-full bg-primary scroll-smooth" lang="en"/>
    <Link rel="icon" type="png"
          href="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/sm"/>
    <Body class="h-full bg-primary"/>
    <div class="h-full bg-primary">
        <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#586CB2 0%,#059669 50%,#CCCCCC 100%)" />
        <NuxtPage/>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()

useServerSeoMeta({
    title: config.meta.title,
    ogTitle: config.meta.title,
    description: config.meta.desc,
    ogDescription: config.meta.desc,
    ogImage: config.meta.img,
})
</script>