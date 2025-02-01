<template>
    <div class="block md:hidden">
      <button
        class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
        @click="toggleMobileMenu"
      >
        <!-- The mobile menu button SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <!-- The mobile menu button paths -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State to control the mobile menu
  const mobileMenuOpen = ref(false);
  
  // Method to toggle the mobile menu
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };
  </script>
  