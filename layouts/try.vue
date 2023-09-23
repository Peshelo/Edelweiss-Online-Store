<template>
    <div class="flex">
        <div :style="{ width: elementWidth + 'px'}" class="duration-300 bg-gray-900 h-screen p-5 pt-8 relative">
            <svg height="50" class="text-white" @click="menu" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 6.5h12"/><path d="m4.498 10.5h11.997"/><path d="m4.5 14.5h11.995"/></g></svg>        
            <div>
                <h1 class="text-xl font-semibold text-white px-2" v-if="elementWidth == 250">Dashboard</h1>
                <h1 class="scale-0" v-else>Dashboard</h1>
            </div>
                <ul>
                    <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 hover:text-black rounded-md mt-2">Dashboard</li>
                    <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 hover:text-black rounded-md mt-2">Products</li>
                    <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 hover:text-black rounded-md mt-2">Categories</li>
                    <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 hover:text-black rounded-md mt-2">Customers</li>
                    <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 hover:text-black rounded-md mt-2">Dashboard</li>
                </ul>
        </div>
        
        <slot/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            elementWidth: 250,
            visibilityValue: 'visible'
            
        }        
    },
    methods:{
                menu(){
                    this.elementWidth = this.elementWidth === 250 ? 50 : 250;
                }
            }
}
</script>

<style scoped>

</style>