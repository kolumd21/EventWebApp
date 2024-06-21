<script>
import emailjs from 'emailjs-com';

export default {
   data() { 
      return{
         hoverColor: '',
         form: {
            name: '',
            organisation: '',
            email: '',
            tel: '',
         },
         rawTel: '',
         errors: {},
      }
   },
   name: 'FormComponent',
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
   methods: {
      redirect() {
         window.open(`${import.meta.env.VITE_TELEGRAM_LINK}`, '_blank');
      },
      formatTel() {
         this.validInput(event);
         this.rawTel = this.form.tel.replace(/\D/g, '');
         if (this.rawTel.length > 9) {
               this.rawTel = this.rawTel.substring(0, 9);
         }
         let formattedTel = '';
         if (this.rawTel.length > 2) {
               formattedTel = `(${this.rawTel.substring(0, 2)})`;
         }
         if (this.rawTel.length > 2 && this.rawTel.length <= 5) {
               formattedTel += ` ${this.rawTel.substring(2)}`;
         }
         if (this.rawTel.length > 5 && this.rawTel.length <= 7) {
               formattedTel += ` ${this.rawTel.substring(2, 5)} ${this.rawTel.substring(5)}`;
         }
         if (this.rawTel.length > 7) {
               formattedTel += ` ${this.rawTel.substring(2, 5)} ${this.rawTel.substring(5, 7)} ${this.rawTel.substring(7)}`;
         }
         else if (this.rawTel.length <= 2)
         {
               formattedTel = this.rawTel;
         }
         this.form.tel = formattedTel;
      },
      submitForm() {
         this.errors = this.validateForm(this.form);
         if (Object.keys(this.errors).length === 0) {
            document.querySelector('.hidden__btn').style.display = 'none';
            emailjs.send(`${import.meta.env.VITE_EMAILJS_SERVICE}`, `${import.meta.env.VITE_EMAILJS_TEMPLATE}`, this.form, `${import.meta.env.VITE_EMAILJS_PUBLICKEY}`)
               .then((response) => {
                  this.form.name = ''; this.form.organisation = ''; this.form.email = ''; this.form.tel = '';
                  document.querySelector('.alert__text').style.display = 'block';
               }, (error) => {
                  window.alert("An error occurred while sending the email.");
                  document.querySelector('.alert__text').style.display = 'none';
                  document.querySelector('.hidden__btn').style.display = 'block';
               }
            );
         }
      },
      validateForm(form) {
         let errors = {};
         if (!form.name) {
            errors.name = 'Имя обязательно.';
         }
         if (!form.organisation) {
            errors.organisation = 'Организация обязательна.';
         }
         if (!form.email) {
            errors.email = 'Email обязателен.';
         } else if (!this.validEmail(form.email)) {
            errors.email = 'Email не действителен.';
         }
         if (this.rawTel.length == 0) {
            errors.tel = 'Номер телефона обязателен.';
         } else if (this.rawTel.length < 9) {
            errors.tel = 'Номер телефона не действителен.';
         }
         this.notValidInput(errors);
         return errors;
      },
      validEmail(email) {
         let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(email);
      },
      notValidInput(errors) {
         for (let error in errors) {
            if (errors[error] && errors[error] !== '') {
               document.getElementById(error).style.borderColor = 'rgb(255, 81, 81)';
            }
         }
      },
      validInput(event) {
         this.errors[event.target.name] = '';
         document.getElementById(event.target.name).style.borderColor = 'rgba(255, 255, 255, 0.2)';
      },
      validAll() {
         for (let error in this.errors) {
            this.errors[error] = '';
            document.getElementById(error).style.borderColor = 'rgba(255, 255, 255, 0.2)';
         }
      }
   }
}
</script>

<template>
   <form @submit.prevent="submitForm()" :style="{'--button-color': buttonColor, '--button-hover-color': hoverColor}" id="form">
      <div class="input-container">
         <input type="text" v-model="form.name" id="name" name="name" placeholder="Ваше Имя" @input="validInput">
         <p v-if="errors.name">{{ errors.name }}</p>
      </div>
      <div class="input-container">
         <input type="text" v-model="form.organisation" id="organisation" name="organisation" placeholder="Организация" @input="validInput">
         <p v-if="errors.organisation">{{ errors.organisation }}</p>
      </div>
      <div class="input-container">
         <input type="text" v-model="form.email" id="email" name="email" placeholder="Email" @input="validInput">
         <p v-if="errors.email">{{ errors.email }}</p>
      </div>
      <div class="input-container phone">
         <input type="tel" v-model="form.tel" id="tel" @input="formatTel()" name="tel" placeholder="(99) 999 99-99">
         <p v-if="errors.tel">{{ errors.tel }}</p>
      </div>
      <button class="first-btn hidden__btn" @click="console.log(this.rawTel)" type="submit">Заказать звонок</button>
      <p class="alert__text">Вы успешно отправили заявку, ожидайте звонка!</p>
      <button class="second-btn" @click="redirect()" type="button">Telegram
         <img v-if="color == 'orange' || color == 'yellow'" src="../../assets/home/tg.btn-icon.png">
         <img v-if="color == 'blue'" src="../../assets/blueTelegram.png">
      </button>
   </form>
</template>

<style lang="scss" scoped>
   .first-btn{
      margin-top: 20px;
      padding: 15px 30px;
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
      padding: 15px 30px;
      background-color: #D0D0D0;
      border: 1px solid #D0D0D0;
      border-radius: 2px;
      color: var(--button-color);
      font-family: "Roboto Flex", sans-serif;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
   }

   input{
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      padding: 12px 16px;
      width: 100%;
      background-color: transparent;

      &:hover{
         border-color: white;
      }
      &:focus, &:active{
         border-color: var(--button-color);
         outline: 0;
         outline-offset: 0;
      }
   }
   
   .error-input{
      border-color: rgb(255, 81, 81);
   }

   .input-container {
      width: 100%;

      p{
         font-family: 'Roboto', sans-serif;
         font-size: 13px;
         padding-top: 5px;
         color: rgb(255, 81, 81);
      }
   }
   .phone{
      position: relative;

      &:before {
         content: "+375";
         font-family: 'Roboto', sans-serif;
         font-size: 14px;
         position: absolute;
         left: 10px;
         top: 13px;
         //transform: translateY(-11.95px);
      }
      input{
         padding-left: 45px;
      }
   }

   form{
      width: 470px;
      display: flex;
      flex-direction: column;
      gap: 12px;
   }

   .alert__text{
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: rgb(81, 255, 81);
      display: none;
   }

</style>