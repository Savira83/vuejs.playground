import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
	state:{
		workers:[]
	},	
	actions:{
		getWorkers({commit}){
		axios
		.get('https://api.jsonbin.io/v3/b/6332e23da1610e63863a9645')
		.then(response=>{
		commit('SET_WORKERS', response.data.record.workers)
			})
		},
		addWorkers({commit}, data){
			axios 
			.post('https://api.jsonbin.io/v3/b/6332e23da1610e63863a9645', {data:data, headers:{"X-Master-Key": "$2b$10$pBbClepM.MQwO9CbBnQC3e2G6Swr8AF9.ankDxYoG4.O6Led2kpdm"}})
			.then(response=>{
			commit('NEW_WORKERS', response.data.record.workers)
			})
		}
	},	
	mutations:{
		SET_WORKERS(state, workers){
			this.state.workers = workers
		},
		NEW_WORKERS(state, name){
			this.state.workers.name = state.workers.unshift(name)
		}

	},
	getters:{}	

})

export default store;
