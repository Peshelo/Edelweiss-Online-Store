<template>
<NuxtLayout name="default">
   <NuxtLink to="./store/">Store</NuxtLink>
   <NuxtLink to="/auth/adminLogin">Admin Login</NuxtLink>
   <pre>
      {{ config }}
   </pre>

</NuxtLayout>
</template>

<script setup>
    const config = useRuntimeConfig();
         
</script>
