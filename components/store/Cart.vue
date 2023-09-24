<template>
    <div  class="fixed w-[450px] max-md:pt-28 max-md:w-screen py-10 top-0 right-0 h-screen z-50 bg-white p-5 duration-500">
        <h1>Cart</h1>
        <p v-if="!cart || cart.length < 1">Cart is empty</p>
        <ul v-else class="my-5 p-1 h-4/5 overflow-x-hidden overflow-y-auto">
            <li class="flex border-b py-2 flex-row gap-x-2 justify-between items-center" v-for="(item,index) in cart" :key="item.id">
                <!-- <img :src="product.defaultImageUrl" class="w-[50px] h-[50px] object-cover" alt="product"> -->
                <label>{{ item.productVariant.variantName }}</label>
                <label class="w-fit">X {{ item.quantity }}</label>
                <label><b>${{ item.totalPrice }}</b></label>
                <button @click="removeItem(item.id)" class="text-red-400 hover:text-red-500 duration-150"><Icon name="material-symbols:delete-outline" size="17"/></button>
            </li>
        </ul>
        <div class="absolute max-md:bottom-16  flex flex-col gap-y-2 bg-white w-[400px] max-md:w-fit justify-center border-t py-2 bottom-2">
            <label class="w-full flex flex-row justify-between items-center"><label>Total Items:</label> <label>{{ cart.length }}</label></label>
            <label class="w-full flex flex-row justify-between items-center"><label>Total Amount</label> <label>{{ totalPrice.toLocaleString("en-US", {style:"currency", currency:"USD"}) }}</label></label>

            <button @click="$router.push('/store/checkout/')" class="p-4 rounded-lg bg-black text-white text-center w-full text-xl font-semibold flex flex-row gap-x-2 justify-center items-center"><Icon name="ic:twotone-shopping-basket" size="30"/>Proceed To Checkout</button>
        </div>
    </div>
</template>

<script setup>

let cart = ref([]);
let totalPrice = ref(0);

let loading = ref(false)
async function fetchCart(){
    loading.value = true
    const cartId = localStorage.getItem('cartId')
    await fetch(`http://localhost:8080/cart/${cartId}`)
    .then(response=>response.json())
    .then(data=>{
        cart.value = data.lineItems
        console.log(cart.value)
        calculateSummary();
    })
    .finally(loading.value = false);
}


function calculateSummary(){
cart.value.forEach(item=>{
    totalPrice.value += item.totalPrice
console.log(totalPrice.value)}
)
}
fetchCart();





// cart.value = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart.value)


// Using localStorage
// function removeItem(id){
//     cart.value.forEach((product,index) => {
//         if(id == product.productId){
//             cart.value.splice(index,1)
//         }
//     });
//     localStorage.setItem('cart',JSON.stringify(cart.value))
// }

</script>

<style lang="scss" scoped>

</style>