<template>
    <div>
        <button @click=" deleteThisWorker(id)">delete</button>
    </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return { name: '' }
    },
    props: ['id'],
    computed:{
    ...mapGetters(['getWorkerById'])
},
    methods: {
        ...mapActions({deleteWorker:'deleteWorker'}),

        deleteThisWorker(id){
            let name = this.getWorkerById(id).name
            if (confirm('Do you realy want to delete' + name + '?')
                ){
                this.deleteWorker({id:id})
            } 
        }
    }
}

</script>