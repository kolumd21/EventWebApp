<template>
  <router-view/>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>
          Идеи, вдохновленные вами -<br>
          организуются нами
        </h1>
        <div class="hero-buttons">
          <button class="first-btn">Заказать звонок</button>
          <button class="second-btn">Telegram<img src="../assets/home/tg.btn-icon.png"></button>
        </div>
      </div>
    </div>
  </section>
  <section id="talants">
    <div class="container">
      <div class="talant-wrapper">
        <div class="talant-left">
          <div>
            <img src="../assets/logoText.png" alt="">
          </div>
          <h2>
            Объединение<br>талантов
          </h2>
        </div>
        <div class="talant-right">
          <div class="card-wrapper">
            <div class="card">
              <div>
                <img src="../assets/home/time.png" alt="">
              </div>
              <p>ОПЫТА</p>
              <h3>25 лет</h3>
            </div>
            <div class="card">
              <div>
                <img src="../assets/home/ivents.png" alt="">
              </div>
              <p>МЕРОПРИЯТИЙ</p>
              <h3>150+</h3>
            </div>
            <div class="card">
              <div>
                <img src="../assets/home/organizations.png" alt="">
              </div>
              <p>ОРГАНИЗАЦИЙ</p>
              <h3>50+</h3>
            </div>
          </div>
          <p>
            Уже более 15 лет мы работаем в сфере организации мероприятий. 
            За это выремя нам удалось. Мы очень рады вам тут! Опыта у нас много 
            так что заказывайте корпораты!
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="Golden_prison">
    <div class="container">
      <div class="prison-wrapper">
        <div class="prison-text">
          <p><img src="../assets/home/comments.png">ОТЗЫВ</p>
          <h2>Golden prison</h2>
          <p>НОВЫЙ ГОД</p>
          <p>“Ребята справились на все сто! Все сотрудники были довольны. Настолько организованного построения корпоратива у нас еще не былою Ни минуты не осталось для того, чтобы скучать.Еда на уровне, алкоголь на уровне, развлечения на уровне”</p>
        </div>
        <div class="prison-button">
          <button class="first-btn">Заказать звонок</button>
          <button class="second-btn">Telegram<img src="../assets/home/tg.btn-icon.png"></button>
        </div>
      </div>
    </div>
  </section>
  <section id="Organization">
    <div class="container organization_wrapper">
      <h2>
        ЭТАПЫ ОРГАНИЗАЦИИ С EVENTER
      </h2>
      <div class="stages">
        <hr class="stages-line">
        <div class="stages-points">
          <div class="point">
            <div class="first-pt"><h3>1</h3></div>
            <h3>ВАШ ЗАПРОС</h3>
            <p>Свяжитесь с нами удобным для вас способом, вы везде ответим одинаково быстро!</p>
          </div>
          <div class="point">
            <div class="second-pt"><h3>2</h3></div>
            <h3>ОБСУЖДЕНИЕ</h3>
            <p>Мы обсудим ваши пожелания и предполагаемый бюджет, поможем свежими идеями!</p>
          </div>
          <div class="point">
            <div class="third-pt"><h3>3</h3></div>
            <h3>НАШ РЕСЕРЧ</h3>
            <p>Оставьте это нам! Мы подберем для вас лучшие: </p>
            <ul>
              <li>Локацию</li>
              <li>Развлечения</li>
              <li>Меню</li>
              <li>Ведущего</li>
            </ul>
          </div>
          <div class="point">
            <div class="fourth-pt"><h3 >4</h3></div>
            <h3>ПРЕДЛОЖЕНИЕ</h3>
            <p>Мы вернемся к вам с:</p>
            <ul>
              <li>Подробным планом мероприятия</li>
              <li>Коммерческим предложением</li>
              <li>Выпиской расходов</li>
            </ul>
            <p>После  совместного редактирования и согласования начинается подготовка.</p>
          </div>
          <div class="point">
            <div class="last-pt"><img src="../assets/home/done.png"></div>
            <h3>ЛУЧШЕЕ МЕРОПРИЯТИЕ НА ВАШ БЮДЖЕТ!</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="CorporateEv">
    <div class="corp-left">
      <div class="tab">
        <input checked id="tab-btn-1" name="tab-btn" type="radio" value="">
        <label for="tab-btn-1">Корпоративы</label>
        <input id="tab-btn-2" name="tab-btn" type="radio" value="">
        <label for="tab-btn-2">BTL</label>
        <div class="corp-text tab-content" id="content-1">
          <h2>ТЕКСТ ПРО КОРПОРАТЫ</h2>
          <ul>
            <li>Новый Год</li>
            <li>8 Марта / 23 Февраля</li>
            <li>День Рождения Копании</li>
            <li>Летние</li>
            <li>Зимние</li>
            <li>Многое Другое..</li>
          </ul>
          <a>Узнать подробнее</a>
        </div>
        <div class="corp-text tab-content" id="content-2">
          <h2>ТЕКСТ ПРО BTL</h2>
          <ul>
            <li>Новый Год</li>
            <li>8 Марта / 23 Февраля</li>
            <li>День Рождения Копании</li>
            <li>Летние</li>
            <li>Зимние</li>
            <li>Многое Другое..</li>
          </ul>
          <a>Узнать подробнее</a>
        </div>
      </div>
    </div>
    <div class="corp-right"></div>
  </section>
  <section id="Form">
    <div class="talk">
      <div class="talk-name">
        <div><img src="../assets/home/talk.png" alt=""></div>
        <h2>ДАВАЙТЕ ОБСУДИМ</h2>
      </div>
      <p>Свяжитесь с нами удобным для вас способом, вы везде ответим одинаково быстро!</p>
    </div>
    <FormComponent :color="'orange'"/>
  </section>
  <section id="Slider">
    <EventsCarouselComponent/>
  </section>
  <section id="Choise">
    <div class="container">
      <div class="hero-content bottom">
        <div>
          <h1>
            Они выбрали нас
          </h1>
          <p>
            И остались довольны бла бла бла и вы тоже 
            нас заказыайте потому то нам доверяет более 
            45 организаций постоянных клиентов
          </p>
        </div>
        <div class="hero-buttons">
          <button class="first-btn">Заказать звонок</button>
          <button class="second-btn">Telegram<img src="../assets/home/tg.btn-icon.png"></button>
        </div>
      </div>
    </div>  
  </section>
  <section id="Summary">
    <DetailsSummaryComponent :color="'orange'" />
  </section>
