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
        <tr v-if="users.length === 0">
          <td colspan="7" class="p-6 text-[var(--text-muted-color)]">
            <div class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9V7.5a3.75 3.75 0 1 1 7.5 0V9m-9 4.5h10.5m-11.25 3h12"
                />
              </svg>
              No Data Available
            </div>
          </td>
        </tr>
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
