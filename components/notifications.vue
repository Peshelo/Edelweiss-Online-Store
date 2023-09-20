<!-- components/ToggleButton.vue -->

<template>
    <div class="flex justify-between">
        <div class="grid grid-cols-1">
            <h1 class="text-lg font-semibold text-black">Enable notifications</h1>
            <p class="text-sm text-gray-400 mt-2">Customize your notifications by enabling and disabling the switch.</p>
        </div>
        <div @click="toggle" :class="{ 'bg-blue-500': isActive, 'bg-gray-300': !isActive }" class="w-16 h-8 rounded-full p-1 cursor-pointer">
      <div :class="{ 'translate-x-full': isActive }" class="bg-white w-6 h-6 rounded-full transform transition-transform duration-300 ease-in-out"></div>
    </div>
    </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggle() {
        this.isActive = !this.isActive;
      },
    },
  };
  </script>
  