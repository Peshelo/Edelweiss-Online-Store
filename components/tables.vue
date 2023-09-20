<template>
    <div class="mt-5 "> 
     <div class="shadow-md sm:rounded-lg">
                    <table class=" border border-separate border-gray-200 rounded-md w-full text-sm text-left text-gray-500">
                        <thead class="text-xs text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-3 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-44 py-3">
                                    Product
                                </th>
                                
                                <th scope="col" class="px-3 py-3">
                                    Amount
                                </th>
                                <th scope="col" class="px-3 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-x-2 border-collapse border-gray-900">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td class="px-44 py-4">
                                    Iphone 15
                                </td>
                                
                                <td class="px-3 py-4">
                                    $10
                                </td>
                                <td class="px-3 py-4 flex gap-3">
                                    <a href="#" class="font-medium text-blue-900 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  @click="fetchOrgFinanceByID(item.financeID)"  class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
                                    </a >
                                    <a href="#" class="font-medium text-yblue-900 dark:text-blue-500 hover:underline" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  @click="openDeleteModal(item.financeID)" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                                    </a >
                                </td>
                            </tr>
                        </tbody>
                    </table>
     </div>      
    </div> 
        
</template>

<script>
</script>

<style>

</style>

