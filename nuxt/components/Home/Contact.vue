<template>
  <HomeWrapper id="contact">
    <Header
      num="04."
      topic="Contact"
      title="Let's connect."
      punchline="Drop a line, not a packet."
      description="I'm always excited to talk tech, share ideas, or explore potential collaborations."
      fade
    />
    <div class="w-full lg:grid lg:grid-cols-5 lg:gap-8">
      <div class="flex items-center lg:col-span-3">
        <form
          action="https://informr.rakerman.com/in/psb9kg5V"
          method="POST"
          class="fade-in grid w-full grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
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
import InputField from "../InputField.vue";
</script>
