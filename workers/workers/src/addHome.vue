<template>
	<div class="home">
		<h1>All workers</h1> 
	<div class="destinations">
	<router-link v-for = "worker in info" :key="worker.id" :to ="worker.slug">{{worker.name}}
		<img :src="`images1/${worker.image}`" :alt="worker.name"></router-link>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				info: null
			}
		},
		mounted(){
			axios
			.get('http://localhost:3000/workers')
			.then(response=>(this.info = response.data))
		}
	}
</script>