<template>
  <!-- Mobile menu, show/hide based on mobileMenuOpen state -->
  <Dialog
    as="div"
    class="lg:hidden"
    @close="mobileMenuOpen = false"
    :open="mobileMenuOpen"
  >
    <!-- Overlay element to prevent interaction with the page behind the menu -->
    <div class="fixed inset-0 z-50" />
    <!-- Menu content -->
    <DialogPanel
      class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <!-- Header with logo and close button -->
      <div
        class="flex-1 md:flex md:items-center md:gap-12 items-center justify-between"
      >
        <Logo size="h-12 w-12" harf="/" />
        <CloseButton @click="mobileMenuOpen = false" />
      </div>
      <Divider />

      <!-- Menu items -->
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6 text-sm font-medium">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="-mx-3 block rounded-lg px-3 py-2 text-gray-600 transition hover:text-teal-600"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup>
import { ref } from "vue";
import Logo from "~/components/Logo.vue";
import CloseButton from "~/components/Buttons/CloseButton.vue";

// State to control the mobile menu
const mobileMenuOpen = ref(false);

// Array of navigation items
const navigation = [
  { name: "About Me", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Projects", href: "/project" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
</script>