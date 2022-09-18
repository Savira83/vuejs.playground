import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import addApi from './addApi.vue'
import addWorkers from './addWorkers.vue'
import notFound from './notFound.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
	{path: '/', name: 'Bitcoin', component: addApi},
	{path: '/addWorkers', name: 'Workers', component: addWorkers},
	{path: '/notFound', name: 'Broken link', component: notFound}]
})

createApp(App)
.use(router)
.mount('#app')
