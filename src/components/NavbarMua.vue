<template>
  <div class="bg-gradient-to-r from-[#D56E6E] to-pink-200 p-6">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span class="text-2xl">💄</span>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-gray-800">MUA Dashboard</h1>
          <p class="text-gray-800 text-sm">Welcome back, {{ userName || 'MUA' }}!</p>
        </div>
      </div>

      <div class="relative">
        <button
          @click="toggleDropdown"
          class="bg-white rounded-full w-10 h-10 text-gray-800 hover:bg-purple-50 transition-colors flex items-center justify-center"
        >
          <span class="material-symbols-outlined">account_circle</span>
        </button>

        <div
          v-if="showDropdown"
          class="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md z-50"
        >
          <button
            @click="logout"
            class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex border-b border-pink-200 overflow-x-auto pb-4 gap-4 mt-4 pl-10">
    <router-link
      v-for="tab in tabs"
      :key="tab.name"
      :to="`/mua/${tab.name.toLowerCase()}`"
      class="min-w-fit px-5 py-2 rounded-full transition-all font-medium flex items-center gap-2"
      :class="{
        'bg-pink-300 text-white border-2 border-pink-400': isActiveRoute(tab.name),
        'text-gray-800 hover:bg-pink-100': !isActiveRoute(tab.name)
      }"
    >
      <span class="material-symbols-outlined text-sm">{{ tab.icon }}</span>
      {{ tab.label }}
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

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
      const res = await fetch('http://localhost:8000/api/me', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        }
      })
      const data = await res.json()
      userName.value = data.name || 'MUA'
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
  if (!token) return router.push('/login/mua')

  try {
    await fetch('http://localhost:8000/api/auth/logout/mua', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })
  } catch (e) {
    console.error('Gagal logout:', e)
  }

  localStorage.removeItem('token')
  localStorage.removeItem('user_name')
  router.push('/login/mua')
}

const tabs = [
  { name: 'Dashboard', label: 'Dashboard', icon: 'dashboard' },
  { name: 'Services', label: 'Services', icon: 'business_center' },
  { name: 'Profile', label: 'Profile', icon: 'person' },
  { name: 'Calendar', label: 'Calendar', icon: 'calendar_month' }
]

function isActiveRoute(tabName) {
  return route.path.toLowerCase().includes(`/mua/${tabName.toLowerCase()}`)
}
</script>