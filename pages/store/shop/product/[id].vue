<template>
    <StoreMainLayout>
        <div class="mx-auto max-w-[1400px] px-5">
            <ul class="flex flex-row gap-x-2 text-sm text-gray-500 my-5">
                <li>Clothing</li> /
                <li>T-shirts</li> /
                <li class="font-semibold">Branded</li>
            </ul>
            <div class="flex flex-col">
                <div class="flex flex-row">
                <div id="productPictures" class="w-1/2 flex flex-col gap-2">
                    <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="w-full rounded-lg" alt="">
                    <div class="w-full grid grid-cols-4 gap-x-2">
                        <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="object-cover h-[120px] opacity-80 hover:opacity-100 duration-150 w-full rounded-lg border-2 border-gray-900" alt="">
                        <img src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" class="object-cover h-[120px] opacity-80 hover:opacity-100 duration-150 w-full rounded-lg" alt="">
                        <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="object-cover h-[120px] opacity-60 hover:opacity-100 duration-150 w-full rounded-lg" alt="">
                        <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="object-cover h-[120px] opacity-80 hover:opacity-100 duration-150 w-full rounded-lg" alt="">
                    </div>
                </div>
                <div class="mx-10 flex flex-col gap-y-5">
                    <div class="flex flex-col gap-y-3">
                    <h1 class="text-5xl font-extrabold">T-shirt Branderd</h1>
                    <p class="text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus veniam veritatis cumque!</p>
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

                <label class="text-5xl my-10 font-bold">$199.00</label>

            <div id="variants" class="">
                <h2 class="my-2">Sizes:</h2>
                <ul class="grid grid-cols-6 gap-x-2">
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">S</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">L</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">XL</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">2XL</li>

                </ul>
                <h2 class="mt-7">Color:</h2>
                <ul class="grid grid-cols-6 gap-x-2">
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
                <button class="p-4 rounded-lg bg-black text-white text-center w-10/12 text-xl font-semibold flex flex-row gap-x-5 justify-center items-center"><Icon name="ic:twotone-shopping-basket" size="30"/>Add to cart</button>
                <button class="bg-gray-200 p-4 rounded-lg"><Icon name="ic:baseline-favorite-border" size="30"/></button>
            </div>
                </div>
            </div>
            <p>Product {{ this.$route.params.id }}</p>
            </div>

            <div class="flex flex-col my-10">
                <div class="flex flex-row">
                <div id="productPictures" class="w-1/2 flex flex-col gap-2">
                    <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="w-full rounded-lg" alt="">
                    <div class="w-full grid grid-cols-4 gap-x-2">
                        <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="object-cover h-[120px] opacity-80 hover:opacity-100 duration-150 w-full rounded-lg border-2 border-gray-900" alt="">
                        <img src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" class="object-cover h-[120px] opacity-80 hover:opacity-100 duration-150 w-full rounded-lg" alt="">
                        <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="object-cover h-[120px] opacity-60 hover:opacity-100 duration-150 w-full rounded-lg" alt="">
                        <img src="https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance+Shirts.jpg?auto=compress,format&rect=0,0,1600,1800&w=800&h=900" class="object-cover h-[120px] opacity-80 hover:opacity-100 duration-150 w-full rounded-lg" alt="">
                    </div>
                </div>
                <div class="mx-10 flex flex-col gap-y-5">
                    <div class="flex flex-col gap-y-3">
                    <h1 class="text-5xl font-extrabold">T-shirt Branderd</h1>
                    <p class="text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus veniam veritatis cumque!</p>
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

                <label class="text-5xl my-10 font-bold">$199.00</label>

            <div id="variants" class="">
                <h2 class="my-2">Sizes:</h2>
                <ul class="grid grid-cols-6 gap-x-2">
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">S</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">L</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">XL</li>
                    <li class="p-2 py-4 font-semibold hover:border-gray-800 active:bg-black active:text-white border border-gray-300 text-center rounded-lg">2XL</li>

                </ul>
                <h2 class="mt-7">Color:</h2>
                <ul class="grid grid-cols-6 gap-x-2">
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
                <button class="p-4 rounded-lg bg-black text-white text-center w-10/12 text-xl font-semibold flex flex-row gap-x-5 justify-center items-center"><Icon name="ic:twotone-shopping-basket" size="30"/>Add to cart</button>
                <button class="bg-gray-200 p-4 rounded-lg"><Icon name="ic:baseline-favorite-border" size="30"/></button>
            </div>
                </div>
            </div>
            <p>Product {{ this.$route.params.id }}</p>
            </div>
        </div>
      
    </StoreMainLayout>
</template>

<script setup>
import StoreMainLayout from '@/layouts/StoreMainLayout.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'

const amount = ref(0);
</script>