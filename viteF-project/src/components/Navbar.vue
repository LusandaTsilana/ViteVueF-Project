
<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home"><img src="@/assets/lusandalogo.png" alt="Logo" width="53.08" height="50" class="d-inline-block align-text-top"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/home">HOME</a>
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
#navbar{
    background-color: rgba(202, 220, 199, 1);
    
}
/*nav{
  position: ;
}*/

img{
    margin-left: 50px;
}

ul a:hover{
    text-decoration: underline;
}

ul a{
    transition: text-decoration 0.5s ease;
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

