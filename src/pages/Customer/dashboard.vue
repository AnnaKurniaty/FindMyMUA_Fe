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
                        @click="specializationFilter = ['graduation']; sortMethod = null"
                        :class="['bg-white rounded-xl p-4 shadow-lg transition-all duration-200 transform border', specializationFilter && specializationFilter.includes('graduation') ? 'border-pink-500 shadow-xl -translate-y-1' : 'border-pink-100 hover:shadow-xl hover:-translate-y-1']"
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
                            class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-200"
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
                            <div class="text-sm text-gray-600 mb-3" v-if="Array.isArray(mua.makeup_specializations)">
                                <ul class="list-disc list-inside">
                                    <li v-for="(spec, idx) in mua.makeup_specializations" :key="idx">{{ spec }}</li>
                                </ul>
                            </div>
                            <p class="text-sm text-gray-600 mb-3" v-else>
                            {{ mua.makeup_specializations || 'No specialization listed' }}
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-pink-600 font-semibold">From Rp. {{ (mua.starting_price || 0).toString().replace(/\.00$/, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}</span>
                            </div>
                            <button
                            class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                            :class="favorites.has(mua.id) ? 'bg-pink-600' : 'bg-gradient-to-br from-pink-100 to-rose-100 text-pink-600'"
                            @click="toggleFavorite(mua)"
                            >
                            <span
                                class="material-symbols-outlined"
                                :class="favorites.has(mua.id) ? 'text-pink-700 font-bold' : 'text-pink-300'"
                                style="font-weight: 900;"
                            >{{ favorites.has(mua.id) ? 'favorite' : 'favorite_border' }}</span>
                            </button>
                            <button
                                class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 bg-pink-500 hover:bg-pink-600 transition-colors duration-200"
                                @click="openBookingModal(mua)"
                                title="Book MUA"
                            >
                                Book
                            </button>
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
                                class="w-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                                @click="navigateToMua('bridal')"
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                    >
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Party Makeup</h3>
                            <p class="text-gray-600 mb-4">Glam looks for any celebration</p>
                            <button
                                class="w-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                                @click="navigateToMua('party')"
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
                                class="w-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                                @click="navigateToMua('regular')"
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6">Your Personal Skin Profile</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                            <h3 class="font-semibold text-gray-800 mb-4">Skin Analysis</h3>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Skin Type</span>
                                    <span class="font-medium text-gray-800"
                                        v-if="profile?.customer_profile?.skin_type">
                                        {{ profile.customer_profile.skin_type.join(', ') }}
                                    </span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Skin Tone</span>
                                    <div class="flex items-center">
                                        <div class="w-4 h-4 bg-yellow-200 rounded-full mr-2"></div>
                                       <span class="font-medium text-gray-800"
                                        v-if="profile?.customer_profile?.skin_tone">
                                        {{ profile.customer_profile.skin_tone }}
                                    </span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Concerns</span>
                                    <span class="font-medium text-gray-800"
                                        v-if="profile?.customer_profile?.skin_issues">
                                        {{ profile.customer_profile.skin_issues }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                            <h3 class="font-semibold text-gray-800 mb-4">Preferences</h3>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Style Preference</span>
                                    <span class="font-medium text-gray-800"
                                        v-if="profile?.customer_profile?.makeup_preferences">
                                        {{ profile.customer_profile.makeup_preferences.join(', ') }}
                                    </span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Skincare History</span>
                                    <span class="font-medium text-gray-800"
                                        v-if="profile?.customer_profile?.skincare_history">
                                        {{ profile.customer_profile.skincare_history }}
                                    </span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Allergies</span>
                                    <span class="font-medium text-gray-800"
                                        v-if="profile?.customer_profile?.allergies">
                                        {{ profile.customer_profile.allergies }}
                                    </span>
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

const filteredMuas = computed(() => {
  let filtered = recommendedMuas.value

  if (specializationFilter.value) {
    filtered = filtered.filter((mua) => {
      if (!mua.makeup_specializations) return false
      const specs = mua.makeup_specializations.map(s => s.toLowerCase())
      return specializationFilter.value.some(f => specs.includes(f))
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
    profile.value = { customer_profile: profileData }

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

function navigateToMua(styleType) {
  router.push({ name: 'CustomerMua', query: { style: styleType } })
}

</script>
