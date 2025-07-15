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
            <span class="font-bold text-gray-800">12</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Upcoming</span>
            <span class="font-bold text-gray-800">8</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Completed</span>
            <span class="font-bold text-gray-800">24</span>
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
            <span class="font-bold text-gray-800">$450</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Weekly</span>
            <span class="font-bold text-gray-800">$2,100</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Monthly</span>
            <span class="font-bold text-gray-800">$8,900</span>
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
            <span class="text-gray-800">New Messages</span>
            <span class="font-bold text-gray-800">5</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Reviews</span>
            <span class="font-bold text-gray-800">3</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-800">Reminders</span>
            <span class="font-bold text-gray-800">2</span>
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
            <button onclick="window.location.href='bookings'" class="w-full bg-white rounded-full py-2 px-4 text-gray-800 hover:bg-purple-50 transition-all text-sm transform hover:scale-105 duration-300">
                View Bookings
            </button>
        </div>
      </div>
    </div>
     <div class="bg-white rounded-2xl p-6 hover:shadow-md transform hover:-translate-y-1 transition">
      <div class="overflow-x-auto">
        <table class="w-full min-w-full">
          <thead class="border-b border-pink-100">
            <tr>
              <th class="py-3 text-left text-gray-800 font-medium">Client</th>
              <th class="py-3 text-left text-gray-800 font-medium">Service</th>
              <th class="py-3 text-left text-gray-800 font-medium">Date & Time</th>
              <th class="py-3 text-left text-gray-800 font-medium">Status</th>
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
                <p class="text-xs text-gray-800">{{ booking.duration }}</p>
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
                    'bg-yellow-100 text-yellow-700': booking.status === 'Needs Confirmation'
                  }"
                >
                  {{ booking.status }}
                </span>
              </td>
              <td class="py-4">
                <div class="flex gap-2">
                  <button class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 text-gray-800">
                    <span class="material-symbols-outlined text-sm">chat</span>
                  </button>
                  <button class="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 text-gray-800">
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
</template>

<script setup>
import { ref, computed } from 'vue'

const bookings = ref([
  {
    name: 'Emma Johnson',
    style: 'Natural look',
    service: 'Wedding Makeup',
    duration: '3 hours',
    date: 'March 15, 2024',
    time: '10:00 AM - 1:00 PM',
    status: 'Confirmed'
  },
  {
    name: 'Lisa Chen',
    style: 'Natural finish',
    service: 'Graduation Makeup',
    duration: '1.5 hours',
    date: 'March 20, 2024',
    time: '2:00 PM - 3:30 PM',
    status: 'Pending'
  },
  {
    name: 'Sophia Martinez',
    style: 'Glam look',
    service: 'Party Makeup',
    duration: '2 hours',
    date: 'March 25, 2024',
    time: '6:00 PM - 8:00 PM',
    status: 'Needs Confirmation'
  },
  // Tambah data lain jika perlu
])

const currentPage = ref(1)
const perPage = ref(2)

const totalPages = computed(() => Math.ceil(bookings.value.length / perPage.value))

const paginatedBookings = computed(() =>
  bookings.value.slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value)
)

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page
}
</script>

