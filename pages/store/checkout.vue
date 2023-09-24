<template>
  <div>
    <div v-if="waiting" class="fixed z-50 w-screen h-screen top-0 left-0 flex flex-col  items-center backdrop-blur-sm">
      <div class="p-4 animate-bounce my-10 bg-white border-4 rounded-md border-blue-600">Proceeding to payment...</div>
    </div>
    <div
      class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"
    >
    <NuxtLink to="/store/shop/" class="w-fit h-fit">
        <img
          src="/edelweiss-full-colour.png"
          width="100"
          height="100"
          class="object-fit"
        />
      </NuxtLink>      
      <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <div class="relative">
          <ul
            class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4"
          >
            <li   class="flex items-center space-x-3 text-left sm:space-x-4">
              <a
                class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
            </svg>
          </a>
              <span class="font-semibold text-gray-900">Shop</span>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a
                class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                :class="orderDone ? 'bg-emerald-200 text-xs font-semibold text-emerald-700' : ''"
                href="#"
                >2</a
              >
              <span class="font-semibold text-gray-900">Order Details</span>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a
                class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                href="#"
                >3</a
              >
              <span class="font-semibold text-gray-500">Payment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="max-w-[1600px] mx-auto grid my-10 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div class="px-4 pt-8">
        <label @click="$router.back()" class="text-gray-500 font-semibold mb-4 hover:text-black duration-150 flex flex-row gap-x-2 w-fit items-center"><Icon name="ic:baseline-arrow-back" size="20"/>Go back</label>
        <p class="text-xl font-medium">Order Summary</p>
        <p class="text-gray-400">
          Check your items. And select a suitable shipping method.
        </p>
        <div
          class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
        >
        <p v-if="!cart || cart.length < 1">Cart is empty</p>

          <div v-else v-for="(item,index) in cart" :key="item.id" class="flex flex-col rounded-lg bg-white sm:flex-row">
            <img
              class="m-2 h-24 w-28 rounded-md border object-cover object-center"
              src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold"
                >{{item.productVariant.variantName}}</span
              >
              <span class="float-right text-gray-400">Quantity : X {{ item.quantity }}</span>
              <p class="text-lg font-bold">${{ item.totalPrice }}</p>
              <button @click="removeItem(item.id)" class="text-red-500 text-sm underline w-fit">Remove</button>
            </div>
          </div>
        </div>

        <p class="mt-8 text-lg font-medium">Shipping Methods</p>
        <form class="mt-5 grid gap-6">
          <div class="relative">
            <input
              class="peer hidden"
              id="radio_1"
              type="radio"
              name="radio"
              @change="shipping = false"
              checked
            />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
            ></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_1"
            >
              <img
                class="w-14 object-contain"
                src="/images/naorrAeygcJzX0SyNI4Y0.png"
                alt=""
              />
              <div class="ml-5">
                <span class="mt-2 font-semibold">Physical Collection Delivery</span>
                <p class="text-slate-500 text-sm leading-6">
                  Delivery: 2-4 Days
                </p>
              </div>
            </label>
          </div>
          <div class="relative">
            <input
              class="peer hidden"
              @change="shipping = true"
              id="radio_2"
              type="radio"
              name="radio"
              checked
            />
            <span
              class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
            ></span>
            <label
              class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_2"
            >
              <img
                class="w-14 object-contain"
                src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                alt=""
              />
              <div class="ml-5">
                <span class="mt-2 font-semibold">Fedex Delivery</span>
                <p class="text-slate-500 text-sm leading-6">
                  Delivery: 2-4 Days
                </p>
              </div>
            </label>
          </div>
        </form>
      </div>
      <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p class="text-xl font-medium">Payment Details</p>
        <p class="text-gray-400">
          Complete your order by providing your payment details.
        </p>
        <div class="">
          <label for="email" class="mt-4 mb-2 block text-sm font-medium"
            >Email</label
          >
          <div class="relative">
            <input v-model="email"
              type="text"
              id="email"
              name="email"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
            <div
              class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>
          <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium"
            >Card Holder</label
          >
<div class="flex flex-row w-full gap-2">

          <div class="relative w-full">
            <input v-model="firstName"
              type="text"
              id="card-holder"
              name="card-holder"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Firstname"
            />
            <div
              class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>
          <div class="relative w-full">
            <input v-model="lastName"
              type="text"
              id="card-holder"
              name="card-holder"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Lastname"
            />
            <div
              class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>
