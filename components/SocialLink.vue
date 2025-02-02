<template>
  <!-- A single social media link -->
  <a
    :href="href"
    :aria-label="ariaLabel"
    class="text-gray-500 hover:text-gray-800"
    target="_blank"
    rel="noopener noreferrer"
  >
    <!-- Text for screen readers -->
    <span class="sr-only">{{ text }}</span>
    <!-- The icon component for the link -->
    <component :is="icon" />
  </a>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  // The link URL
  href: {
    type: String,
    required: true,
  },
  // The ARIA label for the link
  ariaLabel: {
    type: String,
    required: true,
  },
  // The text for screen readers
  text: {
    type: String,
    required: true,
  },
  // The icon component for the link
  icon: {
    type: Object,
    required: true,
  },
});
</script>