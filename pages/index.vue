<template>
  <div class="h-full">
    <Body class="bg-primary" />
    <RAFBanner />

    <div class="pb-16">
      <Popover class="fixed top-0 left-0 right-0 py-4 backdrop-blur-xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">RAkerman</span>
                  <img class="h-5 w-auto sm:h-6" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm" alt="" />
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
                <a v-for="(item, index) in navigation" :key="item.name" :href="item.href" class="font-mono text-accent hover:text-secondary"><span class="text-secondary">{{ '0' + (index + 1) + '. ' }}</span> {{ item.name }}</a>
              </div>
              <span class="inline-flex rounded-md shadow">
                <a href="/resume" class="inline-flex items-center px-4 py-2 border border-secondary text-base font-mono rounded-md text-secondary hover:bg-primary-focus"> Resume </a>
              </span>
            </div>
          </nav>
        </div>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-primary-focus ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-5 w-auto" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm" alt="" />
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
        <div class="container mx-auto flex flex-wrap flex-row items-center min-h-screen">
          <div class="flex flex-col w-full justify-center overflow-y-hidden">
            <p class="py-2 leading-normal text-secondary font-mono text-lg md:text-xl text-left">
              Hi there, my name is
            </p>
            <h1 class="pt-1 pb-1 text-5xl md:text-7xl text-neutral font-bold leading-tight text-left">
              Radison Akerman.
            </h1>
            <p class="py-2 leading-normal text-accent text-lg md:text-xl max-w-2xl text-left">
              I am highly skilled in internet. You might find me solving niche problems with full-blown web applications, out in the middle of nowhere with my camera, learning a random skill, or just cracking a laugh with my friends.
            </p>
            <span class="py-3 inline-flex rounded-md shadow">
              <a href="/resume" class="inline-flex items-center px-4 py-2 border border-secondary text-base leading-normal font-mono rounded-md text-secondary hover:bg-primary-focus"> Check out my lecture at UIC! </a>
            </span>
          </div>
        </div>

        <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">

          <!--  01. About  -->
          <HeaderLine num="01." title="About Me" id="about" />
          <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="relative lg:row-start-1 lg:col-start-2">
              <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img class="rounded-lg shadow-lg object-cover object-center" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/fa35b458-67ec-4711-0256-9f68535cbd00/xl" alt="Portrait of Radison" width="1184" height="1376" />
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
          <div class="w-full">
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select a tab</label>
              <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
              <select id="tabs" name="tabs" class="block w-full focus:ring-secondary focus:border-secondary border-accent rounded-md">
                <option v-for="tab in experience" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                  <a v-for="tab in experience" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-secondary text-secondary-focus' : 'border-transparent text-accent hover:text-accent-focus hover:border-accent', 'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm']" :aria-current="tab.current ? 'page' : undefined">
                    <component :is="tab.icon" :class="[tab.current ? 'text-secondary' : 'text-accent group-hover:text-accent-focus', '-ml-0.5 mr-2 h-5 w-5']" aria-hidden="true" />
                    <span>{{ tab.name }}</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <!--  03. Projects  -->
          <HeaderLine num="03." title="Projects" id="projects" />

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
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { DesktopComputerIcon, CameraIcon, UserGroupIcon } from '@heroicons/vue/solid'

const config = useRuntimeConfig()

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const experience = [
  {
    name: 'Computer Science',
    href: '#',
    icon: DesktopComputerIcon,
    current: true,
    entries: [
      {
        title: 'Project Manager & Info Sec Analyst',
        company: 'University of Illinois Chicago',
        period: 'Feb 2022 - Present',
        location: 'Chicago, IL',
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
        bullets: [
          'Completely rebuilt campaign website from the ground up using Nuxt v3, Tailwinds, visited by 1,000’s of Wisconsinites daily' +
          'Secured sensitive campaign data and digital infrastructure against cyber attacks using Cloudflare, NGP VAN, Informr' +
          'Coordinated a team of web developers and content creators to rapidly push media; took photographs in the field',
        ]
      },
      {
        title: 'Web Security Intern',
        company: 'U.S. Department of Veterans Affairs',
        period: 'Sept 2021 - May 2022',
        location: 'Remote',
        bullets: [
          'Examined and improved the operational protection strategies of dmeinterns.org through phishing campaigns, pen testing, web scanning tools, WordPress plugin security evaluations, and creation of strict security standards for interns' +
          'Educated other VA departments on password protocol and breach prevention through Slack',
        ]
      },
      {
        title: 'Web & Database Developer',
        company: 'University of Illinois Chicago',
        period: 'June 2021 - Feb 2022',
        location: 'Chicago, IL',
        bullets: [
          'Developed and maintained custom full-stack web applications using Laravel, Vue, and SQL, used by 3,000+ active users' +
          'Created new documentation and issue reporting standards with Atlassian Jira, Bitbucket, increasing readability by 3-fold' +
          'Presented projects to university admin and trained faculty/staff on application usage regularly (via MS Teams, Calendly)',
        ]
      },
      {
        title: 'Dev-Ops Intern',
        company: 'Montel Technologies',
        period: 'Nov 2017 - Sept 2018',
        location: 'Loves Park, IL',
        bullets: [
          'Lead front-end web developer on an enterprise-grade security unification solution (MTOP) utilizing Node.js, MongoDB' +
          'Configured mission-critical SLA networks and infrastructure in the field by installing switches, IP cameras, access control' +
          'Coordinated IoT devices R&D (Particle, Raspberry Pi, Cradlepoint) for use in 100’s of deployed edge units',
        ]
      },
    ]
  },
  { name: 'Leadership', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Photography', href: '#', icon: CameraIcon, current: false },
]
</script>s
