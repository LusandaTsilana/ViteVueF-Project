
<template>
<h1 class = "display-4" >Work</h1>

<div class="container">
    <h3 class = "" id="MP">My Portfolio</h3>

    <div id="MZ-box" class="col shadow p-3 mb-5 bg-body-tertiary rounded">
        <h4 id="MZ" class="">School Website</h4>
        <p>Working collaboratively with my team to develop a website for Mzamomtsha Primary School. Throughout the project, we utilized our collective skills in HTML, CSS and Javascript while following the Software Developement Lifecycle which included:
        <br>
        <ul ref="dropdown" class="dropdown">
            <li class="dropdown-label" @click="show = !show">Project Initiation</li>
            <p class="dropdown-content" v-if="show">Hey</p>


            <li>Wireframe Design</li>
            <li>Figma UI/UX Prototype</li>
            <li>Research & Development</li>
        </ul>
      
        PROJECT DURATION: 2 months <br>

        <a href="https://melodic-nasturtium-8a6e3c.netlify.app/" target="_blank" @click="openLink()"> <i class="bi bi-link-45deg"></i> View</a></p>
    </div>




<div id = "MS-box" class="col shadow p-3 mb-5 bg-body-tertiary rounded">
    <h4 id="MS" class="">My Services</h4>
    <div class="row">
    <div class="col">
        <p><span>UI/UX Design</span> <br>
            Creation of websites and pages to reflect a company's brand and information and ensure a user-friendly experience.</p>
    </div>
    <div class="col">
        <p><span>Web Development </span><br>
            Creation of websites and pages to reflect a company's brand and information and ensure a user-friendly experience</p>
    </div>
    <div class="col">
        <p><span>App Development </span><br>
            Designing, coding, and testing software applications for mobile devices or computers to meet specific user needs</p>
    </div>
    </div>
</div>
</div>
  
</template>

<style scoped> 

h1{
    text-decoration: underline;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 70px;
}

#MP{
    margin-bottom: 50px;
    margin-top: 5px;
    text-align: center;
    
}

#MZ, #MS{
    margin-bottom: 30px;
    text-decoration: underline;
}

#MZ-box, #MS-box{
    padding: 30px;
    margin-bottom: 20px;
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
    font-weight: bold;
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
</style>

<script setup>
import { ref, onMounted } from "vue"
import autoAnimate from "@formkit/auto-animate"

const dropdown = ref() // we need a DOM node
const show = ref(false)

onMounted(() => {
  autoAnimate(dropdown.value), // thats it!
  openLink() 
})

</script>
