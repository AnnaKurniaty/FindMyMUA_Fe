<template>
                <section id="features" class="py-20 bg-gradient-to-r from-pink-100 to-[#D56E6E]/10">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="text-center mb-16">
                            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-pink-800">Featured Makeup Artists</h2>
                            <p class="text-xl text-pink-700">Top-rated professionals in your area</p>
                        </div>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div
                                class="bg-white/90 rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#D56E6E]/20"
                            >
                                <img
                                    src="@/assets/nanathnadia.jpg"
                                    alt="Professional makeup artist Nanathnadia"
                                    class="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-[#D56E6E]/20"
                                />
                                <h3 class="text-xl font-bold text-center mb-2 text-[#D56E6E]">Nanathnadia</h3>
                                <p class="text-pink-600 text-center mb-4">Wedding &amp; Event Specialist</p>
                                <p class="text-center text-2xl font-bold text-pink-600 mb-4">Rp 400.000/session</p>
                            </div>
                            <div
                                class="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#D56E6E]/20"
                            >
                                <img
                                    src="@/assets/maisahasna.jpg"
                                    alt="Professional makeup artist Maisa Hasna"
                                    class="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-[#D56E6E]/20"
                                />
                                <h3 class="text-xl font-bold text-center mb-2 text-[#D56E6E]">Maisa Hasna</h3>
                                <p class="text-[#D56E6E] text-center mb-4">Skin Specialist &amp; Bridal MUA</p>
                                <p class="text-center text-2xl font-bold text-[#D56E6E] mb-4">Rp 500.000/session</p>
                            </div>
                            <div
                                class="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#D56E6E]/20"
                            >
                                 <img
                                    src="@/assets/desone.jpg"
                                    alt="Professional makeup artist Desone Salon"
                                    class="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-[#D56E6E]/20"
                                />
                                <h3 class="text-xl font-bold text-center mb-2 text-[#D56E6E]">Desone Salon</h3>
                                <p class="text-[#D56E6E] text-center mb-4">Celebrity &amp; Editorial Expert</p>
                                <p class="text-center text-2xl font-bold text-[#D56E6E] mb-4">Rp 200.000/session</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-20 bg-gradient-to-r from-pink-100 to-[#D56E6E]/10">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="text-center mb-16">
                            <h2 class="text-2xl md:text-3xl font-bold mb-3 text-pink-600">Skin Profile Matching</h2>
                            <p class="text-lg text-pink-600">Find MUAs that match your unique skin profile</p>
                        </div>
                        <div
                            class="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-pink-200 max-w-4xl mx-auto"
                        >
                            <div class="grid md:grid-cols-2 gap-10 items-center">
                                <div class="space-y-6">
                                    <div class="text-center md:text-left">
                                        <h3 class="text-xl font-bold text-pink-600 mb-3">Your Personal Skin Profile</h3>
                                        <p class="text-pink-700 mb-6">
                                            Tell us about your skin type and preferences for the best makeup artist
                                            match!
                                        </p>
                                    </div>
                                    <div class="space-y-4">
                                        <div class="space-y-2">
                                            <label class="block text-pink-800 font-medium">Skin Type</label>
                                            <div class="flex flex-wrap gap-2">
                                                <button
                                                    class="px-4 py-2 rounded-full bg-[#D56E6E]/20 text-[#D56E6E] hover:bg-[#D56E6E]/30 transition-all"
                                                >
                                                    Dry
                                                </button>
                                                <button
                                                    class="px-4 py-2 rounded-full bg-[#D56E6E] text-white hover:bg-[#D56E6E]/80 transition-all"
                                                >
                                                    Oily
                                                </button>
                                                <button
                                                    class="px-4 py-2 rounded-full bg-[#D56E6E]/20 text-[#D56E6E] hover:bg-[#D56E6E]/30 transition-all"
                                                >
                                                    Combination
                                                </button>
                                                <button
                                                    class="px-4 py-2 rounded-full bg-pink-200 text-pink-800 hover:bg-pink-300 transition-all"
                                                >
                                                    Sensitive
                                                </button>
                                            </div>
                                        </div>
                                        <div class="space-y-2">
                                            <label class="block text-pink-800 font-medium">Skin Tone</label>
                                            <div class="flex flex-wrap gap-2">
                                                <div
                                                    class="w-8 h-8 rounded-full bg-amber-200 border-2 border-pink-400 cursor-pointer hover:scale-110 transition-transform"
                                                ></div>
                                                <div
                                                    class="w-8 h-8 rounded-full bg-amber-300 border-2 border-pink-200 cursor-pointer hover:scale-110 transition-transform"
                                                ></div>
                                                <div
                                                    class="w-8 h-8 rounded-full bg-amber-400 border-2 border-pink-200 cursor-pointer hover:scale-110 transition-transform"
                                                ></div>
                                                <div
                                                    class="w-8 h-8 rounded-full bg-amber-600 border-2 border-[#D56E6E]/20 cursor-pointer hover:scale-110 transition-transform"
                                                ></div>
                                                <div
                                                    class="w-8 h-8 rounded-full bg-amber-800 border-2 border-[#D56E6E]/20 cursor-pointer hover:scale-110 transition-transform"
                                                ></div>
                                                <div
                                                    class="w-8 h-8 rounded-full bg-amber-950 border-2 border-pink-200 cursor-pointer hover:scale-110 transition-transform"
                                                ></div>
                                            </div>
                                        </div>
                                        <div class="space-y-2">
                                            <label class="block text-pink-800 font-medium"
                                                >Makeup Style Preference</label
                                            >
                                            <div class="flex flex-wrap gap-2">
                                                <button
                                                    class="px-4 py-2 rounded-full bg-[#D56E6E]/20 text-[#D56E6E] hover:bg-[#D56E6E]/30 transition-all"
                                                >
                                                    Natural
                                                </button>
                                                <button
                                                    class="px-4 py-2 rounded-full bg-[#D56E6E] text-white hover:bg-[#D56E6E]/80 transition-all"
                                                >
                                                    Glam
                                                </button>
                                                <button
                                                    class="px-4 py-2 rounded-full bg-pink-200 text-pink-800 hover:bg-pink-300 transition-all"
                                                >
                                                    Bold
                                                </button>
                                                <button
                                                    class="px-4 py-2 rounded-full bg-pink-200 text-pink-800 hover:bg-pink-300 transition-all"
                                                >
                                                    Dewy
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        class="w-full bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 text-white py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                                    >
                                        Create My Skin Profile
                                    </button>
                                </div>
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwd2l0aCUyMG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                                        alt="Woman with perfect makeup"
                                        class="rounded-2xl shadow-lg border-4 border-[#D56E6E]/20"
                                    />
                                    <div
                                        class="absolute -bottom-6 -right-6 bg-pink-100/90 rounded-2xl p-4 shadow-lg border-2 border-[#D56E6E]/20 transform rotate-3"
                                    >
                                        <div class="flex items-center gap-2">
                                            <span class="material-symbols-outlined text-[#D56E6E]">thumb_up</span>
                                            <p class="text-[#D56E6E] font-medium">98% Match with your skin profile!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>