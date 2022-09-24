import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
//import addApi from './addApi.vue'
//import addWorkers from './addWorkers.vue'
import notFound from './notFound.vue'
import addIryna from './addIryna.vue'
import addMaryna from './addMaryna.vue'
import addOleg from './addOleg.vue'
import addDiana from './addDiana.vue'
import addHome from './addHome.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
	//{path: '/', name: 'Bitcoin', component: addApi},
	//{path: '/addWorkers', name: 'Workers', component: addWorkers},
	{path: '/addHome', name: 'Home', component: addHome},
	{path: '/addIryna', name: 'Iryna', component:addIryna},
	{path: '/addMaryna', name: 'Maryna', component:addMaryna},
	{path: '/addOleg', name: 'Oleg', component: addOleg},
	{path: '/addDiana', name: 'Diana', component: addDiana},
	{path: '/notFound', name: 'Broken link', component: notFound}]
})

createApp(App)
.use(router)
.mount('#app')
