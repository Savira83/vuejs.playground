<template>
    <div class="worker" v-for="(worker, ind) in workers" :key="ind">
        {{ind+1}}. Name: {{worker.name}} <br> Age: {{worker.age}} <br> Position:{{worker.position}}<br><span v-if="worker.status" id="workerId"> id:{{worker.id}}</span>
        <delete-worker :id="worker.id"></delete-worker>
        <button @click="changeWorkerData(worker.id)">Edit</button>
        <move-worker :id="worker.id"></move-worker>

        <router-view></router-view>
    </div>
</template>
<script>
import deleteWorker from './deleteWorker.vue'
import moveWorker from './moveWorker.vue'


import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    components: {
        deleteWorker,
        moveWorker

    },
    computed: {
        ...mapState([
            'workers'
        ]),
        ...mapGetters(['getWorkerById']),
    },
    methods: {
        ...mapActions(['getWorkers']),
        changeWorkerData(id) {
            this.$router.push({ name: 'editWorker', params: { id: id } })
        },
    },
    mounted() {
        this.getWorkers()
    },
}
</script>
<style>
.worker {
    border: solid;
    border-color: green;
    width: 150px;
    margin: 10px;
}

#workerId {
    color: red;
}
</style>