<template>
  <!-- The main container for the services page -->
  <div>
    <!-- The navbar component at the top of the page -->
    <Header />
    <!-- The main content container -->
    <div class="container mx-auto p-4">
      <!-- The title of the page -->
      <h1 class="text-3xl font-bold">Services</h1>
      <!-- A paragraph describing the page -->
      <p>This is the services page.</p>
    </div>
    <!-- The footer component at the bottom of the page -->
    <Footer />
  </div>
</template>

<script setup>
// Import the navbar and footer components
import Header from '~/components/Header/Header.vue';
import Footer from '~/components/Footer/Footer.vue';
</script>

<style scoped>
/* Add your styles here */
</style>
