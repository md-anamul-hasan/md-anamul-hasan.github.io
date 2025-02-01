<template>
  <!-- Footer Section -->
  <section class="text-gray-700 bg-white body-font">
    <!-- Divider with gradient effect -->
    <span class="relative flex justify-center">
      <div
        class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
      ></div>

      <span class="relative z-10 bg-white px-6"></span>
    </span>

    <!-- Content area -->
    <div
      class="container flex flex-col items-center px-8 py-2 mx-auto max-w-7xl sm:flex-row"
    >
      <!-- Logo with link -->
      <a class="block text-teal-600" href="/">
        <span class="sr-only">Home</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8 fill-teal-600 dark:fill-teal-300 hover:fill-gray-600 hover:dark:fill-gray-300"
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

      <!-- Copyright and privacy policy links -->
      <p
        class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
      >
        &copy; {{ currentYear }} &nbsp;
        <b> Md Anamul Hasan</b>&nbsp;&nbsp;&nbsp;&nbsp; All rights reserved.
      </p>

      <a
        class="mt-4 text-sm text-gray-500 hover:text-blue-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
        href="/privacy-policy"
      >
        Privacy Policy.
      </a>

      <a
        class="mt-4 text-sm text-gray-500 hover:text-blue-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
        href="/faq"
      >
        FAQs.
      </a>

      <!-- Social media links -->
      <span
        class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/md-anamul-hasan"
          aria-label="LinkedIn"
          class="text-gray-500 hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">LinkedIn</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M18.2,2H5.8C3.7,2,2,3.7,2,5.8v12.5C2,20.3,3.7,22,5.8,22h12.5c2.1,0,3.8-1.7,3.8-3.8V5.8C22,3.7,20.3,2,18.2,2z M8.2,19H5.1l0-9.3h3.1L8.2,19z M6.6,8.5L6.6,8.5c-1,0-1.7-0.7-1.7-1.6c0-0.9,0.7-1.6,1.7-1.6S8.2,6,8.3,6.9C8.3,7.8,7.6,8.5,6.6,8.5z M19,19h-3.1v-5.1c0-1.2-0.3-2.1-1.4-2.1c-0.8,0-1.3,0.6-1.5,1.1c-0.1,0.2-0.1,0.5-0.1,0.7V19H9.7l0-9.3h3.1l0,1.3c0.4-0.6,1.1-1.5,2.7-1.5c2,0,3.5,1.3,3.5,4.1L19,19L19,19z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- Facebook -->
        <a
          href="https://www.facebook.com/md.anm.hsn"
          aria-label="Facebook"
          class="text-gray-500 hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">Facebook</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/md.anm_hsn"
          aria-label="Instagram"
          class="text-gray-500 hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">Instagram</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- X -->
        <a
          href="https://x.com/hasanmd_anamul"
          aria-label="X"
          class="text-gray-500 hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">X</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.3,2C3.5,2,2,3.5,2,5.3v13.3C2,20.5,3.5,22,5.3,22h13.3c1.8,0,3.3-1.5,3.3-3.3V5.3C22,3.5,20.5,2,18.7,2H5.3z M6.3,6.3h3.8l2.7,3.8L16,6.3h1.2l-3.9,4.6l4.8,6.9h-3.8l-3.1-4.4l-3.8,4.4H6.3l4.4-5.2L6.3,6.3z M8.1,7.2l6.7,9.5h1.5L9.6,7.2H8.1z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/md-anamul-hasan"
          aria-label="GitHub"
          class="text-gray-500 hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">GitHub</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- Youtube -->
        <a
          href="https://www.youtube.com/@Live_CAD"
          aria-label="Youtube"
          class="text-gray-500 hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">Youtube</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M21.9,6.9c-0.2-1.1-1.1-1.9-2.2-2.1c-1.6-0.3-4.6-0.6-7.8-0.6c-3.2,0-6.2,0.2-7.8,0.6C3,5,2.1,5.8,1.9,6.9C1.7,8.1,1.5,9.8,1.5,12s0.2,3.9,0.4,5.1c0.2,1.1,1.1,1.9,2.2,2.1c1.7,0.3,4.6,0.6,7.8,0.6s6.1-0.2,7.8-0.6c1.1-0.2,2-1,2.2-2.1c0.2-1.2,0.4-3,0.5-5.1C22.4,9.8,22.2,8.1,21.9,6.9z M9.3,15.4V8.6l5.9,3.4L9.3,15.4z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </span>
    </div>
  </section>
</template>

<script>
/**
 * Footer component
 *
 * @copyright 2025 Md. Anamul Hasan
 * @license MIT
 */
export default {
  data() {
    return {
      /**
       * The current year
       * @type {number}
       */
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
