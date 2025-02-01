<template>
  <!-- FAQ component -->
  <div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
    <div class="py-4 sm:py-8">
      <!-- Loop over the FAQs and render each one -->
      <details
        v-for="(faq, index) in faqs"
        :key="index"
        :open="faq.open"
        @toggle="toggleFAQ(index)"
        class="group [&_summary::-webkit-details-marker]:hidden"
      >
        <!-- Summary section (question) -->
        <summary
          class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
        >
          <!-- Question -->
          <h2 class="font-medium">{{ faq.question }}</h2>
          <!-- Arrow icon -->
          <svg
            class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <!-- Answer section -->
        <p class="mt-4 px-4 leading-relaxed text-gray-700">
          {{ faq.answer }}
        </p>
      </details>
    </div>
  </div>
</template>

<script setup>
const faqs = ref([
  {
    question: "What is this website about?",
    answer:
      "This website is a hub for CAD and design-related resources, articles, and tools.",
    open: true, // First FAQ open
  },
  {
    question: "How can I participate in your competitions?",
    answer: "Register through our Events page for upcoming competitions.",
    open: false,
  },
  {
    question: "How can I contact support?",
    answer:
      "Contact support via our Contact Us page or email support@example.com.",
    open: false,
  },
  // More FAQs can be added here
]);

// Toggle the open state of an FAQ
function toggleFAQ(index) {
  faqs.value[index].open = !faqs.value[index].open;
}
</script>

<style scoped>
/* FAQ styles */
h1 {
  color: #1f2937;
}
details[open] summary {
  font-weight: bold;
}
details[open] p {
  color: #4b5563;
}
</style>
