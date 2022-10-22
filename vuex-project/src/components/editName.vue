<template>
    <div>
        <button @click="editNameWorker(id)">edit</button>
    </div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return { name: '' }
    },
    props: ['id'],
    computed:{
        ...mapGetters(['getWorkerById' ])
    },
    methods: {
        ...mapActions({worker:'editName'}),
        editNameWorker(id){
            let oldName  = this.getWorkerById(id).name;
            let name = prompt("edd new name", oldName);
            this.worker({ name: name, id: id })
        }
        /*editName(id) {
            let oldName = this.$store.getters.getWorkerById(id).name;
            let oldName  = this.getWorkerById(id).name
            let name = prompt("edd new name", oldName);
           this.$store.dispatch('editName', { name: name, id: id })
            console.log(oldName)
           
        }*/
    }
}
</script>