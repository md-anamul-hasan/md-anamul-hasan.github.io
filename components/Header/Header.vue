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
          <Logo size="h-12 w-12" href="/" />
        </div>

        <!-- The navigation items on the right side -->
        <div class="md:flex md:items-center md:gap-12">
          <!-- The desktop navigation menu -->
          <NavLinks />

          <!-- The download button and mobile menu button -->
          <div class="flex items-center gap-4">
            <!-- The download button -->
            <DownloadButton
              :link="downloadLink"
              :downloadName="fileName"
              :buttonText="buttonText"
            />

            <!-- The mobile menu button -->
            <ToggleMobileMenu />
          </div>
        </div>
      </div>
    </div>
    <!-- The gradient line that goes across the top of the page -->
    <Divider />

    <!-- Mobile menu dialog -->
    <MobileMenuDialog />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import Logo from "~/components/Logo.vue";
import NavLinks from "~/components/Header/NavLinks.vue";
import DownloadButton from "~/components/Buttons/DownloadButton.vue";
import ToggleMobileMenu from "~/components/MobileMenu/ToggleMobileMenu.vue";
import Divider from "~/components/Divider.vue";
import MobileMenuDialog from "~/components/MobileMenu/MobileMenuDialog.vue";

// Whether the mobile menu is currently open
const mobileMenuOpen = ref(false);

// Reactive variables for download button
const buttonText = ref("Download My CV");
const downloadLink = ref("https://drive.usercontent.google.com/download?id=1-Jj0JdfWpCR8HXuozROBbZOJfJC3Fcln&export=download&authuser=0");
const fileName = ref("Resume-Md_Anamul_Hasan.pdf");
</script>