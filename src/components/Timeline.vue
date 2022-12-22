<script lang="ts" setup>
import "./css/timeline.css";
defineProps<{
  name: string;
  role: string;
  date: { start: string; end: string };
  jobDesc: string[];
}>();
</script>

<template>
  <div class="timeline">
    <div class="timeline__right">
      <h3>
        {{ name }}
        <span class="role">{{ role }}</span>
      </h3>
      <time>{{ date.start }} - {{ date.end }}</time>
      <ul>
        <li v-for="job in jobDesc">{{ job }}</li>
      </ul>
    </div>
  </div>
</template>
