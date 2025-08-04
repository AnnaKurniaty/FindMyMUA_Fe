<template>
  <div class="relative">
    <button
      @click="toggleNotifications"
      class="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      <span
        v-if="unreadCount > 0"
        class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
      >
        {{ unreadCount }}
      </span>
    </button>

    <!-- Notifications Dropdown -->
    <div
      v-if="showNotifications"
      class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
    >
      <div class="p-4 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-900">Notifications</h3>
          <button
            v-if="notifications.length > 0"
            @click="markAllAsRead"
            class="text-sm text-blue-600 hover:text-blue-800"
          >
            Mark all as read
          </button>
        </div>
      </div>

      <div class="max-h-96 overflow-y-auto">
        <div v-if="notifications.length === 0" class="p-4 text-center text-gray-500">
          No notifications
        </div>

        <div
          v-for="notification in notifications"
          :key="notification.id"
          class="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
          :class="{ 'bg-blue-50': !notification.read }"
          @click="markAsRead(notification.id)"
        >
          <div class="flex items-start">
            <div class="flex-1">
              <h4 class="text-sm font-medium text-gray-900">{{ notification.title }}</h4>
              <p class="text-sm text-gray-600 mt-1">{{ notification.message }}</p>
              <p class="text-xs text-gray-400 mt-2">
                {{ formatTime(notification.created_at) }}
              </p>
            </div>
            <div
              v-if="!notification.read"
              class="w-2 h-2 bg-blue-500 rounded-full mt-2"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { apiFetch } from '@/config'

const showNotifications = ref(false)
const notifications = ref([])
const unreadCount = ref(0)

const fetchNotifications = async () => {
  try {
    const response = await apiFetch('/notifications')
    notifications.value = response
    unreadCount.value = response.filter(n => !n.read).length
  } catch (error) {
    console.error('Error fetching notifications:', error)
  }
}

const fetchUnreadCount = async () => {
  try {
    const response = await apiFetch('/notifications/unread-count')
    unreadCount.value = response.count
  } catch (error) {
    console.error('Error fetching unread count:', error)
  }
}

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
  if (showNotifications.value) {
    fetchNotifications()
  }
}

const markAsRead = async (id) => {
  try {
    await apiFetch(`/notifications/${id}/read`, { method: 'PUT' })
    await fetchNotifications()
    await fetchUnreadCount()
  } catch (error) {
    console.error('Error marking notification as read:', error)
  }
}

const markAllAsRead = async () => {
  try {
    await apiFetch('/notifications/mark-all-read', { method: 'POST' })
    await fetchNotifications()
    await fetchUnreadCount()
  } catch (error) {
    console.error('Error marking all as read:', error)
  }
}

const formatTime = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))
  
  if (diffInHours < 1) {
    return 'Just now'
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`
  } else {
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    showNotifications.value = false
  }
}

onMounted(() => {
  fetchUnreadCount()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Poll for new notifications every 30 seconds
setInterval(() => {
  fetchUnreadCount()
}, 30000)
</script>
