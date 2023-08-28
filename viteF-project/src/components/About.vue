
<template>
    <h1 class = "display-4" >About</h1>

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

    <!--Education/Experience section-->
    <div class="col" id="e-box">
      <h4>Qualification</h4>

      <div class="container2">
        <div class="education">
          <h5>Education</h5>
          <ul >
            <li>
              <span>2022 - Current</span><br>
            BSc. Applied Mathematics & Computer Science</li>

            <li>

              <span>2018 - 2021</span><br>
            BSc. Biotechnology</li>
          </ul>
        </div>

        <div class="experience">
          <h5>Experience</h5>
          <ul>
            <li>
              <span>2023 - Current</span><br>
            Junior Web Developer</li>

            <li>
              <span>2021 - 2023</span><br>
            Clinical Trial Recruiter</li>

          </ul>

        </div>
      </div>



      
      </div>
    
    
  </div>
</div>

<!--languages section-->


<div  class="container shadow p-3 mb-5 bg-body-tertiary rounded" id = "languages">
 <h3 class = "" id="languages-h">Programming Languages</h3> 
  <div class="row">
    <div  class="col"><img src="@/assets/html.png" width="90" height="112"></div>
    <div class="col"><img src="@/assets/css.png" width="90" height="112"></div>
    <div class="col"><img src="@/assets/python.png" width="105" height="112"></div>
    <div class="col"><img src="@/assets/java.png" width="120" height="112"></div>
    <div class="col"><img src="@/assets/js.png" width="100" height="96"></div>
  </div>

</div>
  
<div class="container shadow p-3 mb-5 bg-body-tertiary rounded" id = "techs">
 <h3 class = "" id="techs-h">Technologies</h3> 
  <div class="row">
   <div class="col"><img src="@/assets/node.png" width="189.73" height="114.58"></div>
    <div class="col"><img src="@/assets/vue.js.png" width="100" height="102"></div>
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

h4{
  font-weight: bold;
 
  margin-bottom: 40px;
}

h5{
  color: rgb(119, 163, 111);
}

li{
  list-style: none;
  margin: 10px;
  font-size: 14px
}

.container{
 margin-top: 20px;
 margin-bottom: 50px;
 
}

#e-box{
  text-align: center;
  width: 501px;
  padding: 5px;
  border: 1px gray;
  display: flex;
  flex-direction: column;
  
  
}
span{
  font-weight: bold;
}

#parabox{
    text-align: justify;
}


#languages div, #techs div{
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
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
    margin: 20px 30px 20px 30px;
  }
  h4{
    margin-top: 30px;
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


</script>