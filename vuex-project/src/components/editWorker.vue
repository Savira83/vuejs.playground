<template>
    <div>
        <form>
            <label>Name:
                <input v-model="worker.name">
            </label>
            <label>Age:
                <input type="text" v-model="worker.age">
            </label>
            <label>Position:
                <input type="text" v-model="worker.position">
            </label>
            <button type="submit" @click.prevent="editWorkerData(id)">Edit/add</button>
            <button type="submit" @click.prevent="addWorkers(id)">add</button>
        </form>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            is_edit: false
        }

    },
    computed: {
        ...mapGetters(['getWorkerById']),


        worker: {
            get() {
                if (!this.isId) {
                    return this.getWorkerById(this.id)
                } else {
                    return {
                        name: '',
                        age: '',
                        position: '',
                        is_edit: false
                    }
                }
            },
            set(value) {
                this.$store.commit('EDIT_WORKER', value)
            }
        },

        id() {

            return parseInt(this.$route.params.id)
        }
    },
    isId() {
        let status = this.getWorkerById(this.id).is_edit ///  doesn't work how i need
        let id = this.getWorkerById(this.id).id
        if (!status) {
            return { id: id }
        } else {
            return { id: null }
        }
    },

    methods: {
        ...mapActions(['editWorker', 'addNewWorkerData']),

        editWorkerData(id) {
            let name = this.getWorkerById(id).name
            let age = this.getWorkerById(id).age
            let position = this.getWorkerById(id).position
            if (confirm('Do you realy want to change data of worker?')) {
                this.editWorker({ name: name, age: age, position: position, id: id })
            }
        },
        addWorkers() {
            this.addNewWorkerData(this.worker)
            this.worker = {}
        }

    }
}
</script>