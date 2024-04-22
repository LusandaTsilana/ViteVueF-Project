
<template >
  <h1 class="display-4">About</h1>

  <div class="container" id="summary">
    <div class="row">
      <div class="col" id="parabox">
        <p>
          I used to work as a clinical trial recruiter, but my passion lies in <span id="highG">coding and building
            projects </span> from scratch. <br>
          <br>
          My journey into programming began in 2022, thanks to my fascination with <span id="highA">automation.</span>
          Being someone who always seeks out <span id="highB">efficiencies</span>, I was immediately drawn into this
          world. While still working as a clinical trial recruiter, I decided to pursue a <strong>BSc. Computer
            Science.</strong> To gain practical experience, I enrolled in a Software Developer program, where I honed my
          skills in <span id="highC">UI/UX </span>design and <span id="highD">web development.</span> Since then, I've
          transitioned into a role as a <strong>Software Engineer.</strong> <br>
          <br>
          In my spare time, I'm fully immersed in <span id="highE">Javascript and AWS</span> courses to further expand and strengthen my problem solving skills. <br>
          <br>
          I'm also actively delving into <strong>back-end</strong> development to diversify my skill set. Since switching
          careers, I've had the privilege of working alongside product engineers and solution architects to enhance my expertise and gain hands-on
          experience in delivering <span id="highF">high-quality, efficient systems</span> that meet the needs of users
          and the business.<br>
          <br>
          Now, I'm on the lookout for a full-time role where I can <span id="circle">grow
          </span>professionally. <br>

        </p>
      </div>

      <!--Education/Experience section-->
      <div class="col" id="e-box">
        <h4>Qualification</h4>

        <div class="qualification_tabs">
          <div class="qualification_title" @click="activeTab = 'tab1'" exact
            v-bind:class="{ 'active-tab-active': activeTab === 'tab1' }"><i class="bi bi-mortarboard"></i>
            Education
          </div>

          <div class="qualification_title" @click="activeTab = 'tab2'" exact
            v-bind:class="{ 'active-tab-active': activeTab === 'tab2' }"><i class="bi bi-briefcase"></i>
            Experience
          </div>
        </div>

        <div class="qualification_sections">
          <div class="qualification_content" v-if="activeTab === 'tab1' || activeTab === 'initial'">

            <div class="qualification_data">
              <div>
                <h6 class="qualification_name">Software Dev. Program</h6>
                <span class="subtitle">CapaCiTi</span>
                <div class="calender">
                  <i class="calender-alt">2023 - 2023</i>
                </div>
              </div>

            </div>

            <div class="qualification_data">
              <div>
                <h6 class="qualification_name">BSc. Computer Science</h6>
                <span class="subtitle">University of South Africa</span>
                <div class="calender">
                  <i class="calender-alt">2022 - Present</i>
                </div>
              </div>

            </div>

            <div class="qualification_data">
              <div>
                <h6 class="qualification_name">BSc. Biotechnology</h6>
                <span class="subtitle">University of Western Cape</span>
                <div class="calender">
                  <i class="calender-alt">2018 - 2021</i>
                </div>
              </div>

            </div>

          </div>

          <div class="experience_content" v-if="activeTab === 'tab2'">

            <div class="experience_data">
              <div>
                <h6 class="experience_name">Product Engineer Intern</h6>
                <span class="subtitle">Absa Group</span>
                <div class="calender">
                  <i class="calender-alt">2024 - Current</i>
                </div>
              </div>

            </div>

            <div class="experience_data">
              <div>
                <h6 class="experience_name">Junior Web Developer</h6>
                <span class="subtitle">Younglings</span>
                <div class="calender">
                  <i class="calender-alt">2023 - 2024</i>
                </div>
              </div>

            </div>

            <div class="experience_data">
              <div>
                <h6 class="experience_name">Clinical Trial Recruiter</h6>
                <span class="subtitle">Subjectwell</span>
                <div class="calender">
                  <i class="calender-alt">2021 - 2023</i>
                </div>
              </div>

            </div>

            <div class="experience_data">
              <div id="BS">
                <h6 class="experience_name">Beauty Sales</h6>
                <span class="subtitle">Foschini</span>
                <div class="calender">
                  <i class="calender-alt">2018 - 2019</i>
                </div>
              </div>

            </div>


          </div>


        </div>
      </div>


    </div>


  </div>


  <!--languages section-->


  <div class="container shadow p-3 mb-5 bg-body-tertiary rounded" id="languages">
    <h3 class="" id="languages-h">Programming Languages</h3>
    <div class="row">
      <div class="col"><img src="@/assets/html.png" width="90" height="112"></div>
      <div class="col"><img src="@/assets/css.png" width="90" height="112"></div>
      <div class="col"><img src="@/assets/python.png" width="105" height="112"></div>
      <div class="col"><img src="@/assets/java.png" width="120" height="112"></div>
      <div class="col"><img src="@/assets/js.png" width="100" height="96"></div>
    </div>

  </div>


  <div class="container shadow p-3 mb-5 bg-body-tertiary rounded" id="techs">
    <h3 class="" id="techs-h">Technologies</h3>
    <div class="row">
      <div class="col"><img src="@/assets/node.png" width="189.73" height="114.58"></div>
      <div class="col"><img src="@/assets/vue.js.png" width="100" height="102"></div>
    </div>



  </div>
