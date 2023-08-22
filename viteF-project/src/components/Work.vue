<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';

</script>

<template>
<h1 class = "display-6" >Work</h1>

<div class="container">
    <h6 id="MP">My Portfolio</h6>

    <div id="MZ-box" class="col shadow p-3 mb-5 bg-body-tertiary rounded">
        <h6 id="MZ" class="">School Website</h6>
        <p>Working collaboratively with my team to develop a website for Mzamomtsha Primary School. Throughout the project, we utilized our collective skills in HTML, CSS and Javascript while following the Software Developement Lifecycle which included:
        <br>
        <ul>
            <li>Developement Team Formation</li>
            <li>Wireframe Design</li>
            <li>Figma UI/UX Prototype</li>
            <li>Research & Development</li>
        </ul>
        
        PROJECT DURATION: 2 months <br>

        <a href="https://melodic-nasturtium-8a6e3c.netlify.app/" target="_blank" @click="openLink()"> <i class="bi bi-link-45deg"></i> View</a></p>
    </div>


</div>

<div id = "MS-box" class="container shadow p-3 mb-5 bg-body-tertiary rounded">
    <h6 id="MS">My Services</h6>
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
    font-weight: bold;
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

li{
    list-style: none;
    font-weight: bold;
}

/*@media (max-width: 576px) {
    #MS-box .row div{
       need to make the 3 sets into a column stretching down
    }
    

}*/
</style>

<script>
    export default {
    methods: {
        openLink() {
            //to open to new window when clicking on view for school website
        },
    },

};
</script>
