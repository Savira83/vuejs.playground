<template>
    <div v-for="(worker, id) in workers" :key="id">
        Name: {{worker.name}} <br>  Age: {{worker.age}} <br> <delete-worker :id="worker.id"></delete-worker>
    </div>
</template>
<script>
import deleteWorker from './deleteWorker.vue'
import {mapState, mapActions } from 'vuex'
export default {
    components: {
        deleteWorker,
    },
    computed: {
        ...mapState([
            'workers'
        ]),
        
    },
     methods: {
        ...mapActions(['getWorkers'])
    },
    mounted() {
        this.getWorkers()
    },
}
</script>