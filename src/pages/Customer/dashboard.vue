<template
    ><div id="webcrumbs">
        <div class="w-full mx-auto bg-gradient-to-br from-pink-50 to-rose-50 min-h-screen">
            <nav class="bg-white shadow-lg border-b border-pink-100 px-6 py-4">
                <div class="flex items-center justify-between max-w-7xl mx-auto">
                    <div class="flex items-center space-x-8">
                        <div class="flex items-center space-x-2">
                            <div
                                class="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center"
                            >
                                <span class="material-symbols-outlined text-white text-sm"
                                    >face_retouching_natural</span
                                >
                            </div>
                            <span class="text-xl font-bold text-gray-800">Wezz Beauty</span>
                        </div>
                        <div class="hidden md:flex space-x-6">
                            <a
                                href="#"
                                class="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
                                >Home</a
                            >
                            <a
                                href="#"
                                class="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
                                >Browse MUAs</a
                            >
                            <a
                                href="#"
                                class="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
                                >Services</a
                            >
                            <a
                                href="#"
                                class="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
                                >About</a
                            >
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button
                            class="hidden md:block text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
                        >
                            Sign In
                        </button>
                        <button
                                class="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                                @click="goToRegisterCus">
                                Join Now
                            </button>
                            <button
                                class="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                                @click="goToRegisterMua">
                                Be Our Partner
                            </button>
                        <button class="md:hidden">
                            <span class="material-symbols-outlined text-gray-700">menu</span>
                        </button>
                    </div>
                </div>
            </nav>
            <div class="max-w-7xl mx-auto px-6 py-8">
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Makeup Artist</h1>
                    <p class="text-lg text-gray-600">Discover talented MUAs near you for any occasion</p>
                </div>
                <div class="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                        <div class="flex-1 relative">
                            <span class="material-symbols-outlined absolute left-3 top-3 text-gray-400">search</span>
                            <input
                                type="text"
                                placeholder="Search for makeup artists, services, or locations..."
                                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                        </div>
                        <div class="flex gap-2">
                            <button
                                class="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                            >
                                <span class="material-symbols-outlined mr-2">search</span> Search
                            </button>
                            <button
                                class="border border-gray-200 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                            >
                                <span class="material-symbols-outlined">tune</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <button
                        class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-pink-100"
                    >
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                            <span class="material-symbols-outlined text-pink-600">location_on</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 text-sm">Nearest MUA</h3>
                    </button>
                    <button
                        class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-pink-100"
                    >
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                            <span class="material-symbols-outlined text-pink-600">favorite</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 text-sm">Wedding Makeup</h3>
                    </button>
                    <button
                        class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-pink-100"
                    >
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                            <span class="material-symbols-outlined text-pink-600">school</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 text-sm">Graduation</h3>
                    </button>
                    <button
                        class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-pink-100"
                    >
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3"
                        >
                            <span class="material-symbols-outlined text-pink-600">attach_money</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 text-sm">Best Price</h3>
                    </button>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                    >
                        <div class="h-48 bg-gradient-to-br from-pink-200 to-rose-200 relative">
                            <img
                                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&amp;h=200&amp;fit=crop"
                                alt="Bridal Makeup"
                                keywords="bridal, wedding, makeup, beauty, elegant"
                                class="w-full h-full object-cover"
                            />
                            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Bridal Makeup</h3>
                            <p class="text-gray-600 mb-4">Perfect for your special day</p>
                            <button
                                class="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                    >
                        <div class="h-48 bg-gradient-to-br from-pink-200 to-rose-200 relative">
                            <img
                                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&amp;h=200&amp;fit=crop"
                                alt="Party Makeup"
                                keywords="party, celebration, makeup, glam, night"
                                class="w-full h-full object-cover"
                            />
                            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Party Makeup</h3>
                            <p class="text-gray-600 mb-4">Glam looks for any celebration</p>
                            <button
                                class="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                    >
                        <div class="h-48 bg-gradient-to-br from-pink-200 to-rose-200 relative">
                            <img
                                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&amp;h=200&amp;fit=crop"
                                alt="Professional Makeup"
                                keywords="professional, business, makeup, corporate, headshot"
                                class="w-full h-full object-cover"
                            />
                            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Professional</h3>
                            <p class="text-gray-600 mb-4">Corporate and headshot ready</p>
                            <button
                                class="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-bold text-gray-800">Recommended MUAs</h2>
                        <button class="text-pink-600 hover:text-pink-700 transition-colors duration-200 font-medium">
                            View All
                        </button>
                    </div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div
                            class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-200"
                        >
                            <div class="flex items-center mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1709477542170-f11ee7d471a0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3R8ZW58MHx8fHwxNzUxNDY0NTk3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                                    alt="MUA Profile"
                                    keywords="makeup artist, professional, woman, beauty"
                                    class="w-12 h-12 rounded-full object-cover"
                                />
                                <div class="ml-4">
                                    <h4 class="font-semibold text-gray-800">Sarah Johnson</h4>
                                    <div class="flex items-center">
                                        <div class="flex text-yellow-400">
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                        </div>
                                        <span class="text-sm text-gray-600 ml-2">4.9 (127)</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mb-3">Specializes in bridal and special occasion makeup</p>
                            <div class="flex items-center justify-between">
                                <span class="text-pink-600 font-semibold">From $150</span>
                                <span class="text-sm text-gray-500">2.1 km away</span>
                            </div>
                        </div>
                        <div
                            class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-200"
                        >
                            <div class="flex items-center mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&amp;h=60&amp;fit=crop&amp;crop=face"
                                    alt="MUA Profile"
                                    keywords="makeup artist, professional, woman, beauty"
                                    class="w-12 h-12 rounded-full object-cover"
                                />
                                <div class="ml-4">
                                    <h4 class="font-semibold text-gray-800">Emily Chen</h4>
                                    <div class="flex items-center">
                                        <div class="flex text-yellow-400">
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                        </div>
                                        <span class="text-sm text-gray-600 ml-2">4.8 (89)</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mb-3">Creative looks for parties and events</p>
                            <div class="flex items-center justify-between">
                                <span class="text-pink-600 font-semibold">From $120</span>
                                <span class="text-sm text-gray-500">1.8 km away</span>
                            </div>
                        </div>
                        <div
                            class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-200"
                        >
                            <div class="flex items-center mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&amp;h=60&amp;fit=crop&amp;crop=face"
                                    alt="MUA Profile"
                                    keywords="makeup artist, professional, woman, beauty"
                                    class="w-12 h-12 rounded-full object-cover"
                                />
                                <div class="ml-4">
                                    <h4 class="font-semibold text-gray-800">Maya Patel</h4>
                                    <div class="flex items-center">
                                        <div class="flex text-yellow-400">
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                            <span class="material-symbols-outlined text-sm">star</span>
                                        </div>
                                        <span class="text-sm text-gray-600 ml-2">5.0 (156)</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mb-3">Professional and editorial makeup expert</p>
                            <div class="flex items-center justify-between">
                                <span class="text-pink-600 font-semibold">From $200</span>
                                <span class="text-sm text-gray-500">3.2 km away</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6">Your Personal Skin Profile</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                            <h3 class="font-semibold text-gray-800 mb-4">Skin Analysis</h3>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Skin Type</span>
                                    <span class="font-medium text-gray-800">Combination</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Skin Tone</span>
                                    <div class="flex items-center">
                                        <div class="w-4 h-4 bg-yellow-200 rounded-full mr-2"></div>
                                        <span class="font-medium text-gray-800">Warm</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Concerns</span>
                                    <span class="font-medium text-gray-800">Acne, Sensitivity</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                            <h3 class="font-semibold text-gray-800 mb-4">Preferences</h3>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Style Preference</span>
                                    <span class="font-medium text-gray-800">Natural, Glam</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Brand Preference</span>
                                    <span class="font-medium text-gray-800">MAC, Urban Decay</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-600">Budget Range</span>
                                    <span class="font-medium text-gray-800">$100 - $300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 text-center">
                        <button
                            class="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div></template>

<script>
export default {
    name: 'dashboard',

    methods: {
        goToRegisterCus() {
            this.$router.push('/register/cus');
        },
        goToRegisterMua() {
            this.$router.push('/register/mua');
        }
    }
}
</script>