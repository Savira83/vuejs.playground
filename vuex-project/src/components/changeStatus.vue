<template>
    <button @click="getStatus(id)">Show/Hide Id</button>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {

    data() {
        return {
            worker
            : { is_edit: false }
        }
    },
    props: ['id'],
    computed: {
        ...mapGetters(['getWorkerById'])

    },
    methods: {
        ...mapActions(['editWorker']),

        getStatus(id) {
            let status = this.getWorkerById(id).is_edit

            status = !status
            this.editWorker({ is_edit: status, id: id })
            console.log(status)
        },
    }
}
</script>