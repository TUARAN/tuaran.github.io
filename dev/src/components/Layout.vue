<template>
  <div class="min-h-screen bg-zinc-900">
    <header class="bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800 sticky top-0 z-50">
      <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div class="flex w-full items-center justify-between py-4">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">CM</span>
              </div>
              <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                CodeMiner
              </span>
            </router-link>
            <div class="ml-10 space-x-8">
              <router-link to="/" class="nav-link">Home</router-link>
              <router-link to="/blog" class="nav-link">Blog</router-link>
              <router-link to="/projects" class="nav-link">Projects</router-link>
              <router-link to="/about" class="nav-link">About</router-link>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="hidden md:flex items-center space-x-2 text-sm text-zinc-400">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Mining...</span>
            </div>
            <button class="btn-connect">
              <span class="mr-2">🔗</span>
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </header>
    
    <main class="relative">
      <router-view />
    </main>
    
    <footer class="bg-zinc-900 border-t border-zinc-800">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-bold text-white mb-4">CodeMiner</h3>
            <p class="text-zinc-400 text-sm">
              Code like hell, open source or die, decentralize the damn world.
            </p>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><router-link to="/projects" class="text-zinc-400 hover:text-cyan-400 transition-colors">Projects</router-link></li>
              <li><router-link to="/blog" class="text-zinc-400 hover:text-cyan-400 transition-colors">Blog</router-link></li>
              <li><router-link to="/about" class="text-zinc-400 hover:text-cyan-400 transition-colors">About</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Connect</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-zinc-400 hover:text-cyan-400 transition-colors">
                <span class="text-xl">🐙</span>
              </a>
              <a href="#" class="text-zinc-400 hover:text-cyan-400 transition-colors">
                <span class="text-xl">🐦</span>
              </a>
              <a href="#" class="text-zinc-400 hover:text-cyan-400 transition-colors">
                <span class="text-xl">💼</span>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-zinc-800">
          <p class="text-center text-xs text-zinc-500">
            &copy; 2024 CodeMiner by TUARAN. Built with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-link {
  @apply text-base font-medium text-zinc-400 hover:text-cyan-400 transition-colors duration-200 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-200;
}

.nav-link:hover::after {
  @apply w-full;
}

.btn-connect {
  @apply bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center text-sm;
}
</style> 