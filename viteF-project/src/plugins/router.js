import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import cv from "@/components/cv.vue";




const routes = [
    {path: '/', redirect: '/home' }, // To redirect root to '/home'
    {path: '/home', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/cv', name: 'cv', component: cv},
   

];


const router = createRouter({
    routes,
   history: createWebHistory(),
   scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
   },
})


export default router