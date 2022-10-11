<template>
	<div>
		<form @submit.prevent="addName">
			<label>Name:
		<input type="text" v-model = 'name'><button type = "submit">Add</button>
	</label>
		</form>
		
	</div>
</template>
<script>
import axios from 'axios'
export default{
	data(){
		return{
			name: ''
		}
	},
	methods:{
		addName(){
			axios
		.post('hhttps://api.jsonbin.io/v3/b/6332e23da1610e63863a9645', {name: this.name})
		this.name = ""
	}	
	
}
}
</script>