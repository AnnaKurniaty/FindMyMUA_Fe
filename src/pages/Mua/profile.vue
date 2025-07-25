<template>
    <div id="webcrumbs">
        <div class="w-full min-h-screen">
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

                    <!-- CERTIFICATIONS & SPECIALIZATIONS Section -->
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">workspace_premium</span> Certifications &amp;
                            Specializations
                        </h3>
                        <!-- Certifications -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Certifications</h4>

                                <div v-if="parsedCertifications.length" class="space-y-3">
                                    <div v-for="(cert, i) in parsedCertifications" :key="i"
                                        class="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-shadow"
                                        :class="getBg(i)">
                                        <div :class="getIconBg(i)"
                                            class="w-8 h-8 rounded-full flex items-center justify-center">
                                            <span class="material-symbols-outlined text-sm" :class="getIconColor(i)">
                                                verified
                                            </span>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-800">{{ cert }}</p>
                                        </div>
                                    </div>
                                </div>

                                <p v-else class="text-sm text-gray-500">No certification(s) added.</p>
                            </div>

                            <!-- Specializations -->
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Specializations</h4>

                                <div v-if="parsedSpecializations.length" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div v-for="(item, i) in parsedSpecializations" :key="i"
                                        class="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-shadow"
                                        :class="getBg(i)">
                                        <div :class="getIconBg(i)"
                                            class="w-8 h-8 rounded-full flex items-center justify-center">
                                            <span class="material-symbols-outlined text-sm" :class="getIconColor(i)">
                                                palette
                                            </span>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-800">{{ item }}</p>
                                        </div>
                                    </div>
                                </div>
                                <p v-else class="text-sm text-gray-500">No specialization(s) added.</p>
                            </div>
                        </div>
                    </div>

                    <!-- PREFERENCES & TECHNIQUES Section -->
                    <div
                        class="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined">palette</span>
                            Preferences &amp; Techniques
                        </h3>

                        <!-- Makeup Styles -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Makeup Styles</h4>

                                <div v-if="parsedMakeupStyles.length" class="space-y-2">
                                    <div v-for="(style, i) in parsedMakeupStyles" :key="i"
                                        class="flex items-center gap-2">
                                        <div :class="getIconBg(i)"
                                            class="w-8 h-8 rounded flex items-center justify-center">
                                            <span class="material-symbols-outlined text-sm" :class="getIconColor(i)">
                                                brush
                                            </span>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-600">{{ style }}</p>
                                        </div>
                                    </div>
                                </div>
                                <p v-else class="text-sm text-gray-500">No makeup style(s) added.</p>
                            </div>

                            <!-- Skin Types Expertise -->
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Skin Types Expertise</h4>

                                <div v-if="parsedSkinTypes.length" class="flex flex-col md:flex-row flex-wrap gap-3">
                                    <span v-for="(skinType, i) in parsedSkinTypes" :key="i" :class="getIconBg(i)"
                                        class="text-gray-800 px-3 py-1 rounded-full text-sm">
                                        {{ skinType }}
                                    </span>
                                </div>

                                <p v-else class="text-sm text-gray-500">No skin type(s) added.</p>
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
                                v-if="service.photo"
                                :src="service.photo"
                                alt="Portfolio Image"
                                class="w-full h-full object-cover"
                                loading="lazy"
                                />
                                <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                                <span class="material-symbols-outlined text-2xl">image_not_supported</span>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="space-y-2">
                            <button @click="isModalOpen = true"
                                class="w-full bg-pink-100 text-pink-800 px-4 py-3 rounded-xl font-medium hover:bg-pink-200 transition-colors">
                                <span class="material-symbols-outlined text-sm mr-2">add_photo_alternate</span>
                                Add Photos
                            </button>
                        </div> -->
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
                                    <h4 class="font-semibold text-gray-800">Days</h4>
                                    <button
                                        class="text-primary-600 text-sm hover:text-primary-800 transition-colors flex items-center"
                                    >
                                        <span class="material-symbols-outlined text-sm mr-1">edit</span> Edit
                                    </button>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                                        >Monday</span
                                    >
                                    <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                                        >Tuesday</span
                                    >
                                    <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                                        >Thursday</span
                                    >
                                    <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                                        >Friday</span
                                    >
                                    <span class="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm">Wednesday</span>
                                    <span class="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm">Saturday</span>
                                    <span class="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm">Sunday</span>
                                </div>
                                <div class="pt-4 border-t border-gray-100">
                                    <h4 class="font-semibold text-gray-800 mb-3">Hours</h4>
                                    <div class="space-y-2">
                                        <div class="flex items-center gap-3">
                                            <span class="material-symbols-outlined text-pink-600 text-sm">schedule</span>
                                            <div>
                                                <p class="text-sm text-gray-600">9:00 AM - 5:00 PM</p>
                                            </div>
                                        </div>
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
                                v-model="editForm.certification"
                                class="flex-1 px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                                placeholder="Add certification"
                                />
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
                                                    v-model="editForm.available_end_time"
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
    <!-- Modal Add Image Portfolio -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg relative">
            <!-- Modal Title -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold text-pink-500">Upload Portfolio Photo</h2>
                <button @click="isModalOpen = false" class="text-gray-400 hover:text-black text-2xl focus:outline-none">
                    &times;
                </button>
            </div>

            <!-- Upload Area -->
            <div>
                <div class="block border-2 border-dashed border-pink-300 rounded-xl p-6 text-center bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer relative"
                    @click="triggerFileInput">
                    <input type="file" ref="fileInput" accept="image/*" class="hidden" @change="handleFileChange" />

                    <template v-if="previewUrl">
                        <img :src="previewUrl" alt="Preview" class="mx-auto max-h-40 rounded-lg" />
                        <button @click.stop="removeImage" style="color: #ef4444 !important;"
                            class="mt-2 text-sm underline">
                            Remove Image
                        </button>
                    </template>

                    <template v-else>
                        <span class="material-symbols-outlined text-4xl text-pink-400 mb-2 block">
                            add_a_photo
                        </span>
                        <p class="text-pink-500 font-medium">Click to upload</p>
                        <p class="text-sm text-pink-400">JPG, PNG up to 5MB</p>
                    </template>
                </div>
            </div>
            <!-- Upload Button -->
            <button :disabled="!selectedFile" @click="uploadPhoto" :class="[
                'mt-6 w-full text-white py-2 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed',
                selectedFile ? 'bg-pink-500' : 'bg-pink-300'
            ]">
                Upload
            </button>
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

