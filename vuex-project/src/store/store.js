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
        addWorkers({ commit },  data) {
            axios
                .post('http://localhost:3000/workers', data)
                .then(response => {
                    commit('NEW_WORKERS', response.data)
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
                .delete(`//localhost:3000/workers/${data.id} `, data )
                .then(response => {
                    commit('DELETE_WORKER', response.data)
                })
        }

    },
    mutations: {
        SET_WORKERS(state, workers) {
            this.state.workers = workers
        },
        NEW_WORKERS(state, name) {
            this.state.workers.name = state.workers.unshift(name)
        },
        EDIT_NAME(state, data) {
            let index =state.workers.indexOf(state.workers[data.id-1]);
            state.workers[index].name=data.name;
            console.log(index);
            console.log(data.name)
        },
        DELETE_WORKER(state, data) {
            let index =state.workers.indexOf(state.workers[data.id-1])
            state.workers[index] = data.workers
            console.log(data)

        }
    },
    getters: {
        getWorkers(state) {
            return state.workers
        },
        getWorkersById(state, id) {
            return state.workers.find(i =>i.id === id)
        },
    }
})

export default store;