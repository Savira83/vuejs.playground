<template>
    <div>
        <button @click="editNameWorker(id)">edit</button>
    </div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {worker :{
            name:' ',
            age:'',
            position:''}}
    },        
    props: ['id'],
    computed:{
        ...mapGetters(['getWorkerById' ])
    },
    methods: {
        ...mapActions({editName:'editWorkerData'}),
        editNameWorker(id){
            let oldName  = this.getWorkerById(id).name;
            let name = prompt("edd new name", oldName);
            this.editName({ name: name, id: id })
        }
    
    }
}
</script>