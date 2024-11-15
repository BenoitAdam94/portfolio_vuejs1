<template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Info -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 class="text-2xl font-bold mb-8">Contact Information</h3>
        <div class="space-y-6">
          <div class="flex items-center group">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
              <span class="text-2xl">📧</span>
            </div>
            <a href="mailto:your.email@example.com" class="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              your.email@example.com
            </a>
          </div>
          <div class="flex items-center group">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
              <span class="text-2xl">💼</span>
            </div>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div class="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 class="text-lg font-semibold mb-4">Working Hours</h4>
          <p class="text-gray-600 dark:text-gray-300">
            Monday - Friday<br>
            9:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name *
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-colors"
              placeholder="Your name"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-colors"
              placeholder="your.email@example.com"
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-colors"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>