<template>
  <div class="flex-1 space-y-6 text-gray-800">
    <!-- Personal Skin Profile Confirmation -->
    <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div class="flex items-center justify-between mb-4 md:mb-6">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800">Personal Skin Profile Confirmation</h2>
        <span class="material-symbols-outlined text-primary-500 text-xl md:text-2xl">face_retouching_natural</span>
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Skin Type</label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="type in skinTypes"
                :key="type"
                :class="['px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm font-medium transition-colors', customerSkinProfile.skin_type.includes(type) ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
                @click="updateSkinProfile('skin_type', type)"
                :disabled="profileConfirmed && !profileEdited"
              >
                {{ type }}
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Skin Tone</label>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="(color, index) in skinTones"
                :key="index"
                :class="['w-8 h-8 rounded-full cursor-pointer transition-all', customerSkinProfile.skin_tone === color ? 'ring-2 ring-primary-500 ring-offset-2' : 'hover:ring-2 hover:ring-gray-400']"
                :style="{ backgroundColor: color }"
                @click="updateSkinProfile('skin_tone', color)"
                :disabled="profileConfirmed && !profileEdited"
              ></div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Makeup Style Preference</label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="style in makeupStyles"
                :key="style"
                :class="['px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm font-medium transition-colors', customerSkinProfile.makeup_style_preference.includes(style) ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
                @click="updateSkinProfile('makeup_style_preference', style)"
                :disabled="profileConfirmed && !profileEdited"
              >
                {{ style }}
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Any Skin Concerns</label>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="concern in customerSkinProfile.skin_concerns"
                :key="concern"
                class="px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm font-medium transition-colors bg-primary-500 text-white"
              >
                {{ concern }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-3 mt-6">
        <button
          class="px-4 py-2 md:px-6 md:py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          @click="editProfile"
        >
          Edit Profile
        </button>
        <button
          class="px-4 py-2 md:px-6 md:py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
          @click="confirmProfile"
          :disabled="!profileEdited"
        >
          Confirm Profile
        </button>
      </div>
    </div>

    <!-- Booking Confirmation -->
    <div v-if="profileConfirmed" class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div class="flex items-center justify-between mb-4 md:mb-6">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800">Booking Confirmation</h2>
        <span class="material-symbols-outlined text-primary-500 text-xl md:text-2xl">event_available</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div class="space-y-6">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-3">Booking Summary</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600">MUA:</span>
                <span class="font-medium">{{ booking.mua.name || 'Loading...' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Date:</span>
                <span class="font-medium">{{ booking.date || 'Loading...' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Time:</span>
                <span class="font-medium">{{ booking.time || 'Loading...' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Service:</span>
                <span class="font-medium">{{ booking.service.name || 'Loading...' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Duration:</span>
                <span class="font-medium">{{ (booking.service.duration || 0) }} hours</span>
              </div>
              <div class="border-t pt-2 mt-2">
                <div class="flex justify-between text-lg font-semibold">
                  <span>Total Price:</span> <span class="text-primary-600">${{ parseFloat(booking.total_price || 0).toFixed(2) }}</span>
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
                <span class="text-gray-600">- ${{ (parseFloat(booking.total_price || 0) / 2).toFixed(2) }}</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" class="w-4 h-4 text-primary-600" v-model="paymentOption" value="full" />
                <span class="font-medium">Full Payment</span>
                <span class="text-gray-600">- ${{ parseFloat(booking.total_price || 0).toFixed(2) }}</span>
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
      <div class="flex justify-end gap-3 mt-6">
        <button
          class="px-4 py-2 md:px-6 md:py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          @click="backToProfile"
        >
          Back
        </button>
        <button
          class="px-4 py-2 md:px-6 md:py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
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
                <p class="text-3xl font-bold text-primary-600">${{ parseFloat(paymentAmount || 0).toFixed(2) }}</p>
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
                  value="E-Wallet"
                  v-model="selectedPaymentMethod"
                />
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-blue-600">account_balance_wallet</span>
                  <span class="font-medium">E-Wallet</span>
                </div>
              </label>
              <label
                class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input type="radio" name="method" class="w-4 h-4 text-primary-600" value="Bank Transfer" v-model="selectedPaymentMethod" />
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-green-600">account_balance</span>
                  <span class="font-medium">Bank Transfer</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-4">Payment Options</h3>
            <div class="space-y-4">
              <!-- Bank Transfer Options -->
              <div>
                <h4 class="font-medium text-gray-700 mb-2">Bank Transfer</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span>BTN</span>
                    <span>9101610064996 (Zahra Faqihah)</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Sea Bank</span>
                    <span>901908185663 (Zahra Faqihah)</span>
                  </div>
                  <div class="flex justify-between">
                    <span>BCA</span>
                    <span>6395760207 (Wanda Marwa Anazwa)</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Mandiri</span>
                    <span>1300024099197 (Wanda Marwa Anazwa)</span>
                  </div>
                </div>
              </div>
              
              <!-- E-Wallet Options -->
              <div>
                <h4 class="font-medium text-gray-700 mb-2">E-Wallet</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span>GoPay</span>
                    <span>085173270089 (Zahra Faqihah)</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Dana</span>
                    <span>085860458285 (Wanda Marwa Anazwa)</span>
                  </div>
                  <div class="flex justify-between">
                    <span>ShopeePay</span>
                    <span>085860458285 (Wanda Marwa Anazwa)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold text-gray-800 mb-4">Upload Payment Proof</h3>
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <span class="material-symbols-outlined text-gray-400 text-3xl mb-2">cloud_upload</span>
              <p class="text-gray-600 mb-2">Drag &amp; drop or click to upload</p>
              <p class="text-sm text-gray-500">PNG, JPG up to 10MB</p>
              <input type="file" class="hidden" ref="paymentProofInput" @change="handlePaymentProofUpload" />
              <button
                class="mt-3 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                @click="$refs.paymentProofInput.click()"
              >
                Choose File
              </button>
              <div v-if="paymentProofPreview" class="mt-4">
                <img :src="paymentProofPreview" alt="Payment Proof Preview" class="max-w-full h-auto rounded-lg" />
              </div>
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
          @click="completePayment"
        >
          Complete Payment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiFetch } from '@/config'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const bookingId = route.params.bookingId

    const booking = reactive({
      mua: { name: '' },
      service: { name: '', duration: 0 },
      date: '',
      time: '',
      total_price: 0,
    })

    const customerSkinProfile = reactive({
      skin_type: [],
      skin_tone: '',
      makeup_style_preference: [],
      skin_concerns: [],
    })

    const profileConfirmed = ref(false)
    const profileEdited = ref(false)
    const paymentStarted = ref(false)
    const paymentOption = ref('full')
    const selectedPaymentMethod = ref('')
    const paymentProofPreview = ref(null)
    const paymentProofFile = ref(null)

    const skinTypes = ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal']
    const skinTones = ['#FDE68A', '#FCD34D', '#FB923C', '#F97316', '#B45309', '#78350F']
    const makeupStyles = ['Natural', 'Glam', 'Bold', 'Dewy']
    const skinConcerns = ['Acne', 'Redness', 'Hyperpigmentation']

    const fetchBooking = async () => {
      try {
        const response = await apiFetch(`customer/bookings/${bookingId}`)
        const data = response.data || response // Handle case where data might be directly in response
        booking.mua = data.mua || {}
        booking.service = data.service || {}
        booking.date = data.date || ''
        booking.time = data.time || ''
        booking.total_price = data.total_price || 0

        // Fetch customer profile to populate the skin profile section
        const profileResponse = await apiFetch('customer/profile')
        const profileData = profileResponse.data || profileResponse
        
        // Initialize skin profile from customer profile data
        initializeSkinProfile(profileData);

        // If there's already a snapshot, use that instead and show booking confirmation
        if (data.customer_skin_profile_snapshot) {
          initializeSkinProfileFromSnapshot(data.customer_skin_profile_snapshot);
          profileConfirmed.value = true
        }
      } catch (error) {
        console.error('Failed to fetch booking or profile:', error)
      }
    }

    const updateSkinProfile = (key, value) => {
      if (profileConfirmed.value && !profileEdited.value) return
      if (key === 'skin_concerns') return
      
      // For array fields like skin_type and makeup_style_preference
      if (key === 'skin_type' || key === 'makeup_style_preference') {
        const index = customerSkinProfile[key].indexOf(value)
        if (index === -1) {
          customerSkinProfile[key] = [value] // Only allow one selection for these fields
        } else {
          customerSkinProfile[key] = []
        }
        profileEdited.value = true
        return
      }
      
      customerSkinProfile[key] = value
      profileEdited.value = true
    }

    const toggleSkinConcern = (concern) => {
      if (profileConfirmed.value && !profileEdited.value) return
      const index = customerSkinProfile.skin_concerns.indexOf(concern)
      if (index === -1) {
        customerSkinProfile.skin_concerns.push(concern)
      } else {
        customerSkinProfile.skin_concerns.splice(index, 1)
      }
      profileEdited.value = true
    }

    // Initialize skin profile from customer profile data
    const initializeSkinProfile = (profileData) => {
      // Reset customerSkinProfile to default values
      customerSkinProfile.skin_type = [];
      customerSkinProfile.skin_tone = '';
      customerSkinProfile.makeup_style_preference = [];
      customerSkinProfile.skin_concerns = [];
      
      // Map skin_type
      if (profileData.skin_type) {
        if (Array.isArray(profileData.skin_type)) {
          customerSkinProfile.skin_type = profileData.skin_type;
        } else if (typeof profileData.skin_type === 'string') {
          try {
            const parsed = JSON.parse(profileData.skin_type);
            if (Array.isArray(parsed)) {
              customerSkinProfile.skin_type = parsed;
            } else {
              customerSkinProfile.skin_type = profileData.skin_type.split(',').map(item => item.trim()).filter(item => item);
            }
          } catch (e) {
            customerSkinProfile.skin_type = profileData.skin_type.split(',').map(item => item.trim()).filter(item => item);
          }
        }
      }
      
      // Map skin_tone
      customerSkinProfile.skin_tone = profileData.skin_tone || '';
      
      // Map makeup_style_preference
      if (profileData.makeup_preferences) {
        if (Array.isArray(profileData.makeup_preferences)) {
          customerSkinProfile.makeup_style_preference = profileData.makeup_preferences;
        } else if (typeof profileData.makeup_preferences === 'string') {
          try {
            const parsed = JSON.parse(profileData.makeup_preferences);
            if (Array.isArray(parsed)) {
              customerSkinProfile.makeup_style_preference = parsed;
            } else {
              customerSkinProfile.makeup_style_preference = profileData.makeup_preferences.split(',').map(item => item.trim()).filter(item => item);
            }
          } catch (e) {
            customerSkinProfile.makeup_style_preference = profileData.makeup_preferences.split(',').map(item => item.trim()).filter(item => item);
          }
        }
      }
      
      // Map skin_concerns
      if (profileData.skin_issues) {
        customerSkinProfile.skin_concerns = profileData.skin_issues.split(',').map(item => item.trim()).filter(item => item);
      }
    }

    // Initialize skin profile from snapshot data
    const initializeSkinProfileFromSnapshot = (snapshotData) => {
      // Reset customerSkinProfile to default values
      customerSkinProfile.skin_type = [];
      customerSkinProfile.skin_tone = '';
      customerSkinProfile.makeup_style_preference = [];
      customerSkinProfile.skin_concerns = [];
      
      // Map skin_type
      if (snapshotData.skin_type) {
        if (Array.isArray(snapshotData.skin_type)) {
          customerSkinProfile.skin_type = snapshotData.skin_type;
        } else if (typeof snapshotData.skin_type === 'string') {
          try {
            const parsed = JSON.parse(snapshotData.skin_type);
            if (Array.isArray(parsed)) {
              customerSkinProfile.skin_type = parsed;
            } else {
              customerSkinProfile.skin_type = snapshotData.skin_type.split(',').map(item => item.trim()).filter(item => item);
            }
          } catch (e) {
            customerSkinProfile.skin_type = snapshotData.skin_type.split(',').map(item => item.trim()).filter(item => item);
          }
        }
      }
      
      // Map skin_tone
      customerSkinProfile.skin_tone = snapshotData.skin_tone || '';
      
      // Map makeup_style_preference
      if (snapshotData.makeup_preferences) {
        if (Array.isArray(snapshotData.makeup_preferences)) {
          customerSkinProfile.makeup_style_preference = snapshotData.makeup_preferences;
        } else if (typeof snapshotData.makeup_preferences === 'string') {
          try {
            const parsed = JSON.parse(snapshotData.makeup_preferences);
            if (Array.isArray(parsed)) {
              customerSkinProfile.makeup_style_preference = parsed;
            } else {
              customerSkinProfile.makeup_style_preference = snapshotData.makeup_preferences.split(',').map(item => item.trim()).filter(item => item);
            }
          } catch (e) {
            customerSkinProfile.makeup_style_preference = snapshotData.makeup_preferences.split(',').map(item => item.trim()).filter(item => item);
          }
        }
      }
      
      // Map skin_concerns
      if (snapshotData.skin_issues) {
        customerSkinProfile.skin_concerns = snapshotData.skin_issues.split(',').map(item => item.trim()).filter(item => item);
      }
    }

    const editProfile = () => {
      profileConfirmed.value = false
      profileEdited.value = true
    }

    const confirmProfile = async () => {
      try {
        await apiFetch(`customer/bookings/${bookingId}`, {
          method: 'PUT',
          body: JSON.stringify({
            customer_skin_profile_snapshot: customerSkinProfile,
          }),
        })
        profileConfirmed.value = true
        profileEdited.value = false
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

    const handlePaymentProofUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        paymentProofFile.value = file;
        // Buat preview gambar
        const reader = new FileReader();
        reader.onload = (e) => {
          paymentProofPreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const completePayment = async () => {
      try {
        // Mengambil nilai payment method dari radio button yang dipilih
        let paymentMethod = selectedPaymentMethod.value;
        
        // Jika tidak ada metode pembayaran yang dipilih, coba ambil dari elemen DOM
        if (!paymentMethod) {
          const selectedMethod = document.querySelector('input[name="method"]:checked');
          if (selectedMethod) {
            // Temukan elemen label yang sesuai dengan radio button yang dipilih
            const label = selectedMethod.closest('label') || selectedMethod.closest('div').querySelector('span.font-medium');
            if (label) {
              paymentMethod = label.textContent;
            }
          }
        }

        // Buat FormData untuk mengirim file dan data lainnya
        const formData = new FormData();
        formData.append('_method', 'PUT'); // Method spoofing
        formData.append('payment_method', paymentMethod);
        if (paymentProofFile.value) {
          formData.append('payment_proof', paymentProofFile.value);
        }

        // Update booking dengan payment method dan bukti pembayaran
        const response = await apiFetch(`customer/bookings/${bookingId}`, {
          method: 'POST', // Gunakan POST dengan method spoofing
          body: formData,
        });

        // TODO: Arahkan ke halaman konfirmasi pembayaran atau tampilkan pesan sukses
        console.log('Payment completed with method:', paymentMethod);
        alert('Payment completed successfully!');
        
        // Setelah pembayaran berhasil, arahkan ke halaman daftar booking
        // Menggunakan router untuk navigasi
        router.push({ name: 'CustomerBookingList' });
      } catch (error) {
        console.error('Failed to complete payment:', error);
        alert('Failed to complete payment. Please try again.');
      }
    };

    const paymentAmount = computed(() => {
      const price = parseFloat(booking.total_price || 0);
      return paymentOption.value === 'full' ? price : price / 2;
    })

    onMounted(() => {
      fetchBooking()
    })

    return {
      booking,
      customerSkinProfile,
      profileConfirmed,
      profileEdited,
      paymentStarted,
      paymentOption,
      selectedPaymentMethod,
      paymentProofPreview,
      skinTypes,
      skinTones,
      makeupStyles,
      skinConcerns,
      updateSkinProfile,
      toggleSkinConcern,
      editProfile,
      confirmProfile,
      proceedToPayment,
      backToProfile,
      backToConfirmation,
      handlePaymentProofUpload,
      completePayment,
      paymentAmount,
    }
  },
}
</script>
