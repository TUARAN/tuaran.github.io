<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative">
    <!-- Enhanced background with subtle animations -->
    <div class="absolute inset-0">
      <div class="simple-bg"></div>
      <!-- Subtle animated dots -->
      <div class="animated-dots">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
      </div>
    </div>
    
    <!-- Main content -->
    <div class="relative z-10 min-h-screen px-6 py-8">
      <!-- Hero section -->
      <div class="text-center max-w-4xl mx-auto mb-12">
        <!-- Logo/Title -->
        <div class="mb-8 fade-in">
          <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow">
            代码矿工
          </h1>
          <div class="text-2xl md:text-3xl font-bold text-zinc-300 mt-2 slide-up">
            TUARAN
          </div>
        </div>

        <!-- Philosophy statement -->
        <div class="mb-8 slide-up">
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
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center scale-in">
          <button class="btn-primary btn-animated">
            <span class="mr-2">🚀</span>
            开始编码
          </button>
          <button class="btn-secondary btn-animated">
            <span class="mr-2">📚</span>
            查看项目
          </button>
          <button class="btn-secondary btn-animated">
            <span class="mr-2">💻</span>
            加入革命
          </button>
        </div>
      </div>

      <!-- Dashboard Grid -->
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- 数据看板 -->
          <div class="lg:col-span-2 slide-up">
            <CodeAnalytics />
          </div>
          
          <!-- 项目看板 -->
          <div class="lg:col-span-1 slide-up">
            <ProjectDashboard />
          </div>
          
          <!-- 博文日记看板 -->
          <div class="lg:col-span-3 slide-up">
            <BlogDashboard />
          </div>
        </div>
      </div>

      <!-- Animated code blocks -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div class="code-block card-animated">
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

        <div class="code-block card-animated">
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
  // 添加滚动动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // 观察所有需要动画的元素
  document.querySelectorAll('.slide-up, .scale-in').forEach(el => {
    observer.observe(el)
  })

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
/* Enhanced background with subtle animations */
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

.animated-dots {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(6, 182, 212, 0.6);
  border-radius: 50%;
  transform: translateZ(0); /* GPU acceleration */
  will-change: transform, opacity;
}

.dot-1 {
  top: 20%;
  left: 15%;
  animation: dotFloat1 12s ease-in-out infinite;
}

.dot-2 {
  top: 60%;
  left: 80%;
  animation: dotFloat2 15s ease-in-out infinite reverse;
  background: rgba(147, 51, 234, 0.6);
}

.dot-3 {
  top: 80%;
  left: 25%;
  animation: dotFloat3 18s ease-in-out infinite;
  background: rgba(59, 130, 246, 0.6);
}

@keyframes dotFloat1 {
  0%, 100% { 
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: translate(20px, -15px) scale(1.2);
    opacity: 1;
  }
}

@keyframes dotFloat2 {
  0%, 100% { 
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: translate(-25px, 20px) scale(1.1);
    opacity: 1;
  }
}

@keyframes dotFloat3 {
  0%, 100% { 
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: translate(15px, -25px) scale(1.3);
    opacity: 1;
  }
}

.stat-card {
  @apply bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center hover:bg-zinc-800/70 hover:border-cyan-500/50 card-animated;
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

/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .slide-up,
  .scale-in,
  .card-animated {
    animation: none !important;
    transition: none !important;
  }
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style> 