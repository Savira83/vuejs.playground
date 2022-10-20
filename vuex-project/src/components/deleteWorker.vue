<template>
    <div>
        <button @click=" deleteWorker(id)">delete</button>
    </div>
</template>
<script>
export default {
    data() {
        return { name: '' }
    },
    props: ['id'],
    methods: {
        deleteWorker(id) {
            this.$store.dispatch('deleteWorker', {id: id });
            
        },
    }
}
</script>