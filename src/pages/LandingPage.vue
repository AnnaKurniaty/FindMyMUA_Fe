<template
    ><div id="webcrumbs">
        <div class="w-full min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100">
            <header class="w-full px-6 py-4 bg-pink-100/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <nav class="max-w-7xl mx-auto flex items-center justify-between">
                    <div class="flex items-center space-x-1">
                        <img src="@/assets/logo.jpg" alt="Wezz Beauty Logo" class="w-10 h-10 rounded-full">
                        <span
                            class="text-2xl font-bold bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 bg-clip-text text-transparent"
                            >Wezz Beauty</span
                        >
                    </div>
                    <div class="hidden md:flex items-center space-x-6">
                        <a
                            href="#"
                            @click.prevent="scrollToSection('hero')"
                            class="text-[#D56E6E] hover:text-[#D56E6E]/80 transition-colors duration-300 font-medium"
                            >Home</a
                        >
                        <a
                            href="#"
                            @click.prevent="scrollToSection('features')"
                            class="text-[#D56E6E] hover:text-[#D56E6E]/80 transition-colors duration-300 font-medium"
                            >Find MUA</a
                        >
                        <a 
                            href="#" 
                            @click.prevent="scrollToSection('footer')"
                            class="text-[#D56E6E] hover:text-[#D56E6E]/80 transition-colors duration-300 font-medium"
                            >About</a
                        >
                        <a  
                            href="/register/mua"   
                            class="text-[#D56E6E] hover:text-[#D56E6E]/80 transition-colors duration-300 font-medium"
                            >Join as MUA</a
                        >
                        <a
                            href="/register/cus"
                            class="bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Sign Up
                        </a>
                    </div>
                </nav>
            </header>
            <main class="w-full">
                <HeroSection @scrollTo="scrollToSection" />
                <FeaturesSection @scrollTo="scrollToSection" />
                <ContactSection />
                <FooterSection />
            </main>
            
        </div>
    </div>
</template>

<script>
import HeroSection from '@/pages/HeroSection.vue'
import FeaturesSection from '@/pages/FeaturesSection.vue'
import ContactSection from '@/pages/ContactSection.vue'
import FooterSection from '@/pages/FooterSection.vue'

export default {
  name: 'LandingPage',
  components: {
    HeroSection,
    FeaturesSection,
    ContactSection,
    FooterSection
  },
  methods: {
    scrollToSection(id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
