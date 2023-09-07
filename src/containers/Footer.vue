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
  <footer class="footer">
    <h3>Contact me</h3>
    <div class="groups">
      <a
        v-for="contactIcon in contactIcons"
        :href="contactIcon.url"
        target="_blank"
      >
        <img
          width="32"
          height="32"
          :src="`${simpleIcon}/${contactIcon.icon}`"
          :alt="contactIcon.icon"
        />
      </a>
    </div>
  </footer>
</template>

<style>
.footer {
  padding: var(--size-4);
  background-color: var(--surface-2);
}
</style>
