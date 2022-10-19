<template>
    <div>
        <button @click=" deleteWorker(id)">delete</button>
    </div>
</template>
<script>
export default {
    data() {
        return { name: '' }
    },
    props: ['id'],
    computed: {
        workers() {
            return this.$store.getters.getWorkers
        },
        /*getWorkersId(data){
        return this.$store.getters.getWorkersById
        console.log(data.id)
        }*/
    },
    methods: {
        deleteWorker(id) {
            let index = this.$store.state.workers.indexOf(this.$store.state.workers[id - 1]);
            console.log(index);
            let worker = this.$store.state.workers.splice(index, 1);
            this.$store.dispatch('deleteWorker', { name: name, id: id }, worker);
        },
        /*getWorkersId(id){
        let index = this.$store.state.workers.find(i =>i.id === id)
        let worker = this.$store.state.workers.splice(index, 1)
        console.log(worker)
        console.log(index)

        }*/
    }
}
</script>