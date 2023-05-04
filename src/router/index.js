import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
    path: '/gatos',
    name: 'gatos',
    component: () => import('../views/GatosView.vue')
    },
    {
      path: '/gatos',
      name: 'gatos',
      component: () => import('../views/HobbiesView.vue')
      }
  ]
})

export default router