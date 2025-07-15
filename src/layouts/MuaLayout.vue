<template>
  <div id="webcrumbs">
    <div class="w-full min-h-screen bg-pink-50 p-6">
      <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
        <NavbarMua />
        <div class="p-6">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarMua from '../components/NavbarMua.vue'
</script>

<style scoped></style>
