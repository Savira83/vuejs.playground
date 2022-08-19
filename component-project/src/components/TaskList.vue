<template>
	<div>
		<ul>
			<li v-for='category  in categories'
  :key = 'category.id'
  :name = 'category.name'
  @add-category='addNewCategory'>
				{{category.name}}
				<input type="button" value="+" @click='addNewCategory'>
				<AddTask v-for = 'task in category.tasks' :key = 'task.index' :taskName='task.taskName' ></AddTask>
			</li>
		</ul> 
	</div>
</template>

<script>
import AddTask from './AddTask.vue'
export default{
	components:{
		AddTask
	},
	props:['id','name'],
	//emits: ['addCategory']
	data (){
    return {
      categories:       
        [
          {
          id:1,
          name: 'category 1',
          tasks: [{
              index: 'dt',
              taskName: 'Task 1.1',
              status: false,
              },
              {
              index: 'dt1',
              taskName: 'Task 1.2',
              status: false,
          }] 
          }
         ]
    }
   },
  methods:{
    addNewCategory: function(){ 
      this.categories.push({name: prompt('Add new category'), tasks:[]});
     }
  }
  }
</script>
