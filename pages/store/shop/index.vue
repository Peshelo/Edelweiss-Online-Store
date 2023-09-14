<template>
    <StoreMainLayout>
        <div class="bg-gray-100">
        <ShopLayout>
            <div class="products px-5">
        <h3 class="mb-5">Result for - ALL</h3>
        <div id="productsList" class="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3">
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
       </ShopLayout>
        </div>
      
    </StoreMainLayout>
</template>

<script setup>
import StoreMainLayout from '@/layouts/StoreMainLayout.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'
</script>