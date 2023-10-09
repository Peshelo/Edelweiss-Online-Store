<template>
    <AdminSidebar class="bg-gray-50">
    <div class="w-full">
          <!-- Nav Bar -->
          <div class="w-full border-b bg-white border-gray-100 px-10 py-5 max-md:p-0 flex justify-between">
                <div class="grid grid-cols-1 gap-2">
                    <h1 class="text-2xl mt-2.5 font-bold text-black">Product variants</h1>
                </div>
                <ul  class="max-md:absolute max-md:bottom-1  bg-white max-md:border-t-2 border-gray-100 max-md:p-2 max-md:w-full  flex flex-row gap-4 items-center max-md:justify-between max-md:px-[100px]">
                  
                    <li class="cursor-pointer text-gray-600 hover:text-red-500 duration-150">
                        <NuxtLink class="flex flex-col justify-center items-center">
                            <div class="relative">
                                <div class="absolute -top-1 -right-1 w-2 h-2 shrink-0 grow-0 rounded-full bg-red-300 text-green-700"></div>
                                <Icon name="iconamoon:profile-circle" size="24"/>
                            </div>
                            <label class="text-sm">Account</label>
                        </NuxtLink>
                    </li>
                </ul>
          </div>
            <!-- End of navbar -->
            <div class=" my-2 px-5 bg-white rounded-md shadow-md w-max-screen">
              <div class="flex justify-between">
                <div class="pt-3">
                  <button @click="openAddModal" class="bg-gray-900 font-bold text-white p-3 text-sm flex justify-between rounded-md">
                    Add new
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
                </button>
                </div>
              
                <div class="flex">
                  <div class="mb-4 mt-2">
                    <label for="organisationFilter" class="block font-medium mb-1">Filter by Category:</label>
                    <select  id="organisationFilter" v-model="catsFilter" class="border border-gray-300 rounded-md px-4 py-2 w-full">
                      <option value="">All</option>
                      <option v-for="cat in productCats" :value="cat">{{ cat }}</option>
                    </select>
                  </div>
                  <div class="mb-4 ml-5 mt-2">
                    <label for="productsFilter" class="block font-medium mb-1">Filter by product name:</label>
                    <input
                      v-model="productsFilter"
                      id="productsFilter"
                      type="text"
                      class="border border-gray-300 rounded-md px-4 py-2 w-full"
                      placeholder="Search product..."
                    />
                  </div>
                </div>
              </div>
                
              
            </div>
            <div class="mt-5 "> 
     <div class="shadow-md sm:rounded-lg">
                    <table class=" border border-separate border-gray-200 rounded-md w-full text-sm text-left text-gray-500">
                        <thead class="text-xs text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-3 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-3 py-3">
                                    Name
                                </th>
                                
                                <th scope="col" class="px-3 py-3">
                                    Description
                                </th>
                                <th scope="col" class="px-3 py-3">
                                    Size
                                </th>
                                <th scope="col" class="px-3 py-3">
                                    Colour
                                </th>
                                
                                <th scope="col" class="px-3 py-3">
                                    Stock
                                </th>
                                <th scope="col" class="px-3 py-3">
                                    Price
                                </th>
                            
                                <th scope="col" class="px-3 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="item in filteredItems" :key="item.id" class="bg-white border-x-2 border-collapse border-gray-900">
                                <th scope="row" class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                                   {{ item.id}}
                                </th>
                                <td class="px-3 py-4 text-md font-semibold">
                                    {{item.variantName}}                                    
                                </td>
                                <td class="px-3 py-4 text-md font-semibold">
                                    {{item.variantDescription}}                                    
                                </td>
                                <td class="px-3 py-4 text-md font-semibold">
                                    {{item.size}}                                    
                                </td>
                                <td class="px-3 py-2">
                                    {{item.color}}
                                </td>
                                <td class="px-3 py-2">
                                    {{item.stock}}
                                </td>
                                <td class="px-3 py-2">
                                    {{item.price}}
                                </td>
                                <td class="px-3 py-4 flex gap-3">
                                    <a href="#" class="font-medium text-blue-900 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  @click="getVariantById(item.id)"  class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
                                    </a >
                                    <a href="#" @click="openDeleteModal(item.id)" class="font-medium text-blue-900 dark:text-blue-500 hover:underline" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                                    </a >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-md text-black flex flex-row justify-end bg-gray-200 px-8 w-full">
                          <button class="p-3" @click="getAllVariants(pageNumber)"  v-for="pageNumber in this.result.totalPages" :key="pageNumber">
                            {{ pageNumber }} 
                          </button>
                    </div>
     </div>      
    </div>   
    <div v-if="addModal" class="z-10  backdrop-brightness-50 top-0 w-screen h-screen absolute inset-0 flex items-center justify-center">
                      <div class="bg-white rounded-lg shadow-md p-5 overflow-y-auto">
                        <!-- Modal Content -->
                        <div class="flex justify-between">
                          <h2  class="text-2xl font-bold mb-4">Add new product</h2>
                          <button class="bg-red-500 text-white text-xl font-xl px-3 py-1 mt-4 rounded-md" @click="closeAddModal">X</button>
                        </div>
                        <p v-if="loading">Processing the payment request</p>
                        <form @submit.prevent="addProductVariant()" class=" grid grid-cols-1 shadow-md rounded px-8 py-6 mb-4">       
                            <div class="grid grid-cols-2 gap-2">
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Product ID</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variant.productId">
                                    <p v-if="this.errors.productId" class="text-sm text-red-600 text-left mb-2">*{{this.errors.productId}}</p>
                                 </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Variant Name</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variant.variantName"  required>
                                    <p v-if="this.errors.variantName" class="text-sm text-red-600 text-left mb-2">*{{this.errors.variantName}}</p>
                                 </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Variant Description</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variant.variantDescription" required>
                                    <p v-if="this.errors.variantDescription" class="text-sm text-red-600 text-left mb-2">*{{this.errors.variantDescription}}</p>
                                </div>  
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Price</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variant.price">
                                </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Colour</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="color" v-model="variant.colour">
                                </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Size</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variant.size">
                                </div> 
                                <div class="mb-10">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Stock</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variant.stock">
                                </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">SKU</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variant.sku">
                                </div> 
                                <div class="mb-4">
                                    <input type="file" name="" id="">
                                </div> 
                          <!-- Submit Button -->
                          <div class="ml-2">
                
                            <button type="submit" class="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            >Submit</button>
                          </div>
                       
                       
        </div>                  
                        </form>       
                      </div>
    </div> 
    <div v-if="editModal" class="z-10 backdrop-brightness-50 top-0 w-screen h-screen absolute inset-0 flex items-center justify-center">
                <div class="bg-white rounded-lg shadow-md p-5 overflow-y-auto">
                  <!-- Modal Content -->
                  <div class="flex justify-between">
                    <h2 class="text-2xl font-bold mb-4">{{ editModalHeading }}</h2>
                    <button class="bg-red-500 text-white text-xl font-xl px-3 py-1 mt-4 rounded-md" @click="closeEditModal">X</button>
                  </div>
                  <form @submit.prevent="updateProductVariant(variantUpdate.id)" class=" grid grid-cols-1 shadow-md rounded px-8 py-6 mb-4">       
                            <div class="grid grid-cols-2 gap-2"> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Variant Name</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variantUpdate.variantName"  required>
                                    <p v-if="this.errors.variantName" class="text-sm text-red-600 text-left mb-2">*{{this.errors.variantName}}</p>
                                 </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Variant Description</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variantUpdate.variantDescription" required>
                                    <p v-if="this.errors.variantDescription" class="text-sm text-red-600 text-left mb-2">*{{this.errors.variantDescription}}</p>
                                </div>  
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Price</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variantUpdate.price">
                                </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Colour</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variantUpdate.colour">
                                </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Size</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variantUpdate.size">
                                </div> 
                                <div class="mb-10">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Stock</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variantUpdate.stock">
                                </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="local">SKU</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="text" v-model="variantUpdate.sku">
                                </div> 
                                <div class="mb-4">
                                    <input type="file" name="" id="">
                                </div> 
                          <!-- Submit Button -->
                          <div class="ml-2">
                
                            <button type="submit" class="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            >Submit</button>
                          </div>
                       
                       
        </div>                  
                        </form>        
                </div>
            </div>
    <div v-if="deleteModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <div class="bg-white p-6 rounded-lg">
                  <p class="mb-4">Are you sure you want to delete?</p>
                  <div class="flex justify-end">
                    <button class="mr-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded" @click="handleOption('Yes')">Yes</button>
                    <button
                      class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded" @click="handleOption('No')">No</button>
                  </div>
                </div>
            </div>  
    </div>
