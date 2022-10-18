<template>
  <div v-for = "(worker, id) in workers" :key = "id">
    {{worker.name}}<delete-name :id = "worker.id" ></delete-name>
  </div>
</template>
<script>
import deleteName from './deleteName.vue'
export default{
  components:{
    deleteName,
  },
  computed:{
    workers(){
      return this.$store.state.workers
    },
  },
  mounted(){
      this.$store.dispatch("getWorkers")
    },
   /* methods:{
        deletetElement(id){
        this.$store.state.workers[id].splice(id,1);
      }
    }*/
}
</script>


