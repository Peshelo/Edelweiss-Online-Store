<template>
    <div class="container mx-auto">
      <div class="my-8">
        <h1 class="text-2xl font-semibold mb-4">Sales Analytics</h1>
        <line-chart :chart-data="salesChartData" :options="chartOptions"></line-chart>
      </div>
  
      <div class="my-8">
        <h1 class="text-2xl font-semibold mb-4">Popular Products</h1>
        <line-chart :chart-data="popularProductsChartData" :options="chartOptions"></line-chart>
      </div>
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs';
  
  export default {
    extends: Line,
    data() {
      return {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
        salesChartData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with your data
          datasets: [
            {
              label: 'Sales',
              data: [10, 15, 25, 30, 20], // Replace with your data
              borderColor: '#007BFF',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        popularProductsChartData: {
          labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'], // Replace with your data
          datasets: [
            {
              label: 'Popularity',
              data: [100, 75, 120, 90, 150], // Replace with your data
              borderColor: '#FF5722',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
      };
    },
    mounted() {
      this.renderChart(this.salesChartData, this.chartOptions);
    },
  };
  </script>
  