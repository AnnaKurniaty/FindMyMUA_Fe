<template>
    <div id="webcrumbs">
        <div
            class="w-full min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center px-4 py-10 text-gray-700"
        >
            <div
                class="w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
            >
                <div class="md:w-1/2 p-8 md:p-12">
                    <div class="flex justify-between items-center mb-8">
                        <a
                            href="/guest"
                            class="bg-white text-[#D56E6E] border border-pink-200 px-4 py-2 rounded-full font-medium hover:bg-pink-50 transition-colors flex items-center"
                        >
                            <span class="material-symbols-outlined text-sm mr-1">arrow_back</span>
                            Back
                        </a>
                        <div class="flex space-x-2">
                            <a
                                href="/login/cus"
                                class="bg-white text-[#D56E6E] border border-pink-200 px-4 py-2 rounded-full font-medium hover:bg-pink-50 transition-colors"
                            >
                                Login
                            </a>
                            <a
                                href="/register/cus"
                                class="bg-pink-100 text-[#D56E6E] px-4 py-2 rounded-full font-medium hover:bg-pink-200 transition-colors"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-[#D56E6E] mb-2">Create Your Account</h2>
                        <p class="text-pink-600">Join our community and find your perfect makeup artist</p>
                    </div>
                    <form  @submit.prevent="handleSubmit" class="space-y-4">
                        <div id="customer-fields">
                            <div class="space-y-2">
                                <label class="block text-pink-800 font-medium">Name</label>
                                <input
                                    type="text"
                                    class="w-full px-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                    placeholder="First name"
                                    v-model="form.name"
                                />
                            </div>
                            <div class="space-y-2">
                                <label class="block text-pink-800 font-medium">Email</label>
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                                        <span class="material-symbols-outlined text-sm">email</span>
                                    </span>
                                    <input
                                        type="email"
                                        class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                        placeholder="Enter your email"
                                        v-model="form.email"
                                    />
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="block text-pink-800 font-medium">Password</label>
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                                        <span class="material-symbols-outlined text-sm">lock</span>
                                    </span>
                                    <input
                                        type="password"
                                        class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                        placeholder="Create a password"
                                        v-model="form.password"
                                    />
                                </div>
                                <p class="text-xs text-pink-600">Password must be at least 8 characters long</p>
                            </div>
                            <div class="space-y-2">
                                <label class="block text-pink-800 font-medium">Password</label>
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                                        <span class="material-symbols-outlined text-sm">lock</span>
                                    </span>
                                    <input
                                        type="password"
                                        class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                        placeholder="Create a password"
                                        v-model="form.password_confirmation"
                                    />
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="block text-pink-800 font-medium">Phone Number</label>
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                                        <span class="material-symbols-outlined text-sm">phone</span>
                                    </span>
                                    <input
                                        type="tel"
                                        class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                        placeholder="Enter your phone number"
                                        v-model="form.phone"
                                    />
                                </div>
                            </div>
                            <div class="space-y-2 mt-4">
                                <label class="block text-pink-800 font-medium">Address</label>
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                                        <span class="material-symbols-outlined text-sm">location_on</span>
                                    </span>
                                    <textarea
                                        class="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors resize-none"
                                        rows="2"
                                        v-model="form.address"
                                        placeholder="Enter your complete address"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="block text-pink-800 font-medium">Profile Photo</label>
                                <div class="flex items-center space-x-4">
                                    <div
                                        class="w-20 h-20 bg-pink-100 rounded-full border-2 border-pink-200 flex items-center justify-center overflow-hidden"
                                    >
                                        <span class="material-symbols-outlined text-pink-400 text-2xl">person</span>
                                    </div>
                                    <div class="flex-1">
                                        <input type="file" accept="image/*" class="hidden" @change="handleFileChange" id="profile-photo" />
                                        <label
                                            for="profile-photo"
                                            class="bg-pink-100 text-[#D56E6E] px-4 py-2 rounded-full font-medium hover:bg-pink-200 transition-colors cursor-pointer inline-block"
                                        >
                                            <span class="material-symbols-outlined text-sm mr-2">add_a_photo</span>
                                            Upload Photo
                                        </label>
                                        <p class="text-xs text-pink-600 mt-1">JPG, PNG or GIF (max 5MB)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 border-t-2 border-pink-100 pt-4">
                                <h3 class="text-xl font-bold text-[#D56E6E] mb-4">Skin Information</h3>
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <label class="block text-pink-800 font-medium">Skin Type</label>
                                        <div class="flex flex-wrap gap-2">
                                            <button
                                                v-for="option  in skin"
                                                :key="option "
                                                type="button"
                                                @click="toggleSelection(form.skin_type, option)"
                                                :class="[
                                                'px-4 py-2 rounded-full transition-all',
                                                form.skin_type.includes(option)
                                                    ? 'bg-[#D56E6E] text-white'
                                                    : 'bg-[#D56E6E]/20 text-[#D56E6E] hover:bg-[#D56E6E]/30'
                                                ]"

                                            >
                                                {{ option  }}
                                            </button>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-pink-800 font-medium">Skin Tone</label>
                                        <div class="flex flex-wrap gap-2">
                                            <div
                                                @click="form.skin_tone = 'Fair'"
                                                :class="[
                                                    'w-8 h-8 rounded-full bg-amber-200 border-2 border-pink-200 cursor-pointer hover:scale-110 transition-transform',
                                                    form.skin_tone === 'Fair' ? 'ring-2 ring-pink-500 ring-offset-2' : ''
                                                ]"
                                            ></div>
                                            <div
                                                @click="form.skin_tone = 'Light'"
                                                :class="[
                                                    'w-8 h-8 rounded-full bg-amber-300 border-2 border-pink-200 cursor-pointer hover:scale-110 transition-transform',
                                                    form.skin_tone === 'Light' ? 'ring-2 ring-pink-500 ring-offset-2' : ''
                                                ]"
                                            ></div>
                                            <div
                                                @click="form.skin_tone = 'Medium'"
                                                :class="[
                                                    'w-8 h-8 rounded-full bg-amber-400 border-2 border-pink-200 cursor-pointer hover:scale-110 transition-transform',
                                                    form.skin_tone === 'Medium' ? 'ring-2 ring-pink-500 ring-offset-2' : ''
                                                ]"
                                            ></div>
                                            <div
                                                @click="form.skin_tone = 'Olive'"
                                                :class="[
                                                    'w-8 h-8 rounded-full bg-amber-600 border-2 border-pink-200 cursor-pointer hover:scale-110 transition-transform',
                                                    form.skin_tone === 'Olive' ? 'ring-2 ring-pink-500 ring-offset-2' : ''
                                                ]"
                                            ></div>
                                            <div
                                                @click="form.skin_tone = 'Brown'"
                                                :class="[
                                                    'w-8 h-8 rounded-full bg-amber-800 border-2 border-pink-200 cursor-pointer hover:scale-110 transition-transform',
                                                    form.skin_tone === 'Brown' ? 'ring-2 ring-pink-500 ring-offset-2' : ''
                                                ]"
                                            ></div>
                                            <div
                                                @click="form.skin_tone = 'Black'"
                                                :class="[
                                                    'w-8 h-8 rounded-full bg-amber-950 border-2 border-pink-200 cursor-pointer hover:scale-110 transition-transform',
                                                    form.skin_tone === 'Black' ? 'ring-2 ring-pink-500 ring-offset-2' : ''
                                                ]"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-pink-800 font-medium">Skincare History</label>
                                        <textarea
                                            class="w-full px-4 py-3 rounded-lg border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors resize-none"
                                            rows="3"
                                            placeholder="Tell us about your skincare routine, products you use, or any treatments you&#x27;ve had..."
                                            v-model="form.skincare_history"
                                        ></textarea>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-pink-800 font-medium">Allergies</label>
                                        <div class="space-y-2">
                                            <textarea
                                                class="w-full px-4 py-3 rounded-lg border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors resize-none"
                                                rows="3"
                                                v-model="form.allergies"
                                                placeholder="List any allergies to makeup products, ingredients, or materials..."
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-pink-800 font-medium">Makeup Style Preference</label>
                                        <div class="flex flex-wrap gap-2">
                                            <button
                                                v-for="option  in styles"
                                                :key="option "
                                                type="button"
                                                @click="toggleSelection(form.makeup_preferences, option)"
                                                :class="[
                                                'px-4 py-2 rounded-full transition-all',
                                                form.makeup_preferences.includes(option)
                                                    ? 'bg-[#D56E6E] text-white'
                                                    : 'bg-[#D56E6E]/20 text-[#D56E6E] hover:bg-[#D56E6E]/30'
                                                ]"
                                            >
                                                {{ option  }}
                                            </button>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-pink-800 font-medium">Any Skin Concerns</label>
                                        <div class="mt-2">
                                            <input
                                                type="text"
                                                placeholder="Enter skin concerns..."
                                                v-model="form.skin_issues"
                                                class="w-full px-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="w-full bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 text-white py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                        >
                            Create Account
                        </button>
                        <p class="text-center text-pink-600">
                            Already have an account?
                            <a href="/login/cus" class="text-[#D56E6E] font-medium hover:underline ml-1">Login here</a>
                        </p>
                    </form>
                </div>
                <div class="md:w-1/2 bg-gradient-to-br from-[#D56E6E] to-[#D56E6E]/80 p-8 md:p-12 text-white relative">
                    <div class="absolute top-6 left-6 flex items-center space-x-1">
                        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span class="material-symbols-outlined text-white text-sm">palette</span>
                        </div>
                        <span class="text-xl font-bold">Wezz Beauty</span>
                    </div>
                    <div class="mt-16 md:mt-24 relative">
                        <div class="absolute -left-10 -top-10 w-24 h-24 bg-pink-300/30 rounded-full"></div>
                        <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-pink-300/20 rounded-full"></div>
                        <h2 class="text-3xl md:text-4xl font-bold mb-6 relative">Join Our Beauty Community</h2>
                        <p class="text-pink-100 mb-8 relative">
                            Create your account to discover talented makeup artists or showcase your skills to potential
                            clients.
                        </p>
                        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative mb-8">
                            <div class="flex items-start space-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60"
                                    alt="User testimonial"
                                    class="w-12 h-12 rounded-full border-2 border-pink-300"
                                    keywords="woman, testimonial, profile, beauty"
                                />
                                <div>
                                    <div class="flex text-yellow-300 mb-1">
                                        <span class="material-symbols-outlined text-sm">star</span>
                                        <span class="material-symbols-outlined text-sm">star</span>
                                        <span class="material-symbols-outlined text-sm">star</span>
                                        <span class="material-symbols-outlined text-sm">star</span>
                                        <span class="material-symbols-outlined text-sm">star</span>
                                    </div>
                                    <p class="text-white/90 italic text-sm">
                                        &quot;Wezz Beauty helped me find the perfect makeup artist for my wedding day.
                                        The process was so easy and the results were amazing!&quot;
                                    </p>
                                    <p class="text-pink-200 text-sm mt-2">- Emily S., Bride</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-4 relative">
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span class="material-symbols-outlined text-white text-sm">diversity_3</span>
                                </div>
                                <p class="text-pink-100">Connect with 500+ makeup artists</p>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span class="material-symbols-outlined text-white text-sm">calendar_month</span>
                                </div>
                                <p class="text-pink-100">Easy booking and scheduling</p>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span class="material-symbols-outlined text-white text-sm">verified</span>
                                </div>
                                <p class="text-pink-100">Verified professionals only</p>
                            </div>
                        </div>
                    </div>
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

