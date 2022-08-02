import { createApp } from 'vue'
import router from './router'
import './style.css'
import 'amfe-flexible'
import App from './App.vue'

createApp(App).use(router).mount('#app')
