<template>
    <div id="webcrumbs">
        <div class="w-full p-8 bg-pink-50 min-h-screen text-[#D56E6E]">
            <div
                class="max-w-md mx-auto md:max-w-xl lg:max-w-4xl bg-white rounded-3xl shadow-lg p-8 border-2 border-[#D56E6E]">
                <div class="text-center mb-8">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-[#D56E6E] to-pink-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span class="material-symbols-outlined text-2xl text-white">palette</span>
                    </div>
                    <h1 class="text-2xl font-bold text-[#D56E6E] mb-2">MUA Registration</h1>
                    <p class="text-pink-800 text-sm">Join our beauty community!</p>
                </div>
                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div class="md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:space-y-0">
                        <div>
                            <label class="block text-[#D56E6E] font-medium mb-2">Brand Name/Makeup Artist
                                Name</label>
                            <input type="text"
                                class="w-full p-3 border-2 border-pink-200 rounded-full focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50"
                                placeholder="Your brand or professional name" v-model="form.name" />
                        </div>
                        <div>
                            <label class="block text-[#D56E6E] font-medium mb-2">Email</label>
                            <input type="text"
                                class="w-full p-3 border-2 border-pink-200 rounded-full focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50"
                                placeholder="Your email" v-model="form.email" />
                        </div>
                        <div>
                            <label class="block text-[#D56E6E] font-medium mb-2">Phone Number</label>
                            <input type="tel"
                                class="w-full p-3 border-2 border-pink-200 rounded-full focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50"
                                placeholder="+62" v-model="form.phone" />
                        </div>
                        <div>
                            <div>
                                <label class="block text-[#D56E6E] font-medium mb-2">Password</label>
                                <div class="relative">
                                    <input :type="showPassword ? 'text' : 'password'"
                                        class="w-full p-3 border-2 border-pink-200 rounded-full focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50 pr-10"
                                        placeholder="Enter your password" required v-model="form.password" />
                                    <span
                                        class="material-symbols-outlined absolute right-3 top-3 text-[#D56E6E] cursor-pointer hover:text-purple-600 transition-colors"
                                        @click="togglePassword">
                                        {{ showPassword ? 'visibility' : 'visibility_off' }}
                                    </span>
                                </div>
                                <p v-if="passwordWarning" class="text-xs text-pink-800 mt-1">
                                    {{ passwordWarning }}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label class="block text-[#D56E6E] font-medium mb-2">Confirm Password</label>
                                <div class="relative">
                                    <input type="password"
                                        class="w-full p-3 border-2 border-pink-200 rounded-full focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50 pr-10"
                                        placeholder="Confirm your password" required
                                        v-model="form.password_confirmation" />
                                </div>
                                <p class="text-xs text-pink-800 mt-1" v-if="passwordMismatch">Both passwords must
                                    match</p>
                            </div>

                        </div>
                        <div>
                            <label class="block text-[#D56E6E] font-medium mb-2">Professional Bio</label>
                            <textarea
                                class="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50 h-32 resize-none"
                                placeholder="Tell us about your skills and experience" v-model="form.bio"></textarea>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                                <label class="block text-sm font-medium">Studio Location</label>
                                <span
                                    class="text-xs text-pink-500 cursor-pointer hover:text-pink-600 transition-colors flex items-center">
                                    <button type="button" @click="getLocation"
                                        class="material-symbols-outlined text-sm mr-1">my_location</button> Use
                                    My Current Location
                                </span>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <input type="text"
                                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                                    placeholder="Latitude" v-model="form.studio_lat" readonly />
                                <input type="text"
                                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                                    placeholder="Longitude" v-model="form.studio_lng" readonly />
                            </div>
                        </div>
                        <div>
                            <label class="block text-[#D56E6E] font-medium mb-2">Service Location</label>
                            <textarea
                                class="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50 h-32 resize-none"
                                placeholder="Your service area" v-model="form.service_area"></textarea>
                        </div>
                        <div>
                            <label class="block text-[#D56E6E] font-medium mb-2">Schedule</label>
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="text-xs text-pink-800 mb-1 block">Available Days</label>
                                    <div class="flex flex-wrap gap-2">
                                        <label
                                            class="inline-flex items-center p-2 rounded-lg hover:bg-pink-100 cursor-pointer transition-colors"
                                            v-for="day in days" :key="day">
                                            <input type="checkbox" :value="day" v-model="form.available_days"
                                                class="w-3 h-3 text-pink-800 rounded mr-1 focus:ring-[#D56E6E]" />
                                            <span class="text-[#D56E6E] text-xs">{{ day }}</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label class="text-xs text-pink-800 mb-1 block">Start Time</label>
                                    <input
                                        class="w-full p-2 border-2 border-pink-200 rounded-lg focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50 mb-2"
                                        type="time" v-model="form.available_start_time" required />
                                    <label class="text-xs text-pink-800 mb-1 block">End Time</label>
                                    <input
                                        class="w-full p-2 border-2 border-pink-200 rounded-lg focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50 mb-2"
                                        type="time" v-model="form.available_end_time" required />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block font-medium mb-2">Profile Photo</label>
                            <!-- Drop Area -->
                            <div class="block border-2 border-dashed border-pink-300 rounded-xl p-6 text-center bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer relative"
                                @click="triggerFileInput">
                                <input type="file" ref="fileInput" accept="image/*" class="hidden"
                                    @change="handleFileChange" />
                                <template v-if="previewUrl">
                                    <img :src="previewUrl" alt="Preview" class="mx-auto max-h-40 rounded-lg" />
                                    <button @click.stop="removeImage" class="mt-2 text-sm underline">
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
                        <div>
                            <label class="block text-[#D56E6E] font-medium mb-2">Certification</label>
                            <div class="space-y-3">
                                <div v-for="(cert, index) in form.certification" :key="index"
                                    class="flex space-x-2 items-center">
                                    <input v-model="form.certification[index]"
                                        :placeholder="'Certification ' + (index + 1)"
                                        class="w-full p-3 border-2 border-pink-200 rounded-full focus:border-[#D56E6E] focus:outline-none transition-colors bg-pink-50"
                                        type="text" />
                                    <button v-if="index > 0" type="button" @click="removeCertification(index)"
                                        class="text-red-500 hover:text-red-700 text-lg">
                                        ✕
                                    </button>
                                </div>

                                <div class="flex items-center">
                                    <button type="button" @click="addCertification"
                                        class="text-pink-800 hover:text-purple-700 text-sm flex items-center transition-colors">
                                        <span class="material-symbols-outlined text-lg mr-1">add_circle</span>
                                        Add another certification
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block text-[#D56E6E] font-medium mb-2">Specialization</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="flex items-center space-x-2 cursor-pointer" v-for="sp in specializations"
                                    :key="sp">
                                    <input type="checkbox" class="w-4 h-4 text-pink-800 rounded focus:ring-[#D56E6E]"
                                        :value="sp" v-model="form.makeup_specializations" />
                                    <span class="text-[#D56E6E] text-sm">{{ sp }}</span> </label>
                            </div>
                        </div>
                        <div>
                            <label class="block text-[#D56E6E] font-medium mb-2">Color/Skin/Technique
                                Preferences</label>
                            <div class="space-y-3">
                                <div>
                                    <label class="text-xs text-pink-800 mb-1 block">Preferred Color Palettes</label>
                                    <div class="flex flex-wrap gap-2">
                                        <label
                                            class="inline-flex items-center p-2 rounded-lg hover:bg-pink-100 cursor-pointer transition-colors"
                                            v-for="style in styles" :key="style">
                                            <input type="checkbox"
                                                class="w-3 h-3 text-pink-800 rounded mr-1 focus:ring-[#D56E6E]"
                                                :value="style" v-model="form.makeup_styles" />
                                            <span class="text-[#D56E6E] text-xs">{{ style }}</span> </label>
                                    </div>
                                </div>
                                <div>
                                    <label class="text-xs text-pink-800 mb-1 block">Skin Types You Specialize
                                        In</label>
                                    <div class="flex flex-wrap gap-2">
                                        <label
                                            class="inline-flex items-center p-2 rounded-lg hover:bg-pink-100 cursor-pointer transition-colors"
                                            v-for="skin in skin" :key="skin">
                                            <input type="checkbox"
                                                class="w-3 h-3 text-pink-800 rounded mr-1 focus:ring-[#D56E6E]"
                                                :value="skin" v-model="form.skin_type" />
                                            <span class="text-[#D56E6E] text-xs">{{ skin }}</span> </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit"
                        class="w-full bg-gradient-to-r from-[#D56E6E] to-pink-400 text-white py-3 px-6 rounded-full font-medium hover:from-[#D56E6E] hover:to-pink-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
                        Create My MUA Account
                    </button>
                </form>
                <div class="mt-6 text-center">
                    <p class="text-pink-800 text-sm">
                        Already have an account?
                        <a href="/login/mua" class="text-[#D56E6E] font-medium hover:text-purple-700 ml-1">Sign in here</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { config, apiFetch } from '@/config'
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    bio: '',
    certification: [''],
    service_area: '',
    studio_lat: '',
    studio_lng: '',
    available_days: [],
    available_start_time: '',
    available_end_time: '',
    makeup_specializations: [],
    makeup_styles: [],
    skin_type: [],
    profile_photo: null
})

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const specializations = ['Bridal', 'Pre-wedding', 'Graduation', 'Party', 'Content Creator', 'Regular']
const styles = ['Neutrals', 'Glam ', 'Soft Glam ', 'Bold', 'Korean']
const skin = ['Dry', 'Oily', 'Combination', 'Sensitive', 'Normal']

