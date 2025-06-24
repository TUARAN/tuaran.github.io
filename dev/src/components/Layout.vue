<template>
  <div class="min-h-screen bg-zinc-900">
    <header class="bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800 sticky top-0 z-50">
      <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div class="flex w-full items-center justify-between py-4">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">TU</span>
              </div>
              <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                代码矿工
              </span>
            </router-link>
            <div class="ml-10 space-x-8">
              <router-link to="/" class="nav-link">首页</router-link>
              <router-link to="/blog" class="nav-link">博客</router-link>
              <router-link to="/projects" class="nav-link">项目</router-link>
              <router-link to="/about" class="nav-link">关于</router-link>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="hidden md:flex items-center space-x-2 text-sm text-zinc-400">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>编码中...</span>
            </div>
            <button class="btn-connect">
              <span class="mr-2">🔗</span>
              连接
            </button>
          </div>
        </div>
      </nav>
    </header>
    
    <main class="relative">
      <router-view />
    </main>
    
    <footer class="bg-zinc-900/80 backdrop-blur-sm border-t border-zinc-800 py-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center text-zinc-400 text-sm">
          &copy; 2025 代码矿工 by TUARAN. 用 ❤️ 和大量 ☕ 构建
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