onMounted(async () => {
  try {
    const data = await apiFetch(`/mua/profile`, {});
    profile.value = data

    if (data.mua_profile?.certification) {
      try {
        parsedCertifications.value = JSON.parse(data.mua_profile.certification)
      } catch (e) {
        parsedCertifications.value = [data.mua_profile.certification]
      }
    }

    if (data.mua_profile?.makeup_specializations) {
      try {
        parsedSpecializations.value = JSON.parse(data.mua_profile.makeup_specializations)
      } catch (e) {
        parsedSpecializations.value = [data.mua_profile.makeup_specializations]
      }
    }

    if (data.mua_profile?.makeup_styles) {
        try {
            parsedMakeupStyles.value = JSON.parse(data.mua_profile.makeup_styles)
        } catch (e) {
            parsedMakeupStyles.value = [data.mua_profile.makeup_styles]
        }
    }

    if (data.mua_profile?.skin_type) {
        try {
            parsedSkinTypes.value = JSON.parse(data.mua_profile.skin_type)
        } catch (e) {
            parsedSkinTypes.value = [data.mua_profile.skin_type]
        }
    }

    if (data.mua_profile?.available_days) {
        try {
            parsedAvailableDays.value = JSON.parse(data.mua_profile.available_days)
        } catch (e) {
            parsedAvailableDays.value = [data.mua_profile.available_days]
        }
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
    if (file && file.type.startsWith('image/')) {
        selectedFile.value = file
        previewUrl.value = URL.createObjectURL(file)
    }
}

function openEditModal() {
  if (profile.value) {
    showEditModal.value = true
    editForm.name = profile.value.name || ''
    editForm.email = profile.value.email || ''
    editForm.phone = profile.value.phone || ''
    editForm.service_area = profile.value.mua_profile?.service_area || ''
    editForm.bio = profile.value.mua_profile?.bio || ''
    editForm.certification = [...parsedCertifications.value]
    editForm.makeup_specializations = [...parsedSpecializations.value]
    editForm.makeup_styles = [...parsedMakeupStyles.value]
    editForm.skin_type = [...parsedSkinTypes.value]
    editForm.available_days = [...parsedAvailableDays.value]
    editForm.available_start_time = profile.value.available_start_time || ''
    editForm.available_end_time = profile.value.available_end_time || ''
  }
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

const removeImage = () => {
    selectedFile.value = null
    previewUrl.value = null
    fileInput.value.value = ''
}

async function saveEdit() {
  try {
    const formData = new FormData();

    formData.append('bio', editForm.bio);
    formData.append('certification', JSON.stringify(editForm.certification));
    formData.append('service_area', editForm.service_area);
    formData.append('makeup_specializations', JSON.stringify(editForm.makeup_specializations));
    formData.append('makeup_styles', JSON.stringify(editForm.makeup_styles));
    formData.append('skin_type', JSON.stringify(editForm.skin_type));
    formData.append('available_days', JSON.stringify(editForm.available_days));
    formData.append('available_start_time', editForm.available_start_time);
    formData.append('available_end_time', editForm.available_end_time);

    if (selectedFile.value) {
      formData.append('profile_photo', selectedFile.value);
    }

    const response = await apiFetch(`/mua/profile`, {
      method: 'PUT',
      body: formData
    });
    console.log('Updated profile response:', response);

    closeEditModal();
    window.location.reload();
  } catch (err) {
    console.error('Failed to save changes:', err);
    alert('Failed to save profile. Please try again.');
  }
}

const uploadPhoto = async () => {
    if (!selectedFile.value) return

    const formData = new FormData()
    formData.append('file', selectedFile.value)

    try {
        await apiFetch(`/mua/portfolio/upload/${userId}`, {
            method: 'POST',
            body: formData
        })

        alert('Upload successful!')
        isModalOpen.value = false
        removeImage()
    } catch (err) {
        alert('Upload failed: ' + err.message)
    }
}
</script>