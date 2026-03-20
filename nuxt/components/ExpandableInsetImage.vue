<template>
  <figure :class="figureClass">
    <button
      type="button"
      class="block w-full cursor-zoom-in rounded-xl text-left transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
      :aria-expanded="open"
      aria-haspopup="dialog"
      :aria-label="expandLabel"
      @click="expand"
    >
      <div
        class="rounded-xl bg-base-200/60 p-1 ring-1 ring-inset ring-primary/10 lg:rounded-2xl lg:p-2"
      >
        <div
          class="relative aspect-[4/3] overflow-hidden rounded-lg bg-base-200"
        >
          <ImageDelivery
            :id="id"
            :variant="variant"
            :type="type"
            :alt="alt"
            :class="thumbnailImageClass"
          />
        </div>
      </div>
    </button>

    <div v-if="$slots.caption" class="mt-3 ml-2">
      <slot name="caption" />
    </div>

    <TransitionRoot appear :show="open" as="template">
      <Dialog class="relative z-[60]" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-200"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-base-100/80 backdrop-blur-sm"
            aria-hidden="true"
          />
        </TransitionChild>

        <div
          class="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
          @click.self="open = false"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-200"
            enter-from="opacity-0 scale-[0.98]"
            enter-to="opacity-100 scale-100"
            leave="ease-in duration-150"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-[0.98]"
          >
            <DialogPanel class="relative w-full max-w-5xl outline-none">
              <DialogTitle class="sr-only">{{ alt }}</DialogTitle>
              <button
                type="button"
                class="absolute -right-1 -top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-base-200/90 text-accent shadow-sm ring-1 ring-primary/10 transition hover:bg-base-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:-right-2 sm:-top-2"
                @click="open = false"
              >
                <span class="sr-only">Close</span>
                <XMarkIcon class="h-5 w-5" aria-hidden="true" />
              </button>

              <div
                class="rounded-xl bg-base-200/60 p-1 ring-1 ring-inset ring-primary/10 lg:rounded-2xl lg:p-2"
              >
                <div
                  class="relative aspect-[4/3] overflow-hidden rounded-lg bg-base-200"
                >
                  <ImageDelivery
                    v-if="hasOpenedOnce"
                    :id="id"
                    :variant="expandedVariant"
                    :type="type"
                    :alt="alt"
                    loading="eager"
                    :custom-sizes="expandedSizes"
                    :class="expandedImageClass"
                  />
                </div>
              </div>

              <div v-if="$slots.caption" class="mt-3 ml-2">
                <slot name="caption" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </figure>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

type ImageType =
  | "logo"
  | "project"
  | "hero"
  | "avatar"
  | "thumbnail"
  | "experienceLogo";

interface Props {
  id: string;
  alt: string;
  variant?: string;
  expandedVariant?: string;
  type?: ImageType;
  /** Tailwind classes for figure (width, group, etc.) */
  figureClass?: string;
  /** Accessible label for the expand control */
  expandLabel?: string;
  expandedSizes?: string;
}

withDefaults(defineProps<Props>(), {
  variant: "lg",
  expandedVariant: "max",
  type: "thumbnail",
  figureClass: "flex w-[16rem] flex-none flex-col group",
  expandLabel: "View larger image",
  expandedSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw",
});

const open = ref(false);
const hasOpenedOnce = ref(false);

function expand() {
  hasOpenedOnce.value = true;
  open.value = true;
}

const thumbnailImageClass =
  "absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-300 ease-out group-hover:grayscale-0";

const expandedImageClass =
  "absolute inset-0 h-full w-full object-cover object-top";
</script>
