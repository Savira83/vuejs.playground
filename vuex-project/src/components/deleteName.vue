<template>
	<div>
		<button @click = "$emit('deleteElement')">delete</button>
	</div>	
</template>
<script>

export default{
	data(){
		//return {name: ''}
	},
	props:['name'],
computed: {
workers(){
	return this.$store.state.workers
	},
},

}
</script>