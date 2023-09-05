
<template>
    <h1 class = "display-4" >About</h1>

    <div class="container" id="summary">
  <div class="row">
    <div class="col" id="parabox">
      <p>
        I used to work as a clinical trial recruiter, but my passion lies in coding and building projects from scratch. <br>
<br>
My journey into programming began in 2022, thanks to my fascination with <span id="highA">automation.</span> Being someone who always seeks out <span id="highB">efficiencies</span>, I was immediately drawn into this world. While still working as a clinical trial recruiter, I decided to pursue a <strong>BSc. Computer Science.</strong> To gain practical experience, I enrolled in a Software Developer program, where I honed my skills in <span id="highC">UI/UX </span>design and <span id="highD">web development.</span> Since then, I've transitioned into a role as a <strong>Junior Software Developer.</strong> <br>
<br>
In my spare time, I'm fully immersed in a <span id="highE">SAS</span> programming course to further expand my knowledge into Data Analysis. <br>
<br>
I'm also actively delving into <strong>back-end</strong> development to diversify my skill set. Since switching careers, I've had the privilege of working alongside top developers to enhance my expertise and gain hands-on experience in developing web and <span id="highF">mobile applications.</span> <br>
<br>
Now, I'm on the lookout for a full-time role where I can apply my coding skills to <span id="circle">grow </span>professionally. <br>

      </p>
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
    text-align: center;
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
import { annotate, annotationGroup } from 'rough-notation';

document.addEventListener('DOMContentLoaded', function () {
  
  const a1 = annotate(document.querySelector('#highA'), { type: 'highlight', color: 'gold' });
  const a2 = annotate(document.querySelector('#highB'), { type: 'highlight', color: 'orange' });
  const a3 = annotate(document.querySelector('#highC'), { type: 'highlight', color: 'pink' });
  const a4 = annotate(document.querySelector('#highD'), { type: 'highlight', color: 'gold' });
  const a5 = annotate(document.querySelector('#highE'), { type: 'highlight', color: 'orange' });
  const a6 = annotate(document.querySelector('#highF'), { type: 'highlight', color: 'pink' });

  const a7 = annotate(document.querySelector('#circle'), { type: 'circle', color: 'green' });

  const ag = annotationGroup([a1, a2,a3, a4, a5, a6, a7]);
  ag.show();
});

</script>