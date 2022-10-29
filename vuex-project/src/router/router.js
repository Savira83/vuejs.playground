
import {createRouter, createWebHistory} from 'vue-router'
import addnewWorker from '../components/addnewWorker.vue'
import editWorker from '../components/editWorker.vue'
import workersList from '../components/workersList.vue'
import changeWorker from '../components/changeWorker.vue'



const router = createRouter({
	history: createWebHistory(),
	routes: [
	{path: '/addnewWorker', name: 'newWorker', component: addnewWorker},
	{path: '/editWorker/:id', name: 'editWorker', component: editWorker},
	{path: '/workersList', name: 'workers', component: workersList},
	{path: '/changeWorker/:id', name: 'cange', component:changeWorker}

	]
	
})

export default router;
