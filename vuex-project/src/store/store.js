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
    mutations: {
        SET_WORKERS(state, workers) {
            this.state.workers = workers;
        
        },
        NEW_WORKERS_DATA(state, {name, age}) {
            this.state.workers.name = state.workers.push(name)
            this.state.workers.age = state.workers.push(age)
        },
        EDIT_NAME(state, data) {
            // let index = state.workers.indexOf(state.workers[data.id - 1]);
            // state.workers[index].name = data.name;
            let worker = this.getters.getWorkerById(data.id)
            worker.name = data.name;
        },
        DELETE_WORKER(state, data) {
            // let index = state.workers.indexOf(state.workers[data.id])
            let index = state.workers.findIndex(object => {
                return object.id === data.id;
            })
            state.workers.splice(index,1)
        }
    },
    getters: {
        getWorkers(state) {
            return state.workers
        },
        getWorkerById: (state) => (id) => {
            return state.workers.find((i) => i.id === id)
        },
    }
})
export default store;