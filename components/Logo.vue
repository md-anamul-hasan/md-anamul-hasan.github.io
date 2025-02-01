<template>
  <a :href="href" class="block text-teal-600">
    <!-- The logo SVG -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      :class="`w-${size} h-${size} fill-teal-600 dark:fill-teal-300 hover:fill-gray-600 hover:dark:fill-gray-300`"
    >
      <!-- The logo path -->
      <g>
        <polygon
          points="4.4,7.9 4.4,5.5 3.7,4.2 5.4,4.2 5.4,9.6 6.6,11.6 6.6,4.2 7.8,4.2 7.8,13.7 9,15.8 9,3 1.6,3"
        />
        <!-- More logo paths -->
        <path
          d="M9.8,17.2l1.2,2.1v-8.8h2v8.8l1.2-2.1V3H9.8V17.2z M11,4.2h2V9h-2V4.2z"
        />
        <!-- Even more logo paths -->
        <polygon
          points="17.4,11.6 22.4,3 21,3 19.4,5.8 16.2,5.8 16.2,3 15,3 15,15.8 16.2,13.7 16.2,7 18.7,7 17.4,9.3"
        />
        <!-- And even more logo paths -->
        <path d="M12,21l0.7-1.3c0,0-1.4,0-1.4,0L12,21z" />
      </g>
    </svg>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

// Dynamic link and size props
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});
</script>

