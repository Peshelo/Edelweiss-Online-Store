<template> 
    <NuxtLink :to="`./product/${productDetails.productId}`" id="productCard" class=" relative cursor:pointer flex flex-col w-full max-sm:flex-row bg-white text-left gap-y-1 p-2 border border-gray-200 rounded-xl hover:shadow-lg duration-150">
    <img
      :src="productDetails.defaultImageUrl ? productDetails.defaultImageUrl :'https://placehold.co/600x400/D3D3D3/FFFFFF/?text=Edelweiss+Store'"
      alt="product"
      loading="lazy"
      class="object-cover rounded-xl h-[250px] max-md:h-[150px] max-sm:h-full max-sm:w-[120px] hover:shadow-lg"
      srcset=""
    />
    <div id="productDetails" class="max-sm:flex-row max-sm:mx-2 mt-4 px-2  max-sm:mt-0">
        <div class="flex flex-row justify-between items-center">
      <label class="text-md max-md:text-sm font-bold">{{productDetails.productName}}</label>
    </div>
    <p class="text-sm max-md:text-xs">{{productDetails.productDescription}}</p>
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
    <span class="text-gray-400 text-sm">(123)</span>
</label>
<br/>

    <!-- <button
      id="addToCart"
      class="max-sm:p-1 w-full max-sm:text-xs bg-white border border-gray-400 p-3 rounded-md mt-2"
    >
      Add to cart
    </button> -->
    </div>
    <label class="text-md p-2 max-md:text-sm font-bold"
        >USD {{ productDetails.variants[0].price }}<sup>.00</sup></label
      >
    <button @click.prevent :class="isLiked ? 'bg-white' : 'bg-gray-300'" class="bg-gray-300 right-5 top-5 absolute text-white p-2 rounded-full" @click="isLiked = !isLiked"><Icon name="ic:baseline-favorite" :class="isLiked ? 'text-red-500' : 'text-white'" size="25"/></button>
  </NuxtLink>
</template>


<script setup>
const {product} = defineProps(['productDetails'])
const isLiked = ref(false)
const id =ref(1)
</script>