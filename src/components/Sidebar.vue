<template>
  <div class="fixed top-0 left-0 h-screen w-64 bg-white rounded-r-2xl shadow-lg p-6 z-50">
    <div class="flex items-center gap-3 mb-8">
      <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
        <span class="material-symbols-outlined text-white text-lg">face</span>
      </div>
      <span class="text-xl font-bold text-gray-800">Wezz Beauty</span>
    </div>
    <nav class="space-y-2">
      <div
        @click="router.push('/home')"
        :class="[
          'flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer',
          isActiveRoute('home') ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
        ]"
      >
        <span class="material-symbols-outlined text-lg">home</span>
        <span class="font-medium">Home</span>
      </div>
      <div
        @click="router.push('/booking')"
        :class="[
          'flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer',
          isActiveRoute('booking') ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
        ]"
      >
        <span class="material-symbols-outlined text-lg">calendar_today</span>
        <span class="font-medium">Bookings</span>
      </div>
      <div
        @click="router.push('/profile')"
        :class="[
          'flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer',
          isActiveRoute('profile') ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
        ]"
      >
        <span class="material-symbols-outlined text-lg">person</span>
        <span class="font-medium">Profile</span>
      </div>
      <div
        @click="router.push('/favorites')"
        :class="[
          'flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer',
          isActiveRoute('favorites') ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
        ]"
      >
        <span class="material-symbols-outlined text-lg">favorite</span>
        <span class="font-medium">Favorites</span>
      </div>
      <div
        @click="router.push('/notifications')"
        :class="[
          'flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer',
          isActiveRoute('notifications') ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
        ]"
      >
        <span class="font-medium">Notification</span>
      </div>
      <div
        @click="logout"
        class="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
      >
        <span class="material-symbols-outlined text-lg">settings</span>
        <span class="font-medium">Logout</span>
      </div>
    </nav>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiFetch } from '@/config'

const router = useRouter()
const route = useRoute()
const profile = ref(null)

const userName = ref('')
const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const handleClickOutside = (e) => {
  if (!e.target.closest('.relative')) {
    showDropdown.value = false
  }
}

onMounted(async () => {
  document.addEventListener('click', handleClickOutside)

  const savedName = localStorage.getItem('user_name')
  userName.value = savedName || 'MUA'

  const token = localStorage.getItem('token')
      if (token) {
        try {
          const data = await apiFetch('/me', {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          })

          userName.value = data.name || 'MUA'
          profile.value = data.mua_profile || data.muaProfile || null

          localStorage.setItem('user_name', data.name)
        } catch (e) {
          console.error('Gagal ambil data user:', e)
        }
      }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const logout = async () => {
  const token = localStorage.getItem('token')
  if (!token) return router.push('/login/cus')

  try {
    await apiFetch('/auth/logout/mua', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
  } catch (e) {
    console.error('Gagal logout:', e)
  }

  localStorage.removeItem('token')
  localStorage.removeItem('user_name')
  router.push('/login/cus')
}

function isActiveRoute(tabName) {
  return route.path.toLowerCase().includes(`/${tabName.toLowerCase()}`)
}
</script>