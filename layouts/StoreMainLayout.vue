<template>

    <div class="fixed w-full h-[100vh] max-md:relative">
         <!-- Nav Bar -->
    <div class="w-full border-b border-gray-100 px-10 py-5 max-md:p-0 flex flex-row justify-between">
        <NuxtLink to="./" class="min-w-[140px] max-md:w-[20px] max-md:p-4">
            <img src="/edelweiss-full-colour.png" width="200" height="200" class="object-fit">
        </NuxtLink>
        <div class="max-md:hidden relative px-2 bg-gray-100 rounded-md flex flex-row items-center">
            <Icon name="ph:magnifying-glass" size="20" class="text-gray-500"/>
            <input type="text" v-model="searchParam" class="outline-none text-sm min-w-[280px] bg-transparent p-1" placeholder="Search">
            <div v-if="showSearch" class="absolute text-gray-600 top-12 flex flex-col gap-y-1 bg-white shadow-lg w-full border border-gray-200 rounded-md">
                <NuxtLink to="./" class="flex p-2 flex-row border-b border-gray-100 justify-between items-center">
                    <div class="flex flex-row items-center gap-2">
                       <img src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg" width="50" alt="" srcset="">
                    <label>Laptop</label> 
                    </div>
                    <label class="text-red-400 font-semibold">$20.00</label>
                </NuxtLink>
                <NuxtLink to="./" class="flex text-sm p-2 flex-row border-b border-gray-100 justify-center items-center">
                    <label>Load More ...</label>
                </NuxtLink>
            </div>
        </div>
        <div class="md:hidden max-md:p-4 text-gray-500">
            <Icon name="mdi:menu" size="30" />
        </div>
        <ul  class="max-md:absolute max-md:bottom-1 bg-white max-md:border-t-2 border-gray-100 max-md:p-2 max-md:w-full  flex flex-row gap-4 items-center max-md:justify-between max-md:px-[100px]">
            <li class="cursor-pointer text-gray-600 hover:text-red-500 duration-150">
                 <NuxtLink class="flex cursor-pointer flex-col justify-center items-center">
                    <div class="relative">
                        <label class="absolute -top-1 -right-1 rounded-full text-[10px] bg-yellow-300 px-[4px]">{{cartItemCounnt}}</label>
                        <Icon name="material-symbols:shopping-bag-outline" size="24"/>
                    </div>
                    <label class="text-sm">Cart</label>
                </NuxtLink>
            </li>
            <li class="cursor-pointer text-gray-600 hover:text-red-500 duration-150">
                 <NuxtLink class="flex flex-col justify-center items-center">
                    <div class="relative">
                        <Icon name="material-symbols:favorite-outline" size="24"/>
                    </div>
                    <label class="text-sm">Wishlist</label>
                </NuxtLink>
            </li>
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
    <!-- Nav Bar ends -->
    <slot/>
    </div>
   
</template>


<script setup>
const cartItemCounnt = ref(2)
const searchParam = ref('')
const showSearch = ref(false)
</script>

