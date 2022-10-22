<template>
    <div v-for="(worker, id) in workers" :key="id">
        {{worker.name}}<delete-worker :id="worker.id"></delete-worker>
    </div>
</template>
<script>
import deleteWorker from './deleteWorker.vue'
import { mapState, mapActions} from 'vuex'
export default {
    components: {
        deleteWorker,
    },
    computed: {
        ...mapState([
            'workers'
        ])
    },
        /*workers() {
            return this.$store.state.workers
        },*/

    /*mounted() {
        this.$store.dispatch("getWorkers")
    },*/
    methods: {
        ...mapActions([
            'getWorkers'])

    },
}
</script>