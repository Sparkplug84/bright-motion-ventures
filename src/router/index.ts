import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
// import ProjectPage from '../views/ProjectPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutPage.vue'),
      meta: {
        title: 'About',
      },
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsPage.vue'),
      meta: {
        title: 'Products',
      },
    },
    {
      path: '/services',
      name: 'services',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ServicesPage.vue'),
      meta: {
        title: 'Services',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactPage.vue'),
      meta: {
        title: 'Contact',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 } // scroll to top
  },
})

router.beforeEach((to, from, next) => {
  const baseTitle = `BrightMotion Ventures | Empowering Africa's sustainable development`
  const pageTitle = to.meta.title
  document.title = pageTitle ? `${baseTitle} | ${pageTitle}` : baseTitle
  next()
})

export default router
