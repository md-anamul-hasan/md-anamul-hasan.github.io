<template>
  <!-- The desktop navigation menu -->
  <nav aria-label="Global" class="hidden md:block">
    <ul class="flex items-center gap-6 text-sm font-medium">
      <!-- Loop through the navigation items -->
      <li v-for="item in navigation" :key="item.name">
        <a
          :href="item.href"
          class="text-gray-600 transition hover:text-teal-600"
        >
          <!-- The text for each navigation item -->
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Array of navigation items
const navigation = ref([
  { name: "About Me", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Projects", href: "/project" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]);
</script>
