<template>
  <div >
    <div>
      <input-field></input-field>
    </div>
  <div class="container">
    <add-Workers></add-Workers>
  </div>
  <div class="container">
    <add-Workerstwo></add-Workerstwo>
  </div>
   
  </div>
</template>
<script>
import addWorkers from './components/addWorkers.vue'
import addWorkerstwo from './components/addWorkerstwo.vue'
import inputField from './components/inputField.vue'
export default {
  name: 'App',
  components: {
    addWorkers,
    addWorkerstwo,
    inputField
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
