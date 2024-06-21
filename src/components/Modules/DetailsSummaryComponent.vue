<script>
export default {
   props: ['color'],
   computed: {
      buttonColor() {
         if (this.color == 'orange') {
            this.hoverColor = '#3B49D3';
            return '#D85F00';
         } else if (this.color == 'blue') {
            this.hoverColor = '#D85F00';
            return '#3B49D3';
         } else if (this.color == 'yellow') {
            this.hoverColor = '#3B49D3';
            return '#E38B06';
         }
         else {
            this.hoverColor = this.color;
            return this.color;
         } 
      }
   },
   data() {
      return {
         hoverColor: '',
         items: [
            { title: 'Как рассчитать стоимость', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Как рассчитать стоимость', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Как рассчитать стоимость', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Как рассчитать стоимость', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Как рассчитать стоимость', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            ].map((item, index) => ({ ...item, isOpen: index === 0 })),
         openIndex: null,
         oldIndex: null,
      };
   },
   methods: {
      handleToggle(index) {
         this.openIndex = this.openIndex === index ? null : index;
      },
      redirect() {
         window.open(`${import.meta.env.VITE_TELEGRAM_LINK}`, '_blank');
      },
   },
};
</script>

<template>
   <div class="selection__drop-down" :style="{'--button-color': buttonColor, '--button-hover-color': hoverColor}">
      <div class="caption__drop-down">
         <h2>мы подготовили ответы на ваши вопросы</h2>
         <p>Не нашли нужный ответ?<br>Напишите нам в Telegram. Отвечаем в течение 15 минут.</p>
         <button class="caption__btn" type="button" @click="redirect()">Задать вопрос в Telegram<img src="../../assets/bwTelegram.png"></button>
      </div>
   
      <div id="drop-down">
         <details v-for="(item, index) in items" :open="openIndex == index" class="details" :class="{ 'open': openIndex == index }">
            <summary @click.prevent="handleToggle(index)">
               <p>{{ item.title }}</p>
               <img src="../../assets/about/plus.png" class="rotatiable">
            </summary>
            <p v-if="openIndex === index" class="summary__content">{{ item.content }}</p>
         </details>
      </div>
   </div>
 </template>
 
 <style scoped lang="scss">
   .selection__drop-down{
      padding: 150px 229px;
      display: flex;
      justify-content: space-between;
   }

   #drop-down{
     width: 43%;
   }

   .details{
      width: 100%;
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

   .caption__drop-down{
     width: 470px;

      h2{
         text-transform: uppercase;
         font-size: 36px;
         letter-spacing: 0.03em;
         text-align: left;
      }
      p{
         font-family: 'Manrope';
         font-size: 18px;
         letter-spacing: 0.03em;
         font-weight: 300;
         padding-top: 10px;
         padding-bottom: 32px;
      }
      button{
         padding: 15px 30px;
         font-family: 'Roboto Flex';
         font-weight: 500;
         font-size: 16px;
         letter-spacing: -0.02em;
         background-color: var(--button-color);

         &:hover{
            background-color: var(--button-hover-color);
            transition: 0.5s;
         }

         img{
            width: 17px;
            margin-left: 10px;
         }
      }
   }
</style>