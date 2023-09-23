<template>
    <div class="">
            <h1 class=" mt-20 mb-4">Shop Our Top Categories</h1>
            <p v-if="error">Failed to load categories <button @click="refresh">Refresh</button></p>
            <div v-else class="w-full gap-x-8 grid grid-cols-5 max-sm:grid-cols-2 gap-4">
                    <div @click="$router.push(`/store/shop?${category.categoryName}`)" v-for="(category,index) in categories" :key="index" class="bg-white items-center flex flex-col min-h-[200px] drop-shadow-md hover:drop-shadow-2xl duration-300 rounded-lg max-md:min-h-[150px] p-4">
                        <img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/6qnP8LnQK1eaaXF3gD470P/8cd499f149f310b394622321231152be/iPhone_13.jpg" loading="lazy" class="rounded-lg h-[150px] w-auto  object-cover  duration-300" alt="t-shirts"/>
                        <label class="text-lg text-gray-600 my-2">{{ category.categoryName }}</label>
                    </div>
                    
            </div>
        </div>
</template>


<script setup>

const {data: categories,pending,error,refresh} = await useLazyFetch('http://localhost:8080/categories/all')

</script>