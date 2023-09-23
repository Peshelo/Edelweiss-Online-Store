<template>
    <adminSettings>
      <div class="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
          <div class="pt-4">
            <h1 class="py-2 text-2xl font-semibold">Notification settings</h1>
            <!-- <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> -->
          </div>
          <hr class="mt-4 mb-8" />
          <Notifications/>
          <hr class="mt-4 mb-8" />
        </div>
    </adminSettings>
  </template>
  
  <script>
  import adminSettings from "@/layouts/adminSettings.vue";
import Notifications from "~/components/notifications.vue";
    export default {
      components: {
    adminSettings,
    Notifications
},
      
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>