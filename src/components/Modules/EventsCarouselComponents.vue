<template>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide v-for="(slide, index) in slides" :key="index" :class="['slide-' + (index + 1)]">
      <div class="carousel__item">
        <div class="image">
            <div class="blackout">
                <div class="item__footer">
                    <h3>
                        {{ slide.name }}
                        <p>{{ slide.quote }}</p>
                    </h3>
                </div>
            </div>
        </div>
      </div>
    </Slide>

    <template #addons>
        <Pagination />
    </template>
  </Carousel>
</template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    data() {
   return{
      slides: [
        { name: 'Golden prison:', quote: ' Новый год 2023' },
        { name: 'Golden prison:', quote: ' Новый год 2023' },
        { name: 'Golden prison:', quote: ' Новый год 2023' },
        { name: 'Golden prison:', quote: ' Новый год 2023' }
      ],
   }
  },
  })
  </script>
<style scoped>
    .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .carousel__slide {
    padding: 10px;
    }
    .image{
        width: 800px;
        height: 580px;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .carousel__slide--active .blackout{
        background: none;
    }
    .blackout{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        background: rgba(12, 13, 13, 0.85);
    }
    .carousel__slide--active .item__footer{
        background: rgba(10, 11, 11, 0.5);
    }
    .item__footer{
        padding: 12px 0 12px 24px;
        background: none;
        width: 100%;
        text-align: left;
    }
    h3{
        display: flex;
        align-items: flex-end;
        font-size: 20px;
        font-weight: 400;
    }
    p{
        margin-left: 8px;
        font-family: "Manrope";
        font-size: 18px;
        font-weight: 500;
        color: #44484E;
    }
    .slide-1 .image{
        background-image: url(../../assets/home/slide1.png);
    }
    .slide-2 .image{
        background-image: url(../../assets/home/slide2.png);
    }
    .slide-3 .image{
        background-image: url(../../assets/home/slide3.png);
    }
    .slide-4 .image{
        background-image: url(../../assets/home/slide4.png);
    }
    .carousel__pagination{
        margin: 14px 0 0;
    }
    ::v-deep .carousel__pagination-button::after {
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background-color: #D9D9D9 ;
    }
    ::v-deep .carousel__pagination-button--active::after{
        background-color: #D85F00 ;
    }
</style>