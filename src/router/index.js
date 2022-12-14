import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'ContactList',
    component: () => import('../components/ContactList.vue')
  },
  {
    path:'/updateContact',
    name:'ContactUpdate',
    component:() => import('../components/ContactUpdate.vue')
  },
  {
    path:'/addContact',
    name:'ContactAdd',
    component:() =>import('../components/ContactAdd.vue')
  },
  {
    path:'/login',
    name:'LoginUser',
    component:() =>import('../components/LoginUser.vue')
  },
  {
    path:'/userRegistration',
    name:'UserRegistration',
    component:() =>import('../components/UserRegistration.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
