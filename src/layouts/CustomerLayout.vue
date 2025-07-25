<template>
  <div id="webcrumbs" class="relative">
    <Sidebar />

    <div class="w-full min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-6 pl-15">
      <div class="space-y-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>
