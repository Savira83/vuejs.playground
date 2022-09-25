<template>
	<div class="diana">
		<h1>Diana</h1>
		<img :src="`images1/diana.jpg`">
	<router-link v-for = "(worker) in info"  :key="worker.id"   :to ="worker.slug" > <span v-if="worker.name=='Diana'">{{worker.position}}</span>
		</router-link>
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