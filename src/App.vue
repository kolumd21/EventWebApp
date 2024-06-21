<script>

</script>

<template>
  <header>
    <div class="header-logo">
      <router-link class="header-name" :to="{ name: 'Home' }"><img src="./assets/logoText.png"></router-link>
    </div>

    <div class="header-links">
      <router-link :to="{ name: 'Coop' }">Корпоративы</router-link>
      <router-link :to="{ name: 'BTL' }">BTL</router-link>
      <router-link :to="{ name: 'BTL' }">Галерея</router-link>
      <router-link :to="{ name: 'BTL' }">О нас</router-link>
      <router-link :to="{ name: 'Contacts' }">Контакты</router-link>
    </div>
    <div class="header-contacts">
      <a href="tel:+375296677654" class="header-contact-item">
        <img src="./assets/phone.png">
        +375 (29) 667 76  54
      </a>
      <a href="mailto:eventer@gmail.com" class="header-contact-item">
        <img src="./assets/mail.png">
        eventer@gmail.com
      </a>
    </div>
  </header>
  <router-view>
  </router-view>
  <footer>
    <img src="./assets/logoText.png" class="footer-logo">
    <hr>
    <div class="footer-content">
      <div class="footer-copyright">
        <h3>© 2022 Eventer.by</h3>
        <h3>Все права защищены</h3>
      </div>
      <div class="footer-links">
        <router-link :to="{ name: 'Coop' }">Корпоративы</router-link>
        <div class="vl"></div>
        <router-link :to="{ name: 'BTL' }">BTL</router-link>
        <div class="vl"></div>
        <router-link :to="{ name: 'BTL' }">Галерея</router-link>
        <div class="vl"></div>
        <router-link :to="{ name: 'Contacts' }">Контакты</router-link>
      </div>
      <div class="footer-contact">
        <a href="tel:+375296677654" class="footer-contact-item">
          <img src="./assets/bwPhone.png">
          +375 (29) 667 76  54
        </a>
        <a href="mailto:eventer@gmail.com" class="footer-contact-item">
          <img src="./assets/bwMail.png">
          eventer@gmail.com
        </a>
      </div>
      <div class="footer-social">
        <a href="t.me_eventer" class="footer-social-item">
          <img src="./assets/bwTelegram.png">
          t.me_eventer
        </a>
        <a href="inst.com/eventer_by" class="footer-social-item">
          <img src="./assets/bwInstagram.png">
          eventer_by
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  header{
    position: fixed;
    width: 100%;
    background-color: rgba(10, 10, 11, 0.8);
    display: flex;
    justify-content: space-between;
    padding: 0 64px;
    height: 62px;
    align-items: center;
    z-index: 5;

    a{
      text-decoration: none;
      color: white;
      font-family: 'Manrope';
    }
  
    .header-logo{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 105px;
      font-family: 'Manrope';
      img{
        height: 18px;
      }
    }

    .header-links{
      display: flex;
      gap: 24px;

      a{
        font-size: 14px;
        font-weight: 400;
      }
    }

    .header-contacts{
      display: flex;
      flex-direction: column;

      a{
        font-size: 14px;
        font-weight: 300;

        img{
          width: 10px;
          margin-right: 8px;
        }
      }
    }
  }
  footer{
    background-color: #080809;
    padding: 30px 64px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    hr {
      background: rgba(255, 255, 255, 0.2);
      height: 1px;
      border: none;
    }
    
    a{
      text-decoration: none;
      color: #F3F3F3;
      font-weight: 300;
    }

    h3, .footer-links a{
      font-weight: 400;
      color: rgba(243, 243, 243, 0.6);
      font-family: 'Manrope';
    }
    
    .footer-logo {
      width: 105px;
    }

    .footer-content{
      display: flex;
      justify-content: space-between;
    }

    .footer-copyright, .footer-contact, .footer-social{
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-copyright h3{
      font-size: 14px;
      font-weight: 300;
    }
    
    .footer-contact a img, .footer-social a img{
      margin-right: 8px;
    }

    .footer-links {
      display: flex;
      gap: 40px;

      .vl{
        height: 16px;
        border-left: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
    .footer-contact, .footer-social{
      opacity: 60%;
    }

    .footer-contact-item{
      font-weight: 300;
    }

    .footer-social-item{
      img{
        width: 13px;
      }
    }
  }
</style>
