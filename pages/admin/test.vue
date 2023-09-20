<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-semibold mb-4">Upload Image Dialog</h1>
    <form @submit.prevent="uploadProduct" enctype="multipart/form-data" class="bg-white p-6 rounded-lg shadow-lg">
      <div class="mb-4">
        <label for="productName" class="block font-bold">Product Name:</label>
        <input type="text" id="productName" name="productName" v-model="formData.productName" required class="w-full p-2 border border-gray-300 rounded" />
      </div>

      <div class="mb-4">
        <label for="categoryId" class="block font-bold">Category ID:</label>
        <input type="text" id="categoryId" name="categoryId" v-model="formData.categoryId" required class="w-full p-2 border border-gray-300 rounded" />
      </div>

      <div class="mb-4">
        <label for="productDescription" class="block font-bold">Product Description:</label>
        <textarea id="productDescription" name="productDescription" v-model="formData.productDescription" required class="w-full p-2 border border-gray-300 rounded"></textarea>
      </div>

      <div class="mb-4">
        <label for="defaultImage" class="block font-bold">Default Image:</label>
        <input type="file" id="defaultImage" name="defaultImage" @submit.prevent="handleFileChange()" class="w-full p-2 border border-gray-300 rounded" />
        <img v-if="selectedImage" :src="selectedImage" alt="Selected Image" class="mt-2 max-w-full h-auto" />
      </div>

      <div class="mb-4" v-for="(variant, index) in formData.variants" :key="index">
        <div class="variant-group border border-gray-300 p-4 rounded">
          <label for="variantName" class="block font-bold">Variant Name:</label>
          <input type="text" id="variantName" :name="'variants[' + index + '].name'" v-model="variant.name" class="w-full p-2 border border-gray-300 rounded" />

          <label for="variantDescription" class="block font-bold">Variant Description:</label>
          <input type="text" id="variantDescription" :name="'variants[' + index + '].description'" v-model="variant.description" class="w-full p-2 border border-gray-300 rounded" />

          <label for="variantPrice" class="block font-bold">Variant Price:</label>
          <input type="number" step="0.01" id="variantPrice" :name="'variants[' + index + '].price'" v-model="variant.price" class="w-full p-2 border border-gray-300 rounded" />

          <label for="variantColour" class="block font-bold">Variant Colour:</label>
          <input type="text" id="variantColour" :name="'variants[' + index + '].colour'" v-model="variant.colour" class="w-full p-2 border border-gray-300 rounded" />

          <label for="variantSize" class="block font-bold">Variant Size:</label>
          <input type="text" id="variantSize" :name="'variants[' + index + '].size'" v-model="variant.size" class="w-full p-2 border border-gray-300 rounded" />

          <label for="variantStock" class="block font-bold">Variant Stock:</label>
          <input type="number" id="variantStock" :name="'variants[' + index + '].stock'" v-model="variant.stock" class="w-full p-2 border border-gray-300 rounded" />

          <label for="variantSku" class="block font-bold">Variant SKU:</label>
          <input type="text" id="variantSku" :name="'variants[' + index + '].sku'" v-model="variant.sku" class="w-full p-2 border border-gray-300 rounded" />

          <button type="button" @click="removeVariant(index)" class="remove-variant text-red-600 cursor-pointer mt-2">Remove Variant</button>
        </div>
      </div>

      <button type="button" @click="addVariant" class="bg-blue-500 text-white px-4 py-2 rounded">Add Variant</button>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded ml-2">Create Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        productName: "",
        categoryId: "",
        productDescription: "",
        defaultImage: null,
        variants: [],
      },
      selectedImage: null,
    };
  },
  methods: {
   handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImage = e.target.result;
        };
        reader.readAsDataURL(file);
        this.formData.defaultImage = file;
      }
      // console.log(formData)
     
    },
    addVariant() {
      this.formData.variants.push({
        name: "",
        description: "",
        price: null,
        colour: "",
        size: "",
        stock: null,
        sku: "",
      });
    },
    removeVariant(index) {
      this.formData.variants.splice(index, 1);
    },
    async uploadProduct() {
      // Implement image upload and API request logic here
      console.log("Form submitted:", this.formData);
      try{
        await axios.post('http://localhost:8080/products/create', this.formData,{
            headers: {'Content-Type': 'Applications/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Product  added successfully.")
          this.response = data;
          
          console.log(response);
        })
        }catch(err){
        console.log("Error:",err)
        this.errors.failed = "Sorry, an error occured!";
        this.errors.ERR = err;
        }
    },
    async addProduct(){
            this.errors = {};
            if (Object.keys(this.errors).length === 0) {
        // make API call or submit form data here
        try{
        await axios.post('http://localhost:8080/products/create',{
          
        },{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Category added successfully.")
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
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
