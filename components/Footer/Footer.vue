<template>
  <!-- Footer Section -->
  <section class="text-gray-700 bg-white body-font">
    <!-- Divider with gradient effect -->
    <Divider />

    <!-- Content area -->
    <div
      class="container flex flex-col items-center px-8 py-2 mx-auto max-w-7xl sm:flex-row"
    >
      <!-- Logo with link -->
      <Logo size="h-8 w-8" href="/" />

      <!-- Copyright and privacy policy links -->
      <Copyright />

      <FooterLinks text="Terms of Service" href="/terms-of-service" />
      <FooterLinks text="Privacy Policy" href="/privacy-policy" />
      <FooterLinks text="FAQs" href="/faq" />

      <!-- Social media links -->
      <span
        class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <!-- LinkedIn -->
        <SocialLink
          href="https://www.linkedin.com/in/md-anamul-hasan"
          aria-label="LinkedIn"
          text="LinkedIn"
          :icon="IconLinkedIn"
        />

        <!-- Facebook -->
        <SocialLink
          href="https://www.facebook.com/md.anm.hsn"
          aria-label="Facebook"
          text="Facebook"
          :icon="IconFacebook"
        />

        <!-- Instagram -->
        <SocialLink
          href="https://www.instagram.com/md.anm_hsn"
          aria-label="Instagram"
          text="Instagram"
          :icon="IconInstagram"
        />

        <!-- X -->
        <SocialLink
          href="https://x.com/hasanmd_anamul"
          aria-label="X"
          text="X"
          :icon="IconX"
        />

        <!-- GitHub -->
        <SocialLink
          href="https://github.com/md-anamul-hasan"
          aria-label="GitHub"
          text="GitHub"
          :icon="IconGitHub"
        />

        <!-- Youtube -->
        <SocialLink
          href="https://www.youtube.com/@Live_CAD"
          aria-label="Youtube"
          text="Youtube"
          :icon="IconYoutube"
        />
      </span>
    </div>
  </section>
</template>

<script setup>
// Import the components
import Divider from "~/components/Divider.vue";
import Logo from "~/components/Logo.vue";
import Copyright from "~/components/Footer/Copyright.vue";
import IconLinkedIn from "../Icons/IconLinkedIn.vue";
import IconFacebook from "../Icons/IconFacebook.vue";
import IconInstagram from "../Icons/IconInstagram.vue";
import IconX from "../Icons/IconX.vue";
import IconGitHub from "../Icons/IconGitHub.vue";
import IconYoutube from "../Icons/IconYoutube.vue";
</script>
