<template>
  <div id="app">
    <Navbar />
    <!-- Global component -->
    <router-view /><!--Render the matched view based on the current route-->
    <!--<scrollbutton/>-->
    <FooterBand />
  </div>
</template>
  
<script>
import Navbar from '@/components/Navbar.vue'; // Import global component Nav
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@/style.css'; // Import main style.css file
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import cv from "@/components/cv.vue";
//import scrollbutton from '@/components/scrollbutton.vue';
import FooterBand from '@/components/FooterBand.vue';



export default {
  components: {
    Navbar,
    Home,
    About,
    Projects,
    Contact,
    cv,
    //scrollbutton,
    FooterBand,
  }
};
</script>
  
<style></style>
  