const imagePreview = ref(null)

const showPassword = ref(false)
const passwordWarning = ref('')
const passwordMismatch = ref(false)

const fileInput = ref(null)
const previewUrl = ref(null)
const selectedFile = ref(null)

const triggerFileInput = () => {
    fileInput.value.click()
}

const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        form.profile_photo = file
        selectedFile.value = file
        previewUrl.value = URL.createObjectURL(file)
    }
}

const removeImage = () => {
    selectedFile.value = null
    previewUrl.value = null
    fileInput.value.value = null
}

watch(
    () => form.password,
    (newVal) => {
        if (newVal.length > 0 && newVal.length < 6) {
            passwordWarning.value = 'Password must be at least 6 characters'
        } else {
            passwordWarning.value = ''
        }
        passwordMismatch.value = form.password_confirmation !== form.password
    }
)

watch(
    () => form.password_confirmation,
    (newVal) => {
        passwordMismatch.value = newVal !== form.password
    }
)

function togglePassword() {
    showPassword.value = !showPassword.value
}

function handleFileUpload(event) {
    form.profile_photo = event.target.files[0]
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
        imagePreview.value = URL.createObjectURL(file)
    }
}

function addCertification() {
    form.certification.push('')
}

function removeCertification(index) {
    form.certification.splice(index, 1)
}

