<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="flex flex-col">
    <Navbar class="w-full h-auto" v-if="$route.fullPath === '/dashboard'">este es un bar</Navbar>
    <div class="w-full h-auto">
      <RouterView />
    </div>
  </div>
</template>
