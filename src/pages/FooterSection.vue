<template>
  <footer id="footer" class="bg-[#D56E6E] text-white py-12">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div class="flex items-center space-x-2 mb-6">
                                <div
                                    class="w-8 h-8 bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 rounded-full flex items-center justify-center"
                                >
                                    <span class="material-symbols-outlined text-white text-sm">palette</span>
                                </div>
                                <span class="text-xl font-bold">Wezz Beauty</span>
                            </div>
                            <p class="text-pink-200 leading-relaxed">
                                Connecting you with professional makeup artists for all your beauty needs.
                            </p>
                        </div>
                        <div>
                            <h3 class="font-bold text-xl mb-4">For Clients</h3>
                            <ul class="space-y-2">
                                <li>
                                    <button @click="redirectLoginCustomer" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >Find a MUA</button
                                    >
                                </li>
                                <li>
                                    <button @click="redirectLoginCustomer" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >Create Skin Profile</button
                                    >
                                </li>
                                <li>
                                    <button @click="redirectLoginCustomer" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >Book Appointment</button
                                    >
                                </li>
                                <li>
                                    <button @click="redirectLoginCustomer" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >Write a Review</button
                                    >
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-xl mb-4">For Makeup Artists</h3>
                            <ul class="space-y-2">
                                <li>
                                    <button @click="redirectLoginMua" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >Join as MUA</button
                                    >
                                </li>
                                <li>
                                    <button @click="redirectLoginMua" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >Manage Bookings</button
                                    >
                                </li>
                                <li>
                                    <button @click="redirectLoginMua" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >Update Portfolio</button
                                    >
                                </li>
                                <li>
                                    <button @click="redirectLoginMua" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >View Client Profiles</button
                                    >
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-xl mb-4">Connect With Us</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center gap-2">
                                    <span class="material-symbols-outlined text-[#D56E6E]/80">call</span>
                                    <a href="https://wa.me/6285860458285" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >+62 858-6045-8285</a
                                    >
                                    <a href="https://wa.me/6285173270089" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >+62 851-7327-0089</a
                                    >
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="material-symbols-outlined text-[#D56E6E]/80">mail</span>
                                    <a href="#" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >support@WezzBeauty.com</a
                                    >
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="material-symbols-outlined text-[#D56E6E]/80">help</span>
                                    <a href="#" class="text-[#FFFFFF]/80 hover:text-white transition-colors"
                                        >Help Center</a
                                    >
                                </li>
                            </ul>
                            <div class="flex gap-4 mt-4">
                                <a
                                    href="#"
                                    class="w-8 h-8 bg-[#FFFFFF]/80 rounded-full flex items-center justify-center hover:bg-[#D56E6E]/60 transition-colors"
                                >
                                    <i class="fa-brands fa-facebook text-white"></i>
                                </a>
                                <a
                                    href="#"
                                    class="w-8 h-8 bg-[#FFFFFF]/80 rounded-full flex items-center justify-center hover:bg-[#D56E6E]/60 transition-colors"
                                >
                                    <i class="fa-brands fa-instagram text-white"></i>
                                </a>
                                <a
                                    href="#"
                                    class="w-8 h-8 bg-[#FFFFFF]/80 rounded-full flex items-center justify-center hover:bg-[#D56E6E]/60 transition-colors"
                                >
                                    <i class="fa-brands fa-tiktok text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-[#FFFFFF]/50 mt-8 pt-8 text-center text-[#FFFFFF]/80">
                        <p>© 2024 Wezz Beauty. All rights reserved.</p>
                    </div>
                </div>
            </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function redirectLoginMua() {
  router.push('/login/mua')
}

function redirectLoginCustomer() {
  router.push('/login/cus')
}
</script>