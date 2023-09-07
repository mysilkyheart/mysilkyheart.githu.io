<script lang="ts" setup>
import Button from "@/components/Button.vue";
import Center from "@/components/Center.vue";
</script>

<template>
  <Center>
    <div class="content">
      <h4>Hello,</h4>
      <h1>I am <span class="mark"> Devi Adi Nufriana</span></h1>
      <p>
        a <span class="mark">Software Engineer</span>
        with 3 year of experience
      </p>
      <div class="groups">
        <a href="#about">
          <Button variant="primary">Found out more</Button>
        </a>
        <a href="https://www.upwork.com/freelancers/~0184d7dce8f8055ca5">
          <Button variant="secondary">Hire me</Button>
        </a>
      </div>
    </div>
  </Center>
</template>
