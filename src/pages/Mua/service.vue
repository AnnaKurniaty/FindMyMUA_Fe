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

<style>
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
#webcrumbs .pointer-events-none {
  pointer-events: none;
}
#webcrumbs .fixed {
  position: fixed;
}
#webcrumbs .relative {
  position: relative;
}
#webcrumbs .inset-0 {
  inset: 0;
}
#webcrumbs .z-50 {
  z-index: 50;
}
#webcrumbs .mx-auto {
  margin-left: auto;
  margin-right: auto;
}
#webcrumbs .mb-2 {
  margin-bottom: 8px;
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
#webcrumbs .ml-4 {
  margin-left: 16px;
}
#webcrumbs .block {
  display: block;
}
#webcrumbs .flex {
  display: flex;
}
#webcrumbs .grid {
  display: grid;
}
#webcrumbs .hidden {
  display: none;
}
#webcrumbs .h-10 {
  height: 40px;
}
#webcrumbs .h-12 {
  height: 48px;
}
#webcrumbs .h-16 {
  height: 64px;
}
#webcrumbs .h-20 {
  height: 80px;
}
#webcrumbs .h-8 {
  height: 32px;
}
#webcrumbs .h-full {
  height: 100%;
}
#webcrumbs .min-h-screen {
  min-height: 100vh;
}
#webcrumbs .w-10 {
  width: 40px;
}
#webcrumbs .w-12 {
  width: 48px;
}
#webcrumbs .w-16 {
  width: 64px;
}
#webcrumbs .w-8 {
  width: 32px;
}
#webcrumbs .w-\[400px\] {
  width: 400px;
}
#webcrumbs .w-full {
  width: 100%;
}
#webcrumbs .flex-1 {
  flex: 1 1 0%;
}
#webcrumbs .transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#webcrumbs .cursor-pointer {
  cursor: pointer;
}
#webcrumbs .resize-none {
  resize: none;
}
#webcrumbs .grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
#webcrumbs .flex-row {
  flex-direction: row;
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
#webcrumbs .gap-4 {
  gap: 16px;
}
#webcrumbs .gap-6 {
  gap: 24px;
}
#webcrumbs :is(.space-x-2 > :not([hidden]) ~ :not([hidden])) {
  --tw-space-x-reverse: 0;
  margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));
  margin-right: calc(8px * var(--tw-space-x-reverse));
}
#webcrumbs :is(.space-y-2 > :not([hidden]) ~ :not([hidden])) {
  --tw-space-y-reverse: 0;
  margin-bottom: calc(8px * var(--tw-space-y-reverse));
  margin-top: calc(8px * (1 - var(--tw-space-y-reverse)));
}
#webcrumbs :is(.space-y-3 > :not([hidden]) ~ :not([hidden])) {
  --tw-space-y-reverse: 0;
  margin-bottom: calc(12px * var(--tw-space-y-reverse));
  margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
}
#webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
  --tw-space-y-reverse: 0;
  margin-bottom: calc(16px * var(--tw-space-y-reverse));
  margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
}
#webcrumbs :is(.space-y-6 > :not([hidden]) ~ :not([hidden])) {
  --tw-space-y-reverse: 0;
  margin-bottom: calc(24px * var(--tw-space-y-reverse));
  margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));
}
#webcrumbs .overflow-auto {
  overflow: auto;
}
#webcrumbs .overflow-hidden {
  overflow: hidden;
}
#webcrumbs .rounded-2xl {
  border-radius: 48px;
}
#webcrumbs .rounded-full {
  border-radius: 9999px;
}
#webcrumbs .rounded-lg {
  border-radius: 24px;
}
#webcrumbs .rounded-xl {
  border-radius: 36px;
}
#webcrumbs .border {
  border-width: 1px;
}
#webcrumbs .border-2 {
  border-width: 2px;
}
#webcrumbs .border-t {
  border-top-width: 1px;
}
#webcrumbs .border-dashed {
  border-style: dashed;
}
#webcrumbs .border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));
}
#webcrumbs .border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));
}
#webcrumbs .border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}
#webcrumbs .border-pink-100 {
  --tw-border-opacity: 1;
  border-color: rgb(252 231 243 / var(--tw-border-opacity, 1));
}
#webcrumbs .border-pink-200 {
  --tw-border-opacity: 1;
  border-color: rgb(251 207 232 / var(--tw-border-opacity, 1));
}
#webcrumbs .border-pink-300 {
  --tw-border-opacity: 1;
  border-color: rgb(249 168 212 / var(--tw-border-opacity, 1));
}
#webcrumbs .bg-black\/30 {
  background-color: rgba(0, 0, 0, 0.3);
}
#webcrumbs .bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 231 243 / var(--tw-bg-opacity, 1));
}
#webcrumbs .bg-pink-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 242 248 / var(--tw-bg-opacity, 1));
}
#webcrumbs .bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
#webcrumbs .bg-white\/90 {
  background-color: hsla(0, 0%, 100%, 0.9);
}
#webcrumbs .bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
#webcrumbs .bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
#webcrumbs .from-pink-400 {
  --tw-gradient-from: #f472b6 var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(244, 114, 182, 0) var(--tw-gradient-to-position);
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
#webcrumbs .from-purple-400 {
  --tw-gradient-from: #c084fc var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(192, 132, 252, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
