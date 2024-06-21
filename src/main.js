import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VTextField, VForm } from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './router.js'
import App from './App.vue'

import './assets/main.css'

const vuetify = createVuetify({
   components:{
      VTextField,
      VForm,
   },
   directives,
   theme: {
       defaultTheme: 'dark',
   }
});

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
