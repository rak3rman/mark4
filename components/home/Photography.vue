<template>
    <div class="w-full mt-24 overflow-y-auto bg-cover duration-500 delay-75"
         :class="albums.length === 0 ? 'mt-12' : 'mt-24'"
         :style="'background-image: url(\'' + albums[selected]?.image + '\');transition-property: background-image;'"
         id="photography">
        <div :class="albums[selected]?.image === undefined ? '' : 'backdrop-brightness-[0.8]'">
            <div class="container mx-auto items-center max-w-7xl mx-auto px-4 sm:px-6 py-24">
                <!-- Photography Title -->
                <Header num="04." title="Photography" id="experience" fade :hide_line="albums.length !== 0"
                        class="pt-12"/>
                <!-- Albums -->
                <div v-for="(item, index) in albums" class="py-[2rem] my-[1rem] fade-in"
                     @mouseenter="selected = index;">
                    <NuxtLink :to="'/'"
                              class="block w-fit group transition duration-300"
                              :class="selected === index ? 'text-neutral' : 'text-accent'">
                        <div class="text-sm font-mono">
                            {{ item.date }} // {{ item.category }}
                        </div>
                        <div class="text-4xl pt-2">
                            {{ item.title }}
                        </div>
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 delay-75 h-[3px] mb-1"
                              :class="selected === index ? 'bg-neutral' : 'bg-accent'"></span>
                    </NuxtLink>
                </div>
                <!-- No Albums -->
                <div v-if="albums.length === 0">
                    <h6 class="pt-1 text-md text-secondary font-mono text-left fade-in max-w-2xl">
                        Oops. It appears there aren't any featured photos available at the moment. Please check again
                        later.
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const albums = [
//    {
//        title: 'Dasher Dash \'22',
//        category: 'Sports',
//        date: '2022',
//        image: 'https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/d7c1ae4d-dc83-4158-41d7-2a79ea165c00/2xl'
//    },
//    {
//        title: 'Lorem ipsum',
//        category: 'Advertising',
//        date: '2020',
//        image: 'https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/bab6f222-e368-4921-863d-f4380d3c9b00/xl'
//    },
//    {
//        title: 'Dasher Dash \'22',
//        category: 'Sports',
//        date: '2022',
//        image: 'https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/d7c1ae4d-dc83-4158-41d7-2a79ea165c00/2xl'
//    },
//    {
//        title: 'Lorem ipsum',
//        category: 'Advertising',
//        date: '2020',
//        image: 'https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/bab6f222-e368-4921-863d-f4380d3c9b00/xl'
//    },
]
</script>

<script>
export default {
    data() {
        return {
            selected: 0
        }
    }
}
</script>