<template>
  <div id="webcrumbs">
    <div class="w-full min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-6">
      <div class="flex gap-6 h-full">
        <Sidebar />
        <div class="flex-1 space-y-6">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>
