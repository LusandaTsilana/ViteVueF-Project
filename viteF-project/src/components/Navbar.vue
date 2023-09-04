
<template>
  <nav class="navbar navbar-expand-lg shadow-sm" id="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home"><img src="@/assets/lusandalogo.png" alt="Logo" width="53.08" height="50" class="d-inline-block align-text-top"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/home" >HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/about">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/work">WORK</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
  
  
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

    @media (min-width: 992px) {
      .navbar-nav{
        font-size: 16px;
      }
    }

    
    }

    @media (max-width: 992px) {
  #navbar{
    background-color: white;
  }
  li a:hover{
    background-color: rgba(202, 220, 199, 1);
  }
 

  
}

</style>