</template>

<style scoped>
h1 {
  text-decoration: underline;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 70px;
}

h4 {
  text-decoration: underline;
  margin-bottom: 40px;
}

h6 {
  color: rgb(69, 92, 65);
  font-weight: bold;
}

img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.1);
}

.active-tab-active {
  font-weight: bold;
  text-decoration: underline;
  color: rgb(69, 92, 65);
}

#highG,
#highC {
  font-weight: bold;
  background: linear-gradient(to bottom,
      transparent 50%,
      #fce041 50%)
}

#highA,
#highD {
  font-weight: bold;
  background: linear-gradient(to bottom,
      transparent 50%,
      #fcae41 50%)
}

#highB,
#highE {
  font-weight: bold;
  background: linear-gradient(to bottom,
      transparent 50%,
      #fc4182 50%)
}

#highF {
  font-weight: bold;
  background: linear-gradient(to bottom,
      transparent 50%,
      #fce041 50%)
}

#circle {
  font-weight: bold;
  background: linear-gradient(to bottom,
      transparent 50%,
      #fcae41 50%)
}



.qualification_tabs {
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  margin-bottom: 20px;
}

.qualification_title.qualification_title:hover {
  color: rgb(69, 92, 65);
  font-weight: bold;
  font-size: 16px;
}

.qualification_sections {
  margin-top: 20px;
  font-size: 16px;

}

.active-tab {
  color: rgb(69, 92, 65);
  font-weight: bold;
  text-decoration: underline;
}

.qualification_data,
.experience_data {
  margin-bottom: 30px;
}


.container {
  margin-top: 20px;
  margin-bottom: 50px;

}

#e-box {
  text-align: center;
  width: 501px;
  padding-left: 30px;
  border: 1px gray;
  display: flex;
  flex-direction: column;


}



#parabox {
  text-align: justify;

}


#languages div,
#techs div {
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}



#languages-h,
#techs-h {
  margin-bottom: 50px;
  margin-top: 30px;
  text-decoration: underline;
  text-align: center;
}



/*----responsiveness for xs, s and medium devices----*/
@media (max-width: 992px) {
  #languages {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  #languages img,
  #techs img {
    margin: 20px 30px 20px 30px;
  }

  h4 {
    margin-top: 30px;
  }
}

/*-----responsiveness for xs and s devices for #summary section----*/
@media (max-width: 768px) {
  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #parabox {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }

}
</style>

<script>
import { onMounted, provide } from 'vue'
import { animate, spring } from 'motion'
import { annotate, annotationGroup } from 'rough-notation';

export default {


  data() {
    // Animation code here
    onMounted(() => {
      const animation = animate(".qualification_title", { scale: 1.1 }, {
        duration: 1, // as in 1 sec
        easing: spring(),
        repeat: Infinity,
        direction: "alternate",
      });

      const a1 = annotate(document.querySelector('#e1'), { type: 'underline' });
      const a2 = annotate(document.querySelector('#e3'), { type: 'box' });
      const a3 = annotate(document.querySelector('#e3'), { type: 'circle' });

      const ag = annotationGroup([a3, a1, a2]);
      ag.show();
    });

    return {
      activeTab: 'tab1',
      isShow: true,
    };
  },

  methods: {
    toggleTab(tab1) {
      this.activeTab = tab1;
    },
  },
};








</script>