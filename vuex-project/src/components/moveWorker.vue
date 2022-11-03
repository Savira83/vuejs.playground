<template>
    <button @click="moveUp(id)">move</button>
</template>
<script>
 import { mapGetters, mapActions } from 'vuex'
export default {

    data() {
        return {  worker: []

        }
    },
     props: ['id'],

    computed: {
     ...mapGetters(['getWorkerIndex']),
    },
    methods: {

         ...mapActions(['moveWorker']),
        moveUp(id){
            this.moveWorker({id:id});
        
        


        }
    }
}

</script>
