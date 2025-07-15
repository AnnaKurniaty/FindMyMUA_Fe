<template
    ><div id="webcrumbs">
        <div class="w-full min-h-screen">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span class="material-symbols-outlined">person</span> Profile Information
                            </h2>
                            <button
                                class="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium hover:bg-primary-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-2">edit</span> Edit Profile
                            </button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <div class="flex items-center gap-4">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex items-center justify-center"
                                    >
                                        <span class="text-2xl">👤</span>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-gray-800">{{ profile?.name || 'Loading...' }}</h3>
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
                                        <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm"
                                            >
                                            {{ profile?.mua_profile?.service_area || 'Not specified' }}
                                            </span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">workspace_premium</span> Certifications &amp;
                            Specializations
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Certifications</h4>

                                <div v-if="parsedCertifications.length" class="space-y-3">
                                    <div
                                    v-for="(cert, i) in parsedCertifications"
                                    :key="i"
                                    class="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-shadow"
                                    :class="getCertBg(i)"
                                    >
                                    <div
                                        :class="getCertIconBg(i)"
                                        class="w-8 h-8 rounded-full flex items-center justify-center"
                                    >
                                        <span
                                        class="material-symbols-outlined text-sm"
                                        :class="getCertIconColor(i)"
                                        >
                                        verified
                                        </span>
                                    </div>
                                    <div>
                                        <p class="font-medium text-gray-800">{{ cert }}</p>
                                    </div>
                                    </div>
                                </div>

                                <p v-else class="text-sm text-gray-500">No certifications added.</p>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Specializations</h4>

                                <div v-if="parsedSpecializations.length" class="space-y-3">
                                    <div
                                    v-for="(item, i) in parsedSpecializations"
                                    :key="i"
                                    class="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-shadow"
                                    :class="getCertBg(i)"
                                    >
                                    <div
                                        :class="getCertIconBg(i)"
                                        class="w-8 h-8 rounded-full flex items-center justify-center"
                                    >
                                        <span
                                        class="material-symbols-outlined text-sm"
                                        :class="getCertIconColor(i)"
                                        >
                                        palette
                                        </span>
                                    </div>
                                    <div>
                                        <p class="font-medium text-gray-800">{{ item }}</p>
                                    </div>
                                    </div>
                                </div>

                                <p v-else class="text-sm text-gray-500">No specializations added.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">palette</span> Preferences &amp; Techniques
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Color Preferences</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center gap-2">
                                        <div class="w-4 h-4 bg-pink-300 rounded-full"></div>
                                        <span class="text-sm text-gray-600">Warm Tones</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-4 h-4 bg-purple-300 rounded-full"></div>
                                        <span class="text-sm text-gray-600">Cool Tones</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-4 h-4 bg-yellow-300 rounded-full"></div>
                                        <span class="text-sm text-gray-600">Neutral Tones</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Skin Tone Expertise</h4>
                                <div class="space-y-2">
                                    <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Fair</span>
                                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                                        >Medium</span
                                    >
                                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                                        >Deep</span
                                    >
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Techniques</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-pink-600 text-sm">brush</span>
                                        <span class="text-sm text-gray-600">Traditional</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-purple-600 text-sm">landscape</span>
                                        <span class="text-sm text-gray-600">Airbrush</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-yellow-600 text-sm"
                                            >auto_awesome</span
                                        >
                                        <span class="text-sm text-gray-600">Highlighting</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-6">
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">photo_library</span> Portfolio Photos
                        </h3>
                        <div class="grid grid-cols-2 gap-3 mb-4">
                            <div
                                class="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow"
                            >
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                            <div
                                class="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow"
                            >
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                            <div
                                class="aspect-square bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow"
                            >
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                            <div
                                class="aspect-square bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow"
                            >
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <button
                                class="w-full bg-pink-100 text-pink-800 px-4 py-3 rounded-xl font-medium hover:bg-pink-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-2">add_photo_alternate</span> Add
                                Photos
                            </button>
                            <button
                                class="w-full bg-purple-100 text-purple-800 px-4 py-3 rounded-xl font-medium hover:bg-purple-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-2">folder_open</span> Manage Gallery
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
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
</template>


<script setup>
import { ref, onMounted } from 'vue'

const profile = ref(null)
const parsedCertifications = ref([])
const parsedSpecializations = ref([])
const certColors = ['pink', 'purple', 'yellow']

function getCertBg(index) {
  return `bg-${certColors[index % certColors.length]}-50`
}
function getCertIconBg(index) {
  return `bg-${certColors[index % certColors.length]}-200`
}
function getCertIconColor(index) {
  return `text-${certColors[index % certColors.length]}-600`
}


onMounted(async () => {
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('user_id')

  try {
    const res = await fetch(`http://localhost:8000/api/mua/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) {
      throw new Error('Failed to fetch profile data')
    }

    const data = await res.json()
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
  } catch (err) {
    console.error('Error loading profile:', err)
  }
})
</script>
