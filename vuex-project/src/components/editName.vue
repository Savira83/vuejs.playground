<template>
    <div>
        <button @click="editName(id)">edit</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return { name: '' }
    },
    props: ['id'],
    computed: {
        ...mapGetters([
            'getWorkerById'
        ])
    },
    methods: {
        editName(id) {
            let oldName = this.$store.state.workers[id].name;
            let name = prompt("edd new name", oldName);
           this.$store.dispatch('editName', { name: name, id: id })
        }
    }
}
</script>