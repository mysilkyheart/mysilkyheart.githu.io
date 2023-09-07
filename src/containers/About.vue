<script setup lang="ts">
import Center from "@/components/Center.vue";
import { simpleIcon } from "@/constants/url";

const techIcons = [
  "html5",
  "css3",
  "bitbucket",
  "codeigniter",
  "git",
  "jquery",
  "javascript",
  "bootstrap",
  "dart",
  "flutter",
  "gnometerminal",
  "nodedotjs",
  "npm",
  "python",
  "react",
  "redux",
  "sublimetext",
  "visualstudiocode",
  "vuedotjs",
];
</script>
<template>
  <Center>
    <div class="content" id="about">
      <h1>About</h1>
      <p>
        a technology addict is never tired of stopping learning new things
        related to technology
      </p>
      <div class="groups">
        <img
          width="32"
          height="32"
          v-for="techIcon in techIcons"
          :src="`${simpleIcon}/${techIcon}`"
          :alt="techIcon"
        />
      </div>
    </div>
  </Center>
</template>
