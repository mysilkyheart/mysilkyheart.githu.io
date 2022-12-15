<script setup lang="ts">
type variant = "primary" | "secondary";

withDefaults(defineProps<{ variant: variant }>(), {
  variant: "primary",
});

const variantClass = {
  primary: "bg-blue-800 text-white",
  secondary: "text-blue-800 hover:text-white dark:text-white",
};
</script>

<template>
  <button
    :class="[
      variantClass[variant],
      'border-2 border-blue-800 text-sm sm:text-lg py-1 px-6 rounded-md font-semibold hover:bg-blue-600 hover:border-blue-600',
    ]"
  >
    <slot />
  </button>
</template>
