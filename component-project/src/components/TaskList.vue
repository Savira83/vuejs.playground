<template>
	<div>
    <div>
      <h3>Fals category<input type="button" value="+" @click='addNewCategory'></h3>
		<ol>
			<li v-for='(category, id)  in categories' :key = 'id'>
				{{category.name}}
      <button @click='AddNewTask(id)'  >+</button>
      <span v-for = '(task, ind) in category.tasks' :key = 'ind'>
        <span v-if='!task.status'>
				<TaskItem  :taskName='task.taskName' :status = 'task.status' @add-task = 'AddNewTask' @change-status = 'changeTaskStatus(id, ind)' @edit-task = 'editTask(id, ind)' @remove-task = 'deleteTask (id, ind)' @move-up = 'moveUp(id, ind)' @move-down = 'moveDown(id, ind+1)'>
        </TaskItem>
        </span>
      </span>
			</li>
		</ol>
    </div> 
    
    <div>
      <h3>True category<input type="button" value="+" @click='addNewCategory'></h3>
      <ul>
        <li v-for='(category, id)  in categories' :key = 'id'>
          {{category.name}}
        <button @click='AddNewTask(id)'  >+</button>
        <span v-for = '(task, ind) in category.tasks' :key = 'ind'>
          <div v-if='task.status'>
          <TaskItem  :taskName='task.taskName' :status = 'task.status' @edit-task = 'editTask(id, ind)' @remove-task = 'deleteTask (id, ind)' >
          </TaskItem><button @click = 'turnBackTask(id,ind)'>↑</button>
          </div>
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
      editTask: function (id, tid){
            let task = this.categories[id].tasks[tid];
            task.taskName = prompt('Adit task', task.taskName);
          },
      turnBackTask: function(id, tid){
        let task = this.categories[id].tasks[tid];
        task.status = false;
      },
      deleteTask: function (id, tid){
          this.categories[id].tasks.splice(tid, 1);
      },
      moveUp: function(id, fromid){
        let task = this.categories[id].tasks[fromid]
        this.categories[id].tasks.splice(fromid, 1)
        this.categories[id].tasks.splice(fromid-1, 0, task);

      },
       moveDown: function(id, fromid){
        let task = this.categories[id].tasks[fromid]
        this.categories[id].tasks.splice(fromid, 1)
        this.categories[id].tasks.splice(fromid+1, 0, task);

      }
     
  }
  }
</script>
