<template>
	<div>
		<button @click = "$emit('editName')">edit</button>
	</div>	
</template>
<script>

export default{
	data(){
		return {name: ''}
	},
	props:['id'],
computed: {
workers(){
	return this.$store.state.workers
	},
},

}
</script>