#webcrumbs .from-rose-400 {
  --tw-gradient-from: #fb7185 var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(251, 113, 133, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
#webcrumbs .to-pink-400 {
  --tw-gradient-to: #f472b6 var(--tw-gradient-to-position);
}
#webcrumbs .to-rose-400 {
  --tw-gradient-to: #fb7185 var(--tw-gradient-to-position);
}
#webcrumbs .to-rose-50 {
  --tw-gradient-to: #fff1f2 var(--tw-gradient-to-position);
}
#webcrumbs .to-rose-500 {
  --tw-gradient-to: #f43f5e var(--tw-gradient-to-position);
}
#webcrumbs .object-cover {
  object-fit: cover;
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
#webcrumbs .p-8 {
  padding: 32px;
}
#webcrumbs .px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
#webcrumbs .px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
#webcrumbs .py-2 {
  padding-bottom: 8px;
  padding-top: 8px;
}
#webcrumbs .py-3 {
  padding-bottom: 12px;
  padding-top: 12px;
}
#webcrumbs .pt-2 {
  padding-top: 8px;
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
#webcrumbs .text-xl {
  font-size: 20px;
  line-height: 28px;
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
#webcrumbs .text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
#webcrumbs .text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity, 1));
}
#webcrumbs .text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity, 1));
}
#webcrumbs .text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity, 1));
}
#webcrumbs .text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(244 114 182 / var(--tw-text-opacity, 1));
}
#webcrumbs .text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(236 72 153 / var(--tw-text-opacity, 1));
}
#webcrumbs .text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(190 24 93 / var(--tw-text-opacity, 1));
}
#webcrumbs .text-primary-600 {
  --tw-text-opacity: 1;
  color: rgb(99 27 255 / var(--tw-text-opacity, 1));
}
#webcrumbs .text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
#webcrumbs .opacity-0 {
  opacity: 0;
}
#webcrumbs .shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
}
#webcrumbs .shadow-2xl,
#webcrumbs .shadow-lg {
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
#webcrumbs .shadow-lg {
  --tw-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored:
    0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
}
#webcrumbs .shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
#webcrumbs .backdrop-blur-md {
  --tw-backdrop-blur: blur(12px);
}
#webcrumbs .backdrop-blur-md,
#webcrumbs .backdrop-blur-sm {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
    var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
    var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
    var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
    var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
    var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
    var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
    var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
    var(--tw-backdrop-sepia);
}
#webcrumbs .backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
}
#webcrumbs .transition-all {
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#webcrumbs .transition-colors {
  transition-duration: 0.15s;
  transition-property:
    color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#webcrumbs .transition-opacity {
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#webcrumbs .transition-transform {
  transition-duration: 0.15s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#webcrumbs .duration-200 {
  transition-duration: 0.2s;
}
#webcrumbs .duration-300 {
  transition-duration: 0.3s;
}
#webcrumbs .ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#webcrumbs {
  font-family: Open Sans !important;
  font-size: 16px !important;
}
#webcrumbs .hover\:-translate-y-1:hover {
  --tw-translate-y: -4px;
}
#webcrumbs .hover\:-translate-y-1:hover,
#webcrumbs .hover\:rotate-90:hover {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#webcrumbs .hover\:rotate-90:hover {
  --tw-rotate: 90deg;
}
#webcrumbs .hover\:scale-105:hover {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
}
#webcrumbs .hover\:scale-105:hover,
#webcrumbs .hover\:scale-110:hover {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#webcrumbs .hover\:scale-110:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
}
#webcrumbs .hover\:border-pink-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(249 168 212 / var(--tw-border-opacity, 1));
}
#webcrumbs .hover\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
#webcrumbs .hover\:bg-pink-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 231 243 / var(--tw-bg-opacity, 1));
}
#webcrumbs .hover\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 207 232 / var(--tw-bg-opacity, 1));
}
#webcrumbs .hover\:bg-red-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity, 1));
}
#webcrumbs .hover\:from-pink-600:hover {
  --tw-gradient-from: #db2777 var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(219, 39, 119, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
#webcrumbs .hover\:to-rose-600:hover {
  --tw-gradient-to: #e11d48 var(--tw-gradient-to-position);
}
#webcrumbs .hover\:text-pink-600:hover {
  --tw-text-opacity: 1;
  color: rgb(219 39 119 / var(--tw-text-opacity, 1));
}
#webcrumbs .hover\:shadow-lg:hover {
  --tw-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored:
    0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
}
#webcrumbs .hover\:shadow-lg:hover,
#webcrumbs .hover\:shadow-md:hover {
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
#webcrumbs .hover\:shadow-md:hover {
  --tw-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored:
    0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
}
#webcrumbs .hover\:shadow-xl:hover {
  --tw-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored:
    0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
#webcrumbs .focus\:border-transparent:focus {
  border-color: transparent;
}
#webcrumbs .focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow:
    var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
}
#webcrumbs .focus\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(244 114 182 / var(--tw-ring-opacity, 1));
}
#webcrumbs .focus\:ring-pink-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(236 72 153 / var(--tw-ring-opacity, 1));
}
@media (min-width: 768px) {
  #webcrumbs .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1024px) {
  #webcrumbs .lg\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  #webcrumbs .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  #webcrumbs .lg\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

</style>