</div>

          <label 
            for="billing-address"
            class="mt-4 mb-2 block text-sm font-medium"
            >Billing Address</label
          >
          <div class="flex flex-col gap-x-2 sm:flex-row">
            <div class="relative flex-shrink-0 sm:w-7/12">
              <input v-model="streetAddress"
                type="text"
                id="billing-address"
                name="billing-address"
                class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Street Address"
              />
              <div
                class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"
              >
                <img
                  class="h-4 w-4 object-contain"
                  src="https://flagpack.xyz/_nuxt/4fe428086f5d241ccee440f140f83eed.svg"
                  alt=""
                />
              </div>
            </div>
            <select
            v-model="city"
              type="text"
              name="billing-state"
              class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            >
              <option selected disabled value="--State--">State</option>
              <option>Harare</option>
              <option>Mashonaland Central</option>
            <option>Manicaland</option>
            <option>Bulawayo</option>
            </select>
            <input v-model="postalCode"
              type="text"
              name="billing-zip"
              class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="ZIP"
            />
          </div>

          <!-- Total -->
          <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Subtotal</p>
              <p class="font-semibold text-gray-900">{{ totalPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})  }}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Shipping</p>
              <p class="font-semibold text-gray-900">${{ shipping ? '50.00' : '0.00' }}</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900">{{ shipping ? (totalPrice + 50).toLocaleString("en-US", {style:"currency", currency:"USD"}) : totalPrice.toLocaleString("en-US", {style:"currency", currency:"USD"}) }}</p>
          </div>
        </div>
        <button @click="checkout()" :disabled="!cart || cart.length < 1" :class="!cart || cart.length < 1 || loading  ? 'bg-gray-700' : 'bg-black'"
          class="mt-4 mb-8 w-full rounded-md bg-gray-900 py-3 font-medium text-lg text-white" 
        >
          {{loading ?'Processing Order':'Place Order'}}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
let email = ref('')
let lastName = ref('')
let firstName = ref('')
let streetAddress = ref('')
let city = ref('')
let country = ref('Zimbabwe')
let additionalNotes = ref('')
let postalCode =ref('')
let cartId = ref('')
let cart = ref([]);
let loading = ref(false)
let shipping =ref(false)
let orderDone = ref(false)
let waiting = ref(false);
const totalPrice = ref(0)


async function fetchCart(){
  cartId.value = localStorage.getItem('cartId')
    loading.value = true
    await fetch(`http://localhost:8080/cart/${cartId.value}`)
    .then(response=>response.json())
    .then(data=>{
        cart.value = data.lineItems
        if(cart && cart.value && cart.value.length>0){
          calculateSummary();
        }
    })
    .finally(loading.value = false);
}
function calculateSummary(){
cart.value.forEach(item=>{
    totalPrice.value += item.totalPrice}
)
}
fetchCart();

async function checkout(){
  loading.value = true
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  // customer: {
  //   customerId: "string"
  // },
  shippingAddress: {
    streetAddress: streetAddress.value,
    city: city.value,
    state: city.value,
    postalCode: postalCode.value,
    country: country.value
  },
  billingAddress: {
    streetAddress: streetAddress.value,
    city: city.value,
    state: city.value,
    postalCode: postalCode.value,
    country: country.value
  },
  paymentMethod: "CREDIT_CARD",
  paymentStatus: "PAYED",
  taxInfo: {
    taxAmount: 0,
    taxDescription: "string",
    taxPercentage: 0
  },
  additionalNotes: "string",
  cart: {
    id: cartId.value
  },
  orderStatus: "PENDING"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

await fetch("http://localhost:8080/orders/create", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status && result.status > 300){
      alert("Error: Cannot Creat Order")
    }else{
      console.log(result)
      orderDone.value = true
      localStorage.removeItem('cartId')
      alert("New Order Created! Proceeding to Payment...")
      handlePayment(result.id);
    }
     
  })
  .catch(error => console.log('error', error))
  .finally(()=>{
    email.value =null
    lastName.value = null
    firstName.value = null
    streetAddress.value =null
    postalCode.value =null
    city.value=null
    loading.value =false
  })
}


//Payments 
async function handlePayment(orderId){
  waiting.value = true;
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "price": totalPrice.value,
  "currency": "USD",
  "method": "PayPal",
  "intent": "SALE",
  "orderId": orderId
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

await fetch("http://localhost:8080/paypal/initiate/payment", requestOptions)
  .then(response => response.text())
  .then(result => navigateTo(result, {
  external: true
}))
  .catch(error => console.log('error', error))
  .finally(()=>waiting.value=false);
}
// cart.value = JSON.parse(localStorage.getItem('cart')) || [];
// console.log(cart.value)

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

<style lang="scss" scoped></style>
