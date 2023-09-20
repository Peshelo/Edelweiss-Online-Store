<template>
    <!-- Container -->
    <div class="w-[1400px] h-[700px]">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <!-- Col -->
                <div
                    class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                    style="background-image: url('https://freedesignfile.com/upload/2020/07/Online-Shopping-Banner-Mobile-App-Vector.jpg')"
                ></div>
                <!-- Col -->
                <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h2 class="pt-4 text-2xl text-center">Create an Account!</h2>
                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                        <div class="mb-4 md:flex md:justify-between">
                            <div class="mb-4 md:mr-2 md:mb-0">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                    First Name
                                </label>
                                <input v-model="Firstname"
                                    class="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                    Last Name
                                </label>
                                <input v-model="Lastname"
                                    class="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                Email
                            </label>
                            <input v-model="Email"
                                class="w-full text-lg px-3 py-2 mb-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div class="mb-4 md:flex md:justify-between">
                            <div class="mb-4 md:mr-2 md:mb-0">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                    Password
                                </label>
                                <input v-model="Password"
                                    class="w-full px-3 py-2 mb-3 text-lg leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
                                <p v-if="error" class="text-xs italic text-red-500">{{error}}</p>
                            </div>
                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                    Confirm Password
                                </label>
                                <input
                                    class="w-full px-3 py-2 mb-3 text-lg leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="c_password"
                                    type="password"
                                    placeholder="******************"
                                />
                            </div>
                        </div>
                        <div class="mb-6 text-center">
                            <button @click="Register()"
                                class="w-full px-4 py-2 text-lg font-bold text-white bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Register Account
                            </button>
                        </div>
                        <hr class="mb-6 border-t" />
                        <!-- <div class="text-center">
                            <a
                                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div> -->
                        <div class="text-center">
                            <label
                                class="inline-block text-sm  align-baseline hover:text-blue-800"
                              
                            >
                                Already have an account? <span @click="$emit('switch')" class="text-red-500 underline">Login!</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['register'])
let Firstname =ref('')
let Lastname =ref('')
let Password =ref('')
let Email =ref('')
let confirmPassword =ref('')
let loading = ref(false)
function Register(){
    loading.value = true
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": Email.value,
  "password": Password.value,
  "firstName": Firstname.value,
  "lastName": Lastname.value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
if(!Firstname.value || !Lastname.value || !Email.value || !Password.value){
  alert("Error")
}else{
    fetch("http://localhost:8080/customers/create", requestOptions)
  .then(response => response.json())
  .then(result => alert("Sucessfully: You're now register"))
  .catch(error => console.log('error', error))
  .finally(()=>{
    Firstname.value = null
    Lastname.value = null
    Email.value = null
    Password.value = null
    Firstname.value = null
    confirmPassword.value = null
    loading.value = false
    // emit('register',()=>alert('You`re now registered'))
  })
}

}
</script>

<style lang="scss" scoped>

</style>