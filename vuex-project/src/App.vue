<template>
  <div >
  <div class="container">
    <router-link to ="/workersList">WorkersList</router-link>
  </div>
  <div class="container"><router-link  to="/addnewWorker">Add New Worker</router-link></div>
  <!--<div class="container">
    <router-link to ="/addWorkerstwo">Workers 2</router-link>
  </div>-->
  <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style>
.container {
  display: inline-block;
  margin: 2px;
  padding: 2px;

}
</style>
