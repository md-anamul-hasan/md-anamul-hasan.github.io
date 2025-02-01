<template>
    <div class="sm:flex sm:gap-4">
      <a
        class="inline-block rounded-full border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
        :href="link"
        target="_blank"
        :download="downloadName"
        style="border-radius: 50px"
      >
        {{ buttonText }}
      </a>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Props for dynamic link, download name, and button text
  const props = defineProps({
    link: {
      type: String,
      required: true,
    },
    downloadName: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  });
  </script>
  