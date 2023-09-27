<template>
    <AdminSidebar name="adminSidebar">
        <div class=" w-full rounded-md shadow-md mr-2 h-[100vh] max-md:relative ">
            <navigationBar/>
            <!-- Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 px-2">
                <!-- Card 1 -->
                <div class="bg-white p-6 rounded-xl hover:shadow-md hover:shadow-blue-600 shadow-lg">
                <div class="flex items-center justify-between">
                    <div class="flex">
                    <div class="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-lg font-semibold text-gray-800">Total Users</p>
                        <p class="text-gray-600">5,000</p>
                    </div>
                    </div>
                    <div>
                    <p class="text-2xl font-semibold text-blue-500">75%</p>
                    <p class="text-gray-600">Growth</p>
                    </div>
                </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-white p-6 rounded-xl hover:shadow-md hover:shadow-green-600 shadow-lg">
                <div class="flex items-center justify-between">
                    <div class="flex">
                    <div class="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16"> <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/> </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-lg font-semibold text-gray-800">Revenue</p>
                        <p class="text-gray-600">$50,000</p>
                    </div>
                    </div>
                    <div>
                    <p class="text-2xl font-semibold text-green-500">15%</p>
                    <p class="text-gray-600">Increase</p>
                    </div>
                </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-white p-6 rounded-xl hover:shadow-md hover:shadow-red-600 shadow-lg">
                <div class="flex items-center justify-between">
                    <div class="flex">
                    <div class="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/> </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-lg font-semibold text-gray-800">Expenses</p>
                        <p class="text-gray-600">$20,000</p>
                    </div>
                    </div>
                    <div>
                    <p class="text-2xl font-semibold text-red-500">10%</p>
                    <p class="text-gray-600">Decrease</p>
                    </div>
                </div>
                </div>

                <!-- Card 4 -->
                <div class="bg-white p-6 rounded-xl hover:shadow-md hover:shadow-purple-600 shadow-lg">
                <div class="flex items-center justify-between">
                    <div class="flex">
                    <div class="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="232 56 136 152 96 112 24 184" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="232 120 232 56 168 56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-lg font-semibold text-gray-800">Profit</p>
                        <p class="text-gray-600">$30,000</p>
                    </div>
                    </div>
                    <div>
                    <p class="text-2xl font-semibold text-purple-500">20%</p>
                    <p class="text-gray-600">Increase</p>
                    </div>
                </div>
                </div>
  </div>
        </div>
    </AdminSidebar>
</template>

<script setup>
   import AdminSidebar from '~/layouts/adminSidebar.vue';
//    definePageMeta({
//     middleware: "auth"
//    });
</script>

<style lang="scss" scoped>

</style>