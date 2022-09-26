<template>
	<h2>{{worker.name}}</h2>
	<div class = "worker">
	{{worker.position}}
	<img :src="require(`@/images1/${worker.image}`)">
	{{worker.description}}
	</div>

</template>
<script>
   //import axios from 'axios'
   import workersData from '/workers.json'
	export default {
		/*data(){
			info: null},
		mounted(){
			axios
			.get('http://localhost:3000/workers')
			.then(response=>(this.info = response.data))
		},*/
		computed:{
			workerId(){
				return parseInt(this.$route.params.id)
			},
			/*worker(){
				return this.info.workers.find(worker => worker.id === this.workerId)
			},*/

			worker(){
				return workersData.workers.find(worker => worker.id === this.workerId)
			}
		}
	}
	
</script>