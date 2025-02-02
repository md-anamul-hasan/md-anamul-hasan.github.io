<template>
    <a
      :href="href"
      :aria-label="ariaLabel"
      class="text-gray-500 hover:text-gray-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="sr-only">{{ text }}</span>
      <component :is="icon" />
    </a>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    href: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: Object,
      required: true
    }
  });
  </script>
  