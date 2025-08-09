<!--
  Home Contact Component
  
  A contact form section with form fields and submission handling.
  Features a responsive grid layout and integration with Informr service.
-->
<template>
  <HomeWrapper id="contact">
    <Header
      num="04."
      topic="Contact"
      title="Let's connect."
      punchline="Drop a line, not a packet."
      description="I'm always excited to talk tech, share ideas, or explore potential collaborations."
    >
      <NuxtLink
        to="https://linkedin.com/in/radison/"
        class="mt-4 inline-flex items-center"
      >
        <ButtonPillOutlineLarge>
          Connect on LinkedIn
          <ArrowUpRightIcon class="-mr-1 mb-1.5 ml-0.5 h-3.5 w-3.5" />
        </ButtonPillOutlineLarge>
      </NuxtLink>
    </Header>

    <!-- Contact form section -->
    <div class="w-full lg:grid lg:grid-cols-5 lg:gap-8">
      <div class="flex items-center lg:col-span-3">
        <form
          action="https://informr.rakerman.com/in/psb9kg5V"
          method="POST"
          class="grid w-full grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <!-- Name fields -->
          <InputField
            label="First Name"
            id="first-name"
            name="first-name"
            required
            autocomplete="given-name"
          />
          <InputField
            label="Last Name"
            id="last-name"
            name="last-name"
            required
            autocomplete="family-name"
          />

          <!-- Contact fields -->
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            required
            autocomplete="email"
            class="sm:col-span-2"
          />
          <InputField
            label="Phone Number"
            id="phone-number"
            name="phone-number"
            required
            autocomplete="tel"
            class="sm:col-span-2"
            inputWrapperClass="relative mt-1 rounded-xl shadow-sm"
          />

          <!-- Message field with Informr attribution -->
          <InputField
            label="Message"
            id="message"
            name="message"
            required
            textarea
            :rows="4"
            class="sm:col-span-2"
          >
            <template #after>
              <div class="float-right flex items-center pr-2 pt-2">
                <Linker href="https://informr.rakerman.com" class="text-xs">
                  <div class="flex">
                    <SparklesIcon class="h-4 w-4 pr-1" />
                    Powered by Informr
                  </div>
                </Linker>
              </div>
            </template>
          </InputField>

          <!-- Submit button -->
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

<script setup lang="ts">
import { SparklesIcon } from "@heroicons/vue/16/solid";
import { ArrowUpRightIcon } from "@heroicons/vue/20/solid";
</script>
