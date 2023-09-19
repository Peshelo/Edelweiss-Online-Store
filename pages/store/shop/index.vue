<template>
    <StoreMainLayout>
        <div class="bg-gray-100">
        <ShopLayout>
            <div class="products max-md:px-2 px-5">
        <h3 class="mb-5 max-md:text-sm max-md:mb-2">Result for - ALL</h3>
        <div v-if="pending" class="w-full grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3">
            <p>Loading...</p>
        </div>
        <p v-else-if="error" class="text-red-400 flex flex-col justify-center items-center">Error: Failed to fetch data<button @click="refresh" class="bg-gray-300 border border-gray-500 p-2 rounded-2xl text-gray-500 text-sm">Refresh</button></p>
        <p v-else-if="products.content < 1" class="text-red-400 flex flex-col justify-center items-center">No items found!<button @click="refresh" class="bg-gray-300 border border-gray-500 p-2 rounded-2xl text-gray-500 text-sm">Refresh</button></p>

        <div v-else id="productsList" class="grid grid-cols-4 gap-8 max-md:gap-2 max-md:grid-cols-2 max-lg:grid-cols-4">
                    <LazyStoreProductCard v-for="(product,index) in products.content" :key="product.productId" :productDetails="product"/>
        </div>
      </div>
       </ShopLayout>
        </div>
      
    </StoreMainLayout>
</template>

<script setup>
import StoreMainLayout from '@/layouts/StoreMainLayout.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'


   const {data: products,pending,error,refresh} = await useLazyFetch('http://localhost:8080/products?page=0&pageSize=20')
   console.log(products.value)
   
    
</script>