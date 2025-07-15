<template>
  <div id="webcrumbs">
    <div class="w-full min-h-screen">
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
            <div class="flex space-x-3">
                <button class="px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center space-x-1">
                    <span class="material-symbols-outlined text-sm">add</span> <span>New Slot</span>
                </button>
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
                      'h-24 p-2 rounded-lg',
                      date.isCurrentMonth ? 'bg-white border' : 'bg-gray-50 opacity-50',
                      'cursor-pointer hover:bg-gray-100 transition-colors border-gray-200',
                    ]"
                  >
                    <div class="text-sm font-medium text-gray-700">{{ date.day }}</div>
                    <div v-if="date.statuses" class="space-y-1 mt-1">
                      <div
                        v-for="(status, i) in date.statuses"
                        :key="i"
                        :class="['h-2 rounded-full', statusColor[status] || 'bg-gray-300']"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-6">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div class="space-y-3">
                        <button class="w-full flex items-center justify-center space-x-2 bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                            <span class="material-symbols-outlined text-lg">block</span>
                            <span>Block Time</span>
                        </button>
                        <button class="w-full flex items-center justify-center space-x-2 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors">
                            <span class="material-symbols-outlined text-lg">schedule</span>
                            <span>Set Hours</span>
                        </button>
                        <button class="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                            <span class="material-symbols-outlined text-lg">event_note</span>
                            <span>Add Break</span>
                        </button>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-4">Today&#x27;s Schedule</h3>
                                <div class="space-y-3">
                                    <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                        <div>
                                            <p class="font-medium text-sm">Hair Cut</p>
                                            <p class="text-xs text-gray-600">9:00 AM - 10:00 AM</p>
                                        </div>
                                        <div class="flex space-x-2">
                                            <button
                                                class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                                            >
                                                <span class="material-symbols-outlined text-sm">check</span>
                                            </button>
                                            <button
                                                class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                            >
                                                <span class="material-symbols-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                        <div>
                                            <p class="font-medium text-sm">Facial Treatment</p>
                                            <p class="text-xs text-gray-600">2:00 PM - 3:30 PM</p>
                                        </div>
                                        <div class="flex space-x-2">
                                            <button
                                                class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                                            >
                                                <span class="material-symbols-outlined text-sm">check</span>
                                            </button>
                                            <button
                                                class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                            >
                                                <span class="material-symbols-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-red-50 rounded-lg">
                                        <p class="font-medium text-sm">Personal Time Off</p>
                                        <p class="text-xs text-gray-600">12:00 PM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden"
                                id="timeSlotModal"
                            >
                                <div
                                    class="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
                                >
                                    <div class="flex items-center justify-between mb-6">
                                        <h3 class="text-xl font-semibold text-gray-900">Time Slot Details</h3>
                                        <button class="text-gray-500 hover:text-gray-700">
                                            <span class="material-symbols-outlined">close</span>
                                        </button>
                                    </div>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <div class="mb-4">
                                                <label class="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                                <div class="flex items-center p-3 bg-gray-50 rounded-lg">
                                                    <span class="material-symbols-outlined text-gray-500 mr-2"
                                                        >calendar_today</span
                                                    >
                                                    <span class="font-medium">Tuesday, May 9, 2023</span>
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <label class="block text-sm font-medium text-gray-700 mb-1"
                                                    >Time Range</label
                                                >
                                                <div class="flex space-x-3">
                                                    <div class="flex-1">
                                                        <select
                                                            class="w-full p-3 bg-white border border-gray-200 rounded-lg"
                                                        >
                                                            <option>9:00 AM</option>
                                                            <option>9:30 AM</option>
                                                            <option>10:00 AM</option>
                                                            <option>10:30 AM</option>
                                                        </select>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <span class="text-gray-500">to</span>
                                                    </div>
                                                    <div class="flex-1">
                                                        <select
                                                            class="w-full p-3 bg-white border border-gray-200 rounded-lg"
                                                        >
                                                            <option>10:00 AM</option>
                                                            <option>10:30 AM</option>
                                                            <option>11:00 AM</option>
                                                            <option>11:30 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <label class="block text-sm font-medium text-gray-700 mb-1"
                                                    >Status</label
                                                >
                                                <div class="flex space-x-3">
                                                    <button
                                                        class="flex-1 py-2 px-4 bg-green-100 text-green-700 rounded-lg border-2 border-green-500 hover:bg-green-200 transition-colors"
                                                    >
                                                        Available
                                                    </button>
                                                    <button
                                                        class="flex-1 py-2 px-4 bg-white text-blue-700 rounded-lg border-2 border-gray-200 hover:bg-blue-50 transition-colors"
                                                    >
                                                        Booked
                                                    </button>
                                                    <button
                                                        class="flex-1 py-2 px-4 bg-white text-red-700 rounded-lg border-2 border-gray-200 hover:bg-red-50 transition-colors"
                                                    >
                                                        Blocked
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
import { ref, computed } from 'vue'

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

const statusColor = {
  available: 'bg-green-500',
  booked: 'bg-blue-500',
  blocked: 'bg-red-500',
}

// Contoh data per tanggal
const mockStatuses = {
  '2025-07-10': ['available', 'booked'],
  '2025-07-11': ['blocked'],
  '2025-07-12': ['available'],
  '2025-07-13': ['booked', 'booked'],
}

function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1)
  const startDay = (firstDay.getDay() + 6) % 7 // Senin = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const calendar = []

  // Hari dari bulan sebelumnya
  for (let i = startDay - 1; i >= 0; i--) {
    calendar.push({ day: daysInPrevMonth - i, isCurrentMonth: false })
  }

  // Hari di bulan ini
  for (let i = 1; i <= daysInMonth; i++) {
    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
    calendar.push({
      day: i,
      isCurrentMonth: true,
      statuses: mockStatuses[key] || [],
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
</script>

