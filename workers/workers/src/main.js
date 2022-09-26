import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import addHome from './addHome.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
	{path: '/addHome', name: 'Home', component: addHome},
	{path:'/workersDetales/:id', name:'workersDetales', component:()=> import(/*webpackChunkName: 'workersDetales'*/ "./workersDetales")}]
})

createApp(App)
.use(router)
.mount('#app')
