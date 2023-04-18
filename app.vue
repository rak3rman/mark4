<!-- RF Nuxt Header, Rev. 04/17/23 -->

<template>
    <Html class="h-full bg-primary scroll-smooth" lang="en"/>
    <Link rel="icon" type="png" :href="config.meta.favicon"/>
<!--    <Link href="/css/main.css" rel="stylesheet" />-->
    <Body class="h-full bg-primary"/>
    <div class="h-full bg-primary">
        <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#586CB2 0%,#059669 50%,#CCCCCC 100%)" />
        <NuxtPage/>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
</script>