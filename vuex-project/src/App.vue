<template>
  <div >
    <div class="container"><router-link  to="/addnewWorker">Add New Worker</router-link></div>
   <!-- <div>
      <addnew-worker></addnew-worker>
    </div>-->
  <div class="container">
    <!--<add-Workers></add-Workers>-->
    <router-link to ="/addWorkers">Workers</router-link>
  </div>
  <div class="container">
    <router-link to ="/addWorkerstwo">Workers 2</router-link>
    <!--<add-Workerstwo></add-Workerstwo>-->
  </div>
  <router-view></router-view>
  </div>
</template>
<script>
// import addWorkers from './components/addWorkers.vue'
// import addWorkerstwo from './components/addWorkerstwo.vue'
//import addnewWorker from './components/addnewWorker.vue'
export default {
  name: 'App',
  components: {
    // addWorkers,
    // addWorkerstwo,
    //addnewWorker
  }
}
</script>
<style>
.container {
  display: inline-block;
  margin: 2px;
  padding: 2px;

}
</style>
