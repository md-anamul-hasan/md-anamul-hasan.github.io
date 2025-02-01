<template>
  <!-- The navigation bar at the top of the page -->
  <header class="bg-white">
    <!-- The container element that holds all the content -->
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <!-- The flexbox container that holds the logo and navigation -->
      <div class="flex h-16 items-center justify-between">
        <!-- The logo and navigation items on the left side -->
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <!-- The logo -->
          <a class="block text-teal-600" href="/">
            <!-- The logo SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-12 h-12 fill-teal-600 dark:fill-teal-300 hover:fill-gray-600 hover:dark:fill-gray-300"
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
        </div>

        <!-- The navigation items on the right side -->
        <div class="md:flex md:items-center md:gap-12">
          <!-- The desktop navigation menu -->
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm font-medium">
              <!-- Loop through the navigation items -->
              <li v-for="item in navigation" :key="item.name">
                <!-- The link for each navigation item -->
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

          <!-- The download button and mobile menu button -->
          <div class="flex items-center gap-4">
            <!-- The download button -->
            <div class="sm:flex sm:gap-4">
              <a
                class="inline-block rounded-full border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
                href="https://drive.usercontent.google.com/download?id=1-Jj0JdfWpCR8HXuozROBbZOJfJC3Fcln&export=download&authuser=0"
                target="_blank"
                download="Resume-Md_Anamul_Hasan.pdf"
                style="border-radius: 50px"
              >
                Download My CV
              </a>
            </div>

            <!-- The mobile menu button -->
            <div class="block md:hidden">
              <button
                class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                @click="mobileMenuOpen = true"
              >
                <!-- The mobile menu button SVG -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <!-- The mobile menu button paths -->
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- The gradient line that goes across the top of the page -->
    <span class="relative flex justify-center">
      <div
        class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
      ></div>
      <span class="relative z-10 bg-white px-6"></span>
    </span>

    <!-- Mobile menu dialog -->
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <!-- Overlay background -->
      <div class="fixed inset-0 z-50" />

      <!-- Mobile menu panel -->
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <!-- Header with logo and close button -->
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-12 h-12 fill-teal-600 dark:fill-teal-300 hover:fill-gray-600 hover:dark:fill-gray-300"
            >
              <g>
                <polygon
                  points="4.4,7.9 4.4,5.5 3.7,4.2 5.4,4.2 5.4,9.6 6.6,11.6 6.6,4.2 7.8,4.2 7.8,13.7 9,15.8 9,3 1.6,3"
                />
                <path
                  d="M9.8,17.2l1.2,2.1v-8.8h2v8.8l1.2-2.1V3H9.8V17.2z M11,4.2h2V9h-2V4.2z"
                />
                <polygon
                  points="17.4,11.6 22.4,3 21,3 19.4,5.8 16.2,5.8 16.2,3 15,3 15,15.8 16.2,13.7 16.2,7 18.7,7 17.4,9.3"
                />
                <path d="M12,21l0.7-1.3c0,0-1.4,0-1.4,0L12,21z" />
              </g>
            </svg>
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>

        <!-- Divider -->
        <span class="relative flex justify-center">
          <div
            class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
          ></div>
          <span class="relative z-10 bg-white px-6"></span>
        </span>

        <!-- Navigation links -->
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6 text-sm font-medium">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-gray-600 transition hover:text-teal-600"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
/**
 * Navigation items for the main menu
 */
const navigation = [
  { name: "About Me", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Projects", href: "/project" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

/**
 * Whether the mobile menu is currently open
 */
const mobileMenuOpen = ref(false);
</script>
