<template>
  <div>
    <header class="header">
    <div class = "nav" id="nav">
      <router-link to ="/addHome">Home</router-link>
      <div class="workers" v-for="(worker, id) in info" :key="id"> <router-link  :to ="{name: 'workersDetales',  params: {id: worker.id}}">{{worker.name}}
    </router-link></div>
      
      
    
      </div>
      </header>
    <div class="container"><router-view></router-view></div>
    
  
    <footer id="footer">
      <h1>HELLO FROME THERE</h1></footer>
  </div>
    
</template>

<script>
import workersData from '/workers.json'
//import axios from 'axios'
export default {
  name: 'App',
  
  
    data(){
      return{
        info: workersData.workers
        //info: null
      }
    },
   /* mounted(){
      axios
      .get('http://localhost:3000/workers')
      .then(response=>(this.info = response.data))
    }*/
 }
</script>

<style>

</style>
