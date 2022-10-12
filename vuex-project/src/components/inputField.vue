<template>
	<div>
		<form @submit.prevent="addWorkers">
			<label>Name:
				<input type="text" v-model="name"><button type = "submit">Add</button>
			</label>
		</form>
		
	</div>
</template>
<script>

export default{
data(){
		return {name:' '}
	},
workers(){
		return this.$store.state.workers
	},
mounted(){
	this.$store.dispatch('getWorkers')
	},
methods:{
	addWorkers(){
		this.$store.dispatch('addWorkers',{name: this.name})
		this.name=''
		}
	}
}
</script>