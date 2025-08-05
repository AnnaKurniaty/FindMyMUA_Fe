<template>
    <div id="webcrumbs">
        <div class="w-full min-h-screen text-gray-800">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">

                    <!-- PROFILE INFORMATION Section -->
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span class="material-symbols-outlined">person</span>
                                Profile Information
                            </h2>
                            <button
                                @click="openEditModal"
                                class="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium hover:bg-primary-200 transition-colors">
                                <span class="material-symbols-outlined text-sm mr-2">edit</span>
                                Edit Profile
                            </button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <div class="flex items-center gap-4">
                                    <div>
                                        <h3 class="font-semibold text-gray-800">{{ profile?.name || 'Loading...' }}
                                        </h3>
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
                                        <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                                            {{ profile?.mua_profile?.service_area || 'Not specified' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300"
                    >
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">workspace_premium</span> Certifications &amp;
                            Specializations
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold mb-3">Certifications</h4>
                                <div class="space-y-3" v-if="parsedCertifications.length > 0">
                                    <div class="flex flex-wrap gap-3">
                                        <span 
                                            v-for="(cert, index) in parsedCertifications"
                                            :key="index"
                                            class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium"
                                            :class="getBg(index)"
                                        >
                                            <span class="material-symbols-outlined text-sm mr-2"
                                                  :class="getIconColor(index)">verified</span>
                                            {{ cert }}
                                        </span>
                                    </div>
                                </div>
                                <div v-else class="text-gray-500 text-sm italic">
                                    No certifications added yet.
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Specializations</h4>
                                <div class="space-y-3" v-if="parsedSpecializations.length > 0">
                                    <div
                                        v-for="(spec, index) in parsedSpecializations"
                                        :key="index"
                                        class="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-shadow"
                                        :class="getBg(index)"
                                    >
                                        <div class="w-8 h-8 rounded-full flex items-center justify-center"
                                             :class="getIconBg(index)">
                                            <span class="material-symbols-outlined text-sm"
                                                  :class="getIconColor(index)">palette</span>
                                        </div>
                                        <div><p class="text-sm text-gray-800">{{ spec }}</p></div>
                                    </div>
                                </div>
                                <div v-else class="text-gray-500 text-sm italic">
                                    No specializations added yet.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300"
                    >
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">palette</span> Preferences &amp; Techniques
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Makeup Styles</h4>
                                <div class="space-y-2" v-if="parsedMakeupStyles.length > 0">
                                    <div 
                                        v-for="(style, index) in parsedMakeupStyles"
                                        :key="index"
                                        class="flex items-center gap-2"
                                    >
                                        <div class="w-8 h-8 rounded flex items-center justify-center"
                                             :class="getIconBg(index)">
                                            <span class="material-symbols-outlined text-sm"
                                                  :class="getIconColor(index)">brush</span>
                                        </div>
                                        <div><p class="text-sm text-gray-800">{{ style }}</p></div>
                                    </div>
                                </div>
                                <div v-else class="text-gray-500 text-sm italic">
                                    No makeup styles specified yet.
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Skin Types Expertise</h4>
                                <div class="flex flex-wrap gap-3" v-if="parsedSkinTypes.length > 0">
                                    <span 
                                        v-for="(skinType, index) in parsedSkinTypes"
                                        :key="index"
                                        class="px-3 py-1 rounded-full text-sm"
                                        :class="getSkinTypeStyle(skinType)"
                                    >
                                        {{ skinType }}
                                    </span>
                                </div>
                                <div v-else class="text-gray-500 text-sm italic">
                                    No skin type expertise specified yet.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PORTFOLIO Section -->
                <div class="space-y-6">
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">photo_library</span> Portfolio Photos
                        </h3>
                        <div class="grid grid-cols-2 gap-3 mb-4">
                            <div
                                v-for="(service, index) in services"
                                :key="index"
                                class="aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <img
                                v-if="service.service_photo_url"
                                :src="service.service_photo_url"
                                alt="Portfolio Image"
                                class="w-full h-full object-cover"
                                loading="lazy"
                                @error="handleImageError"
                                />
                                <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                                <span class="material-symbols-outlined text-2xl">image_not_supported</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div
                            class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                        >
                            <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined">schedule</span> Availability Schedule
                            </h3>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <h4 class="font-semibold text-gray-800">Available Days</h4>
                                </div>
                                <div class="flex flex-wrap gap-2" v-if="parsedAvailableDays.length > 0">
                                    <span 
                                        v-for="day in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']"
                                        :key="day"
                                        class="px-3 py-1 rounded-full text-sm"
                                        :class="parsedAvailableDays.includes(day) ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-500'"
                                    >
                                        {{ day }}
                                    </span>
                                </div>
                                <div v-else class="text-gray-500 text-sm italic">
                                    No availability schedule set yet.
                                </div>
                                <div class="pt-4 border-t border-gray-100" v-if="profile?.mua_profile?.available_start_time || profile?.mua_profile?.available_end_time">
                                    <h4 class="font-semibold text-gray-800 mb-3">Working Hours</h4>
                                    <div class="space-y-2">
                                        <div class="flex items-center gap-3">
                                            <span class="material-symbols-outlined text-pink-600 text-sm">schedule</span>
                                            <div>
                                                <p class="text-sm text-gray-600">
                                                    {{ formatTime(profile?.mua_profile?.available_start_time) || '09:00' }} - 
                                                    {{ formatTime(profile?.mua_profile?.available_end_time) || '17:00' }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="pt-4 border-t border-gray-100">
                                    <h4 class="font-semibold text-gray-800 mb-3">Working Hours</h4>
                                    <div class="text-gray-500 text-sm italic">
                                        No working hours specified yet.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
            v-if="showEditModal"
            class="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
            >
                <div class="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-2xl relative my-auto overflow-y-auto">
                    <div class="bg-white rounded-2xl p-6 mb-6 overflow-y-auto max-h-[80vh]">
                        <div class="flex justify-between items-center mb-6">
                            <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <span class="material-symbols-outlined">edit</span> Edit MUA Profile
                            </h1>
                            <button @click="closeEditModal" type="button" class="text-gray-500 hover:text-gray-700 transition-colors">
                                <span class="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form class="space-y-8 overflow-y-auto" @submit.prevent="saveEdit">
                            <div class="space-y-6">
                                <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                    Basic Information
                                </h2>
                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="w-full md:w-1/3 flex flex-col items-center">
                                        <div
                                            class="relative group w-40 h-40 rounded-full overflow-hidden border-4 border-primary-100 hover:border-primary-300 transition-all duration-300 cursor-pointer"
                                            @click="triggerFileInput"
                                        >
                                            <div class="w-full h-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center">
                                              <span v-if="!previewUrl && !editForm.profile_photo" class="text-4xl">👤</span>
                                                <img
                                                    v-else
                                                    :src="previewUrl ? previewUrl : editForm.profile_photo"
                                                    alt="Profile Preview"
                                                    class="w-full h-full object-cover"
                                                />
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
                                            <input type="file" ref="fileInput" accept="image/*" class="hidden" @change="handleFileChange" />
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
                                <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                    Certifications & Specializations
                                </h2>
                                
                                <!-- Certifications Section -->
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Certifications</label>
                                    <!-- Input dan Tambah -->
                                    <div class="flex items-center gap-2 mb-3">
                                        <input
                                        type="text"
                                        v-model="newCertification"
                                        class="flex-1 px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                        placeholder="Add certification"
                                        @keyup.enter="addCertification"
                                        />
                                        <button
                                        type="button"
                                        @click="addCertification"
                                        class="px-4 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
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

                                <!-- Specializations Section -->
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Specializations</label>
                                    <!-- Input dan Tambah -->
                                    <div class="flex items-center gap-2 mb-3">
                                        <input
                                        type="text"
                                        v-model="newSpecialization"
                                        class="flex-1 px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                        placeholder="Add specialization"
                                        @keyup.enter="addSpecialization"
                                        />
                                        <button
                                        type="button"
                                        @click="addSpecialization"
                                        class="px-4 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
                                        >
                                        <span class="material-symbols-outlined">add</span>
                                        </button>
                                    </div>

                                    <!-- Daftar Specializations -->
                                    <div v-if="editForm.makeup_specializations.length" class="space-y-2">
                                        <div
                                        v-for="(spec, i) in editForm.makeup_specializations"
                                        :key="i"
                                        class="flex items-center gap-3 p-3 rounded-xl bg-purple-50 hover:shadow-sm transition-shadow"
                                        >
                                        <div
                                            class="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center"
                                        >
                                            <span class="material-symbols-outlined text-sm text-purple-600">palette</span>
                                        </div>
                                        <div class="flex-1">
                                            <p class="font-medium text-gray-800">{{ spec }}</p>
                                        </div>
                                        <button
                                            type="button"
                                            @click="removeSpecialization(i)"
                                            class="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <span class="material-symbols-outlined">delete</span>
                                        </button>
                                        </div>
                                    </div>
                                    <p v-else class="text-sm text-gray-500">No specializations added.</p>
                                </div>
                            </div>
                            <div class="space-y-6">
                                <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                    Preferences &amp; Techniques
                                </h2>
                                <div class="grid grid-cols-1 md:grid-cols-3 text-gray-700 gap-6">
                                    <div class="mb-4">
                                        <label class="block text-sm font-medium text-gray-700">Makeup Style</label>
                                        <div class="flex flex-wrap gap-4 mt-2">
                                            <label v-for="style in ['Natural', 'Soft Glam', 'Bold', 'Warm', 'Cool']" :key="style" class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="form-checkbox text-pink-600"
                                                :value="style"
                                                v-model="editForm.makeup_styles"
                                            />
                                            <span class="ml-2">{{ style }}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-sm font-medium text-gray-700">Skin Tone</label>
                                        <div class="flex flex-wrap gap-4 mt-2">
                                            <label v-for="style in ['Oily', 'Normal', 'Dry', 'Combination', 'Sensitif']" :key="style" class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="form-checkbox text-pink-600"
                                                :value="style"
                                                v-model="editForm.skin_type"
                                            />
                                            <span class="ml-2">{{ style }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-6">
                                <h2 class="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                    Availability Schedule
                                </h2>
                                <div class="space-y-6 text-gray-700">
                                    <div class="space-y-4">
                                        <label class="block text-sm font-medium text-gray-700">Available Days</label>
                                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                            <label
                                            v-for="day in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']"
                                            :key="day"
                                            class="inline-flex items-center"
                                            >
                                            <input
                                                type="checkbox"
                                                class="form-checkbox text-pink-600"
                                                :value="day"
                                                v-model="editForm.available_days"
                                            />
                                            <span class="ml-2">{{ day }}</span>
                                            </label>
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
                                                    v-model="editForm.available_start_time"
                                                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="end-time" class="block text-sm font-medium text-gray-700 mb-1"
                                                >Available End Time</label
                                            >
                                            <div class="relative">
                                                <input
                                                    type="time"
                                                    v-model="editForm.available_end_time"
                                                    id="end-time"
                                                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                                />
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
import { apiFetch } from '@/config'

const showEditModal = ref(false)
function closeEditModal() {
  showEditModal.value = false
}
const userId = localStorage.getItem('user_id')
const profile = ref(null)
const parsedSkinTypes = ref([])
const parsedMakeupStyles = ref([])
const parsedCertifications = ref([])
const parsedSpecializations = ref([])
const parsedAvailableDays = ref([])
const customColors = ['pink', 'purple', 'yellow']

function getBg(index) {
    return `bg-${customColors[index % customColors.length]}-100`
}
function getIconBg(index) {
    return `bg-${customColors[index % customColors.length]}-200`
}
function getIconColor(index) {
    return `text-${customColors[index % customColors.length]}-600`
}

// Function to get skin type specific styling to match the image
function getSkinTypeStyle(skinType) {
    const skinTypeStyles = {
        'Oily': 'bg-pink-100 text-pink-800',
        'Normal': 'bg-purple-100 text-purple-800', 
        'Combination': 'bg-yellow-100 text-yellow-800',
        'Dry': 'bg-pink-200 text-pink-600',
        'Sensitif': 'bg-green-100 text-green-800'
    }
    return skinTypeStyles[skinType] || 'bg-gray-100 text-gray-800'
}

const services = ref([])

async function fetchServices() {
  const token = localStorage.getItem('token')
  try {
    const data = await apiFetch('/mua/services', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    services.value = data
  } catch (err) {
    console.error('Failed to load services', err)
  }
}

// Helper function to parse array data and handle comma-separated strings
function parseArrayData(data) {
//   console.log('parseArrayData called with:', typeof data, data);
  
  if (!data) {
    // console.log('parseArrayData returning empty array');
    return []
  }
  
  // If data is already an array, return it directly
  if (Array.isArray(data)) {
    const result = data.filter(item => item && item.toString().trim().length > 0)
    // console.log('parseArrayData returning array result:', result);
    return result
  }
  
  // If data is a string, try to parse it
  if (typeof data === 'string') {
    // console.log('parseArrayData processing string');
    // Remove any extra quotes and whitespace
    const cleanData = data.trim()
    
    // Try to parse as JSON first
    try {
      const parsed = JSON.parse(cleanData)
      if (Array.isArray(parsed)) {
        const result = parsed.filter(item => item && item.toString().trim().length > 0)
        // console.log('parseArrayData returning parsed JSON array:', result);
        return result
      }
      // If it's a single item from JSON, return as array
      const result = [parsed].filter(item => item && item.toString().trim().length > 0)
    //   console.log('parseArrayData returning single item from JSON:', result);
      return result
    } catch (e) {
    //   console.log('parseArrayData JSON parsing failed, treating as comma-separated');
      // If JSON parsing fails, treat as comma-separated string
      if (cleanData.includes(',')) {
        const result = cleanData.split(',').map(item => item.trim()).filter(item => item.length > 0)
        // console.log('parseArrayData returning comma-separated result:', result);
        return result
      }
      // Single item
      const result = cleanData.length > 0 ? [cleanData] : []
    //   console.log('parseArrayData returning single item result:', result);
      return result
    }
  }
  
  // For other data types, convert to string and return as single item array
  const result = data.toString().trim().length > 0 ? [data.toString().trim()] : []
//   console.log('parseArrayData returning converted result:', result);
  return result
}

// Helper function to ensure array data is properly formatted for sending to backend
function formatArrayForBackend(data) {
  if (!data) {
    return []
  }
  
  // If data is already an array, return as is (backend will handle JSON conversion)
  if (Array.isArray(data)) {
    return data
  }
  
  // If data is a string, check if it's already JSON
  if (typeof data === 'string') {
    // Try to parse as JSON first
    try {
      const parsed = JSON.parse(data)
      if (Array.isArray(parsed)) {
        // console.log('formatArrayForBackend returning parsed JSON array');
        return parsed
      }
    // If it's a single item from JSON, wrap in array
      return [parsed]
    } catch (e) {
      // If JSON parsing fails, treat as comma-separated string and convert to array
      if (data.includes(',')) {
        const result = data.split(',').map(item => item.trim()).filter(item => item.length > 0)
        // console.log('formatArrayForBackend returning comma-separated result:', result);
        return result
      }
      // Single item
      const result = data.length > 0 ? [data.trim()] : []
      return result
    }
  }
  
  // For other data types, convert to string and wrap in array
  const result = data.toString().trim().length > 0 ? [data.toString().trim()] : []
  return result
}

onMounted(async () => {
  try {
    const data = await apiFetch(`/mua/profile`, {});
    profile.value = data

    // console.log('Raw profile data:', data.mua_profile)

    if (data.mua_profile?.certification) {
    //   console.log('Raw certification data:', data.mua_profile.certification)
      parsedCertifications.value = parseArrayData(data.mua_profile.certification)
    //   console.log('Parsed certifications:', parsedCertifications.value)
    }

    if (data.mua_profile?.makeup_specializations) {
    //   console.log('Raw specializations data:', data.mua_profile.makeup_specializations)
      parsedSpecializations.value = parseArrayData(data.mua_profile.makeup_specializations)
    //   console.log('Parsed specializations:', parsedSpecializations.value)
    }

    if (data.mua_profile?.makeup_styles) {
    //   console.log('Raw makeup styles data:', data.mua_profile.makeup_styles)
      parsedMakeupStyles.value = parseArrayData(data.mua_profile.makeup_styles)
    //   console.log('Parsed makeup styles:', parsedMakeupStyles.value)
    }

    if (data.mua_profile?.skin_type) {
    //   console.log('Raw skin type data:', data.mua_profile.skin_type)
      parsedSkinTypes.value = parseArrayData(data.mua_profile.skin_type)
    //   console.log('Parsed skin types:', parsedSkinTypes.value)
    }

    if (data.mua_profile?.available_days) {
    //   console.log('Raw available days data:', data.mua_profile.available_days)
      parsedAvailableDays.value = parseArrayData(data.mua_profile.available_days)
    //   console.log('Parsed available days:', parsedAvailableDays.value)
    }
  } catch (err) {
    console.error('Error loading profile:', err)
  }
  fetchServices()
})

// Upload Image Portfolio
const isModalOpen = ref(false)
const previewUrl = ref(null)
const selectedFile = ref(null)
const fileInput = ref(null)

const triggerFileInput = () => {
    fileInput.value?.click()
}

const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        selectedFile.value = file
        previewUrl.value = URL.createObjectURL(file)
    }
}

function openEditModal() {
  if (profile.value) {
    showEditModal.value = true
    // User fields (from User table)
    editForm.name = profile.value.name || ''
    editForm.email = profile.value.email || ''
    editForm.phone = profile.value.phone || ''
    // MUA Profile fields (from MuaProfile table)
    editForm.bio = profile.value.mua_profile?.bio || ''
    editForm.service_area = profile.value.mua_profile?.service_area || ''
    // Parse JSON strings to arrays if needed
    editForm.certification = parseArrayData(profile.value.mua_profile?.certification)
    editForm.makeup_specializations = parseArrayData(profile.value.mua_profile?.makeup_specializations)
    editForm.makeup_styles = parseArrayData(profile.value.mua_profile?.makeup_styles)
    editForm.skin_type = parseArrayData(profile.value.mua_profile?.skin_type)
    editForm.available_days = parseArrayData(profile.value.mua_profile?.available_days)
    editForm.available_start_time = profile.value.mua_profile?.available_start_time || ''
    editForm.available_end_time = profile.value.mua_profile?.available_end_time || ''
    editForm.profile_photo = profile.value.mua_profile?.profile_photo_url || null
    
    // Debug logging untuk available days
    // console.log('Opening edit modal with available days:', editForm.available_days)
    // console.log('Parsed certification data:', editForm.certification)
    // console.log('Parsed specializations data:', editForm.makeup_specializations)
    // console.log('Parsed makeup styles data:', editForm.makeup_styles)
    // console.log('Parsed skin type data:', editForm.skin_type)
    
    // Log the entire editForm for debugging
    // console.log('Edit form initialized:', editForm)
  }
}
const editForm = reactive({
    // User fields (handled by MeController)
    name: '',
    email: '',
    phone: '',
    // MUA Profile fields (handled by MuaProfileController)
    bio: '',
    certification: [],
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

const removeImage = () => {
    selectedFile.value = null
    previewUrl.value = null
    fileInput.value.value = ''
}

// New variables for adding certifications and specializations
const newCertification = ref('')
const newSpecialization = ref('')

// Functions for managing certifications
function addCertification() {
  if (newCertification.value.trim()) {
    editForm.certification.push(newCertification.value.trim())
    newCertification.value = ''
  }
}

function removeCertification(index) {
  editForm.certification.splice(index, 1)
}

// Functions for managing specializations
function addSpecialization() {
  if (newSpecialization.value.trim()) {
    editForm.makeup_specializations.push(newSpecialization.value.trim())
    newSpecialization.value = ''
  }
}

function removeSpecialization(index) {
  editForm.makeup_specializations.splice(index, 1)
}

async function saveEdit() {
  try {
    // Update user data (name, email, phone) via MeController
    if (editForm.name || editForm.email || editForm.phone) {
      const userData = {};
      if (editForm.name) userData.name = editForm.name;
      if (editForm.email) userData.email = editForm.email;
      if (editForm.phone) userData.phone = editForm.phone;

      // Only send request if there's actual data to update
      if (Object.keys(userData).length > 0) {
        await apiFetch('/me', {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
      }
    }

    // Update MUA profile data via MuaProfileController
    const profileData = {};
    
    // Add basic fields
    if (editForm.bio !== undefined) profileData.bio = editForm.bio;
    if (editForm.service_area !== undefined) profileData.service_area = editForm.service_area;
    if (editForm.available_start_time !== undefined) profileData.available_start_time = editForm.available_start_time;
    if (editForm.available_end_time !== undefined) profileData.available_end_time = editForm.available_end_time;
    
    // Add JSON fields - ensure they're properly formatted
    profileData.certification = formatArrayForBackend(editForm.certification);
    profileData.makeup_specializations = formatArrayForBackend(editForm.makeup_specializations);
    profileData.makeup_styles = formatArrayForBackend(editForm.makeup_styles);
    profileData.skin_type = formatArrayForBackend(editForm.skin_type);
    profileData.available_days = formatArrayForBackend(editForm.available_days);

    // console.log('Sending profile data:', profileData);
    // console.log('Certification data type:', typeof editForm.certification, 'value:', editForm.certification);
    // console.log('Formatted certification:', formatArrayForBackend(editForm.certification));

    // Handle file upload if needed
    if (selectedFile.value) {
      const profileFormData = new FormData();
      // Add all JSON fields as strings
      Object.keys(profileData).forEach(key => {
        const value = profileData[key];
        if (Array.isArray(value)) {
          profileFormData.append(key, JSON.stringify(value));
        } else {
          profileFormData.append(key, value ?? '');
        }
      });

      if (selectedFile.value instanceof File) {
        profileFormData.append('profile_photo', selectedFile.value);
      }

      profileFormData.append('_method', 'PUT');
     
      await apiFetch('/mua/profile', {
        method: 'POST',
        body: profileFormData
      });
    } else {
      // Send as JSON for consistency
      await apiFetch('/mua/profile', {
        method: 'PUT',
        body: JSON.stringify(profileData)
      });
    }

    // console.log('Profile updated successfully');
    alert('Profile updated successfully!');
    closeEditModal();
    
    // Reload profile data instead of full page reload
    const data = await apiFetch(`/mua/profile`, {});
    profile.value = data

    if (data.mua_profile?.certification) {
      parsedCertifications.value = parseArrayData(data.mua_profile.certification)
    }

    if (data.mua_profile?.makeup_specializations) {
      parsedSpecializations.value = parseArrayData(data.mua_profile.makeup_specializations)
    }

    if (data.mua_profile?.makeup_styles) {
      parsedMakeupStyles.value = parseArrayData(data.mua_profile.makeup_styles)
    }

    if (data.mua_profile?.skin_type) {
      parsedSkinTypes.value = parseArrayData(data.mua_profile.skin_type)
    }

    if (data.mua_profile?.available_days) {
      parsedAvailableDays.value = parseArrayData(data.mua_profile.available_days)
    }
    
  } catch (err) {
    console.error('Failed to save changes:', err);
      console.error('Error details:', err.response || err);
    // console.log('Error details:', err.response || err);
    
    alert('Failed to save profile. Please check console for details.');
  }
}

// Handle image loading errors
function handleImageError(event) {
//   console.log('Image failed to load:', event.target.src)
  // Hide the broken image by setting display to none
  event.target.style.display = 'none'
  // Show the fallback icon container
  const fallbackDiv = event.target.nextElementSibling
  if (fallbackDiv) {
    fallbackDiv.style.display = 'flex'
  }
}

// Format time from HH:MM:SS to HH:MM
function formatTime(timeString) {
  if (!timeString) return null
  // If time is in HH:MM:SS format, extract HH:MM
  if (timeString.includes(':')) {
    const parts = timeString.split(':')
    return `${parts[0]}:${parts[1]}`
  }
  return timeString
}
</script>