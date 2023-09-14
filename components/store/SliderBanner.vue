<template>
         <Swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper h-[500px] bg-gray-300"
  >
    <!-- <swiper-slide class="bg-red-500"><img src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" width="100" class="w-full h-full object-fit" alt="banner"></swiper-slide> -->
    <swiper-slide class="bg-green-500">Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide class="bg-yellow-500">Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide class="bg-black">Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide class="bg-blue-500">Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </Swiper>
</template>
<script setup>
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
</script>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';


  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>