</AdminSidebar>
  </template>
  
  <script>
import Card from "@/components/Card.vue";
import AddButton from "@/components/AddButton.vue";
import AdminSidebar from "@/layouts/adminSidebar.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';  
import 'swiper/css/effect-cards';  
import './../../assets/css/style.css';
import { EffectCards } from 'swiper/modules';
import axios from 'axios'
export default {
  components: {
    Card,
    AddButton,
    AdminSidebar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      status: [
        "In stock", "Out of stock", "Damaged"
      ],
      category: [
        "Laptops", "Phones", "Smart watches"
      ],
      variant:[],
      variantUpdate: [],
      product:[],
      productsFilter: '',
      catsFilter: '',
      cards: [
        { title: "Card 1", description: "This is card 1" },
      ],
      pc: [],
      items: [],
      loading:false,
      addModal: false,
      editModal: false,
      deleteModal: false,
      errors: {},
      pages: [],
      result: []
    };
  },
  computed: {
    filteredItems() {
      let filteredItems = this.items;
      
      if (this.catsFilter) {
        filteredItems = filteredItems.filter((item) => item.subCategory.category.categoryName === this.catsFilter);
      }
      if (this.productsFilter) {
        filteredItems = filteredItems.filter(
          (item) => item.productName.toLowerCase().includes(this.productsFilter.toLowerCase())
        );
      }
      return filteredItems;
    },
    productCats() {
      return [...new Set(this.pc.map((item) => item.categoryName))];
    },
  },
  setup() {
        return {
          modules: [EffectCards],
        };
      },
  methods: {
    async getAllVariants(pageNumber){
    this.loading = true;
    Number.parseInt(pageNumber)
      pageNumber -=1;
    const URL = config.public.baseURL+`/product-variants?page=${pageNumber}&pageSize=10`;
    await axios.get(URL,{
      headers: {'Content-Type': 'application/json',
          // Authorization : 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*'}
    }).then((res) =>
     {
        this.result = res.data
        this.items = res.data.content
        this.pages = res.data.pageable
      console.log("Fetching Data Completed...", this.items);
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
    },
    async getVariantById(ID){
            this.loading = true;
      const URL = config.public.baseURL+`/product-variants/${ID}`;
      // const token = localStorage.token;
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            // Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.variantUpdate = res.data
        console.log(this.variantUpdate);
        console.log("Information tatora baba.");
        this.editModal = true;
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true
  
      }).finally(() => this.loading = false);
      },
    async addProductVariant(){
            this.errors = {};
                 
            if (Object.keys(this.errors).length === 0) {
        // make API call or submit form data here
        try{
          
        await axios.post(config.public.baseURL+`/product-variants/create/${this.variant.productID}`,{
          variantName: this.variant.variantName,
          variantDescription: this.variant.variantDescription,
          price: this.variant.price,
          colour: this.variant.colour,
          size: this.variant.size,
          stock: this.variant.stock,
          sku: this.variant.sku
        },{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Pduct variant added successfully.")
          this.response = data;
          console.log(response);
        })
        }catch(err){
        console.log("Error:",err)
        this.errors.failed = "Sorry, an error occured!";
        this.errors.ERR = err;
        }
        console.log("Form submitted successfully");
      }
    },
    async updateProductVariant(vID){
        this.errors = {};
              if (Object.keys(this.errors).length === 0) {
          // make API call or submit form data here
          try{
          await axios.put(config.public.baseURL+`/product-variants/update/${vID}`,{
            variantName: this.variantUpdate.variantName,
            variantDescription: this.variantUpdate.variantDescription,
            price: this.variantUpdate.price,
            colour: this.variantUpdate.colour,
            size: this.variantUpdate.size,
            stock: this.variantUpdate.stock,
            sku: this.variantUpdate.sku
          },{
              headers: {'Content-Type': 'application/json'},
              credentials: 'include'
            }).then((response) =>{
            const data = response.data;
            alert("Variant updated successfully.")
            this.response = data;
            console.log(response);
          })
          }catch(err){
          console.log("Error:",err)
          this.errors.failed = "Sorry, an error occured!";
          this.errors.ERR = err;
          }
        }
      },
    async handleOption (_option) {
      console.log(this.ID)
      if(_option == 'Yes'){
        try{
        await axios.delete(config.public.baseURL+'/product-variants/delete/'+ this.ID,{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Product variant deleted successfully.")
          this.closeDeleteModal()
          this.response = data;
          console.log(response);
        })
        }catch(err){
        console.log("Error:",err)
        this.errors.failed = "Sorry, an error occured!";
        this.errors.ERR = err;
        }
        console.log("Form submitted successfully");
    }
    else if(_option == 'No'){
      this.closeDeleteModal();
    } 
    },
    async getAllProductCategories(){
    this.loading = true;
    const URL = config.public.baseURL+`/categories/all`;
    await axios.get(URL,{
      headers: {'Content-Type': 'application/json',
          // Authorization : 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*'}
    }).then((res) =>
     {
      this.pc = res.data;
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
    },
    
    openAddModal() {
        this.addModal = true;
      },
      closeAddModal() {
        this.addModal = false;
      },
      openEditModal(ID) {
        this.editModal = true;
        this.ID = ID;
      },
      closeEditModal() {
        this.editModal = false;
      },
      openDeleteModal(ID) {
        this.deleteModal = true;
        this.ID = ID;
      },
      closeDeleteModal() {
        this.deleteModal = false;
      },
  },
  mounted(){
    this.getAllVariants(1)
    this.getAllProductCategories()
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>