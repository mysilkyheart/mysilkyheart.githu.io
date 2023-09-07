<script setup lang="ts">
import "./css/card.css";
withDefaults(defineProps<{ isFullHeight?: boolean }>(), { isFullHeight: true });
</script>

<template>
  <div :class="[{}, 'card']">
    <slot />
  </div>
</template>
