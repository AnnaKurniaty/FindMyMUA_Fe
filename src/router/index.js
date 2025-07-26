import { createRouter, createWebHistory } from 'vue-router'

import LoginMuaPage from '../pages/Mua/login.vue'
import LoginCusPage from '../pages/Customer/login.vue'
import RegisterMuaPage from '../pages/Mua/register.vue'
import RegisterCusPage from '../pages/Customer/register.vue'
import MuaLayout from '../layouts/MuaLayout.vue'
import CustomerLayout from '../layouts/CustomerLayout.vue'

import MuaDashboard from '../pages/Mua/dashboard.vue'
import MuaAvailable from '../pages/Mua/availability.vue'
import MuaProfile from '../pages/Mua/profile.vue'
import MuaService from '../pages/Mua/service.vue'

import CustomerHome from '../pages/Customer/dashboard.vue'
import CustomerBooking from '../pages/Customer/booking.vue'
import CustomerMua from '../pages/Customer/mua.vue'
import CustomerProfile from '../pages/Customer/profile.vue'

const routes = [
  { path: '/login/mua', name: 'LoginMua', component: LoginMuaPage },
  { path: '/login/cus', name: 'LoginCus', component: LoginCusPage },
  { path: '/register/cus', name: 'RegisterCusPage', component: RegisterCusPage },
  { path: '/register/mua', name: 'RegisterMua', component: RegisterMuaPage },
  {
    path: '/mua',
    component: MuaLayout,
    meta: { requiresAuth: true, role: 'mua' },
    children: [
      { path: '', redirect: '/mua/dashboard' },
      { path: 'dashboard', name: 'MuaDashboard', component: MuaDashboard },
      { path: 'calendar', name: 'MuaAvailable', component: MuaAvailable },
      { path: 'services', name: 'MuaService', component: MuaService },
      { path: 'profile', name: 'MuaProfile', component: MuaProfile },
    ]
  },
  {
    path: '/',
    component: CustomerLayout,
    meta: { requiresAuth: true, role: 'customer' },
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', name: 'CustomerHome', component: CustomerHome },
      { path: 'booking', name: 'CustomerBooking', component: CustomerBooking },
      { path: 'muaprofile', name: 'CustomerMua', component: CustomerMua },
      { path: 'profile', name: 'CustomerProfile', component: CustomerProfile },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role') // pastikan diset saat login

  if (to.meta.requiresAuth) {
    if (!token) {
      if (to.meta.role === 'mua') return next('/login/mua')
      if (to.meta.role === 'customer') return next('/login/cus')
      return next('/login') // fallback
    }

    if (to.meta.role && to.meta.role !== role) {
      // Redirect jika role tidak sesuai
      return role === 'mua' ? next('/mua') : next('/home')
    }
  }

  next()
})

export default router
