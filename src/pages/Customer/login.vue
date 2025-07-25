<template
    ><div id="webcrumbs">
        <div
            class="w-full min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center px-4 py-10 text-gray-700"
        >
            <div
                class="w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
            >
                <div class="md:w-1/2 bg-gradient-to-br from-[#D56E6E] to-[#D56E6E]/80 p-8 md:p-12 text-white relative">
                    <div class="absolute top-6 left-6 flex items-center space-x-1">
                        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span class="material-symbols-outlined text-white text-sm">palette</span>
                        </div>
                        <span class="text-xl font-bold">Wezz Beauty</span>
                    </div>
                    <div class="mt-16 md:mt-24">
                        <h2 class="text-3xl md:text-4xl font-bold mb-6">Welcome Back!</h2>
                        <p class="text-pink-100 mb-8">
                            Login to access your personalized makeup artist recommendations and manage your beauty
                            appointments.
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
                    <div class="flex justify-end mb-8">
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
                        <h2 class="text-2xl font-bold text-[#D56E6E] mb-2">Login to Your Account</h2>
                        <p class="text-pink-600">Enter your credentials to access your account</p>
                    </div>
                    <form class="space-y-6" @submit.prevent="handleLogin">
                        <div class="space-y-2">
                            <label class="block text-pink-800 font-medium">Email</label>
                            <div class="relative">
                                <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                                    <span class="material-symbols-outlined text-sm">email</span>
                                </span>
                                <input
                                    type="email"
                                    v-model="email"
                                    class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                    placeholder="Enter your email"
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
                                    type="password"
                                    v-model="password"
                                    class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                    placeholder="Enter your password"
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
                            <a href="/register/cus" class="text-[#D56E6E] font-medium hover:underline ml-1">Register here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/auth/login/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const data = await res.json()

    if (res.ok) {
      localStorage.setItem('token', data.access_token)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('user_id', data.user.id)
      alert('Login berhasil!')
      router.push('/home')
    } else {
      alert(data.error || 'Email atau password salah.')
    }
  } catch (error) {
    alert('Gagal login. Silakan cek koneksi Anda.')
    console.error(error)
  }
}
</script>
