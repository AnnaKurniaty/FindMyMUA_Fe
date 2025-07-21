<template
    ><div id="webcrumbs">
        <div class="w-full min-h-screen">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span class="material-symbols-outlined">person</span> Profile Information
                            </h2>
                            <button
                                 @click="openEditModal"
                                class="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium hover:bg-primary-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-2">edit</span> Edit Profile
                            </button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <div class="flex items-center gap-4">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex items-center justify-center"
                                    >
                                        <span class="text-2xl">👤</span>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-gray-800">{{ profile?.name || 'Loading...' }}</h3>
                                        <p class="text-sm text-gray-600">Professional MUA</p>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <div class="flex items-center gap-3">
                                        <span class="material-symbols-outlined text-gray-600">badge</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Brand Name</p>
                                            <p class="text-sm text-gray-600">{{ profile?.name || '-' }}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <span class="material-symbols-outlined text-gray-600">email</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Email</p>
                                            <p class="text-sm text-gray-600">{{ profile?.email || '-' }}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <span class="material-symbols-outlined text-gray-600">phone</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Phone</p>
                                            <p class="text-sm text-gray-600">{{ profile?.phone || '-' }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div>
                                    <h4 class="font-semibold text-gray-800 mb-2">Professional Bio</h4>
                                    <p class="text-sm text-gray-600 leading-relaxed">
                                        {{ profile?.mua_profile?.bio || 'No bio yet.' }}
                                    </p>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 mb-2">Service Locations</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm"
                                            >
                                            {{ profile?.mua_profile?.service_area || 'Not specified' }}
                                            </span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">workspace_premium</span> Certifications &amp;
                            Specializations
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Certifications</h4>

                                <div v-if="parsedCertifications.length" class="space-y-3">
                                    <div
                                    v-for="(cert, i) in parsedCertifications"
                                    :key="i"
                                    class="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-shadow"
                                    :class="getCertBg(i)"
                                    >
                                    <div
                                        :class="getCertIconBg(i)"
                                        class="w-8 h-8 rounded-full flex items-center justify-center"
                                    >
                                        <span
                                        class="material-symbols-outlined text-sm"
                                        :class="getCertIconColor(i)"
                                        >
                                        verified
                                        </span>
                                    </div>
                                    <div>
                                        <p class="font-medium text-gray-800">{{ cert }}</p>
                                    </div>
                                    </div>
                                </div>

                                <p v-else class="text-sm text-gray-500">No certifications added.</p>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Specializations</h4>

                                <div v-if="parsedSpecializations.length" class="space-y-3">
                                    <div
                                    v-for="(item, i) in parsedSpecializations"
                                    :key="i"
                                    class="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-shadow"
                                    :class="getCertBg(i)"
                                    >
                                    <div
                                        :class="getCertIconBg(i)"
                                        class="w-8 h-8 rounded-full flex items-center justify-center"
                                    >
                                        <span
                                        class="material-symbols-outlined text-sm"
                                        :class="getCertIconColor(i)"
                                        >
                                        palette
                                        </span>
                                    </div>
                                    <div>
                                        <p class="font-medium text-gray-800">{{ item }}</p>
                                    </div>
                                    </div>
                                </div>

                                <p v-else class="text-sm text-gray-500">No specializations added.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">palette</span> Preferences &amp; Techniques
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Color Preferences</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center gap-2">
                                        <div class="w-4 h-4 bg-pink-300 rounded-full"></div>
                                        <span class="text-sm text-gray-600">Warm Tones</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-4 h-4 bg-purple-300 rounded-full"></div>
                                        <span class="text-sm text-gray-600">Cool Tones</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-4 h-4 bg-yellow-300 rounded-full"></div>
                                        <span class="text-sm text-gray-600">Neutral Tones</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Skin Tone Expertise</h4>
                                <div class="space-y-2">
                                    <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Fair</span>
                                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                                        >Medium</span
                                    >
                                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                                        >Deep</span
                                    >
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Techniques</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-pink-600 text-sm">brush</span>
                                        <span class="text-sm text-gray-600">Traditional</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-purple-600 text-sm">landscape</span>
                                        <span class="text-sm text-gray-600">Airbrush</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-yellow-600 text-sm"
                                            >auto_awesome</span
                                        >
                                        <span class="text-sm text-gray-600">Highlighting</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-6">
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">photo_library</span> Portfolio Photos
                        </h3>
                        <div class="grid grid-cols-2 gap-3 mb-4">
                            <div
                                class="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow"
                            >
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                            <div
                                class="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow"
                            >
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                            <div
                                class="aspect-square bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow"
                            >
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                            <div
                                class="aspect-square bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl flex items-center justify-center hover:shadow-sm transition-shadow"
                            >
                                <span class="material-symbols-outlined text-gray-400 text-2xl">image</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <button
                                class="w-full bg-pink-100 text-pink-800 px-4 py-3 rounded-xl font-medium hover:bg-pink-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-2">add_photo_alternate</span> Add
                                Photos
                            </button>
                            <button
                                class="w-full bg-purple-100 text-purple-800 px-4 py-3 rounded-xl font-medium hover:bg-purple-200 transition-colors"
                            >
                                <span class="material-symbols-outlined text-sm mr-2">folder_open</span> Manage Gallery
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    >
                        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined">trending_up</span> Profile Statistics
                        </h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Profile Views</span>
                                <span class="font-bold text-gray-800">124</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Bookings This Month</span>
                                <span class="font-bold text-gray-800">18</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Portfolio Likes</span>
                                <span class="font-bold text-gray-800">89</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Client Reviews</span>
                                <span class="font-bold text-gray-800">4.9 ⭐</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Edit Profile Modal -->
            <div
            v-if="showEditModal"
            class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
            >
            <div class="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-2xl relative my-auto">
                <div class="bg-white rounded-2xl p-6 mb-6 overflow-y-auto max-h-[80vh]">
                    <div class="flex justify-between items-center mb-6">
                        <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span class="material-symbols-outlined">edit</span> Edit MUA Profile
                        </h1>
                        <button @click="closeEditModal" type="button" class="text-gray-500 hover:text-gray-700 transition-colors">
                            <span class="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <form class="space-y-8 overflow-y-auto">
                        <div class="space-y-6">
                            <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                Basic Information
                            </h2>
                            <div class="flex flex-col md:flex-row gap-6">
                                <div class="w-full md:w-1/3 flex flex-col items-center">
                                    <div
                                        class="relative group w-40 h-40 rounded-full overflow-hidden border-4 border-primary-100 hover:border-primary-300 transition-all duration-300"
                                    >
                                        <div
                                            class="w-full h-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center"
                                        >
                                            <span class="text-4xl">👤</span>
                                        </div>
                                        <div
                                            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <button
                                                type="button"
                                                class="bg-white rounded-full p-2 hover:bg-primary-100 transition-colors"
                                            >
                                                <span class="material-symbols-outlined">add_a_photo</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-2">Upload Profile Photo</p>
                                </div>
                                <div class="w-full md:w-2/3 space-y-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1"
                                                >Brand Name</label
                                            >
                                            <input
                                                type="text"
                                                v-model="editForm.name"
                                                id="name"
                                                class="w-full px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                                placeholder="Your MUA Brand Name"
                                            />
                                        </div>
                                        <div>
                                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1"
                                                >Email</label
                                            >
                                            <input
                                                type="email"
                                                id="email"
                                                v-model="editForm.email"
                                                class="w-full px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1"
                                                >Phone Number</label
                                            >
                                            <input
                                                type="tel"
                                                id="phone"
                                                v-model="editForm.phone"
                                                class="w-full px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                                placeholder="+1 (234) 567-8901"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                for="service-area"
                                                class="block text-sm font-medium text-gray-700 mb-1"
                                                >Service Area</label
                                            >
                                            <input
                                                type="text"
                                                id="service-area"
                                                v-model="editForm.service_area"
                                                class="w-full px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                                placeholder="E.g., Los Angeles, CA"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="bio" class="block text-sm font-medium text-gray-700 mb-1"
                                            >Professional Bio</label
                                        >
                                        <textarea
                                            id="bio"
                                            rows="4"
                                            v-model="editForm.bio"
                                            class="w-full px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                            placeholder="Tell clients about yourself, your experience, and your makeup philosophy..."
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6">
                        <label class="block text-sm font-medium text-gray-700">Certifications</label>
                        <!-- Input dan Tambah -->
                        <div class="flex items-center gap-2">
                            <input
                            type="text"
                            v-model="newCertification"
                            class="flex-1 px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                            placeholder="Add certification"
                            />
                            <button
                            type="button"
                            @click="addCertification"
                            class="p-3 bg-pink-100 text-pink-800 rounded-full hover:bg-pink-200 transition-colors"
                            >
                            <span class="material-symbols-outlined">add</span>
                            </button>
                        </div>

                        <!-- Daftar Certification -->
                        <div v-if="editForm.certification.length" class="space-y-2">
                            <div
                            v-for="(cert, i) in editForm.certification"
                            :key="i"
                            class="flex items-center gap-3 p-3 rounded-xl bg-pink-50 hover:shadow-sm transition-shadow"
                            >
                            <div
                                class="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center"
                            >
                                <span class="material-symbols-outlined text-sm text-pink-600">verified</span>
                            </div>
                            <div class="flex-1">
                                <p class="font-medium text-gray-800">{{ cert }}</p>
                            </div>
                            <button
                                type="button"
                                @click="removeCertification(i)"
                                class="text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <span class="material-symbols-outlined">delete</span>
                            </button>
                            </div>
                        </div>
                        <p v-else class="text-sm text-gray-500">No certifications added.</p>
                        </div>
                        <div class="space-y-6">
                            <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                Preferences &amp; Techniques
                            </h2>
                            <div class="grid grid-cols-1 md:grid-cols-3 text-gray-700 gap-6">
                                <div class="space-y-4">
                                    <label class="block text-sm font-medium text-gray-700">Makeup Style</label>
                                    <div class="space-y-2">
                                        <div class="flex flex-wrap gap-4">
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="color_preference[]" value="Natural" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Natural</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="color_preference[]" value="Soft Glam" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Soft Glam</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="color_preference[]" value="Bold" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Bold</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="color_preference[]" value="Warm" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Warm</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="color_preference[]" value="Cool" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Cool</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <label class="block text-sm font-medium text-gray-700">Skin Tone Expertise</label>
                                    <div class="space-y-2">
                                        <div class="flex flex-wrap gap-4">
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="skin_tone[]" value="Fair" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Fair</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="skin_tone[]" value="Medium" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Medium</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="skin_tone[]" value="Olive" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Olive</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="skin_tone[]" value="Tan" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Tan</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                            <input type="checkbox" name="skin_tone[]" value="Deep" class="form-checkbox text-pink-600">
                                            <span class="ml-2">Deep</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                Availability Schedule
                            </h2>
                            <div class="space-y-6">
                                <div class="space-y-4">
                                    <label class="block text-sm font-medium text-gray-700">Available Days</label>
                                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
                                        <div class="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="monday"
                                                class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 mr-2"
                                            />
                                            <label
                                                for="monday"
                                                class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                                            >
                                                Monday
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="tuesday"
                                                class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 mr-2"
                                            />
                                            <label
                                                for="tuesday"
                                                class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                                            >
                                                Tuesday
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="wednesday"
                                                class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 mr-2"
                                            />
                                            <label
                                                for="wednesday"
                                                class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                                            >
                                                Wednesday
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="thursday"
                                                class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 mr-2"
                                            />
                                            <label
                                                for="thursday"
                                                class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                                            >
                                                Thursday
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="friday"
                                                class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 mr-2"
                                            />
                                            <label
                                                for="friday"
                                                class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                                            >
                                                Friday
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="saturday"
                                                class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 mr-2"
                                            />
                                            <label
                                                for="saturday"
                                                class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                                            >
                                                Saturday
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="sunday"
                                                class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 mr-2"
                                            />
                                            <label
                                                for="sunday"
                                                class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                                            >
                                                Sunday
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label for="start-time" class="block text-sm font-medium text-gray-700 mb-1"
                                            >Available Start Time</label
                                        >
                                        <div class="relative">
                                            <input
                                                type="time"
                                                id="start-time"
                                                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                            />
                                            <span
                                                class="absolute right-3 top-1/2 transform -translate-y-1/2 material-symbols-outlined text-gray-400"
                                            >
                                                schedule
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="end-time" class="block text-sm font-medium text-gray-700 mb-1"
                                            >Available End Time</label
                                        >
                                        <div class="relative">
                                            <input
                                                type="time"
                                                id="end-time"
                                                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                            />
                                            <span
                                                class="absolute right-3 top-1/2 transform -translate-y-1/2 material-symbols-outlined text-gray-400"
                                            >
                                                schedule
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                                    <div class="flex items-start gap-2">
                                        <span class="material-symbols-outlined text-yellow-600 mt-0.5">info</span>
                                        <p class="text-sm text-gray-700">
                                            Setting your availability helps clients know when they can book your
                                            services. You can always update this information later.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 pt-4 border-t border-gray-200">
                            <button
                                type="submit"
                                class="flex-1 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors transform hover:-translate-y-1 duration-300"
                            >
                                <span class="material-symbols-outlined text-sm mr-2">save</span> Save Changes
                            </button>
                            <button
                                type="button"
                                @click="closeEditModal"
                                class="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-300 transition-colors transform hover:-translate-y-1 duration-300"
                            >
                                <span class="material-symbols-outlined text-sm mr-2">cancel</span> Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
</div>

        </div>
    </div>
</template>


<script setup>
import { ref, reactive, onMounted, computed } from 'vue'

const profile = ref(null)
const showEditModal = ref(false)
const certColors = ['pink', 'purple', 'yellow']

function getCertBg(index) {
  return `bg-${certColors[index % certColors.length]}-50`
}
function getCertIconBg(index) {
  return `bg-${certColors[index % certColors.length]}-200`
}
function getCertIconColor(index) {
  return `text-${certColors[index % certColors.length]}-600`
}

function closeEditModal() {
  showEditModal.value = false
}

const editForm = reactive({
    name: '',
    email: '',
    phone: '',
    bio: '',
    certification: [''],
    service_area: '',
    studio_lat: '',
    studio_lng: '',
    available_days: [],
    available_start_time: '',
    available_end_time: '',
    makeup_specializations: [],
    makeup_styles: [],
    skin_type: [],
    profile_photo: null
})

const parsedCertifications = computed(() => {
  if (!profile.value || !profile.value.mua_profile) return []
  try {
    return JSON.parse(profile.value.mua_profile.certification || '[]')
  } catch {
    return []
  }
})

const parsedSpecializations = computed(() => {
  if (!profile.value || !profile.value.mua_profile) return []
  try {
    return JSON.parse(profile.value.mua_profile.makeup_specializations || '[]')
  } catch {
    return []
  }
})

const fetchProfile = async () => {
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('user_id')

  try {
    const response = await fetch(`http://localhost:8000/api/mua/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const data = await response.json()
    profile.value = data
  } catch (error) {
    console.error('Error fetching profile:', error)
  }
}

function openEditModal() {
  if (profile.value) {
    editForm.name = profile.value.name || ''
    editForm.email = profile.value.email || ''
    editForm.phone = profile.value.phone || ''
    editForm.service_area = profile.value.mua_profile?.service_area || ''
    editForm.bio = profile.value.mua_profile?.bio || ''
    editForm.certification = parsedCertifications.value || []
    editForm.makeup_specializations = parsedSpecializations.value || []
  }
  showEditModal.value = true
}

async function submitEditForm(e) {
  e.preventDefault()

  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('user_id')

  const payload = {
    name: editForm.name,
    email: editForm.email,
    phone: editForm.phone,
    mua_profile: {
      service_area: editForm.service_area,
      bio: editForm.bio,
      certification: JSON.stringify(editForm.certifications),
      makeup_specializations: JSON.stringify(editForm.specializations)
    }
  }

  try {
    const res = await fetch(`http://localhost:8000/api/mua/profile/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      throw new Error('Failed to update profile')
    }

    const updated = await res.json()
    profile.value = updated
    closeEditModal()
  } catch (err) {
    console.error('Error updating profile:', err)
  }
}

onMounted(fetchProfile)
</script>
