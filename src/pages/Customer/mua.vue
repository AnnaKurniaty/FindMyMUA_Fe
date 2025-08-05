<template>
  <div id="webcrumbs">
    <div class="bg-gray-50 min-h-screen p-4 md:p-6 lg:p-8 text-gray-800">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-2xl md:text-3xl font-bold mb-6">MUA</h1>
        
        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <p class="text-red-500 text-lg">{{ error }}</p>
          <button @click="fetchMuaData" class="mt-4 bg-primary-600 text-white px-4 py-2 rounded-md">
            Retry
          </button>
        </div>

        <!-- Data State -->
        <div v-else-if="profileList.length > 0">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(profile, index) in profileList"
              :key="index"
              class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              @click="goToMuaDetail(profile.id)"
            >
              <div class="relative h-56">
                <img
                  :src="profile.profile_photo_url || 'https://via.placeholder.com/400x300?text=MUA'"
                  alt="MUA Profile"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-3 right-3">
                  <button class="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors">
                    <span class="material-symbols-outlined text-rose-500">favorite</span>
                  </button>
                </div>
              </div>
              <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <h2 class="text-xl font-semibold">{{ profile.name }}</h2>
                </div>
                <div class="flex items-center text-sm text-gray-500 mb-4">
                  <span class="material-symbols-outlined text-gray-400 text-base mr-1">location_on</span>
                  {{ profile.mua_profile.service_area || 'Bandung' }}
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-primary-600">
                    {{ formatPriceRange(profile.services) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <p class="text-gray-500 text-lg">No MUA profiles found</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { apiFetch } from '@/config'
import { useRouter } from 'vue-router'

const profileList = ref([])
const loading = ref(true)
const error = ref(null)
const router = useRouter()

const fetchMuaData = async () => {
  loading.value = true
  error.value = null
  
  try {
    const token = localStorage.getItem('token')
    const response = await apiFetch('/dashboard/mua-users', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    
    if (response.data && Array.isArray(response.data)) {
      profileList.value = response.data
    } else if (response.muas && Array.isArray(response.muas)) {
      profileList.value = response.muas
    } else {
      throw new Error('Invalid response format')
    }
  } catch (err) {
    console.error('❌ Failed to fetch MUA profiles:', err)
    error.value = err.message || 'Failed to load MUA profiles'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchMuaData()
})

function formatPriceRange(services) {
  if (!services || services.length === 0) return 'Harga tidak tersedia'

  const prices = services.map(s => parseFloat(s.price))
  const min = Math.min(...prices)
  const max = Math.max(...prices)

  if (min === max) {
    return `Rp ${new Intl.NumberFormat('id-ID').format(min)}`
  }
  return `Rp ${new Intl.NumberFormat('id-ID').format(min)} - ${new Intl.NumberFormat('id-ID').format(max)}`
}

function goToMuaDetail(muaId) {
  router.push(`/mua/${muaId}`)
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);
</style>
