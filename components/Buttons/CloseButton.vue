<template>
    <button
      type="button"
      class="-m-2.5 rounded-md p-2.5 text-gray-700"
      @click="mobileMenuOpen = false"
    >
      <span class="sr-only">Close menu</span>
      <Icon name="mdi-close" class="h-6 w-6" />
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    mobileMenuOpen: {
      type: Boolean,
      required: true,
    },
  });
  </script>
  