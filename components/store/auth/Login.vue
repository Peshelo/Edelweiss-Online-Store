<template>
  <!-- Container -->
  <div class="w-[1400px] h-[700px]">
    <div class="flex justify-center px-6 my-12">
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 flex">
        <!-- Col -->
        <div
          class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
          style="
            background-image: url('https://freedesignfile.com/upload/2020/07/Online-Shopping-Banner-Mobile-App-Vector.jpg');
          "
        ></div>
        <!-- Col -->
        <div
          class="w-full flex flex-col gap-y-4 lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
        >
          <h2 class="pt-4 text-2xl text-center">Login</h2>
          <form
            @submit.prevent="Login()"
            class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
          >
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                v-model="email"
                class="w-full px-3 py-2 mb-3 text-lg leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div class="mb-5 md:mb-0">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="password"
              >
                Password
              </label>
              <input
                v-model="password"
                class="w-full px-3 py-2 mb-3 text-lg leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div class="mt-6 text-center">
              <button
                class="w-full text-xl px-4 py-2 font-bold text-white bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <a
                class="inline-block text-sm text-gray-300 align-baseline hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div class="text-center">
              <label
                class="inline-block text-sm align-baseline hover:text-blue-800"
              >
                Do not have an account?
                <span @click="$emit('switch')" class="text-red-500 underline"
                  >Register</span
                >
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let email = ref("");
let password = ref("");
function Login() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  if (!password || !password) {
    alert("Fill in all details");
    return;
  }
  fetch("http://localhost:8080/customers/login", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
</script>

<style lang="scss" scoped></style>
