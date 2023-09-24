<template>
  <StoreMainLayout>
    <StoreSliderBanner />
    <div class="max-w-[1600px] mx-auto">
      <StoreTopCategories />
      <div id="showcase w-full ">

<div class="grid grid-cols-5 h-[600px] grid-rows-5 my-10 gap-4">
    <div class="bg-[url('https://techbusbee.com/wp-content/uploads/2021/08/sportswear-products-mockup-template.png')] bg-cover bg-no-repeat col-span-2 row-span-5 max-sm:row-span-full bg-white drop-shadow-md hover:drop-shadow-xl duration-150 rounded-2xl p-4">
      <h1 class="text-2xl text-white">Branded Products</h1>
    </div>
    <div class="bg-[url('https://i0.wp.com/maci.co.zw/wp-content/uploads/2020/05/700-x-350.png?resize=627%2C350&ssl=1')] bg-cover bg-no-repeat col-span-3 row-span-3 col-start-3  bg-white drop-shadow-md hover:drop-shadow-xl duration-150 rounded-2xl p-4">
      <h1 class="text-2xl text-white">Work Wear</h1>
    </div>
    <div class="bg-[url('https://cdn.gorilladash.com/images/media/5469845/embroidme-nz-embroidme-banner-workwear-trades-square-62b22b125668d.jpg')] bg-cover bg-no-repeat col-span-2 row-span-2 col-start-3 row-start-4  bg-white drop-shadow-md hover:drop-shadow-xl duration-150 rounded-2xl p-4">
      <h1 class="text-2xl text-white">Corporate Wear</h1>

    </div>
    <div class="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMf97WUoW-KA-0240YkE6rvcWAkC1XglONlQ&usqp=CAU')] bg-cover bg-no-repeat col-start-5 row-start-4  bg-white drop-shadow-md hover:drop-shadow-xl duration-150 rounded-2xl p-4">
      <h1 class="text-2xl text-white">Packaging</h1>
    </div>
    <div class="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGk_eThvyMJV4CpHGuZTxiur9bKn3JIAZZKw&usqp=CAU')] bg-cover bg-no-repeat col-start-5 row-start-5  bg-white drop-shadow-md hover:drop-shadow-xl duration-150 rounded-2xl p-4">
      <h1 class="text-2xl text-yellow-500">Corporate Wear</h1>
    </div>
</div>
    
      </div>
      <div class="products">
        <h1 class="mt-20 max-sm:mt-10 mb-4">Top Products</h1>
  <div class="w-full">
    <div v-if="pending" class="grid grid-cols-4 gap-8 max-md:gap-2 max-md:grid-cols-2 max-lg:grid-cols-4">
          <div class="bg-gray-200 rounded-md drop-shadow-md animate-pulse w-full h-[300px] rounded-md"></div>
          <div class="bg-gray-200 rounded-md drop-shadow-md animate-pulse w-full h-[300px] rounded-md"></div>
          <div class="bg-gray-200 rounded-md drop-shadow-md animate-pulse w-full h-[300px] rounded-md"></div>
          <div class="bg-gray-200 rounded-md drop-shadow-md animate-pulse w-full h-[300px] rounded-md"></div>
        </div>
        <p v-else-if="error" class="text-red-400 flex flex-col justify-center items-center">Error: Failed to fetch data<button @click="refresh" class="bg-gray-300 border border-gray-500 p-2 rounded-2xl text-gray-500 text-sm">Refresh</button></p>
        <p v-else-if="products && products.content && products.content.length < 1" class="text-red-400 flex flex-col justify-center items-center">No items found!<button @click="refresh" class="bg-gray-300 border border-gray-500 p-2 rounded-2xl text-gray-500 text-sm">Refresh</button></p>
        <div id="productsList" class="grid grid-cols-4 gap-8 max-md:gap-2 max-md:grid-cols-2 max-lg:grid-cols-4">
                     <LazyStoreProductCard v-for="(product,index) in products.content" :key="product.productId" :productDetails="product"/>
        </div>
  </div>
      </div>

    <div>
        <h1 class="mt-20 max-sm:mt-10 mb-4">Services To Help You Shop</h1>
        <div class="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            <div class="bg-gray-200 rounded-md drop-shadow-md">
                <div class="px-5 py-10 h-[200px]">
                    <h1 class="text-4xl mb-5">Frequently Asked Questions</h1>
                    <p class="text-lg text-gray-500">Updates on safe Shopping our Stores</p>
                </div>
               
                <img src="https://cf.ltkcdn.net/family/images/orig/258550-2121x1414-Extended_Family_African_American.jpg" class="object-cover h-[300px] max-md:h-[150px] w-full rounded-b-md" loading="lazy" alt="family">
            </div>
            <div class="bg-gray-200 rounded-md drop-shadow-md">
                <div class="px-5 py-10 h-[200px]">
                    <h1 class="text-4xl mb-5">Online Payment Process</h1>
                    <p class="text-lg text-gray-500">Updates on safe Shopping our Stores</p>
                </div>
               
                <img src="https://cdn.corporatefinanceinstitute.com/assets/online-payment-companies-1024x683.jpeg" class="object-cover h-[300px] max-md:h-[150px] w-full rounded-b-md" loading="lazy" alt="family">
            </div>
            <div class="bg-gray-200 rounded-md drop-shadow-md">
                <div class="px-5 py-10 h-[200px]">
                    <h1 class="text-4xl mb-5">Home Delivery Options</h1>
                    <p class="text-lg text-gray-500">Updates on safe Shopping our Stores</p>
                </div>
                <img src="https://cometdelivery.com/assets/img/home-delivery.jpg" class="object-cover h-[300px] max-md:h-[150px] w-full rounded-b-md" loading="lazy" alt="family">
            </div>
        </div>
    </div>
    </div>
  </StoreMainLayout>
</template>

<script setup>
import StoreMainLayout from "@/layouts/StoreMainLayout.vue";
const {data: products,pending,error,refresh} = await useLazyFetch('http://localhost:8080/products?page=0&pageSize=5')
console.log(products.value)
</script>
