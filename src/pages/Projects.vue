<template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My Projects</h2>

    <div class="space-y-24">
      <!-- Websites Section -->
      <section>
        <h3 class="text-3xl font-bold mb-8 flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
            alt="Web Development Icon"
            class="w-8 h-8 rounded mr-3 object-cover"
          />
          Web Development
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Project Preview"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <h4 class="text-xl font-bold text-white mb-2">E-Commerce Platform</h4>
                <p class="text-gray-200">Modern shopping experience with React and Node.js</p>
              </div>
            </div>
          </div>

          <div class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Project Preview"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <h4 class="text-xl font-bold text-white mb-2">Analytics Dashboard</h4>
                <p class="text-gray-200">Real-time data visualization platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3D Maps Section -->
      <section>
        <h3 class="text-3xl font-bold mb-8 flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
            alt="3D Design Icon"
            class="w-8 h-8 rounded mr-3 object-cover"
          />
          3D Level Design
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Map Preview"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <h4 class="text-xl font-bold text-white mb-2">de_metropolis</h4>
                <p class="text-gray-200">Urban combat map for Counter-Strike</p>
              </div>
            </div>
          </div>

          <div class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Map Preview"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <h4 class="text-xl font-bold text-white mb-2">hm_facility</h4>
                <p class="text-gray-200">Research facility map for Half-Life</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Music Section -->
      <section>
        <h3 class="text-3xl font-bold mb-8 flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
            alt="Music Icon"
            class="w-8 h-8 rounded mr-3 object-cover"
          />
          Music Projects
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Music Project"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <h4 class="text-xl font-bold text-white mb-2">Progressive Metal Album</h4>
                <p class="text-gray-200">Original compositions and arrangements</p>
              </div>
            </div>
          </div>

          <div class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Music Project"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <h4 class="text-xl font-bold text-white mb-2">Live Performances</h4>
                <p class="text-gray-200">Concert recordings and live sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>