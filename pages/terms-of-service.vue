<!-- privacy-policy.vue -->
<template>
    <!-- The Privacy Policy page -->
    <div>
      <!-- The navbar at the top of the page -->
      <Header />
      <!-- The main content container -->
      <div class="relative bg-white px-6 py-24 sm:py-32 lg:px-8">
        <!-- A gradient effect in the background -->
        <div
          class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
  
        <!-- The header for the page -->
        <div class="mx-auto max-w-2xl text-center">
          <h2
            class="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl"
          >
            Privacy Policy
          </h2>
          <p class="mt-2 text-lg/8 text-gray-600">
            Learn how I handle your data and what rights you have as a user.
          </p>
        </div>
        <!-- The policy component displaying the privacy policy -->
        <Policies />
      </div>
  
      <!-- The footer at the bottom of the page -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  // Import the navbar, policy, and footer components
  import Header from "~/components/Header/Header.vue";
  import Policies from "~/components/Policies/Policies.vue";
  import Footer from "~/components/Footer/Footer.vue";
  </script>
  