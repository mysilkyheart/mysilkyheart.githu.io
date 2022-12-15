<script lang="ts" setup>
defineProps<{
  name: string;
  role: string;
  date: { start: string; end: string };
  jobDesc: string[];
}>();
</script>

<template>
  <ol class="relative border-l-2 border-blue-700 text-left pb-4 last:pb-0">
    <li class="pl-5">
      <span class="absolute -left-3 top-0 w-5 h-5 bg-blue-700 rounded-full" />
      <h3 class="text-lg mb-1 font-semibold">
        {{ name }}
        <span
          class="bg-blue-100 text-sm font-semibold px-2.5 py-1 rounded dark:bg-blue-800 dark:text-white"
          >{{ role }}</span
        >
      </h3>
      <time class="block mb-2 text-sm leading-none font-normal text-gray-400"
        >{{ date.start }} - {{ date.end }}</time
      >
      <ul>
        <li v-for="job in jobDesc"># {{ job }}</li>
      </ul>
    </li>
  </ol>
</template>
