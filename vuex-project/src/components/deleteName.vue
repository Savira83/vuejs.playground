<template>
	<div>
		<button @click = "deleteName">delete</button>
	</div>
</template>
<script>

export default{
	
computed: {
workers(){
	return this.$store.state.workers
	},
},
mounted(){
	this.$store.dispatch('getWorkers')
	},
methods:{
	deleteName(name){
		this.$store.dispatch('deleteName', name);
		
	}
}
}
</script>