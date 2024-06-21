<template>
  <router-view/>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>
          ОРГАНИЗАЦИЯ BTL В МИНСКЕ
        </h1>
        <h2>
          Более 180 мероприятий за 10 лет на высшем уровне
        </h2>
        <ButtonsComponent :color="'yellow'" />
      </div>
    </div>
  </section>
  <section id="WhatIs">
    <div class="container">
      <div class="what-title">
        <div>
          <img src="../assets/BTL/icon2.png" alt="">
        </div> 
        <h2>Что такое BTL?</h2>
      </div>
      <div class="right-summary">
        <p>
          <span>BTL</span> - это инструменты непрямой рекламы, направленные на продвижение товара/услуги и на создание положительного имиджа бренда.
        </p>
        <div>
          <h3>Виды BTL инструментов:</h3>
          <div id="drop-down">
            <details v-for="(item, index) in items" :open="openIndex == index" class="details" :class="{ 'open': openIndex == index }">
                <summary @click.prevent="handleToggle(index)">
                  <p>{{ item.title }}</p>
                  <img src="../assets/about/plus.png" class="rotatiable">
                </summary>
                <p v-if="openIndex === index" class="summary__content">{{ item.content }}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="Coca-cola">
    <div class="container">
      <div class="cola-wrapper">
        <div class="cola-text">
          <p><img src="../assets/home/comments.png">ОТЗЫВ</p>
          <h2>Coca-cola</h2>
          <p>ПРОМОАКЦИЯ</p>
          <p>“Ребята справились на все сто! Все сотрудники были довольны. Настолько организованного построения корпоратива у нас еще не былою Ни минуты не осталось для того, чтобы скучать.Еда на уровне, алкоголь на уровне, развлечения на уровне”</p>
        </div>
        <ButtonsComponent :color="'yellow'"/>
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
  <section id="Form">
    <div class="talk">
      <div class="talk-name">
        <div><img src="../assets/home/talk.png" alt=""></div>
        <h2>ДАВАЙТЕ ОБСУДИМ</h2>
      </div>
      <p>Свяжитесь с нами удобным для вас способом, вы везде ответим одинаково быстро!</p>
    </div>
    <FormComponent :color="'yellow'"/>
  </section>
  <section id="Events">
    <div class="container">
      <div class="events-wrapper">
        <div class="tab">
        <input checked id="tab-btn-1" name="tab-btn" type="radio" value="">
        <label for="tab-btn-1">AКЦИИ</label>
        <input id="tab-btn-2" name="tab-btn" type="radio" value="">
        <label for="tab-btn-2">ДЕГУСТАЦИИ</label>
        <input id="tab-btn-3" name="tab-btn" type="radio" value="">
        <label for="tab-btn-3">ВЫСТАВКИ</label>
        <input id="tab-btn-4" name="tab-btn" type="radio" value="">
        <label for="tab-btn-4">ВЫСТАВКИ</label>
        <input id="tab-btn-5" name="tab-btn" type="radio" value="">
        <label for="tab-btn-5">ВЫСТАВКИ</label>
        <div class="eve-cards tab-content" id="content-1">
          <div class="card-wrapper">
            <div class="card">
              <img src="../assets/BTL/photo1.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo2.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo3.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo3.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="eve-cards tab-content" id="content-2">
          <div class="card-wrapper">
            <div class="card">
              <img src="../assets/BTL/photo2.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo3.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo1.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo3.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="eve-cards tab-content" id="content-3">
          <div class="card-wrapper">
            <div class="card">
              <img src="../assets/BTL/photo3.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo1.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo1.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo2.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="eve-cards tab-content" id="content-4">
          <div class="card-wrapper">
            <div class="card">
              <img src="../assets/BTL/photo3.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo3.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo1.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo1.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="eve-cards tab-content" id="content-5">
          <div class="card-wrapper">
            <div class="card">
              <img src="../assets/BTL/photo1.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo3.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo2.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/BTL/photo1.png" alt="">
              <div>
                <h2>Golden prison:</h2>
                <p>Новый год 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  <section>
    <DetailsSummaryComponent :color="'yellow'" />
  </section>
</template>

