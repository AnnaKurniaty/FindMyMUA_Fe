<template>
  <div class="min-h-screen bg-pink-50">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-gray-900">Notifications</h1>
        </div>

        <div v-if="loading" class="text-center py-8">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500 mx-auto"></div>
        </div>

        <div v-else-if="notifications.length === 0" class="text-center py-12">
          <div class="text-gray-400 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <p class="text-gray-500">No notifications yet</p>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="notification in notifications"
            :key="notification.id"
            class="border rounded-lg p-4 hover:shadow-md transition-shadow"
            :class="{ 'bg-pink-50 border-pink-200': !notification.read, 'bg-white border-gray-200': notification.read }"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <div
                    v-if="!notification.read"
                    class="w-2 h-2 bg-pink-500 rounded-full mr-2"
                  ></div>
                  <h3 class="font-semibold text-gray-900">{{ notification.title }}</h3>
                </div>
                <p class="text-gray-600 mb-2">{{ notification.message }}</p>
                <p class="text-sm text-gray-400">{{ formatTime(notification.created_at) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()
const notifications = ref([])
const loading = ref(false)

const fetchNotifications = async () => {
  loading.value = true
  await notificationStore.fetchNotifications()
  notifications.value = notificationStore.notifications
  loading.value = false
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

onMounted(() => {
  fetchNotifications()
})
</script>
