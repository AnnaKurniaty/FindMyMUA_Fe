<template
    ><div id="webcrumbs">
        <div class="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
            <div class="bg-white shadow-sm border-b border-pink-100 -m-4 mb-8">
                <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="text-pink-500 font-bold text-xl flex items-center">
                            <span class="material-symbols-outlined text-2xl mr-2">spa</span> FindMyBeauty
                        </div>
                        <nav class="hidden md:flex items-center space-x-6 ml-8">
                            <a href="#" class="text-purple-600 font-medium border-b-2 border-pink-400 py-2">Bookings</a>
                            <a href="#" class="text-purple-400 hover:text-purple-600 transition-colors py-2">Explore</a>
                            <a href="#" class="text-purple-400 hover:text-purple-600 transition-colors py-2"
                                >Messages</a
                            >
                            <a href="#" class="text-purple-400 hover:text-purple-600 transition-colors py-2"
                                >Favorites</a
                            >
                        </nav>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="relative">
                            <button
                                class="p-2 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 transition-colors"
                            >
                                <span class="material-symbols-outlined">notifications</span>
                            </button>
                            <span
                                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse"
                                >3</span
                            >
                        </div>
                        <details class="relative">
                            <summary class="flex items-center gap-2 cursor-pointer">
                                <div
                                    class="w-9 h-9 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-medium"
                                >
                                    ME
                                </div>
                                <span class="material-symbols-outlined text-purple-400">expand_more</span>
                            </summary>
                            <div
                                class="absolute right-0 mt-2 w-48 bg-white border border-pink-100 rounded-xl shadow-lg z-10"
                            >
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-purple-600 hover:bg-pink-50">My Profile</a>
                                    <a href="#" class="block px-4 py-2 text-purple-600 hover:bg-pink-50"
                                        >Account Settings</a
                                    >
                                    <a href="#" class="block px-4 py-2 text-purple-600 hover:bg-pink-50">Help Center</a>
                                    <div class="border-t border-pink-100 my-1"></div>
                                    <a href="#" class="block px-4 py-2 text-red-500 hover:bg-pink-50">Sign Out</a>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-bold text-purple-600 mb-2">My Bookings</h1>
                    <div class="flex flex-wrap gap-3 justify-center mt-4 mb-6">
                        <button
                            class="flex items-center gap-2 bg-pink-100 text-pink-500 px-5 py-2.5 rounded-full hover:bg-pink-200 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow"
                        >
                            <span class="material-symbols-outlined">add_circle</span> <span>New Booking</span>
                        </button>
                        <button
                            class="flex items-center gap-2 bg-purple-100 text-purple-500 px-5 py-2.5 rounded-full hover:bg-purple-200 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow"
                        >
                            <span class="material-symbols-outlined">calendar_today</span> <span>View Schedule</span>
                        </button>
                        <button
                            class="flex items-center gap-2 bg-green-100 text-green-500 px-5 py-2.5 rounded-full hover:bg-green-200 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow"
                        >
                            <span class="material-symbols-outlined">favorite</span> <span>Favorite Services</span>
                        </button>
                        <button
                            class="flex items-center gap-2 bg-yellow-100 text-yellow-600 px-5 py-2.5 rounded-full hover:bg-yellow-200 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow"
                        >
                            <span class="material-symbols-outlined">storefront</span> <span>Browse Salons</span>
                        </button>
                    </div>
                    <p class="text-purple-400">Manage your beauty appointments with love ♡</p>
                </div>
                <div class="bg-white rounded-3xl p-6 shadow-lg mb-8">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                        <h2 class="text-2xl font-bold text-purple-600">Calendar View</h2>
                        <div class="flex flex-col md:flex-row items-start md:items-center gap-3">
                            <div
                                class="flex items-center gap-2 bg-white border-2 border-pink-200 rounded-full px-3 py-1.5 hover:border-pink-300 transition-colors"
                            >
                                <button class="text-purple-500 hover:text-purple-600 transition-colors">
                                    <span class="material-symbols-outlined">chevron_left</span>
                                </button>
                                <div class="relative">
                                    <div class="flex items-center gap-1 cursor-pointer">
                                        <span class="text-purple-600 font-medium">December 2023</span>
                                        <span class="material-symbols-outlined text-pink-400">expand_more</span>
                                    </div>
                                    <div
                                        class="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border-2 border-pink-200 p-3 z-20 hidden group-hover:block hover:block w-52"
                                    >
                                        <div class="grid grid-cols-3 gap-2 mb-2">
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Jan
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Feb
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Mar
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Apr
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                May
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Jun
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Jul
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Aug
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Sep
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Oct
                                            </button>
                                            <button class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm">
                                                Nov
                                            </button>
                                            <button
                                                class="text-purple-500 hover:bg-pink-50 rounded p-1 text-sm font-medium bg-pink-50"
                                            >
                                                Dec
                                            </button>
                                        </div>
                                        <div class="flex justify-between items-center border-t border-pink-100 pt-2">
                                            <button class="text-purple-500 hover:text-purple-600 transition-colors">
                                                <span class="material-symbols-outlined text-sm">chevron_left</span>
                                            </button>
                                            <span class="text-purple-600 font-medium">2023</span>
                                            <button class="text-purple-500 hover:text-purple-600 transition-colors">
                                                <span class="material-symbols-outlined text-sm">chevron_right</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button class="text-purple-500 hover:text-purple-600 transition-colors">
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                            <button
                                class="bg-pink-100 text-pink-500 px-4 py-2 rounded-full hover:bg-pink-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-1">today</span> Month
                            </button>
                            <button
                                class="bg-purple-100 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-1">calendar_view_week</span> Week
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-7 gap-2 text-center mb-4">
                        <div class="text-purple-400 font-medium">Sun</div>
                        <div class="text-purple-400 font-medium">Mon</div>
                        <div class="text-purple-400 font-medium">Tue</div>
                        <div class="text-purple-400 font-medium">Wed</div>
                        <div class="text-purple-400 font-medium">Thu</div>
                        <div class="text-purple-400 font-medium">Fri</div>
                        <div class="text-purple-400 font-medium">Sat</div>
                    </div>
                    <div class="grid grid-cols-7 gap-2">
                        <div
                            class="relative h-24 p-2 rounded-xl border-2 transition-all bg-gray-50 opacity-50 border-pink-50"
                        >
                            <span class="text-sm font-medium text-purple-500"> 28 </span>
                        </div>
                        <div
                            class="relative h-24 p-2 rounded-xl border-2 transition-all bg-gray-50 opacity-50 border-pink-50"
                        >
                            <span class="text-sm font-medium text-purple-500"> 29 </span>
                        </div>
                        <div
                            class="relative h-24 p-2 rounded-xl border-2 transition-all bg-gray-50 opacity-50 border-pink-50"
                        >
                            <span class="text-sm font-medium text-purple-500"> 30 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 1 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 2 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 3 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 4 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 5 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 6 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 7 </span>
                        </div>
                        <div
                            class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-300 hover:border-pink-300 cursor-pointer"
                        >
                            <span class="text-sm font-medium text-pink-500"> 8 </span>
                            <div class="absolute bottom-2 left-2 right-2">
                                <div class="text-xs p-1 rounded-lg mb-1 truncate bg-green-100 text-green-600">
                                    Kawaii Facial
                                </div>
                            </div>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 9 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 10 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 11 </span>
                        </div>
                        <div
                            class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50 hover:border-pink-300 cursor-pointer"
                        >
                            <span class="text-sm font-medium text-purple-500"> 12 </span>
                            <div class="absolute bottom-2 left-2 right-2">
                                <div class="text-xs p-1 rounded-lg mb-1 truncate bg-blue-100 text-blue-600">
                                    Hair Styling
                                </div>
                            </div>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 13 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 14 </span>
                        </div>
                        <div
                            class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50 hover:border-pink-300 cursor-pointer"
                        >
                            <span class="text-sm font-medium text-purple-500"> 15 </span>
                            <div class="absolute bottom-2 left-2 right-2">
                                <div class="text-xs p-1 rounded-lg mb-1 truncate bg-orange-100 text-orange-600">
                                    Cute Nail Art
                                </div>
                            </div>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 16 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 17 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 18 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 19 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 20 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 21 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 22 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 23 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 24 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 25 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 26 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 27 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 28 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 29 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 30 </span>
                        </div>
                        <div class="relative h-24 p-2 rounded-xl border-2 transition-all bg-white border-pink-50">
                            <span class="text-sm font-medium text-purple-500"> 31 </span>
                        </div>
                        <div
                            class="relative h-24 p-2 rounded-xl border-2 transition-all bg-gray-50 opacity-50 border-pink-50"
                        >
                            <span class="text-sm font-medium text-purple-500"> 1 </span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-6 mb-8">
                    <div class="w-full lg:w-2/3 bg-white rounded-3xl p-6 shadow-lg">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-2xl font-bold text-purple-600">Upcoming Appointments</h2>
                            <button class="text-pink-500 hover:text-pink-600 transition-colors">
                                <span class="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>
                        <div class="space-y-4">
                            <div
                                class="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border-l-4 border-green-400 hover:shadow-md transition-all"
                            >
                                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <span class="material-symbols-outlined text-green-500">spa</span>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-purple-600">Kawaii Facial Treatment</h3>
                                    <p class="text-purple-400 text-sm">
                                        Today, 2:00 PM - 3:30 PM • Sparkle Beauty Salon
                                    </p>
                                </div>
                                <div class="flex gap-2">
                                    <button
                                        class="bg-pink-100 text-pink-500 p-2 rounded-full hover:bg-pink-200 transition-colors"
                                    >
                                        <span class="material-symbols-outlined">directions</span>
                                    </button>
                                    <button
                                        class="bg-purple-100 text-purple-500 p-2 rounded-full hover:bg-purple-200 transition-colors"
                                    >
                                        <span class="material-symbols-outlined">chat</span>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-400 hover:shadow-md transition-all"
                            >
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="material-symbols-outlined text-blue-500">content_cut</span>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-purple-600">Magical Hair Styling</h3>
                                    <p class="text-purple-400 text-sm">
                                        Tomorrow, 10:00 AM - 12:00 PM • Dream Hair Studio
                                    </p>
                                </div>
                                <div class="flex gap-2">
                                    <button
                                        class="bg-pink-100 text-pink-500 p-2 rounded-full hover:bg-pink-200 transition-colors"
                                    >
                                        <span class="material-symbols-outlined">directions</span>
                                    </button>
                                    <button
                                        class="bg-purple-100 text-purple-500 p-2 rounded-full hover:bg-purple-200 transition-colors"
                                    >
                                        <span class="material-symbols-outlined">chat</span>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border-l-4 border-orange-400 hover:shadow-md transition-all"
                            >
                                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <span class="material-symbols-outlined text-orange-500">auto_fix_high</span>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-purple-600">Cute Nail Art</h3>
                                    <p class="text-purple-400 text-sm">
                                        Dec 15, 3:00 PM - 4:00 PM • Kawaii Nails Boutique
                                    </p>
                                </div>
                                <div class="flex gap-2">
                                    <button
                                        class="bg-pink-100 text-pink-500 p-2 rounded-full hover:bg-pink-200 transition-colors"
                                    >
                                        <span class="material-symbols-outlined">directions</span>
                                    </button>
                                    <button
                                        class="bg-purple-100 text-purple-500 p-2 rounded-full hover:bg-purple-200 transition-colors"
                                    >
                                        <span class="material-symbols-outlined">chat</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 space-y-6">
                        <div class="bg-white rounded-3xl p-6 shadow-lg">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-xl font-bold text-purple-600">Loyalty Points</h2>
                                <span class="material-symbols-outlined text-pink-400">card_giftcard</span>
                            </div>
                            <div class="text-center mb-4">
                                <div class="text-4xl font-bold text-pink-500 mb-1">458</div>
                                <p class="text-purple-400 text-sm">Total Beauty Points</p>
                            </div>
                            <div class="bg-pink-50 rounded-xl p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-purple-500 font-medium">Next Reward</span>
                                    <span class="text-pink-500 font-medium">42 points to go</span>
                                </div>
                                <div class="w-full bg-white rounded-full h-3">
                                    <div
                                        class="bg-gradient-to-r from-pink-400 to-purple-400 h-3 rounded-full"
                                        style="width: 58%"
                                    ></div>
                                </div>
                                <p class="text-purple-400 text-xs mt-2">500 points = Free facial treatment</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-3xl p-6 shadow-lg">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-xl font-bold text-purple-600">Reminders</h2>
                                <button class="text-pink-400 hover:text-pink-500 transition-colors">
                                    <span class="material-symbols-outlined">notifications</span>
                                </button>
                            </div>
                            <div class="space-y-3">
                                <div
                                    class="flex items-start gap-3 p-3 bg-yellow-50 rounded-xl border-l-4 border-yellow-400 hover:shadow-md transition-all"
                                >
                                    <span class="material-symbols-outlined text-yellow-500">alarm</span>
                                    <div class="flex-1">
                                        <div class="flex items-center justify-between mb-1">
                                            <p class="text-purple-600 text-sm font-medium">Facial appointment today</p>
                                            <span class="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full"
                                                >1h</span
                                            >
                                        </div>
                                        <p class="text-purple-400 text-xs">
                                            2:00 PM - Don&#x27;t forget your skincare diary!
                                        </p>
                                        <div class="flex gap-2 mt-2">
                                            <button
                                                class="bg-green-100 text-green-500 px-2 py-1 rounded-lg text-xs hover:bg-green-200 transition-colors flex-1"
                                            >
                                                <span class="material-symbols-outlined text-xs mr-1">check</span> Got it
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="flex items-start gap-3 p-3 bg-blue-50 rounded-xl border-l-4 border-blue-400 hover:shadow-md transition-all"
                                >
                                    <span class="material-symbols-outlined text-blue-500">event</span>
                                    <div class="flex-1">
                                        <div class="flex items-center justify-between mb-1">
                                            <p class="text-purple-600 text-sm font-medium">Hair styling tomorrow</p>
                                            <span class="bg-blue-100 text-blue-500 text-xs px-2 py-0.5 rounded-full"
                                                >24h</span
                                            >
                                        </div>
                                        <p class="text-purple-400 text-xs">10:00 AM - Dream Hair Studio</p>
                                        <div class="flex gap-2 mt-2">
                                            <button
                                                class="bg-pink-100 text-pink-500 px-2 py-1 rounded-lg text-xs hover:bg-pink-200 transition-colors flex-1"
                                            >
                                                <span class="material-symbols-outlined text-xs mr-1">schedule</span>
                                                Reminder
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="flex items-start gap-3 p-3 bg-pink-50 rounded-xl border-l-4 border-pink-400 hover:shadow-md transition-all"
                                >
                                    <span class="material-symbols-outlined text-pink-500">water_drop</span>
                                    <div class="flex-1">
                                        <div class="flex items-center justify-between mb-1">
                                            <p class="text-purple-600 text-sm font-medium">Hydration reminder</p>
                                            <span class="bg-pink-100 text-pink-500 text-xs px-2 py-0.5 rounded-full"
                                                >Daily</span
                                            >
                                        </div>
                                        <p class="text-purple-400 text-xs">Drink water before your appointments</p>
                                        <div class="flex gap-2 mt-2">
                                            <button
                                                class="bg-purple-100 text-purple-500 px-2 py-1 rounded-lg text-xs hover:bg-purple-200 transition-colors flex-1"
                                            >
                                                <span class="material-symbols-outlined text-xs mr-1"
                                                    >notifications_active</span
                                                >
                                                Settings
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="fixed z-10 right-6 top-24 w-72 bg-white rounded-2xl shadow-xl border-2 border-pink-200 overflow-hidden transform transition-all duration-300 animate-slideInRight"
                        >
                            <div class="bg-gradient-to-r from-purple-400 to-pink-400 p-4">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-white font-bold">Appointment Reminders</h3>
                                    <button class="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                                        <span class="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                            </div>
                            <div class="max-h-80 overflow-y-auto p-3 space-y-3">
                                <div
                                    class="bg-yellow-50 rounded-xl p-3 border-l-4 border-yellow-400 hover:shadow-md transition-all"
                                >
                                    <div class="flex items-center gap-2 mb-2">
                                        <span class="material-symbols-outlined text-yellow-500">alarm</span>
                                        <h4 class="font-medium text-purple-600">Upcoming Soon!</h4>
                                        <span class="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full ml-auto"
                                            >1h</span
                                        >
                                    </div>
                                    <p class="text-sm text-purple-500 mb-1">Kawaii Facial Treatment</p>
                                    <p class="text-xs text-purple-400">Today at 2:00 PM - Sparkle Beauty Salon</p>
                                    <div class="flex gap-2 mt-2">
                                        <button
                                            class="bg-pink-100 text-pink-500 px-2 py-1 rounded-lg text-xs hover:bg-pink-200 transition-colors flex-1"
                                        >
                                            <span class="material-symbols-outlined text-xs mr-1">directions</span>
                                            Directions
                                        </button>
                                        <button
                                            class="bg-green-100 text-green-500 px-2 py-1 rounded-lg text-xs hover:bg-green-200 transition-colors flex-1"
                                        >
                                            <span class="material-symbols-outlined text-xs mr-1">check</span> Confirm
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="bg-blue-50 rounded-xl p-3 border-l-4 border-blue-400 hover:shadow-md transition-all"
                                >
                                    <div class="flex items-center gap-2 mb-2">
                                        <span class="material-symbols-outlined text-blue-500">event</span>
                                        <h4 class="font-medium text-purple-600">Tomorrow</h4>
                                        <span class="bg-blue-100 text-blue-500 text-xs px-2 py-0.5 rounded-full ml-auto"
                                            >24h</span
                                        >
                                    </div>
                                    <p class="text-sm text-purple-500 mb-1">Magical Hair Styling</p>
                                    <p class="text-xs text-purple-400">Tomorrow at 10:00 AM - Dream Hair Studio</p>
                                    <div class="flex gap-2 mt-2">
                                        <button
                                            class="bg-purple-100 text-purple-500 px-2 py-1 rounded-lg text-xs hover:bg-purple-200 transition-colors flex-1"
                                        >
                                            <span class="material-symbols-outlined text-xs mr-1">schedule</span>
                                            Reschedule
                                        </button>
                                        <button
                                            class="bg-red-100 text-red-500 px-2 py-1 rounded-lg text-xs hover:bg-red-200 transition-colors flex-1"
                                        >
                                            <span class="material-symbols-outlined text-xs mr-1">close</span> Cancel
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="bg-pink-50 rounded-xl p-3 border-l-4 border-pink-400 hover:shadow-md transition-all"
                                >
                                    <div class="flex items-center gap-2 mb-2">
                                        <span class="material-symbols-outlined text-pink-500">spa</span>
                                        <h4 class="font-medium text-purple-600">Don&#x27;t Forget</h4>
                                        <span class="bg-pink-100 text-pink-500 text-xs px-2 py-0.5 rounded-full ml-auto"
                                            >7d</span
                                        >
                                    </div>
                                    <p class="text-sm text-purple-500 mb-1">Cute Nail Art</p>
                                    <p class="text-xs text-purple-400">Dec 15, 3:00 PM - Kawaii Nails Boutique</p>
                                    <div class="flex gap-2 mt-2">
                                        <button
                                            class="bg-pink-100 text-pink-500 px-2 py-1 rounded-lg text-xs hover:bg-pink-200 transition-colors flex-1"
                                        >
                                            <span class="material-symbols-outlined text-xs mr-1">edit_calendar</span>
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3 bg-purple-50 border-t border-pink-100">
                                <button
                                    class="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 rounded-lg hover:opacity-90 transition-colors text-sm"
                                >
                                    <span class="material-symbols-outlined text-xs mr-1">notifications_active</span>
                                    Manage Notifications
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div
                        class="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div class="flex items-center justify-between mb-4">
                            <div class="bg-pink-100 rounded-full p-3">
                                <span class="material-symbols-outlined text-pink-400 text-xl">calendar_today</span>
                            </div>
                            <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                                >Confirmed</span
                            >
                        </div>
                        <h3 class="text-lg font-semibold text-purple-600 mb-2">Kawaii Facial Treatment</h3>
                        <p class="text-purple-300 text-sm mb-3">Sparkle Beauty Salon</p>
                        <div class="space-y-2">
                            <div class="flex items-center text-purple-400">
                                <span class="material-symbols-outlined text-sm mr-2">schedule</span>
                                <span class="text-sm">Today, 2:00 PM - 3:30 PM</span>
                            </div>
                            <div class="flex items-center text-purple-400">
                                <span class="material-symbols-outlined text-sm mr-2">person</span>
                                <span class="text-sm">Sakura-chan</span>
                            </div>
                            <div class="flex items-center text-purple-400">
                                <span class="material-symbols-outlined text-sm mr-2">payments</span>
                                <span class="text-sm">$85.00</span>
                            </div>
                        </div>
                        <div class="flex gap-2 mt-4">
                            <button
                                class="flex-1 bg-pink-100 text-pink-500 py-2 px-4 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-1">edit</span> Reschedule
                            </button>
                            <button
                                class="flex-1 bg-purple-100 text-purple-500 py-2 px-4 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-1">chat</span> Message
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div class="flex items-center justify-between mb-4">
                            <div class="bg-purple-100 rounded-full p-3">
                                <span class="material-symbols-outlined text-purple-400 text-xl">content_cut</span>
                            </div>
                            <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                                >Upcoming</span
                            >
                        </div>
                        <h3 class="text-lg font-semibold text-purple-600 mb-2">Magical Hair Styling</h3>
                        <p class="text-purple-300 text-sm mb-3">Dream Hair Studio</p>
                        <div class="space-y-2">
                            <div class="flex items-center text-purple-400">
                                <span class="material-symbols-outlined text-sm mr-2">schedule</span>
                                <span class="text-sm">Tomorrow, 10:00 AM - 12:00 PM</span>
                            </div>
                            <div class="flex items-center text-purple-400">
                                <span class="material-symbols-outlined text-sm mr-2">person</span>
                                <span class="text-sm">Yuki-san</span>
                            </div>
                            <div class="flex items-center text-purple-400">
                                <span class="material-symbols-outlined text-sm mr-2">payments</span>
                                <span class="text-sm">$120.00</span>
                            </div>
                        </div>
                        <div class="flex gap-2 mt-4">
                            <button
                                class="flex-1 bg-pink-100 text-pink-500 py-2 px-4 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-1">edit</span> Reschedule
                            </button>
                            <button
                                class="flex-1 bg-purple-100 text-purple-500 py-2 px-4 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-1">cancel</span> Cancel
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div class="flex items-center justify-between mb-4">
                            <div class="bg-yellow-100 rounded-full p-3">
                                <span class="material-symbols-outlined text-yellow-400 text-xl">auto_fix_high</span>
                            </div>
                            <span class="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                                >Pending</span
                            >
                        </div>
                        <h3 class="text-lg font-semibold text-purple-600 mb-2">Cute Nail Art</h3>
                        <p class="text-purple-300 text-sm mb-3">Kawaii Nails Boutique</p>
                        <div class="space-y-2">
                            <div class="flex items-center text-purple-400">
                                <span class="material-symbols-outlined text-sm mr-2">schedule</span>
                                <span class="text-sm">Dec 15, 3:00 PM - 4:00 PM</span>
                            </div>
                            <div class="flex items-center text-purple-400">
                                <span class="material-symbols-outlined text-sm mr-2">person</span>
                                <span class="text-sm">Momo-chan</span>
                            </div>
                            <div class="flex items-center text-purple-400">
                                <span class="material-symbols-outlined text-sm mr-2">payments</span>
                                <span class="text-sm">$65.00</span>
                            </div>
                        </div>
                        <div class="flex gap-2 mt-4">
                            <button
                                class="flex-1 bg-green-100 text-green-500 py-2 px-4 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-1">check</span> Confirm
                            </button>
                            <button
                                class="flex-1 bg-red-100 text-red-500 py-2 px-4 rounded-full text-sm font-medium hover:bg-red-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-1">close</span> Decline
                            </button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div class="lg:col-span-2">
                        <div class="bg-white rounded-3xl p-6 shadow-lg">
                            <div
                                class="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4"
                            >
                                <h2 class="text-2xl font-bold text-purple-600">Booking History</h2>
                                <div
                                    class="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto"
                                >
                                    <div class="relative">
                                        <input
                                            type="text"
                                            placeholder="Search bookings..."
                                            class="bg-pink-50 border-2 border-pink-200 rounded-full py-2 pl-10 pr-4 text-purple-600 placeholder-purple-300 focus:outline-none focus:border-pink-300 w-full md:w-auto"
                                        />
                                        <span class="material-symbols-outlined absolute left-3 top-2.5 text-pink-400"
                                            >search</span
                                        >
                                    </div>
                                    <details class="relative">
                                        <summary
                                            class="bg-purple-100 text-purple-500 px-4 py-2 rounded-full cursor-pointer hover:bg-purple-200 transition-colors"
                                        >
                                            <span class="material-symbols-outlined text-sm mr-1">filter_list</span>
                                            Filter
                                        </summary>
                                        <div
                                            class="absolute right-0 top-full mt-2 bg-white border-2 border-purple-200 rounded-2xl p-4 shadow-lg z-10 w-48"
                                        >
                                            <div class="space-y-3">
                                                <div>
                                                    <label class="block text-sm font-medium text-purple-600 mb-2"
                                                        >Status</label
                                                    >
                                                    <div class="space-y-2">
                                                        <label class="flex items-center">
                                                            <input type="checkbox" class="mr-2 rounded" />
                                                            <span class="text-sm text-purple-500">Confirmed</span>
                                                        </label>
                                                        <label class="flex items-center">
                                                            <input type="checkbox" class="mr-2 rounded" />
                                                            <span class="text-sm text-purple-500">Completed</span>
                                                        </label>
                                                        <label class="flex items-center">
                                                            <input type="checkbox" class="mr-2 rounded" />
                                                            <span class="text-sm text-purple-500">Cancelled</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label class="block text-sm font-medium text-purple-600 mb-2"
                                                        >Date Range</label
                                                    >
                                                    <select
                                                        class="w-full bg-pink-50 border-2 border-pink-200 rounded-xl py-2 px-3 text-purple-600"
                                                    >
                                                        <option>Last 30 days</option>
                                                        <option>Last 3 months</option>
                                                        <option>Last 6 months</option>
                                                        <option>All time</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div
                                    class="flex items-center justify-between p-4 bg-green-50 rounded-2xl border-2 border-green-200"
                                >
                                    <div class="flex items-center gap-4">
                                        <div class="bg-green-100 rounded-full p-3">
                                            <span class="material-symbols-outlined text-green-500">check_circle</span>
                                        </div>
                                        <div>
                                            <h3 class="font-semibold text-purple-600">Kawaii Manicure</h3>
                                            <p class="text-purple-400 text-sm">Dec 8, 2024 • Completed</p>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <p class="font-semibold text-purple-600">$45.00</p>
                                        <button class="text-pink-500 text-sm hover:text-pink-600 transition-colors">
                                            <span class="material-symbols-outlined text-sm mr-1">star</span> Rate
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-between p-4 bg-blue-50 rounded-2xl border-2 border-blue-200"
                                >
                                    <div class="flex items-center gap-4">
                                        <div class="bg-blue-100 rounded-full p-3">
                                            <span class="material-symbols-outlined text-blue-500">check_circle</span>
                                        </div>
                                        <div>
                                            <h3 class="font-semibold text-purple-600">Sparkle Facial</h3>
                                            <p class="text-purple-400 text-sm">Dec 1, 2024 • Completed</p>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <p class="font-semibold text-purple-600">$75.00</p>
                                        <div class="flex items-center gap-1">
                                            <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                                            <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                                            <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                                            <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                                            <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-between p-4 bg-red-50 rounded-2xl border-2 border-red-200"
                                >
                                    <div class="flex items-center gap-4">
                                        <div class="bg-red-100 rounded-full p-3">
                                            <span class="material-symbols-outlined text-red-500">cancel</span>
                                        </div>
                                        <div>
                                            <h3 class="font-semibold text-purple-600">Hair Color Treatment</h3>
                                            <p class="text-purple-400 text-sm">Nov 25, 2024 • Cancelled</p>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <p class="font-semibold text-purple-600">$95.00</p>
                                        <button class="text-pink-500 text-sm hover:text-pink-600 transition-colors">
                                            <span class="material-symbols-outlined text-sm mr-1">refresh</span> Rebook
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-3xl p-6 shadow-lg">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-2xl font-bold text-purple-600">Favorite Services</h2>
                            <button
                                class="p-2 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 transition-colors"
                            >
                                <span class="material-symbols-outlined">favorite</span>
                            </button>
                        </div>
                        <div class="space-y-4">
                            <div
                                class="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl hover:shadow-md transition-all"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&amp;fit=crop&amp;w=80&amp;h=80"
                                    alt="Facial treatment"
                                    class="w-16 h-16 object-cover rounded-xl"
                                    keywords="facial, beauty treatment, skincare"
                                />
                                <div class="flex-1">
                                    <h3 class="font-semibold text-purple-600">Kawaii Facial Treatment</h3>
                                    <div class="flex items-center gap-2 text-purple-400 text-sm">
                                        <span class="material-symbols-outlined text-xs">star</span>
                                        <span>4.9 (234 reviews)</span>
                                    </div>
                                    <p class="text-pink-500 font-medium text-sm">$85.00</p>
                                </div>
                            </div>
                            <div
                                class="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl hover:shadow-md transition-all"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&amp;fit=crop&amp;w=80&amp;h=80"
                                    alt="Hair styling"
                                    class="w-16 h-16 object-cover rounded-xl"
                                    keywords="hair, styling, salon"
                                />
                                <div class="flex-1">
                                    <h3 class="font-semibold text-purple-600">Magical Hair Styling</h3>
                                    <div class="flex items-center gap-2 text-purple-400 text-sm">
                                        <span class="material-symbols-outlined text-xs">star</span>
                                        <span>4.8 (189 reviews)</span>
                                    </div>
                                    <p class="text-pink-500 font-medium text-sm">$120.00</p>
                                </div>
                            </div>
                            <div
                                class="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl hover:shadow-md transition-all"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&amp;fit=crop&amp;w=80&amp;h=80"
                                    alt="Nail art"
                                    class="w-16 h-16 object-cover rounded-xl"
                                    keywords="nail art, manicure, beauty"
                                />
                                <div class="flex-1">
                                    <h3 class="font-semibold text-purple-600">Cute Nail Art</h3>
                                    <div class="flex items-center gap-2 text-purple-400 text-sm">
                                        <span class="material-symbols-outlined text-xs">star</span>
                                        <span>4.7 (156 reviews)</span>
                                    </div>
                                    <p class="text-pink-500 font-medium text-sm">$65.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6">
                            <button
                                class="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-xl hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                            >
                                <span class="material-symbols-outlined">add</span> Book New Service
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden bg-white border-t border-pink-100 py-2 px-4 absolute bottom-0 left-0 right-0">
                    <div class="flex justify-around items-center">
                        <a href="#" class="flex flex-col items-center text-purple-600">
                            <span class="material-symbols-outlined">home</span> <span class="text-xs mt-1">Home</span>
                        </a>
                        <a href="#" class="flex flex-col items-center text-pink-500">
                            <span class="material-symbols-outlined">calendar_today</span>
                            <span class="text-xs mt-1">Bookings</span>
                        </a>
                        <a href="#" class="flex flex-col items-center text-purple-400">
                            <span class="material-symbols-outlined">search</span>
                            <span class="text-xs mt-1">Explore</span>
                        </a>
                        <a href="#" class="flex flex-col items-center text-purple-400">
                            <span class="material-symbols-outlined">chat</span>
                            <span class="text-xs mt-1">Messages</span>
                        </a>
                        <a href="#" class="flex flex-col items-center text-purple-400">
                            <span class="material-symbols-outlined">person</span>
                            <span class="text-xs mt-1">Profile</span>
                        </a>
                        <div class="absolute -top-16 left-1/2 transform -translate-x-1/2">
                            <button
                                class="bg-gradient-to-r from-pink-400 to-purple-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse"
                            >
                                <span class="material-symbols-outlined text-2xl">add</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></template