function getLocation() {
    if (!navigator.geolocation) return alert('Geolocation not supported')
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            form.studio_lat = pos.coords.latitude
            form.studio_lng = pos.coords.longitude
        },
        () => alert('Failed to get location')
    )
}

async function handleSubmit() {
    if (form.password !== form.password_confirmation) {
        passwordMismatch.value = true
        return
    }

    try {
        await apiFetch('/auth/register/mua', {
            method: 'POST',
            body: JSON.stringify(form)
        });
        
        const loginResult = await apiFetch('/auth/login/mua', {
            method: 'POST',
            body: JSON.stringify(form)
        });

        localStorage.setItem('token', loginResult.access_token)
        localStorage.setItem('user', JSON.stringify(loginResult.user))
        localStorage.setItem('user_id', loginResult.user.id)

        const formData = new FormData()
        formData.append('bio', form.bio)
        formData.append('certification', JSON.stringify(form.certification))
        formData.append('service_area', form.service_area)
        formData.append('studio_lat', form.studio_lat)
        formData.append('studio_lng', form.studio_lng)
        formData.append('available_start_time', form.available_start_time + ':00')
        formData.append('available_end_time', form.available_end_time + ':00')
        formData.append('available_days', JSON.stringify(form.available_days))
        formData.append('makeup_specializations', JSON.stringify(form.makeup_specializations))
        formData.append('makeup_styles', JSON.stringify(form.makeup_styles))
        formData.append('skin_type', JSON.stringify(form.skin_type))
        if (form.profile_photo)
            formData.append('profile_photo', form.profile_photo)

        await apiFetch('/mua/profile', {
            method: 'POST',
            body: formData
        });

        alert(`MUA's Account Created!`)
        router.push('/mua/dashboard')
    } catch (err) {
        console.error(err)
        alert('Maaf sedang terjadi masalah, silahkan coba lagi.')
    }
}
</script>
