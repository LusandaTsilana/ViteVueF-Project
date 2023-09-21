
<template>
  <nav class="navbar navbar-expand-lg shadow-sm" id="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" id="logo"><router-link to="/home"><img src="@/assets/lusandalogo.png" alt="Logo" width="53.08" height="50" class="d-inline-block align-text-top"></router-link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu" >
      <span v-if="!MenuOpen"  class="navbar-toggler-icon"></span>
      <span  v-if="MenuOpen"><i class="bi bi-x-lg" id="exit"></i></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarNav">
      <ul v-if="MenuOpen" class="navbar-nav">
        <li class="nav-item">
          <router-link to="/home"><a class="nav-link" exact v-bind:class="{ 'nav-link-active': $route.path === '/home' }">HOME</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about"><a class="nav-link" exact v-bind:class="{ 'nav-link-active': $route.path === '/about' }">ABOUT</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects"><a class="nav-link" exact v-bind:class="{ 'nav-link-active': $route.path === '/projects' }">PROJECTS</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact"><a class="nav-link" exact v-bind:class="{ 'nav-link-active': $route.path === '/contact' }">CONTACT</a></router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>

export default {
  data() {
    return {
      MenuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.MenuOpen = !this.MenuOpen;
    },
  },
};
  
  
  </script>

<style scoped>
nav{
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 5;
}

#navbar{
    background-color: rgba(202, 220, 199, 1);
    
}

img{
    margin-left: 50px;
}

.nav-link-active {
  /* Your underline styles for the active link */
  font-weight: bold;
}

nav ul li{
  display: inline-block;
  list-style: none;
}

nav ul li a{
  color: black;
  text-decoration: none;
  position: relative;
}

nav ul li a::after{
  content: '';
  width: 0%;
  height: 1.5px;
  position: absolute;
  bottom: -5px; 
  left: 50%;
  transform: translateX(-50%);
  background: black;
  transition: width 0.3s;
}

nav ul li a:hover{
  color: black;
}

nav ul li a:hover::after{
  width: 50%;
}



@media (min-width: 992px) {
    #navbarNav{
       display: flex;
       flex-direction: row;
       justify-content: center;

    }     
     .navbar-nav{
        font-size: 16px;
      }

      #exit{
        display: none;
        font-size: 2rem;

      }

      
    }


    @media (max-width: 992px) {
  #navbar{
    background-color: white;
    text-align: center;
  }
  .nav-item:hover{
    background-color: rgb(205, 224, 202);
  }
 
  nav ul li a::after{
  display: none;
}
    }

</style>

