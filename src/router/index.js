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
import MuaNotifications from '../pages/Mua/notifications.vue'

import CustomerHome from '../pages/Customer/dashboard.vue'
import CustomerBooking from '../pages/Customer/booking.vue'
import CustomerBookingList from '../pages/Customer/booking_list.vue'
import CustomerMua from '../pages/Customer/mua.vue'
import CustomerProfile from '../pages/Customer/profile.vue'
import CustomerNotifications from '../pages/Customer/notifications.vue'
import WishlistPage from '../pages/Customer/wishlist.vue'
import LandingPage from '../pages/LandingPage.vue'

const routes = [
  { path: '/guest', name: 'Landing', component: LandingPage },
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
      { path: 'notifications', name: 'MuaNotifications', component: MuaNotifications },
    ]
  },
  {
    path: '/',
    component: CustomerLayout,
    meta: { requiresAuth: true, role: 'customer' },
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', name: 'CustomerHome', component: CustomerHome },
      { path: 'booking/:bookingId', name: 'CustomerBooking', component: CustomerBooking },
      { path: 'booking', name: 'CustomerBookingList', component: CustomerBookingList },
      { path: 'favorites', name: 'CustomerWishlist', component: WishlistPage },
      { path: 'profile', name: 'CustomerProfile', component: CustomerProfile },
      { path: 'notifications', name: 'CustomerNotifications', component: CustomerNotifications },
      { path: 'mua', name: 'CustomerMua', component: CustomerMua },
      { path: 'mua/:id', name: 'CustomerMuaDetail', component: () => import('../pages/Customer/mua_detail.vue') }
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
