<template>
	<div>
    <div>
      <h3>Fals category<input type="button" value="+" @click='addNewCategory'></h3>
		<ul>
			<li v-for='(category, id)  in categories' :key = 'id'>
				{{category.name}}
      <button @click='AddNewTask(id)'  >+</button>
      <span v-for = '(task, ind) in category.tasks' :key = 'ind'>
        <span v-if='!task.status'>
				<TaskItem  :taskName='task.taskName' :status = 'task.status' @add-task = 'AddNewTask' @change-status = 'changeTaskStatus(id, ind)'>
        </TaskItem>
        </span>
      </span>
			</li>
		</ul>
    </div> 
    
    <div>
      <h3>True category<input type="button" value="+" @click='addNewCategory'></h3>
      <ul>
        <li v-for='(category, id)  in categories' :key = 'id'>
          {{category.name}}
        <button @click='AddNewTask(id)'  >+</button>
        <span v-for = '(task, ind) in category.tasks' :key = 'ind'>
          <span v-if='task.status'>
          <TaskItem  :taskName='task.taskName' :status = 'task.status' @add-task = 'AddNewTask' @change-status = 'changeTaskStatus(id, ind)'>
          </TaskItem>
          </span>
        </span>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
import TaskItem from './TaskItem.vue'
export default{
	components:{
		TaskItem
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
