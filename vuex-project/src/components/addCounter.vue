<template>
  <div>
    <button @click = 'increment'>+</button>
    {{count}}
    <button @click = 'decrement'>-</button>
  </div>
</template>
<script>
export default{
  data(){
    return {
      count: 0}
    },
  methods:{
    decrement(){
      this.count--
    },
    increment(){
      this.count++
    }
  } 
  
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
