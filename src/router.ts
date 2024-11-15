import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router