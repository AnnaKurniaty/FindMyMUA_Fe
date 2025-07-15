<template
    ><div id="webcrumbs">
        <div class="w-full min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-6">
            <div class="flex min-h-screen">
                <div class="w-64 bg-white rounded-2xl shadow-lg p-6 mr-6">
                    <div class="flex items-center mb-8">
                        <div
                            class="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center"
                        >
                            <span class="material-symbols-outlined text-white text-xl">brush</span>
                        </div>
                        <span class="ml-3 text-xl font-bold text-gray-800">Wezz Beauty</span>
                    </div>
                    <nav class="space-y-2">
                        <div class="p-3 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-600">home</span>
                                <span class="ml-3 text-gray-700">Dashboard</span>
                            </div>
                        </div>
                        <div class="p-3 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-600">calendar_today</span>
                                <span class="ml-3 text-gray-700">Bookings</span>
                            </div>
                        </div>
                        <div class="p-3 rounded-lg bg-pink-100 border-l-4 border-pink-500">
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-pink-600">notifications</span>
                                <span class="ml-3 text-pink-700 font-medium">Notifications</span>
                            </div>
                        </div>
                        <div class="p-3 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-600">chat</span>
                                <span class="ml-3 text-gray-700">Messages</span>
                            </div>
                        </div>
                        <div class="p-3 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-600">person</span>
                                <span class="ml-3 text-gray-700">Profile</span>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="flex-1 space-y-6">
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <div class="text-center mb-6">
                            <div
                                class="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <span class="material-symbols-outlined text-white text-3xl">check_circle</span>
                            </div>
                            <h1 class="text-3xl font-bold text-gray-800 mb-2">Booking Success!</h1>
                            <p class="text-gray-600">Your makeup session has been confirmed</p>
                        </div>
                        <div class="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 mb-6">
                            <h2 class="text-xl font-semibold text-gray-800 mb-4">Booking Details</h2>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div class="flex items-center mb-3">
                                        <span class="material-symbols-outlined text-pink-500 mr-3">person</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Makeup Artist</p>
                                            <p class="text-gray-600">Sarah Johnson</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <span class="material-symbols-outlined text-pink-500 mr-3">calendar_today</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Date &amp; Time</p>
                                            <p class="text-gray-600">March 15, 2024 at 10:00 AM</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <span class="material-symbols-outlined text-pink-500 mr-3">location_on</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Location</p>
                                            <p class="text-gray-600">123 Beauty St, City Center</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center mb-3">
                                        <span class="material-symbols-outlined text-pink-500 mr-3">brush</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Service</p>
                                            <p class="text-gray-600">Bridal Makeup</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <span class="material-symbols-outlined text-pink-500 mr-3">schedule</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Duration</p>
                                            <p class="text-gray-600">2 hours</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <span class="material-symbols-outlined text-pink-500 mr-3">payments</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Total Cost</p>
                                            <p class="text-gray-600">$180.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                class="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105"
                            >
                                View Booking Details
                            </button>
                            <button
                                class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105"
                            >
                                Chat with MUA
                            </button>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <div class="text-center mb-6">
                            <h2 class="text-2xl font-bold text-gray-800 mb-2">How was your experience?</h2>
                            <p class="text-gray-600">Share your feedback to help other clients</p>
                        </div>
                        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                            <div class="flex items-center mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1644904105846-095e45fca990?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxtdWElMjBwcm9maWxlfGVufDB8fHx8MTc1MTU2NTQwNXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                                    alt="MUA Profile"
                                    class="w-16 h-16 rounded-full object-cover"
                                    keywords="makeup artist, beauty professional, portrait"
                                />
                                <div class="ml-4">
                                    <h3 class="text-lg font-semibold text-gray-800">Sarah Johnson</h3>
                                    <p class="text-gray-600">Professional Makeup Artist</p>
                                </div>
                            </div>
                            <div class="mb-6">
                                <label class="block text-sm font-medium text-gray-700 mb-3">Rate your experience</label>
                                <div class="flex items-center space-x-2">
                                    <span
                                        class="material-symbols-outlined text-yellow-400 text-3xl cursor-pointer hover:scale-110 transition-transform"
                                        >star</span
                                    >
                                    <span
                                        class="material-symbols-outlined text-yellow-400 text-3xl cursor-pointer hover:scale-110 transition-transform"
                                        >star</span
                                    >
                                    <span
                                        class="material-symbols-outlined text-yellow-400 text-3xl cursor-pointer hover:scale-110 transition-transform"
                                        >star</span
                                    >
                                    <span
                                        class="material-symbols-outlined text-yellow-400 text-3xl cursor-pointer hover:scale-110 transition-transform"
                                        >star</span
                                    >
                                    <span
                                        class="material-symbols-outlined text-gray-300 text-3xl cursor-pointer hover:scale-110 transition-transform"
                                        >star</span
                                    >
                                    <span class="ml-3 text-sm text-gray-600">4 out of 5 stars</span>
                                </div>
                            </div>
                            <div class="mb-6">
                                <label class="block text-sm font-medium text-gray-700 mb-3">Write a review</label>
                                <textarea
                                    class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                                    rows="4"
                                    placeholder="Share your experience with Sarah&#x27;s makeup services..."
                                ></textarea>
                                <div class="mt-4">
                                    <label class="block text-sm font-medium text-gray-700 mb-3"
                                        >Upload before/after photos</label
                                    >
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div
                                            class="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-pink-400 transition-colors"
                                        >
                                            <div class="flex flex-col items-center justify-center">
                                                <span class="material-symbols-outlined text-gray-400 text-4xl mb-2"
                                                    >add_photo_alternate</span
                                                >
                                                <p class="text-sm text-gray-500 mb-2">
                                                    Upload &quot;Before&quot; Photo
                                                </p>
                                                <p class="text-xs text-gray-400">JPG, PNG or GIF (max. 5MB)</p>
                                                <input type="file" accept="image/*" class="hidden" id="before-photo" />
                                                <button
                                                    class="mt-3 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
                                                    @click="handler_0_handler"
                                                >
                                                    Select File
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            class="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-pink-400 transition-colors"
                                        >
                                            <div class="flex flex-col items-center justify-center">
                                                <span class="material-symbols-outlined text-gray-400 text-4xl mb-2"
                                                    >add_photo_alternate</span
                                                >
                                                <p class="text-sm text-gray-500 mb-2">Upload &quot;After&quot; Photo</p>
                                                <p class="text-xs text-gray-400">JPG, PNG or GIF (max. 5MB)</p>
                                                <input type="file" accept="image/*" class="hidden" id="after-photo" />
                                                <button
                                                    class="mt-3 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
                                                    @click="handler_1_handler"
                                                >
                                                    Select File
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="mt-2 text-xs text-gray-500">
                                        Sharing before/after photos helps other clients see the artist&#x27;s work
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col sm:flex-row gap-3">
                                <button
                                    class="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105"
                                >
                                    Submit Review
                                </button>
                                <button
                                    class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                                >
                                    Skip for Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></template
>

<script>
    export default {
        methods: {
            handler_0_handler() {
                return document.getElementById("before-photo").click()
            },
            handler_1_handler() {
                return document.getElementById("after-photo").click()
            }
        }
    }
</script>

