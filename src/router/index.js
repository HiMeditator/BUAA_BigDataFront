import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/image',
    name: 'image',
    component: () => import('../views/Image/ImageView.vue')
  },
  {
    path: '/container',
    name: 'container',
    component: () => import('../views/Container/ContainerView.vue')
  },
  {
    path: '/app-deploy',
    name: 'app-deploy',
    component: () => import('../views/AppDeploy.vue')
  },
  {
    path: '/axios-test',
    name: 'axios-test',
    component: () => import('../views/AxiosTest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
