<template>
  <div :class="wrapperClass">
    <label
      v-if="label"
      :for="id"
      class="block pb-0.5 pl-0.5 text-sm font-medium text-accent"
    >
      {{ label }}<span v-if="required">*</span>
    </label>
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

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: [String, Number],
  label: String,
  id: String,
  name: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
  required: Boolean,
  autocomplete: String,
  textarea: Boolean,
  rows: {
    type: Number,
    default: 4,
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
  disabled: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const isTextarea = computed(() => props.textarea);

const inputAttrs = computed(() => ({
  id: props.id,
  name: props.name,
  type: isTextarea.value ? undefined : props.type,
  placeholder: props.placeholder,
  required: props.required,
  autocomplete: props.autocomplete,
  disabled: props.disabled,
  class: undefined, // handled separately
  value: props.modelValue,
  onInput: (e) => emit("update:modelValue", e.target.value),
}));

const inputClass = computed(
  () =>
    props.inputClass ||
    (isTextarea.value
      ? "block w-full rounded-xl border-neutral bg-base-100 px-3 py-2.5 text-primary shadow-md focus:border-secondary focus:ring-secondary"
      : "block w-full rounded-xl border-neutral bg-base-100 px-3 py-2.5 text-primary shadow-md focus:border-secondary focus:ring-secondary"),
);
</script>
