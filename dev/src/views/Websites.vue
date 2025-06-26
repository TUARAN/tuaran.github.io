<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Header Section -->
    <div class="pt-24 pb-12 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            我的网站作品集
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            探索我开发的现代化网站项目，每个都融合了创新的设计理念和先进的技术栈
          </p>
        </div>
      </div>
    </div>

    <!-- Websites Grid -->
    <div class="px-6 pb-24">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 个人站点 -->
          <div class="website-card group">
            <div class="card-header">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <span class="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">个人站点</h3>
                  <p class="text-sm text-gray-400">开发者主页</p>
                </div>
              </div>
              <p class="text-gray-300 mb-6">
                现代化的开发者主页，采用 Vue 3 + Tailwind CSS + Glassmorphism 设计风格，展示 AI 编程数据、项目作品和博客内容。
              </p>
            </div>
            
            <div class="card-content">
              <div class="tech-stack mb-6">
                <div class="flex flex-wrap gap-2">
                  <span class="tech-tag">Vue 3</span>
                  <span class="tech-tag">Tailwind CSS</span>
                  <span class="tech-tag">Glassmorphism</span>
                  <span class="tech-tag">Chart.js</span>
                </div>
              </div>
              
              <div class="links-section">
                <div class="grid grid-cols-2 gap-3">
                  <a 
                    href="https://tuaran-github-io.pages.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="link-btn primary"
                  >
                    <Globe class="w-4 h-4" />
                    主站点
                  </a>
                  <a 
                    href="https://tuaran.github.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="link-btn secondary"
                  >
                    <Github class="w-4 h-4" />
                    GitHub Pages
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- 博主联盟 -->
          <div class="website-card group">
            <div class="card-header">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Users class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">博主联盟</h3>
                  <p class="text-sm text-gray-400">内容创作者平台</p>
                </div>
              </div>
              <p class="text-gray-300 mb-6">
                连接内容创作者的社区平台，提供博客聚合、互动交流和资源共享功能，助力博主们共同成长。
              </p>
            </div>
            
            <div class="card-content">
              <div class="tech-stack mb-6">
                <div class="flex flex-wrap gap-2">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Next.js</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">Prisma</span>
                </div>
              </div>
              
              <div class="links-section">
                <a 
                  href="https://blogger-alliance.pages.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="link-btn primary w-full"
                >
                  <Globe class="w-4 h-4" />
                  访问网站
                </a>
              </div>
            </div>
          </div>

          <!-- AI Agent 开发奥赛德 -->
          <div class="website-card group">
            <div class="card-header">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
                  <Zap class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">AI Agent 开发奥赛德</h3>
                  <p class="text-sm text-gray-400">AI 开发平台</p>
                </div>
              </div>
              <p class="text-gray-300 mb-6">
                探索 AI Agent 开发的创新平台，提供智能代理构建工具、模型训练环境和部署解决方案。
              </p>
            </div>
            
            <div class="card-content">
              <div class="tech-stack mb-6">
                <div class="flex flex-wrap gap-2">
                  <span class="tech-tag">AI/ML</span>
                  <span class="tech-tag">Python</span>
                  <span class="tech-tag">FastAPI</span>
                  <span class="tech-tag">LangChain</span>
                </div>
              </div>
              
              <div class="links-section">
                <a 
                  href="https://dev-odyssey.pages.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="link-btn primary w-full"
                >
                  <Globe class="w-4 h-4" />
                  访问网站
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="mt-16">
          <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
            <h2 class="text-2xl font-bold text-white mb-6 text-center">项目统计</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  3
                </div>
                <p class="text-gray-400">已发布网站</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p class="text-gray-400">响应式设计</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p class="text-gray-400">在线可用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Globe, Github, Users, Zap } from 'lucide-vue-next';
</script>

<style scoped>
.website-card {
  @apply bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20;
}

.card-header {
  @apply mb-6;
}

.card-content {
  @apply space-y-4;
}

.tech-stack {
  @apply flex flex-wrap gap-2;
}

.tech-tag {
  @apply px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20;
}

.links-section {
  @apply space-y-3;
}

.link-btn {
  @apply flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200;
}

.link-btn.primary {
  @apply bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:shadow-cyan-500/25;
}

.link-btn.secondary {
  @apply bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white;
}

/* Performance optimizations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Disable animations for better performance */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style> 