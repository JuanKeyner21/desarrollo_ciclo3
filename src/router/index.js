import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Proximos_Estrenos from '../views/proximos_estrenos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/proximos_estrenos',
    name: 'Proximos Estrenos',
    component: Proximos_Estrenos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
