<template>
  
  <addCounter/>
</template>

<script>
import addCounter from './components/addCounter.vue'

export default {
  name: 'App',
  components: {
    addCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
