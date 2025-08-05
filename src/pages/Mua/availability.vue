<template>
  <div id="webcrumbs">
    <div class="w-full min-h-screen text-gray-900">
      <div class="flex">
        <div class="flex-1 p-8">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-3">
              <h2 class="text-xl font-semibold text-gray-900">
                {{ monthNames[currentMonth] }} {{ currentYear }}
              </h2>
              <div class="flex space-x-2">
                <button @click="prevMonth" class="nav-btn">
                  <span class="material-symbols-outlined text-gray-600">chevron_left</span>
                </button>
                <button @click="nextMonth" class="nav-btn">
                  <span class="material-symbols-outlined text-gray-600">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div class="lg:col-span-3">
              <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="grid grid-cols-7 gap-2 mb-4">
                  <div v-for="day in weekDays" :key="day" class="text-center font-medium text-gray-700 py-2">
                    {{ day }}
                  </div>
                </div>
                <div class="grid grid-cols-7 gap-2">
                  <div
                    v-for="(date, index) in calendarDates"
                    :key="index"
                    :class="[
                      'h-32 p-2 rounded-lg relative',
                      getDateClasses(date),
                      getDateCursorClass(date),
                      'transition-colors border-gray-200',
                    ]"
                    @click="!isDateBlocked(date.date) && selectDate(date)"
                  >
                    <div class="text-sm font-medium" :class="getDateTextColor(date)">{{ date.day }}</div>
                    
                    <!-- Show "BLOCKED" indicator for blocked dates -->
                    <div v-if="date.isCurrentMonth && isDateBlocked(date.date)" class="absolute top-1 right-1">
                      <span class="material-symbols-outlined text-red-600 text-xs">block</span>
                    </div>
                    
                    <!-- Show "UNAVAILABLE" indicator for unavailable days -->
                    <div v-else-if="date.isCurrentMonth && !isDateAvailable(date.date)" class="absolute top-1 right-1">
                      <span class="material-symbols-outlined text-red-500 text-xs">event_busy</span>
                    </div>
                    
                    <!-- Show blocked time slots information -->
                    <div v-if="date.isCurrentMonth && isDateBlocked(date.date)" class="space-y-1 mt-1">
                      <div
                        v-for="slot in getBlockedSlotsForDate(date.date)"
                        :key="slot.id"
                        class="text-xs p-1 rounded truncate bg-red-100 text-red-800"
                        :title="slot.reason || 'Blocked'"
                      >
                        Blocked
                      </div>
                    </div>
                    
                    <div v-else-if="date.bookings && date.bookings.length > 0" class="space-y-1 mt-1">
                      <div
                        v-for="(booking, i) in date.bookings.slice(0, 3)"
                        :key="i"
                        :class="[
                          'text-xs p-1 rounded truncate',
                          getBookingStatusColor(booking.status)
                        ]"
                        :title="`${booking.service_name} - ${booking.customer_name} (${booking.booking_time})`"
                      >
                        {{ booking.service_name }} - 
                        {{ booking.customer_name }}
                      </div>
                      <div v-if="date.bookings.length > 3" class="text-xs text-gray-500">
                        +{{ date.bookings.length - 3 }} more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-6">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div class="space-y-3">
                        <button 
                            @click="blockSelectedDate"
                            :disabled="!selectedDate"
                            :class="[
                                'w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors',
                                selectedDate ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            ]"
                        >
                            <span class="material-symbols-outlined text-lg">block</span>
                            <span>{{ selectedDate ? `Block ${formatDate(selectedDate)}` : 'Select Date to Block' }}</span>
                        </button>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">
                      {{ selectedDate ? `Schedule for ${formatDate(selectedDate)}` : "Today's Schedule" }}
                    </h3>
                    <div v-if="selectedDateBookings.length > 0" class="space-y-3">
                        <div 
                          v-for="booking in selectedDateBookings" 
                          :key="booking.id"
                          class="p-3 rounded-lg"
                          :class="getBookingBgColor(booking.status)"
                        >
                            <div class="flex items-center justify-between">
                              <div>
                                  <p class="font-medium text-sm">{{ booking.service_name }}</p>
                                  <p class="text-xs text-gray-600">{{ booking.customer_name }}</p>
                                  <p class="text-xs text-gray-600">{{ formatTime(booking.booking_time) }}</p>
                                  <p class="text-xs font-medium" :class="getStatusTextColor(booking.status)">
                                    {{ getStatusText(booking.status) }}
                                  </p>
                              </div>
                              <div class="flex space-x-2" v-if="booking.status === 'pending'">
                                  <button
                                      @click="updateBookingStatus(booking.id, 'confirmed')"
                                      class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                                      title="Confirm booking"
                                  >
                                      <span class="material-symbols-outlined text-sm">check</span>
                                  </button>
                                  <button
                                      @click="updateBookingStatus(booking.id, 'cancelled')"
                                      class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                      title="Cancel booking"
                                  >
                                      <span class="material-symbols-outlined text-sm">close</span>
                                  </button>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text-center py-8 text-gray-500">
                        <span class="material-symbols-outlined text-4xl mb-2 block">event_available</span>
                        <p>No bookings for this date</p>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Blocked Time Slots</h3>
                    <div v-if="blockedTimeSlots.length > 0" class="space-y-3 max-h-60 overflow-y-auto">
                        <div 
                          v-for="slot in blockedTimeSlots" 
                          :key="slot.id"
                          class="p-3 rounded-lg bg-red-50 border border-red-200 flex justify-between items-center"
                        >
                            <div>
                                <p class="font-medium text-sm">{{ formatDate(slot.date) }}</p>
                                <p v-if="slot.reason" class="text-xs text-gray-600">{{ slot.reason }}</p>
                            </div>
                            <button
                                @click="unblockTimeSlot(slot.id)"
                                class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                title="Unblock time slot"
                            >
                                <span class="material-symbols-outlined text-sm">close</span>
                            </button>
                        </div>
                    </div>
                    <div v-else class="text-center py-8 text-gray-500">
                        <span class="material-symbols-outlined text-4xl mb-2 block">event_busy</span>
                        <p>No blocked time slots</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { apiFetch } from '@/config'

