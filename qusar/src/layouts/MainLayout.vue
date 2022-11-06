<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

       <div class="q-px-lg q-pt-xl q-mb-md">
          <div class="text-h3">Department</div>
          <div class="text-subtitle1">Sandey 6 November</div>
        </div>
        <q-img 
        class="header-image absolute-top"
          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/22459223_105251463569517_3371037411247143166_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=oqBk0sNXCHcAX-1-KnN&_nc_ht=scontent-dfw5-2.xx&oh=00_AfA_CM4f-q63SIsC42A5RV7tzTyG5nuwwGAqc1bHHDvvww&oe=638F5F32"/>
      
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 142px); margin-top: 142px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item  to= "/"
            exact 
            clickable 
            v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Department
              </q-item-section>
            </q-item>

            
            <q-item  to = "/help"
            exact 
            clickable 
            v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                help
              </q-item-section>
            </q-item>


            
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/22459223_105251463569517_3371037411247143166_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=oqBk0sNXCHcAX-1-KnN&_nc_ht=scontent-dfw5-2.xx&oh=00_AfA_CM4f-q63SIsC42A5RV7tzTyG5nuwwGAqc1bHHDvvww&oe=638F5F32" style="height: 142px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/272781080_2035998789908139_4453602705481855954_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=1HR13iNuS8oAX8Mfta3&tn=6EyPSL43KRLY5fzc&_nc_ht=scontent-lga3-2.xx&oh=00_AfCYhuPyQgNcIJoZwCY4JE_XF7C1dWH2dFXwroqFFq1wng&oe=636D81AF">
            </q-avatar>
            <div class="text-weight-bold">Iryna Savchenko</div>
            <div>@iryna_savchenk</div>
          </div>
        </q-img>
      </q-drawer>

     <q-page-container>
      <keep-alive>
       <router-view /> 
      </keep-alive>
      
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]


export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  commputed:{
    todayDate(){
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'DDDD MMMM YYYY')

    }
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style lang="scss">
.header-image{
  height: 100%;
  z-index: -1;
 

}
</style>
