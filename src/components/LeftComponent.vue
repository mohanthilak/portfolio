<template>
<div class="left-component-container">
  <div class="left-component-content-holder">

    <div>
      <h1 class="left-component-name">Mohan Thilak</h1>
      <h3 class="left-component-role">Fullstack Engineer</h3>
      <h4 class="left-component-task-role">I build Interactive Web Apps, Scalable Backends,<br>and smooth CI/CD pipelines with zero down time.</h4>
    </div>
    <!--Page References  -->
    <div class="left-component-section-references-list-div">
      
      <div v-on:click="setClickActiveSection(1)" v-on:mouseover="setHoverActiveSection(1)" v-on:mouseleave="setHoverActiveSection(activeSection)" :class="{'left-component-section-reference-div': true, 'left-component-section-reference-div-active': activeSection == 1  || hoverActiveSection == 1 ? true: false}">
        <div class="left-component-section-references-hr"></div>
        <h5 >About Me</h5>
      </div>
      <div v-on:click="setClickActiveSection(2)" v-on:mouseover="setHoverActiveSection(2)" v-on:mouseleave="setHoverActiveSection(activeSection)" :class="{'left-component-section-reference-div': true, 'left-component-section-reference-div-active': activeSection == 2  || hoverActiveSection == 2 ? true: false}">
        <div class="left-component-section-references-hr"></div>
        <h5 >Experiences</h5>
      </div>
      <div v-on:click="setClickActiveSection(3)" v-on:mouseover="setHoverActiveSection(3)" v-on:mouseleave="setHoverActiveSection(activeSection)"  :class="{'left-component-section-reference-div': true, 'left-component-section-reference-div-active': activeSection == 3 || hoverActiveSection == 3 ? true: false}">
        <div class="left-component-section-references-hr"></div>
        <h5 >Projects</h5>
      </div>

    </div>

    <div>

      <div>
        <a href="https://www.linkedin.com/in/mohan-thilak" target=”_blank”>
          <svg class="left-component-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
          
        <a href="https://github.com/mohanthilak" target=”_blank”>
          <svg class="left-component-icon"  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
          
        <a href="https://hashnode.com/@mohanthilak" target=”_blank”>
          <svg class="left-component-icon" width="25" height="25" viewBox="0 0 337 337" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"/></svg>
        </a>
          
        <a href="https://leetcode.com/mohan_thilak/" target=”_blank”>
          <svg class="left-component-icon" width="25" height="25" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/></svg>
        </a>
          
        <a href="https://twitter.com/MohanThilak4" target=”_blank”>
          <svg class="left-component-icon" width="25" height="25"  xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>
        </a>
      </div>

    </div>
    
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      activeSection: ref(1),
      hoverActiveSection: ref(0)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if(window.scrollY < 400){
        this.activeSection = 1;
      }
      if(window.scrollY > 400 && window.scrollY < 2200){
        this.activeSection = 2;
      }else if(window.scrollY >=2000){
        this.activeSection = 3;
      }

    },

    setClickActiveSection(sectionIntValue) {
      if(sectionIntValue>3 || sectionIntValue <1) return;
      this.activeSection = sectionIntValue;
      if(sectionIntValue == 1){
        this.emitter.emit('scrollToAbout')
      }else if(sectionIntValue == 2){
        this.emitter.emit('scrollToExperience')
      }else if(sectionIntValue == 3){
        this.emitter.emit('scrollToProjects')
      }
    },
    setHoverActiveSection(sectionIntValue) {
      if(sectionIntValue>3 || sectionIntValue <1) return;
      this.hoverActiveSection = sectionIntValue;
    },

  },
  
}

</script>


<style scoped>
.left-component-container{
  width: 45vw;
  height: 100vh;
  position: sticky;
  top: 0;
}
.left-component-content-holder{
  padding: 10% 10%;
}

.left-component-name{
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 0px 0;
}
.left-component-role{
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 0 0;
}
.left-component-task-role{
  font-weight: 400;
  opacity: 0.6;
  font-size: larger;
  margin: 20px 0 ;
}


.left-component-section-references-list-div{
  margin: 6rem 0; 
}

.left-component-section-reference-div{
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  gap:20px;
  margin: 30px 0;
  opacity: 0.5;
  cursor: pointer;
  width: fit-content;
}

.left-component-section-reference-div-active {
  opacity: 1;
  gap:30px;
}

.left-component-section-references-hr{
  background-color: white;
  height: 1px;
  width:50px;
  transition: width 0.3s ease;
}

.left-component-section-reference-div-active{
  gap:30px;
}
.left-component-section-reference-div-active .left-component-section-references-hr{
  width: 80px;
  transition: width 0.3s ease;
}

.left-component-section-reference-div h5{
  margin: 0 0 0 0;
  text-transform: uppercase;
  font-weight:500;
}

.left-component-icon{
  margin: 0 15px;
  fill: #8D8D8D;
  cursor: pointer;
}
.left-component-icon:hover{
  fill: #ffffff;
}
@media only screen and (max-width: 1023px) {
  .left-component-container{
    position: relative;
    height: 55vh;
    width: 100%;
  }

  .left-component-name{
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 0px 0;
}
.left-component-role{
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 0 0;
}
  .left-component-content-holder{
    padding: 5% 5%;
  }

  .left-component-task-role{
    font-weight: 400;
    opacity: 0.6;
    font-size: 16px;
    margin: 20px 0 ;
  }
  .left-component-section-references-list-div{
   margin: 4rem 0; 
}
}
</style>
