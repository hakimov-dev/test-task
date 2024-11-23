<template>
  <div class="overflow-x-auto">
    <table class="min-w-full text-center border-collapse">
      <thead>
        <tr class="bg-[var(--card-background-color)]">
          <th
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-color)]"
          >
            ID
          </th>
          <th
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-color)]"
          >
            Name
          </th>

          <th
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-color)]"
          >
            Email
          </th>

          <th
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-color)]"
          >
            Phone
          </th>
          <th
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-color)]"
          >
            Website
          </th>
          <th
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-color)]"
          >
            Company
          </th>
          <th
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-color)]"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="odd:bg-[var(--card-background-color)] even:bg-[var(--background-color)]"
        >
          <td
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-muted-color)]"
          >
            {{ user.id }}
          </td>
          <td
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-muted-color)]"
          >
            {{ user.name }}
          </td>

          <td
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-muted-color)]"
          >
            {{ user.email }}
          </td>

          <td
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-muted-color)]"
          >
            {{ user.phone }}
          </td>
          <td
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-muted-color)]"
          >
            {{ user.website }}
          </td>
          <td
            class="border-b border-[var(--border-color)] p-4 text-[var(--text-muted-color)]"
          >
            {{ user.company.name }}
          </td>
          <td class="border-b border-[var(--border-color)] p-4 pl-6 md:!pl-14">
            <NuxtLink :to="`/users/${user.id}`">
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-[var(--secondary-color)] hover:text-[var(--accent-color)] transition duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12m0 0a3 3 0 11-6 0 3 3 0 016 0zm-9 0a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg> -->
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Optional: Additional table styling, but Tailwind covers most of it */
</style>
