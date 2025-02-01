<template>
  <!-- Navigation menu -->
  <nav aria-label="Global" class="hidden md:block">
    <ul class="flex items-center gap-6 text-sm font-medium">
      <!-- Loop through navigation items -->
      <li v-for="item in navigation" :key="item.name">
        <a :href="item.href" class="text-gray-600 transition hover:text-teal-600">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
/* Define navigation items */
const navigation = [
  { name: "About Me", href: "/" },
  { name: "Resume", href: "/" },
  { name: "Portfolio", href: "/" },
  { name: "Projects", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Contact", href: "/" },
];
</script>

