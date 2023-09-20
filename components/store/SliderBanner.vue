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
    class="mySwiper h-[500px] max-md:h-[300px] z-10 bg-gray-200"
  >
    <swiper-slide><img src="https://www.qualitylogoproducts.com/images/_promo-university/_billboard/desktop/how-do-you-choose-a-promo-product1.jpg" loading="lazy" class="w-full h-full object-cover" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1692173138_Fabessentials_1.jpg" loading="lazy" class="w-full h-full object-cover" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.quillsuk.co.uk/wp-content/uploads/2019/08/promo-gifts-blog-image-2-734x321.jpg" loading="lazy" class="w-full h-full object-cover" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.quillsuk.co.uk/wp-content/uploads/2019/08/promo-gifts-blog-image-2-734x321.jpg" loading="lazy" class="w-full h-full object-cover" alt=""></swiper-slide>
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