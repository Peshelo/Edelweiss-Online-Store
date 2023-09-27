<template>
    <StoreMainLayout>
        <!-- Slider -->
        <div>Slider</div>
        <!-- Slider Ends -->
    </StoreMainLayout>
</template>

<script setup>
//sd
import StoreMainLayout from "@/layouts/StoreMainLayout.vue";
const {data: products,pending,error,refresh} = await useLazyFetch('http://localhost:8080/products?page=0&pageSize=5')
console.log(products.value)
</script>

