<template>
  <div id="webcrumbs">
    <div class="w-full mx-auto bg-gradient-to-br from-pink-50 to-rose-50 min-h-screen text-gray-800">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">My Favorite Makeup Artists</h1>
          <p class="text-lg text-gray-600">Your curated list of preferred MUAs</p>
        </div>
        
        <div v-if="loading" class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
        </div>
        
        <div v-else-if="wishlistMuas.length === 0" class="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="material-symbols-outlined text-pink-600 text-4xl">favorite_border</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h3>
          <p class="text-gray-600 mb-6">Start adding your favorite MUAs to your wishlist!</p>
          <router-link 
            to="/home" 
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
          >
            <span class="material-symbols-outlined mr-2">search</span> Find MUAs
          </router-link>
        </div>
        
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="mua in wishlistMuas"
            :key="mua.id"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            <div class="relative">
              <div class="h-48 bg-gradient-to-br from-pink-200 to-rose-200 relative">
                <template v-if="mua.profile_photo_url">
                  <img
                    :src="mua.profile_photo_url"
                    alt="MUA"
                    class="w-full h-full object-cover"
                  />
                </template>
                <template v-else>
                  <div class="w-full h-full bg-gray-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </template>
                <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <button
                @click="removeFromWishlist(mua)"
                class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors duration-200"
                title="Remove from wishlist"
              >
                <span class="material-symbols-outlined text-pink-600">favorite</span>
              </button>
            </div>
            <div class="p-6">
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
                class="w-full mt-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                @click="openBookingModal(mua)"
              >
                Book MUA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Booking Modal -->
    <div v-if="bookingModalVisible" class="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 text-gray-700" style="display: flex">
      <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-gray-800">Book Your MUA</h3>
          <button @click="closeBookingModal" class="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200">
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
            class="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { apiFetch } from '@/config'
import { useRouter } from 'vue-router'

const wishlistMuas = ref([])
const loading = ref(true)
const router = useRouter()

const bookingModalVisible = ref(false)
const bookingMua = ref(null)
const bookingDate = ref('')
const bookingTime = ref('')
const bookingServiceId = ref(null)
const bookingServices = ref([])

onMounted(async () => {
  await fetchWishlist()
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
    
    // Fetch full MUA details for each item in wishlist
    const muaDetailsPromises = wishlist.map(async (item) => {
      try {
        const mua = await apiFetch(`/mua/${item.mua_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        })
        return mua
      } catch (err) {
        console.error(`Failed to fetch MUA ${item.mua_id}:`, err)
        return null
      }
    })
    
    const muaDetails = await Promise.all(muaDetailsPromises)
    wishlistMuas.value = muaDetails.filter(mua => mua !== null)
  } catch (err) {
    console.error('Failed to fetch wishlist:', err)
  } finally {
    loading.value = false
  }
}

async function removeFromWishlist(mua) {
  const token = localStorage.getItem('token')
  try {
    await apiFetch(`/customer/wishlist/${mua.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    
    // Remove from local list
    wishlistMuas.value = wishlistMuas.value.filter(item => item.id !== mua.id)
  } catch (err) {
    console.error('Failed to remove from wishlist:', err)
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
    const services = await apiFetch(`/mua/${mua.id}/services`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    bookingServices.value = services
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
        mua_id: bookingMua.value.id,
        service_id: bookingServiceId.value,
        date: bookingDate.value,
        time: bookingTime.value,
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
</script>
