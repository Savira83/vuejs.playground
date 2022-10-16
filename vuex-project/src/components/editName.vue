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
	props:['id'],
/*computed: {
workers(){
	return this.$store.state.workers
	},
},
/*mounted(){
	this.$store.dispatch('getWorkers')
	},*/
methods:{
	editName(){
		return alert(this.id)
	}
}
}
</script>