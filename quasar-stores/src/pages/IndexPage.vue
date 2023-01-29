<template>
  <q-page class="flex flex-center">
    <div>
      <q-toggle v-model="drawerState"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
  setup(){
   const $store= useStore()

   const drawerState = computed({
    get:()=>$store.state.showcase.drawerState,
    set:()=>{
      $store.commit('showcase/updateDrawerState', val)
    }
   })
   return{
    drawerState
   }
  }
})
</script>
