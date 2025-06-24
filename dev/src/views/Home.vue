<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative">
    <!-- Simple static background -->
    <div class="absolute inset-0">
      <div class="simple-bg"></div>
    </div>
    
    <!-- Main content -->
    <div class="relative z-10 min-h-screen px-6 py-8">
      <!-- Hero section -->
      <div class="text-center max-w-4xl mx-auto mb-12">
        <!-- Logo/Title -->
        <div class="mb-8">
          <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            代码矿工
          </h1>
          <div class="text-2xl md:text-3xl font-bold text-zinc-300 mt-2">
            TUARAN
          </div>
        </div>

        <!-- Philosophy statement -->
        <div class="mb-8">
          <p class="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            <span class="philosophy-highlight">疯狂编码</span>， 
            <span class="text-blue-400 font-semibold">开源或死亡</span>， 
            <span class="text-purple-400 font-semibold">去中心化这个世界</span>。
          </p>
          <p class="text-lg md:text-xl text-zinc-500 mt-4 italic">
            如果我的AI每天不能产出1万行代码，我就没有活着。
          </p>
        </div>

        <!-- Action buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="btn-primary">
            <span class="mr-2">🚀</span>
            开始编码
          </button>
          <button class="btn-secondary">
            <span class="mr-2">📚</span>
            查看项目
          </button>
          <button class="btn-secondary">
            <span class="mr-2">💻</span>
            加入革命
          </button>
        </div>
      </div>

      <!-- Dashboard Grid -->
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- 数据看板 -->
          <div class="lg:col-span-2">
            <CodeAnalytics />
          </div>
          
          <!-- 项目看板 -->
          <div class="lg:col-span-1">
            <ProjectDashboard />
          </div>
          
          <!-- 博文日记看板 -->
          <div class="lg:col-span-3">
            <BlogDashboard />
          </div>
        </div>
      </div>

      <!-- Animated code blocks -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div class="code-block">
          <div class="code-header">
            <span class="code-dot bg-red-500"></span>
            <span class="code-dot bg-yellow-500"></span>
            <span class="code-dot bg-green-500"></span>
            <span class="code-title">编码.js</span>
          </div>
          <pre class="code-content"><code>const 疯狂编码 = async () => {
  while (true) {
    const 代码行数 = await 生成代码();
    if (代码行数.length < 10000) {
      throw new Error("还不够活着！");
    }
    await 提交到Git();
    await 睡眠(1000);
  }
};</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header">
            <span class="code-dot bg-red-500"></span>
            <span class="code-dot bg-yellow-500"></span>
            <span class="code-dot bg-green-500"></span>
            <span class="code-title">去中心化.js</span>
          </div>
          <pre class="code-content"><code>const 去中心化 = () => {
  const 世界 = 获取当前世界();
  世界.移除中心化();
  世界.添加区块链();
  世界.添加开源();
  return "世界已去中心化！";
};</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import CodeAnalytics from '../components/CodeAnalytics.vue'
import ProjectDashboard from '../components/ProjectDashboard.vue'
import BlogDashboard from '../components/BlogDashboard.vue'

onMounted(() => {
  // Simple counter animation without complex calculations
  const animateCounter = (elementId, target) => {
    const element = document.getElementById(elementId)
    if (!element) return
    
    let current = 0
    const step = target / 50 // 50 steps total
    
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current).toLocaleString()
    }, 40) // Slower interval for better performance
  }

  // Start animations after a delay
  setTimeout(() => {
    animateCounter('projectsCounter', 42)
    animateCounter('decentralizedCounter', 1337)
  }, 500)
})
</script>

<style scoped>
/* Ultra-simple background */
.simple-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(6, 182, 212, 0.05) 0%,
    rgba(59, 130, 246, 0.03) 50%,
    rgba(147, 51, 234, 0.05) 100%
  );
}

.stat-card {
  @apply bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center hover:bg-zinc-800/70 hover:border-cyan-500/50;
}

.stat-number {
  @apply text-4xl font-bold text-cyan-400 mb-2 !important;
}

.stat-label {
  @apply text-sm text-zinc-400 uppercase tracking-wider;
}

.btn-primary {
  @apply bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 flex items-center;
}

.btn-secondary {
  @apply bg-zinc-800/50 border border-zinc-600 hover:border-cyan-500/50 text-zinc-300 hover:text-white font-bold py-3 px-8 rounded-lg flex items-center;
}

.code-block {
  @apply bg-zinc-900/80 border border-zinc-700 rounded-lg overflow-hidden hover:border-cyan-500/50;
}

.code-header {
  @apply bg-zinc-800 px-4 py-3 flex items-center gap-2;
}

.code-dot {
  @apply w-3 h-3 rounded-full;
}

.code-title {
  @apply text-zinc-400 text-sm ml-2;
}

.code-content {
  @apply p-4 text-sm text-zinc-300 font-mono;
}

.code-content code {
  @apply text-green-400;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .grid {
    @apply grid-cols-1;
  }
}

.philosophy-highlight {
  @apply text-cyan-400 font-semibold !important;
}

/* Performance optimizations */
* {
  will-change: auto;
}

/* Disable all animations for better performance */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style> 