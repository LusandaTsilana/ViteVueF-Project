import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Work from "@/components/Work.vue";
import Contact from "@/components/Contact.vue";

const routes = [
    {path: '/', redirect: '/home' }, // To redirect root to '/home'
    {path: '/home', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/work', name: 'Work', component: Work},
    {path: '/contact', name: 'Contact', component: Contact},
    //{path: '/edit/:id', name:'Edit', component: Edit},
];

const router = createRouter({
    routes,
   history: createWebHistory(),
})

export default router