<template>
    <AdminSidebar class="bg-gray-50">
    <div class="w-full mt-2">
          <!-- Nav Bar -->
          <div class="w-full border-b bg-white border-gray-100 px-10 py-5 max-md:p-0 flex justify-between">
                <div class="grid grid-cols-1 gap-2">
                    <h1 class="text-2xl mt-2.5 font-bold text-black">Sub Category</h1>
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
                    <svg xmlns="http://www.w3.sub/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
                </button>
                </div>
                <div class="mb-4 mt-2">
                    <label for="organisationFilter" class="block font-medium mb-1 ">Filter by sub:</label>
                    <select  id="organisationFilter" class="border border-gray-300 rounded-md px-4 py-2 w-full">
                      <option value="">All</option>
                      <option v-for="cards in categories" :value="cards">{{ cards }}</option>
                    </select>
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
                                            Sub-Category Name
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            Sub-Category Description
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-for="subs in this.items" :key="subs.id">
                                    <tr class="bg-white border-x-2 border-collapse border-gray-900">
                                        <th scope="row" class="truncated px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{subs.id}}
                                        </th>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{subs.subCategoryName}}                                    
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{subs.subCategoryDescription}}                                    
                                        </td>
                                        <td class="px-3 py-4 flex gap-3">
                                            <a href="#" @click="getSubCategoryByID(subs.id)" class="font-medium text-blue-900 dark:text-blue-500 hover:underline">
                                            <svg xmlns="http://www.w3.sub/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
                                            </a >
                                            <a href="#" class="font-medium text-yblue-900 dark:text-blue-500 hover:underline" >
                                            <svg xmlns="http://www.w3.sub/2000/svg" width="16" height="16" fill="currentColor"  @click="openDeleteModal(subs.id)" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                                            </a >
                                        </td>
                                    </tr>
                                </tbody>
                </table>
            </div>   
            <div v-if="addModal" class="z-10  backdrop-brightness-50 top-0 w-screen h-screen absolute inset-0 flex items-center justify-center">
                      <div class="bg-white rounded-lg shadow-md p-5 overflow-y-auto">
                        <!-- Modal Content -->
                        <div class="flex justify-between">
                          <h2  class="text-2xl font-bold mb-4">Add new Category</h2>
                          <button class="bg-red-500 text-white text-xl font-xl px-3 py-1 mt-4 rounded-md" @click="closeAddModal">X</button>
                        </div>
                        <p v-if="loading">Processing the payment request</p>
                        <form  v-else @submit.prevent="addSubcategory()" class=" grid grid-cols-1 bg-white shadow-md rounded px-8 py-6 mb-4">       
                          <!-- Name -->
                          <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Category</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                             type="text" v-model="sub.categoryId" required>
                             <p v-if="this.errors.categoryId" class="text-sm text-red-600 text-left mb-2">*{{this.errors.categoryId}}</p>
                        </div> 
                            <!-- Description-->
                          <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="locals">Sub-Category Name:</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                             type="text" v-model="sub.subCategoryName" required>
                            <p v-if="this.errors.subCategoryName" class="text-sm text-red-600 text-left mb-2">*{{this.errors.subCategoryName}}</p>
                          </div>  
                             <!-- Description-->
                             <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="locals">Sub-Category Description:</label>
                            <textarea name="sub"  v-model="sub.subCategoryDescription" cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >Enter your description</textarea>
                            <p v-if="this.errors.subCategoryDescription" class="text-sm text-red-600 text-left mb-2">*{{this.errors.subCategoryDescription}}</p>
                          </div> 
                          <!-- Submit Button -->
                          <div class="ml-2">
                            <button class="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            >Submit</button>
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
                  <form  @submit.prevent="updateSubCategory(subcategoryUpd.id)" class=" grid grid-cols-1 bg-white shadow-md rounded px-8 py-6 mb-4">       
                       <!-- Category -->
                       <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Category Name</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                             type="text" v-model="subcategoryUpd.category.id" required>
                             <p v-if="this.errors.categoryId" class="text-sm text-red-600 text-left mb-2">*{{this.errors.categoryId}}</p>
                        </div>    
                    <!-- Name -->
                          <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="local">Sub-Category Name</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                             type="text" v-model="subcategoryUpd.subCategoryName" required>
                             <p v-if="this.errors.subCategoryName" class="text-sm text-red-600 text-left mb-2">*{{this.errors.subCategoryName}}</p>
                        </div> 
                            <!-- Description-->
                          <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="locals">Sub-Category Description:</label>
                            <textarea name="sub"  v-model="subcategoryUpd.subCategoryDescription" cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >Enter your description</textarea>
                            <p v-if="this.errors.subCategoryDescription" class="text-sm text-red-600 text-left mb-2">*{{this.errors.subCategoryDescription}}</p>
                          </div>  
                          <!-- Submit Button -->
                          <div class="ml-2">
                            <button class="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            >Submit</button>
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
        
    </div>
