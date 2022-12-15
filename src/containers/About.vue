<script setup lang="ts">
import Center from "../components/Center.vue";
import Header from "../components/Header.vue";
import { simpleIcon } from "../constants/url";

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
  <Center :isFullHeight="false">
    <div class="content" id="about">
      <Header>About</Header>
      <p class="font-medium mb-4 text-md sm:text-xl mt-3">
        a technology addict is never tired of stopping learning new things
        related to technology
      </p>
      <div class="flex flex-wrap justify-center gap-3">
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
