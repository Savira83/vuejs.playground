<template>
  <div v-for = "worker in workers" :key = "worker.id">
    {{worker.name}}
  </div>
</template>
<script>

export default{
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


