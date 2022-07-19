<template>
  <div class="h-full">
    <Body class="bg-primary" />
    <RAFBanner />

    <div class="pb-16">
      <Popover class="fixed top-0 left-0 right-0 py-4 backdrop-blur-xl z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">RAkerman</span>
                  <img class="h-5 w-auto sm:h-6" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm" alt="RAkerman Logo" />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="bg-primary-focus rounded-md p-2 inline-flex items-center justify-center text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span class="sr-only">Open main menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <div class="md:space-x-8 pr-6">
                <a v-for="(item, index) in navigation" :key="item.name" :href="item.href" class="font-mono text-sm text-accent hover:text-secondary"><span class="text-secondary">{{ '0' + (index + 1) + '. ' }}</span> {{ item.name }}</a>
              </div>
              <span class="inline-flex rounded-md shadow">
                <a href="/resume" class="inline-flex items-center px-4 py-2 border border-secondary text-sm font-mono rounded-md text-secondary hover:bg-primary-focus"> Resume </a>
              </span>
            </div>
          </nav>
        </div>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-primary-focus ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-5 w-auto" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm" alt="RAkerman Logo" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="bg-primary rounded-md p-2 inline-flex items-center justify-center text-accent hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a v-for="(item, index) in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-mono text-accent hover:text-secondary hover:bg-primary"><span class="text-secondary">{{ '0' + (index + 1) + '. ' }}</span> {{ item.name }}</a>
              </div>
              <a href="/resume" class="block w-full px-5 py-3 text-center font-medium text-neutral bg-secondary"> Resume </a>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="max-w-7xl mx-auto px-4 sm:px-6">
        <!--  Hero Section  -->
        <div class="container mx-auto flex items-center min-h-screen">
          <div class="mt-8 lg:grid lg:grid-cols-5 lg:gap-8 w-full">
            <div class="flex items-center justify-center lg:row-start-1 lg:col-start-4 lg:col-span-2">
              <PortraitSVG1 class="max-w-sm lg:max-w-full"/>
            </div>
            <div class="lg:col-span-3 flex items-center z-20">
              <div class="flex flex-col w-full justify-center overflow-y-hidden">
                <p class="py-2 leading-normal text-secondary font-mono text-lg md:text-xl text-left">
                  Hi there, my name is
                </p>
                <h1 class="pt-1 pb-1 text-5xl md:text-6xl text-neutral font-bold leading-tight text-left">
                  Radison Akerman.
                </h1>
                <p class="py-2 leading-normal text-accent text-lg md:text-lg max-w-2xl text-left">
                  I am highly skilled in internet. You might find me solving niche problems with full-blown web applications, out in the middle of nowhere with my camera, learning a random skill, or just cracking a laugh with my friends.
                </p>
                <span class="py-3 inline-flex rounded-md shadow">
                  <a href="/resume" class="inline-flex items-center px-4 py-2 border border-secondary text-base leading-normal font-mono rounded-md text-secondary hover:bg-primary-focus"> Check out my lecture at UIC! </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto items-center">

          <!--  01. About  -->
          <HeaderLine num="01." title="About Me" id="about" />
          <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="relative lg:row-start-1 lg:col-start-2">
              <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img class="rounded-lg shadow-lg object-cover object-top" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/60165710-ba66-465f-f366-ba1c3b73cd00/xl" alt="Portrait of Radison" />
                  </div>
                </figure>
              </div>
            </div>
            <div class="mt-8 lg:mt-0">
              <div class="prose prose-secondary text-neutral mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                <p>Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>
                <p>Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.</p>
                <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                <ul role="list">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
              </div>
            </div>
          </div>

          <!--  02. Experience  -->
          <HeaderLine num="02." title="Experience" id="experience" />
          <div class="w-full pb-1">
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select a tab</label>
              <select id="tabs" v-model="selectedExpTab" name="tabs" class="block w-full bg-primary focus:ring-secondary focus:border-secondary border-neutral text-neutral rounded-md">
                <option v-for="tab in expTabs" :value="tab.id" :selected="tab.id === selectedExpTab">{{ tab.name }}</option>
              </select>
            </div>
            <div class="hidden sm:block sm:mt-4 sm:mb-3">
              <div class="grid grid-cols-3 gap-x-8" role="tablist" aria-orientation="horizontal">
                <div class="relative transition ease-in-out duration-300" v-for="tab in expTabs" href="#experience" :key="tab.id" @click="updateExpTab(tab.id)" :class="[tab.id === selectedExpTab ? '' : 'opacity-75 hover:opacity-100']">
                  <div class="w-9 rounded-lg transition ease-in-out duration-300" :class="[tab.id === selectedExpTab ? 'bg-secondary' : 'bg-primary-focus']">
                    <svg aria-hidden="true" class="h-9 w-9 p-2" fill="#fff" :viewBox="tab.viewbox" v-html="tab.icon"></svg>
                  </div>
                  <h3 class="mt-6 text-md font-medium transition ease-in-out duration-300" :class="[tab.id === selectedExpTab ? 'text-secondary' : 'text-neutral']">
                    <button>
                      <span class="absolute inset-0"></span>
                      {{ tab.name }}
                    </button>
                  </h3>
                  <p class="mt-2 font-display text-md text-accent">
                    {{ tab.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--  02. Experience, Tab Content  -->
          <div v-for="entry in expEntries">
            <div v-if="entry.tags.includes(selectedExpTab)" class="pt-2">
              <h3 class="pt-2 leading-normal text-neutral text-md font-bold text-left">
                {{ entry.title }} <span class="text-accent">@ {{ entry.company }}</span>
              </h3>
              <h4 class="leading-normal text-neutral text-sm font-mono text-left">
                {{ entry.period }} // {{ entry.location }}
              </h4>
              <ul class="list-disc text-neutral font-light text-sm text-left space-y-0.5 pt-1.5 pl-5">
                <li v-for="bullet in entry.bullets">
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </div>

          <ul role="list" class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <li v-for="(group, index) in testimonials" class="space-y-8">
              <figure class="rounded-lg p-8 shadow-md ring-1 ring-primary-focus" v-for="testimonial in group" :class="index > 1 ? 'hidden lg:block' : ''">
                <blockquote>
                  <p class="text-lg tracking-tight text-neutral">
                    "{{ testimonial.quote }}"
                  </p>
                </blockquote>
                <figcaption class="mt-6 flex items-center">
                  <div class="overflow-hidden rounded-full bg-secondary">
                    <img class="h-12 w-12 object-cover" :src="'https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/' + testimonial.img + '/sq'" alt="Image" />
                  </div>
                  <div class="ml-4">
                    <div class="text-base font-medium leading-6 tracking-tight text-neutral">
                      {{ testimonial.name }}
                    </div>
                    <div class="mt-1 text-sm text-accent">
                      {{ testimonial.title }}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>

          <!--  03. Projects  -->
          <HeaderLine num="03." title="Projects" id="projects" />
          <ul role="list" class="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <li v-for="(project, index) in projects" class="space-y-8">
              <figure class="rounded-lg p-8 shadow-md ring-1 ring-primary-focus" :class="index > 1 ? 'hidden lg:block' : ''">
                <blockquote>
                  <div class="flex items-center mb-4 flow-root">
                    <FolderIcon class="h-12 w-12 text-secondary float-left" aria-hidden="true" />
                    <div class="float-right flex">
                      <a class="transition ease-in-out duration-300 hover:text-secondary" :href="project.links.github" v-if="project.links.github">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mt-3 mr-2.5">
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a class="transition ease-in-out duration-300 hover:text-secondary" :href="project.links.ext" v-if="project.links.ext">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 mt-2">
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p class="text-lg font-medium tracking-tight text-neutral">
                    {{ project.title }}
                  </p>
                  <p class="mt-1.5 text-sm text-accent">
                    {{ project.sub }}
                  </p>
                  <div class="mt-1.5 text-sm text-accent font-light flex space-x-3">
                    <p v-for="tool in project.tools">{{ tool }}</p>
                  </div>
                </blockquote>
              </figure>
            </li>
          </ul>

          <!--  04. Contact  -->
          <HeaderLine num="04." title="Get In Touch" id="contact" />


          <!--  Footer  -->
          <div class="w-full pt-16 text-sm text-center md:text-left fade-in">
            <h1 class="text-neutral opacity-70 pb-1 md:float-left md:mr-1">&copy; Radison Akerman {{new Date().getFullYear()}}.</h1>
            <h1 class="text-neutral opacity-70 pb-1 md:float-left md:mr-1">Designed and built from scratch.</h1>
            <h1 class="text-neutral opacity-70 pb-1 md:float-right"><a href="https://github.com/rak3rman/mark4">Mark 4. Release {{ config.public.gitMasterTag }}.</a></h1>
          </div>

        </div>
      </main>
    </div>

  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, FolderIcon, ExternalLinkIcon, XIcon } from '@heroicons/vue/outline'
import { DesktopComputerIcon, CameraIcon, UserGroupIcon } from '@heroicons/vue/solid'

const config = useRuntimeConfig()

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const testimonials = [
  [
    // { name: 'Radison Akerman', title: 'Front-end Developer', quote: "Mira’s teaching style is second to none. Everything was easy to follow every step of the way.", img: "60165710-ba66-465f-f366-ba1c3b73cd00" },
    // { name: 'Radison Akerman', title: 'Front-end Developer', quote: "I run an ecommerce store selling rare vintage gummy bears and could never find a good gummy bear icon. Now I can design my own in minutes.", img: "60165710-ba66-465f-f366-ba1c3b73cd00" },
  ],
  [
    // { name: 'Radison Akerman', title: 'Front-end Developer', quote: "I couldn’t believe how fast Mira moved in Figma compared to my own workflow. I’m designing icons more accurately in half the time with the shortcuts I learned from her videos.", img: "60165710-ba66-465f-f366-ba1c3b73cd00" },
    // { name: 'Radison Akerman', title: 'Front-end Developer', quote: "Even though I was excited to learn, I was pessimistic that I wouldn’t actually ever get good enough to design my own icons. I was wrong — this book is all I needed.", img: "60165710-ba66-465f-f366-ba1c3b73cd00" },
  ],
  [
    // { name: 'Radison Akerman', title: 'Front-end Developer', quote: "The complete package is worth it for the weekly teardown videos alone. I’ve learned so much watching Mira take apart other icons and recreate them from scratch.", img: "60165710-ba66-465f-f366-ba1c3b73cd00" },
    // { name: 'Radison Akerman', title: 'Front-end Developer', quote: "I never thought I would enjoy designing icons but using the ideas in this book, it’s become a great way for me to relax while still being creative.", img: "60165710-ba66-465f-f366-ba1c3b73cd00" },
  ],
]

const projects = [
  {
    title: 'Exploding Chickens',
    sub: 'A beautiful, online alternative to the popular Exploding Kittens card game (just with chickens)',
    desc: '',
    links: {
      ext: 'https://chickens.rakerman.com',
    },
    tools: ['Node.js', 'Tailwinds CSS', 'MongoDB'],
    made_at: 'RAkerman Foundation',
    start: '',
    end: 'inf',
    is_featured: true,
    is_archived: false,
  },
  {
    title: 'Rock River Anything That Floats Race Manager',
    sub: '',
    desc: 'An effort to streamline the organizational efforts of the Rock River Anything That Floats Race. Running on Node.js, this project displays a powerful web interface where administrators can manage raft information, conduct raft timing, and display results to the public. A smart timing plugin and a custom web voting limiter for the People\'s Choice Award were both built from scratch.',
    links: {
      ext: 'https://rratfr.rakerman.com',
      github: 'https://github.com/rak3rman/rratfr-manager'
    },
    tools: ['Node.js', 'Bootstrap', 'MongoDB'],
    made_at: 'Personal Project',
    start: '2019-05',
    end: '2020-08',
    is_featured: false,
    is_archived: false,
  },
  {
    title: 'RAkerman Status',
    sub: '',
    desc: 'A fallback web server and status monitor for all RAkerman-related services. RAkerman Status is built of top of couple state-of-the-art technologies (Nuxt 3, Cloudflare Workers) that allow it to be deployed on a global scale. And oh yeah, whenever a service comes offline it sends an email alert to all "subscribers" via RAkerman Notify. Pretty cool right?',
    links: {
      ext: 'https://status.rakerman.com',
      github: 'https://github.com/rak3rman/rakerman-status',
    },
    tools: ['Nuxt v3', 'Cloudflare Workers', 'Typescript'],
    made_at: 'Personal Project',
    start: '2021-06',
    end: '2022-07',
    is_featured: false,
    is_archived: false,
  },
  {
    title: 'ImpackAI',
    sub: '',
    desc: 'An inventory management platform unlike any other. ImpackAI puts analytics at the center of your workflow all while keeping a simple and intuitive interface. Keep track of inventory with varying amounts of stock at different stages in the production process. Help employees work more efficiently with an advanced metrics system. Predict purchase orders in the future. All in just a couple clicks.',
    links: {},
    tools: ['Node.js', 'Bootstrap', 'MongoDB'],
    made_at: 'Rock Valley Packaging',
    start: '2020-04',
    end: '2020-08',
    is_featured: false,
    is_archived: false,
  },
  {
    title: 'Homebase',
    sub: '',
    desc: 'A personal take on home automation. Homebase is a set of home controllers designed to monitor and manage literally anything. Homebase SPKR is a fully-inclusive smart sprinkler system controller. Just specify what zones you want watered and when, and SPKR will do the rest. Homebase GARA watches over the garage with a few neat tricks. GARA can automatically close all open garage doors and turn the lights on and off whenever you open a door. Homebase MNTR receives the wired input of any door sensors in your home and notifies you if it detects a breach. All built from scratch, by myself.',
    links: {
      github: 'https://github.com/rak3rman/homebase',
    },
    tools: ['Particle.io', 'IoT', 'C++', 'Small Electronics'],
    made_at: 'Personal Project',
    start: '2021-04',
    end: '2021-06',
    is_featured: false,
    is_archived: false,
  },
  {
    title: 'Passport UIC Shibboleth',
    sub: '',
    desc: 'A Nodejs-Express-Passport authentication strategy that works with the University of Illinois Chicago\'s Shibboleth single-sign on service. Extends the passport-saml npm module, but sets all the default options so that it works with the UIC Shibboleth Identity Provider (IdP). Built out an entire sample project using Vite, Vue 3, and Tailwinds along with a "Shibalike" emulator for local testing. Wrote extensive documentation and recorded a walkthrough video for others to understand how to use passport-uicshib.',
    links: {
      github: 'https://github.com/rak3rman/passport-uicshib',
    },
    tools: ['Node.js', 'SAML', 'Vite', 'Tailwinds CSS'],
    made_at: 'University of Illinois Chicago',
    start: '2022-02',
    end: '2022-06',
    is_featured: false,
    is_archived: false,
  },
  {
    title: 'RAkerman Linker',
    sub: '',
    desc: 'A simple url shortener that can be deployed over multiple domains simultaneously. RAkerman Linker leverages the power of Nuxt 3 and Cloudflare Workers KV to handle a unified list of custom redirects on a global scale. Specify a shortened url along with a target url in the Cloudflare Workers KV interface, and this service will handle the rest.',
    links: {
      ext: 'https://link.rakerman.com',
      github: 'https://github.com/rak3rman/rakerman-linker',
    },
    tools: ['Nuxt v3', 'Cloudflare Workers', 'Typescript'],
    made_at: 'Personal Project',
    start: '2022-05',
    end: '2022-06',
    is_featured: false,
    is_archived: false,
  },
  {
    title: 'Particlecord',
    sub: '',
    desc: 'Particlecord listens to the data stream from Particle.io devices and notifies the user when a particular event occurs. Think of Particlecord as an "API middleman" that filters a real-time data stream from Particle.io and sends smart push notifications through Discord. Devices can also be managed using the Discord bot by setting friendly names, changing alert frequencies, and outputting the status of any device.',
    links: {
      github: 'https://github.com/rak3rman/particlecord',
    },
    tools: ['Particle.io', 'Discord API', 'Node.js'],
    made_at: 'Personal Project',
    start: '2020-10',
    end: '2021-01',
    is_featured: false,
    is_archived: false,
  },
  {
    title: 'RAkerman Pace Clock',
    sub: '',
    desc: 'Have you ever had to deal with 2 overpriced and outdated pace clocks breaking for seemingly no reason during swim practice in high school? Well, I did. (drumroll sounds) Introducing the RAkerman Pace Clock (RAPC), a state-of-the-art, multi-color, over-engineered digital clock system designed for pacing swim practices. The RAPC is essentially a strip of RGB leds (Neopixels) connected to a microcontroller (Particle Argon) that displays the time from 0:00 to 59:59 (mm:ss) over and over (in any color you\'d like). It probably doesn\'t sound that cool, but trust me, it is a far cry from what it used to be.',
    links: {},
    tools: [],
    made_at: 'Auburn High School',
    start: '2019-10',
    end: '2019-12',
    is_featured: false,
    is_archived: false,
  },
  // {
  //   title: '',
  //   sub: '',
  //   desc: '',
  //   links: {
  //     ext: '',
  //     github: '',
  //   },
  //   tools: [],
  //   made_at: '',
  //   start: '',
  //   end: '',
  //   is_featured: false,
  //   is_archived: false,
  // },
]
</script>

<script>
import {CameraIcon, DesktopComputerIcon, UserGroupIcon} from "@heroicons/vue/solid";

const selected_exp_tab = 'cs'
const exp_tabs = [
  {
    id: 'cs',
    name: 'Computer Science',
    desc: 'Pushing the boundaries of full-stack web development, dev-ops, and cybersecurity.',
    icon: '<path d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"/>',
    viewbox: '0 0 448 512',
  },
  {
    id: 'lead',
    name: 'Leadership',
    desc: 'Effectively leading teams of all sizes over a wide gamut of industries.',
    icon: '<path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"/>',
    viewbox: '0 0 640 512',
  },
  {
    id: 'photo',
    name: 'Photography',
    desc: 'Specializing in stills photography with clients all over the world.',
    icon: '<path d="M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"/>',
    viewbox: '0 0 512 512',
  },
]
const exp_entries = [
  {
    title: 'Project Manager & Info Sec Analyst',
    company: 'University of Illinois Chicago',
    period: 'Feb 2022 - Present',
    location: 'Chicago, IL',
    tags: ['cs', 'lead'],
    bullets: [
      'Managed a team of 7 web and database developers working on over 10 large-scale, full-stack web applications',
      'Integrated new project management software (Paymo) and maintained framework templates/documentation in Github',
      'Single-handedly developed and published a Shibboleth (SAML SSO) to Express (Node.js) authentication package on npm',
      'Drafted and enforced university IT policies by working with UI system auditors and department leadership',
      'Aggregated sensitive data usages/locations and identified exposure risks across all 500+ faculty and staff',
    ]
  },
  {
    title: 'Digital Lead',
    company: 'Steven Olikara for U.S. Senate',
    period: 'Apr 2022 - Present',
    location: 'Milwaukee, WI',
    tags: ['cs', 'lead', 'photo'],
    bullets: [
      'Completely rebuilt campaign website from the ground up using Nuxt v3, Tailwinds, visited by 1,000’s of Wisconsinites daily',
      'Secured sensitive campaign data and digital infrastructure against cyber attacks using Cloudflare, NGP VAN, Informr',
      'Coordinated a team of web developers and content creators to rapidly push media; took photographs in the field',
    ]
  },
  {
    title: 'Web Security Intern',
    company: 'U.S. Department of Veterans Affairs',
    period: 'Sept 2021 - May 2022',
    location: 'Remote',
    tags: ['cs'],
    bullets: [
      'Examined and improved the operational protection strategies of dmeinterns.org through phishing campaigns, pen testing, web scanning tools, WordPress plugin security evaluations, and creation of strict security standards for interns',
      'Educated other VA departments on password protocol and breach prevention through Slack',
    ]
  },
  {
    title: 'Web & Database Developer',
    company: 'University of Illinois Chicago',
    period: 'June 2021 - Feb 2022',
    location: 'Chicago, IL',
    tags: ['cs'],
    bullets: [
      'Developed and maintained custom full-stack web applications using Laravel, Vue, and SQL, used by 3,000+ active users',
      'Created new documentation and issue reporting standards with Atlassian Jira, Bitbucket, increasing readability by 3-fold',
      'Presented projects to university admin and trained faculty/staff on application usage regularly (via MS Teams, Calendly)',
    ]
  },
  {
    title: 'Dev-Ops Intern',
    company: 'Montel Technologies',
    period: 'Nov 2017 - Sept 2018',
    location: 'Loves Park, IL',
    tags: ['cs'],
    bullets: [
      'Lead front-end web developer on an enterprise-grade security unification solution (MTOP) utilizing Node.js, MongoDB',
      'Configured mission-critical SLA networks and infrastructure in the field by installing switches, IP cameras, access control',
      'Coordinated IoT devices R&D (Particle, Raspberry Pi, Cradlepoint) for use in 100’s of deployed edge units',
    ]
  },
  // {
  //   title: 'Executive Operations Director',
  //   company: 'Pulqra',
  //   period: 'Feb 2020 - Present',
  //   location: 'United States',
  //   tags: ['cs', 'lead', 'photo'],
  //   bullets: [
  //     'Lorem ipsum.',
  //   ]
  // },
  // {
  //   title: 'Executive Director',
  //   company: 'RAkerman Foundation',
  //   period: 'Apr 2022 - Present',
  //   location: 'Remote',
  //   tags: ['cs', 'lead'],
  //   bullets: [
  //     'Lorem ipsum.',
  //   ]
  // },
  // {
  //   title: 'Section Leader',
  //   company: 'Stanford University',
  //   period: 'Apr 2021 - May 2021',
  //   location: 'Remote',
  //   tags: ['cs', 'lead'],
  //   bullets: [
  //     'Lorem ipsum.',
  //   ]
  // },
  // {
  //   title: 'Event Captain',
  //   company: 'Life Time',
  //   period: 'Aug 2021 - Present',
  //   location: 'Chicago, IL',
  //   tags: ['lead'],
  //   bullets: [
  //     'Lorem ipsum.',
  //   ]
  // },
]

export default {
  data() {
    return {
      selectedExpTab: selected_exp_tab,
    }
  },
  computed: {
    expTabs() {
      this.selectedExpTab
      return exp_tabs
    },
    expEntries() {
      this.selectedExpTab
      return exp_entries
    }
  },
  methods: {
    updateExpTab: function (val) {
      this.selectedExpTab = val
    }
  }
}
</script>
