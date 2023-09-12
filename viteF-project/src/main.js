import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/style.css'
import App from '@/App.vue'
import router from '@/plugins/router'
import  'vue-recaptcha'

import '@vueuse/motion'
import 'motion'
import 'vue-rough-notation'
import '@emailjs/browser'


createApp(App).use(router).mount('#app')


