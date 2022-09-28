<template>
  <div>
    <button @click = "increment">+</button>
    {{count}}
    <button @click = "decrement">-</button>
  </div>

</template>

<script>


export default {
  name: 'App',
  
  data(){
    return {
      count:0}
    },

  methods:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    }
  }
}
</script>

