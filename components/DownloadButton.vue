<template>
  <!-- Download button -->
  <a
    :class="buttonClass"
    :href="downloadLink"
    target="_blank"
    :download="fileName"
    style="border-radius: 50px"
  >
    {{ buttonText }}
    <!-- Button text -->
  </a>
</template>

<script setup>
import { ref } from "vue";

// Reactive variable for button text
const buttonText = ref("Download My CV");

// Reactive variable for download link
const downloadLink = ref(
  // download link for the resume
  "https://drive.usercontent.google.com/download?id=1-Jj0JdfWpCR8HXuozROBbZOJfJC3Fcln&export=download&authuser=0"
);

// Reactive variable for the file name
const fileName = ref("Resume-Md_Anamul_Hasan.pdf");

// Reactive variable for button class styling
const buttonClass = ref(
  // tailwindcss classes for styling the button
  "inline-block rounded-full border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
);
</script>