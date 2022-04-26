import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const Login=()=>import(/* webpackChunkName:'login' */ '@/views/LoginPage.vue')
const osu=()=>import(/* webpackChunkName:'osu' */ '@/views/OSU.vue')
const help=()=>import(/* webpackChunkName:'help' */ '@/views/Help.vue')
const apply=()=>import(/* webpackChunkName:'apply' */ '@/views/Apply.vue')
const image1=()=>import(/* webpackChunkName:'image1' */ '@/views/ImageRoute.vue')
const departement=()=>import(/* webpackChunkName:'departement' */ '@/views/Departement.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/image1',
    name: 'image1',
    component: image1
  },
  {
    path: '/departement',
    name: 'departement',
    component: departement
  },
  {
    path: '/apply',
    name: 'apply',
    component: apply
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
