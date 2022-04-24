import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const Login=()=>import(/* webpackChunkName:'login' */ '@/views/LoginPage.vue')
const osu=()=>import(/* webpackChunkName:'osu' */ '@/views/OSU.vue')
const help=()=>import(/* webpackChunkName:'help' */ '@/views/Help.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/osu-dev',
    name: 'osu-dev',
    component: osu
  },
  {
    path: '/help',
    name: 'help',
    component: help
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
