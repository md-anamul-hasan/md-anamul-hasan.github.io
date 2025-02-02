<template>
  <button
    type="button"
    class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-200 transition"
    @click="onClick"
  >
    <span class="sr-only">Close menu</span>
    <Icon name="heroicons:x-mark" class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script setup>
defineProps({
  onClick: Function
})
</script>