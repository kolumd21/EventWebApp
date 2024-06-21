<script>
export default {
   data() { 
      return{
         hoverColor: '',
      }
   },
   name: 'ButtonsComponent',
   props: ['color'],
   methods: {
      navigate() {
         this.$router.push({ name: 'Contacts' });
      },
      redirect() {
         //TODO EDIT TG LINK
         window.open(`${import.meta.env.VITE_TELEGRAM_LINK}`, '_blank');
      },
      scrollToForm() {
         const element = document.querySelector('#form');
         if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
   },
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
}
</script>

<template>
   <div class="btn-wrapper" :style="{'--button-color': buttonColor, '--button-hover-color': hoverColor}">
      <button class="first-btn" type="button" @click="scrollToForm()">Заказать звонок</button>
      <button class="second-btn" @click="redirect()" type="button">Telegram
         <img v-if="color == 'orange' || color == 'yellow'" src="../../assets/home/tg.btn-icon.png">
         <img v-if="color == 'blue'" src="../../assets/blueTelegram.png">
      </button>
   </div>
</template>

<style scoped lang="scss">
   .first-btn{
      user-select: none;
      padding: 12px 30px;
      background-color: var(--button-color);
      border: 1px solid var(--button-color);
      border-radius: 2px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      color: #F3F3F3;
      font-family: "Roboto Flex", sans-serif;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      transition: 0.5s;
      &:hover{
         background-color: var(--button-hover-color);
         border-color: var(--button-hover-color);
         transition: 0.5s;
      }
   }
   
   .second-btn{
      user-select: none;
      padding: 12px 30px;
      background-color: #D0D0D0;
      border: 1px solid #D0D0D0;
      border-radius: 2px;
      color: var(--button-color);
      font-family: "Roboto Flex", sans-serif;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
   }

   .btn-wrapper{
      display: flex;
      gap: 16px;
   }
</style>