<script setup>
import LeftComponent from './components/LeftComponent.vue'
import RightComponent from './components/RightComponent.vue';
</script>

<template>
  <main>
  <div class="main-component-container">

    <LeftComponent /> 
    <RightComponent />
  </div>
</main>
</template>

<style scoped>
.main-component-container{
  display: flex;
}

@media only screen and (max-width: 1023px) {
  .main-component-container{
    display: block;
    position: relative;
}
}
</style>
