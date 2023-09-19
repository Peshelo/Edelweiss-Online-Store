<template>
  <div class="fixed overflow-y-auto overflow-x-hidden bg-gray-100 h-[100vh] w-full max-md:relative">
    <!-- Nav Bar -->
    <div  class="sticka md:hidden shadow-md bg-white w-screen p-4 h-fit">
      <NuxtLink to="/store/shop/" class="w-fit h-fit">
        <img
          src="/edelweiss-full-colour.png"
          width="100"
          height="100"
          class="object-fit"
        />
      </NuxtLink>
    </div>
    <div class="mx-auto bg-white">
    <div
      class="w-full max-md:shadow-2xl max-md:z-50 p-3 bg-white max-md:fixed max-md:bottom-0 max-md:left-0 right-0 border-b border-gray-100 px-10 max-md:p-0 flex flex-row justify-between"
    >
   
      <NuxtLink to="/store/" class="min-w-[140px] max-md:w-[20px] max-md:p-4">
        <img
          src="/edelweiss-full-colour.png"
          width="200"
          height="200"
          class="object-fit"
        />
      </NuxtLink>
      <div
        class="max-md:hidden relative px-2 bg-gray-100 rounded-md flex flex-row items-center"
      >
        <Icon name="ph:magnifying-glass" size="20" class="text-gray-500" />
        <input
          type="text"
          v-model="searchParam"
          class="outline-none text-sm min-w-[280px] bg-transparent p-1"
          placeholder="Search"
          @keyup="searchParam.length > 0 ? showSearch = true: showSearch = false"
        />
        <div
          v-if="showSearch"
          class="absolute z-10 text-gray-600 top-12 flex flex-col gap-y-1 bg-white shadow-lg w-full border border-gray-200 rounded-md"
        >
          <NuxtLink
            to="./"
            class="flex hover:bg-gray-100 p-2 flex-row border-b border-gray-100 justify-between items-center"
          >
            <div class="flex flex-row items-center gap-2">
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg"
                width="50"
                alt=""
                loading="lazy"
                srcset=""
              />
              <label>Laptop</label>
            </div>
            <label class="text-red-400 font-semibold">$20.00</label>
          </NuxtLink>
          <NuxtLink
            to="./"
            class="flex text-sm p-2 flex-row border-b border-gray-100 justify-center items-center"
          >
            <label>Load More ...</label>
          </NuxtLink>
        </div>
      </div>
      <div class="md:hidden max-md:p-4 text-gray-500">
        <Icon name="mdi:menu" size="30" />
      </div>
      <ul
        class="max-md:absolute max-md:bottom-1 bg-white max-md:border-t-2 border-gray-200 max-md:p-2 max-md:w-full flex flex-row gap-4 items-center max-md:justify-center max-md:gap-x-12 max-md:px-[100px]"
      >
        <li
          class="cursor-pointer text-gray-600 hover:text-red-500 duration-150"
        >
          <NuxtLink @click.prevent="showCart =!showCart"
            class="flex cursor-pointer flex-col justify-center items-center"
          >
            <div class="relative">
              <label
                class="absolute -top-1 -right-1 rounded-full text-[10px] bg-yellow-300 px-[4px]"
                >{{ cartItemCount }}</label
              >
              <Icon name="material-symbols:shopping-bag-outline" size="24" />
            </div>
            <label class="text-sm">Cart</label>
          </NuxtLink>
        </li>
        <li
          class="cursor-pointer text-gray-600 hover:text-red-500 duration-150"
        >
          <NuxtLink class="flex flex-col justify-center items-center">
            <div class="relative">
              <Icon name="material-symbols:favorite-outline" size="24" />
            </div>
            <label class="text-sm">Wishlist</label>
          </NuxtLink>
        </li>
        <li
        @mouseleave="showAccount = false"
        @mouseover="showAccount = true"
          class="cursor-pointer relative text-gray-600 duration-150"
        >
          <NuxtLink class="flex hover:text-red-500 flex-col justify-center items-center">
            <div class="relative">
              <div
                class="absolute -top-1 -right-1 w-2 h-2 shrink-0 grow-0 rounded-full bg-red-300 text-green-700"
              ></div>
              <Icon name="iconamoon:profile-circle" size="24" />
            </div>
            <label class="text-sm">Account</label>
          </NuxtLink>
          <div v-if="showAccount"  @mouseleave="showAccount = false" class="absolute border border-gray-150 bg-white text-gray-700 top-25 right-2 z-10 border border-gray-100 shadow-lg rounded-lg w-[250px]">
              <ul class="p-2">
                <li class="p-2 text-sm border-b border-gray-300 hover:font-bold duration-150 cursor-pointer">Track Order</li>
                <li class="p-2 text-sm border-b border-gray-300 hover:font-bold duration-150 cursor-pointer">Returns</li>
                <li class="p-2 text-sm hover:font-bold duration-150 cursor-pointer">Track Order</li>
                <li class="p-2 text-sm border-b border-gray-300 bg-red-500 text-white rounded my-2 text-center hover:font-bold duration-150 cursor-pointer">Register</li>
                <li class="py-1 text-sm text-black my-2 text-center hover:font-bold duration-150 cursor- text-xs">Already have an account? <a class="text-red-500">Login</a></li>

              </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="px-5 py-2 bg-white border-b max-md:hidden"  @mouseleave="showCategories = false">
      <ul class="w-fit text-sm flex flex-row">
        <li class="border-r border-gray-300 px-2 relative">
          <div  @mouseover="showCategories = true"
     >
            View Cartegories <Icon name="ion:md-arrow-dropdown" size="17" />
          </div>
          <div  @mouseleave="showCategories = false" v-if="showCategories" class="bg-white shadow-lg absolute min-w-[100vh] p-4 z-10  rounded top-7 grid grid-cols-2 gap-2">
            <div id="categories">
                <h3 class="mb-2">Categories</h3>
            <ul class="w-full">
                <li @mouseover="currentCategory = category.categoryDescription" v-for="(category,index) in categories" :key="category.id" class="w- flex flex-row justify-between items-center border-b hover:bg-gray-100 duration-150 p-2"><NuxtLink to="./" class="p-2  w-full">{{ category.categoryName }}</NuxtLink><Icon name="material-symbols:arrow-forward-ios" size="17"/></li>
            </ul>
            </div>
            <div id="categories">
                <h3 class="mb-2">Sub Categories</h3>
            <ul class="w-full">
                <li class="w-full flex flex-row justify-between items-center border-b hover:bg-gray-100 duration-150 p-2"><NuxtLink to="./" class="p-2  w-full">{{ currentCategory }}</NuxtLink></li>
            </ul>
            </div>
            
          </div>
        </li>
        <li class="border-gray-300 px-2 font-bold">
          <NuxtLink to="/store/shop/">Shop</NuxtLink>
        </li>
        <li class="border-gray-300 px-2 font-bold">
          <NuxtLink to="./">Deals</NuxtLink>
        </li>
        <li class="border-gray-300 px-2 font-bold">
          <NuxtLink to="./">What's new</NuxtLink>
        </li>
        <li class="border-gray-300 px-2 font-bold">
          <NuxtLink to="./">Delivery</NuxtLink>
        </li>
      </ul>
    </div>
    <!-- Nav Bar ends -->
    <!-- <div class="max-w-[1200px] mx-auto">
      
    </div> -->

    <slot />
    <div @click.self="showCart = !showCart" v-if="showCart" class="fixed backdrop-brightness-50 backdrop-blur-sm top-0 w-screen h-screen">
      <!-- {{ showCart }} -->
    <LazyStoreCart/>
    </div>
  </div>
  <StoreFooter/>
  </div>
</template>

<script setup>
let cartItemCount = ref(0);
const searchParam = ref("");
const showAccount = ref(false)
const showSearch = ref(false);
const showCategories = ref(false)
const currentCategory = ref("")
const showCart = ref(false)
// cartItemCount = JSON.parse(localStorage.getItem('cart')).length


const {data: categories,pending,error} = await useLazyFetch('http://localhost:8080/categories/all')
</script>

<style>
.sticka{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 50;
  /* position: absolute;
  bottom: 0; */  
}
</style>

