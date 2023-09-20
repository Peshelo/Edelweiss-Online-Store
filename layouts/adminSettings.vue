<template>
    <AdminSidebar class="bg-gray-50">
      <div class="w-full pt-2">
        <!-- <div class="w-full  border-b bg-white border-gray-100 px-10 py-5 max-md:p-0 flex justify-between">
                  <div class="grid grid-cols-1 gap-2">
                      <h1 class="text-2xl mt-2.5 font-bold text-black">Settings</h1>
                  </div>
                  <ul  class="max-md:absolute max-md:bottom-1  bg-white max-md:border-t-2 border-gray-100 max-md:p-2 max-md:w-full  flex flex-row gap-4 items-center max-md:justify-between max-md:px-[100px]">
                    
                      <li class="cursor-pointer text-gray-600 hover:text-red-500 duration-150">
                          <NuxtLink class="flex flex-col justify-center items-center">
                              <div class="relative">
                                  <div class="absolute -top-1 -right-1 w-2 h-2 shrink-0 grow-0 rounded-full bg-red-300 text-green-700"></div>
                                  <Icon name="iconamoon:profile-circle" size="24"/>
                              </div>
                              <label class="text-sm">Account</label>
                          </NuxtLink>
                      </li>
                  </ul>
        </div> -->
  <div class="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
    <h1 class="border-b py-6 text-4xl font-semibold">Settings</h1>
    <div class="grid grid-cols-8 pt-3 sm:grid-cols-10">
      <div class="relative my-4 w-56 sm:hidden">
        <input class="peer hidden" type="checkbox" name="select-1" id="select-1" />
        <label for="select-1" class="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring">Accounts </label>
        <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <ul class="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
          <li class="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Accounts</li>
          <li class="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Team</li>
          <li class="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Others</li>
        </ul>
      </div>
  
      <div class="col-span-2 hidden sm:block">
        <ul class="grid grid-cols-1">
            <NuxtLink to="/admin/profile" class="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-black transition hover:border-l-blue-700 hover:text-blue-700">Profile</NuxtLink>
            <NuxtLink to="/admin/accounts" class="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-black transition hover:border-l-blue-700 hover:text-blue-700">Accounts</NuxtLink>
            <NuxtLink to="/admin/notifications" class="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-black transition hover:border-l-blue-700 hover:text-blue-700">Notifications</NuxtLink>
        </ul>
      </div>
  
      <slot/>
    </div>
  </div>
  
      </div>
     
    </AdminSidebar>
  </template>
  
  <script>
  import AdminSidebar from "@/layouts/adminSidebar.vue";
    export default {
      components: {
      AdminSidebar
    },
      
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>