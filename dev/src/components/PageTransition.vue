<template>
  <transition
    name="page-transition"
    mode="out-in"
    appear
  >
    <slot />
  </transition>
</template>

<script setup>
// 纯CSS动画，无需额外逻辑
</script>

<style scoped>
/* 页面切换动画 */
.page-transition-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-transition-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.95);
}

/* 性能优化 */
.page-transition-enter-active,
.page-transition-leave-active {
  will-change: transform, opacity;
}

/* 减少动画偏好设置 */
@media (prefers-reduced-motion: reduce) {
  .page-transition-enter-active,
  .page-transition-leave-active {
    transition: none !important;
  }
  
  .page-transition-enter-from,
  .page-transition-leave-to {
    transform: none !important;
    opacity: 1 !important;
  }
}
</style> 