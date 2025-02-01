<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- Tabs for Filtering -->
    <div class="py-4 sm:py-8 flex align-center justify-center mb-10">
      <div class="sm:hidden">
        <label for="projectType" class="sr-only">Project Type</label>
        <select
          id="projectType"
          class="w-full rounded-md border-gray-200"
          v-model="selectedType"
        >
          <option value="">All Projects</option>
          <option v-for="type in projectTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>

      <div class="hidden sm:block">
        <nav
          class="border-b border-gray-200 -mb-px flex gap-6"
          aria-label="Tabs"
        >
          <button
            class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            :class="{ 'border-sky-500 text-sky-600': selectedType === '' }"
            @click="selectedType = ''"
          >
            All Projects
          </button>
          <button
            v-for="type in projectTypes"
            :key="type"
            class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            :class="{ 'border-sky-500 text-sky-600': selectedType === type }"
            @click="selectedType = type"
          >
            {{ type }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Projects Grid -->
    <div
      class="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-4 sm:mt-10 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <article
        v-for="project in filteredProjects"
        :key="project.id"
        class="block rounded-2xl p-4 shadow-sm shadow-indigo-100 cursor-pointer"
        @click="openProjectModal(project)"
      >
        <img
          :src="project.imageUrl"
          alt=""
          class="h-56 w-full rounded-2xl object-cover"
        />
        <div class="mt-2">
          <dl>
            <div>
              <dt class="sr-only">Timeline</dt>
              <dd class="text-sm text-gray-500">{{ project.timeline }}</dd>
            </div>
            <div>
              <dt class="sr-only">Title</dt>
              <dd class="font-medium">{{ project.title }}</dd>
            </div>
          </dl>
          <p class="mt-5 line-clamp-2 text-sm text-gray-600">
            {{ project.description }}
          </p>
        </div>
      </article>
    </div>

    <!-- Project Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="relative bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6">
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          @click="closeProjectModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          :src="selectedProject.imageUrl"
          alt="X"
          class="h-64 w-full rounded-md object-cover mb-4"
        />
        <h2 class="text-xl font-bold mb-2">{{ selectedProject.title }}</h2>
        <p class="text-sm text-gray-500 mb-4">
          {{ selectedProject.timeline }}
        </p>
        <p class="text-gray-700">{{ selectedProject.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Projects data
const projects = [
  {
    id: 1,
    title: "Boost your conversion rate",
    imageUrl:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    timeline: "Jan 2020 - Aug 2021",
    type: "Product Development",
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    imageUrl:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    timeline: "Jan 2020 - Aug 2021",
    type: "Mechanical Design",
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    imageUrl:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    timeline: "Jan 2020 - Aug 2021",
    type: "Automation",
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    imageUrl:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    timeline: "Jan 2020 - Aug 2021",
    type: "Graphics & Mockups",
  },
  {
    id: 5,
    title: "Boost your conversion rate",
    imageUrl:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    timeline: "Jan 2020 - Aug 2021",
    type: "Hobby Projects",
  },
  {
    id: 6,
    title: "Boost your conversion rate",
    imageUrl:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    timeline: "Jan 2020 - Aug 2021",
    type: "Marketing",
  },
  // Other projects...
];

// Project types
const projectTypes = [
  "Product Development",
  "Mechanical Design",
  "Automation",
  "Graphics & Mockups",
  "Hobby Projects",
  "Marketing",
];

// Selected project type
const selectedType = ref("");
// Selected project (for modal)
const selectedProject = ref({});
// Modal visibility
const isModalOpen = ref(false);

// Filtered projects computed property
const filteredProjects = computed(() => {
  if (!selectedType.value) return projects;
  return projects.filter((project) => project.type === selectedType.value);
});

// Open project modal
const openProjectModal = (project) => {
  selectedProject.value = { ...project };
  isModalOpen.value = true;
};

// Close project modal
const closeProjectModal = () => {
  isModalOpen.value = false;
  selectedProject.value = {};
};
</script>

<style>
/* Additional styles if needed */
</style>
