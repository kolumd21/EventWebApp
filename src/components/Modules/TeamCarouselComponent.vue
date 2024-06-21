     <!--<Slide v-for="slide in 10" :key="slide">
       <div class="carousel__item">{{ slide }}</div>
     </Slide>-->
<template>
   <Carousel :itemsToShow="3.7" :wrapAround="true" :transition="500" :autoplay="5000">
     <Slide v-for="(slide, index) in slides" :key="index" :class="['slide-' + (index + 1)]">
      <div class="carousel__item">
         <div class="image">
          <p>{{ slide.title }}</p>
          <h2>{{ index + 1 }} {{ slide.name }}</h2>
        </div>
        <div class="item__footer">
          <p>{{ slide.quote }}</p>
        </div>
      </div>
    </Slide>
   </Carousel>
 </template>
 
 <script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
   return{
      slides: [
        { name: 'Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: 'Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: 'Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: 'Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: 'Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: 'Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: 'Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: 'Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: 'Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: 'Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
      ],
   }
  },
  methods: {
  },
})
 </script>
 
<style scoped>
   .carousel__item{
      user-select: none;
      width: 100%;
      border-radius: 4px;
      background-color: #141419;

      .image{
         height: 505px;
         background-size: cover;
         display: flex;
         flex-direction: column-reverse;
         padding: 16px;
         text-align: left;

         h2{
            color: rgb(243, 243, 243);
            font-weight: 600;
            font-size: 24px;
            letter-spacing: 0.03em;
         }
         p{
            letter-spacing: 0.03em;
            color: rgba(243, 243, 243, 0.8);
            font-size: 16px;
         }
      }

      .item__footer{
         padding: 24px 16px 32px;
         font-weight: 300;
         font-family: 'Manrope';
         color: rgba(243, 243, 243, 0.8);
         font-size: 14px;
         text-align: left;
         letter-spacing: 0.03em;
      }
   }

   .slide-1 .image, .slide-5 .image, .slide-9 .image {
      background: url('../../assets/about/carousel/1.png');
   }

   .slide-3 .image, .slide-7 .image{
      background: url('../../assets/about/carousel/4.png');
   }

   .slide-2 .image, .slide-6 .image, .slide-10 .image  {
      background: url('../../assets/about/carousel/2.png');
   }

   .slide-4 .image, .slide-8 .image{
      background: url('../../assets/about/carousel/3.png');
   }
   
   .carousel__slide--sliding {
      transition: 0.2s;
   }
   
   .carousel__slide {
      width: 400px !important;
      opacity: 1;
      margin: 0 40px;
   }
 </style>
 