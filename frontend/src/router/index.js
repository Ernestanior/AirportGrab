import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/promotion',
    name: 'Promotion',
    component: () => import('@/views/promotion/Promotion.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine/Mine.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/order/Order.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('@/views/faq/ServiceAd.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('@/views/faq/Faq.vue')
  },
  {
    path: '/pickup',
    name: 'Pickup',
    component: () => import('@/views/jieji/MainForm.vue')
  },
  {
    path: '/dropoff',
    name: 'Dropoff',
    component: () => import('@/views/jieji/MainForm.vue')
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import('@/views/order/confirm/Confirm.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/order/detail/OrderDetail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/mine/login/Login.vue')
  },
  {
    path: '/login/forgot',
    name: 'Forgot',
    component: () => import('@/views/mine/login/forgot/Forgot.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/mine/register/Register.vue')
  },
  {
    path: '/register/password',
    name: 'Password',
    component: () => import('@/views/mine/register/Password.vue')
  },
  {
    path: '/verificate',
    name: 'Verificate',
    component: () => import('@/views/mine/verificate/Verificate.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('@/views/mine/setpage/Setting.vue')
  },
  {
    path: '/setting/profile',
    name: 'Profiledetail',
    component: () => import('@/views/mine/setpage/detail/Detail.vue')
  },
  {
    path: '/setting/security',
    name: 'Security',
    component: () => import('@/views/mine/setpage/security/Security.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
