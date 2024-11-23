<template>
  <div class="mt-[10vh]">
    <div
      id="search-section"
      class="w-[60%] mx-auto flex items-center justify-center"
    >
      <CustomInput class="w-[80%]" v-model="search" @search="handleSearch" />
      <transition name="fade" appear>
        <CustomBtn
          v-if="search.length > 0"
          @click="handleSearch"
          class="ml-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[var(--accent-color)]"
          >search</CustomBtn
        >
      </transition>
    </div>
  </div>
</template>

<script setup>
const search = ref("");

const handleSearch = () => {
  console.log("Searching for:", search.value);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
