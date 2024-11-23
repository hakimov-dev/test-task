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
    <div class="mt-12">
      <CustomUsersTable :users="users" />
    </div>
  </div>
</template>

<script setup>
const search = ref("");

const users = ref([
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  // Add more user objects as needed...
]);

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
