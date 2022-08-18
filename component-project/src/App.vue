<template>
  <TaskList v-for='category  in categories'
  :key = 'category.id'
  :name = 'category.name'
  @add-category='addNewCategory'
  ></TaskList>
</template>

<script>
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    TaskList,
  },
  data (){
    return{
      categories:       
        [
          {
          id:1,
          name: 'category 1',
          tasks: [{
              index:'dt',
              taskName: 'Task 1.1',
              status: false,
              },
              {
              taskName: 'Task 1.2',
              status: false,
          }] 
          },]
    }
  },
  methods:{
    addNewCategory: function(){ 
            this.categories.push({name: prompt('Add new category'), tasks:[]});
     }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
