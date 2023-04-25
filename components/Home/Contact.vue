<template>
  <div>
    <Header num="05." title="Get In Touch" id="contact" fade />
    <div class="mt-8 lg:grid lg:grid-cols-5 lg:gap-8 w-full">
      <div
        class="flex justify-center lg:row-start-1 lg:col-start-1 lg:col-span-2"
      >
        <div
          class="text-[0.9rem] text-accent font-mono text-left mb-10 mt-0 lg:mt-4 fade-in"
        >
          <h6 class="pb-4">
            <strong>What's next? Well, that is up to you.</strong> Here's a few
            options based on what your looking for:
          </h6>
          <h6 class="pb-4">
            >>
            <strong
              >A. "HELP! I'm searching far and wide for a computer
              wizard"</strong
            >
            <br />
            <i
              >Take a gander at
              <NuxtLink
                class="text-secondary underline underline-offset-2"
                to="/resume"
                target="_blank"
                >my resume</NuxtLink
              >, if you think we'd be a match (yay!) fill out the good ole'
              contact form.</i
            >
          </h6>
          <h6 class="pb-4">
            >>
            <strong
              >B. "I need a group of highly-driven creatives that can do
              anything"</strong
            >
            <br />
            <i
              >Check out
              <NuxtLink
                class="text-secondary underline underline-offset-2"
                to="https://pulqra.com"
                >Pulqra</NuxtLink
              >, we'd be thrilled to collab with you over our
              <NuxtLink
                class="text-secondary underline underline-offset-2"
                to="https://pulqra.com/dir/product"
                >catalogue of services</NuxtLink
              >.</i
            >
          </h6>
          <h6 class="pb-4">
            >>
            <strong
              >C. "Whoa. I don't even know where to start but let's
              chat"</strong
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
      <div class="lg:col-span-3 flex items-center">
        <form
          action="https://informr.rakerman.com/in/q5y6j3N2"
          method="POST"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 w-full fade-in"
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
                class="py-2.5 px-3 block w-full shadow-md bg-primary text-neutral focus:ring-secondary focus:border-secondary border-accent rounded-md"
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
                class="py-2.5 px-3 block w-full shadow-md bg-primary text-neutral focus:ring-secondary focus:border-secondary border-accent rounded-md"
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
                class="py-2.5 px-3 block w-full shadow-md bg-primary text-neutral focus:ring-secondary focus:border-secondary border-accent rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm font-medium text-accent"
              >Phone Number</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">Country</label>
                <select
                  id="country"
                  name="country"
                  class="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-neutral focus:ring-secondary focus:border-secondary rounded-md"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                required
                class="py-3 px-4 block w-full pl-20 shadow-md bg-primary text-neutral focus:ring-secondary focus:border-secondary border-accent rounded-md"
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
                class="py-2.5 px-3 block w-full shadow-md bg-primary text-neutral focus:ring-secondary focus:border-secondary border-accent rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md font-medium text-accent bg-primary-focus hover:bg-secondary hover:text-neutral focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition ease-in-out duration-300"
            >
              Let's talk
            </button>
            <NuxtLink
              to="https://informr.rakerman.com"
              class="flex text-xs text-accent hover:text-secondary transition ease-in-out duration-300 items-center p-2 float-right"
            >
              <SparklesIcon class="h-4 w-4 pr-1" />
              Powered by Informr
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SparklesIcon } from "@heroicons/vue/24/outline";
</script>