<script setup lang="ts">
import "./css/button.css";
type variant = "primary" | "secondary";

withDefaults(defineProps<{ variant: variant }>(), {
  variant: "primary",
});

</script>

<template>
  <button :class="[variant, 'btn-primary']">
    <slot />
  </button>
</template>
