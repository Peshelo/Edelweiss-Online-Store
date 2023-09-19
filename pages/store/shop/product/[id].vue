<template>
    <StoreMainLayout>
        <div class="mx-auto max-w-[1400px] px-5">
            <ul v-if="!pending" class="flex flex-row gap-x-2 text-sm text-gray-500 my-5">
                <li @click="goBack()">{{ $router.options.history.state.back }}<b>{{ productDetails.category.categoryName ? productDetails.category.categoryName : "Category" }}</b></li>
            </ul>
            <div class="w-full my-4 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 max-md:gap-y-2 gap-x-4" v-if="pending">
                <div class=" animate-pulse px-4 rounded-lg h-[500px]">
                    <div class=" bg-gray-200 w-full h-[400px]"></div>
                    <div class="grid grid-cols-4 mt-2 h-[100px] gap-x-2">
                        <div class=" bg-gray-200 w-full h-full"></div>
                        <div class=" bg-gray-200 w-full h-full"></div>
                        <div class=" bg-gray-200 w-full h-full"></div>
                        <div class=" bg-gray-200 w-full h-full"></div>
                    </div>
                </div>
                <div class="px-4 flex flex-col gap-y-5 rounded-lg h-[500px]">
                    <div class="bg-gray-200 animate-pulse px-4 rounded-lg h-[70px] w-2/3">
                </div>
                <div class="bg-gray-200 animate-pulse px-4 rounded-lg h-[30px]">
                </div>
                <div class="bg-gray-200 animate-pulse px-4 rounded-lg h-[30px] w-1/2 mb-10">
                </div>
                <div class="bg-gray-200 animate-pulse px-4 rounded-lg h-[100px] w-1/2">
                </div>
                </div>
            </div>
            <div v-else class="flex flex-col">
                <div class="flex flex-row max-md:flex-col">
                <div id="productPictures" class="w-1/2 max-md:w-full max-md:mb-5 flex flex-col gap-2">
                    <img :src="productDetails.defaultImageUrl" loading="lazy" class="w-full h-[500px] object-cover rounded-lg" alt="">
                    <div class="w-full grid grid-cols-4 gap-x-2">
                        <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="object-cover h-[120px] opacity-80 hover:opacity-100 duration-150 w-full rounded-lg border-2 border-gray-900" alt="">
                        <img src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" class="object-cover h-[120px] opacity-80 hover:opacity-100 duration-150 w-full rounded-lg" alt="">
                        <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="object-cover h-[120px] opacity-60 hover:opacity-100 duration-150 w-full rounded-lg" alt="">
                        <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="object-cover h-[120px] opacity-80 hover:opacity-100 duration-150 w-full rounded-lg" alt="">
                    </div>
                </div>
                <div class="mx-10 max-md:mx-0 flex flex-col gap-y-5">
                    <div class="flex flex-col gap-y-1">
                    <h1 class="text-4xl max-md:text-md font-extrabold">{{ productDetails.productName }}</h1>
                    <p class="text-gray-500 text-lg max-md:text-sm">{{ productDetails.productDescription }}</p>
                    <label
              ><Icon
                name="material-symbols:star-rounded"
                class="text-green-500"
                size="23"
            />
            <Icon
                name="material-symbols:star-rounded"
                class="text-green-500"
                size="23"
            />
            <Icon
                name="material-symbols:star-rounded"
                class="text-green-500"
                size="23"
            />
            <Icon
                name="material-symbols:star-rounded"
                class="text-green-500"
                size="23"
            />
            <span class="text-gray-500 max-sm:text-sm">(123)</span>
        </label>
                </div>

                <label class="text-4xl max-md:text-2xl max-md:my-2 my-2 font-bold">{{ productDetails.variants[0].price.toLocaleString("en-US", {style:"currency", currency:"USD"}) }}</label>

            <div id="variants" class="">
                <h2 class="my-2">Sizes:</h2>
                <ul class="grid grid-cols-4 gap-x-2">
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">S</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">L</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">XL</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">2XL</li>

                </ul>
                <h2 class="mt-7">Color:</h2>
                <ul class="grid grid-cols-4 gap-x-2">
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white bg-red-500 border border-red-300 text-center rounded-lg">Red</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white bg-black text-white border border-black text-center rounded-lg">Black</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border bg-green-500 border-green-300 text-center rounded-lg">Green</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border bg-yellow-500 border-yellow-300 text-center rounded-lg">#FFFF00</li>
                </ul>
            </div>
            <div id="amount" class="w-full flex flex-row gap-x-5 my-2 items-center">
                <div class="bg-gray-200 font-bold w-fit rounded-[400px]">
                    <button class="p-5" @click="amount <= 0 ? amount : amount--">-</button>
                    <input type="text" class="bg-transparent w-[60px] text-center text-lg" :value="`${amount}`">
                    <button class="p-5" @click="amount++">+</button>
                </div>
                <label class="text-gray-600">Only <span class="text-yellow-500 font-semibold">12 items</span> left <br>Don't miss out!</label>
            </div>
            <div id="actions" class="my-5 flex flex-row items-center gap-x-4">
                <button @click="addToCart" class="p-4 rounded-lg bg-black text-white text-center w-10/12 text-xl font-semibold flex flex-row gap-x-5 justify-center items-center"><Icon name="ic:twotone-shopping-basket" size="30"/>Add to cart</button>
                <button class="bg-gray-200 p-4 rounded-lg"><Icon name="ic:baseline-favorite-border" size="30"/></button>
            </div>
                </div>
            </div>
            </div>
        </div>
        <!-- <p>{{ productDetails}}</p> -->
    </StoreMainLayout>
</template>

<script setup>
import StoreMainLayout from '@/layouts/StoreMainLayout.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'

const {id} = useRoute().params
const url = `http://localhost:8080/products/${id}`
const {data: productDetails,pending,error,refresh} = await useLazyFetch(url,{key:id})

function goBack() {
    this.$route.back()
}

function addToCart(){
    let itemExist = false;
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.forEach(product => {
        if(productDetails.value.productId === product.productId){
            alert('Item is already in cart')
            itemExist = true
        }
    });
    if(!itemExist){
        cart.push(productDetails.value)
            const data = JSON.stringify(cart)
            localStorage.setItem('cart',data)
            alert("New item added to cart")
    }
 
}
const amount = ref(0);
</script>