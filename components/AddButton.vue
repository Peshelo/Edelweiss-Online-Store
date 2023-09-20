<template>
    <button @click="addCard" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Add Card
    </button>
  </template>
  
  <script>
  export default {
    name: "AddButton",
    methods: {
      addCard() {
        this.$emit("add-card");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for your add button component here */
  </style>
  