<script>
import ButtonsComponent from './Modules/ButtonsComponent.vue';
import DetailsSummaryComponent from './Modules/DetailsSummaryComponent.vue';
import FormComponent from './Modules/FormComponent.vue';
  export default{
      data(){
        return{
          hoverColor: '',
         items: [
            { title: 'Промо-акции', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Презентации', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Конференции', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Выставки', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Дегустации', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Интерактивные зоны', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Промоутеры', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            ].map((item, index) => ({ ...item, isOpen: index === 0 })),
         openIndex: null,
         oldIndex: null,
        };
      },
      components:{
        ButtonsComponent,
        FormComponent,
        DetailsSummaryComponent
      },
    methods: {
      handleToggle(index) {
         this.openIndex = this.openIndex === index ? null : index;
      },
      redirect() {
         window.open(`${import.meta.env.VITE_TELEGRAM_LINK}`, '_blank');
      },
   },
  }
</script>

<style lang="scss" scoped>
  h1{
    font-size: 40px;
    font-weight: 600;
  }
  h2{
    font-size: 20px;
    font-weight: 500;
  }
  .hero{
    background-image: url(../assets/BTL/btl_hero.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .container{
    padding: 0 230px;
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
  }
  .what-title{
    display: flex;
    align-items: center;
    gap: 16px;
    h2{
      font-size: 36px;
      font-weight: 600;
    }
  }
  #WhatIs{
    .container{
      padding: 140px 230px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
  .right-summary{
    >p{
      max-width: 620px;
    }
    span{
      font-size: 18px;
      font-family: "Manrope";
      font-weight: 600;
      color: #FFA41B;
    }
    h3{
      font-size: 18px;
      font-family: "Manrope";
      font-weight: 600;
      color: #FFA41B;
      margin-top: 32px;
      margin-bottom: 24px;
    }
  }
  .details{
      width: 635px;
      border-top: rgba(255, 255, 255, 0.1) 1px solid;
      font-family: 'Manrope';
      letter-spacing: 0.03em;

      summary{
         user-select: none;
         width: 100%;
         list-style: none;
         font-size: 18px;
         padding: 17px 0;
         display: flex;
         justify-content: space-between;
         align-items: center;

         &::-webkit-details-marker {
            display: none;
         }

         img{
            width: 21px;
            height: 21px;
         }
         &:hover{
            cursor: pointer;
         }
      }
      .summary__content{
         font-size: 15px;
         color: rgba(255, 255, 255, 0.8);
         padding-bottom: 17px;
         padding-left: 5px;
      }
      &.open {
         summary {
            img {
               transition: transform 0.3s ease-in-out;
               transform: rotate(45deg);
            }
         }
      }
      &:not(.open) {
         summary {
            img {
               transition: transform 0.3s ease-in-out;
               transform: rotate(0deg);
            }
         }
      }
   }

   .details:nth-child(5){
      border-bottom: rgba(255, 255, 255, 0.1) 1px solid;
   }
   #Coca-cola{
    background-image: url(../assets/BTL/cola-back.png);
    background-size: cover;
    background-repeat: no-repeat;
    .container{
      display: flex;
      justify-content: left;
    }
    .cola-wrapper{
      display: flex;
      padding: 120px 0;
      flex-direction: column;
      height: 700px;
      width: 636px;
      justify-content: space-between;

      .cola-text{
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
          color: #8B8B89;
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
        background: linear-gradient(to right,#E38B06,#3E2A0B 23%,#3E290B 83%,#E38B06);
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
            background: #EA920E;
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
            background: #EA920E;
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
            list-style: none;
            color: #95959A;
            font-size: 14px;
            font-weight: 300;
            li {
              padding-left: 15px;
              background: url(../assets/BTL/list-style-yellow.png) 0 0.6em no-repeat;
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
  #Form{
    background-color: #0A0A0B;
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
        color: #4F4F52;
      }
    }
  }
  #Events{
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
    .card-wrapper{
      display: flex;
      justify-content: space-between;
      img{
        max-height: 300px;
      }
    }
    #tab-btn-1:checked~#content-1,
    #tab-btn-2:checked~#content-2,
    #tab-btn-3:checked~#content-3,
    #tab-btn-4:checked~#content-4,
    #tab-btn-5:checked~#content-5 {
      display: block;
    }
  } 
</style>