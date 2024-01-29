import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/index',
  //   name: 'index',
  //   component: () => import('../views/Index.vue'),
  // },
  {
    path: '/',
    name:'show',
    component: () => import('../views/Show.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
