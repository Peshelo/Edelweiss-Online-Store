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
              <p class="text-gray-600"><strong>Peshel</strong></p>
            </div>
          </div>
          <div class="mb-4">
            <p class="py-2 text-xl font-semibold">Last name</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600"><strong>Gomo</strong></p>
            </div>
          </div>
          <div class="mb-4">
            <p class="py-2 text-xl font-semibold">Email Address</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600"><strong>peshel@company.com</strong></p>
            </div>
          </div>
          <div class="mb-4">
            <p class="py-2 text-xl font-semibold">Phone number</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600"><strong>(+263) 785 999 058</strong></p>
            </div>
          </div>
          <div class="mb-4">
            <p class="py-2 text-xl font-semibold">Date Of Birth</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600"><strong>08 September 2023</strong></p>
            </div>
          </div>
          <div class="mb-4">
            <p class="py-2 text-xl font-semibold">Gender</p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="text-gray-600"><strong>Male</strong></p>
            </div>
          </div>
        </div>
       
        <hr class="mt-4 mb-8" />
       
      </div>
  </adminSettings>
</template>

<script>
import adminSettings from "@/layouts/adminSettings.vue";
  export default {
    components: {
    adminSettings
  },
    
  }
</script>

<style lang="scss" scoped>

</style>