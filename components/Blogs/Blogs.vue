<template>
  <!-- The blog page -->
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- Blog Grid -->
    <div
      class="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-4 sm:mt-10 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <article
        v-for="blog in blogs"
        :key="blog.id"
        @click="openBlog(blog.url)"
        class="block cursor-pointer rounded-2xl p-4 shadow-sm shadow-indigo-100"
      >
        <!-- Image of the blog -->
        <img
          :src="blog.imageUrl"
          alt=""
          class="h-56 w-full rounded-2xl object-cover"
        />
        <div class="mt-2">
          <!-- Details of the blog -->
          <dl>
            <div>
              <dt class="sr-only">Date</dt>
              <dd class="text-sm text-gray-500">{{ blog.date }}</dd>
            </div>
            <div>
              <dt class="sr-only">Title</dt>
              <dd class="font-medium">{{ blog.title }}</dd>
            </div>
            <div>
              <dt class="sr-only">Author</dt>
              <dd class="text-sm text-gray-500">{{ blog.authorName }}</dd>
            </div>
          </dl>
          <p class="mt-5 line-clamp-2 text-sm text-gray-600">
            {{ blog.description }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// List of blog posts
const blogs = [
  {
    id: 1,
    title: "CAD in Mechanical Design Engineering",
    imageUrl:
      "https://cdn.buymeacoffee.com/uploads/project_updates/2024/09/b066b9dbfe2874ef86b1218a89191f0d.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description:
      "In the rapidly evolving field of mechanical design engineering, precision, and efficiency are crucial. Engineers face the challenge of developing innovative designs that meet project specifications while adhering to tight deadlines and budgets. This is where Computer-Aided Design (CAD) plays a pivotal role. CAD has become an essential tool for mechanical engineers, enabling the creation of detailed, accurate designs with ease.",
    date: "Sep 07, 2024",
    authorName: "Md Anamul Hasan",
    url: "https://buymeacoffee.com/mdanamulhasan/cad-mechanical-design-engineering",
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    imageUrl:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Jan 20, 2025",
    authorName: "Alice Johnson",
    url: "https://example.com",
  },
  {
    id: 3,
    title: "Automation trends in 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 15, 2025",
    authorName: "Alice Johnson",
    url: "https://example.com",
  },
];

// Function to open blog URL
const openBlog = (url) => {
  // Open the blog URL in a new tab
  window.open(url, "_blank");
};
</script>

<style>
/* Additional styles if needed */
</style>
