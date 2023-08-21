<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';

</script>

<template>
    <h1 class = "display-4" >About</h1>

    <div class="container">
  <div class="row align-items-start">
    <div class="col" id="parabox">
      <p>I am an ex-Clinical Trial Recruiter who loves building projects with code.<br>
        <br>

I first became fascinated with programming in 2022 due to automation. As a person who looks for efficiencies, I was captivated. Currently, I am completing a Computer Science degree . To acquire experience, I landed a Full-Stack Developer Internship where I got promoted to Junior Software Developer.<br>

I have acquired Front- development. Currently, I am learning to master Back-End development. Since the career-switch, I have worked with top developers to advance my standards for web applications.<br>
<br>

I am seeking a full-time role where I can contribute my skills in coding to grow professionally.</p>
    </div>
    <div class="col" id="e-box">
      <h5>Qualification</h5>
      <div class="tab-titles">
                            <p class = "tab-links active-link" onclick = "opentab('education')">Education</p>
                            <p class = "tab-links" onclick = "opentab('experience')" >Experience</p>
                            
                        </div>
                        <div class="tab-contents active-tab" id = "education">
                            <ul>
                                <li><span><strong>2022 - Current</strong></span><br>BSc. Applied Mathematics & Computer Science</li>
                                <li><span><strong>2018 - 2021</strong></span><br>BSc. Biotechnology</li>
                            </ul>
                        </div>
                        <div class="tab-contents" id = "experience">
                            <ul>
                                <li><span><strong>2023 - Current</strong></span><br>Software Developer Intern</li>
                                <li><span><strong>2021 - 2023</strong></span><br>Pharmaceutical Sales</li>
                                <li><span><strong>2018 - 2019</strong></span><br>Beauty Sales</li>
                                 
                            </ul>
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

h5{
  font-weight: bold;
}

li{
  text-decoration: none;
}

#e-box{
  text-align: center;
}

#parabox{
    text-align: justify;
}


</style>

<script>
//js for tab links underline and clicking under qualification sections
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablinks.classList.remove("active-link"); //to remove content & underline when clicked on heading
        }
        for(tabcontent of tabcontents){
            tabcontents.classList.remove("active-tab");//same as above
        }
        event.currentTarget.classList.add("active-link"); //to display underline color when clicking on title
        document.getElementById(tabname).classList.add("active-tab"); 
    }

</script>