import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
	state:{
		workers:[]
	},	
	actions:{
		getWorkers({commit}){
		axios
		.get('http://localhost:3000/workers')
		.then(response=>{
		commit('SET_WORKERS', response.data)
			})
		},
		addWorkers({commit}, data){
			axios 
			.post('http://localhost:3000/workers', data)
			.then(response=>{
			commit('NEW_WORKERS', response.data)
			})
		},
		editName({commit}, data){
			axios 
			.post('http://localhost:3000/workers', data)
			.then(response=>{
			commit('EDIT_NAME', response.data)
			})
		}
	},	
	mutations:{
		SET_WORKERS(state, workers){
			this.state.workers = workers
		},
		NEW_WORKERS(state, name){
			this.state.workers.name = state.workers.unshift(name)
		},
		EDIT_NAME(state,  oldName){
			let index = this.state.workers.findIndex( i => i.name === oldName.name);
			if (index > -1){
				
				this.state.workers[index] = state.workers[index].name.promt('');

			} 






		}

	},
	getters:{}	

})

export default store;
