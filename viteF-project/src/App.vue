<template>
    <div id="app">
      <Navbar/> <!-- Global component -->
      <router-view /><!-- Render the matched view based on the current route -->
      <FooterBand/>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'; // Import global component Nav
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import '@/style.css'; // Import main style.css file
  import FooterBand from '@/components/FooterBand.vue';

  export default {
    components: {
      Navbar,
      FooterBand,
      
    }
  };
  </script>
  
  <style>
 
  </style>
  
