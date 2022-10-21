<template>
    <div v-for="(worker, id) in workers" :key="id">
        {{worker.name}} <edit-name :id="worker.id"> </edit-name>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import editName from './editName.vue'
export default {
    data() {
        return { name: '' }
    },
    components: {
        editName,
    },
    computed: {
        ...mapState([
            'workers'
        ])
       /*workers() {
            return this.$store.getters.getWorkers
        },*/
    },
    mounted() {
        this.$store.dispatch("getWorkers")
    },
}
</script>