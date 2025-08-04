<template
    ><div id="webcrumbs">
        <div class="w-full p-0 min-h-screen flex">
            <div class="flex-1 p-8 overflow-auto">
                <div class="mb-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg p-6 border border-pink-100">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-semibold text-gray-800">Service Analytics</h2>
                        <div class="flex space-x-2">
                            <button
                                class="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors duration-200 text-sm font-medium"
                            >
                                This Month
                            </button>
                            <button
                                class="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
                            >
                                Last Month
                            </button>
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-3"
                            >
                                <span class="material-symbols-outlined text-white text-2xl">trending_up</span>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800">{{ analytics.total_bookings }}</h3>
                            <p class="text-gray-600">Total Bookings</p>
                        </div>
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3"
                            >
                                <span class="material-symbols-outlined text-white text-2xl">attach_money</span>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800">{{ formatCurrency(analytics.total_revenue) }}</h3>
                            <p class="text-gray-600">Total Revenue</p>
                        </div>
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3"
                            >
                                <span class="material-symbols-outlined text-white text-2xl">star</span>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800">{{ analytics.average_rating }}</h3>
                            <p class="text-gray-600">Average Rating</p>
                        </div>
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-3"
                            >
                                <span class="material-symbols-outlined text-white text-2xl">favorite</span>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800">{{ analytics.most_popular_category }}</h3>
                            <p class="text-gray-600">Most Popular</p>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-8">
                    <div
                        v-for="(service, index) in services"
                        :key="index"
                        class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg p-6 border border-pink-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <div class="w-12 h-12 rounded-full overflow-hidden bg-pink-100 border border-pink-200">
                            <img :src="service?.service_photo_url || 'https://via.placeholder.com/150x150?text=No+Image'" alt="Service Photo" class="object-cover w-full h-full" />
                            </div>
                            <div class="ml-4">
                            <h3 class="text-lg font-semibold text-gray-800">{{ service.name }}</h3>
                            <p class="text-sm text-gray-500">{{ service.makeup_style || 'No style' }}</p>
                            </div>
                        </div>
                        <div class="flex space-x-2">
                            <button
                            class="w-8 h-8 rounded-full bg-white hover:bg-pink-100 transition-colors duration-200 flex items-center justify-center"
                            @click="editService(service)"
                            >
                            <span class="material-symbols-outlined text-gray-600 text-sm">edit</span>
                            </button>
                            <button
                            class="w-8 h-8 rounded-full bg-white hover:bg-red-100 transition-colors duration-200 flex items-center justify-center"
                            @click="deleteService(service.id)"
                            >
                            <span class="material-symbols-outlined text-gray-600 text-sm">delete</span>
                            </button>
                        </div>
                        </div>
                        <div class="space-y-3">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Price</span>
                            <span class="text-2xl font-bold text-primary-600">{{ service.formatted_price }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Duration</span>
                            <span class="text-gray-800 font-medium">{{ service.duration }} Jam</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Category</span>
                            <span class="text-gray-800 font-medium">{{ service.category }}</span>
                        </div>
                        <div class="pt-2 border-t border-gray-100">
                            <p class="text-sm text-gray-600">
                            {{ service.description || 'No description provided.' }}
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg p-6 border border-pink-100">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-semibold text-gray-800">Add New Service</h2>
                            <div
                                class="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center"
                            >
                                <span class="material-symbols-outlined text-white">add</span>
                            </div>
                        </div>
                        <form class="space-y-4" @submit.prevent="submitService">
                            <div>
                                <label class="block text-sm font-semibold text-pink-500 mb-2">Service Name</label>
                                <input
                                    type="text"
                                    class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                    placeholder="e.g., Photoshoot Makeup"
                                    v-model="form.name"
                                />
                            </div>
                            <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label class="block text-sm font-semibold text-pink-500 mb-2">Price (Rp)</label>
                                    <input
                                        type="number"
                                        class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                        placeholder="0.00"
                                        v-model="form.price"
                                    />
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-pink-500 mb-2">Duration (Hours)</label>
                                    <input
                                        class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                        v-model="form.duration"
                                        type="text"
                                        placeholder="e.g., 1 - 2"
                                    />
                                </div>
                                <!-- <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                    <select
                                        v-model="form.category"
                                        class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                    >
                                        <option disabled value="">-- Select Category --</option>
                                        <option value="Bridal">Bridal</option>
                                        <option value="Pre-wedding">Pre-wedding</option>
                                        <option value="Graduation">Graduation</option>
                                        <option value="Party">Party</option>
                                        <option value="Content Creator">Content Creator</option>
                                        <option value="Regular">Regular</option>
                                    </select>
                                </div> -->
                                <div>
                                    <label class="block text-sm font-semibold text-pink-500 mb-2">Choose a Category</label>
                                    <select
                                        v-model="form.category"
                                        class="w-full px-4 py-3 bg-white text-pink-500 border border-pink-200 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 ease-in-out">
                                        <option disabled value="">-- Select Category --</option>
                                        <option value="Bridal">👰 Bridal</option>
                                        <option value="Pre-wedding">💍 Pre-wedding</option>
                                        <option value="Graduation">🎓 Graduation</option>
                                        <option value="Party">🎉 Party</option>
                                        <option value="Content Creator">📸 Content Creator</option>
                                        <option value="Regular">💄 Regular</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-pink-500 mb-2">Description</label>
                                <textarea
                                    class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 h-20 resize-none"
                                    placeholder="Describe your service..."
                                    v-model="form.description"
                                ></textarea>
                            </div>
                            <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label class="block text-sm font-semibold text-pink-500 mb-2">Photo</label>
                                    <!-- Drop Area -->
                                    <div class="block border-2 border-dashed border-pink-300 rounded-xl p-6 text-center bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer relative"
                                        @click="triggerFileInput">
                                        <input type="file" ref="fileInput" accept="image/*" class="hidden"
                                            @change="handleFileChange" />
                                        <template v-if="previewUrl">
                                            <img :src="previewUrl" alt="Preview" class="mx-auto max-h-40 rounded-md" />
                                            <button @click.stop="removeImage" class="mt-2 text-sm underline text-pink-600">
                                                Remove Image
                                            </button>
                                        </template>
                                        <template v-else>
                                            <span class="material-symbols-outlined text-4xl text-pink-400 mb-2 block">
                                                add_a_photo
                                            </span>
                                            <p class="text-pink-500 font-medium">Click to upload</p>
                                            <p class="text-sm text-pink-400">JPG, PNG up to 5MB</p>
                                        </template>
                                    </div>
                                </div>
                                <!-- <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2"
                                        >Photo</label
                                    >
                                    <div
                                        class="border-2 border-dashed border-pink-300 rounded-2xl p-6 text-center bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer"
                                    >
                                        <span class="material-symbols-outlined text-4xl text-pink-400 mb-2 block"
                                            >add_a_photo</span
                                        >
                                        <input type="file" class="text-gray-600" accept="image/*" @change="handleFileUpload" />
                                    </div>
                                </div> -->
                                <div>
                                    <label class="block text-sm font-semibold text-pink-500 mb-2">Make up Style</label>
                                    <input
                                        type="text"
                                        v-model="form.makeup_style"
                                        placeholder="Describe your makeup style..."
                                        class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                class="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                            >
                                Add Service
                            </button>
                        </form>
                    </div>
                    <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg p-6 border border-pink-100">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-semibold text-gray-800">Cancellation Policies</h2>
                            <div
                                class="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                            >
                                <span class="material-symbols-outlined text-white">policy</span>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <div class="border border-gray-200 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <h3 class="font-medium text-gray-800">Deposit or Full Payment Requirement</h3>
                                    <button class="text-pink-500 hover:text-pink-600 transition-colors duration-200">
                                    </button>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <p>• To minimize last-minute cancellations, MUAs may require clients to pay a deposit or full payment upfront when booking.</p>
                                </div>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <h3 class="font-medium text-gray-800">Clear Cancellation Terms</h3>
                                    <button class="text-pink-500 hover:text-pink-600 transition-colors duration-200">
                                    </button>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <p>• MUAs can define clear cancellation policies (e.g., deposit is non-refundable if canceled within X days, cancellation penalty) that clients must agree to at the time of booking.</p>
                                </div>
                            </div>
                            <div class="border border-gray-200 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <h3 class="font-medium text-gray-800">Automatic Reminders</h3>
                                    <button class="text-pink-500 hover:text-pink-600 transition-colors duration-200">
                                    </button>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <p>• The system will send automated reminders to clients a few days before the scheduled appointment to reduce the risk of no-shows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300">
      <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-[400px] text-center animate-fadeIn">
        <div class="mb-4">
          <svg class="mx-auto h-12 w-12 text-pink-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-pink-500 mb-2">Service added!</h2>
        <p class="text-sm text-gray-700 mb-6">Service with name {{ addedServiceName }}<br/> successfully {{ modalAction }} ✨</p>
        <button @click="closeModal"
                class="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 px-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-md">
          ok
        </button>
      </div>
    </div>
    
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { apiFetch } from '@/config'

const services = ref([])
const editingId = ref(null)
const isEditing = ref(false)
const isDeleting = ref(false)
const analytics = ref({
  total_bookings: 0,
  total_revenue: 0,
  average_rating: 0,
  most_popular_category: 'No data'
})
const showSuccessModal = ref(false)
const addedServiceName = ref('')
const modalAction = computed(() => {
  if (editingId.value !== null) return 'updated'
  if (isDeleting.value) return 'deleted'
  return 'added'
})

onMounted(() => {
  fetchServices()
  fetchAnalytics()
})

async function fetchServices() {
  const token = localStorage.getItem('token')
  try {
    const data = await apiFetch('/mua/services')
    services.value = data
    } catch (err) {
    console.error('Failed to load services', err)
  }
}

async function fetchAnalytics() {
  try {
    const data = await apiFetch('/mua/services/analytics')
    analytics.value = data
  } catch (err) {
    console.error('Failed to load analytics', err)
  }
}

function formatCurrency(amount) {
  if (!amount || amount === 0) return 'Rp 0'
  return 'Rp ' + new Intl.NumberFormat('id-ID').format(amount)
}


const form = reactive({
  name: '',
  description: '',
  price: '',
  duration: '',
  photo: null,
  makeup_style: '',
  category: ''
})

function resetForm() {
  form.name = ''
  form.description = ''
  form.price = ''
  form.duration = ''
  form.photo = null
  form.makeup_style = ''
  form.category = ''
  editingId.value = null
  isEditing.value = false
}

async function submitService() {
  const formData = new FormData()

  for (const key in form) {
    if (form[key] !== null) {
      formData.append(key, key === 'photo' ? form[key] : String(form[key]))
    }
  }

  const isUpdate = editingId.value !== null
  const url = isUpdate
    ? `/mua/services/${editingId.value}`
    : '/mua/services'
  
  if (isUpdate) {
    formData.append('_method', 'PUT')
  }

  try {
    const data = await apiFetch(url, {
      method: 'POST',
      body: formData
    })

    showSuccessModal.value = true
    addedServiceName.value = data.service.name
    editingId.value = editingId.value
    resetForm()
    fetchServices()
    fetchAnalytics() // Refresh analytics after service changes
  } catch (err) {
    console.error("❌ Network Error:", err)
    alert(err.message || 'Gagal menyimpan service.')
  }
}


function editService(service) {
  form.name = service.name
  form.description = service.description
  form.price = service.price
  form.duration = service.duration
  form.makeup_style = service.makeup_style
  form.category = service.category
  editingId.value = service.id
  isEditing.value = true
}

async function deleteService(id) {
  const confirmDelete = confirm("Are you sure you want to delete this service?")
  if (!confirmDelete) return

  try {
    isDeleting.value = true
    
    const data = await apiFetch(`/mua/services/${id}`, {
      method: 'DELETE'
    })

    showSuccessModal.value = true
    addedServiceName.value = data.name
    fetchServices()
    fetchAnalytics() // Refresh analytics after service deletion
    isDeleting.value = false
  } catch (err) {
    console.error("❌ Delete Error:", err)
    alert(err.message || 'Gagal menghapus service.')
  }
}

//-- SERVICE PHOTO --
const fileInput = ref(null)
const previewUrl = ref(null)
const selectedFile = ref(null)

const triggerFileInput = () => {
    fileInput.value.click()
}

const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        form.photo = file
        selectedFile.value = file
        previewUrl.value = URL.createObjectURL(file)
    }
}

const removeImage = () => {
    selectedFile.value = null
    previewUrl.value = null
    fileInput.value.value = null
}
//-- END Service Photo --


const closeModal = () => {
    showSuccessModal.value = false
    isDeleting.value = false
}
</script>
