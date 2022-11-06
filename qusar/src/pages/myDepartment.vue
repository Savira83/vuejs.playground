<template>
  <q-page class="bg-grey-3 column">
    <q-list
     class="bg-white"
     separator
     bordered>
      

      <q-item  
v-for = "(task, id) in tasks"
:key = "id"
@click="task.done = !task.done"
clickable
      v-ripple>
        <q-item-section avatar>
          <q-checkbox 
          v-model="task.done" 
          class="no-pointer-events"
          color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
      </q-item>

    
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
   return{
    tasks:[
    {title: 'Go to gym',
    done:false
    },
    {title: 'Go to work',
    done:false
    },
    {title: 'Wash my car',
    done:false
    },
    ]
   }
  }
 
})
</script>
