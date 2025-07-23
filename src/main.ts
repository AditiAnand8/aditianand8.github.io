import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(router)
app.use(VueGtag, {
  property: {
    id: 'G-64G5KEKTNZ' // Replace with your Measurement ID
  }
})

app.mount('#app')
