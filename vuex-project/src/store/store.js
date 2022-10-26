import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        workers: []
    },
    actions: {
        getWorkers({ commit }) {
            axios
                .get('http://localhost:3000/workers')
                .then(response => {
                    commit('SET_WORKERS', response.data)
                })
        },
        addNewWorkerData({ commit }, data) {
            axios
                .post('http://localhost:3000/workers', data)
                .then(response => {
                    commit('NEW_WORKERS_DATA', response.data)
                })
        },
        
        editName({ commit }, data) {
            axios
                .patch(`//localhost:3000/workers/${data.id} `, data)
                .then(response => {
                    commit('EDIT_NAME', response.data)
                })
        },
        deleteWorker({ commit }, data) {
            axios
                .delete(`//localhost:3000/workers/${data.id}`)
                .then(() => {
                    commit('DELETE_WORKER', data)
                })
        }
    },
    changeStatus({commit}, data){
        axios
        .patch(`//localhost:3000/workers/${data.id} `, data)
                .then(response => {
                    commit('CHANGE_STATUS', response.data)
                })
    },
    mutations: {
        SET_WORKERS(state, workers) {
            this.state.workers = workers;
        
        },
        NEW_WORKERS_DATA(state, worker) {
            state.workers.push(worker)
           
        },
        EDIT_NAME(state, data) {
            let worker = this.getters.getWorkerById(data.id)
            worker.name = data.name;
            worker.age = data.age;
            worker.position = data.position
            worker.status = data.status

        },
        DELETE_WORKER(state, data) {
            let index = state.workers.findIndex(object => {
                return object.id === data.id;
            })
            state.workers.splice(index,1)
        }
    },
    CHANGE_STATUS(state, data){
        let worker = this.getters.getWorkerById(data.id)
        worker.status = data.status
    },
    getters: {
        getWorkers(state) {
            return state.workers
        },
        getWorkerById:(state) => (id) => {
            return state.workers.find((i) => i.id === id)
        },
         getWorkerIndex: (state) => (id) => {
            return state.workers.findIndex((i) => i.id === id);
            }
        
    }
})
export default store;