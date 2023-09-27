<template>
    <AdminSidebar class="bg-gray-50">
    <div class="w-full mt-2">
          <!-- Nav Bar -->
          <div class="w-full border-b bg-white border-gray-100 px-10 py-5 max-md:p-0 flex justify-between">
                <div class="grid grid-cols-1 gap-2">
                    <h1 class="text-2xl mt-2.5 font-bold text-black">Payments</h1>
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
                                           Intent
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            Order ID
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            Currency
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            Payment Method
                                        </th>
                                        <th scope="col" class="px-3 py-3">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-for="pay in filteredItems" :key="pay.Id">
                                    <tr class="bg-white border-x-2 border-collapse border-gray-900">
                                        <th scope="row" class="truncated px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{pay.Id}}
                                        </th>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{pay.firstName}}                             
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{pay.lastName}}                             
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{pay.email}}                             
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{pay.intent}}                             
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{pay.orderId}}                             
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{pay.currency}}                             
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{pay.paymentMethod}}                             
                                        </td>
                                        <td class="px-3 py-4 text-md font-semibold">
                                            {{pay.price}}                             
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
    //   filteredItems: '',
      surnameFilter: '',
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
  computed: {
      filteredItems() {
        let filteredItems = this.items;
  
        if (this.surnameFilter) {
          filteredItems = filteredItems.filter(
            (item) => item.lastName.toLowerCase().includes(this.surnameFilter.toLowerCase())
          );
        }
  
        return filteredItems;
      },
      sectionsList() {
      return [...new Set(this.sections.map((item) => item.name))];
    },
    },
  methods: {
    async getCustomerByID(ID){
            this.loading = true;
      const URL = `http://localhost:8080/categories/{categoryId}?categoryId=${ID}`;
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
    async getAllPayments(){
    this.loading = true;
    const URL = `http://localhost:8080/paypal/getAllPayments`;
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
    this.getAllPayments()
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