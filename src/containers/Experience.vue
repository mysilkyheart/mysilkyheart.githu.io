<script lang="ts" setup>
import "./css/experience.css";

import companies from "@/data/companies.json";
import Center from "@/components/Center.vue";
import Card from "@/components/Card.vue";
</script>

<template>
  <Center :is-full-height="false">
    <div class="content" id="experience">
      <h1>Experience</h1>
      <div class="list">
        <Card v-for="company in companies">
          <h3>
            {{ company.name }}
            <span class="role">{{ company.role }}</span>
          </h3>
          <time>{{ company.date.start }} - {{ company.date.end }}</time>
          <hr>
          <ul>
            <li v-for="job in company.jobDesc">{{ job }}</li>
          </ul>
        </Card>
      </div>
    </div>
  </Center>
</template>
