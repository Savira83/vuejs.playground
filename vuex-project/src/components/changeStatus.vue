<template>
    <button @click="getStatus(id)">Show/Hide Id</button>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {

    data() {
        return {
            worke
            : { status: false }
        }
    },
    props: ['id'],
    computed: {
        ...mapGetters(['getWorkerById'])

    },
    methods: {
        ...mapActions(['editWorker']),

        getStatus(id) {
            let status = this.getWorkerById(id).status

            status = !status
            this.editWorker({ status: status, id: id })
            console.log(status)
        },
    }
}
</script>