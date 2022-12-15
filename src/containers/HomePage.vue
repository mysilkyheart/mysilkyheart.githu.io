<script lang="ts" setup>
import Button from "../components/Button.vue";
import Center from "../components/Center.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <Center>
    <div class="content">
      <h4
        class="text-xl sm:text-lg bg-slate-700 text-white py-2 px-5 rounded-md font-bold w-fit m-auto dark:bg-white dark:text-slate-800"
      >
        Hello,
      </h4>
      <Header>
        I am
        <span class="text-blue-800 dark:text-blue-600">Devi Adi Nufriana</span>
      </Header>
      <p class="font-bold mb-3 text-md sm:text-xl">
        a
        <span class="text-blue-800 dark:text-blue-600">Software Engineer</span>
        with 3 year of experience
      </p>
      <div class="flex gap-3 flex-wrap sm:flex-nowrap w-full justify-center">
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
