<template>
  <div class="pr-6 pl-6 pb-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div class="bg-pink-100 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center">
            <span class="material-symbols-outlined text-white">calendar_today</span>
          </div>
          <h3 class="font-semibold text-gray-800">Booking Summary</h3>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-800">New Bookings</span>
            <span class="font-bold text-gray-800">{{ bookingSummary.new_bookings }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Upcoming</span>
            <span class="font-bold text-gray-800">{{ bookingSummary.upcoming }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Completed</span>
            <span class="font-bold text-gray-800">{{ bookingSummary.completed }}</span>
          </div>
        </div>
      </div>

      <div class="bg-purple-100 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
            <span class="material-symbols-outlined text-white">attach_money</span>
          </div>
          <h3 class="font-semibold text-gray-800">Revenue</h3>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-800">Daily</span>
            <span class="font-bold text-gray-800">{{ formatCurrency(bookingSummary.daily_revenue) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Weekly</span>
            <span class="font-bold text-gray-800">{{ formatCurrency(bookingSummary.weekly_revenue) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Monthly</span>
            <span class="font-bold text-gray-800">{{ formatCurrency(bookingSummary.monthly_revenue) }}</span>
          </div>
        </div>
      </div>

      <div class="bg-yellow-100 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
            <span class="material-symbols-outlined text-white">notifications_active</span>
          </div>
          <h3 class="font-semibold text-gray-800">Notifications</h3>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-800">Reviews</span>
            <span class="font-bold text-gray-800">{{ bookingSummary.reviews }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Reminders</span>
            <span class="font-bold text-gray-800">{{ bookingSummary.reminders }}</span>
          </div>
        </div>
      </div>

      <div class="bg-green-100 rounded-2xl p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center">
            <span class="material-symbols-outlined text-white">flash_on</span>
          </div>
          <h3 class="font-semibold text-gray-800">Quick Actions</h3>
        </div>
        <div class="space-y-4">
            <button onclick="window.location.href='calendar'" class="w-full bg-white rounded-full py-2 px-4 text-gray-800 hover:bg-purple-50 transition-all text-sm transform hover:scale-105 duration-300">
                Set Availability
            </button>
            <button onclick="window.location.href='services'" class="w-full bg-white rounded-full py-2 px-4 text-gray-800 hover:bg-purple-50 transition-all text-sm transform hover:scale-105 duration-300">
                Add Services
            </button>
            <button @click="scrollToBookings" class="w-full bg-white rounded-full py-2 px-4 text-gray-800 hover:bg-purple-50 transition-all text-sm transform hover:scale-105 duration-300">
                View Bookings
            </button>
        </div>
      </div>
    </div>
     <div ref="bookingsTable" class="bg-white rounded-2xl p-6 hover:shadow-md transform hover:-translate-y-1 transition">
      <div class="overflow-x-auto">
        <table class="w-full min-w-full">
          <thead class="border-b border-pink-100">
            <tr>
              <th class="py-3 text-left text-gray-800 font-medium">Client</th>
              <th class="py-3 text-left text-gray-800 font-medium">Service</th>
              <th class="py-3 text-left text-gray-800 font-medium">Date & Time</th>
              <th class="py-3 text-left text-gray-800 font-medium">Status</th>
              <th class="py-3 text-left text-gray-800 font-medium">Status Payment</th>
              <th class="py-3 text-left text-gray-800 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(booking, index) in paginatedBookings"
              :key="index"
              class="border-b border-pink-50 hover:bg-pink-50 transition-colors"
            >
              <td class="py-4">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span class="text-sm">👤</span>
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">{{ booking.name }}</p>
                    <p class="text-xs text-gray-800">{{ booking.style }}</p>
                  </div>
                </div>
              </td>
              <td class="py-4">
                <p class="font-medium text-gray-800">{{ booking.service }}</p>
                <p class="text-xs text-gray-800">{{ booking.total_price }}</p>
              </td>
              <td class="py-4">
                <p class="font-medium text-gray-800">{{ booking.date }}</p>
                <p class="text-xs text-gray-800">{{ booking.time }}</p>
              </td>
              <td class="py-4">
                <span
                  class="px-2 py-1 rounded-full text-xs font-medium"
                  :class="{
                    'bg-pink-100 text-pink-700': booking.status === 'Confirmed',
                    'bg-purple-100 text-gray-800': booking.status === 'Pending',
                    'bg-yellow-100 text-yellow-700': booking.status === 'Completed',
                    'bg-red-100 text-red-700': booking.status === 'Cancelled'
                  }"
                >
                  {{ booking.status }}
                </span>
              </td>
               <td class="py-4">
                <span
                  class="px-2 py-1 rounded-full text-xs font-medium"
                  :class="{
                    'bg-pink-100 text-pink-700': booking.payment_status === 'Paid',
                    'bg-purple-100 text-gray-800': booking.payment_status === 'Pending',
                    'bg-yellow-100 text-yellow-700': booking.payment_status === 'Refunded'
                  }"
                >
                  {{ booking.payment_status }}
                </span>
              </td>
              <td class="py-4">
                <div class="flex gap-2">
                  <button @click="openWhatsAppChat(booking.phone)" class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 text-gray-800">
                    <span class="material-symbols-outlined text-sm">chat</span>
                  </button>
                  <button @click="openEditModal(booking)" class="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 text-gray-800">
                    <span class="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-4">
        <div class="text-sm text-gray-800">
          Showing {{ paginatedBookings.length }} of {{ bookings.length }} bookings
        </div>
        <div class="flex gap-2">
          <button
            class="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 text-gray-800"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
          >
            <span class="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button
            v-for="n in totalPages"
            :key="n"
            @click="goToPage(n)"
            class="w-8 h-8 rounded-full flex items-center justify-center"
            :class="currentPage === n ? 'bg-purple-200 text-gray-800 hover:bg-purple-300' : 'bg-pink-100 text-gray-800 hover:bg-pink-200'"
          >
            {{ n }}
          </button>
          <button
            class="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 text-gray-800"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Edit Booking Modal -->
<div
  v-if="showEditModal"
  class="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm text-gray-800 p-4"
>
  <div class="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 animate-fadeIn relative">

    <button  @click="showEditModal = false" class="absolute top-3 right-3 text-gray-600 hover:text-gray-900 z-10 p-1 rounded-full hover:bg-gray-100 transition-colors">
      <span class="material-symbols-outlined">close</span>
    </button>

    <div class="p-6">
      <h2 class="text-lg font-semibold mb-4 text-gray-800">Edit Booking</h2>

      <div class="space-y-4">
        <div>
          <label class="text-sm text-gray-700">Name</label>
          <input v-model="editingBooking.name" class="w-full border rounded px-3 py-2 mt-1" readonly />
        </div>
        <div>
          <label class="text-sm text-gray-700">Service</label>
          <input v-model="editingBooking.service" class="w-full border rounded px-3 py-2 mt-1" readonly />
        </div>
        <div>
          <label class="text-sm text-gray-700">Date</label>
          <input v-model="editingBooking.date" type="date" class="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label class="text-sm text-gray-700">Time</label>
          <input v-model="editingBooking.time" type="time" class="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label class="text-sm text-gray-700">Status</label>
          <select v-model="editingBooking.status" class="w-full border rounded px-3 py-2 mt-1">
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div>
          <label class="text-sm text-gray-700">Payment Status</label>
          <select v-model="editingBooking.payment_status" class="w-full border rounded px-3 py-2 mt-1">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>
      </div>

      <div class="flex justify-end gap-2 mt-6">
        <button @click="showEditModal = false" class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm">
          Cancel
        </button>
        <button @click="saveBooking" class="px-4 py-2 rounded bg-pink-500 hover:bg-pink-600 text-white text-sm">
          Save
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { apiFetch } from '@/config.js'

const bookings = ref([])
const bookingSummary = ref({
  new_bookings: 0,
  upcoming: 0,
  completed: 0,
  reviews: 0,
  reminders: 0,
  daily_revenue: 0,
  weekly_revenue: 0,
  monthly_revenue: 0
})
const currentPage = ref(1)
const perPage = ref(2)
const bookingsTable = ref(null)

const totalPages = computed(() => Math.ceil(bookings.value.length / perPage.value))

const paginatedBookings = computed(() =>
  bookings.value.slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value)
)

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page
}

const showEditModal = ref(false)
const editingBooking = ref({
  name: '',
  style: '',
  service: '',
  total_price: '',
  date: '',
  time: '',
  status: '',
  payment_status: '',
})

function openEditModal(booking) {
  console.log("Booking clicked:", booking);
  editingBooking.value = {
    id: booking.id,
    name: booking.name,
    style: booking.style,
    service: booking.service,
    total_price: booking.total_price,
    date: booking.date.slice(0, 10),
    time: booking.time.slice(0, 5),
    status: booking.status,
    payment_status: booking.payment_status
  }
  showEditModal.value = true
}

async function saveBooking() {
  try {
    if (!editingBooking.value.id) {
      console.error('Booking ID is undefined');
      return;
    }

    const payload = {
      status: editingBooking.value.status,
      payment_status: editingBooking.value.payment_status,
      date: editingBooking.value.date,
      time: editingBooking.value.time
    };

    const response = await apiFetch(`/mua/bookings/${editingBooking.value.id}/status`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });

    console.log('Booking updated:', response);
    
    // Refresh data after successful update
    await fetchBookings();
    await fetchBookingSummary();
    
    showEditModal.value = false;
  } catch (error) {
    console.error('Failed to save booking:', error);
  }
}


function formatCurrency(amount) {
  if (!amount || amount === 0) return 'Rp 0'
  return 'Rp ' + new Intl.NumberFormat('id-ID').format(amount)
}

function formatPhoneNumber(phone) {
  if (phone.startsWith('0')) {
    return '+62' + phone.slice(1)
  }
  return phone
}

function scrollToBookings() {
  if (bookingsTable.value) {
    bookingsTable.value.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

function openWhatsAppChat(phone) {
  const formattedPhone = formatPhoneNumber(phone)
  const url = `https://wa.me/${formattedPhone}`
  window.open(url, '_blank')
}

async function fetchBookings() {
  try {
    const data = await apiFetch('/mua/bookings')
    bookings.value = data.map(booking => ({
      id: booking.id,
      name: booking.customer.name,
      style: booking.customer.style || '',
      service: booking.service.name,
      total_price: booking.total_price,
      date: new Date(booking.date).toISOString().split('T')[0],
      time: booking.time,
      status: booking.status.charAt(0).toUpperCase() + booking.status.slice(1),
      payment_status: booking.payment_status ? booking.payment_status.charAt(0).toUpperCase() + booking.payment_status.slice(1) : 'Pending',
      phone: booking.customer.phone || ''
    }))
  } catch (error) {
    console.error('Failed to fetch bookings:', error)
  }
}

async function fetchBookingSummary() {
  try {
    const data = await apiFetch('/mua/bookings/summary')
    bookingSummary.value = data
  } catch (error) {
    console.error('Failed to fetch booking summary:', error)
  }
}

onMounted(() => {
  fetchBookings()
  fetchBookingSummary()
})
</script>


