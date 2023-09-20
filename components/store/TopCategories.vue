<template>
    <div class="">
            <h1 class=" mt-20 mb-4">Shop Our Top Categories</h1>
            <p v-if="error">Failed to load categories <button @click="refresh">Refresh</button></p>
            <div v-else class="categories w-fit grid grid-cols-5 max-sm:grid-cols-2 gap-4">
                    <label @click="$router.push(`/store/shop?${category.categoryName}`)" v-for="(category,index) in categories" :key="index" class="flex relative min-h-[200px] shadow-xl rounded-lg max-md:min-h-[150px] p-2">
                        <img src="https://media.gq-magazine.co.uk/photos/627d277c2867047a3ad99ef4/16:9/w_2560%2Cc_limit/Tshirts_HP.jpg" loading="lazy" class="rounded-lg  object-cover shadow-md hover:shadow-2xl duration-300" alt="t-shirts"/>
                        <label class="absolute top-5 left-20 text-2xl font-extrabold text-white">{{ category.categoryName }}</label>
                    </label>
            </div>
        </div>
</template>


<script setup>

const {data: categories,pending,error,refresh} = await useLazyFetch('http://localhost:8080/categories/all')

</script>