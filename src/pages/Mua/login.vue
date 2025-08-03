<template>
  <div id="webcrumbs">
    <div class="w-full min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center px-4 py-10">
      <div class="w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div class="md:w-1/2 bg-gradient-to-br from-[#D56E6E] to-[#D56E6E]/80 p-8 md:p-12 text-white relative">
          <div class="absolute top-6 left-6 flex items-center space-x-1">
            <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-sm">palette</span>
            </div>
            <span class="text-xl font-bold">FindMyMUA</span>
          </div>
          <div class="mt-16 md:mt-24">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Welcome Back!</h2>
            <p class="text-pink-100 mb-8">
              Login to access your personalized makeup artist recommendations and manage your beauty appointments.
            </p>
            <div class="space-y-6 mt-12">
              <div class="flex items-center space-x-4 text-pink-100">
                <span class="material-symbols-outlined">check_circle</span>
                <p>Find the perfect makeup artist for your style</p>
              </div>
              <div class="flex items-center space-x-4 text-pink-100">
                <span class="material-symbols-outlined">check_circle</span>
                <p>Book appointments with top-rated professionals</p>
              </div>
              <div class="flex items-center space-x-4 text-pink-100">
                <span class="material-symbols-outlined">check_circle</span>
                <p>Save your favorite looks and artists</p>
              </div>
            </div>
          </div>
        </div>

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
              <RouterLink
                to="/login/mua"
                class="bg-white text-[#D56E6E] border border-pink-200 px-4 py-2 rounded-full font-medium hover:bg-pink-50 transition-colors"
              >
                Login
              </RouterLink>
              <RouterLink
                to="/register/mua"
                class="bg-pink-100 text-[#D56E6E] px-4 py-2 rounded-full font-medium hover:bg-pink-200 transition-colors"
              >
                Register
              </RouterLink>
            </div>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold text-[#D56E6E] mb-2">Login to Your Account</h2>
            <p class="text-pink-600">Enter your credentials to access your account</p>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-6">
            <div class="space-y-2">
              <label class="block text-pink-800 font-medium">Email</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                  <span class="material-symbols-outlined text-sm">email</span>
                </span>
                <input
                  v-model="email"
                  type="email"
                  class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors text-[#D56E6E]"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex justify-between">
                <label class="block text-pink-800 font-medium">Password</label>
                <!-- <a href="#" class="text-[#D56E6E] text-sm hover:underline">Forgot password?</a> -->
              </div>
              <div class="relative">
                <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                  <span class="material-symbols-outlined text-sm">lock</span>
                </span>
                <input
                  v-model="password"
                  type="password"
                  class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors text-[#D56E6E]"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 text-white py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              Sign In
            </button>

            <p class="text-center text-pink-600">
              Don&#x27;t have an account?
              <RouterLink to="/register/mua" class="text-[#D56E6E] font-medium hover:underline ml-1">Register here</RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300">
      <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-[360px] text-center animate-fadeIn">
        <div class="mb-4">
          <svg class="mx-auto h-12 w-12 text-pink-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-pink-500 mb-2">Welcome, {{ loggedInUsername }}!</h2>
        <p class="text-sm text-gray-700 mb-6"> You’re now logged in as a Makeup Artist.<br/>May your day be as beautiful as your makeup ✨</p>
        <button @click="closeModal"
                class="w-full bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 text-white py-2 px-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-md">
          ok
        </button>
      </div>
    </div>
      
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { config, apiFetch } from '@/config'

const email = ref('')
const password = ref('')
const router = useRouter()
const showSuccessModal = ref(false)
const loggedInUsername = ref('MUA')

const handleLogin = async () => {
  try {
    const response = await apiFetch('/auth/login/mua', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    });

    localStorage.setItem('token', response.access_token)
    localStorage.setItem('user', JSON.stringify(response.user))
    localStorage.setItem('user_id', response.user.id)
    localStorage.setItem('role', 'mua')
    
    showSuccessModal.value = true
    loggedInUsername.value = response.user.name
    setTimeout(() => {
      showSuccessModal.value = false
      router.push('/mua/dashboard')
    }, 2000)
  } catch (error) {
    alert('Gagal login. Silakan cek koneksi Anda.')
    console.error(error)
  }
}

const closeModal = () => {
  showSuccessModal.value = false
  router.push('/mua/dashboard')
}
</script>
