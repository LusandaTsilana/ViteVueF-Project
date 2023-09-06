import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/style.css'
import App from '@/App.vue'
import router from '@/plugins/router'
import '@/firebase/init.js'
import '@vueuse/motion'
import 'vue-rough-notation'




createApp(App).use(router).mount('#app')


