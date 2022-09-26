<template>
	<span v-if="worker">
		<h2>{{worker.name}}</h2>
		<div class = "worker">
		{{worker.position}}
		<img :src="require(`@/images1/${worker.image}`)">
		{{worker.description}}
		</div>
	</span>
</template>
<script>
   import axios from 'axios'
   // import workersData from '/workers.json'
	export default {
		data(){
         return {
            info: []
  			}
  		},
		mounted(){
			axios
			.get('https://api.jsonbin.io/v3/qs/6331f26b5c146d63caaa11ef')
			.then(response=>(this.info = response.data.record.workers))
		},
		computed:{
			workerId(){
				return parseInt(this.$route.params.id)
			},
			worker(){
				console.log(this.info)
				return this.info.find(worker => worker.id === this.workerId)
			},

			// worker(){
			// 	// debugger;
			// 	console.log(workersData.workers.find(worker => worker.id === this.workerId))
			// 	// return workersData.workers.find(worker => worker.id === this.workerId)
			// }
		}
	}
	
</script>
