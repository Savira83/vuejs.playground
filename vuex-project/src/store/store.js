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
		},
		/*deleteName({commit}, data){
			axios 
			.post('http://localhost:3000/workers', data)
			.then(response=>{
			commit('DELETE_NAME', response.data)
			})
		}*/
	},	
	mutations:{
		SET_WORKERS(state, workers){
			this.state.workers = workers
		},
		NEW_WORKERS(state, name){
			this.state.workers.name = state.workers.unshift(name)
		},
		EDIT_NAME(state,  newName){
			this.state.workers.name = newName;
			}, 
		/*DELETE_NAME(state, ind){
			this.state.workers.splice(ind,1);
			},*/
	},
	getters:{}	

})

export default store;
