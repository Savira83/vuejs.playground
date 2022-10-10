<template>
	
	<div v-for = "worker in info" :key = "worker.id">
		{{worker.name}}
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
		.get('https://api.jsonbin.io/v3/b/6332e23da1610e63863a9645')
		.then(response=>{this.info = response.data.record.workers})
		}
		
	}
</script>