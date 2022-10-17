<template>
  <div v-for = "(worker, id) in workers" :key = "id">
    {{worker.name}} <edit-name   :id = "worker.id" :name ="worker.name" @edit-name = "editName(id)">  </edit-name>
  </div>
</template>
<script>
import editName from './editName.vue'
export default{
  data(){
    return {name: ''}
  },
  components:{
    editName,
  },
  computed: {
    workers(){
      return this.$store.state.workers
    },
  },
  mounted(){
      this.$store.dispatch("getWorkers")
    },
    methods:{
      editName(id){
        let newName = this.$store.state.workers[id]
        newName.name = prompt()
        this.$store.dispatch('editName',  {name:newName.name})
      }
    }
}
</script>