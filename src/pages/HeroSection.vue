<template>
  <div class="w-full min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100">
     <section id="hero" class="max-w-7xl mx-auto px-6 py-32 text-center">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-6xl md:text-8xl font-bold leading-tight mb-8 text-gray-800">
                Find Your Perfect
                <span
                    class="block bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent"
                >
                    Makeup Artist
                </span>
            </h1>
            <p class="text-2xl text-[#D56E6E] mb-12 leading-relaxed">
                &quot; Because Every Moment Deserves to Shine &quot;
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button @click="redirectLoginCustomer"
                    class="bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                    Find MUA Now
                </button>
                <button @click="redirectRegisterCustomer"
                    class="border-2 border-[#D56E6E] text-[#D56E6E] px-10 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transform hover:-translate-y-1 transition-all duration-300"
                >
                    Join as Customer
                </button>
            </div>
        </div>
    </section>                                  
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function redirectRegisterCustomer() {
  router.push('/register/cus')
}

function redirectLoginCustomer() {
  router.push('/login/cus')
}
</script>