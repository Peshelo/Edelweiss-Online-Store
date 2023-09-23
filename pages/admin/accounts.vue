<template>
    <adminSettings>
      <div class="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
          <div class="pt-4">
            <h1 class="py-2 text-2xl font-semibold">Account settings</h1>
            <!-- <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> -->
          </div>
          <hr class="mt-4 mb-8" />
          <p class="py-2 text-xl font-semibold">Email Address</p>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p class="text-gray-600">Your email address is <strong>john.doe@company.com</strong></p>
            <button class="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button>
          </div>
          <hr class="mt-4 mb-8" />
          <p class="py-2 text-xl font-semibold">Password</p>
          <div class="flex items-center">
            <div class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
              <label for="login-password">
                <span class="text-sm text-gray-500">Current Password</span>
                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="password" id="login-password" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="***********" />
                </div>
              </label>
              <label for="login-password">
                <span class="text-sm text-gray-500">New Password</span>
                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="password" id="login-password" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="***********" />
                </div>
              </label>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          </div>
          <p class="mt-2">Can't remember your current password. <a class="text-sm font-semibold text-blue-600 underline decoration-2" href="#">Recover Account</a></p>
          <button class="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">Save Password</button>
          <hr class="mt-4 mb-8" />
    
        </div>
    </adminSettings>
  </template>
  
  <script>
  import adminSettings from "@/layouts/adminSettings.vue";
    export default {
      components: {
      adminSettings
    },
      
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>