const specializations = ['Bridal', 'Pre-wedding', 'Graduation', 'Party', 'Content Creator', 'Regular']
const styles = ['Natural', 'Glam ', 'Soft Glam ', 'Bold', 'Korean']
const skin = ['Dry', 'Oily', 'Combination', 'Sensitive', 'Normal']

const form = reactive({
  name: '',
  email: '',
  phone: '',
  password: '',
  password_confirmation: '',
  address: '',
  profile_photo: null,
  skin_type: [],
  skin_tone: '',
  skincare_history: '',
  allergies: '',
  makeup_preferences: [],
  skin_issues: ''
})

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

function toggleSelection(array, value) {
    const index = array.indexOf(value)
    if (index > -1) {
        array.splice(index, 1)
    } else {
        array.push(value)
    }
}


async function handleSubmit() {
    if (form.password !== form.password_confirmation) {
        passwordMismatch.value = true
        return
    }

    try {
        // Create a single FormData object for the entire registration
        const formData = new FormData()
        
        // Add user registration data
        formData.append('name', form.name)
        formData.append('email', form.email)
        formData.append('phone', form.phone)
        formData.append('password', form.password)
        formData.append('password_confirmation', form.password_confirmation)
        
        // Add profile data
        formData.append('address', form.address || '')
        formData.append('skin_tone', form.skin_tone || '')
        formData.append('skin_type', JSON.stringify(form.skin_type.filter(item => item)) || '[]')
        formData.append('skincare_history', form.skincare_history || '')
        formData.append('allergies', form.allergies || '')
        formData.append('makeup_preferences', JSON.stringify(form.makeup_preferences.filter(item => item)) || '[]')
        formData.append('skin_issues', form.skin_issues || '')
        
        if (form.profile_photo) {
            formData.append('profile_photo', form.profile_photo)
        }

        // Single API call to register customer with profile
        const registerResult = await apiFetch('/auth/register/customer', {
            method: 'POST',
            body: formData
        });

        // Login the user
        const loginResult = await apiFetch('/auth/login/customer', {
            method: 'POST',
            body: JSON.stringify({
                email: form.email,
                password: form.password
            })
        });

        localStorage.setItem('token', loginResult.access_token)
        localStorage.setItem('user', JSON.stringify(loginResult.user))
        localStorage.setItem('user_id', loginResult.user.id)
        localStorage.setItem('role', 'customer')

        alert(`Customer's Account Created!`)
        router.push('/home')
    } catch (err) {
        console.error(err)
        alert('Maaf sedang terjadi masalah, silahkan coba lagi.')
    }
}
</script>
