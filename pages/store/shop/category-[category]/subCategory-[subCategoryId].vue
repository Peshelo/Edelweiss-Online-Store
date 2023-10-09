<template>
    <StoreMainLayout>
        <div class="bg-gray-100">
        <ShopLayout>
            <div class="products max-md:px-2 px-5">
        <h3 class="mb-5 max-md:text-sm max-md:mb-2">Result for - {{ productName || currentCategory || "Search"}}</h3>
        <div class="my-3 flex flex-row gap-x-2">
            <input class="bg-gray-200 p-2 rounded-md" @keyup="searchByName(productName)" type="search" placeholder="Search..." v-model="productName">
            <select @change="searchByCategory(currentCategory)" v-model="currentCategory" class="p-2 bg-gray-200 border rounded-md">
            <option selected disabled>Select Category</option>
            <option value="All">All</option>
            <option v-for="category in categories" :key="category.id" :value="category.categoryName">{{ category.categoryName }}</option>
        </select>
    </div>
        <div v-if="pending" class="w-full grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3">
            <p>Loading...</p>
        </div>
        <p v-else-if="error" class="text-red-400 flex flex-col justify-center items-center">Error: Failed to fetch data<button @click="refresh" class="bg-gray-300 border border-gray-500 p-2 rounded-2xl text-gray-500 text-sm">Refresh</button></p>
        <p v-else-if="products.length < 1" class="text-red-400 flex flex-col justify-center items-center">No items found!</p>
        
        <div v-else id="productsList" class="grid grid-cols-4 gap-8 max-md:gap-2 max-md:grid-cols-2 max-lg:grid-cols-4">
                    <LazyStoreProductCard v-for="(product,index) in products" :key="product.productId" :productDetails="product"/>
        </div>
      </div>
       </ShopLayout>
        </div>
      
    </StoreMainLayout>
</template>

<script setup>
    const config = useRuntimeConfig();
    import StoreMainLayout from '@/layouts/StoreMainLayout.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'


    let currentCategory = ref('')
    const route = useRoute();
    const paramCategory = route.params.category;
    const paramSubCategory = route.params.subCategoryId;
    let url = ref('')
    // console.log(route.params.category)
    url.value = config.public.baseURL+'/products?page=0&pageSize=20'

        if(paramCategory == "All"){
            if(paramSubCategory == "All"){
                url.value = config.public.baseURL+'/products?page=0&pageSize=20'
            }else{
                url.value = config.public.baseURL+`/products/subCategory/${paramSubCategory}`
            }
        }else{
            url.value = config.public.baseURL+`/products/category/${paramCategory}`
        }
        const {data: products,pending,error,refresh} = await useLazyFetch(url.value)
        console.log(products.value)
        
    // onBeforeMount(()=>{
    //     getProducts();
    // })
    
  

   const {data: categories,pending: pendingCategories} = await useLazyFetch(config.public.baseURL+'/categories/all')
let productName = ref('')
   let filtered = ref('')
   if(paramCategory){
    filtered.value = products.content;
   }else{
    filtered.value = products.value.content;
   }
   console.log(filtered.value)
//    console.log(products.value)


   function searchByCategory(name){
    if(paramCategory){
    filtered.value = products;
    }else{
        filtered.value = products.value.content;
    }
    if(name != "All"){
        filtered.value = filtered.value.filter(item=>name == item.subCategory.category.categoryName)
    console.log(filtered.value)
    }
    return filtered.value;
   }
   function searchByName(name){
    currentCategory ="All"
    if(name != ""){
        filtered.value = filtered.value.filter(item=>item.productName.includes(name))
        // console.log(filtered.value)
    }else{
        filtered.value = products.value.content
    }
    return filtered.value;
   }

   
    
</script>