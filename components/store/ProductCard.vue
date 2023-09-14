<template> 
            <NuxtLink :to="`./product/${id}`" id="productCard" class=" relative cursor:pointer flex flex-col w-full max-sm:flex-row bg-white text-left gap-y-1 p-2 border border-gray-200 rounded-xl hover:shadow-lg duration-150">
            <img
              src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900"
              alt="product"
              loading="lazy"
              class="object-cover rounded-xl h-[250px] max-md:h-[150px] max-sm:h-full max-sm:w-[120px] hover:shadow-lg"
              srcset=""
            />
            <div id="productDetails" class="max-sm:flex-row max-sm:mx-2 mt-4 px-2  max-sm:mt-0">
                <div class="flex flex-row justify-between items-center">
              <label class="text-lg max-md:text-sm font-bold">5G Headphones, Apple</label>
            </div>
            <p class="max-md:text-xs">Organic Corron, fairtrade certified</p>
            <label
              ><Icon
                name="material-symbols:star-rounded"
                class="text-green-500"
                size="17"
            />
            <Icon
                name="material-symbols:star-rounded"
                class="text-green-500"
                size="17"
            />
            <Icon
                name="material-symbols:star-rounded"
                class="text-green-500"
                size="17"
            />
            <Icon
                name="material-symbols:star-rounded"
                class="text-green-500"
                size="17"
            />
            <span class="text-gray-400 max-sm:text-sm">(123)</span>
        </label>
        <br/>
        
            <!-- <button
              id="addToCart"
              class="max-sm:p-1 w-full max-sm:text-xs bg-white border border-gray-400 p-3 rounded-md mt-2"
            >
              Add to cart
            </button> -->
            </div>
            <label class="text-lg p-2 max-md:text-sm font-bold"
                >USD 89<sup>.00</sup></label
              >

            <button :class="isLiked ? 'bg-white' : 'bg-gray-300'" class="bg-gray-300 right-5 top-5 absolute text-white p-2 rounded-full" @click="isLiked = !isLiked"><Icon name="ic:baseline-favorite" :class="isLiked ? 'text-red-500' : 'text-white'" size="25"/></button>
          </NuxtLink>
</template>


<script setup>
const isLiked = ref(false)
const id =ref(1)
</script>