<template>
    <div class = "worker" v-for="(worker, ind) in workers" :key="ind">
       {{ind+1}}. Name: {{worker.name}} <br>  Age: {{worker.age}} <br> Position:{{worker.position}}<br><span v-if="worker.status" id="workerId"> id:{{worker.id}}</span><delete-worker :id="worker.id"></delete-worker ><change-status :id="worker.id"></change-status>
       <!-- <edit-worker :id = "worker.id"></edit-worker>  -->
       <button @click="changeWorkerData(worker.id)">Edit</button>
      
       <router-view></router-view>
    </div>
</template>
<script>
import deleteWorker from './deleteWorker.vue'
import changeStatus from './changeStatus.vue'
// import editWorker from './editWorker.vue'


import {mapState, mapActions, mapGetters} from 'vuex'
export default {
    components: {
        deleteWorker,
        changeStatus,
        // editWorker
    },
    computed: {
        ...mapState([
            'workers'
        ]),
        ...mapGetters(['getWorkerById']),
       
    },
    
     methods: {
        ...mapActions(['getWorkers']),

        changeWorkerData(id){ 
        this.$router.push({name:'editWorker', params: {id: id} }) //???
        }
    },
    mounted() {
        this.getWorkers()
    },
}
</script>
 <style>
 .worker{
   border: solid;
   border-color: green;
   width: 150px;
   margin: 10px;
 }
 #workerId{
    color: red;
 }
    </style>