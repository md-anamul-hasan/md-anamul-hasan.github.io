<template>
  <!-- The about page -->
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
          About Me
        </h2>
        <p
          class="py-2 sm:py-4 text-justify mt-2 text-lg/8 text-gray-600"
        >
          I'm <span class="font-semibold text-teal-800">Md Anamul Hasan</span>, a Certified SolidWorks Expert and Mechanical
          Engineer with over six years of experience in <span class="font-semibold">3D modeling</span>, <span class="font-semibold">product design</span>, and <span class="font-semibold">manufacturing</span>. My expertise lies in transforming
          innovative ideas into functional designs that solve real-world
          problems. <br />
          <br />

          As a tech enthusiast, I’m committed to pushing the boundaries of
          what’s possible in mechanical design and product development. Through
          my YouTube channel, I share in-depth tutorials on CAD, 3D modeling,
          and product development, helping others enhance their skills and stay
          ahead in the engineering field.
        </p>
      </div>

      <!-- The WhatIdo component -->
      <WhatIamDoing />
    </div>

    <!-- The footer at the bottom of the page -->
    <Footer />
  </div>
</template>

<script setup>
// Import components
import Header from "~/components/Header/Header.vue";
import WhatIamDoing from "~/components/About/WhatIamDoing.vue";
import Footer from "~/components/Footer/Footer.vue";
</script>

<style scoped>
/* Add your styles here */
</style>

