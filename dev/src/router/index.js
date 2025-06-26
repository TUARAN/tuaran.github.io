import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/trading-journal',
    name: 'TradingJournal',
    component: () => import('../views/TradingJournal.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/websites',
    name: 'Websites',
    component: () => import('../views/Websites.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/test-animations',
    name: 'TestAnimations',
    component: () => import('../views/TestAnimations.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 