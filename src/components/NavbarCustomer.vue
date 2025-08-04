<template>
  <nav class="bg-white shadow-lg border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/home" class="text-xl font-bold text-pink-600">
            Wezz Beauty
          </router-link>
        </div>

        <div class="flex items-center space-x-4">
          <router-link to="/home" class="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </router-link>
          <router-link to="/booking" class="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
            My Bookings
          </router-link>
          <router-link to="/favorites" class="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
            Favorites
          </router-link>
          
          <!-- Notification Bell -->
          <NotificationBell />
          
          <router-link to="/profile" class="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
            Profile
          </router-link>
          <button @click="logout" class="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NotificationBell from '@/components/NotificationBell.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('role')
  router.push('/login/cus')
}
</script>
