<template>
  <div class="mouse-follower" ref="follower">
    <div class="cursor-dot"></div>
    <div class="cursor-ring"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const follower = ref(null)
let mouseX = 0
let mouseY = 0
let dotX = 0
let dotY = 0
let ringX = 0
let ringY = 0
let animationId = null

const handleMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

const animate = () => {
  // 平滑跟随效果
  dotX += (mouseX - dotX) * 0.1
  dotY += (mouseY - dotY) * 0.1
  ringX += (mouseX - ringX) * 0.05
  ringY += (mouseY - ringY) * 0.05

  if (follower.value) {
    const dot = follower.value.querySelector('.cursor-dot')
    const ring = follower.value.querySelector('.cursor-ring')
    
    if (dot && ring) {
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
    }
  }

  animationId = requestAnimationFrame(animate)
}

const handleMouseEnter = () => {
  if (follower.value) {
    follower.value.style.opacity = '1'
  }
}

const handleMouseLeave = () => {
  if (follower.value) {
    follower.value.style.opacity = '0'
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseenter', handleMouseEnter)
  document.addEventListener('mouseleave', handleMouseLeave)
  
  // 初始化位置
  mouseX = window.innerWidth / 2
  mouseY = window.innerHeight / 2
  dotX = mouseX
  dotY = mouseY
  ringX = mouseX
  ringY = mouseY
  
  animate()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseenter', handleMouseEnter)
  document.removeEventListener('mouseleave', handleMouseLeave)
  
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.mouse-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cursor-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(6, 182, 212, 0.8);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  will-change: transform;
}

.cursor-ring {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid rgba(6, 182, 212, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  will-change: transform;
}

/* 悬停效果 */
.mouse-follower:hover .cursor-ring {
  border-color: rgba(6, 182, 212, 0.6);
  transform: translate(-50%, -50%) scale(1.2);
}

/* 移动端隐藏 */
@media (max-width: 768px) {
  .mouse-follower {
    display: none;
  }
}

/* 减少动画偏好设置 */
@media (prefers-reduced-motion: reduce) {
  .cursor-dot,
  .cursor-ring {
    transition: none;
  }
}
</style> 