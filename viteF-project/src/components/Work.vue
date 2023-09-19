
<template>
<h1 class = "display-4" >Work</h1>

<div class="container">

    <div id="MZ-box" class="col shadow p-3 mb-5 bg-body-tertiary rounded">
        <h4 id="MZ" class="">School Website</h4>

        <div class="container text-center">
  <div class="row">
    <div class="col" id="cardcol">
        <div class="card" style="width: 25rem;">
        <img src="@/assets/school kids.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Mzamomtsha Primary School</h5>
            <a href="https://melodic-nasturtium-8a6e3c.netlify.app/" target="_blank" @click="openLink()"> <i class="bi bi-link-45deg"></i> View</a>
        </div>
        </div>
    </div>
    <div id="MZ-text" class="col">
        <p>Working collaboratively with my team to develop an <span id="high1">online presence</span> for Mzamomtsha Primary School. Throughout the project, we utilized our collective skills in <span id="high2">HTML</span>, <span id="high3">CSS</span> and <span id="high4">Javascript</span> while following the Software Developement Lifecycle</p>
        
        <div ref="dropdown" class="p-8 rounded">
            <h5 @click="isOpen = !isOpen" class="dropdown-label"><button>Software Developement Cycle</button></h5>
            <p v-if="isOpen" class="dropdown-content py-8" id="proj">
            <ul>
                <li><strong>Initiation:</strong> Team formation and task delegation</li>
                <li><strong>Research:</strong> Information gathering, requirements analysis</li>
                <li><strong>Design:</strong> Creating a wireframe  <a href="https://www.figma.com/file/fy3UUdRkAgwrdbnQyPk8Bb/Mzamomtsha-Site-Wireframes?type=design&node-id=0%3A1&mode=design&t=tYWMoikV76Nmcym9-1" target="_blank" @click="openLink()"> <i class="bi bi-link-45deg"></i> View</a></li>
                <li><strong>Development:</strong> Coding the website adhering to specifications</li>
            </ul>
            </p>

        </div>
       
    </div>
    
  </div>
<br>

</div>

    </div>

    <div id="MZ-box" class="col shadow p-3 mb-5 bg-body-tertiary rounded">
        <h4 id="MZ" class="">Income Tax Calculator</h4>

        <div class="container text-center">
  <div class="row">
    <div class="col" id="cardcol">
        <div class="card" style="width: 25rem;">
        <img src="@/assets/SARS-logo.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">SARS tax calculator</h5>
            <a href="https://github.com/LusandaTsilana/South-African-Income-Tax-Calculator" target="_blank" @click="openLink()"> <i class="bi bi-link-45deg"></i> View</a>
        </div>
        </div>
    </div>
    <div id="MZ-text" class="col">
        <p>A tax calculator system was developed with <span id="high7">Java </span>to be used by people to calculate their tax obligations using their annual incomes. </p>
        
        <div ref="dropdown" class="p-8 rounded">
            <h5 @click="isOpen = !isOpen" class="dropdown-label"><button>Software Developement Cycle</button></h5>
            <p v-if="isOpen" class="dropdown-content py-8" id="proj">
            <ul>
                <li><strong>Research:</strong> Information gathering based on income tax 2023/2024</li>
                <li><strong>Design:</strong> Creating a wireframe  <a href="https://www.figma.com/proto/owgymaQOAUmKEsBcvN3sLY/TAX-CALCULATOR-SYSTEM-APP?page-id=0%3A1&node-id=1-2&mode=design&t=g9fjNpwlOiV8hMyA-1" target="_blank" @click="openLink()"> <i class="bi bi-link-45deg"></i> View</a></li>
                <li><strong>Development:</strong> Coding the website adhering to specifications</li>
            </ul>
            </p>

        </div>
       
    </div>
    
  </div>
<br>

</div>

    </div>


<div id = "MS-box" class="col shadow p-3 mb-5 bg-body-tertiary rounded">
    <h4 id="MS" class="">My Expertise</h4>
    <div class="row" id="serv.row">
    <div class="col">
       <img src="@/assets/coding.gif">
        <br>
        <br>
        <h5><span id="hh">Software Developement</span></h5><br>
    </div>
    <div class="col">
        <h5><span id="hh">Front End Dev </span></h5><br>
           
    </div>
    </div>
</div>

<div class="container text-center">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    </div>
    <div class="row"><div class="col align-self-center">
      Two of three columns
    </div></div>
    <div class="row"><div class="col align-self-end">
      Three of three columns
    </div></div>
   
  </div>
</div>

  
</template>

<style scoped> 

h1{
    text-decoration: underline;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 70px;
}

h5{
    text-align: center;
}

button{
    margin: 10px;
    padding: 5px 10px;
    border-radius: 3%;
    border: 1px solid gray;
}

button:hover{
    background-color: rgb(155, 209, 146);
}

#hh{
    color: rgb(69, 92, 65);
}

#proj{
    text-align: justify;
}

#MP{
    margin-bottom: 50px;
    margin-top: 5px;
    text-align: center;
    
}

.card, img{
    transition: transform 0.3s ease;
}

.card:hover{
    transform: scale(1.1);
}



#cardcol{
    display: flex;
    justify-content: center;
}

#MZ, #MS{
    margin-bottom: 30px;
    text-decoration: underline;
}

#MZ-box, #MS-box{
    padding: 30px;
    margin-bottom: 20px;
}



#MZ-text{
    text-align: justify;
}


.container{
    text-align: center;
}
span{
    font-weight: bold;
}

ul{
    margin: 20px;
}

li{
    list-style: none;
    margin-bottom: 20px;
    text-align: justify;
}

.col{
    padding: 15px;
    text-align: center;
}



@media (max-width: 576px) {
    #MS-box div{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    

}

@media (max-width: 992px) {

    #serv.row div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>

<script setup>
import { ref, onMounted } from "vue"
import autoAnimate from "@formkit/auto-animate"
import { annotate, annotationGroup } from 'rough-notation'


document.addEventListener('DOMContentLoaded', function () {
  
  const a1 = annotate(document.querySelector('#high1'), { type: 'highlight', color: 'gold', multiline: true});
  const a2 = annotate(document.querySelector('#high2'), { type: 'highlight', color: 'turquoise' });
  const a3 = annotate(document.querySelector('#high3'), { type: 'highlight', color: 'pink' });
  const a4 = annotate(document.querySelector('#high4'), { type: 'highlight', color: 'orange', multiline: true });
  const a7 = annotate(document.querySelector('#high7'), { type: 'highlight', color: 'turquoise'});
  

  const ag = annotationGroup([a1, a2,a3, a4, a7]);
  ag.show();
});

const dropdown = ref()
const isOpen = ref(false) // a DOM node

onMounted(() => {
  autoAnimate(dropdown.value) // thats it!
})


const openLink = () => {
    //to open link in a new window
};


</script>