</template>

<script>
  import EventsCarouselComponent from './Modules/EventsCarouselComponents.vue';
  import FormComponent from './Modules/FormComponent.vue';
  import DetailsSummaryComponent from './Modules/DetailsSummaryComponent.vue';
  export default{
      data(){
        return{

        }
      },
      components:{
        FormComponent,
        EventsCarouselComponent,
        DetailsSummaryComponent
      }
  }
  
</script>

<style lang="scss" scoped>

  %first-btn{
    padding: 15px 30px;
    background-color: #C15500;
    border: 1px solid #C15500;
    border-radius: 2px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #F3F3F3;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
      background-color: #525FE1;
      border-color: #525FE1;
      transition: 0.5s;
    }
  }
  %second-btn{
    padding: 15px 30px;
    background-color: #D0D0D0;
    border: 1px solid #D0D0D0;
    border-radius: 2px;
    color: #D85F00;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }
  h1{
    letter-spacing: .03em;
  }
  h2{
    letter-spacing: .03em;
    text-transform: uppercase;
  }
  h3{
    letter-spacing: .03em;
    text-transform: uppercase;
  }
  .hero{
    background-image: url(../assets/home/home_hero.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .container{
    padding: 0 230px;
  }
  .first-btn{
    @extend %first-btn;
  }
  .second-btn{
    display: flex;
    align-items: center;
    gap: 10px;
    @extend %second-btn;
  }
  .hero-content{
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 32px;

    h1{
      font-size: 40px;
      font-weight:500;
      line-height: 60px;
      color: #F3F3F3;
    }
    .hero-buttons{
      display: flex;
      gap: 16px;
    }
    
  }
  .talant-wrapper{
    padding: 180px 0;
    display: flex;
    justify-content: space-between;

    .talant-left{
      display: flex;
      flex-direction: column;
      gap: 24px;

      img{
        height: 24px;
      }
      h2{
        font-family: "Roboto Flex";
        font-weight: 600;
        font-size: 36px;
        color: #F3F3F3;
      }
    }
    .talant-right{
      width: 636px;
      display: flex;
      flex-direction: column;
      gap: 32px;
      color: #F3F3F3;

      .card-wrapper{
        display: flex;
        justify-content: space-between;
        
        .card{
          padding: 12px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          background:linear-gradient(to bottom right,#0A0A0B, #0F0F11);
          gap: 14px;
          width: calc(33% - 32px);

          p{
            font-weight: 200;
            font-size: 14px;
            color: #F3F3F3;
          }
          h3{
            font-family: "Roboto Flex";
            font-weight: 600;
            font-size: 24px;
            opacity: 0.9;
          }
        }
      }
      p{
        font-family: "Manrope";
        font-weight: 400;
        font-size: 18px;
        color: #48484B;
      }

    }
  }
    
  #Golden_prison{
    background-image: url(../assets/home/golden_prison.png);
    background-size: cover;
    background-repeat: no-repeat;
    .container{
      display: flex;
      justify-content: right;
    }
    .prison-wrapper{
      display: flex;
      padding: 140px 0;
      flex-direction: column;
      height: 780px;
      width: 636px;
      justify-content: space-between;

      .prison-text{
        display: flex;
        flex-direction: column;
        h2{
          font-size: 36px;
          font-weight: 600;
          line-height: 52px;
          letter-spacing: .03em;
          opacity: .9;
        }
        p{
          font-size: 18px;
          font-weight: 400;
          color: #F3F3F3;
        }
        p:nth-child(1){
          display: flex;
          gap: 2px;
          align-items: center;
          margin-bottom: 16px;
        }
        p:nth-child(3){
          margin-top: 8px;
        }
        p:nth-child(4){
          font-weight: 300;
          letter-spacing: .03em;
          margin-top: 32px;
        }
      }
      .prison-button{
        display: flex;
        gap: 16px;
      }
    }
  }
  .organization_wrapper{
    padding-top: 180px;
    padding-bottom: 180px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    h2{
      font-size: 36px;
      font-weight: 600;
      color: #F3F3F3;
      opacity: .9;
    }
    .stages{
      .stages-line{
        width: 80%;
        background: linear-gradient(to right,#F86F03,#3E230B 23%,#3E230B 83%,#F86F03);
        height: 5px;
        border: none;
        margin-left: 21px;
        margin-bottom: -22px;
      }
      .stages-points{
        display: flex;

        .point{
          width: 20%;
          div{
            width: 42px;
            height: 42px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            h3{
              color: #F3F3F3;
              font-size: 20px;
              font-weight: 600;
              opacity: .9;
            }
          }
          .first-pt{
            background: #CF5B00;
          }
          .second-pt{
            background: linear-gradient(#46290F,#321505);
          }
          .third-pt{
            background: linear-gradient(#46290F,#321505);
          }
          .fourth-pt{
            background: linear-gradient(#46290F,#321505);
          }
          .last-pt{
            background: #CF5B00;
          }
          >h3{
            margin-top: 42px;
            font-size: 18px;
            font-weight: 600;
            opacity: .9;
          }
          p{
            margin-top: 12px;
            color: #95959A;
            font-size: 14px;
            font-weight: 300;
          }
          ul{
            margin-top: 12px;
            list-style:none;
            color: #95959A;
            font-size: 14px;
            font-weight: 300;
            li {
              padding-left: 15px;
              background: url(../assets/home/list-style.png) 0 0.6em no-repeat;
            }
          }
          .fourth-pt ~ ul{
            margin-top: 10px;
          }
          .fourth-pt ~ ul~p{
            margin-top: 10px;
          }
        }
      }
    }
  }
  #CorporateEv{
    background-color: #141419;
    display: flex;
    .corp-left{
      padding: 140px 0 192px 230px;
      width: 55%;
      display: flex;
      flex-direction: column;
      gap: 40px;

      .corp-sweetchs{
        display: flex;
        gap: 32px;

        .sweetch{
          padding-bottom: 12px;
          border-bottom: 1px solid #f86d0300;
          }
        .active{
          border-bottom: 1px solid #F86F03;
          label{
            color: #F3F3F3;
          }
        }
      }
      .corp-text{
        h2{
          font-size: 36px;
          font-weight: 600;
          opacity: .9;
          line-height: 52px;
        }
        ul{
          list-style: none;
          color: #4B4B4F;
          font-size: 18px;
          font-weight: 300;
          margin-bottom: 40px;
        }
        ul li::before {
          content: "–";
          display: inline-block;
          width: 1em;
          margin-left: -1em;

        }
        ul li {
          margin-left: 0;
          padding-left: 1em;
        }
        a{
        text-decoration:underline;
        &:hover{
          cursor: pointer;
        }
      }
      }
     
    }
    .corp-right{
      width: 45%;
      background-image: url(../assets/home/Corp.png);
      background-size: cover;
      background-repeat: no-repeat;
    }
  } 
  .tab {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    > input[type="radio"] {
    display: none;
    }
    > label {
      cursor: pointer;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: .03em;
      color:#4B4B4F;
      border-bottom: 1px solid transparent;
      transition: color .15s ease-in-out, border-color .15s ease-in-out;
      &:hover {
        border-bottom-color: #F86F03;
      }
    }
    > input[type="radio"]:checked + label {
      cursor: default;
      color: #F3F3F3;
      border-bottom-color: #F86F03;
    } 
  }
  .tab-content {
    display: none;
    width: 100%;
  }
  #tab-btn-1:checked~#content-1,
  #tab-btn-2:checked~#content-2 {
    display: block;
  }
  
  #Form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    .talk{
      width: 470px;
      margin-bottom: 48px;
      .talk-name{
        display: flex;
        align-items: center;
        gap: 10px;
        h2{
          font-weight: 600;
          font-size: 36px;
          opacity: .9;
        }
      }
      p{
        padding-top: 12px;
        font-size: 18px;
        color: #48484B;
      }
    }
  }
  #Slider{
    padding: 70px 0 80px 0 ;
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
  }
  #Choise{
    background-image: url(../assets/home/home_hero.png);
    .bottom{
      height: 680px;
    }
    p{
      width: 350px;
    }
  }
  
</style>
