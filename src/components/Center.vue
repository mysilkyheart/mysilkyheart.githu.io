<script setup lang="ts">
import "./css/center.css";
withDefaults(defineProps<{ isFullHeight?: boolean }>(), { isFullHeight: true });
</script>

<template>
  <div :class="[{ 'h-screen': isFullHeight }, 'center']">
    <slot />
  </div>
</template>
