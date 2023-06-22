<script>
import { RouterLink, RouterView } from 'vue-router'
import myNav from './components/Nav.vue';

export default{
  name:'App',
  components:{
    myNav
  }
}
</script>

<template>
  <myNav></myNav>
  <RouterView></RouterView>
</template>

<style scoped>


</style>
