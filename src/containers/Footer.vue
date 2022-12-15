<script lang="ts" setup>
import { simpleIcon } from "../constants/url";

const contactIcons = [
  { icon: "gmail", url: "mailto:devi.nufriana@gmail.com" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/devinufriana" },
  { icon: "github", url: "https://github.com/deanufriana" },
  { icon: "instagram", url: "https://www.instagram.com/deanufriana" },
  {
    icon: "upwork",
    url: "https://www.upwork.com/freelancers/~0184d7dce8f8055ca5",
  },
];
</script>
<template>
  <div class="py-8 px-4 bg-gray-300 dark:even:bg-slate-600 dark:bg-slate-800 dark:text-white">
    <h4 class="text-4xl font-extrabold">Contact me</h4>
    <div class="flex gap-5 mt-3">
      <a v-for="contactIcon in contactIcons" :href="contactIcon.url" target="_blank">
        <img
          width="32"
          height="32"
          :src="`${simpleIcon}/${contactIcon.icon}`"
          :alt="contactIcon.icon"
        />
      </a>
    </div>
  </div>
</template>
