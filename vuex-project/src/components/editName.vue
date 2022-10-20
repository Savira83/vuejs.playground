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
    methods: {
        editName(id) {
            let oldName = this.$store.getters.getWorkerById(id).name;
            let name = prompt("edd new name", oldName);
           this.$store.dispatch('editName', { name: name, id: id })
        }
    }
}
</script>