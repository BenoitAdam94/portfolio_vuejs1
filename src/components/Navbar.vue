<template>
  <nav class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <router-link 
          to="/" 
          class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Portfolio
        </router-link>
        
        <div class="hidden md:flex space-x-8">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105"
            :class="{ 'text-blue-600 dark:text-blue-400 font-semibold': currentRoute === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <span class="sr-only">Menu</span>
          <div class="w-6 h-6 text-gray-600 dark:text-gray-300">
            <span v-if="!isMenuOpen">☰</span>
            <span v-else>✕</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden absolute inset-x-0 top-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg"
    >
      <div class="px-4 py-2 space-y-1">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          :class="{ 'text-blue-600 dark:text-blue-400 font-semibold': currentRoute === item.path }"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const currentRoute = computed(() => route.path)

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'My Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]
</script>