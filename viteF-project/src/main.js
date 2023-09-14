import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/style.css'
import App from '@/App.vue'
import router from '@/plugins/router'
import '@vueuse/motion'
import 'motion'
import 'vue-rough-notation'
import '@emailjs/browser'
import 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


createApp(App).use(router).mount('#app')


