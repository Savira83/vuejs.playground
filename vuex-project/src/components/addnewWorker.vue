<template>
	<div>
		<form @submit.prevent="addWorkers">
			<label>Name:
				<input type="text" v-model="name">	
			</label>
			<label>Age:
				<input type="text" v-model="age">	
			</label>
			<button type = "submit">Add</button>
		</form>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
export default{
data(){
		return {
			name:' ',
			age:'',
		}
	},
methods:{
	...mapActions({
		newWorkerName:'addNewWorkerData',
		}),
	addWorkers(){
		this.newWorkerName({name: this.name, age: this.age})
		this.name=''
		this.age=''
		

		}
	}
}
</script>