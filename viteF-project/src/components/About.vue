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

    <!--Education/Experience section-->
    <div class="col" id="e-box">
      <h6>Qualification</h6>

      
      </div>
    
    
  </div>
</div>

<!--languages section-->


<div class="container shadow p-3 mb-5 bg-body-tertiary rounded" id = "languages">
 <h6 id="languages-h">Programming Languages</h6> 
  <div class="row">
    <div class="col"><img src="/src/assets/html.png" width="90" height="112"></div>
    <div class="col"><img src="/src/assets/css.png" width="90" height="112"></div>
    <div class="col"><img src="/src/assets/python.png" width="105" height="112"></div>
    <div class="col"><img src="/src/assets/java.png" width="120" height="112"></div>
    <div class="col"><img src="/src/assets/js.png" width="100" height="96"></div>
  </div>

</div>
  
<div class="container shadow p-3 mb-5 bg-body-tertiary rounded" id = "techs">
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

#e-box li{
  font-size: 14px;
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
import { ref } from '@vue/reactivity'; //import ref funcion from node modules for reactivity

export default {
  data() {
    return {
      tabs: [
        { name: 'Education', active: false },
        { name: 'Experience', active: false },
      ],
    };
  },
  setup() {
    //ref is to create reactive variable for the "content"
    const educationContent = ref(`
    <ul>
      <li><span>2022 - Current</span>BSc. Applied Mathematics & Computer Science</li>
      <li><span>2018 - 2021</span>BSc. Biotechnology</li>
      </ul>`
      );

      const experienceContent = ref(`
    <ul>
      <li><span>2023 - Current</span>Junior Web Developer</li>
      <li><span>2021 - 2023</span>Clinical Trial Recruiter</li>
      <li><span>2018 - 2019</span>Sales & Customer Care</li>
      </ul>`
      );

      return {
        educationContent,
        experienceContent,
      };
  },

  methods: {
    openTab(tabName) {
      this.tabs.forEach((tab) => {
        tab.active = tab.name === tabName;
      });
    },
  },
};


</script>