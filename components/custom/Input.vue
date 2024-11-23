<template>
  <div
    class="flex items-center border border-[var(--text-muted-color)] rounded-md p-2 bg-[var(--card-background-color)] focus-within:border-[var(--accent-color)]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-gray-400 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-4.35-4.35m1.85-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
      />
    </svg>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown.enter="$emit('search', modelValue)"
      class="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Search...",
    },
  },
  emits: ["update:modelValue", "search"],
};
</script>
