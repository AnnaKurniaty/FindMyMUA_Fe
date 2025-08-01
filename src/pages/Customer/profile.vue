<template>
  <div id="webcrumbs">
    <div class="bg-gray-50 min-h-screen p-4 md:p-8 text-gray-800">
      <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div>
          <div class="p-6" v-if="profile">
            <div class="mb-8">
              <div class="relative group mb-6 flex justify-center">
                <div
                  class="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 transition-transform group-hover:scale-105"
                >
                  <img
                    :src="profile.profile_photo ? (apiUrl + '/storage/profile_photos/' + profile.profile_photo) : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'"
                    alt="Profile Photo"
                    class="w-full h-full object-cover"
                    keywords="woman, portrait, professional, makeup artist"
                  />
                </div>
                <div
                  class="absolute bottom-4 right-0 bg-primary-500 p-2 rounded-full shadow-lg cursor-pointer hover:bg-primary-600 transition-colors"
                  @click="triggerFileInput"
                >
                  <span class="material-symbols-outlined text-white">photo_camera</span>
                </div>
                <input type="file" ref="fileInput" class="hidden" @change="handleFileChange" />
              </div>
              <h2 class="text-xl font-semibold border-b border-gray-200 pb-2 mb-4 flex items-center">
                <span class="material-symbols-outlined mr-2">contact_mail</span> Contact Information
              </h2>
              <div class="space-y-3">
                <div class="flex items-center">
                  <span class="material-symbols-outlined text-primary-500 mr-3">person</span>
                  <div class="flex flex-col">
                    <span class="text-sm text-gray-600">Full Name</span>
                    <span class="text-gray-800 font-medium">{{ profile.name }}</span>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="material-symbols-outlined text-primary-500 mr-3">mail</span>
                  <div class="flex flex-col">
                    <span class="text-sm text-gray-600">Email Address</span>
                    <span class="text-gray-800 font-medium">{{ profile.email }}</span>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="material-symbols-outlined text-primary-500 mr-3">location_on</span>
                  <div class="flex flex-col">
                    <span class="text-sm text-gray-600">Address</span>
                    <span class="text-gray-800 font-medium">{{ profile.address }}</span>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="material-symbols-outlined text-primary-500 mr-3">smartphone</span>
                  <div class="flex flex-col">
                    <span class="text-sm text-gray-600">Phone Number</span>
                    <span class="text-gray-800 font-medium">{{ profile.phone }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 class="text-lg font-medium mb-3 flex items-center">
                  <span class="material-symbols-outlined mr-2">workspace_premium</span> User Information
                </h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <span class="material-symbols-outlined text-primary-500 mr-2">palette</span>
                    <span class="text-gray-700 font-medium">Skin Tone:</span>
                    <span class="ml-2">{{ profile.skin_tone || form.skin_tone }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="material-symbols-outlined text-primary-500 mr-2">water_drop</span>
                    <span class="text-gray-700 font-medium">Skin Type:</span>
                    <span class="ml-2">{{ profile.skin_type ? profile.skin_type.join(', ') : form.skin_type.join(', ') }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="material-symbols-outlined text-primary-500 mr-2">health_and_safety</span>
                    <span class="text-gray-700 font-medium">Skin Issues:</span>
                    <span class="ml-2">{{ profile.skin_issues || form.skin_issues }}</span>
                  </li>
                  <li class="flex items-start">
                    <span class="material-symbols-outlined text-primary-500 mr-2">brush</span>
                    <span class="text-gray-700 font-medium">Makeup Preferences:</span>
                    <span class="ml-2">{{ profile.makeup_preferences ? profile.makeup_preferences.join(', ') : form.makeup_preferences.join(', ') }}</span>
                  </li>
                </ul>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 class="text-lg font-medium mb-3 flex items-center">
                  <span class="material-symbols-outlined mr-2">history</span> Skincare History &amp; Allergies
                </h3>
                <div class="mb-3">
                  <h4 class="font-medium text-gray-700">Skincare History:</h4>
                  <p class="text-sm mt-1">{{ profile.skincare_history || form.skincare_history }}</p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700">Allergies:</h4>
                  <div class="flex flex-wrap gap-2 mt-1">
                    <span
                      class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
                    >
                      {{ profile.allergies || form.allergies }}
                    </span>
                  </div>
                </div>
              </div>
              <button
                  @click="toggleEditForm"
                  class="py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                >
                  <span class="material-symbols-outlined">edit</span> Edit Profile
                </button>
            </div>
            <div
                v-if="showEditForm"
                class="md:col-span-2 bg-gray-50 p-6 rounded-lg mt-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 class="text-xl font-semibold mb-6 flex items-center">
                  <span class="material-symbols-outlined mr-2">edit_document</span> Edit Profile Information
                </h3>
                <form class="space-y-6" @submit.prevent="submitForm">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        v-model="form.name"
                      />
                    </div>
                    <div class="space-y-2">
                      <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        v-model="form.email"
                      />
                    </div>
                    <div class="space-y-2">
                      <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        v-model="form.phone"
                      />
                    </div>
                    <div class="space-y-2">
                      <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                      <input
                        type="text"
                        id="address"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        v-model="form.address"
                      />
                    </div>
                    <div class="space-y-2">
                      <label for="skinTone" class="block text-sm font-medium text-gray-700">Skin Tone</label>
                      <select
                        id="skinTone"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        v-model="form.skin_tone"
                      >
                        <option value="light">Light with cool undertones</option>
                        <option value="lightWarm">Light with warm undertones</option>
                        <option value="medium">Medium with warm undertones</option>
                        <option value="mediumCool">Medium with cool undertones</option>
                        <option value="deep">Deep with warm undertones</option>
                        <option value="deepCool">Deep with cool undertones</option>
                      </select>
                    </div>
                    <div class="space-y-2">
                      <label for="skinType" class="block text-sm font-medium text-gray-700">Skin Type</label>
                    <div class="flex flex-wrap gap-3">
                      <div class="flex items-center" v-for="option in skinTypeOptions" :key="option">
                        <input
                          type="checkbox"
                          :id="'skinType' + option.replace(/\\s+/g, '')"
                          class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          :value="option"
                          v-model="form.skin_type"
                        />
                        <label :for="'skinType' + option.replace(/\\s+/g, '')" class="ml-2 text-sm text-gray-700">{{ option }}</label>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="space-y-2">
                    <label for="skinIssues" class="block text-sm font-medium text-gray-700">Skin Issues</label>
                    <textarea
                      id="skinIssues"
                      rows="2"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      v-model="form.skin_issues"
                    ></textarea>
                  </div>
                  <div class="space-y-2">
                    <label for="skinHistory" class="block text-sm font-medium text-gray-700">Skincare History</label>
                    <textarea
                      id="skinHistory"
                      rows="3"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      v-model="form.skincare_history"
                    ></textarea>
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">Allergies</label>
                  <input
                    type="text"
                    id="allergies"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    v-model="form.allergies"
                    placeholder="Enter allergies separated by commas"
                  />
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">Makeup Preferences</label>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label for="coverage" class="block text-sm text-gray-700">Coverage Level</label>
                        <div class="flex flex-wrap gap-3">
                          <div class="flex items-center" v-for="preference in makeupPreferencesOptions" :key="preference">
                            <input
                              type="checkbox"
                              :id="'makeupPreference' + preference.replace(/\\s+/g, '')"
                              class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                              :value="preference"
                              v-model="form.makeup_preferences"
                            />
                            <label :for="'makeupPreference' + preference.replace(/\\s+/g, '')" class="ml-2 text-sm text-gray-700">{{ preference }}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end space-x-4 pt-4">
                    <button
                      type="button"
                      class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                      @click="cancelEdit"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            <div v-if="successMessage" class="mt-4 p-4 bg-green-100 text-green-700 rounded">{{ successMessage }}</div>
            <div v-if="errorMessage" class="mt-4 p-4 bg-red-100 text-red-700 rounded">{{ errorMessage }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { apiFetch } from '@/config'

const apiUrl = import.meta.env.VITE_API_URL

const profile = ref(null)
const showEditForm = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const fileInput = ref(null)
const selectedFile = ref(null)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  skin_tone: '',
  skin_type: [],
  skin_issues: '',
  skincare_history: '',
  allergies: '',
  makeup_preferences: []
})

const skinTypeOptions = [
  'Dry',
  'Oily',
  'Combination',
  'Normal',
  'Sensitive'
]

const makeupPreferencesOptions = [
  'Sheer',
  'Light',
  'Medium',
  'Medium to Full',
  'Full'
]


function mapSkinTypeToDisplay(skinTypeArray) {
  if (!skinTypeArray || skinTypeArray.length === 0) return 'Combination'
  return skinTypeArray.join(', ')
}

const skinTypeDisplay = ref('Combination')

onMounted(async () => {
  const token = localStorage.getItem('token')
  try {
    const data = await apiFetch('/customer/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })
    profile.value = data
    form.name = data.name || ''
    form.email = data.email || ''
    form.phone = data.phone || ''
    form.address = data.address || ''
    form.skin_tone = data.skin_tone || ''
    try {
      if (data.skin_type) {
        if (typeof data.skin_type === 'string') {
          try {
            form.skin_type = JSON.parse(data.skin_type)
          } catch {
            form.skin_type = data.skin_type.split(',')
          }
        } else if (Array.isArray(data.skin_type)) {
          form.skin_type = data.skin_type
        } else {
          form.skin_type = []
        }
      } else {
        form.skin_type = []
      }
    } catch (e) {
      form.skin_type = []
    }
    form.skin_issues = data.skin_issues || ''
    form.skincare_history = data.skincare_history || ''
    form.allergies = data.allergies || ''
try {
  if (data.makeup_preferences) {
    if (typeof data.makeup_preferences === 'string') {
      try {
        form.makeup_preferences = JSON.parse(data.makeup_preferences)
      } catch {
        form.makeup_preferences = data.makeup_preferences.split(',')
      }
    } else if (Array.isArray(data.makeup_preferences)) {
      form.makeup_preferences = data.makeup_preferences
    } else {
      form.makeup_preferences = []
    }
  } else {
    form.makeup_preferences = []
  }
} catch {
  form.makeup_preferences = []
}
    skinTypeDisplay.value = mapSkinTypeToDisplay(form.skin_type)
    successMessage.value = ''
    errorMessage.value = ''
  } catch (err) {
    console.error('Failed to load profile', err)
    errorMessage.value = 'Failed to load profile data.'
  }
})

function toggleEditForm() {
  showEditForm.value = !showEditForm.value
  successMessage.value = ''
  errorMessage.value = ''
  if (showEditForm.value && profile.value) {
    form.name = profile.value.name || ''
    form.email = profile.value.email || ''
    form.phone = profile.value.phone || ''
    form.address = profile.value.customer_profile?.address || ''
    form.skin_tone = profile.value.customer_profile?.skin_tone || ''
    try {
      form.skin_type = profile.value.customer_profile?.skin_type ? JSON.parse(profile.value.customer_profile.skin_type) : []
    } catch (e) {
      form.skin_type = profile.value.customer_profile?.skin_type ? profile.value.customer_profile.skin_type.split(',') : []
    }
    form.skin_issues = profile.value.customer_profile?.skin_issues || ''
    form.skincare_history = profile.value.customer_profile?.skincare_history || ''
    form.allergies = profile.value.customer_profile?.allergies || ''
    try {
      if (profile.value.customer_profile?.makeup_preferences) {
        if (typeof profile.value.customer_profile.makeup_preferences === 'string') {
          try {
            form.makeup_preferences = JSON.parse(profile.value.customer_profile.makeup_preferences)
          } catch {
            form.makeup_preferences = profile.value.customer_profile.makeup_preferences.split(',')
          }
        } else if (Array.isArray(profile.value.customer_profile.makeup_preferences)) {
          form.makeup_preferences = profile.value.customer_profile.makeup_preferences
        } else {
          form.makeup_preferences = []
        }
      } else {
        form.makeup_preferences = []
      }
    } catch {
      form.makeup_preferences = []
    }
  }
}

function triggerFileInput() {
  fileInput.value.click()
}

function handleFileChange(event) {
  const files = event.target.files
  if (files.length > 0) {
    selectedFile.value = files[0]
  }
}

async function submitForm() {
  successMessage.value = ''
  errorMessage.value = ''

  // Ensure makeup_preferences is an array before sending
  let makeupPreferencesToSend = form.makeup_preferences;
  if (!Array.isArray(makeupPreferencesToSend)) {
    // If it's a string, try to parse it as JSON or split by comma
    if (typeof makeupPreferencesToSend === 'string') {
      try {
        makeupPreferencesToSend = JSON.parse(makeupPreferencesToSend);
      } catch (e) {
        // If JSON parsing fails, split by comma
        makeupPreferencesToSend = makeupPreferencesToSend.split(',').map(item => item.trim()).filter(item => item);
      }
    } else {
      // If it's neither array nor string, convert to empty array
      makeupPreferencesToSend = [];
    }
  }

  // Prepare form data for CustomerProfile update
  const profileData = new FormData()
  profileData.append('address', form.address)
  profileData.append('skin_tone', form.skin_tone)
  profileData.append('skin_type', JSON.stringify(form.skin_type))
  profileData.append('skin_issues', form.skin_issues)
  profileData.append('skincare_history', form.skincare_history)
  profileData.append('allergies', form.allergies)
  profileData.append('makeup_preferences', JSON.stringify(makeupPreferencesToSend))
  profileData.append('_method', 'PUT')

  if (selectedFile.value) {
    profileData.append('profile_photo', selectedFile.value)
  }

  // Debug log to check data before sending
  console.log('Submitting profile update with data:')
  for (const pair of profileData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`)
  }

  // Prepare data for User update
  const userData = {
    name: form.name,
    email: form.email,
    phone: form.phone
  }

  try {
    // Update CustomerProfile
    const profileResponse = await apiFetch('/customer/profile', {
      method: 'PUT',
      body: profileData
    })

    // Update User
    const userResponse = await apiFetch('/me', {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    successMessage.value = 'Profile updated successfully'
    errorMessage.value = ''
    showEditForm.value = false

    // Refresh profile data
    profile.value = await apiFetch('/customer/profile')

    // Refresh user data
    const user = await apiFetch('/me')

    // Update form fields with refreshed data
    form.name = user.name || ''
    form.email = user.email || ''
    form.phone = user.phone || ''
    form.address = profile.value.address || ''
    form.skin_tone = profile.value.skin_tone || ''

    try {
      form.skin_type = profile.value.skin_type ? JSON.parse(profile.value.skin_type) : []
    } catch (e) {
      form.skin_type = profile.value.skin_type ? profile.value.skin_type.split(',') : []
    }
    form.skin_issues = profile.value.skin_issues || ''
    form.skincare_history = profile.value.skincare_history || ''
    form.allergies = profile.value.allergies || ''
    try {
      if (profile.value.makeup_preferences) {
        if (typeof profile.value.makeup_preferences === 'string') {
          try {
            form.makeup_preferences = JSON.parse(profile.value.makeup_preferences)
          } catch {
            form.makeup_preferences = profile.value.makeup_preferences.split(',')
          }
        } else if (Array.isArray(profile.value.makeup_preferences)) {
          form.makeup_preferences = profile.value.makeup_preferences
        } else {
          form.makeup_preferences = []
        }
      } else {
        form.makeup_preferences = []
      }
    } catch {
      form.makeup_preferences = []
    }
    skinTypeDisplay.value = mapSkinTypeToDisplay(form.skin_type)
  } catch (err) {
    console.error('Failed to update profile', err)
    errorMessage.value = err.message || 'Failed to update profile'
  }
}

function cancelEdit() {
  showEditForm.value = false
  errorMessage.value = ''
  successMessage.value = ''
  // Reset form to original profile data
  if (profile.value) {
    form.name = profile.value.name || ''
    form.email = profile.value.email || ''
    form.phone = profile.value.phone || ''
    form.address = profile.value.address || ''
    form.skin_tone = profile.value.skin_tone || ''
  try {
    form.skin_type = profile.value.skin_type ? JSON.parse(profile.value.skin_type) : []
  } catch (e) {
    form.skin_type = profile.value.skin_type ? profile.value.skin_type.split(',') : []
  }
  form.skin_issues = profile.value.skin_issues || ''
  form.skincare_history = profile.value.skincare_history || ''
  form.allergies = profile.value.allergies || ''
  form.makeup_preferences = profile.value.makeup_preferences ? JSON.parse(profile.value.makeup_preferences) : ''
  skinTypeDisplay.value = mapSkinTypeToDisplay(form.skin_type)
  }
}
</script>
