<template>
  <div>
    <header class="header">
    <div id = "nav">  
      <router-link to ="/addHome">Home</router-link>
      <router-link to = "/addIryna">Iryna</router-link>
      <router-link to = "/addMaryna">Maryna</router-link>
      <router-link to = "/addOleg">Oleg</router-link>
      <router-link to = "addDiana">Diana</router-link>
      <router-link to="/notFound">Broken link</router-link>
      </div>
      </header>
    <div class="container"><router-view></router-view></div>
    
  
    <footer id="footer">
      <h1>HELLO FROME THERE</h1></footer>
  </div>
    
</template>

<script>

export default {
  name: 'App',
  }

</script>

<style>

</style>
