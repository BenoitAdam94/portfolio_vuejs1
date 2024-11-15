<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navbar />
    <main class="container mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <transition 
          name="page" 
          mode="out-in"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @leave="onLeave"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import Navbar from './components/Navbar.vue'

const onBeforeEnter = (el: Element) => {
  (el as HTMLElement).style.opacity = '0'
  ;(el as HTMLElement).style.transform = 'translateY(20px)'
}

const onEnter = (el: Element, done: () => void) => {
  requestAnimationFrame(() => {
    (el as HTMLElement).style.transition = 'all 0.3s ease-out'
    ;(el as HTMLElement).style.opacity = '1'
    ;(el as HTMLElement).style.transform = 'translateY(0)'
    done()
  })
}

const onLeave = (el: Element, done: () => void) => {
  ;(el as HTMLElement).style.opacity = '0'
  ;(el as HTMLElement).style.transform = 'translateY(-20px)'
  setTimeout(done, 300)
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>