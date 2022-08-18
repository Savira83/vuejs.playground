<template>
	<div>
		<ul>
			<li>
				{{name}}
				<input type="button" value="+" @click="$emit('addCategory')">
			</li>
		</ul> 
		<AddTask v-for = 'task in category.tasks' :key = 'task.index' :taskName='task.taskName'></AddTask>
	</div>
</template>

<script>
import AddTask from './components/AddTask.vue'
export default{
	components:{
		AddTask
	},
	props:['id','name'],
	//emits: ['addCategory'],
	data (){
    return{
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


}

	
</script>