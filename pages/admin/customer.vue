<template>
    <AdminSidebar class="bg-gray-50">
    <div class="w-full mt-2">
          <!-- Nav Bar -->
          <div class="w-full border-b bg-white border-gray-100 px-10 py-5 max-md:p-0 flex justify-between">
                <div class="grid grid-cols-1 gap-2">
                    <h1 class="text-2xl mt-2.5 font-bold text-black">Customers</h1>
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
                </div>
                <div class="mb-4 ml-5 mt-2">
                    <label for="surnameFilter" class="block font-medium mb-1">Find by name:</label>
                    <input
                      v-model="surnameFilter"
                      id="surnameFilter"
                      type="text"
                      class="border border-gray-300 rounded-md px-4 py-2 w-full"
                      placeholder="Search customer..."
                    />
                  </div>
              </div>  
            </div>
            <div class="mt-5 "> 
            <div class="shadow-md sm:rounded-lg">
                <table class=" border border-separate overflow-x-auto border-gray-200 w-full rounded-md text-sm text-left text-gray-500">
                                <thead class="text-xs text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-3 py-3">
                                            #
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            First Name
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            Last Name
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            Email
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-for="cust in this.items" :key="cust.customerId">
                                    <tr class="bg-white border-x-2 border-collapse border-gray-900">
                                        <th scope="row" class="truncated px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{cust.customerId}}
                                        </th>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{cust.firstName}}                             
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{cust.lastName}}                             
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{cust.email}}                             
                                        </td>
                                        <td class="px-3 py-4">
                                            <a href="#" class="font-medium text-yblue-900 dark:text-blue-500 hover:underline" >
                                            <svg xmlns="http://www.w3.category/2000/svg" width="16" height="16" fill="currentColor"  @click="openDeleteModal(cust.customerId)" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                                            </a >
                                        </td>
                                    </tr>
                                </tbody>
                </table>
            </div>   
            </div> 
              <div v-if="deleteModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <div class="bg-white p-6 rounded-lg">
                  <p class="mb-4">Are you sure you want to delete?</p>
                  <div class="flex justify-end">
                    <button class="mr-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded" @click="handleOption('yes')">Yes</button>
                    <button
                      class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded" @click="handleOption('no')">No</button>
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
      category: [],
      loading:false,
      addModal: false,
      editModal: false,
      deleteModal: false,
      customerData: [],
      errors: {},
      editModalHeading: 'Edit record',
      addModalHeading: 'Add new local category record',
      cards: [
        { title: "Card 1", description: "This is card 1" },
        { title: "Card 2", description: "This is card 2" },
        { title: "Card 3", description: "This is card 3" },
      ],
      items: []
    };
  },
  methods: {
    addNewCard() {
      // Add a new card on top of the stack
      this.cards.unshift({
        title: `Card ${this.cards.length + 1}`,
        description: `This is card ${this.cards.length + 1}`,
      });
    },
    async getCustomerByID(ID){
            this.loading = true;
      const URL = config.public.baseURL+`/categories/{categoryId}?categoryId=${ID}`;
      // const token = localStorage.token;
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            // Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.customerData = res.data
        console.log(this.account);
        console.log("Information tatora baba.");
        this.editModal = true;
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true
  
      }).finally(() => this.loading = false);
      },
    async getAllCustomers(){
    this.loading = true;
    const URL = config.public.baseURL+`/customers`;
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
    async handleOption (_option) {
      if(_option = 'yes'){
        try{
        await axios.delete(config.public.baseURL+'/customers/delete',this.ID,{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Customer deleted successfully.")
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
    else if(_option = 'no'){
      this.name = ''
      this.closeDeleteModal();
    } 
    },
      openAddModal() {
        this.addModal = true;
      },
      closeAddModal() {
        this.addModal = false;
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
    this.getAllCustomers()
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