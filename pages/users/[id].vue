<template>
  <div class="mt-4">
    <NuxtLink to="/" class="flex items-center text-[var(--text-muted-color)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>

      <span class="ml-2">Go back</span>
    </NuxtLink>
    <div
      class="card bg-[var(--card-background-color)] p-4 rounded-lg border border-[var(--border-color)] mt-3"
    >
      <h1 class="text-3xl font-bold mb-2">{{ user.name }}</h1>
      <p class="mb-1">
        Username:
        <span class="text-[var(--text-muted-color)]">{{ user.username }}</span>
      </p>
      <p class="mb-1">
        Email:
        <span class="text-[var(--text-muted-color)]">{{ user.email }}</span>
      </p>

      <p class="mb-1">
        Phone:
        <span class="text-[var(--text-muted-color)]">{{ user.phone }}</span>
      </p>
      <p class="mb-4">
        Website:
        <span
          class="text-[var(--text-muted-color)] hover:text-[var(--secondary-color)]"
          ><a :href="user.website" target="_blank">{{ user.website }}</a></span
        >
      </p>
      <div class="address mb-4">
        <h2 class="text-xl font-semibold mb-1">Address:</h2>
        <p class="text-[var(--text-muted-color)]">
          {{ user.address.street }}, {{ user.address.suite }}
        </p>
        <p class="text-[var(--text-muted-color)]">
          {{ user.address.city }}, {{ user.address.zipcode }}
        </p>
      </div>

      <div class="company mb-4">
        <h2 class="text-xl font-semibold mb-1">Company:</h2>
        <p>
          Name:
          <span class="text-[var(--text-muted-color)]">{{
            user.company.name
          }}</span>
        </p>
        <p>
          Catchphrase:
          <span class="text-[var(--text-muted-color)]">{{
            user.company.catchPhrase
          }}</span>
        </p>
        <p>
          BS:
          <span class="text-[var(--text-muted-color)]">{{
            user.company.bs
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = ref({});

onMounted(() => {
  console.log("mounted");
});
</script>