// Nama hari & bulan
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

// Data waktu aktif
const today = new Date()
const currentMonth = ref(today.getMonth())
const currentYear = ref(today.getFullYear())
const selectedDate = ref(null)
const bookings = ref([])
const blockedDates = ref([])
const blockedTimeSlots = ref([])
const muaProfile = ref(null)
const loading = ref(false)

// Set today as default selected date
const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
selectedDate.value = todayString

const statusColor = {
  available: 'bg-green-500',
  booked: 'bg-blue-500',
  blocked: 'bg-red-500',
}

// Fetch MUA profile to get available days
async function fetchMuaProfile() {
  try {
    const data = await apiFetch('/mua/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
      },
    })
    muaProfile.value = data
    console.log('Fetched MUA profile:', muaProfile.value)
  } catch (err) {
    console.error('Failed to load MUA profile:', err)
  }
}

// Fetch bookings from API
async function fetchBookings() {
  loading.value = true
  try {
    const data = await apiFetch('/mua/bookings', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
      },
    })
    bookings.value = data || []
    
    // Update status of past bookings to 'completed'
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of day for comparison
    bookings.value.forEach(booking => {
      if (booking.status !== 'cancelled' && booking.status !== 'completed') {
        const bookingDate = new Date(booking.date);
        bookingDate.setHours(0, 0, 0, 0); // Set to start of day for comparison
        if (bookingDate < today) {
          booking.status = 'completed';
        }
      }
    });
    
    console.log('Fetched bookings:', bookings.value)
  } catch (err) {
    console.error('Failed to load bookings:', err)
    bookings.value = []
  } finally {
    loading.value = false
  }
}

