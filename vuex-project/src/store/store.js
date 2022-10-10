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
	},	
	mutations:{
		SET_WORKERS(state, workers){
			this.state.workers = workers
		}
	},
	getters:{}

})

export default store;
