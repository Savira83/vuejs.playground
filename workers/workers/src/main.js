import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
//import notFound from './notFound.vue'
//import addIryna from './addIryna.vue'
//import addMaryna from './addMaryna.vue'
//import addOleg from './addOleg.vue'
//import addDiana from './addDiana.vue'
import addHome from './addHome.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
	{path: '/addHome', name: 'Home', component: addHome},
	{path: '/addIryna', name: 'Iryna', component: () => import(/*webpackChunkName: 'iryna'*/"./addIryna.vue")},
	{path: '/addMaryna', name: 'Maryna', component: () => import(/*webpackChunkName: 'maryna'*/"./addMaryna.vue")},
	{path: '/addOleg', name: 'Oleg', component: () => import(/*webpackChunkName: 'oleg'*/"./addOleg.vue")},
	{path: '/addDiana', name: 'Diana', component: () => import(/*webpackChunkName: 'diana'*/"./addDiana.vue")},
	{path: '/notFound', name: 'Broken link', component: () => import(/*webpackChunkName: 'notFound'*/"./notFound.vue")}]
})

createApp(App)
.use(router)
.mount('#app')
