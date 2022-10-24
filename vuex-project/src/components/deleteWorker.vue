<template>
    <div>
        <button @click=" deleteWorker({id:id})">delete</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return { name: '' }
    },
    props: ['id'],
    methods: {
        ...mapActions(['deleteWorker']),
    }
}
</script>