// Fetch blocked time slots from API
async function fetchBlockedTimeSlots() {
  try {
    const data = await apiFetch('/blocked-slots', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
      },
    })
    blockedTimeSlots.value = data || []
    
    // Update blockedDates array for backward compatibility
    blockedDates.value = data.map(slot => slot.date)
    console.log('Fetched blocked time slots:', blockedTimeSlots.value)
  } catch (err) {
    console.error('Failed to load blocked time slots:', err)
    blockedTimeSlots.value = []
  }
}

// Parse available days from profile
const availableDays = computed(() => {
  if (!muaProfile.value?.mua_profile?.available_days) return null
  
  try {
    const days = JSON.parse(muaProfile.value.mua_profile.available_days)
    return Array.isArray(days) ? days : []
  } catch (e) {
    return null
  }
})

// Check if a date is available based on day of week
function isDateAvailable(dateString) {
  if (!dateString) return true
  
  // If availableDays is null (no data), assume all days are available
  if (availableDays.value === null) return true
  
  const date = new Date(dateString)
  
  // Map day index to short day names
  const dayShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayShortName = dayShortNames[date.getDay()]
  
  // Check if the short day name is in available days
  return availableDays.value.includes(dayShortName)
}

// Check if a date is blocked
function isDateBlocked(dateString) {
  return blockedDates.value.includes(dateString)
}

// Group bookings by date
const bookingsByDate = computed(() => {
  const grouped = {}
  bookings.value.forEach(booking => {
    const date = booking.date // Backend menggunakan 'date' bukan 'booking_date'
    if (!grouped[date]) {
      grouped[date] = []
    }
    grouped[date].push({
      ...booking,
      service_name: booking.service?.name || 'Unknown Service',
      customer_name: booking.customer?.name || 'Unknown Customer',
      booking_time: booking.time // Backend menggunakan 'time' bukan 'booking_time'
    })
  })
  return grouped
})

// Get blocked slots for a specific date
function getBlockedSlotsForDate(dateString) {
  return blockedTimeSlots.value.filter(slot => slot.date === dateString)
}

// Get bookings for selected date
const selectedDateBookings = computed(() => {
  if (!selectedDate.value) return []
  return bookingsByDate.value[selectedDate.value] || []
})

function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1)
  const startDay = (firstDay.getDay() + 6) % 7 // Senin = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const calendar = []

  // Hari dari bulan sebelumnya
  for (let i = startDay - 1; i >= 0; i--) {
    calendar.push({ 
      day: daysInPrevMonth - i, 
      isCurrentMonth: false,
      date: null,
      bookings: []
    })
  }

  // Hari di bulan ini
  for (let i = 1; i <= daysInMonth; i++) {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
    calendar.push({
      day: i,
      isCurrentMonth: true,
      date: dateString,
      bookings: bookingsByDate.value[dateString] || [],
    })
  }

  return calendar
}

const calendarDates = computed(() =>
  generateCalendar(currentYear.value, currentMonth.value)
)

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

function selectDate(date) {
  if (date.isCurrentMonth && date.date && isDateAvailable(date.date) && !isDateBlocked(date.date)) {
    selectedDate.value = date.date
  }
}

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

function formatTime(timeString) {
  if (!timeString) return ''
  // Handle both HH:MM and HH:MM:SS formats
  const timeParts = timeString.split(':')
  const hours = parseInt(timeParts[0])
  const minutes = timeParts[1]
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const displayHours = hours % 12 || 12
  return `${displayHours}:${minutes} ${ampm}`
}

function getBookingStatusColor(status) {
  const colors = {
    'pending': 'bg-yellow-500',
    'confirmed': 'bg-green-500',
    'completed': 'bg-blue-500',
    'cancelled': 'bg-red-500'
  }
  return colors[status] || 'bg-gray-500'
}

function getBookingBgColor(status) {
  const colors = {
    'pending': 'bg-yellow-50 border border-yellow-200',
    'confirmed': 'bg-green-50 border border-green-200',
    'completed': 'bg-blue-50 border border-blue-200',
    'cancelled': 'bg-red-50 border border-red-200'
  }
  return colors[status] || 'bg-gray-50 border border-gray-200'
}

