import { createTemplateLiteral } from '@vue/compiler-core'
import { createRouter, createWebHistory } from 'vue-router'
import pagina_principal from '../views/pagina_principal.vue'
import inicio_sesion from '../views/inicio_sesion.vue'
import cartelera from '../views/cartelera.vue'
import proximos_estrenos from '../views/proximos_estrenos.vue'
import tarifas from '../views/tarifas.vue'
import comidas from '../views/comidas.vue'

const routes = [
  {
    path: '/',
    name: 'pagina_principal',
    component: pagina_principal
  },
  {
    path: '/inicio_sesion',
    name: 'inicio_sesion',
    component: inicio_sesion
  },
  {
    path: '/cartelera',
    name: 'cartelera',
    component: cartelera
  },
  {
    path: '/proximos_estrenos',
    name: 'proximos_estrenos',
    component: proximos_estrenos
  },
  {
    path: '/tarifas',
    name: 'tarifas',
    component: tarifas
  },
  {
    path: '/comidas',
    name: 'comidas',
    component: comidas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
