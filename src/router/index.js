import { createRouter, createWebHistory } from 'vue-router'

import LoginMuaPage from '../pages/Mua/login.vue'
import LoginCusPage from '../pages/customer/login.vue'
import RegisterMuaPage from '../pages/Mua/register.vue'
import RegisterCusPage from '../pages/Customer/register.vue'
import MuaLayout from '../layouts/MuaLayout.vue'
import CustomerLayout from '../layouts/CustomerLayout.vue'

import MuaDashboard from '../pages/mua/dashboard.vue'
import MuaAvailable from '../pages/mua/availability.vue'
import MuaProfile from '../pages/mua/profile.vue'
import MuaService from '../pages/mua/service.vue'

import CustomerHome from '../pages/customer/dashboard.vue'
import CustomerBooking from '../pages/customer/booking.vue'

const routes = [
  { path: '/login/mua', name: 'LoginMua', component: LoginMuaPage },
  { path: '/login/cus', name: 'LoginCus', component: LoginCusPage },
  { path: '/register/cus', name: 'RegisterCusPage', component: RegisterCusPage },
  { path: '/register/mua', name: 'RegisterMua', component: RegisterMuaPage },
  {
    
    path: '/mua',
    component: MuaLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', name: 'MuaDashboard', component: MuaDashboard },
      { path: 'calendar', name: 'MuaAvailable', component: MuaAvailable },
      { path: 'services', name: 'MuaService', component: MuaService },
      { path: 'profile', name: 'MuaProfile', component: MuaProfile },
    ]
  },
  {
    path: '/',
    component: CustomerLayout,
    children: [
      { path: '', name: 'CustomerHome', component: CustomerHome },
      { path: 'booking', name: 'CustomerBooking', component: CustomerBooking },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    return next('/login/mua')
  }

  next()
})


export default router
