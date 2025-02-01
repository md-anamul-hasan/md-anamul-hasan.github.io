<template>
  <!-- Hero Section -->
  <section class="px-2 py-16 sm:py-32 bg-white md:px-0">
    <!-- Container for the hero content -->
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <!-- Flex container for layout -->
      <div class="flex flex-wrap items-center sm:-mx-3">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 md:px-3">
          <div
            class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
          >
            <!-- Subtitle -->
            <h2
              class="text-center text-3xl font-semibold tracking-tight text-indigo-600"
            >
              Hi !
            </h2>
            <!-- Main Title -->
            <h1
              class="text-center text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              <span class="block xl:inline">I am</span>&nbsp;
              <span class="block text-teal-600 xl:inline">Md Anamul</span>&nbsp;
              <span class="block text-indigo-600 xl:inline">Hasan</span>
            </h1>
            <!-- Description -->
            <p
              class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
            >
              I'm Md Anamul Hasan, a Certified SolidWorks Expert and Mechanical
              Engineer with over six years of experience in 3D modeling, product
              design, and manufacturing. My expertise lies in transforming
              innovative ideas into functional designs that solve real-world
              problems.
            </p>
            <!-- Call to Action Buttons -->
            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
              <!-- Try It Free Button -->
              <a
                href="/contact"
                class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-full sm:mb-0 hover:bg-indigo-700 sm:w-auto"
              >
                Contact Me
                <!-- Arrow Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <!-- Learn More Button -->
              <a
                href="/about"
                class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-gray-600"
              >
                More About Me
              </a>
            </div>
          </div>
        </div>
        <!-- Image Content -->
        <div class="w-full md:w-1/2">
          <div
            class="rounded-full w-full h-auto overflow-hidden shadow-xl"
          >
            <img class="size-full"
              src="/assets/images/mdanamulhasan.jpeg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


