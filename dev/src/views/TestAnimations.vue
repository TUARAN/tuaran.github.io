<template>
  <div class="min-h-screen p-8">
    <div class="max-w-6xl mx-auto">
      <!-- 标题 -->
      <div class="text-center mb-16 fade-in">
        <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-glow mb-4">
          动效测试页面
        </h1>
        <p class="text-xl text-gray-300">
          展示所有可用的动效和动画
        </p>
      </div>

      <!-- 基础动画 -->
      <section class="mb-16 slide-up">
        <h2 class="text-3xl font-bold text-white mb-8">基础动画</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card-animated bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <h3 class="text-xl font-semibold text-cyan-400 mb-4">淡入动画</h3>
            <p class="text-gray-300">使用 .fade-in 类</p>
          </div>
          <div class="card-animated bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <h3 class="text-xl font-semibold text-purple-400 mb-4">滑入动画</h3>
            <p class="text-gray-300">使用 .slide-up 类</p>
          </div>
          <div class="card-animated bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <h3 class="text-xl font-semibold text-pink-400 mb-4">缩放动画</h3>
            <p class="text-gray-300">使用 .scale-in 类</p>
          </div>
        </div>
      </section>

      <!-- 悬停动效 -->
      <section class="mb-16 slide-up">
        <h2 class="text-3xl font-bold text-white mb-8">悬停动效</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="card-animated bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
              <h3 class="text-xl font-semibold text-cyan-400 mb-4">卡片悬停</h3>
              <p class="text-gray-300">悬停时会有上浮和阴影效果</p>
            </div>
            <div class="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 hover-glow">
              <h3 class="text-xl font-semibold text-purple-400 mb-4">光晕效果</h3>
              <p class="text-gray-300">悬停时会有发光效果</p>
            </div>
          </div>
          <div class="space-y-6">
            <button class="btn-animated bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
              按钮动效
            </button>
            <h2 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-glow">
              发光文字
            </h2>
          </div>
        </div>
      </section>

      <!-- 数字动画 -->
      <section class="mb-16 slide-up">
        <h2 class="text-3xl font-bold text-white mb-8">数字动画</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center card-animated bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <div class="text-4xl font-bold text-cyan-400 mb-2" id="counter1">0</div>
            <div class="text-gray-400">项目数量</div>
          </div>
          <div class="text-center card-animated bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <div class="text-4xl font-bold text-purple-400 mb-2" id="counter2">0</div>
            <div class="text-gray-400">代码行数</div>
          </div>
          <div class="text-center card-animated bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <div class="text-4xl font-bold text-pink-400 mb-2" id="counter3">0</div>
            <div class="text-gray-400">用户数量</div>
          </div>
          <div class="text-center card-animated bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <div class="text-4xl font-bold text-green-400 mb-2" id="counter4">0</div>
            <div class="text-gray-400">下载次数</div>
          </div>
        </div>
      </section>

      <!-- 加载动画 -->
      <section class="mb-16 slide-up">
        <h2 class="text-3xl font-bold text-white mb-8">加载动画</h2>
        <div class="flex justify-center">
          <LoadingSpinner :loading="true" text="测试加载中..." />
        </div>
      </section>

      <!-- 交互按钮 -->
      <section class="mb-16 slide-up">
        <h2 class="text-3xl font-bold text-white mb-8">交互测试</h2>
        <div class="flex flex-wrap gap-4">
          <button 
            @click="triggerCounters" 
            class="btn-animated bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            触发数字动画
          </button>
          <button 
            @click="scrollToTop" 
            class="btn-animated bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            滚动到顶部
          </button>
          <button 
            @click="toggleLoading" 
            class="btn-animated bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            切换加载状态
          </button>
        </div>
      </section>

      <!-- 滚动测试区域 -->
      <section class="mb-16 slide-up">
        <h2 class="text-3xl font-bold text-white mb-8">滚动动画测试</h2>
        <div class="space-y-8">
          <div class="card-animated bg-zinc-800/50 p-8 rounded-lg border border-zinc-700">
            <h3 class="text-2xl font-semibold text-cyan-400 mb-4">滚动区域 1</h3>
            <p class="text-gray-300">向下滚动查看更多动画效果...</p>
          </div>
          <div class="card-animated bg-zinc-800/50 p-8 rounded-lg border border-zinc-700">
            <h3 class="text-2xl font-semibold text-purple-400 mb-4">滚动区域 2</h3>
            <p class="text-gray-300">继续滚动...</p>
          </div>
          <div class="card-animated bg-zinc-800/50 p-8 rounded-lg border border-zinc-700">
            <h3 class="text-2xl font-semibold text-pink-400 mb-4">滚动区域 3</h3>
            <p class="text-gray-300">最后一个区域</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { animateCounter, scrollToElement } from '../utils/animations'

const isLoading = ref(true)

const triggerCounters = () => {
  animateCounter(document.getElementById('counter1'), 42)
  animateCounter(document.getElementById('counter2'), 1337)
  animateCounter(document.getElementById('counter3'), 1000)
  animateCounter(document.getElementById('counter4'), 5000)
}

const scrollToTop = () => {
  scrollToElement(document.body, { duration: 1000 })
}

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}

onMounted(() => {
  // 延迟触发数字动画
  setTimeout(() => {
    triggerCounters()
  }, 1000)
})
</script>

<style scoped>
/* 自定义样式 */
.card-animated {
  transition: all 0.3s ease;
}

.card-animated:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(6, 182, 212, 0.2);
}

.btn-animated {
  transition: all 0.3s ease;
}

.btn-animated:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(6, 182, 212, 0.3);
}
</style> 