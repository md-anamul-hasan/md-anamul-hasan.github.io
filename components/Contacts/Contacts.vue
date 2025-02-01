<template>
  <!--
      The actual contact form, with input fields for first name, last name,
      company, phone number, and message. The form is wrapped in a `grid` class
      with two columns, and the `gap-x-8` and `gap-y-6` classes are used to
      create a gap between the form fields on small screens.
    -->
  <form @submit.prevent="submitForm" class="mx-auto mt-16 max-w-xl sm:mt-20">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <!--
          First name field
        -->
      <div>
        <label
          for="first-name"
          class="block text-sm/6 font-semibold text-gray-900"
          >First Name</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            v-model="form.firstName"
            id="first-name"
            autocomplete="given-name"
            class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            required
          />
        </div>
      </div>
      <!--
          Last name field
        -->
      <div>
        <label
          for="last-name"
          class="block text-sm/6 font-semibold text-gray-900"
          >Last Name</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            v-model="form.lastName"
            id="last-name"
            autocomplete="family-name"
            class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            required
          />
        </div>
      </div>
      <!--
          Company field
        -->
      <div class="sm:col-span-2">
        <label for="company" class="block text-sm/6 font-semibold text-gray-900"
          >Company</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            v-model="form.company"
            id="company"
            autocomplete="organization"
            class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          />
        </div>
      </div>
      <!-- Email field -->
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm/6 font-semibold text-gray-900"
          >Email</label
        >
        <div class="mt-2.5">
          <input
            type="email"
            v-model="form.email"
            id="email"
            autocomplete="email"
            class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            placeholder=""
            required
          />
        </div>
      </div>

      <!-- Phone number field with country code -->
      <div class="sm:col-span-2">
        <label
          for="phone-number"
          class="block text-sm/6 font-semibold text-gray-900"
          >Phone number</label
        >
        <div class="mt-2.5">
          <div
            class="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
          >
            <input
              type="text"
              v-model="form.countryCode"
              id="country-code"
              name="country-code"
              autocomplete="country-code"
              aria-label="Country Code"
              class="block w-20 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              placeholder="+1"
            />
            <input
              type="text"
              v-model="form.phoneNumber"
              id="phone-number"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              placeholder="123-456-7890"
            />
          </div>
        </div>
      </div>

      <!-- Message textarea -->
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm/6 font-semibold text-gray-900"
          >Your Message</label
        >
        <div class="mt-2.5">
          <textarea
            v-model="form.message"
            id="message"
            rows="4"
            class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            required
          ></textarea>
        </div>
      </div>

      <!-- Accept conditions toggle -->
      <div class="sm:col-span-2 flex items-center gap-x-4">
        <label
          for="AcceptConditions"
          class="relative inline-block h-6 w-10 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
        >
          <input
            type="checkbox"
            id="AcceptConditions"
            v-model="agreed"
            class="peer sr-only"
          />
          <span
            class="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-all peer-checked:start-4"
          ></span>
        </label>
        <span class="text-sm/6 text-gray-600">
          By selecting this, you agree to our
          <a href="/privacy-policy" class="font-semibold text-indigo-600"
            >Privacy&nbsp;Policy</a
          >.
        </span>
      </div>
    </div>
    <!-- Submit button -->
    <div class="mt-10">
      <button
        type="submit"
        class="block w-full rounded-full border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
        :disabled="!agreed"
      >
        Send message
      </button>
    </div>

    <!-- Result message -->
    <p v-if="result" class="mt-4 text-center text-sm text-gray-700">
      {{ result }}
    </p>
  </form>
</template>

<script setup>
import { ref } from "vue";

// Initial form state
const form = ref({
  access_key: "54f63804-b0d1-4454-a66c-bd7331d952c7",
  subject: "Contact form submission from mdanamulhasan.com",
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  countryCode: "",
  phoneNumber: "",
  message: "",
});

// Stores the result of the form submission
const result = ref("");
const status = ref("");

// Resets the form state
const resetForm = () => {
  form.value = {
    access_key: "54f63804-b0d1-4454-a66c-bd7331d952c7",
    subject: "Contact form submission from mdanamulhasan.com",
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    message: "",
  };
};

// Submits the form
const submitForm = async () => {
  // Display a "Please wait..." message while the form is being submitted
  result.value = "Please wait...";
  try {
    // Make a POST request to the Web3Forms API
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    });

    // Update the result with the response message
    result.value = response.message;

    // Update the status with either "success" or "error"
    if (response.status === 200) {
      status.value = "success";
    } else {
      status.value = "error";
    }
  } catch (error) {
    // Log any errors
    console.error(error);
    // Set the status to "error"
    status.value = "error";
    // Set the result to an error message
    result.value = "Something went wrong! Please try again.";
  } finally {
    // Reset the form state
    resetForm();
    // Clear the result and status after 5 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>
