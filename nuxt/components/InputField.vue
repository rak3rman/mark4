<!--
  InputField Component
  
  A flexible form input component supporting both input and textarea elements.
  Features customizable styling, validation states, and proper accessibility.
  
  @props {String|Number} modelValue - The input value (v-model binding)
  @props {String} label - Optional label text
  @props {String} id - Input element ID for accessibility
  @props {String} name - Input name attribute
  @props {String} type - Input type (text, email, password, etc.)
  @props {String} placeholder - Placeholder text
  @props {Boolean} required - Whether the field is required
  @props {String} autocomplete - Autocomplete attribute value
  @props {Boolean} textarea - Whether to render as textarea
  @props {Number} rows - Number of rows for textarea
  @props {Boolean} disabled - Whether the input is disabled
  @props {String} inputClass - Custom CSS classes for input element
  @props {String} wrapperClass - Custom CSS classes for wrapper
  @props {String} inputWrapperClass - Custom CSS classes for input wrapper
-->
<template>
  <div :class="wrapperClass">
    <!-- Label -->
    <label
      v-if="label"
      :for="id"
      class="block pb-0.5 pl-0.5 text-sm font-medium text-accent"
    >
      {{ label }}<span v-if="required">*</span>
    </label>

    <!-- Input wrapper with slot support -->
    <div :class="inputWrapperClass">
      <component
        :is="isTextarea ? 'textarea' : 'input'"
        v-bind="inputAttrs"
        :class="inputClass"
        :rows="isTextarea ? rows : undefined"
      />
      <slot name="after" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Types
interface InputEvent extends Event {
  target: HTMLInputElement | HTMLTextAreaElement;
}

// Component props with validation
const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
    validator: (value: string) => {
      const validTypes = [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
      ];
      return validTypes.includes(value);
    },
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: "",
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 4,
    validator: (value: number) => value > 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: "",
  },
  wrapperClass: {
    type: String,
    default: "",
  },
  inputWrapperClass: {
    type: String,
    default: "mt-1",
  },
});

// Component events
const emit = defineEmits<{
  "update:modelValue": [value: string | number];
}>();

// Computed properties
const isTextarea = computed(() => props.textarea);

/**
 * Input attributes object for v-bind
 */
const inputAttrs = computed(() => ({
  id: props.id,
  name: props.name || props.id,
  type: isTextarea.value ? undefined : props.type,
  placeholder: props.placeholder,
  required: props.required,
  autocomplete: props.autocomplete || undefined,
  disabled: props.disabled,
  value: props.modelValue,
  onInput: (e: InputEvent) => emit("update:modelValue", e.target.value),
}));

/**
 * Computed CSS classes for the input element
 */
const inputClass = computed(() => {
  if (props.inputClass) return props.inputClass;

  const baseClasses =
    "block w-full rounded-xl border-[1.5px] border-neutral bg-base-100 px-3 py-2.5 text-accent transition-all duration-200 ease-out hover:border-primary hover:text-primary focus:border-accent focus:text-primary";
  return baseClasses;
});
</script>

<style scoped>
input,
textarea {
  transition:
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 200ms ease-out,
    color 200ms ease-out;
}

textarea {
  min-height: 80px;
  max-height: 200px;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: none;
}
</style>
