<template>
	<div>
		<h1>Workers</h1>
    <th class="thead"><h2>Id</h2></th>
    <th class="thead"><h2>Name</h2></th>
    <th class="thead"><h2>Position</h2></th>
    <tr v-for = "(worker, id) in info" :key = "id">
      <td class="id">{{worker.id}}</td>
      <td class="name">{{worker.name}}</td>
      <td class="position">{{worker.position}}</td>
    </tr>
	</div>
</template>
<script>

import axios from 'axios'
export default {
     data(){
    return {
      info: null,
    }
  },
   mounted(){
    axios
   .get('http://localhost:3000/workers')
   .then(response =>(this.info = response.data))

  }
}

</script>
<style>
  .id {
    border: solid black 1px;
  }
  .name {
    border: solid black 1px;
  }
  .position {
    border: solid black 1px;
  }
  .thead {
     border: solid black 1px;
     text-align: center;
  }
</style>