<template>
  <HomeWrapper id="contact">
    <Header num="04." title="Get In Touch" fade />
    <div class="mt-8 w-full lg:grid lg:grid-cols-5 lg:gap-8">
      <div
        class="flex justify-center lg:col-span-2 lg:col-start-1 lg:row-start-1"
      >
        <div
          class="fade-in mb-10 mt-0 text-left font-mono text-[0.9rem] text-accent lg:mt-4"
        >
          <h6 class="pb-4">
            <strong>What's next? Well, that is up to you.</strong> Here's a few
            options based on what your looking for:
          </h6>
          <h6 class="pb-4">
            >>
            <strong
              >A. "HELP! I'm searching far and wide for a computer
              wizard!"</strong
            >
            <br />
            <i
              >Take a gander at
              <NuxtLink
                class="inline-block text-secondary underline underline-offset-2"
                to="/radison-akerman-resume.pdf"
                target="_blank"
                >my resume.
              </NuxtLink>
              If you think we'd be a match (yay!) fill out the good ole' contact
              form. I'll be in touch.</i
            >
          </h6>
          <h6 class="pb-4">
            >>
            <strong
              >B. "I need a group of highly-driven creatives that can do
              anything."</strong
            >
            <br />
            <i
              >A storm is brewing over at Radical, a talent-dense software
              development collective. We're working through product ideas, so
              feel free to drop a suggestion!</i
            >
          </h6>
          <h6 class="pb-4">
            >>
            <strong
              >C. "Whoa. I don't even know where to start but let's
              chat."</strong
            >
            <br />
            <i
              >My inbox is always open. I'm constantly <s>running</s> cycling
              around, so when I come to a stop I'll give you a shout.</i
            >
          </h6>
          <h6 class="">
            <i
              >Please don't solicit with products + services, I make all of
              those myself ;-)</i
            >
          </h6>
        </div>
      </div>
      <div class="flex items-center lg:col-span-3">
        <form
          action="https://informr.rakerman.com/in/psb9kg5V"
          method="POST"
          class="fade-in grid w-full grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div class="">
            <label
              for="first-name"
              class="block text-sm font-medium text-accent"
              >First Name</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                required
                class="block w-full rounded-xl border-accent bg-base-100 px-3 py-2.5 text-primary shadow-md focus:border-secondary focus:ring-secondary"
                placeholder="Radison"
              />
            </div>
          </div>
          <div class="">
            <label for="last-name" class="block text-sm font-medium text-accent"
              >Last Name</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                required
                class="block w-full rounded-xl border-accent bg-base-100 px-3 py-2.5 text-primary shadow-md focus:border-secondary focus:ring-secondary"
                placeholder="Akerman"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-accent"
              >Email</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-xl border-accent bg-base-100 px-3 py-2.5 text-primary shadow-md focus:border-secondary focus:ring-secondary"
                placeholder="joe@radison.io"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm font-medium text-accent"
              >Phone Number</label
            >
            <div class="relative mt-1 rounded-xl shadow-sm">
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                required
                class="block w-full rounded-xl border-accent bg-base-100 px-4 py-3 text-primary shadow-md focus:border-secondary focus:ring-secondary"
                placeholder="(815) 123-4567"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-accent"
              >Message</label
            >
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                class="block w-full rounded-xl border-accent bg-base-100 px-3 py-2.5 text-primary shadow-md focus:border-secondary focus:ring-secondary"
                placeholder="Hey! I'd love to hear more about XYZ!"
              />
              <div class="float-right flex items-center pr-2 pt-2">
                <Linker href="https://informr.rakerman.com" class="text-xs">
                  <div class="flex">
                    <SparklesIcon class="h-4 w-4 pr-1" />
                    Powered by Informr
                  </div>
                </Linker>
              </div>
            </div>
          </div>
          <div class="-mt-4 sm:col-span-2">
            <button type="submit">
              <ButtonPillOutlineLarge>Let's Talk!</ButtonPillOutlineLarge>
            </button>
          </div>
        </form>
      </div>
    </div>
  </HomeWrapper>
</template>

<script setup>
import { SparklesIcon } from "@heroicons/vue/24/outline";
</script>
