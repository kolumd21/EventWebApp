<script>
import ButtonsComponent from "./Modules/ButtonsComponent.vue";
import DetailsSummaryComponent from "@/components/Modules/DetailsSummaryComponent.vue";
export default{
  data(){
    return{

    }
  },
  components:{
    DetailsSummaryComponent,
    ButtonsComponent
  }
}
</script>

<template>
   <router-view/>
   <div class="content">
      <section id="head__text">
         <h2>новогодние<br>корпоративы</h2>
      </section>
      <section id="about">
         <div class="about__item">
            <div class="about__text">
               <h3>Заголовок про локацию</h3>
               <p>Текст о том, что там было и как классно было. Про локацию, что она у воды и очень красивая и супер-пупер! Дальше стырила с китчена<br><br>На зонах тимбилдинга мы доили корову, укрощали быка, осваивали трактора, выкапывали картофель, а в финале готовили самое белорусские блюдо - драники.Вечернюю программу открыл танцевальный мастер-класс, а продолжил деревенский квиз, Ну и как же без кавер-группы</p>
            </div>
            <div class="about__image">
            </div>
         </div>
         <div class="about__item__bottom">
            <h3>Какие бывают</h3>
            <p>Текст о том, что там было и как классно было. Про локацию, что она у воды и очень красивая и супер-пупер! Дальше стырила с китчена<br><br>На зонах тимбилдинга мы доили корову, укрощали быка, осваивали трактора, выкапывали картофель, а в финале готовили самое белорусские блюдо - драники.Вечернюю программу открыл танцевальный мастер-класс, а продолжил деревенский квиз, Ну и как же без кавер-группы</p>
         </div>
      </section>
     <section id="newYear">
        <div class="eventer__logo">
          <img src="../assets/concept/eventer__logo.png">
          <h2>Новый год с EVEnter</h2>
        </div>
        <ButtonsComponent color="blue"/>
     </section>
     <section id="golden">
       <div class="golden__card">
         <img src="../assets/concept/goldenprison1__image.png">
         <div class="golden__card__text">
           <h3>Golden prison:</h3>
           <p>Новый год 2023</p>
         </div>
       </div>
       <div class="golden__card">
         <img src="../assets/concept/goldenprison2__image.png">
         <div class="golden__card__text">
           <h3>Golden prison:</h3>
           <p>Новый год 2023</p>
         </div>
       </div>
       <div class="golden__card">
         <img src="../assets/concept/goldenprison3__image.png">
         <div class="golden__card__text">
           <h3>Golden prison:</h3>
           <p>Новый год 2023</p>
         </div>
       </div>
       <div class="golden__card">
         <img src="../assets/concept/goldenprison3__image.png">
         <div class="golden__card__text">
           <h3>Golden prison:</h3>
           <p>Новый год 2023</p>
         </div>
       </div>
     </section>
     <section id="summary">
       <DetailsSummaryComponent :color="'blue'"/>
     </section>
   </div>
</template>

<style lang="scss" scoped>
  .content{
    width: 100%;
    padding-top: 61px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #head__text{
    background: url(../assets/concept/head__image.png);
    width: 100%;
    h2{
      font-weight: 600;
      font-size: 40px;
      padding: 120px 0 120px 394px;
    }
  }
  #about{
    padding: 120px 0;
    width: 1132px;
    color: #F3F3F3;
    h3{
      font-weight: 600;
      font-size: 24px;
      padding-bottom: 32px;
    }
    p{
      font-family: 'Manrope', sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: #F3F3F3;
      opacity: 0.8;
    }

    .about__item{
      display: flex;
      gap: 190px;
      .about__text{
        width: 471px;
        align-items: center;
        padding: 110px 0;
      }
      .about__image{
        width: 470px;
        height: 530px;
        background: url(../assets/concept/about__image.png);
      }
    }
    .about__item__bottom{
      padding-top: 80px;
    }
  }
  #newYear{
    background: url(../assets/concept/newYearBg__image.png);
    width: 100%;
    padding: 180px 394px;
    h2{
      font-weight: 600;
      font-size: 36px;
      color: #fff;
      letter-spacing: 0.03em;
      padding-bottom: 64px;
    }
  }
  #golden{
    width: 1133px;
    display: flex;
    gap: 36px;
    padding: 140px 0;
    .golden__card{
      width: 256px;
      display: flex;
      flex-direction: column;
      gap: 22px;

      img{
        width: 100%;
      }
      .golden__card__text{
        display: flex;
        flex-direction: column;
        h3{
          font-weight: 500;
          font-size: 20px;
          text-transform: uppercase;
          color: #f3f3f3;
          display: block;
        }
        p{
          font-weight: 300;
          font-size: 16px;
          color: #f3f3f3;
          opacity: 0.5;
        }
      }
    }
  }
  #summary{
    width: 100%;
    padding: 0 150px;
    background: #141419;
  }
</style>