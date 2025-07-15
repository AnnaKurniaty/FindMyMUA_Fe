import { createRouter, createWebHistory } from 'vue-router'

// Pages
import LandingPage from '../pages/landingpage.vue'
import LoginMuaPage from '../pages/Mua/login.vue'
import LoginCusPage from '../pages/customer/login.vue'
import RegisterMuaPage from '../pages/Mua/register.vue'
import RegisterCusPage from '../pages/Customer/register.vue'

import CustomerDashboard from '../pages/Customer/dashboard.vue'
import MuaDashboard from '../pages/Mua/dashboard.vue'

import CustomerBookingList from '../pages/Customer/booking.vue'
import MuaBookingList from '../pages/mua/bookings.vue'

// import CustomerProfile from '../pages/customer/Profile.vue'
// import MuaProfile from '../pages/mua/Profile.vue'
import MuaPublicProfile from '../pages/mua/availability.vue'

import MuaServices from '../pages/mua/service.vue'
// import MuaPortfolio from '../pages/mua/Portfolio.vue'

// import WishlistPage from '../pages/customer/Wishlist.vue'
// import ReviewPage from '../pages/customer/Review.vue'

// import NotificationsPage from '../pages/Notifications.vue'
// import ChatPage from '../pages/Chat.vue'

// import SearchPage from '../pages/Search.vue'
// import RecommendationPage from '../pages/customer/Recommendation.vue'

// import MuaReportPage from '../pages/mua/Report.vue'
// import PaymentPage from '../pages/customer/Payment.vue'

const routes = [
  // Public
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/login/mua', name: 'LoginMua', component: LoginMuaPage },
  { path: '/login/cus', name: 'LoginCus', component: LoginCusPage },
  { path: '/register/cus', name: 'RegisterCusPage', component: RegisterCusPage },
  { path: '/register/mua', name: 'RegisterMua', component: RegisterMuaPage },

  // Dashboard
  { path: '/customer/dashboard', name: 'CustomerDashboard', component: CustomerDashboard },
  { path: '/mua/dashboard', name: 'MuaDashboard', component: MuaDashboard },

  // Booking
  { path: '/customer/bookings', name: 'CustomerBookings', component: CustomerBookingList },
  { path: '/mua/bookings', name: 'MuaBookings', component: MuaBookingList },

  // Profile
  // { path: '/customer/profile', name: 'CustomerProfile', component: CustomerProfile },
  // { path: '/mua/profile', name: 'MuaProfile', component: MuaProfile },
  { path: '/mua/availability', name: 'MuaPublicProfile', component: MuaPublicProfile },

  // Services & Portfolio
  { path: '/mua/services', name: 'MuaServices', component: MuaServices },
  // { path: '/mua/portfolio', name: 'MuaPortfolio', component: MuaPortfolio },

  // Wishlist & Review
  // { path: '/customer/wishlist', name: 'Wishlist', component: WishlistPage },
  // { path: '/customer/review/:booking_id', name: 'Review', component: ReviewPage },

  // Notifications & Chat
  // { path: '/notifications', name: 'Notifications', component: NotificationsPage },
  // { path: '/chat/:booking_id', name: 'Chat', component: ChatPage },

  // Search & Rekomendasi
  // { path: '/search', name: 'Search', component: SearchPage },
  // { path: '/customer/recommendations', name: 'Recommendation', component: RecommendationPage },

  // Laporan & Pembayaran
  // { path: '/mua/report', name: 'MuaReport', component: MuaReportPage },
  // { path: '/booking/:id/payment', name: 'Payment', component: PaymentPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
