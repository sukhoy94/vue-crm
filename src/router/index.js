import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '@/views/Categories'
import Login from '@/views/Login'
import History from '@/views/History'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'auth' },
    component: Login
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: Categories
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },
    component: History
  },
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
