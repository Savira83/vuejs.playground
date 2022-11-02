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
                    commit('NEW_WORKER', response.data)
                })
        },
        editWorker({ commit }, data) {
            axios
                .patch(`//localhost:3000/workers/${data.id} `, data)
                .then(response => {
                    commit('EDIT_WORKER', response.data)
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
    mutations: {
        SET_WORKERS(state, workers) {
            state.workers = workers;
        },
        NEW_WORKER(state, worker) {
           state.workers.unshift(worker) 
        //   let index = state.workers.findIndex((i) => i.id === worker.id);
        // this.workers.splice(0, 0, this.workers.splice(index, 1)[0])
        },
         EDIT_WORKER(state, data) {
           const index = state.workers.findIndex((i) => i.id === data.id);
           state.workers[index] = data 
        },
        DELETE_WORKER(state, data) {
            let index = state.workers.findIndex(object => {
                return object.id === data.id;
            })
            state.workers.splice(index, 1)
        },
       
    },
    getters: {
        getWorkers(state) {
            return state.workers
        },
        getWorkerById: (state) => (id) => {
            return state.workers.find((i) => i.id === id)
        },
        getWorkerIndex: (state) => (id) => {
            return state.workers.findIndex((i) => i.id === id);
        }
    }
})
export default store;