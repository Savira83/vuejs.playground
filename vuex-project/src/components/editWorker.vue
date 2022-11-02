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
            <button v-if="id" type="submit" @click.prevent="editWorkerData(id)">Edit</button>
            <button v-if="!id" type="submit" @click.prevent="addWorkers">add</button>
        </form>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){return{
        workers:[]
    }
},
   
    computed: {
        ...mapGetters(['getWorkerById', 'getWorkerIndex' ]),
        worker: {
            get() {
                if (this.id) {
                    return this.getWorkerById(this.id)
                } else {
                    return {
                        name: '',
                        age: '',
                        position: ''
                    }
                }
            },
            set(value) {
                let action = 'NEW_WORKER'
                if (this.id) {
                    action = 'EDIT_WORKER'
                } 
                this.$store.commit(action, value)
            }
        },
        id() {
            if (this.$route.params.id !== undefined) {
                return parseInt(this.$route.params.id)
            } else {
                return null
            }
        }
    },
    methods: {
        ...mapActions(['editWorker', 'addNewWorkerData', 'moveWorkerToStart']),
        editWorkerData(id) {
            let name = this.getWorkerById(id).name
            let age = this.getWorkerById(id).age
            let position = this.getWorkerById(id).position
            let index = this.getWorkerIndex(id)
            if (confirm('Do you realy want to change data of worker?')) {
                this.editWorker({ name: name, age: age, position: position, id: id })
                this.$router.push({ name: 'workers' })
                console.log(index)
            }
        },
        addWorkers() {
            this.addNewWorkerData(this.worker);
            this.$router.push({ name: 'workers' })
        }
       

       
    }
}
</script>