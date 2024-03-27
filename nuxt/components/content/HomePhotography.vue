<template>
  <div
    class="w-full overflow-y-auto bg-cover delay-75 duration-500"
    :class="albums.length === 0 ? '' : 'mt-24'"
    :style="
      'background-image: url(\'' +
      albums[selected]?.image +
      '\');transition-property: background-image;'
    "
    id="photography"
  >
    <div
      :class="
        albums[selected]?.image === undefined ? '' : 'backdrop-brightness-[0.8]'
      "
    >
      <div
        class="container mx-auto mx-auto max-w-7xl items-center px-4 py-24 sm:px-6"
      >
        <!-- Photography Title -->
        <Header
          num="04."
          title="Photography"
          id="experience"
          fade
          :hide_line="albums.length !== 0"
          class=""
        />
        <!-- Albums -->
        <div
          v-for="(item, index) in albums"
          class="fade-in my-[1rem] py-[2rem]"
          @mouseenter="selected = index"
        >
          <NuxtLink
            :to="'/'"
            class="group block w-fit transition duration-300"
            :class="selected === index ? 'text-primary' : 'text-accent'"
          >
            <div class="font-mono text-sm">
              {{ item.date }} // {{ item.category }}
            </div>
            <div class="pt-2 text-4xl">
              {{ item.title }}
            </div>
            <span
              class="mb-1 block h-[3px] max-w-0 transition-all delay-75 duration-500 group-hover:max-w-full"
              :class="selected === index ? 'bg-primary' : 'bg-accent'"
            ></span>
          </NuxtLink>
        </div>
        <!-- No Albums -->
        <div v-if="albums.length === 0">
          <h6
            class="text-md fade-in max-w-2xl pt-1 text-left font-mono text-secondary"
          >
            Oops. It appears there aren't any featured photos available at the
            moment. Please check again later.
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
];
</script>

<script>
export default {
  data() {
    return {
      selected: 0,
    };
  },
};
</script>
