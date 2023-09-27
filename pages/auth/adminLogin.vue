<template>
    <div class="w-full max-w-md my-24 mx-auto">
      <form @submit.prevent="handleSubmit()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import nuxtStorage from 'nuxt-storage';
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
        async handleSubmit(){
            this.loading=true;
            this.errors = {};
            // if(!this.email){
            //     this.errors.email = "Email is required";
            // }
            // if(!this.password){
            //     this.errors.password = "Enter password";
            // }
            if (Object.keys(this.errors).length === 0) {
       // Your code for handling the login form submission
       try{
        await axios.post('http://localhost:8080/auth/login',{
        email:this.email,
        password :this.password
        },{
            headers: {'Content-Type': 'application/json',
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          if(response.data == "User Not Found"){
            this.errors.ERR = "Wrong Login details...";
          }else{
              this.token = data.token
              this.role = data.role
              nuxtStorage.localStorage.setData('token', this.token);
              nuxtStorage.localStorage.setData('role', this.role);
              // localStorage.token = this.token;
              // localStorage.role = this.role;
              localStorage.email = this.email;
            if(this.role === "[ADMIN]"){
                alert("Welcome To Edelweiss Online Store")
                this.$router.push('/admin/')
            }
        
          }
        }).catch(error => {
        console.log(error)
        this.errored = true
        this.errors.ERR=error
        
      }).finally(() => this.loading = false);

}catch(err){
  this.errors.network = "Error: " + err.message;
  this.errors.ERR = err;
console.log("Error:",err.message)

}
      }
        }
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  