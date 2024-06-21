<script>
import ButtonsComponent from './Modules/ButtonsComponent.vue';
import VideoPlayerComponent from './Modules/VideoPlayerComponent.vue';
import TeamCarouselComponent from './Modules/TeamCarouselComponent.vue';
import DetailsSummaryComponent from './Modules/DetailsSummaryComponent.vue';

export default {
  data() {
    return {
      items: Array.from({ length: 12 }, (_, i) => i + 1),
      currentIndex: 0,
    }
  },
  components: {
    ButtonsComponent,
    VideoPlayerComponent,
    TeamCarouselComponent,
    DetailsSummaryComponent
  },
  methods: {
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
  },
  watch: {
    currentIndex() {
      this.$refs.track.style.transform = `translateX(-${this.currentIndex * (100 / this.items.length)}%)`;
    },
  },
}
</script>

<template>
  <div class="content">
    <section id="start">
      <img src="../assets/about/logoAbout.png">
      <h3>Ваш крутой краткий лозунг</h3>
      <ButtonsComponent :color="'orange'" />
    </section>
    <selection id="caption">
      <h3>“Ваше желание - наш <span>результат</span>“</h3>
      <h4>Мы стремимся к большему. Каждый раз путь становится только интеренсее! Новые знакомства, новые идеи, новые фишки. Мы можем делать так, как другие побоятся!</h4>
      <h4 class="author">Команда Eventer</h4>
    </selection>
    <VideoPlayerComponent/>
    <section id="bigText">
      <div class="bigText-item">
        <div class="plus" id="orange"></div>
        <div class="plus"></div>
        <h2>11 лет опыта</h2>
        <div class="plus"></div>
        <div class="plus"></div>
      </div>
      <div class="bigText-item">
        <h2>12 креативных людей</h2>
      </div>
      <div class="bigText-item">
        <div class="plus"></div>
        <div class="plus"></div>
        <h2>150+<br>мероприятий</h2>
        <div class="plus" id="blue"></div>
        <div class="plus"></div>
      </div>
    </section>
    <section id="slider">
      <h2>Наша команда</h2>
      <TeamCarouselComponent/>
    </section>
    <section id="summary">
      <DetailsSummaryComponent :color="'orange'"/>
    </section>
    <section id="caption">
      <h3>“Ваше желание - наш <span>результат</span>“</h3>
      <h4>Мы стремимся к большему. Каждый раз путь становится только интеренсее! Новые знакомства, новые идеи, новые фишки. Мы можем делать так, как другие побоятся!</h4>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .content{
    width: 100%;
    padding-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3{
      font-weight: 600;
      font-size: 36px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

  #start{
    width: 100%;
    background-image: url(../assets/about/peopleHead.png);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-bottom: 797px;

    img{
      width: 256px;
    }
    h3{
      font-weight: 600;
      font-size: 36px;
      text-transform: uppercase;
      padding-bottom: 30px;
      letter-spacing: 0.03em;
    }
  }
  #caption{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 800px;
    padding: 180px 0;

    h3{
      width: 100%;
      text-align: left;

      span{
        color: #F86F03;
      }
    }

    h4{
      font-family: 'Manrope', sans-serif;
      font-weight: 300;
      font-size: 20px;
      letter-spacing: 0.03em;
    }

    .author{
      width: 100%;
      text-align: right;
    }
  }
  #bigText{
    display: flex;
    padding: 140px 230px;

    .bigText-item{
      overflow: visible;
      font-family: "Roboto Flex";
      font-weight: 500;
      font-size: 24px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      width: 460px;
      height: 305px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .plus {
      position: absolute;
      width: 0.8px;
      height: 64px;
      background-color: #F3F3F3;
    }

    .plus:before {
      content: "";
      position: absolute;
      width: 64px;
      height: 0.8px;
      background-color: #F3F3F3;
      left: -31.5px;
      top: 31.5px;
    }

    .bigText-item:nth-child(1), .bigText-item:nth-child(3){
      position: relative;
      .plus:nth-child(1){
        bottom: 0;
        right: 0;
      }
      .plus:nth-child(2){
        bottom: 0;
        left: 0;
      }
      .plus:nth-child(4){
        top: 0;
        right: 0;
      }
      .plus:nth-child(5){
        top: 0;
        left: 0;
      }
      #orange, #orange:before{
        background-color: #F86F03;
      }
      #blue, #blue::before{
        background-color: #5662DA;
      }
    }
  }

  #slider{
    width: 100%;
    padding: 0 0 140px;
    h2{
      letter-spacing: 0.03em;
      font-weight: 500px;
      font-size: 36px;
      padding-left: 230px;
      padding-bottom: 106px;
      text-transform: uppercase;
    }
  }

  #summary{
    width: 100%;
    background: #141419;
  }

</style>
