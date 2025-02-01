<template>
    <!--
      Divider with gradient effect
      - Uses a gradient effect to create a divider
      - The gradient goes from transparent to gray to transparent
      - The opacity is set to 75% to make the divider more subtle
      - The dark mode variant uses a darker gray color
    -->
    <span class="relative flex justify-center">
      <div
        class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 dark:via-gray-700"
      ></div>
    </span>
  </template>