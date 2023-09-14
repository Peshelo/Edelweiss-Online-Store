<template>
    <div class="w-full mx-auto max-w-[1600px]">

        <div class="w-full flex flex-row py-10">
            <div class="w-2/6 max-sm:hidden mr-2 border-r flex flex-col px-4 gap-x-3">
                <h3 class="text-2xl font-semibold">Get the best deals</h3>
                <p class="text-gray-600 my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem praesentium necessitatibus optio? <mark>Click here</mark></p>
                <div id="priceRange">
                    <h3 class="font-semibold">Price Range</h3>
                    <div class="w-full h-10 bg-gray-300 animate-pulse"></div>
                </div>
                <div id="Brands" class="my-4">
                    <h3 class="font-semibold">Price Range</h3>
               <div class="bg-white p-2 my-2 rounded-lg">
                <Icon name="ph:magnifying-glass" size="20" class="text-gray-500" />
        <input
          type="text"
          class="outline-none text-md min-w-[280px] bg-transparent p-1"
          placeholder="Search"
        />
               </div>
               <ul class="max-h-[100px] flex flex-col gap-y-2">
                    <li class="flex items-center rounded-lg gap-x-4 text-lg font-bold text-gray-600 ring-gray-100">
                        <input type="checkbox" name="cat" id="" class="h-4 w-4">
                        <label for="cat">Nike</label>
                    </li>
                    <li class="flex items-center rounded-lg gap-x-4 text-lg">
                        <input type="checkbox" name="cat" id="" class="h-4 w-4">
                        <label for="cat">Nike</label>
                    </li>
                    <li class="flex items-center rounded-lg gap-x-4 text-lg">
                        <input type="checkbox" name="cat" id="" class="h-4 w-4">
                        <label for="cat">Nike</label>
                    </li>
                    <li class="flex items-center rounded-lg gap-x-4 text-lg">
                        <input type="checkbox" name="cat" id="" class="h-4 w-4">
                        <label for="cat">Nike</label>
                    </li>
                    <li class="flex items-center rounded-lg gap-x-4 text-lg">
                        <input type="checkbox" name="cat" id="" class="h-4 w-4">
                        <label for="cat">Nike</label>
                    </li>

               </ul>
                </div>
            </div>
            <div class="max-sm:w-full">
                <slot/>
            </div>
            
        </div>
       
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>