import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiFetch } from '@/config'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref([])
  const unreadCount = ref(0)
  const loading = ref(false)

  const unreadNotifications = computed(() => 
    notifications.value.filter(n => !n.read)
  )

  const fetchNotifications = async () => {
    loading.value = true
    try {
      const response = await apiFetch('/notifications')
      notifications.value = response
      unreadCount.value = response.filter(n => !n.read).length
    } catch (error) {
      console.error('Error fetching notifications:', error)
    } finally {
      loading.value = false
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

  const addNotification = (notification) => {
    notifications.value.unshift(notification)
    if (!notification.read) {
      unreadCount.value++
    }
  }

  return {
    notifications,
    unreadCount,
    loading,
    unreadNotifications,
    fetchNotifications,
    fetchUnreadCount,
    markAsRead,
    markAllAsRead,
    addNotification
  }
})
