<template>
    <div id="webcrumbs">
        <div class="w-full min-h-screen">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">

                    <!-- PROFILE INFORMATION Section -->
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span class="material-symbols-outlined">person</span>
                                Profile Information
                            </h2>
                            <button
                                class="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium hover:bg-primary-200 transition-colors">
                                <span class="material-symbols-outlined text-sm mr-2">edit</span>
                                Edit Profile
                            </button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <div class="flex items-center gap-4">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                                        <span class="text-2xl">{{ profile?.profile_photo || '👤' }}</span>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-gray-800">{{ profile?.name || 'Loading...' }}
                                        </h3>
                                        <p class="text-sm text-gray-600">Professional MUA</p>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <div class="flex items-center gap-3">
                                        <span class="material-symbols-outlined text-gray-600">badge</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Brand Name</p>
                                            <p class="text-sm text-gray-600">{{ profile?.name || '-' }}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <span class="material-symbols-outlined text-gray-600">email</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Email</p>
                                            <p class="text-sm text-gray-600">{{ profile?.email || '-' }}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <span class="material-symbols-outlined text-gray-600">phone</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Phone</p>
                                            <p class="text-sm text-gray-600">{{ profile?.phone || '-' }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div>
                                    <h4 class="font-semibold text-gray-800 mb-2">Professional Bio</h4>
                                    <p class="text-sm text-gray-600 leading-relaxed">
                                        {{ profile?.mua_profile?.bio || 'No bio yet.' }}
                                    </p>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 mb-2">Service Locations</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                                            {{ profile?.mua_profile?.service_area || 'Not specified' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CERTIFICATIONS & SPECIALIZATIONS Section -->
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">workspace_premium</span> Certifications &amp;
                            Specializations
                        </h3>
                        <!-- Certifications -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Certifications</h4>

                                <div v-if="parsedCertifications.length" class="space-y-3">
                                    <div v-for="(cert, i) in parsedCertifications" :key="i"
                                        class="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-shadow"
                                        :class="getBg(i)">
                                        <div :class="getIconBg(i)"
                                            class="w-8 h-8 rounded-full flex items-center justify-center">
                                            <span class="material-symbols-outlined text-sm" :class="getIconColor(i)">
                                                verified
                                            </span>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-800">{{ cert }}</p>
                                        </div>
                                    </div>
                                </div>

                                <p v-else class="text-sm text-gray-500">No certification(s) added.</p>
                            </div>

                            <!-- Specializations -->
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Specializations</h4>

                                <div v-if="parsedSpecializations.length" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div v-for="(item, i) in parsedSpecializations" :key="i"
                                        class="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-shadow"
                                        :class="getBg(i)">
                                        <div :class="getIconBg(i)"
                                            class="w-8 h-8 rounded-full flex items-center justify-center">
                                            <span class="material-symbols-outlined text-sm" :class="getIconColor(i)">
                                                palette
                                            </span>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-800">{{ item }}</p>
                                        </div>
                                    </div>
                                </div>
                                <p v-else class="text-sm text-gray-500">No specialization(s) added.</p>
                            </div>
                        </div>
                    </div>

                    <!-- PREFERENCES & TECHNIQUES Section -->
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">palette</span>
                            Preferences &amp; Techniques
                        </h3>

                        <!-- Makeup Styles -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Makeup Styles</h4>

                                <div v-if="parsedMakeupStyles.length" class="space-y-2">
                                    <div v-for="(style, i) in parsedMakeupStyles" :key="i"
                                        class="flex items-center gap-2">
                                        <div :class="getIconBg(i)"
                                            class="w-8 h-8 rounded flex items-center justify-center">
                                            <span class="material-symbols-outlined text-sm" :class="getIconColor(i)">
                                                brush
                                            </span>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-600">{{ style }}</p>
                                        </div>
                                    </div>
                                </div>
                                <p v-else class="text-sm text-gray-500">No makeup style(s) added.</p>
                            </div>

                            <!-- Skin Types Expertise -->
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Skin Types Expertise</h4>

                                <div v-if="parsedSkinTypes.length" class="flex flex-col md:flex-row flex-wrap gap-3">
                                    <span v-for="(skinType, i) in parsedSkinTypes" :key="i" :class="getIconBg(i)"
                                        class="text-gray-800 px-3 py-1 rounded-full text-sm">
                                        {{ skinType }}
                                    </span>
                                </div>

                                <p v-else class="text-sm text-gray-500">No skin type(s) added.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PORTFOLIO Section -->
                <div class="space-y-6">
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">photo_library</span> Portfolio Photos
                        </h3>
                        <div class="grid grid-cols-2 gap-3 mb-4">
                            <div
                                class="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow">
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                            <div
                                class="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow">
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                            <div
                                class="aspect-square bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow">
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                            <div
                                class="aspect-square bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow">
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <button @click="isModalOpen = true"
                                class="w-full bg-pink-100 text-pink-800 px-4 py-3 rounded-xl font-medium hover:bg-pink-200 transition-colors">
                                <span class="material-symbols-outlined text-sm mr-2">add_photo_alternate</span>
                                Add Photos
                            </button>
                            <button
                                class="w-full bg-purple-100 text-purple-800 px-4 py-3 rounded-xl font-medium hover:bg-purple-200 transition-colors">
                                <span class="material-symbols-outlined text-sm mr-2">folder_open</span>
                                Manage Gallery
                            </button>
                        </div>
                    </div>

                    <!-- STATISTICS Section -->
                    <div class="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined">trending_up</span> Profile Statistics
                        </h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Profile Views</span>
                                <span class="font-bold text-gray-800">124</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Bookings This Month</span>
                                <span class="font-bold text-gray-800">18</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Portfolio Likes</span>
                                <span class="font-bold text-gray-800">89</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Client Reviews</span>
                                <span class="font-bold text-gray-800">4.9 ⭐</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Add Image Portfolio -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg relative">
            <!-- Modal Title -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold text-pink-500">Upload Portfolio Photo</h2>
                <button @click="isModalOpen = false" class="text-gray-400 hover:text-black text-2xl focus:outline-none">
                    &times;
                </button>
            </div>

            <!-- Upload Area -->
            <div>
                <div class="block border-2 border-dashed border-pink-300 rounded-xl p-6 text-center bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer relative"
                    @click="triggerFileInput">
                    <input type="file" ref="fileInput" accept="image/*" class="hidden" @change="handleFileChange" />

                    <template v-if="previewUrl">
                        <img :src="previewUrl" alt="Preview" class="mx-auto max-h-40 rounded-lg" />
                        <button @click.stop="removeImage" style="color: #ef4444 !important;"
                            class="mt-2 text-sm underline">
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
            <!-- Upload Button -->
            <button :disabled="!selectedFile" @click="uploadPhoto" :class="[
                'mt-6 w-full text-white py-2 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed',
                selectedFile ? 'bg-pink-500' : 'bg-pink-300'
            ]">
                Upload
            </button>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { apiFetch } from '@/config'

