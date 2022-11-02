
import {createRouter, createWebHistory} from 'vue-router'
import editWorker from '../components/editWorker.vue'
import workersList from '../components/workersList.vue'




const router = createRouter({
	history: createWebHistory(),
	routes: [
	{path: '/addnewWorker', name: 'newWorker', component: editWorker},
	{path: '/editWorker/:id', name: 'editWorker', component: editWorker},
	{path: '/workersList', name: 'workers', component: workersList},
	

	]
	
})

export default router;
