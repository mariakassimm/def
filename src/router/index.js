import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue';   

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../components/AboutPage.vue')
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../components/HomePage.vue')
  // },
  // {
  //   path: '/hi',
  //   name: 'hi',
  //   component: () => import('../components/ProPa.vue')
  // },
  {
    path: '/what',
    name: 'what',
    component: () => import('../components/WebSite.vue')
  },
  {
    path: '/woah',
    name: 'woah',
    component: () => import('../components/OneTime.vue')
  },
//   {
//     path: '/why',
//     name: 'why',
//     component: () => import('../components/LastOne.vue')
//   },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