const userId = localStorage.getItem('user_id')
const profile = ref(null)
const parsedSkinTypes = ref([])
const parsedMakeupStyles = ref([])
const parsedCertifications = ref([])
const parsedSpecializations = ref([])
const customColors = ['pink', 'purple', 'yellow']

function getBg(index) {
    return `bg-${customColors[index % customColors.length]}-100`
}
function getIconBg(index) {
    return `bg-${customColors[index % customColors.length]}-200`
}
function getIconColor(index) {
    return `text-${customColors[index % customColors.length]}-600`
}

// fetch data Profile
onMounted(async () => {
  try {
    const data = await apiFetch(`/mua/profile/${userId}`, {});
    profile.value = data

    if (data.mua_profile?.certification) {
      try {
        parsedCertifications.value = JSON.parse(data.mua_profile.certification)
      } catch (e) {
        parsedCertifications.value = [data.mua_profile.certification]
      }
    }

    if (data.mua_profile?.makeup_specializations) {
      try {
        parsedSpecializations.value = JSON.parse(data.mua_profile.makeup_specializations)
      } catch (e) {
        parsedSpecializations.value = [data.mua_profile.makeup_specializations]
      }
    }

    if (data.mua_profile?.makeup_styles) {
        try {
            parsedMakeupStyles.value = JSON.parse(data.mua_profile.makeup_styles)
        } catch (e) {
            parsedMakeupStyles.value = [data.mua_profile.makeup_styles]
        }
    }

    if (data.mua_profile?.skin_type) {
        try {
            parsedSkinTypes.value = JSON.parse(data.mua_profile.skin_type)
        } catch (e) {
            parsedSkinTypes.value = [data.mua_profile.skin_type]
        }
    }
  } catch (err) {
    console.error('Error loading profile:', err)
  }
})

// Upload Image Portfolio
const isModalOpen = ref(false)
const previewUrl = ref(null)
const selectedFile = ref(null)
const fileInput = ref(null)

const triggerFileInput = () => {
    fileInput.value?.click()
}

const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
        selectedFile.value = file
        previewUrl.value = URL.createObjectURL(file)
    }
}

const removeImage = () => {
    selectedFile.value = null
    previewUrl.value = null
    fileInput.value.value = ''
}

const uploadPhoto = async () => {
    if (!selectedFile.value) return

    const formData = new FormData()
    formData.append('file', selectedFile.value)

    try {
        await apiFetch(`/mua/portfolio/upload/${userId}`, {
            method: 'POST',
            body: formData
        })

        alert('Upload successful!')
        isModalOpen.value = false
        removeImage()
    } catch (err) {
        alert('Upload failed: ' + err.message)
    }
}
</script>
