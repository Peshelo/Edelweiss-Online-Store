<template>
  <StoreMainLayout>
    <StoreSliderBanner />
    <div class="max-w-[1600px] mx-auto">
      <StoreTopCategories />
      <div class="products">
        <h1 class="mt-20 max-sm:mt-10 mb-4">Top Products</h1>
        <div id="productsList" class="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3 p-2">
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
        </div>
      </div>
      <div class="products">
        <h1 class="mt-20 max-sm:mt-10 mb-4">Weekly trends</h1>
        <div id="productsList" class="flex flex-row max-w-full overflow-x-auto gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3 p-2">
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
                <LazyStoreProductCard/>
        </div>
      </div>

    <div>
        <h1 class="mt-20 max-sm:mt-10 mb-4">Services To Help You Shop</h1>
        <div class="grid grid-cols-3 gap-6">
            <div class="bg-gray-200">
                <div class="px-5 py-10 h-[200px]">
                    <h2 class="text-4xl mb-5">Frequently Asked Questions</h2>
                    <p class="text-lg text-gray-500">Updates on safe Shopping our Stores</p>
                </div>
               
                <img src="https://cf.ltkcdn.net/family/images/orig/258550-2121x1414-Extended_Family_African_American.jpg" class="object-cover h-[300px] w-full" loading="lazy" alt="family">
            </div>
            <div class="bg-gray-200">
                <div class="px-5 py-10 h-[200px]">
                    <h2 class="text-4xl mb-5">Online Payment Process</h2>
                    <p class="text-lg text-gray-500">Updates on safe Shopping our Stores</p>
                </div>
               
                <img src="https://cdn.corporatefinanceinstitute.com/assets/online-payment-companies-1024x683.jpeg" class="object-cover h-[300px] w-full" loading="lazy" alt="family">
            </div>
            <div class="bg-gray-200">
                <div class="px-5 py-10 h-[200px]">
                    <h2 class="text-4xl mb-5">Home Delivery Options</h2>
                    <p class="text-lg text-gray-500">Updates on safe Shopping our Stores</p>
                </div>
               
                <img src="https://cometdelivery.com/assets/img/home-delivery.jpg" class="object-cover h-[300px] w-full" loading="lazy" alt="family">
            </div>
        </div>
    </div>
    </div>

  </StoreMainLayout>
</template>

<script setup>
import StoreMainLayout from "@/layouts/StoreMainLayout.vue";
</script>
