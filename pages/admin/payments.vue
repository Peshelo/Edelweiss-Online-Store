<template>
    <AdminSidebar>
    <div>
          <!-- Nav Bar -->
          <div class="w-full border-b border-gray-100 px-10 py-5 max-md:p-0 flex justify-between">
                <div class="grid grid-cols-1 gap-2">
                    <h1 class="text-xl font-bold text-black">Payments</h1>
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
            </div>
            <!-- End of navbar -->
        <tables/>
    </div>
</AdminSidebar>
  </template>
  
  <script>

import AdminSidebar from '~/layouts/adminSidebar.vue';
  
  export default {
      components: { AdminSidebar }
};
  </script>
  