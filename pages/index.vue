<template>
  <div class="mt-[10vh]">
    <div
      id="search-section"
      class="w-[60%] mx-auto flex items-center justify-center"
    >
      <CustomInput class="w-[80%]" v-model="search" />
    </div>
    <div class="my-12">
      <CustomUsersTable :users="users" />
    </div>
  </div>
</template>

<script setup>
import UsersService from "~/services/users";

const usersAPI = new UsersService();

const search = ref("");

const users = ref([]);
const originalUsers = ref([]);

const handleSearch = () => {
  if (search.value.trim() === "") {
    users.value = originalUsers.value;
  } else {
    const query = search.value.toLowerCase();
    users.value = originalUsers.value.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }
};
const getData = () => {
  usersAPI.getUsers().then((res) => {
    if (res) {
      users.value = res.data;
      originalUsers.value = res.data;
    }
  });
};

onMounted(() => {
  getData();
});

watch(search, () => {
  handleSearch();
});
</script>
