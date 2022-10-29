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
            <button type="submit" @click.prevent="editWorkerData">Add</button>
        </form>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: ['id'],
    computed: {
        ...mapGetters(['getWorkerById']),
        worker: {
            get() {
                return this.getWorkerById(this.id)
            },
            set(value) {
                this.$store.commit('EDIT_WORKER', value)
            }
        },
         // workerIdParams(){
         //        return parseInt(this.$route.params.id)
         //    },
         //    workerId(){
         //        return this.getWorkerById(this.id)
         //    },
    },
    methods: {
        ...mapActions(['editWorker']),
        editWorkerData() {
            let name = this.getWorkerById(this.id).name
            let age = this.getWorkerById(this.id).age
            let position = this.getWorkerById(this.id).position
            if (confirm('Do you realy want to change data of worker?')) {
                this.editWorker({ name: name, age: age, position: position, id: this.id })
            }
        }
    }
}
</script>