

<template>

<div id = "box" class="container text-start">
  <div id = "boxx" class="row align-items-start">
    <div class="col" id="textbox">
      <h5 class="display-4">Hi there, </h5>
      <h5 class="display-4">I am <span class="display-2" id="name">LUSANDA</span></h5>

      <div class="high"><p class="h5">Junior Web Developer</p></div>

      <div id="buttons">
        <router-link to="/contact"><button type="button" class="btn btn" id="buttonn">Contact</button></router-link>
        <!-- <pdf src="/LT CV SEPT 2023.pdf" target="_blank" @click="openLink()"><button type="button" class="btn btn" id="buttonn">Download CV </button></pdf> -->
        <!-- <button @click="openLink">Open PDF <iframe src="/LT CV SEPT 2023.pdf" width="100%" height="100%"></iframe></button> -->
        <pdf src="/LT CV SEPT 2023.pdf" :page="1" target="_blank" @click="openLink()">
    <template slot="loading">
      loading content here...
    </template>
    <button type="button" class="btn btn" id="buttonn">Download CV </button>
  </pdf>

    
        </div>
    </div>
    <div class="col">
        <img src="@/assets/portraitF.png" alt="portrait" id = "portrait" width="483.56" height="550">
    </div>
    
  </div>
</div>
  
</template>

<style scoped>


#box{
    margin-top: 30px;
    margin-bottom: 30px;
   
}

#boxx{
  height: 80%;
}

#portrait{
    position: relative;
    border-radius: 10px;
    height: 100%;
    transition: transform 0.3s ease;
}

#portrait:hover{
    transform: scale(1.1);
}

#name{
  font-weight: bold;
  text-decoration: none;
  text-decoration-thickness: 2px;
  letter-spacing: 5px;
  
}

iframe{
  display: none;
}

#buttons{
  margin-top: 20px;
}

#buttonn{
    margin: 10px;
    padding: 5px 10px;
    border-radius: 3%;
    font-size: 14px;
    background-color: rgba(202, 220, 199, 1);
}

#buttonn:hover{
   background-color: rgb(155, 209, 146);
   
}

#textbox{
    margin-top: 70px;
    display: block;
    
}

p{
  margin-top: 8px;
  margin-right: 25px;
  margin-left: 10px;
}

.high{
    width: 300px;
    margin-top: 45px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    color: white;
    background-image: linear-gradient(rgb(117, 159, 110), rgb(117, 159, 110));
    background-repeat: no-repeat;
    -webkit-background-clip:content-box;
    background-clip: content-box;
    background-position: -300px 0px;
    animation: backcolor 2.5s linear infinite alternate;

}

.h5{
  text-align: center;

}

@keyframes backcolor{
  100%{
    background-position: 0px 0px;
  }
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
    margin-top: 25px;
  }

  #buttons{
    display: flex;
    justify-content: center;
    margin-top: 10px;

  }

  img{
    width: 395px;
    height: 357px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .high{
    margin-top: 10px;
    margin-bottom: 10px;
  }

}

</style>

<script>
import { onMounted } from 'vue'
import { animate, spring } from 'motion'
//import pdf from 'vue-pdf'
import pdf from 'pdfvuer'
import 'pdfjs-dist/build/pdf.worker.entry'



export default{

  components: {
    pdf
 },

 

  setup() {
    // Animation code here
    onMounted(() => {
      const animation = animate("#buttonn", { scale: 1.1 }, {
        duration: 1, // as in 1 sec
        easing: spring(),
        repeat: Infinity,
        direction: "alternate",
      });
    });

    
  
  },

  methods: {
    openLink() {

    },
  },

};
</script>

