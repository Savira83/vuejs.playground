<template>
    <div>
        <button @click="editName(id)">edit</button>
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
        editName(id) {
            //console.log(this.$store.state.workers[id])
            let newName = this.$store.state.workers[id-1].name
            let name = prompt("edd new name", newName)
            this.$store.dispatch('editName', { name: name, id: id })
        }
    }
}
</script>