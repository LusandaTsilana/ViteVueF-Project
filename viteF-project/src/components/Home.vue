

<template>

<div id = "box" class="container text-start">
  <div id = "boxx" class="row align-items-start">
    <div class="col" id="textbox">
      <h1 class="display-4">Hi there, </h1>
      <h1 class="display-4">I am <span class="display-2" id="name">Lusanda</span></h1>

      <p class="h3">Junior Web Developer</p>

      <div id="buttons">
      <button type="button" class="btn btn" id="buttonn"><a href="/contact">Contact</a></button>
      <button type="button" class="btn btn" id="buttonn"><a href="@/assets/LUSANDA T CV 2023.pdf" target="_blank" >Resume</a></button>
        </div>
    </div>
    <div class="col">
        <img src="@/assets/portrait.jpg" class = "" alt="portrait" id = "portrait" width="433.56" height="500">
     
    </div>
  </div>
</div>
  
</template>

<style scoped>

#box{
    margin-top: 60px;
    margin-bottom: 60px;
}

#portrait{
    border-radius: 10px;
}

#buttonn{
    background-color: rgba(202, 220, 199, 1);
    margin: 10px;
    
}

#buttonn:hover{
   background-color: rgb(155, 209, 146);
}

#textbox{
    margin-top: 50px;
}

p{
    margin-top: 20px;
    margin-bottom: 20px;
}

#name{
    text-decoration: underline;
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