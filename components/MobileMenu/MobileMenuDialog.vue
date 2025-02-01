<!-- components/MobileMenuDialog.vue -->
<template>
  <Dialog
    as="div"
    class="fixed inset-0 z-50 overflow-y-auto"
    @close="mobileMenuOpen = false"
    :open="mobileMenuOpen"
  >
    <div class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <!-- Mobile menu panel -->
      <DialogPanel
        class="w-full max-w-sm overflow-hidden rounded-lg bg-white p-4 shadow-xl transition-all sm:max-w-md"
      >
        <!-- Header with logo and close button -->
        <div class="flex items-center justify-between">
          <Logo size="h-10 w-10" href="/" />
          <CloseButton />
        </div>

        <!-- Divider -->
        <Divider class="my-6" />

        <!-- Navigation links -->
        <NavLinks />
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogOverlay, DialogPanel } from '@headlessui/vue';
import Divider from '~/components/Divider.vue';
import Logo from '~/components/Logo.vue';
import CloseButton from '~/components/Buttons/CloseButton.vue';
import NavLinks from '~/components/Header/NavLinks.vue';

// State to control the mobile menu
const mobileMenuOpen = ref(false);
</script>

<style scoped>
/* Add your styles here */
</style>
