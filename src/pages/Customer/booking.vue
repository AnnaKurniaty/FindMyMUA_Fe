<template>
  <div class="flex-1 space-y-6 text-gray-800">
    <div class="bg-white rounded-2xl shadow-lg p-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Personal Skin Profile Confirmation</h2>
        <span class="material-symbols-outlined text-primary-500 text-2xl">face_retouching_natural</span>
      </div>
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="material-symbols-outlined text-amber-600">info</span>
          <span class="font-medium text-amber-800">Profile Review Required</span>
        </div>
        <p class="text-amber-700 text-sm">
          Please review and confirm your skin profile information before proceeding with the booking.
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Skin Type</label>
            <div class="flex gap-2">
              <button
                :class="(profile?.customer_profile?.skin_type || '').includes('Oily') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Oily
              </button>
              <button
                :class="(profile?.customer_profile?.skin_type || '').includes('Dry') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Dry
              </button>
              <button
                :class="(profile?.customer_profile?.skin_type || '').includes('Combination') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Combination
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Skin Sensitivity</label>
            <div class="flex gap-2">
              <button
                :class="(profile?.customer_profile?.skin_sensitivity || '').includes('Sensitive') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Sensitive
              </button>
              <button
                :class="(profile?.customer_profile?.skin_sensitivity || '').includes('Normal') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Normal
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Skin Tone</label>
            <div class="flex gap-2">
              <div
                :class="profile?.customer_profile?.skin_tone === 'Yellow Light' ? 'w-8 h-8 bg-yellow-200 rounded-full cursor-pointer ring-2 ring-primary-500' : 'w-8 h-8 bg-yellow-200 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all'"
              ></div>
              <div
                :class="profile?.customer_profile?.skin_tone === 'Yellow Medium' ? 'w-8 h-8 bg-yellow-300 rounded-full cursor-pointer ring-2 ring-primary-500' : 'w-8 h-8 bg-yellow-300 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all'"
              ></div>
              <div
                :class="profile?.customer_profile?.skin_tone === 'Orange Light' ? 'w-8 h-8 bg-orange-300 rounded-full cursor-pointer ring-2 ring-primary-500' : 'w-8 h-8 bg-orange-300 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all'"
              ></div>
              <div
                :class="profile?.customer_profile?.skin_tone === 'Orange Medium' ? 'w-8 h-8 bg-orange-400 rounded-full cursor-pointer ring-2 ring-primary-500' : 'w-8 h-8 bg-orange-400 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all'"
              ></div>
              <div
                :class="profile?.customer_profile?.skin_tone === 'Yellow Dark' ? 'w-8 h-8 bg-yellow-700 rounded-full cursor-pointer ring-2 ring-primary-500' : 'w-8 h-8 bg-yellow-700 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all'"
              ></div>
              <div
                :class="profile?.customer_profile?.skin_tone === 'Yellow Very Dark' ? 'w-8 h-8 bg-yellow-800 rounded-full cursor-pointer ring-2 ring-primary-500' : 'w-8 h-8 bg-yellow-800 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all'"
              ></div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Makeup Style Preference</label>
            <div class="flex gap-2 flex-wrap">
              <button
                :class="(profile?.customer_profile?.makeup_preferences || []).includes('Natural') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Natural
              </button>
              <button
                :class="(profile?.customer_profile?.makeup_preferences || []).includes('Glam') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Glam
              </button>
              <button
                :class="(profile?.customer_profile?.makeup_preferences || []).includes('Bold') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Bold
              </button>
              <button
                :class="(profile?.customer_profile?.makeup_preferences || []).includes('Dewy') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Dewy
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Any Skin Concerns</label>
            <div class="flex gap-2 flex-wrap">
              <button
                :class="(profile?.customer_profile?.skin_issues || []).includes('Acne') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Acne
              </button>
              <button
                :class="(profile?.customer_profile?.skin_issues || []).includes('Redness') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Redness
              </button>
              <button
                :class="(profile?.customer_profile?.skin_issues || []).includes('Hyperpigmentation') ? 'px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium' : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'"
              >
                Hyperpigmentation
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-4 mt-6">
        <button
         class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
         @click="openEditSkinProfileModal"
        >
          Edit Profile
        </button>
        <button
         class="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
         @click="showBookingConfirmation = true"
        >
          Confirm Profile
        </button>
      </div>
    </div>

    <div v-if="showBookingConfirmation" class="bg-white rounded-2xl shadow-lg p-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Booking Confirmation</h2>
        <span class="material-symbols-outlined text-primary-500 text-2xl">event_available</span>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-3">Booking Summary</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600">MUA:</span>
                <span class="font-medium">{{ booking?.mua?.user?.name || 'Unknown' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Date:</span>
                <span class="font-medium">{{ booking?.date || '-' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Time:</span>
                <span class="font-medium">{{ booking?.time || '-' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Service:</span>
                <span class="font-medium">{{ booking?.service?.name || '-' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Duration:</span>
                <span class="font-medium">{{ booking?.service?.duration || '-' }}</span>
              </div>
              <div class="border-t pt-2 mt-2">
                <div class="flex justify-between text-lg font-semibold">
                  <span>Total Price:</span>
                  <span class="text-primary-600">{{ typeof booking?.total_price === 'number' ? '$' + booking.total_price.toFixed(2) : '-' }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-3">Payment Options</h3>
            <div class="space-y-3">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" class="w-4 h-4 text-primary-600" />
                <span class="font-medium">Deposit Payment (50%)</span>
                <span class="text-gray-600">- {{ typeof booking?.total_price === 'number' ? '$' + (booking.total_price / 2).toFixed(2) : '-' }}</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" class="w-4 h-4 text-primary-600" checked />
                <span class="font-medium">Full Payment</span>
                <span class="text-gray-600">- {{ typeof booking?.total_price === 'number' ? '$' + booking.total_price.toFixed(2) : '-' }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-3">Cancellation Policy</h3>
            <div class="space-y-2 text-sm text-gray-600">
              <p>• 48+ hours: Full refund</p>
              <p>• 24-48 hours: 50% refund</p>
              <p>• Less than 24 hours: No refund</p>
              <p>• Emergency cancellations will be reviewed case by case</p>
            </div>
          </div>
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-3">Important Notes</h3>
            <div class="space-y-2 text-gray-600">
              <p>• Please arrive 15 minutes early</p>
              <p>• Bring reference photos if desired</p>
              <p>• Skin should be clean and moisturized</p>
              <p>• Hair should be styled before makeup</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-4 mt-6">
        <button class="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors">
          Back
        </button>
        <button class="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors">
          Complete Payment
        </button>
      </div>
    </div>
  </div>

  <!-- <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <div class="p-6 md:p-8 relative">
                    <button
                        class="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        <span class="material-symbols-outlined text-gray-600">close</span>
                    </button>
                    <div class="mb-6">
                        <h2 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary-500">edit</span> Edit Skin Profile
                        </h2>
                        <p class="text-gray-600 mt-1">
                            Update your skin profile information to get personalized services
                        </p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6 mt-8">
                        <div class="space-y-5">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Skin Type</label>
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        class="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                                    >
                                        Oily
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Dry
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Combination
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Normal
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Skin Sensitivity</label>
                                <div class="flex gap-2">
                                    <button
                                        class="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                                    >
                                        Sensitive
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Normal
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Skin Tone</label>
                                <div class="flex flex-wrap gap-3">
                                    <div
                                        class="w-10 h-10 bg-yellow-200 rounded-full cursor-pointer ring-2 ring-primary-500 transform hover:scale-105 transition-transform"
                                    ></div>
                                    <div
                                        class="w-10 h-10 bg-yellow-300 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transform hover:scale-105 transition-all"
                                    ></div>
                                    <div
                                        class="w-10 h-10 bg-orange-300 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transform hover:scale-105 transition-all"
                                    ></div>
                                    <div
                                        class="w-10 h-10 bg-orange-400 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transform hover:scale-105 transition-all"
                                    ></div>
                                    <div
                                        class="w-10 h-10 bg-yellow-700 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transform hover:scale-105 transition-all"
                                    ></div>
                                    <div
                                        class="w-10 h-10 bg-yellow-800 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transform hover:scale-105 transition-all"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-5">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2"
                                    >Makeup Style Preference</label
                                >
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        class="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                                    >
                                        Natural
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Glam
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Bold
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                                    >
                                        Dewy
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Matte
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Any Skin Concerns</label>
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        class="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                                    >
                                        Acne
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Redness
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Hyperpigmentation
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Fine Lines
                                    </button>
                                    <button
                                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Dryness
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2"
                                    >Allergies/Sensitivities</label
                                >
                                <textarea
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                    rows="3"
                                    placeholder="List any known allergies or sensitivities to makeup ingredients"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-4 mt-6">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="material-symbols-outlined text-primary-600">info</span>
                            <span class="font-medium text-gray-800">Why is this information important?</span>
                        </div>
                        <p class="text-gray-600 text-sm">
                            Your skin profile helps our makeup artists prepare the right products and techniques for
                            your appointment. This ensures better results and reduces the risk of adverse reactions.
                        </p>
                    </div>
                    <div class="flex justify-end gap-4 mt-6">
                        <button
                            class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
                        >
                            <span class="material-symbols-outlined text-sm">close</span> Cancel
                        </button>
                        <button
                            class="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center gap-2"
                        >
                            <span class="material-symbols-outlined text-sm">save</span> Save Changes
                        </button>
                    </div>
                </div>
            </div> -->
  <!-- </div> -->

  <transition name="fade">
    <div v-if="showEditSkinProfileModal" class="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 text-gray-800">
      <div class="bg-white rounded-lg p-6 w-full max-w-lg max-h-full overflow-auto">
        <h3 class="text-xl font-semibold mb-4">Edit Skin Profile</h3>
        <div class="space-y-4">
          <div>
            <label class="block font-medium mb-1">Skin Type</label>
            <div class="flex gap-2">
              <button
                v-for="type in skinTypes"
                :key="type"
                :class="editedProfile.skin_type === type ? 'px-4 py-2 bg-primary-500 text-white rounded-lg' : 'px-4 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300'"
                @click="editedProfile.skin_type = type"
              >
                {{ type }}
              </button>
            </div>
          </div>
          <div>
            <label class="block font-medium mb-1">Skin Sensitivity</label>
            <div class="flex gap-2">
              <button
                v-for="sensitivity in skinSensitivities"
                :key="sensitivity"
                :class="editedProfile.skin_sensitivity === sensitivity ? 'px-4 py-2 bg-primary-500 text-white rounded-lg' : 'px-4 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300'"
                @click="editedProfile.skin_sensitivity = sensitivity"
              >
                {{ sensitivity }}
              </button>
            </div>
          </div>
          <div>
            <label class="block font-medium mb-1">Skin Tone</label>
            <div class="flex gap-2">
              <div
                v-for="tone in skinTones"
                :key="tone"
                :class="editedProfile.skin_tone === tone ? 'w-8 h-8 rounded-full cursor-pointer ring-2 ring-primary-500' : 'w-8 h-8 rounded-full cursor-pointer hover:ring-2 ring-gray-400 transition-all'"
                :style="{ backgroundColor: getSkinToneColor(tone) }"
                @click="editedProfile.skin_tone = tone"
              ></div>
            </div>
          </div>
          <div>
            <label class="block font-medium mb-1">Makeup Preferences</label>
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="option in makeupOptions"
                :key="option"
                :class="editedProfile.makeup_preferences.includes(option) ? 'px-4 py-2 bg-primary-500 text-white rounded-lg' : 'px-4 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300'"
                @click="toggleMakeupPreference(option)"
              >
                {{ option }}
              </button>
            </div>
          </div>
          <div>
            <label class="block font-medium mb-1">Skin Issues</label>
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="option in skinIssuesOptions"
                :key="option"
                :class="editedProfile.skin_issues.includes(option) ? 'px-4 py-2 bg-primary-500 text-white rounded-lg' : 'px-4 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300'"
                @click="toggleSkinIssue(option)"
              >
                {{ option }}
              </button>
            </div>
          </div>
        </div>
        <div class="mt-6 flex justify-end gap-4">
          <button class="px-4 py-2 bg-gray-300 rounded-lg" @click="closeEditSkinProfileModal">Cancel</button>
          <button class="px-4 py-2 bg-primary-500 text-white rounded-lg" @click="saveSkinProfile">Save</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { apiFetch } from '@/config'
import { useRoute } from 'vue-router'

const profile = ref(null)
const booking = ref(null)
const showBookingConfirmation = ref(false)
const showEditSkinProfileModal = ref(false)
const route = useRoute()

const skinTypes = ['Oily', 'Dry', 'Combination']
const skinSensitivities = ['Sensitive', 'Normal']
const skinTones = [
  'Yellow Light',
  'Yellow Medium',
  'Orange Light',
  'Orange Medium',
  'Yellow Dark',
  'Yellow Very Dark',
]
const makeupOptions = ['Natural', 'Glam', 'Bold', 'Dewy']
const skinIssuesOptions = ['Acne', 'Redness', 'Hyperpigmentation']

const editedProfile = ref({
  skin_type: '',
  skin_sensitivity: '',
  skin_tone: '',
  makeup_preferences: [],
  skin_issues: [],
})

function openEditSkinProfileModal() {
  if (profile.value && profile.value.customer_profile) {
    editedProfile.value.skin_type = profile.value.customer_profile.skin_type || ''
    editedProfile.value.skin_sensitivity = profile.value.customer_profile.skin_sensitivity || ''
    editedProfile.value.skin_tone = profile.value.customer_profile.skin_tone || ''
    editedProfile.value.makeup_preferences = [...(profile.value.customer_profile.makeup_preferences || [])]
    editedProfile.value.skin_issues = [...(profile.value.customer_profile.skin_issues || [])]
  }
  showEditSkinProfileModal.value = true
}

function closeEditSkinProfileModal() {
  showEditSkinProfileModal.value = false
}

function toggleMakeupPreference(option) {
  const index = editedProfile.value.makeup_preferences.indexOf(option)
  if (index === -1) {
    editedProfile.value.makeup_preferences.push(option)
  } else {
    editedProfile.value.makeup_preferences.splice(index, 1)
  }
}

function toggleSkinIssue(option) {
  const index = editedProfile.value.skin_issues.indexOf(option)
  if (index === -1) {
    editedProfile.value.skin_issues.push(option)
  } else {
    editedProfile.value.skin_issues.splice(index, 1)
  }
}

function saveSkinProfile() {
  // For now, update profile locally
  if (profile.value && profile.value.customer_profile) {
    profile.value.customer_profile.skin_type = editedProfile.value.skin_type
    profile.value.customer_profile.skin_sensitivity = editedProfile.value.skin_sensitivity
    profile.value.customer_profile.skin_tone = editedProfile.value.skin_tone
    profile.value.customer_profile.makeup_preferences = [...editedProfile.value.makeup_preferences]
    profile.value.customer_profile.skin_issues = [...editedProfile.value.skin_issues]
  }
  closeEditSkinProfileModal()
}

function getSkinToneColor(tone) {
  switch (tone) {
    case 'Yellow Light':
      return '#FEF3C7'
    case 'Yellow Medium':
      return '#FCD34D'
    case 'Orange Light':
      return '#FDBA74'
    case 'Orange Medium':
      return '#FB923C'
    case 'Yellow Dark':
      return '#B45309'
    case 'Yellow Very Dark':
      return '#78350F'
    default:
      return '#ccc'
  }
}

async function fetchBooking(id) {
  console.log('Fetching booking with id:', id)
  const token = localStorage.getItem('token')
  try {
    const data = await apiFetch(`/customer/bookings/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    booking.value = data
    console.log('✅ Booking fetched:', data)
  } catch (err) {
    console.error('Failed to load booking', err)
  }
}

onMounted(async () => {
  console.log('Route params:', route.params)
  const token = localStorage.getItem('token')
  try {
    const data = await apiFetch('/customer/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    profile.value = data
    console.log('✅ Profile fetched:', data)
  } catch (err) {
    console.error('Failed to load profile', err)
  }

  if (route.params.bookingId) {
    await fetchBooking(route.params.bookingId)
    showBookingConfirmation.value = true
  }
})
</script>
