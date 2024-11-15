<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-20 space-y-6">
      <div class="relative">
        <div class="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        <h1 class="relative text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Web Developer & Creative Artist
        </h1>
      </div>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Crafting digital experiences through code, 3D design, and music
      </p>
      <div class="flex gap-4 justify-center">
        <router-link
          to="/contact"
          class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
        >
          Get in Touch
        </router-link>
        <router-link
          to="/projects"
          class="inline-block bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-105"
        >
          View Projects
        </router-link>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div class="group p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div class="mb-6 overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
            alt="Web Development"
            class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 class="text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Web Development</h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Creating modern, responsive websites with cutting-edge technologies and exceptional user experiences.
        </p>
      </div>

      <div class="group p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div class="mb-6 overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
            alt="3D Level Design"
            class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 class="text-2xl font-bold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">3D Level Design</h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Crafting immersive gaming experiences for Half-Life/Counter-Strike with attention to detail and gameplay flow.
        </p>
      </div>

      <div class="group p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div class="mb-6 overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
            alt="Music Production"
            class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 class="text-2xl font-bold mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Music Production</h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Composing and performing original music as a guitarist, blending technical skill with creative expression.
        </p>
      </div>
    </div>
  </div>
</template>