<template>
  <div class="bg-gray-50 min-h-screen p-4 md:p-6 lg:p-8 text-gray-800">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Makeup Artists</h1>
        <p class="text-gray-600">Discover professional makeup artists for your special occasions</p>
      </div>

      <!-- Search and Filter Section -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search by name or location..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <select 
            v-model="selectedSpecialization"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Specializations</option>
            <option v-for="spec in specializations" :key="spec" :value="spec">
              {{ spec }}
            </option>
          </select>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="text-red-600 mb-2">Error loading MUA data</div>
        <button @click="loadMuaData" class="text-primary-600 hover:text-primary-700">
          Try again
        </button>
      </div>

      <!-- No Results -->
      <div v-else-if="filteredMuas.length === 0" class="text-center py-12">
        <div class="text-gray-500 mb-2">No makeup artists found</div>
        <p class="text-sm text-gray-400">Try adjusting your search criteria</p>
      </div>

      <!-- MUA Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="mua in filteredMuas"
          :key="mua.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <!-- Profile Image -->
          <div class="relative h-64">
            <img
              :src="mua.profile_photo_url || '/placeholder-mua.jpg'"
              :alt="mua.user.name"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <div class="absolute top-3 right-3">
              <button 
                @click="toggleWishlist(mua.id)"
                class="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors"
              >
                <span class="material-symbols-outlined text-rose-500">
                  {{ isInWishlist(mua.id) ? 'favorite' : 'favorite_border' }}
                </span>
              </button>
            </div>
          </div>

          <!-- Profile Info -->
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ mua.user.name }}</h3>
            
            <!-- Location -->
            <div class="flex items-center text-sm text-gray-600 mb-2">
              <span class="material-symbols-outlined text-gray-400 mr-1">location_on</span>
              {{ mua.location || 'Location not specified' }}
            </div>

            <!-- Specialization -->
            <div class="mb-3">
              <span class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {{ mua.specialization || 'General Makeup' }}
              </span>
            </div>

            <!-- Rating -->
            <div class="flex items-center mb-3">
              <div class="flex items-center">
                <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                <span class="ml-1 text-sm font-medium">{{ mua.average_rating || '0' }}</span>
                <span class="ml-1 text-sm text-gray-500">({{ mua.review_count || 0 }} reviews)</span>
              </div>
            </div>

            <!-- Price Range -->
            <div class="mb-4">
              <span class="text-lg font-semibold text-primary-600">
                Starting from Rp {{ formatRupiah(mua.starting_price || 0) }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-2">
              <button
                @click="viewProfile(mua.id)"
                class="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm"
              >
                View Profile
              </button>
              <button
                @click="bookNow(mua.id)"
                class="flex-1 bg-primary-600 text-white px-3 py-2 rounded-md hover:bg-primary-700 transition-colors text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div v-if="hasMore" class="mt-8 flex justify-center">
        <button
          @click="loadMore"
          :disabled="loadingMore"
          class="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
        >
          {{ loadingMore ? 'Loading...' : 'Load More' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { apiFetch } from '@/config'

const router = useRouter()

// Reactive data
const muas = ref([])
const loading = ref(false)
const loadingMore = ref(false)
const error = ref(null)
const searchQuery = ref('')
const selectedSpecialization = ref('')
const hasMore = ref(false)
const wishlist = ref([])

// Computed properties
const filteredMuas = computed(() => {
  let filtered = muas.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(mua => 
      mua.user.name.toLowerCase().includes(query) ||
      mua.location?.toLowerCase().includes(query)
    )
  }

  if (selectedSpecialization.value) {
    filtered = filtered.filter(mua => 
      mua.specialization === selectedSpecialization.value
    )
  }

  return filtered
})

const specializations = computed(() => {
  const specs = new Set(muas.value.map(mua => mua.specialization).filter(Boolean))
  return Array.from(specs)
})

// Methods
const loadMuaData = async () => {
  loading.value = true
  error.value = null
  
  try {
    const token = localStorage.getItem('token')
    const data = await apiFetch('/customer/mua', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    
    muas.value = data.data || []
    hasMore.value = data.has_more || false
    
    console.log('✅ MUA data loaded:', muas.value.length, 'artists')
  } catch (err) {
    console.error('❌ Failed to load MUA data:', err)
    error.value = err.message || 'Failed to load makeup artists'
  } finally {
    loading.value = false
  }
}

const loadMore = async () => {
  // Implementation for pagination if needed
  hasMore.value = false
}

const viewProfile = (muaId) => {
  router.push(`/customer/mua/${muaId}`)
}

const bookNow = (muaId) => {
  router.push(`/customer/mua/${muaId}`)
}

const toggleWishlist = (muaId) => {
  const index = wishlist.value.indexOf(muaId)
  if (index > -1) {
    wishlist.value.splice(index, 1)
  } else {
    wishlist.value.push(muaId)
  }
  localStorage.setItem('muaWishlist', JSON.stringify(wishlist.value))
}

const isInWishlist = (muaId) => {
  return wishlist.value.includes(muaId)
}

const handleImageError = (event) => {
  event.target.src = '/placeholder-mua.jpg'
}

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID').format(number)
}

// Load wishlist from localStorage
onMounted(() => {
  const savedWishlist = localStorage.getItem('muaWishlist')
  if (savedWishlist) {
    wishlist.value = JSON.parse(savedWishlist)
  }
  loadMuaData()
})
</script>

<style scoped>
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>
