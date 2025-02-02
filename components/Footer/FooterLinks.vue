<template>
    <!-- Footer link component, accepts text and href props -->
    <a
      :href="href"
      class="mt-4 text-sm text-gray-500 hover:text-blue-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0 transition duration-300"
    >
      <!-- The link text -->
      {{ text }}
    </a>
  </template>
  
  <script setup>
  // Define the props for the component
  defineProps({
    // The text of the link
    text: String,
    // The href of the link
    href: String
  });
  </script>