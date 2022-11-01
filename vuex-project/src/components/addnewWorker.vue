<template>
	<div>
		<form @submit.prevent="addWorkers">
			<label>Name:
				<input type="text" v-model="worker.name">	
			</label>
			<label>Age:
				<input type="text" v-model="worker.age">	
			</label>
			<label>Position:
				<input type="text" v-model="worker.position">	
			</label>
			<button type = "submit">Add</button>
		</form>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
export default{
data(){
		return {worker :{
			name:' ',
			age:'',
			position: '',
			is_edit: false}}
	},
methods:{
	...mapActions({
		newWorkerName:'addNewWorkerData',
		}),
	addWorkers(){
		this.newWorkerName(this.worker)
		this.worker={}
		}
	}
}
</script>