<template>
	<div>
		<button @click = "editName">edit</button>
			
	</div>
</template>
<script>

export default{
	data(){
		return {name: ''}
	},
computed: {
workers(){
	return this.$store.state.workers
	},
},
mounted(){
	this.$store.dispatch('getWorkers')
	},
methods:{
	editName(){
		
		this.$store.dispatch('editName', {name: ''});
		
	}
}
}
</script>