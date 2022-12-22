<script lang="ts" setup>
import companies from "../data/companies.json";

import Center from "../components/Center.vue";
import Timeline from "../components/Timeline.vue";
</script>

<template>
  <Center :is-full-height="false">
    <div>
      <h1>Experience</h1>
      <br />
      <Timeline
        v-for="company in companies"
        :name="company.name"
        :date="company.date"
        :role="company.role"
        :job-desc="company.jobDesc"
      ></Timeline>
    </div>
  </Center>
</template>
