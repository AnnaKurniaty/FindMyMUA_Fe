<template
    ><div id="webcrumbs">
        <div class="w-full mx-auto bg-gradient-to-br from-pink-50 to-rose-50 min-h-screen text-gray-800">
            <div class="max-w-7xl mx-auto px-6 py-8">
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Makeup Artist</h1>
                    <p class="text-lg text-gray-600">Discover talented MUAs near you for any occasion</p>
                </div>
                <div class="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                        <div class="flex-1 relative">
                            <span class="material-symbols-outlined absolute left-3 top-3 text-gray-400">search</span>
                            <input
                                type="text"
                                v-model="searchQuery"
                                placeholder="Search for makeup artists, or services..."
                                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                        </div>
                       <div class="flex gap-2">
                        <button
                          class="flex items-center bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                        >
                          <span class="material-symbols-outlined mr-2">search</span> Search
                        </button>
                      </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <button
                        @click="specializationFilter = null; sortMethod = null"
                        :class="['bg-white rounded-xl p-4 shadow-lg transition-all duration-200 transform border', !specializationFilter ? 'border-pink-500 shadow-xl -translate-y-1' : 'border-pink-100 hover:shadow-xl hover:-translate-y-1']"
                    >
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                            <span class="material-symbols-outlined text-pink-600">location_on</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 text-sm">Skin Profile</h3>
                    </button>
                    <button
                        @click="specializationFilter = ['bridal', 'pre wedding']; sortMethod = null"
                        :class="['bg-white rounded-xl p-4 shadow-lg transition-all duration-200 transform border', specializationFilter && specializationFilter.includes('bridal') ? 'border-pink-500 shadow-xl -translate-y-1' : 'border-pink-100 hover:shadow-xl hover:-translate-y-1']"
                    >
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                            <span class="material-symbols-outlined text-pink-600">favorite</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 text-sm">Wedding Makeup</h3>
                    </button>
                    <button
                        @click="specializationFilter = ['Graduation']; sortMethod = null"
                        :class="['bg-white rounded-xl p-4 shadow-lg transition-all duration-200 transform border', specializationFilter && specializationFilter.includes('Graduation') ? 'border-pink-500 shadow-xl -translate-y-1' : 'border-pink-100 hover:shadow-xl hover:-translate-y-1']"
                    >
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                            <span class="material-symbols-outlined text-pink-600">school</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 text-sm">Graduation</h3>
                    </button>
                    <button
                        @click="sortMethod = 'bestPrice'"
                        :class="['bg-white rounded-xl p-4 shadow-lg transition-all duration-200 transform border', sortMethod === 'bestPrice' ? 'border-pink-500 shadow-xl -translate-y-1' : 'border-pink-100 hover:shadow-xl hover:-translate-y-1']"
                    >
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                            <span class="material-symbols-outlined text-pink-600">attach_money</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 text-sm">Best Price</h3>
                    </button>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-bold text-gray-800">Recommended MUAs</h2>
                        <button @click="showAll = !showAll" class="text-pink-600 hover:text-pink-700 transition-colors duration-200 font-medium bg-transparent border-none cursor-pointer p-0">
                            {{ showAll ? 'Show Less' : 'View All' }}
                        </button>
                    </div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div
                            v-for="(mua, index) in filteredMuas"
                            :key="mua.id"
                            class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                            <div class="flex items-center mb-4">
                                <template v-if="mua.profile_photo_url">
                                    <img
                                        :src="mua.profile_photo_url"
                                        alt="MUA"
                                        class="w-12 h-12 rounded-full object-cover"
                                    />
                                </template>
                                <template v-else>
                                    <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </template>
                                    <div class="ml-4">
                                        <h4 class="font-semibold text-gray-800">{{ mua.user?.name || 'Unknown' }}</h4>
                                        <div class="flex items-center text-sm text-gray-600">{{ mua.user?.email || 'No email' }}</div>
                                    </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-pink-600 font-semibold">From Rp. {{ (mua.starting_price || 0).toString().replace(/\.00$/, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}</span>
                            </div>
                            <div class="flex justify-center gap-3 mt-4">
                                <button
                                    class="w-12 h-12 rounded-full flex items-center justify-center"
                                    :class="favorites.has(mua.id) ? 'bg-pink-600' : 'bg-gradient-to-br from-pink-100 to-rose-100 text-pink-600'"
                                    @click="toggleFavorite(mua)"
                                    title="Add to Wishlist"
                                >
                                    <span
                                        class="material-symbols-outlined"
                                        :class="favorites.has(mua.id) ? 'text-white font-bold' : 'text-pink-600'"
                                        style="font-weight: 900;"
                                    >{{ favorites.has(mua.id) ? 'favorite' : 'favorite_border' }}</span>
                                </button>
                                <button
                                    class="w-12 h-12 rounded-full flex items-center justify-center bg-pink-500 hover:bg-pink-600 transition-colors duration-200 text-white"
                                    @click="openBookingModal(mua)"
                                    title="Book MUA"
                                >
                                    <span class="material-symbols-outlined">calendar_today</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                    >
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Bridal Makeup</h3>
                            <p class="text-gray-600 mb-4">Perfect for your special day</p>
              <button
                @click="navigateToMuaList"
                class="w-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
              >
                Explore
              </button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                    >
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Party</h3>
                            <p class="text-gray-600 mb-4">Glam looks for any celebration</p>
                            <button
                              @click="navigateToMuaList"
                              class="w-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                            >
                              Explore
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                    >
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Regular</h3>
                            <p class="text-gray-600 mb-4">Corporate and headshot ready</p>
                            <button
                              @click="navigateToMuaList"
                              class="w-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                            >
                              Explore
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6">Your Personal Skin Profile</h2>
                    <div v-if="!profile || !hasSkinProfile" class="text-center py-8">
                        <div class="text-gray-500 mb-4">
                            <span class="material-symbols-outlined text-6xl mb-4">face</span>
                            <p class="text-lg">Your skin profile is not yet complete</p>
                            <p class="text-sm mt-2">Complete your profile to get personalized recommendations</p>
                        </div>
                        <button 
                            @click="navigateToProfile" 
                            class="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200"
                        >
                            Complete Profile
                        </button>
                    </div>
                    <div v-else class="grid md:grid-cols-2 gap-6">
                        <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                            <h3 class="font-semibold text-gray-800 mb-4">Skin Analysis</h3>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Skin Tone</span>
                                    <span class="font-medium text-gray-800">{{ profile.skin_tone || 'Not specified' }}</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Skin Type</span>
                                    <span class="font-medium text-gray-800">{{ profile.skin_type ? profile.skin_type.join(', ') : 'Not specified' }}</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Skin Issues</span>
                                    <span class="font-medium text-gray-800">{{ profile.skin_issues || 'Not specified' }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                            <h3 class="font-semibold text-gray-800 mb-4">Preferences</h3>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Makeup Preferences</span>
                                    <span class="font-medium text-gray-800">{{ profile.makeup_preferences ? profile.makeup_preferences.join(', ') : 'Not specified' }}</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Skincare History</span>
                                    <span class="font-medium text-gray-800">{{ profile.skincare_history || 'Not specified' }}</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Allergies</span>
                                    <span class="font-medium text-gray-800">{{ profile.allergies || 'None' }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 w-42 ml-6">
      <div class="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
        <p class="mb-4 text-gray-800">{{ modalMessage }}</p>
        <div class="flex justify-end space-x-4">
          <button
            v-if="modalConfirmCallback"
            @click="modalConfirmCallback()"
            class="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Hapus
          </button>
          <button
            @click="closeModal"
            class="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Batal
          </button>
          <button
            v-if="!modalConfirmCallback"
            @click="closeModal"
            class="bg-pink-600 px-4 py-2 rounded hover:bg-pink-700 transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
    <div v-if="bookingModalVisible" class="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 text-gray-700" style="display: flex">
      <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-gray-800">Book Your MUA</h3>
          <button  @click="closeBookingModal" class="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="space-y-5">
          <h3 class="text-xl font-bold mb-4">Book MUA: {{ bookingMua?.user?.name || 'Unknown' }}</h3>
          <div>
              <label class="block text-gray-700 font-medium mb-2">Select Service</label>
              <div class="relative">
                <select v-model="bookingServiceId" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option disabled value="">Choose a service</option>
                  <option v-for="service in bookingServices" :key="service.id" :value="service.id">{{ service.name }}</option>
                </select>
              </div>
          </div>
        <div>
        <label class="block text-gray-700 font-medium mb-2">Date</label>
        <div class="relative">
          <input
          type="date"
          class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          min="2025-07-28"
          v-model="bookingDate"
          :min="new Date().toISOString().split('T')[0]"
          />
        </div>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">Time</label>
        <div class="relative">
          <input
          type="time"
          v-model="bookingTime"
          class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
    <div class="flex gap-4 mt-8">
      <button
      class="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 transition-all duration-200 font-medium"
       @click="closeBookingModal"
      >
        Cancel
      </button>
      <button
       @click="submitBooking"
      class="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 py-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
      >
        Confirm Booking
      </button>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { apiFetch } from '@/config'
import { skinProfileFix } from './dashboard-fix.js'

const profile = ref(null)
const searchQuery = ref('')
const recommendedMuas = ref([])
const showAll = ref(false)
const sortMethod = ref(null)
const specializationFilter = ref(null)
const favorites = ref(new Set())

const showModal = ref(false)
const modalMessage = ref('')
const modalConfirmCallback = ref(null)

const bookingModalVisible = ref(false)
const bookingMua = ref(null)
const bookingDate = ref('')
const bookingTime = ref('')
const bookingServiceId = ref(null)
const bookingServices = ref([])

const hasSkinProfile = computed(() => {
  if (!profile.value) return false
  return !!(profile.value.skin_tone || 
            (profile.value.skin_type && profile.value.skin_type.length > 0) || 
            profile.value.skin_issues || 
            profile.value.makeup_preferences)
})

const filteredMuas = computed(() => {
  let filtered = recommendedMuas.value

  if (specializationFilter.value) {
    filtered = filtered.filter((mua) => {
      if (!mua.makeup_specializations) return false
      
      let specs = []
      if (Array.isArray(mua.makeup_specializations)) {
        specs = mua.makeup_specializations.map(s => s.toLowerCase())
      } else if (typeof mua.makeup_specializations === 'string') {
        try {
          specs = JSON.parse(mua.makeup_specializations).map(s => s.toLowerCase())
        } catch {
          specs = [mua.makeup_specializations.toLowerCase()]
        }
      }
      
      return specializationFilter.value.some(f => specs.includes(f.toLowerCase()))
    })
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((mua) => {
      const nameMatch = mua.user.name.toLowerCase().includes(query)
      const specializationMatch = (mua.specialization || '').toLowerCase().includes(query)
      const servicesMatch = Array.isArray(mua.makeup_specializations) && mua.makeup_specializations.some(spec => spec.toLowerCase().includes(query))
      return nameMatch || specializationMatch || servicesMatch
    })
  }
  if (sortMethod.value === 'bestPrice') {
    filtered = filtered.slice().sort((a, b) => (a.starting_price || 0) - (b.starting_price || 0))
  }
  if (!showAll.value) {
    return filtered.slice(0, 3)
  }
  return filtered
})

async function fetchWishlist() {
  const token = localStorage.getItem('token')
  try {
    const wishlist = await apiFetch('/customer/wishlist', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    favorites.value = new Set(wishlist.map(item => item.mua_id))
  } catch (err) {
    console.error('Failed to fetch wishlist:', err)
  }
}

function closeModal() {
  showModal.value = false
  modalMessage.value = ''
  modalConfirmCallback.value = null
}

async function confirmRemoveFavorite(mua, muaId) {
  const token = localStorage.getItem('token')
  try {
    await apiFetch(`/customer/wishlist/${muaId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    favorites.value.delete(muaId)
  } catch (err) {
    console.error('Failed to remove from wishlist:', err)
  }
  closeModal()
}

async function toggleFavorite(mua) {
  const token = localStorage.getItem('token')
  const muaId = mua.user?.id || mua.id
  if (favorites.value.has(muaId)) {
    modalMessage.value = `${mua.user?.name || 'MUA'} sudah berada di daftar wishlist. Apakah ingin dihapus?`
    modalConfirmCallback.value = () => confirmRemoveFavorite(mua, muaId)
    showModal.value = true
  } else {
    try {
      await apiFetch('/customer/wishlist', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ mua_id: muaId }),
      })
      favorites.value.add(muaId)
      modalMessage.value = `${mua.user?.name || 'MUA'} sudah ditambahkan ke daftar wishlist.`
      modalConfirmCallback.value = null
      showModal.value = true
    } catch (err) {
      console.error('Failed to add to wishlist:', err)
    }
  }
}

async function openBookingModal(mua) {
  bookingMua.value = mua
  bookingModalVisible.value = true
  bookingDate.value = ''
  bookingTime.value = ''
  bookingServiceId.value = null
  try {
    const token = localStorage.getItem('token')
    const services = await apiFetch(`/mua/${mua.user?.id || mua.id}/services`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    bookingServices.value = services
    console.log('✅ services fetched:', services)
  } catch (err) {
    console.error('Failed to fetch services:', err)
    bookingServices.value = []
  }
}

function closeBookingModal() {
  bookingModalVisible.value = false
  bookingMua.value = null
  bookingDate.value = ''
  bookingTime.value = ''
  bookingServiceId.value = null
  bookingServices.value = []
}

import { useRouter } from 'vue-router'
const router = useRouter()

async function submitBooking() {
  if (!bookingMua.value || !bookingServiceId.value || !bookingDate.value || !bookingTime.value) {
    alert('Please fill all booking details')
    return
  }
  const token = localStorage.getItem('token')
  try {
    const response = await apiFetch('/customer/bookings', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        mua_id: bookingMua.value.user?.id || bookingMua.value.id,
        service_id: bookingServiceId.value,
        date: bookingDate.value,
        time: bookingTime.value,
        customer_skin_profile_snapshot: profile.value?.customer_profile || null,
      }),
    })
    alert('Booking successful')
    closeBookingModal()
    const bookingId = response.id || response.data?.id
    router.push({ name: 'CustomerBooking', params: { bookingId } })
  } catch (err) {
    console.error('Booking failed:', err)
    alert('Booking failed')
  }
}

onMounted(async () => {
  const token = localStorage.getItem('token')

  try {
    const profileData = await apiFetch('/customer/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    
    const data = profileData.profile || profileData
    if (!data) {
      throw new Error('No profile data received')
    }

    let skinType = []
    if (data.skin_type) {
      if (typeof data.skin_type === 'string') {
        try {
          const parsed = JSON.parse(data.skin_type)
          skinType = Array.isArray(parsed) ? parsed : []
        } catch {
          skinType = data.skin_type.split(',').map(item => item.trim()).filter(item => item)
        }
      } else if (Array.isArray(data.skin_type)) {
        skinType = data.skin_type
      }
    }

    let makeupPreferences = []
    if (data.makeup_preferences) {
      if (typeof data.makeup_preferences === 'string') {
        try {
          const parsed = JSON.parse(data.makeup_preferences)
          makeupPreferences = Array.isArray(parsed) ? parsed : []
        } catch {
          makeupPreferences = data.makeup_preferences.split(',').map(item => item.trim()).filter(item => item)
        }
      } else if (Array.isArray(data.makeup_preferences)) {
        makeupPreferences = data.makeup_preferences
      }
    }

    profile.value = {
      skin_tone: data.skin_tone || '',
      skin_type: skinType,
      skin_issues: data.skin_issues || '',
      skincare_history: data.skincare_history || '',
      allergies: data.allergies || '',
      makeup_preferences: makeupPreferences
    }

    const recommendationRes = await apiFetch('/customer/recommendations', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    console.log('✅ Profile fetched:', recommendationRes)
    recommendedMuas.value = recommendationRes.recommended || []

    await fetchWishlist()
  } catch (err) {
    console.error('Error:', err)
  }
})

function navigateToMuaDetail(muaId) {
  router.push({ name: 'CustomerMuaDetail', params: { id: muaId } })
}

function navigateToMuaList() {
  router.push({ name: 'CustomerMua' })
}

function exploreService(serviceType) {
  specializationFilter.value = [serviceType]
  sortMethod.value = null
}

</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
    @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
    @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);

    *,
    :after,
    :before {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
        --tw-contain-size: ;
        --tw-contain-layout: ;
        --tw-contain-paint: ;
        --tw-contain-style: ;
    }
    ::backdrop {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
        --tw-contain-size: ;
        --tw-contain-layout: ;
        --tw-contain-paint: ;
        --tw-contain-style: ;
    } /*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/
    *,
    :after,
    :before {
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
    }
    :after,
    :before {
        --tw-content: "";
    }
    :host,
    html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family:
            Open Sans,
            ui-sans-serif,
            system-ui,
            sans-serif,
            Apple Color Emoji,
            Segoe UI Emoji,
            Segoe UI Symbol,
            Noto Color Emoji;
        font-feature-settings: normal;
        font-variation-settings: normal;
        -moz-tab-size: 4;
        tab-size: 4;
        -webkit-tap-highlight-color: transparent;
    }
    body {
        line-height: inherit;
        margin: 0;
    }
    hr {
        border-top-width: 1px;
        color: inherit;
        height: 0;
    }
    abbr:where([title]) {
        text-decoration: underline dotted;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
    b,
    strong {
        font-weight: bolder;
    }
    code,
    kbd,
    pre,
    samp {
        font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            Liberation Mono,
            Courier New,
            monospace;
        font-feature-settings: normal;
        font-size: 1em;
        font-variation-settings: normal;
    }
    small {
        font-size: 80%;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sub {
        bottom: -0.25em;
    }
    sup {
        top: -0.5em;
    }
    table {
        border-collapse: collapse;
        border-color: inherit;
        text-indent: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        color: inherit;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 100%;
        font-variation-settings: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        line-height: inherit;
        margin: 0;
        padding: 0;
    }
    button,
    select {
        text-transform: none;
    }
    button,
    input:where([type="button"]),
    input:where([type="reset"]),
    input:where([type="submit"]) {
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
    }
    :-moz-focusring {
        outline: auto;
    }
    :-moz-ui-invalid {
        box-shadow: none;
    }
    progress {
        vertical-align: baseline;
    }
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }
    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }
    summary {
        display: list-item;
    }
    blockquote,
    dd,
    dl,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    pre {
        margin: 0;
    }
    fieldset {
        margin: 0;
    }
    fieldset,
    legend {
        padding: 0;
    }
    menu,
    ol,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    dialog {
        padding: 0;
    }
    textarea {
        resize: vertical;
    }
    input::placeholder,
    textarea::placeholder {
        color: #9ca3af;
        opacity: 1;
    }
    [role="button"],
    button {
        cursor: pointer;
    }
    :disabled {
        cursor: default;
    }
    audio,
    canvas,
    embed,
    iframe,
    img,
    object,
    svg,
    video {
        display: block;
        vertical-align: middle;
    }
    img,
    video {
        height: auto;
        max-width: 100%;
    }
    [hidden]:where(:not([hidden="until-found"])) {
        display: none;
    }
    #webcrumbs .absolute {
        position: absolute;
    }
    #webcrumbs .relative {
        position: relative;
    }
    #webcrumbs .left-3 {
        left: 12px;
    }
    #webcrumbs .top-3 {
        top: 12px;
    }
    #webcrumbs .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }
    #webcrumbs .mb-3 {
        margin-bottom: 12px;
    }
    #webcrumbs .mb-4 {
        margin-bottom: 16px;
    }
    #webcrumbs .mb-6 {
        margin-bottom: 24px;
    }
    #webcrumbs .mb-8 {
        margin-bottom: 32px;
    }
    #webcrumbs .mr-2 {
        margin-right: 8px;
    }
    #webcrumbs .flex {
        display: flex;
    }
    #webcrumbs .grid {
        display: grid;
    }
    #webcrumbs .h-12 {
        height: 48px;
    }
    #webcrumbs .min-h-screen {
        min-height: 100vh;
    }
    #webcrumbs .w-12 {
        width: 48px;
    }
    #webcrumbs .w-full {
        width: 100%;
    }
    #webcrumbs .max-w-7xl {
        max-width: 80rem;
    }
    #webcrumbs .flex-1 {
        flex: 1 1 0%;
    }
    #webcrumbs .-translate-y-1 {
        --tw-translate-y: -4px;
    }
    #webcrumbs .-translate-y-1,
    #webcrumbs .transform {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .cursor-pointer {
        cursor: pointer;
    }
    #webcrumbs .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    #webcrumbs .flex-row {
        flex-direction: row;
    }
    #webcrumbs .flex-col {
        flex-direction: column;
    }
    #webcrumbs .items-center {
        align-items: center;
    }
    #webcrumbs .justify-center {
        justify-content: center;
    }
    #webcrumbs .justify-between {
        justify-content: space-between;
    }
    #webcrumbs .gap-2 {
        gap: 8px;
    }
    #webcrumbs .gap-4 {
        gap: 16px;
    }
    #webcrumbs .rounded-2xl {
        border-radius: 48px;
    }
    #webcrumbs .rounded-full {
        border-radius: 9999px;
    }
    #webcrumbs .rounded-xl {
        border-radius: 36px;
    }
    #webcrumbs .border {
        border-width: 1px;
    }
    #webcrumbs .border-none {
        border-style: none;
    }
    #webcrumbs .border-gray-200 {
        --tw-border-opacity: 1;
        border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-pink-100 {
        --tw-border-opacity: 1;
        border-color: rgb(252 231 243 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-pink-500 {
        --tw-border-opacity: 1;
        border-color: rgb(236 72 153 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .bg-transparent {
        background-color: transparent;
    }
    #webcrumbs .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-gradient-to-br {
        background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    }
    #webcrumbs .bg-gradient-to-r {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
    }
    #webcrumbs .from-pink-100 {
        --tw-gradient-from: #fce7f3 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(252, 231, 243, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .from-pink-50 {
        --tw-gradient-from: #fdf2f8 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(253, 242, 248, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .from-pink-500 {
        --tw-gradient-from: #ec4899 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(236, 72, 153, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .to-rose-100 {
        --tw-gradient-to: #ffe4e6 var(--tw-gradient-to-position);
    }
    #webcrumbs .to-rose-50 {
        --tw-gradient-to: #fff1f2 var(--tw-gradient-to-position);
    }
    #webcrumbs .to-rose-500 {
        --tw-gradient-to: #f43f5e var(--tw-gradient-to-position);
    }
    #webcrumbs .p-0 {
        padding: 0;
    }
    #webcrumbs .p-4 {
        padding: 16px;
    }
    #webcrumbs .p-6 {
        padding: 24px;
    }
    #webcrumbs .px-6 {
        padding-left: 24px;
        padding-right: 24px;
    }
    #webcrumbs .py-3 {
        padding-bottom: 12px;
        padding-top: 12px;
    }
    #webcrumbs .py-8 {
        padding-bottom: 32px;
        padding-top: 32px;
    }
    #webcrumbs .pl-10 {
        padding-left: 40px;
    }
    #webcrumbs .pr-4 {
        padding-right: 16px;
    }
    #webcrumbs .text-center {
        text-align: center;
    }
    #webcrumbs .text-2xl {
        font-size: 24px;
        line-height: 31.200000000000003px;
    }
    #webcrumbs .text-4xl {
        font-size: 36px;
        line-height: 41.4px;
    }
    #webcrumbs .text-lg {
        font-size: 18px;
        line-height: 27px;
    }
    #webcrumbs .text-sm {
        font-size: 14px;
        line-height: 21px;
    }
    #webcrumbs .font-bold {
        font-weight: 700;
    }
    #webcrumbs .font-medium {
        font-weight: 500;
    }
    #webcrumbs .font-semibold {
        font-weight: 600;
    }
    #webcrumbs .text-gray-400 {
        --tw-text-opacity: 1;
        color: rgb(156 163 175 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-gray-600 {
        --tw-text-opacity: 1;
        color: rgb(75 85 99 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-gray-800 {
        --tw-text-opacity: 1;
        color: rgb(31 41 55 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-pink-600 {
        --tw-text-opacity: 1;
        color: rgb(219 39 119 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .shadow-lg {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    }
    #webcrumbs .shadow-lg,
    #webcrumbs .shadow-xl {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .shadow-xl {
        --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    }
    #webcrumbs .transition-all {
        transition-duration: 0.15s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .transition-colors {
        transition-duration: 0.15s;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .duration-200 {
        transition-duration: 0.2s;
    }
    #webcrumbs {
        font-family: Open Sans !important;
        font-size: 16px !important;
    }
    #webcrumbs .hover\:-translate-y-1:hover {
        --tw-translate-y: -4px;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .hover\:from-pink-600:hover {
        --tw-gradient-from: #db2777 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(219, 39, 119, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .hover\:to-rose-600:hover {
        --tw-gradient-to: #e11d48 var(--tw-gradient-to-position);
    }
    #webcrumbs .hover\:text-pink-700:hover {
        --tw-text-opacity: 1;
        color: rgb(190 24 93 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .hover\:shadow-xl:hover {
        --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .hover\:shadow-pink-100\/50:hover {
        --tw-shadow-color: rgba(252, 231, 243, 0.5);
        --tw-shadow: var(--tw-shadow-colored);
    }
    #webcrumbs .focus\:border-transparent:focus {
        border-color: transparent;
    }
    #webcrumbs .focus\:outline-none:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
    }
    #webcrumbs .focus\:ring-2:focus {
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
    #webcrumbs .focus\:ring-pink-500:focus {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(236 72 153 / var(--tw-ring-opacity, 1));
    }
    @media (min-width: 768px) {
        #webcrumbs .md\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        #webcrumbs .md\:flex-row {
            flex-direction: row;
        }
    }
</style>
