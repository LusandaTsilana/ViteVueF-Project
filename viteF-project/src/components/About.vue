<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';

</script>

<template>
    <h1 class = "display-6" >About</h1>

    <div class="container" id="summary">
  <div class="row">
    <div class="col" id="parabox">
      <p>I am an ex-Clinical Trial Recruiter who loves building projects with code.<br>
        <br>

I first became fascinated with programming in 2022 due to automation. As a person who looks for efficiencies, I was captivated. Currently, I am completing a Computer Science degree . To acquire experience, I landed a Full-Stack Developer Internship where I got promoted to Junior Software Developer.<br>

I have acquired Front- development. Currently, I am learning to master Back-End development. Since the career-switch, I have worked with top developers to advance my standards for web applications.<br>
<br>

I am seeking a full-time role where I can contribute my skills in coding to grow professionally.</p>
    </div>
    <div class="col" id="e-box">
      <h6>Qualification</h6>
      <div class="tab-titles">
                        <div><p class = "tab-links active-link" onclick = "opentab('education')">Education</p></div>
                        <div><p class = "tab-links" onclick = "opentab('experience')" >Experience</p></div>
                            
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

<!--languages section-->


<div class="container" id = "languages">
 <h6 id="languages-h">Programming Languages</h6> 
  <div class="row">
    <div class="col"><img src="/src/assets/html.png" width="90" height="112"></div>
    <div class="col"><img src="/src/assets/css.png" width="90" height="112"></div>
    <div class="col"><img src="/src/assets/python.png" width="105" height="112"></div>
    <div class="col"><img src="/src/assets/java.png" width="120" height="112"></div>
    <div class="col"><img src="/src/assets/js.png" width="100" height="96"></div>
  </div>
<!--<div class="col"><img src="/src/assets/node.png" width="199.73" height="144.58"></div>-->
    <!--<div class="col"><img src="/src/assets/vue.js.png" width="110" height="132"></div>-->
  
  
</div>
  
<div class="container" id = "techs">
 <h6 id="techs-h">Technologies</h6> 
  <div class="row">
   <div class="col"><img src="/src/assets/node.png" width="189.73" height="114.58"></div>
    <div class="col"><img src="/src/assets/vue.js.png" width="100" height="102"></div>
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

h6{
  font-weight: bold;
}

li{
  list-style: none;
}

#e-box{
  text-align: center;
  width: 501px;
  
  padding: 5px;
  border: 1px gray;
  display: flex;
  flex-direction: column;
  
  
}

#e-box li{
  font-size: 14px;
}

#parabox{
    text-align: justify;
}

/*----qualification section-----*/

.tab-titles{
    display: flex;
    margin: 20px 0 40px;

}
.tab-links {
    margin-right: 50px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
}

.tab-links::after{
    content: '';
    width: 0;
    height: 3px;
    background:rgb(137, 171, 131);
    position: absolute;
    left: 0;
    bottom: -8px;
    transition: 0.5s;
}

.tab-links.active-link::after{
    width:50%;

}

.tab-contents ul li{
    list-style: none;
    margin: 10px 0;
}
.tab-contents ul li span{
    color: rgb(137, 171, 131);
    font-size: 14px;
}

.tab-contents{
    display: none;
}
.tab-contents.active-tab{
    display: block;
}

/*-----qualifications section end----*/

#languages div, #techs div{
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}



#languages-h, #techs-h{
  margin-bottom: 50px;
  margin-top: 30px;
  text-decoration: underline;
  text-align: center;
}


/*----responsiveness for xs, s and medium devices----*/
@media (max-width: 992px) {
  #languages{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

  }

  #languages img, #techs img{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 50px;
  }
}

/*-----responsiveness for xs and s devices for #summary section----*/
@media (max-width: 768px) {
  .row{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #parabox{
    text-align: center;
   padding-left: 20px;
   padding-right: 20px;
  }

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