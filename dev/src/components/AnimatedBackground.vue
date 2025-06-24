<template>
  <div class="animated-background">
    <!-- 基础背景 -->
    <div class="base-bg"></div>
    
    <!-- 渐变背景 -->
    <div class="gradient-bg"></div>
    
    <!-- 浮动粒子 -->
    <div class="particles-container">
      <div 
        v-for="i in 12" 
        :key="i"
        class="particle"
        :class="`particle-${i}`"
      ></div>
    </div>
    
    <!-- 网格背景 -->
    <div class="grid-bg"></div>
    
    <!-- 光晕效果 -->
    <div class="glow-effects">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>
    </div>
  </div>
</template>

<script setup>
// 这是一个纯展示组件，不需要额外的逻辑
</script>

<style scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

/* 基础背景 */
.base-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
}

/* 渐变背景 */
.gradient-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(6, 182, 212, 0.15) 0%,
    rgba(59, 130, 246, 0.12) 25%,
    rgba(147, 51, 234, 0.15) 50%,
    rgba(236, 72, 153, 0.12) 75%,
    rgba(6, 182, 212, 0.15) 100%
  );
  animation: gradientShift 20s ease-in-out infinite;
}

/* 网格背景 */
.grid-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  animation: gridMove 30s linear infinite;
}

/* 浮动粒子 */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(6, 182, 212, 1);
  border-radius: 50%;
  transform: translateZ(0);
  will-change: transform, opacity;
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.8);
}

.particle-1 {
  top: 10%;
  left: 10%;
  animation: particleFloat1 15s ease-in-out infinite;
}

.particle-2 {
  top: 20%;
  left: 80%;
  background: rgba(147, 51, 234, 1);
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.8);
  animation: particleFloat2 18s ease-in-out infinite reverse;
}

.particle-3 {
  top: 30%;
  left: 20%;
  background: rgba(59, 130, 246, 1);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
  animation: particleFloat3 20s ease-in-out infinite;
}

.particle-4 {
  top: 40%;
  left: 70%;
  background: rgba(236, 72, 153, 1);
  box-shadow: 0 0 15px rgba(236, 72, 153, 0.8);
  animation: particleFloat1 16s ease-in-out infinite reverse;
}

.particle-5 {
  top: 50%;
  left: 15%;
  background: rgba(6, 182, 212, 1);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.8);
  animation: particleFloat2 17s ease-in-out infinite;
}

.particle-6 {
  top: 60%;
  left: 85%;
  background: rgba(147, 51, 234, 1);
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.8);
  animation: particleFloat3 19s ease-in-out infinite reverse;
}

.particle-7 {
  top: 70%;
  left: 25%;
  background: rgba(59, 130, 246, 1);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
  animation: particleFloat1 14s ease-in-out infinite;
}

.particle-8 {
  top: 80%;
  left: 75%;
  background: rgba(236, 72, 153, 1);
  box-shadow: 0 0 15px rgba(236, 72, 153, 0.8);
  animation: particleFloat2 21s ease-in-out infinite reverse;
}

.particle-9 {
  top: 90%;
  left: 35%;
  background: rgba(6, 182, 212, 1);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.8);
  animation: particleFloat3 22s ease-in-out infinite;
}

.particle-10 {
  top: 15%;
  left: 50%;
  background: rgba(147, 51, 234, 1);
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.8);
  animation: particleFloat1 23s ease-in-out infinite reverse;
}

.particle-11 {
  top: 65%;
  left: 40%;
  background: rgba(59, 130, 246, 1);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
  animation: particleFloat2 24s ease-in-out infinite;
}

.particle-12 {
  top: 85%;
  left: 60%;
  background: rgba(236, 72, 153, 1);
  box-shadow: 0 0 15px rgba(236, 72, 153, 0.8);
  animation: particleFloat3 25s ease-in-out infinite reverse;
}

/* 光晕效果 */
.glow-effects {
  position: absolute;
  width: 100%;
  height: 100%;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.6;
  transform: translateZ(0);
  will-change: transform, opacity;
}

.glow-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
  top: 20%;
  left: 20%;
  animation: glowFloat1 25s ease-in-out infinite;
}

.glow-2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, transparent 70%);
  top: 60%;
  right: 20%;
  animation: glowFloat2 30s ease-in-out infinite reverse;
}

.glow-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%);
  bottom: 20%;
  left: 60%;
  animation: glowFloat3 35s ease-in-out infinite;
}

/* 动画关键帧 */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

@keyframes particleFloat1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  33% {
    transform: translate(30px, -20px) scale(1.2);
    opacity: 1;
  }
  66% {
    transform: translate(-20px, 30px) scale(0.8);
    opacity: 1;
  }
}

@keyframes particleFloat2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-40px, -30px) scale(1.3);
    opacity: 1;
  }
}

@keyframes particleFloat3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  25% {
    transform: translate(25px, -15px) scale(1.1);
    opacity: 1;
  }
  75% {
    transform: translate(-15px, 25px) scale(0.9);
    opacity: 1;
  }
}

@keyframes glowFloat1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(50px, -30px) scale(1.2);
    opacity: 0.8;
  }
}

@keyframes glowFloat2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-40px, 40px) scale(1.1);
    opacity: 0.8;
  }
}

@keyframes glowFloat3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(30px, -20px) scale(1.3);
    opacity: 0.8;
  }
}

/* 性能优化 */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 减少动画偏好设置 */
@media (prefers-reduced-motion: reduce) {
  .gradient-bg,
  .grid-bg,
  .particle,
  .glow {
    animation: none !important;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 移动端优化 */
@media (max-width: 768px) {
  .particle {
    width: 6px;
    height: 6px;
  }
  
  .glow {
    filter: blur(20px);
  }
  
  .glow-1 {
    width: 200px;
    height: 200px;
  }
  
  .glow-2 {
    width: 150px;
    height: 150px;
  }
  
  .glow-3 {
    width: 100px;
    height: 100px;
  }
}
</style> 