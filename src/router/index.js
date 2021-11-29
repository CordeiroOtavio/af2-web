import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import YourTeam from '../views/YourTeam'
import Table from '../views/Table'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/yourteam',
    name: 'YourTeam',
    component: YourTeam
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
