import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collaborateurs',
    name: 'Collaborateurs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Collaborateurs.vue')
  },
  {
    path: '/correcteurs',
    name: 'Correcteurs',
    component: () => import('../views/Correcteurs.vue')
  },
  {
    path: '/quizz',
    name: 'Quizz',
    component: () => import('../views/Quizz.vue')
  },
  {
    path: '/creer_question',
    name: 'Creer_question',
    component: () => import('../views/Creer_question.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
