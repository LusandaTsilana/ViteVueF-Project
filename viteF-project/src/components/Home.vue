

<template>

<div id = "box" class="container text-start">
  <div id = "boxx" class="row align-items-start">
    <div class="col" id="textbox">
      <h5 class="display-5">Hi there, </h5>
      <h5 class="display-5">I'm <span class="display-2" id="name">LUSANDA</span></h5>

      <p class="h5">Junior Web Developer</p>

      <div id="buttons">
      <button type="button" class="btn btn" id="buttonn"><a href="/contact">Contact</a></button>
      <button type="button" class="btn btn" id="buttonn"><a href="@/assets/LUSANDA T CV 2023.pdf" target="_blank" >Resume</a></button>
        </div>
    </div>
    <div class="col">
        <img src="@/assets/portrait.jpg" class = "" alt="portrait" id = "portrait" width="433.56" height="500">
        <img src="@/assets/stripes.png" class="" alt="stripes" id="stripes1" width="180.38" height="129.11">
        <img src="@/assets/stripes.png" class="" alt="stripes" id="stripes2" width="125.75" height="79.54">
    </div>
  </div>
</div>
  
</template>

<style scoped>



#box{
    margin-top: 60px;
    margin-bottom: 60px;
   
}

#boxx{
  height: 80%;
}

#portrait{
    border-radius: 10px;
    height: 100%;
}

#stripes1{
 position: absolute;
 z-index: 1;
 left: 78%;
 top: 13%;
 display: none;
  
}

#stripes2{
  position:absolute;
  z-index: 1;
  left: 48%;
  top: 70%;
  display: none;
}

#buttons{
  margin-top: 20px;
}

#buttonn{
    margin: 10px;
    padding: 5px 10px;
    border-radius: 0%;
    border: 2px solid rgb(155, 209, 146);
    font-size: 14px;
    
}

#buttonn:hover{
   background-color: rgb(155, 209, 146);
}

#textbox{
    margin-top: 70px;
   
    
}

p{
    margin-top: 45px;
    margin-bottom: 20px;
}

#name{
    letter-spacing: 2px;
    font-weight: lighter;
    color: transparent;
    -webkit-text-stroke: 0.5px rgb(109, 107, 107);
    background-image: linear-gradient(black, black);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-position: -300px 0px;
    animation: backcolor 3s linear infinite alternate;

}

@keyframes backcolor{
  100%{
    background-position: 0px 0px;
  }
}

#name::before{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color:pink;
  -webkit-text-stroke: 0vw black;
  border-right: 2px solid pink;
  overflow: hidden;
  animation: animate 6s linear infinite;
}

#buttons a{
  text-decoration: none;
  color: black;
}

@media (max-width: 992px) {
  #boxx{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

  }

  #stripes1, #stripes2{
    display: none;
  }
  
  #textbox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #buttons{
    display: flex;
    justify-content: center;

  }

  img{
    width: 275px;
    height: 317px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
}

</style>

<script>
import { onMounted } from 'vue'
import { animate, spring } from 'motion'

export default{

  

setup() {

  //when page mounts, we should have access to the DOM
//for animation
 onMounted(() => {
      const animation = animate("#buttonn", { scale: 1.1 },
    {
      duration: 1, // as in 1 sec
      easing: spring(),
      repeat: Infinity,
      direction: "alternate",

    }

  );
})



}

}

 

</script>