<script setup lang="ts">
withDefaults(defineProps<{ isFullHeight: boolean }>(), { isFullHeight: true });
</script>

<template>
  <div
    :class="[
      { 'h-screen': isFullHeight },
      'text-gray-800 flex justify-center items-center even:bg-gray-200 dark:even:bg-slate-700 dark:bg-slate-800 dark:text-white',
    ]"
  >
    <slot />
  </div>
</template>
