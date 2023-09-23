<template>
    <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :autoplay="{
      delay: 2500,
      disableOnInteraction:false
    }"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper h-[400px] w-[1600px] max-md:h-[300px] z-10 bg-gray-200"
  >
    <swiper-slide><img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/3ZgtXjgUk0mFaxDEOUYwPe/df82d65bae2a402208ed20c8e7f4118f/HP_BANNER_2_15-09_V2.jpg" loading="lazy" class="w-full h-full object-cover" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/tcamPFbFg3Xhgqy3DIL0X/beda2299716450204124e40ac15ddcf8/HP_BANNER_2C_Master.jpg" loading="lazy" class="w-full h-full object-cover" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/3ZdzB7QA3pCcxgwxwDk7Vg/8597cdebc2876419131fe3c82c854f96/HP_BANNER_2D_Master.jpg" loading="lazy" class="w-full h-full object-cover" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/2Ya26bir7u0sYeQC3oJZpb/711ae906e9b133ddec3a6b831628c2b0/HP_BANNER_2A_MASTER.jpg" loading="lazy" class="w-full h-full object-cover" alt=""></swiper-slide>
  </swiper>
</template>
<script setup>
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
</script>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  };
</script>

<style>
.swiper-button-prev {
  color: rgb(0, 5, 75); 

    /* background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%234c71ae'%2F%3E%3C%2Fsvg%3E") !important; */
  }
  
  .swiper-button-next {
    color: rgb(0, 5, 75); 
    /* background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%234c71ae'%2F%3E%3C%2Fsvg%3E") !important; */
  }
  :root {
    --swiper-theme-color: #000;
}
</style>