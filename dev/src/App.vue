<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import AnimatedBackground from './components/AnimatedBackground.vue';
import MouseFollower from './components/MouseFollower.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen relative">
    <!-- 动效背景 -->
    <AnimatedBackground />
    
    <!-- 鼠标跟随效果 -->
    <MouseFollower />

    <!-- Content -->
    <div class="relative z-10">
      <Navbar />
      <main class="pt-24 pb-8">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </main>
      <Footer />
    </div>
  </div>
</template>

<style>
/* 全局动效样式 */
.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.slide-up {
  animation: slideUp 0.6s ease-out;
}

.scale-in {
  animation: scaleIn 0.5s ease-out;
}

/* 悬停动效 */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(6, 182, 212, 0.2);
}

.hover-glow {
  transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
}

/* 按钮动效 */
.btn-animated {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-animated::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn-animated:hover::before {
  left: 100%;
}

/* 卡片动效 */
.card-animated {
  transition: all 0.3s ease;
  transform: translateZ(0);
}

.card-animated:hover {
  transform: translateY(-8px) translateZ(0);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* 文字动效 */
.text-glow {
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
  transition: text-shadow 0.3s ease;
}

.text-glow:hover {
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.8);
}

/* 动画关键帧 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #06b6d4, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #0891b2, #7c3aed);
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 选择样式 */
::selection {
  background: rgba(6, 182, 212, 0.3);
  color: white;
}

/* 焦点样式 */
*:focus {
  outline: 2px solid #06b6d4;
  outline-offset: 2px;
}

/* 性能优化 */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 减少动画偏好设置 */
@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .slide-up,
  .scale-in,
  .hover-lift,
  .btn-animated,
  .card-animated,
  .text-glow {
    animation: none !important;
    transition: none !important;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 加载动画 */
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(6, 182, 212, 0.3);
  border-top: 3px solid #06b6d4;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式动效 */
@media (max-width: 768px) {
  .hover-lift:hover {
    transform: translateY(-2px);
  }
  
  .card-animated:hover {
    transform: translateY(-4px);
  }
}
</style>
