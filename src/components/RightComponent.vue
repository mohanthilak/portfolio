
<template>
<div class="right-component-container">
  <div class="right-component-holder">
    <div>
      <RCAbout />
      <RCExperience />
      <RightProjects />
    </div>
  </div>
</div>
</template>

<script>
  import RCAbout from './RCAbout.vue';
  import RCExperience from "./RCExperience.vue"
  import RightProjects from './RightProjects.vue';

  export default {
    components: {
      RCAbout,
      RCExperience,
      RightProjects
    }
  }

</script>

<style scoped>
.right-component-container{
  width: 55vw;
  /* padding: 0 10%; */
  height: 100%;
  
}

.right-component-holder{
  padding: 5% 10%;
}
.right-component-name{
  font-size: 48px;
  font-weight: 600;
  margin: 0 0 7px 0;
}
.right-component-role{
  font-size: 32px;
  font-weight: 300;
  margin: 0 0 0 0;
}

@media only screen and (min-width: 1024px){
  .right-component-container{
    overflow-y: auto;

  }
}
@media only screen and (max-width: 1023px) {
  .right-component-container{
    width: 100%;
    /* background-color: aquamarine; */
  }
}
</style>
