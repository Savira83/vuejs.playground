<template>
	<div class="home">
		<h1>All workers</h1> 
	<div class="destinations">
		<div v-for = "worker in info" :key="worker.id">
		<router-link  :to ="{name: 'workersDetales',  params: {id: worker.id}}">{{worker.name}}
		</router-link>
		<figure>
			<router-link :to="{name: 'workersDetales', params: {id: worker.id}}">
				<img :src="require(`@/images1/${worker.image}`)" :alt="worker.name"></router-link>
			
		</figure>
		</div>
	
		</div>
	</div>
</template>
<script>
	//import axios from 'axios'
	import workersData from '/workers.json'
	export default{
		data(){
			return{
				info: workersData.workers
				//info:null
			}
		},
		/*mounted(){
			axios
			.get('http://localhost:3000/workers')
			.then(response=>(this.info = response.data))
		}*/
	}
</script>