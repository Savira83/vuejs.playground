<template>
    <div>
        <button @click=" deletetWorker(id)">delete</button>
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
    },
    methods: {
        deletetWorker(id) {
        console.log(this.$store.state.workers[id-1]);
            let index = this.$store.state.workers.indexOf(this.$store.state.workers[id-1]);
            console.log(index);
            let worker = this.$store.state.workers.splice(index ,1);
           this.$store.dispatch('deleteWorker', worker);
        }
    }
}
</script>
index = state.cars.findIndex(ca