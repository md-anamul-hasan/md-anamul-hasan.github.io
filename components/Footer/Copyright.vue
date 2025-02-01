<template>
  <!-- Container for copyright and privacy policy links -->
  <p
    class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
  >
    <!-- Copyright notice with current year and author name -->
    &copy; {{ currentYear }}&nbsp;
    <b>{{ author }}</b>&nbsp;&nbsp;&nbsp;&nbsp; All rights reserved.
  </p>
</template>

<script>
export default {
  data() {
    return {
      // Dynamic data for the current year
      currentYear: new Date().getFullYear(),
      // Author name
      author: 'Md Anamul Hasan',
    };
  },
};
</script>

<style scoped>
/* Styles specific to this component */
</style>

