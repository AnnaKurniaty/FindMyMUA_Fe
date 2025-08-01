<template>
  <div class="flex-1 space-y-6">
    <!-- Personal Skin Profile Confirmation -->
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
                v-for="type in skinTypes"
                :key="type"
                :class="['px-4 py-2 rounded-lg text-sm font-medium', customerSkinProfile.skin_type === type ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
                @click="updateSkinProfile('skin_type', type)"
                :disabled="profileConfirmed"
              >
                {{ type }}
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Skin Sensitivity</label>
            <div class="flex gap-2">
              <button
                v-for="sensitivity in skinSensitivities"
                :key="sensitivity"
                :class="['px-4 py-2 rounded-lg text-sm font-medium', customerSkinProfile.skin_sensitivity === sensitivity ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
                @click="updateSkinProfile('skin_sensitivity', sensitivity)"
                :disabled="profileConfirmed"
              >
                {{ sensitivity }}
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Skin Tone</label>
            <div class="flex gap-2">
              <div
                v-for="(color, index) in skinTones"
                :key="index"
                :class="['w-8 h-8 rounded-full cursor-pointer transition-all', customerSkinProfile.skin_tone === color ? 'ring-2 ring-primary-500' : 'hover:ring-2 hover:ring-gray-400']"
                :style="{ backgroundColor: color }"
                @click="updateSkinProfile('skin_tone', color)"
                :disabled="profileConfirmed"
              ></div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Makeup Style Preference</label>
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="style in makeupStyles"
                :key="style"
                :class="['px-4 py-2 rounded-lg text-sm font-medium', customerSkinProfile.makeup_style_preference === style ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
                @click="updateSkinProfile('makeup_style_preference', style)"
                :disabled="profileConfirmed"
              >
                {{ style }}
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Any Skin Concerns</label>
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="concern in skinConcerns"
                :key="concern"
                :class="['px-4 py-2 rounded-lg text-sm font-medium', customerSkinProfile.skin_concerns.includes(concern) ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
                @click="toggleSkinConcern(concern)"
                :disabled="profileConfirmed"
              >
                {{ concern }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-4 mt-6">
        <button
          class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          @click="editProfile"
          :disabled="profileConfirmed"
        >
          Edit Profile
        </button>
        <button
          class="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
          @click="confirmProfile"
          :disabled="profileConfirmed"
        >
          Confirm Profile
        </button>
      </div>
    </div>

    <!-- Booking Confirmation -->
    <div v-if="profileConfirmed" class="bg-white rounded-2xl shadow-lg p-8">
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
                <span class="font-medium">{{ booking.mua.name }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Date:</span>
                <span class="font-medium">{{ booking.date }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Time:</span>
                <span class="font-medium">{{ booking.time }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Service:</span>
                <span class="font-medium">{{ booking.service.name }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Duration:</span>
                <span class="font-medium">{{ booking.service.duration }} hours</span>
              </div>
              <div class="border-t pt-2 mt-2">
                <div class="flex justify-between text-lg font-semibold">
                  <span>Total Price:</span> <span class="text-primary-600">${{ booking.total_price.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-3">Payment Options</h3>
            <div class="space-y-3">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" class="w-4 h-4 text-primary-600" v-model="paymentOption" value="deposit" />
                <span class="font-medium">Deposit Payment (50%)</span>
                <span class="text-gray-600">- ${{ (booking.total_price / 2).toFixed(2) }}</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" class="w-4 h-4 text-primary-600" v-model="paymentOption" value="full" />
                <span class="font-medium">Full Payment</span>
                <span class="text-gray-600">- ${{ booking.total_price.toFixed(2) }}</span>
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
            <div class="space-y-2 text-sm text-gray-600">
              <p>• Please arrive 15 minutes early</p>
              <p>• Bring reference photos if desired</p>
              <p>• Skin should be clean and moisturized</p>
              <p>• Hair should be styled before makeup</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-4 mt-6">
        <button
          class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          @click="backToProfile"
        >
          Back
        </button>
        <button
          class="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
          @click="proceedToPayment"
        >
          Proceed to Payment
        </button>
      </div>
    </div>

    <!-- Payment Section -->
    <div v-if="paymentStarted" class="bg-white rounded-2xl shadow-lg p-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Payment</h2>
        <span class="material-symbols-outlined text-primary-500 text-2xl">payment</span>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-4">Payment Amount</h3>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="text-center">
                <p class="text-gray-600 mb-2">Total to Pay</p>
                <p class="text-3xl font-bold text-primary-600">${{ paymentAmount.toFixed(2) }}</p>
                <p class="text-sm text-gray-500 mt-1">{{ paymentOption === 'full' ? 'Full Payment Selected' : 'Deposit Payment Selected' }}</p>
              </div>
            </div>
          </div>
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-4">Payment Method</h3>
            <div class="space-y-3">
              <label
                class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input
                  type="radio"
                  name="method"
                  class="w-4 h-4 text-primary-600"
                  checked
                />
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-blue-600">account_balance_wallet</span>
                  <span class="font-medium">E-Wallet</span>
                </div>
              </label>
              <label
                class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input type="radio" name="method" class="w-4 h-4 text-primary-600" />
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-green-600">account_balance</span>
                  <span class="font-medium">Bank Transfer</span>
                </div>
              </label>
              <label
                class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input type="radio" name="method" class="w-4 h-4 text-primary-600" />
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-purple-600">credit_card</span>
                  <span class="font-medium">Credit/Debit Card</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-4">E-Wallet Options</h3>
            <div class="grid grid-cols-2 gap-3">
              <button
                class="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://img.icons8.com/color/24/000000/gopay.png"
                  alt="GoPay"
                  keywords="gopay, payment, ewallet"
                />
                <span class="font-medium">GoPay</span>
              </button>
              <button
                class="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://img.icons8.com/color/24/000000/dana.png"
                  alt="Dana"
                  keywords="dana, payment, ewallet"
                />
                <span class="font-medium">Dana</span>
              </button>
              <button
                class="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://img.icons8.com/color/24/000000/ovo.png"
                  alt="OVO"
                  keywords="ovo, payment, ewallet"
                />
                <span class="font-medium">OVO</span>
              </button>
              <button
                class="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://img.icons8.com/color/24/000000/shopeepay.png"
                  alt="ShopeePay"
                  keywords="shopeepay, payment, ewallet"
                />
                <span class="font-medium">ShopeePay</span>
              </button>
            </div>
          </div>
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-4">Upload Payment Proof</h3>
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <span class="material-symbols-outlined text-gray-400 text-3xl mb-2">cloud_upload</span>
              <p class="text-gray-600 mb-2">Drag &amp; drop or click to upload</p>
              <p class="text-sm text-gray-500">PNG, JPG up to 10MB</p>
              <input type="file" class="hidden" />
              <button
                class="mt-3 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Choose File
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-4 mt-6">
        <button
          class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          @click="backToConfirmation"
        >
          Back
        </button>
        <button
          class="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
        >
          Complete Payment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    const route = useRoute()
    const bookingId = route.params.bookingId

    const booking = reactive({
      mua: { name: '' },
      service: { name: '', duration: 0 },
      date: '',
      time: '',
      total_price: 0,
    })

    const customerSkinProfile = reactive({
      skin_type: '',
      skin_sensitivity: '',
      skin_tone: '',
      makeup_style_preference: '',
      skin_concerns: [],
    })

    const profileConfirmed = ref(false)
    const paymentStarted = ref(false)
    const paymentOption = ref('full')

    const skinTypes = ['Oily', 'Dry', 'Combination']
    const skinSensitivities = ['Sensitive', 'Normal']
    const skinTones = ['#FDE68A', '#FCD34D', '#FB923C', '#F97316', '#B45309', '#78350F']
    const makeupStyles = ['Natural', 'Glam', 'Bold', 'Dewy']
    const skinConcerns = ['Acne', 'Redness', 'Hyperpigmentation']

    const fetchBooking = async () => {
      try {
        const response = await axios.get(`/api/bookings/${bookingId}`)
        const data = response.data
        booking.mua = data.mua
        booking.service = data.service
        booking.date = data.date
        booking.time = data.time
        booking.total_price = data.total_price

        if (data.customer_skin_profile_snapshot) {
          Object.assign(customerSkinProfile, data.customer_skin_profile_snapshot)
          profileConfirmed.value = true
        }
      } catch (error) {
        console.error('Failed to fetch booking:', error)
      }
    }

    const updateSkinProfile = (key, value) => {
      if (profileConfirmed.value) return
      if (key === 'skin_concerns') return
      customerSkinProfile[key] = value
    }

    const toggleSkinConcern = (concern) => {
      if (profileConfirmed.value) return
      const index = customerSkinProfile.skin_concerns.indexOf(concern)
      if (index === -1) {
        customerSkinProfile.skin_concerns.push(concern)
      } else {
        customerSkinProfile.skin_concerns.splice(index, 1)
      }
    }

    const confirmProfile = async () => {
      try {
        await axios.put(`/api/bookings/${bookingId}`, {
          customer_skin_profile_snapshot: customerSkinProfile,
        })
        profileConfirmed.value = true
      } catch (error) {
        console.error('Failed to update skin profile snapshot:', error)
      }
    }

    const proceedToPayment = () => {
      paymentStarted.value = true
    }

    const backToProfile = () => {
      profileConfirmed.value = false
      paymentStarted.value = false
    }

    const backToConfirmation = () => {
      paymentStarted.value = false
    }

    const paymentAmount = computed(() => {
      return paymentOption.value === 'full' ? booking.total_price : booking.total_price / 2
    })

    onMounted(() => {
      fetchBooking()
    })

    return {
      booking,
      customerSkinProfile,
      profileConfirmed,
      paymentStarted,
      paymentOption,
      skinTypes,
      skinSensitivities,
      skinTones,
      makeupStyles,
      skinConcerns,
      updateSkinProfile,
      toggleSkinConcern,
      confirmProfile,
      proceedToPayment,
      backToProfile,
      backToConfirmation,
      paymentAmount,
    }
  },
}
</script>