>

<style scoped>
    @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
    @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
    @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);

    /*! tailwindcss v3.4.11 | MIT License | https://tailwindcss.com*/
    *,
    :after,
    :before {
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
    }
    :after,
    :before {
        --tw-content: "";
    }
    :host,
    html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family:
            Open Sans,
            ui-sans-serif,
            system-ui,
            sans-serif,
            Apple Color Emoji,
            Segoe UI Emoji,
            Segoe UI Symbol,
            Noto Color Emoji;
        font-feature-settings: normal;
        font-variation-settings: normal;
        -moz-tab-size: 4;
        tab-size: 4;
        -webkit-tap-highlight-color: transparent;
    }
    body {
        line-height: inherit;
        margin: 0;
    }
    hr {
        border-top-width: 1px;
        color: inherit;
        height: 0;
    }
    abbr:where([title]) {
        text-decoration: underline dotted;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
    b,
    strong {
        font-weight: bolder;
    }
    code,
    kbd,
    pre,
    samp {
        font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            Liberation Mono,
            Courier New,
            monospace;
        font-feature-settings: normal;
        font-size: 1em;
        font-variation-settings: normal;
    }
    small {
        font-size: 80%;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sub {
        bottom: -0.25em;
    }
    sup {
        top: -0.5em;
    }
    table {
        border-collapse: collapse;
        border-color: inherit;
        text-indent: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        color: inherit;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 100%;
        font-variation-settings: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        line-height: inherit;
        margin: 0;
        padding: 0;
    }
    button,
    select {
        text-transform: none;
    }
    button,
    input:where([type="button"]),
    input:where([type="reset"]),
    input:where([type="submit"]) {
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
    }
    :-moz-focusring {
        outline: auto;
    }
    :-moz-ui-invalid {
        box-shadow: none;
    }
    progress {
        vertical-align: baseline;
    }
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }
    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }
    summary {
        display: list-item;
    }
    blockquote,
    dd,
    dl,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    pre {
        margin: 0;
    }
    fieldset {
        margin: 0;
    }
    fieldset,
    legend {
        padding: 0;
    }
    menu,
    ol,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    dialog {
        padding: 0;
    }
    textarea {
        resize: vertical;
    }
    input::placeholder,
    textarea::placeholder {
        color: #9ca3af;
        opacity: 1;
    }
    [role="button"],
    button {
        cursor: pointer;
    }
    :disabled {
        cursor: default;
    }
    audio,
    canvas,
    embed,
    iframe,
    img,
    object,
    svg,
    video {
        display: block;
        vertical-align: middle;
    }
    img,
    video {
        height: auto;
        max-width: 100%;
    }
    [hidden] {
        display: none;
    }
    *,
    :after,
    :before {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
        --tw-contain-size: ;
        --tw-contain-layout: ;
        --tw-contain-paint: ;
        --tw-contain-style: ;
    }
    ::backdrop {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
        --tw-contain-size: ;
        --tw-contain-layout: ;
        --tw-contain-paint: ;
        --tw-contain-style: ;
    }
    #webcrumbs .fixed {
        position: fixed;
    }
    #webcrumbs .absolute {
        position: absolute;
    }
    #webcrumbs .relative {
        position: relative;
    }
    #webcrumbs .-right-1 {
        right: -4px;
    }
    #webcrumbs .-top-1 {
        top: -4px;
    }
    #webcrumbs .-top-16 {
        top: -64px;
    }
    #webcrumbs .bottom-0 {
        bottom: 0;
    }
    #webcrumbs .bottom-2 {
        bottom: 8px;
    }
    #webcrumbs .left-0 {
        left: 0;
    }
    #webcrumbs .left-1\/2 {
        left: 50%;
    }
    #webcrumbs .left-2 {
        left: 8px;
    }
    #webcrumbs .left-3 {
        left: 12px;
    }
    #webcrumbs .right-0 {
        right: 0;
    }
    #webcrumbs .right-2 {
        right: 8px;
    }
    #webcrumbs .right-6 {
        right: 24px;
    }
    #webcrumbs .top-2\.5 {
        top: 10px;
    }
    #webcrumbs .top-24 {
        top: 96px;
    }
    #webcrumbs .top-full {
        top: 100%;
    }
    #webcrumbs .z-10 {
        z-index: 10;
    }
    #webcrumbs .z-20 {
        z-index: 20;
    }
    #webcrumbs .-m-4 {
        margin: -16px;
    }
    #webcrumbs .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }
    #webcrumbs .my-1 {
        margin-top: 4px;
    }
    #webcrumbs .mb-1,
    #webcrumbs .my-1 {
        margin-bottom: 4px;
    }
    #webcrumbs .mb-2 {
        margin-bottom: 8px;
    }
    #webcrumbs .mb-3 {
        margin-bottom: 12px;
    }
    #webcrumbs .mb-4 {
        margin-bottom: 16px;
    }
    #webcrumbs .mb-6 {
        margin-bottom: 24px;
    }
    #webcrumbs .mb-8 {
        margin-bottom: 32px;
    }
    #webcrumbs .ml-8 {
        margin-left: 32px;
    }
    #webcrumbs .ml-auto {
        margin-left: auto;
    }
    #webcrumbs .mr-1 {
        margin-right: 4px;
    }
    #webcrumbs .mr-2 {
        margin-right: 8px;
    }
    #webcrumbs .mt-1 {
        margin-top: 4px;
    }
    #webcrumbs .mt-2 {
        margin-top: 8px;
    }
    #webcrumbs .mt-4 {
        margin-top: 16px;
    }
    #webcrumbs .mt-6 {
        margin-top: 24px;
    }
    #webcrumbs .block {
        display: block;
    }
    #webcrumbs .flex {
        display: flex;
    }
    #webcrumbs .grid {
        display: grid;
    }
    #webcrumbs .hidden {
        display: none;
    }
    #webcrumbs .h-12 {
        height: 48px;
    }
    #webcrumbs .h-16 {
        height: 64px;
    }
    #webcrumbs .h-24 {
        height: 96px;
    }
    #webcrumbs .h-3 {
        height: 12px;
    }
    #webcrumbs .h-5 {
        height: 20px;
    }
    #webcrumbs .h-9 {
        height: 36px;
    }
    #webcrumbs .max-h-80 {
        max-height: 320px;
    }
    #webcrumbs .min-h-screen {
        min-height: 100vh;
    }
    #webcrumbs .w-12 {
        width: 48px;
    }
    #webcrumbs .w-16 {
        width: 64px;
    }
    #webcrumbs .w-48 {
        width: 192px;
    }
    #webcrumbs .w-5 {
        width: 20px;
    }
    #webcrumbs .w-52 {
        width: 208px;
    }
    #webcrumbs .w-72 {
        width: 288px;
    }
    #webcrumbs .w-9 {
        width: 36px;
    }
    #webcrumbs .w-full {
        width: 100%;
    }
    #webcrumbs .max-w-6xl {
        max-width: 72rem;
    }
    #webcrumbs .flex-1 {
        flex: 1 1 0%;
    }
    #webcrumbs .-translate-x-1\/2 {
        --tw-translate-x: -50%;
    }
    #webcrumbs .-translate-x-1\/2,
    #webcrumbs .transform {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    @keyframes pulse {
        50% {
            opacity: 0.5;
        }
    }
    #webcrumbs .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    #webcrumbs .cursor-pointer {
        cursor: pointer;
    }
    #webcrumbs .grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    #webcrumbs .grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    #webcrumbs .grid-cols-7 {
        grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    #webcrumbs .flex-row {
        flex-direction: row;
    }
    #webcrumbs .flex-col {
        flex-direction: column;
    }
    #webcrumbs .flex-wrap {
        flex-wrap: wrap;
    }
    #webcrumbs .items-start {
        align-items: flex-start;
    }
    #webcrumbs .items-center {
        align-items: center;
    }
    #webcrumbs .items-stretch {
        align-items: stretch;
    }
    #webcrumbs .justify-center {
        justify-content: center;
    }
    #webcrumbs .justify-between {
        justify-content: space-between;
    }
    #webcrumbs .justify-around {
        justify-content: space-around;
    }
    #webcrumbs .gap-1 {
        gap: 4px;
    }
    #webcrumbs .gap-2 {
        gap: 8px;
    }
    #webcrumbs .gap-3 {
        gap: 12px;
    }
    #webcrumbs .gap-4 {
        gap: 16px;
    }
    #webcrumbs .gap-6 {
        gap: 24px;
    }
    #webcrumbs :is(.space-x-6 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-x-reverse: 0;
        margin-left: calc(24px * (1 - var(--tw-space-x-reverse)));
        margin-right: calc(24px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-y-2 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(8px * var(--tw-space-y-reverse));
        margin-top: calc(8px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-y-3 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(12px * var(--tw-space-y-reverse));
        margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(16px * var(--tw-space-y-reverse));
        margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-y-6 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(24px * var(--tw-space-y-reverse));
        margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs .overflow-hidden {
        overflow: hidden;
    }
    #webcrumbs .overflow-y-auto {
        overflow-y: auto;
    }
    #webcrumbs .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    #webcrumbs .rounded {
        border-radius: 12px;
    }
    #webcrumbs .rounded-2xl {
        border-radius: 48px;
    }
    #webcrumbs .rounded-3xl {
        border-radius: 72px;
    }
    #webcrumbs .rounded-full {
        border-radius: 9999px;
    }
    #webcrumbs .rounded-lg {
        border-radius: 24px;
    }
    #webcrumbs .rounded-xl {
        border-radius: 36px;
    }
    #webcrumbs .border {
        border-width: 1px;
    }
    #webcrumbs .border-2 {
        border-width: 2px;
    }
    #webcrumbs .border-b {
        border-bottom-width: 1px;
    }
    #webcrumbs .border-b-2 {
        border-bottom-width: 2px;
    }
    #webcrumbs .border-l-4 {
        border-left-width: 4px;
    }
    #webcrumbs .border-t {
        border-top-width: 1px;
    }
    #webcrumbs .border-blue-200 {
        --tw-border-opacity: 1;
        border-color: rgb(191 219 254 / var(--tw-border-opacity));
    }
    #webcrumbs .border-blue-400 {
        --tw-border-opacity: 1;
        border-color: rgb(96 165 250 / var(--tw-border-opacity));
    }
    #webcrumbs .border-green-200 {
        --tw-border-opacity: 1;
        border-color: rgb(187 247 208 / var(--tw-border-opacity));
    }
    #webcrumbs .border-green-400 {
        --tw-border-opacity: 1;
        border-color: rgb(74 222 128 / var(--tw-border-opacity));
    }
    #webcrumbs .border-orange-400 {
        --tw-border-opacity: 1;
        border-color: rgb(251 146 60 / var(--tw-border-opacity));
    }
    #webcrumbs .border-pink-100 {
        --tw-border-opacity: 1;
        border-color: rgb(252 231 243 / var(--tw-border-opacity));
    }
    #webcrumbs .border-pink-200 {
        --tw-border-opacity: 1;
        border-color: rgb(251 207 232 / var(--tw-border-opacity));
    }
    #webcrumbs .border-pink-300 {
        --tw-border-opacity: 1;
        border-color: rgb(249 168 212 / var(--tw-border-opacity));
    }
    #webcrumbs .border-pink-400 {
        --tw-border-opacity: 1;
        border-color: rgb(244 114 182 / var(--tw-border-opacity));
    }
    #webcrumbs .border-pink-50 {
        --tw-border-opacity: 1;
        border-color: rgb(253 242 248 / var(--tw-border-opacity));
    }
    #webcrumbs .border-purple-200 {
        --tw-border-opacity: 1;
        border-color: rgb(233 213 255 / var(--tw-border-opacity));
    }
    #webcrumbs .border-red-200 {
        --tw-border-opacity: 1;
        border-color: rgb(254 202 202 / var(--tw-border-opacity));
    }
    #webcrumbs .border-yellow-400 {
        --tw-border-opacity: 1;
        border-color: rgb(250 204 21 / var(--tw-border-opacity));
    }
    #webcrumbs .bg-blue-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(219 234 254 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-blue-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(239 246 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-gray-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-green-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(220 252 231 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-green-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(240 253 244 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-orange-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(255 237 213 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-orange-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(255 247 237 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-pink-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(252 231 243 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-pink-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 242 248 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-purple-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(243 232 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-purple-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(233 213 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-purple-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(250 245 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-red-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 226 226 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-red-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 242 242 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-red-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(239 68 68 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-yellow-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 249 195 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-yellow-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 252 232 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-gradient-to-br {
        background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    }
    #webcrumbs .bg-gradient-to-r {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
    }
    #webcrumbs .from-pink-400 {
        --tw-gradient-from: #f472b6 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(244, 114, 182, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .from-pink-50 {
        --tw-gradient-from: #fdf2f8 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(253, 242, 248, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .from-purple-400 {
        --tw-gradient-from: #c084fc var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(192, 132, 252, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .to-pink-400 {
        --tw-gradient-to: #f472b6 var(--tw-gradient-to-position);
    }
    #webcrumbs .to-purple-400 {
        --tw-gradient-to: #c084fc var(--tw-gradient-to-position);
    }
    #webcrumbs .to-purple-50 {
        --tw-gradient-to: #faf5ff var(--tw-gradient-to-position);
    }
    #webcrumbs .object-cover {
        object-fit: cover;
    }
    #webcrumbs .p-1 {
        padding: 4px;
    }
    #webcrumbs .p-2 {
        padding: 8px;
    }
    #webcrumbs .p-3 {
        padding: 12px;
    }
    #webcrumbs .p-4 {
        padding: 16px;
    }
    #webcrumbs .p-6 {
        padding: 24px;
    }
    #webcrumbs .px-2 {
        padding-left: 8px;
        padding-right: 8px;
    }
    #webcrumbs .px-3 {
        padding-left: 12px;
        padding-right: 12px;
    }
    #webcrumbs .px-4 {
        padding-left: 16px;
        padding-right: 16px;
    }
    #webcrumbs .px-5 {
        padding-left: 20px;
        padding-right: 20px;
    }
    #webcrumbs .py-0\.5 {
        padding-bottom: 2px;
        padding-top: 2px;
    }
    #webcrumbs .py-1 {
        padding-bottom: 4px;
        padding-top: 4px;
    }
    #webcrumbs .py-1\.5 {
        padding-bottom: 6px;
        padding-top: 6px;
    }
    #webcrumbs .py-2 {
        padding-bottom: 8px;
        padding-top: 8px;
    }
    #webcrumbs .py-2\.5 {
        padding-bottom: 10px;
        padding-top: 10px;
    }
    #webcrumbs .py-3 {
        padding-bottom: 12px;
        padding-top: 12px;
    }
    #webcrumbs .pl-10 {
        padding-left: 40px;
    }
    #webcrumbs .pr-4 {
        padding-right: 16px;
    }
    #webcrumbs .pt-2 {
        padding-top: 8px;
    }
    #webcrumbs .text-center {
        text-align: center;
    }
    #webcrumbs .text-right {
        text-align: right;
    }
    #webcrumbs .text-2xl {
        font-size: 24px;
        line-height: 31.200000000000003px;
    }
    #webcrumbs .text-4xl {
        font-size: 36px;
        line-height: 41.4px;
    }
    #webcrumbs .text-lg {
        font-size: 18px;
        line-height: 27px;
    }
    #webcrumbs .text-sm {
        font-size: 14px;
        line-height: 21px;
    }
    #webcrumbs .text-xl {
        font-size: 20px;
        line-height: 28px;
    }
    #webcrumbs .text-xs {
        font-size: 12px;
        line-height: 19.200000000000003px;
    }
    #webcrumbs .font-bold {
        font-weight: 700;
    }
    #webcrumbs .font-medium {
        font-weight: 500;
    }
    #webcrumbs .font-semibold {
        font-weight: 600;
    }
    #webcrumbs .text-blue-500 {
        --tw-text-opacity: 1;
        color: rgb(59 130 246 / var(--tw-text-opacity));
    }
    #webcrumbs .text-blue-600 {
        --tw-text-opacity: 1;
        color: rgb(37 99 235 / var(--tw-text-opacity));
    }
    #webcrumbs .text-green-500 {
        --tw-text-opacity: 1;
        color: rgb(34 197 94 / var(--tw-text-opacity));
    }
    #webcrumbs .text-green-600 {
        --tw-text-opacity: 1;
        color: rgb(22 163 74 / var(--tw-text-opacity));
    }
    #webcrumbs .text-orange-500 {
        --tw-text-opacity: 1;
        color: rgb(249 115 22 / var(--tw-text-opacity));
    }
    #webcrumbs .text-orange-600 {
        --tw-text-opacity: 1;
        color: rgb(234 88 12 / var(--tw-text-opacity));
    }
    #webcrumbs .text-pink-400 {
        --tw-text-opacity: 1;
        color: rgb(244 114 182 / var(--tw-text-opacity));
    }
    #webcrumbs .text-pink-500 {
        --tw-text-opacity: 1;
        color: rgb(236 72 153 / var(--tw-text-opacity));
    }
    #webcrumbs .text-purple-300 {
        --tw-text-opacity: 1;
        color: rgb(216 180 254 / var(--tw-text-opacity));
    }
    #webcrumbs .text-purple-400 {
        --tw-text-opacity: 1;
        color: rgb(192 132 252 / var(--tw-text-opacity));
    }
    #webcrumbs .text-purple-500 {
        --tw-text-opacity: 1;
        color: rgb(168 85 247 / var(--tw-text-opacity));
    }
    #webcrumbs .text-purple-600 {
        --tw-text-opacity: 1;
        color: rgb(147 51 234 / var(--tw-text-opacity));
    }
    #webcrumbs .text-red-500 {
        --tw-text-opacity: 1;
        color: rgb(239 68 68 / var(--tw-text-opacity));
    }
    #webcrumbs .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    #webcrumbs .text-yellow-400 {
        --tw-text-opacity: 1;
        color: rgb(250 204 21 / var(--tw-text-opacity));
    }
    #webcrumbs .text-yellow-500 {
        --tw-text-opacity: 1;
        color: rgb(234 179 8 / var(--tw-text-opacity));
    }
    #webcrumbs .text-yellow-600 {
        --tw-text-opacity: 1;
        color: rgb(202 138 4 / var(--tw-text-opacity));
    }
    #webcrumbs .placeholder-purple-300::placeholder {
        --tw-placeholder-opacity: 1;
        color: rgb(216 180 254 / var(--tw-placeholder-opacity));
    }
    #webcrumbs .opacity-50 {
        opacity: 0.5;
    }
    #webcrumbs .shadow-lg {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    }
    #webcrumbs .shadow-lg,
    #webcrumbs .shadow-md {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    }
    #webcrumbs .shadow-sm {
        --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    }
    #webcrumbs .shadow-sm,
    #webcrumbs .shadow-xl {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .shadow-xl {
        --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    }
    #webcrumbs .transition-all {
        transition-duration: 0.15s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .transition-colors {
        transition-duration: 0.15s;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .duration-300 {
        transition-duration: 0.3s;
    }
    #webcrumbs {
        font-family: Open Sans !important;
        font-size: 16px !important;
    }
    #webcrumbs .hover\:block:hover {
        display: block;
    }
    #webcrumbs .hover\:-translate-y-1:hover {
        --tw-translate-y: -4px;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .hover\:border-pink-300:hover {
        --tw-border-opacity: 1;
        border-color: rgb(249 168 212 / var(--tw-border-opacity));
    }
    #webcrumbs .hover\:bg-green-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(187 247 208 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-pink-100:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(252 231 243 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-pink-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(251 207 232 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-pink-50:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(253 242 248 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-purple-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(233 213 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-red-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(254 202 202 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-white\/20:hover {
        background-color: hsla(0, 0%, 100%, 0.2);
    }
    #webcrumbs .hover\:bg-yellow-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(254 240 138 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:text-pink-500:hover {
        --tw-text-opacity: 1;
        color: rgb(236 72 153 / var(--tw-text-opacity));
    }
    #webcrumbs .hover\:text-pink-600:hover {
        --tw-text-opacity: 1;
        color: rgb(219 39 119 / var(--tw-text-opacity));
    }
    #webcrumbs .hover\:text-purple-600:hover {
        --tw-text-opacity: 1;
        color: rgb(147 51 234 / var(--tw-text-opacity));
    }
    #webcrumbs .hover\:opacity-90:hover {
        opacity: 0.9;
    }
    #webcrumbs .hover\:shadow:hover {
        --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    }
    #webcrumbs .hover\:shadow-lg:hover,
    #webcrumbs .hover\:shadow:hover {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .hover\:shadow-lg:hover {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    }
    #webcrumbs .hover\:shadow-md:hover {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    }
    #webcrumbs .hover\:shadow-md:hover,
    #webcrumbs .hover\:shadow-xl:hover {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .hover\:shadow-xl:hover {
        --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    }
    #webcrumbs .focus\:border-pink-300:focus {
        --tw-border-opacity: 1;
        border-color: rgb(249 168 212 / var(--tw-border-opacity));
    }
    #webcrumbs .focus\:outline-none:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
    }
    #webcrumbs :is(.group:hover .group-hover\:block) {
        display: block;
    }
    @media (min-width: 768px) {
        #webcrumbs .md\:flex {
            display: flex;
        }
        #webcrumbs .md\:hidden {
            display: none;
        }
        #webcrumbs .md\:w-auto {
            width: auto;
        }
        #webcrumbs .md\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #webcrumbs .md\:flex-row {
            flex-direction: row;
        }
        #webcrumbs .md\:items-center {
            align-items: center;
        }
        #webcrumbs .md\:justify-between {
            justify-content: space-between;
        }
    }
    @media (min-width: 1024px) {
        #webcrumbs .lg\:col-span-2 {
            grid-column: span 2 / span 2;
        }
        #webcrumbs .lg\:w-1\/3 {
            width: 33.333333%;
        }
        #webcrumbs .lg\:w-2\/3 {
            width: 66.666667%;
        }
        #webcrumbs .lg\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        #webcrumbs .lg\:flex-row {
            flex-direction: row;
        }
    }
</style>
