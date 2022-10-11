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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
