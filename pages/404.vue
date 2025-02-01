<template>
  <!-- 404 Error Page -->
  <div class="flex h-screen items-center justify-center bg-white px-4">
    <div class="text-center">
      <!-- Error Code -->
      <h1 class="text-9xl font-extrabold text-gray-300">404</h1>

      <!-- Error Message -->
      <p class="text-3xl font-bold text-gray-900 sm:text-4xl">Oops!</p>
      <p class="text-lg text-gray-700 sm:text-2xl">
        We couldn't find that page.
      </p>

      <!-- Explanation -->
      <p class="mt-4 text-gray-500">
        Perhaps you mistyped the URL or the page has moved.
      </p>

      <!-- Return Home Button -->
      <a
        href="/"
        class="mt-6 inline-block rounded-full border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
      >
        Return Home
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Larger font size for the error code */
.text-9xl {
  font-size: 9rem;
}
</style>
