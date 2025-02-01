<template>
  <!-- Centered content container with responsive paddings -->
  <div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
    <!-- Container for the sections with vertical spacing between them -->
    <div class="space-y-8">
      <!-- Loop over the privacy policy sections and render each one -->
      <section v-for="(section, index) in privacyPolicy" :key="index">
        <!-- Section title -->
        <h2 class="text-xl font-semibold mb-4">{{ section.title }}</h2>
        <!-- Loop over the content of each section and render each paragraph -->
        <p
          v-for="(content, i) in section.content"
          :key="i"
          class="text-gray-700 mb-4"
        >
          {{ content }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Data structure for storing privacy policy sections and their content
      privacyPolicy: [
        {
          title: "1. Introduction",
          content: [
            "Your privacy is important to us. This Privacy Policy outlines how [Your Company Name] collects, uses, and protects your personal information.",
            "By using our website or services, you consent to the data practices described in this policy.",
          ],
        },
        {
          title: "2. Information We Collect",
          content: [
            "We may collect personal information such as your name, email address, and usage data.",
            "We also collect non-personal information like browser type, IP address, and site usage data.",
          ],
        },
        {
          title: "3. How We Use Your Information",
          content: [
            "We use your information to provide, improve, and communicate about our services.",
            "We may also use your data to comply with legal obligations and enhance user experience.",
          ],
        },
        // Additional sections can be added as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Styling for the main header */
h1 {
  color: #1f2937;
}

/* Styling for section headers */
h2 {
  color: #374151;
}

/* Styling for paragraph text */
p {
  line-height: 1.6;
}
</style>
