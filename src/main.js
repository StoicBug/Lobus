import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './plugins/router'
import i18n from './locales/i18n'


const pinia = createPinia()



createApp(App).use(router).use(i18n).use(pinia).mount('#app')
