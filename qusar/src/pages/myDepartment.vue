<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
        <q-input 
        filled
         v-model="newTask"
         @keyup.enter="addTask"
        class="col"
        square
        bg-color="white"
        placeholder="Add task"  
        dense>
        <template v-slot:before>
          <q-icon name="event" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:append>
          <q-btn 
          @click="addTask"
          round 
          dense 
          flat 
          icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item v-for="(task, id) in tasks" :key="id" @click="task.done = !task.done" :class="{'done bg-blue-1': task.done}" clickable v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn @click.stop="deleteTask(id)" flat round dense color="primary" icon="delete" />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <div class="text-h5 text-primarytext-center">
        <q-icon
        name="check"
        size = "100px"
        color="primary"
        />
        No tasks
        
      </div>
      
    </div>
  </q-page>
</template>
<script>

import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  data() {
    return {
      newTask:'',
      tasks: [
      // {
        //   title: 'Go to gym',
        //   done: false
        // },
        // {
        //   title: 'Go to work',
        //   done: false
        // },
        // {
        //   title: 'Wash my car',
        //   done: false
        // },
      ]
    }
  },
  methods: {
    deleteTask(id) {
       this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(id, 1)
        this.$q.notify('Task eleted')
      })
      
    },
    addTask(){
      this.tasks.push({
        title: this.newTask,
        done:false
      })
      this.newTask = ''
    }


  }

})

</script>
<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
  .no-tasks{
    opacity: 0.5;
  }
}

</style>