</AdminSidebar>
  </template>
  
  <script>
import Card from "@/components/Card.vue";
import AddButton from "@/components/AddButton.vue";
import AdminSidebar from "@/layouts/adminSidebar.vue";
import axios from 'axios'
export default {
  components: {
    Card,
    AddButton,
    AdminSidebar
  },
  data() {
    return {
      categories: [
        "Laptops", "Phones", "Speakers", "Headphones", "IoT Devices"
      ],
      sub: [],
      loading:false,
      addModal: false,
      editModal: false,
      deleteModal: false,
      subcategoryUpd: [],
      errors: {},
      editModalHeading: 'Edit record',
      addModalHeading: 'Add new local sub record',
      cards: [
        { title: "Card 1", description: "This is card 1" },
        { title: "Card 2", description: "This is card 2" },
        { title: "Card 3", description: "This is card 3" },
      ],
      items: []
    };
  },
  methods: {
    async getSubCategoryByID(ID){
            this.loading = true;
      const URL = `http://localhost:8080/subcategories/${ID}`;
      // const token = localStorage.token;
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            // Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.subcategoryUpd = res.data
        console.log(this.subcategoryUpd);
        console.log("Information tatora baba.");
        this.editModal = true;
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true
  
      }).finally(() => this.loading = false);
      },
      async updateSubCategory(subcatID){
        this.errors = {};
        if(!this.subcategoryUpd.subCategoryName){
                this.errors.subCategoryName = "Sub Category name is required";
            }   
            if(!this.subcategoryUpd.subCategoryDescription){
                this.errors.subCategoryDescription = "Sub Category description is required";
            }    
              if (Object.keys(this.errors).length === 0) {
          // make API call or submit form data here
          try{
          await axios.put(`http://localhost:8080/subcategories/update/${subcatID}`,{
            categoryId: this.subcategoryUpd.categoryId,
            subCategoryName: this.subcategoryUpd.subCategoryName,
            subCategoryDescription: this.subcategoryUpd.subCategoryDescription
          },{
              headers: {'Content-Type': 'application/json'},
              credentials: 'include'
            }).then((response) =>{
            const data = response.data;
            alert("Sub Category updated successfully.")
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
    async getAllSubCategories(){
    this.loading = true;
    const URL = `http://localhost:8080/subcategories`;
    await axios.get(URL,{
      headers: {'Content-Type': 'application/json',
          // Authorization : 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*'}
    }).then((res) =>
     {
      this.items = res.data;
      console.log(this.items)
      console.log("Fetching Data Completed...");
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
    },
    async addSubcategory(){
            this.errors = {};    
            if(!this.sub.subCategoryName){
                this.errors.subCategoryName = "Sub Category name is required";
            }   
            if(!this.sub.subCategoryDescription){
                this.errors.subCategoryDescription = "Sub Category description is required";
            }    
            if (Object.keys(this.errors).length === 0) {
        // make API call or submit form data here
        try{
        await axios.post('http://localhost:8080/subcategories/create',{
          categoryId: this.sub.categoryId,
          subCategoryName: this.sub.subCategoryName,
          subCategoryDescription: this.sub.subCategoryDescription
        },{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Sub Category added successfully.")
          this.response = data;
          this.closeAddModal()
          console.log(response);
        })
        }catch(err){
        console.log("Error:",err)
        this.errors.failed = "Sorry, an error occured!";
        this.closeAddModal()
        this.errors.ERR = err;
        }
        console.log("Form submitted successfully");
      }
    },
    async handleOption (_option) {
      console.log(this.ID)
      if(_option == 'Yes'){
        try{
        await axios.delete('http://localhost:8080/subcategories/delete/'+ this.ID,{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Sub-category deleted successfully.")
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
    this.getAllSubCategories()
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