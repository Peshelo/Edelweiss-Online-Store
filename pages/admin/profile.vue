<template>
  <adminSettings>
    <div class="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
        <div class="pt-4">
          <h1 class="py-2 text-2xl font-semibold">My Profile</h1>
          <!-- <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> -->
        </div>
        <hr class="mt-4 mb-8" />
        <div class="grid grid-cols-2 gap-2">
          <div class="mb-4">
            <p class="py-2 text-xl font-semibold">First Name</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600"><strong>{{profile.firstname}}</strong></p>
            </div>
          </div>
          <div class="mb-4">
            <p class="py-2 text-xl font-semibold">Last name</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600"><strong>{{profile.lastname}}</strong></p>
            </div>
          </div>
          <div class="mb-4">
            <p class="py-2 text-xl font-semibold">Email Address</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600"><strong>{{this.email}}</strong></p>
            </div>
          </div>
          <div class="mb-4">
            <p class="py-2 text-xl font-semibold">Phone number</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600"><strong>(+263) {{profile.mobile}}</strong></p>
            </div>
          </div>
         
        </div>
       
        <hr class="mt-4 mb-8" />
       
      </div>
  </adminSettings>
</template>

<script>
import axios from 'axios'
import adminSettings from "@/layouts/adminSettings.vue";
  export default {
    components: {
    adminSettings
  },
    data(){
      return{
        email: localStorage.email,
        profile: ''
      }
    },
    methods:{
    async fetchUser(){
      
      this.loading = true;
      const URL = `http://localhost:8080/auth/getUserByEmail/${this.email}`
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            // Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.profile = res.data;
        console.log("Fetching  user Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
  },
  mounted(){
    this.fetchUser()
  }
  }
 
</script>

<style lang="scss" scoped>

</style>