<script>
import FormComponent from './Modules/FormComponent.vue';
    export default{
        components:{
            FormComponent
        },
        methods:{
            openTab(tabId) {
                var tabContents = document.getElementsByClassName('tabs-content');
                for (var i = 0; i < tabContents.length; i++) {
                    tabContents[i].style.display = 'none';
                }

                var tabs = document.getElementsByClassName('tabs');
                for (var i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('active-tab');
                }

                document.getElementById(tabId).style.display = 'block';
                document.querySelector('[onclick="openTab(\'' + tabId + '\')"]').classList.add('active-tab');
            }
            
        }
    }
    
</script>

<template>
    <router-view />
    <section id="Portfolio">
        <div class="container">
            <div class="title">
                <h1>ПОТФОЛИО</h1>
                <div class="tab">
                    <input checked id="tab-1" name="tab" type="radio" value="">
                    <label class="tabs" for="tab-1" @click="openTab('tab1')">КОРПОРОТИВЫ</label>
                    <input id="tab-2" name="tab" type="radio" value="">
                    <label class="tabs" for="tab-2" @click="openTab('tab2')">BTL</label>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="events-wrapper container tabs-content active-content" id="tab1">
            <div class="tab">
                <input checked id="tab-btn-1" name="tab-btn" type="radio" value="">
                <label for="tab-btn-1">НОВЫЙ ГОД</label>
                <input id="tab-btn-2" name="tab-btn" type="radio" value="">
                <label for="tab-btn-2">ЛЕТНИЕ</label>
                <input id="tab-btn-3" name="tab-btn" type="radio" value="">
                <label for="tab-btn-3">ХЕЛЛОУИН</label>
                <input id="tab-btn-4" name="tab-btn" type="radio" value="">
                <label for="tab-btn-4">ЗИМНИЕ</label>
                <input id="tab-btn-5" name="tab-btn" type="radio" value="">
                <label for="tab-btn-5">ТИМБИЛДИНГ</label>
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
        <div id="tab2" class="tab-content">

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
        <FormComponent :color="'orange'"/>
    </section>
</template>

<style lang="scss" scoped>
.container {
    padding: 0 230px;
}

#Portfolio {
    background-color: rgba(0, 0, 0, 0.6);
    .title {
        padding-top: 186px;
        padding-bottom: 123px;
        h1{
            font-size: 40px;
            font-weight: 600;
            opacity: .9;
            font-family: 'Roboto Flex';
            margin-bottom: 32px;
        }
    }

    .tab {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;

        >input[type="radio"] {
            display: none;
        }

        >label {
            cursor: pointer;
            font-weight: 500;
            font-size: 18px;
            letter-spacing: .03em;
            color: #4B4B4F;
            border-bottom: 1px solid transparent;
            transition: color .15s ease-in-out, border-color .15s ease-in-out;

            &:hover {
                border-bottom-color: #F86F03;
            }
        }

        >input[type="radio"]:checked+label {
            cursor: default;
            color: #F3F3F3;
            border-bottom-color: #F86F03;
        }
    }

    .tab-content {
        display: none;
        width: 100%;
    }

}
.events-wrapper{
    margin-top:32px ;
    margin-bottom: 140px;
    .tabs-content{
        display: none;
    }
    .active-content{
        display: block;
    }
    .tab {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;

        >input[type="radio"] {
            display: none;
        }

        >label {
            cursor: pointer;
            font-weight: 500;
            font-size: 18px;
            letter-spacing: .03em;
            color: #4B4B4F;
            border-bottom: 1px solid transparent;
            transition: color .15s ease-in-out, border-color .15s ease-in-out;

            &:hover {
                border-bottom-color: #F86F03;
            }
        }

        >input[type="radio"]:checked+label {
            cursor: default;
            color: #F3F3F3;
            border-bottom-color: #F86F03;
        }
    }

    .tab-content {
        display: none;
        width: 100%;
    }
    .card-wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 48px;

        img {
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
#Form{
    background: url(../assets/Portfolio/contactBack.png);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 172px 0;
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
</style>