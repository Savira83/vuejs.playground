
import {createRouter, createWebHistory} from 'vue-router'
import addnewWorker from '../components/addnewWorker.vue'
import addWorkerstwo from '../components/addWorkerstwo.vue'
import addWorkers from '../components/addWorkers.vue'



const router = createRouter({
	history: createWebHistory(),
	routes: [
	{path: '/addnewWorker', name: 'newWorker', component: addnewWorker},
	{path: '/addWorkerstwo', name: 'workerstwo', component: addWorkerstwo},
	{path: '/addWorkers', name: 'workers', component: addWorkers},

	]
	
})

export default router;
