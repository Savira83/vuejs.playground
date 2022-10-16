<template>
  <div v-for = "worker in workers" :key = "worker.id">
    {{worker.name}}<delete-name></delete-name>
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
}
</script>


