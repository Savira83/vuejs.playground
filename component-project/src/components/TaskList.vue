<template>
	<div>
		<ul>
			<li v-for='(category, id)  in categories'
  :key = 'id'
  :name = 'category.name'
  @add-category='addNewCategory(id)'>
				{{category.name}}
				<input type="button" value="+" @click='addNewCategory'>
				<AddTask v-for = '(task, ind) in category.tasks' :key = 'ind' :taskName='task.taskName' :status = 'task.status' @add-task = 'AddNewTask(id, ind)' @change-status = 'changeTaskStatus(id, ind)'>
        </AddTask>
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
	props:['name'],
	//emits: ['addCategory']
	data (){
    return {
      categories:       
        [
          {
          name: 'category 1',
          tasks: [{
              taskName: 'Task 1.1',
              status: false,
              },
              {
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
     },
     AddNewTask: function (id) {
            this.categories[id].tasks.push({taskName: prompt('Add new task'), status: false})
          },
      changeTaskStatus: function (id, ts){
            let task = this.categories[id].tasks[ts];
            task.status = true;
          },
  }
  }
</script>
