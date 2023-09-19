<template>
    <div>
        <pre>{{route.params}}</pre>
    </div>
</template>

<script setup>
import { useRoute } from 'nuxt/app';

    const route =useRoute();
     
    
</script>

<style lang="scss" scoped>

</style>