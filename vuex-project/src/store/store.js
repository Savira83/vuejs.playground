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
                .patch(`//localhost:3000/workers/}${data.id} `, data, {header: {'Content-Type': 'application/json'}})
                .then(response => {
                    commit('EDIT_NAME', response.data)
                })
        },
        deleteWorker({ commit }, id) {
            axios
                .delete(`//localhost:3000/workers/}${id} `, id, )
                .then(response => {
                    commit('EDIT_NAME', response.data)
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
        EDIT_NAME(state, newName) {
            state.workers.name = newName;
        },
        DELETE_WORKER(state, worker) {
            state.workers = worker

        }
    },
    getters: {
        getWorkers(state) {
            return state.workers
        },
    }
})

export default store;