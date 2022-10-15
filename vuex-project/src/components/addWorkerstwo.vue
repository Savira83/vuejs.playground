<template>
  <div v-for = "worker in workers" :key = "worker.id">
    {{worker.name}} <edit-name></edit-name>
  </div>
</template>
<script>
import editName from './editName.vue'
export default{
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
}
</script>