<template>
  <button
    @click="$emit('click')"
    class="px-4 py-2 bg-[var(--accent-color)] text-[var(--text-color)] rounded-md focus:outline-none opacity-100 hover:opacity-80"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  emits: ["click"],
};
</script>

<style scoped>
/* No additional styles are required as Tailwind CSS handles styling */
</style>
