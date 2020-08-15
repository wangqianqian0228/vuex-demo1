import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '../components/Add.vue'
import Reduce from '../components/Reduce.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/reduce',
    name: 'reduce',
    component:Reduce
  }
]

const router = new VueRouter({
  routes
})

export default router
