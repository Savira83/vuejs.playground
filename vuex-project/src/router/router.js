
import {createRouter, createWebHistory} from 'vue-router'
import addnewWorker from '../components/addnewWorker.vue'
import addWorkerstwo from '../components/addWorkerstwo.vue'
import workersList from '../components/workersList.vue'



const router = createRouter({
	history: createWebHistory(),
	routes: [
	{path: '/addnewWorker', name: 'newWorker', component: addnewWorker},
	{path: '/addWorkerstwo', name: 'workerstwo', component: addWorkerstwo},
	{path: '/workersList', name: 'workers', component: workersList},

	]
	
})

export default router;