function getStatusTextColor(status) {
  const colors = {
    'pending': 'text-yellow-700',
    'confirmed': 'text-green-700',
    'completed': 'text-blue-700',
    'cancelled': 'text-red-700'
  }
  return colors[status] || 'text-gray-700'
}

function getStatusText(status) {
  const texts = {
    'pending': 'Pending',
    'confirmed': 'Confirmed',
    'completed': 'Completed',
    'cancelled': 'Cancelled'
  }
  return texts[status] || status
}

// Get date classes for styling
function getDateClasses(date) {
  if (!date.isCurrentMonth) {
    return 'bg-gray-50 opacity-50 border'
  }
  
  if (isDateBlocked(date.date)) {
    return 'bg-red-500 border border-red-600 cursor-not-allowed'
  }
  
  if (!isDateAvailable(date.date)) {
    return 'bg-red-50 border border-red-200'
  }
  
  return 'bg-white border'
}

// Get date text color
function getDateTextColor(date) {
  if (!date.isCurrentMonth) {
    return 'text-gray-400'
  }
  
  if (isDateBlocked(date.date) || !isDateAvailable(date.date)) {
    return 'text-red-600'
  }
  
  return 'text-gray-700'
}

// Get date cursor class
function getDateCursorClass(date) {
  if (!date.isCurrentMonth) {
    return 'cursor-default'
  }
  
  if (!isDateAvailable(date.date) || isDateBlocked(date.date)) {
    return 'cursor-not-allowed'
  }
  
  return 'cursor-pointer'
}

// Block selected date
async function blockSelectedDate() {
  if (!selectedDate.value) return
  
  try {
    // Send to backend to save blocked time slot (full day block)
    const blockedSlot = await apiFetch('/blocked-slots', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: selectedDate.value,
        is_full_day: true,
      }),
    })
    
    // Update local blockedDates and blockedTimeSlots with correct data
    if (!blockedDates.value.includes(blockedSlot.date)) {
      blockedDates.value.push(blockedSlot.date)
    }
    blockedTimeSlots.value.push(blockedSlot)
    
    alert(`Date ${formatDate(selectedDate.value)} has been blocked!`)
  } catch (err) {
    console.error('Failed to block date:', err)
    alert('Failed to block date')
  }
}

// Unblock time slot
async function unblockTimeSlot(id) {
  try {
    await apiFetch(`/blocked-slots/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
    
    // Update local blockedDates and blockedTimeSlots
    const slot = blockedTimeSlots.value.find(s => s.id === id)
    if (slot) {
      const index = blockedDates.value.indexOf(slot.date)
      if (index > -1) {
        blockedDates.value.splice(index, 1)
      }
      
      const slotIndex = blockedTimeSlots.value.findIndex(s => s.id === id)
      if (slotIndex > -1) {
        blockedTimeSlots.value.splice(slotIndex, 1)
      }
    }
    
    alert('Time slot has been unblocked!')
  } catch (err) {
    console.error('Failed to unblock time slot:', err)
    alert('Failed to unblock time slot')
  }
}

async function updateBookingStatus(bookingId, newStatus) {
  try {
    await apiFetch(`/mua/bookings/${bookingId}/status`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ status: newStatus })
    })
    
    // Update local booking status
    const booking = bookings.value.find(b => b.id === bookingId)
    if (booking) {
      booking.status = newStatus
    }
    
    alert(`Booking ${newStatus} successfully!`)
  } catch (err) {
    console.error('Failed to update booking status:', err)
    alert('Failed to update booking status')
  }
}

// Watch for month/year changes to refetch bookings if needed
watch([currentMonth, currentYear], () => {
  // Could add month-specific fetching here if needed
})

onMounted(() => {
  fetchBookings()
  fetchMuaProfile()
  fetchBlockedTimeSlots()
})
</script>
