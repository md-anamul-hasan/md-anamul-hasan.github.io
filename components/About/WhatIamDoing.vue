<template>
  <!-- Section for highlighting features of the platform -->
  <div class="bg-white py-12 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          What I'm doing!
        </p>
        <p class="mt-6 text-lg/8 text-gray-600">
          I design advanced 3D models, produce CAD tutorials, and collaborate on
          innovative product designs. I also develop automation solutions and
          create graphics to communicate ideas clearly.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base/7 font-semibold text-gray-900">
              <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                <nuxt-icon :name="feature.icon" class="size-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base/7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
// Defining a list of features with their descriptions and corresponding Nuxt icons
const features = [
  {
    name: "Creating Advanced 3D Models",
    description: "Designing precise 3D models for industries like automotive and aerospace.",
    icon: "mdi-cube-outline", // Nuxt Icon (Material Design Icons)
  },
  {
    name: "Producing CAD Tutorials",
    description: "Creating CAD and 3D modeling educational videos. My YouTube channel.",
    icon: "mdi-play-circle-outline", // Play icon for tutorials
  },
  {
    name: "Building a Digital Resource Library",
    description: "Creating downloadable CAD templates, models, and scripts. My Store.",
    icon: "mdi-folder-download-outline", // Folder download icon
  },
  {
    name: "Collaborating on Product Designs",
    description: "Collaborating with clients to create and implement innovative product designs.",
    icon: "mdi-lightbulb-outline", // Lightbulb icon for innovation
  },
  {
    name: "Automation & Programming",
    description: "Developing and implementing design automation, macros, and programming solutions.",
    icon: "mdi-cog-outline", // Cog icon for automation
  },
  {
    name: "Graphics & Mockups Designs",
    description: "Creating impactful graphics and detailed mockups to visualize and communicate designs.",
    icon: "mdi-image-outline", // Image icon for graphics
  },
];
</script>
