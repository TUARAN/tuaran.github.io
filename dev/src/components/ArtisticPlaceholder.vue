<template>
  <div class="artistic-placeholder" :class="[`placeholder-${type}`, size]">
    <div class="placeholder-content">
      <div class="artistic-text">{{ text }}</div>
      <div class="artistic-subtitle">{{ subtitle }}</div>
    </div>
    <div class="placeholder-overlay"></div>
    <div class="floating-elements">
      <div class="floating-element" v-for="i in 5" :key="i" :style="{ animationDelay: `${i * 0.3}s` }"></div>
    </div>
    <div class="geometric-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
    <div class="particle-system">
      <div class="particle" v-for="i in 8" :key="i" :style="{ animationDelay: `${i * 0.2}s` }"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: '项目'
  },
  subtitle: {
    type: String,
    default: 'PROJECT'
  },
  type: {
    type: String,
    default: 'project', // project, blog, featured
    validator: (value) => ['project', 'blog', 'featured'].includes(value)
  },
  size: {
    type: String,
    default: 'medium', // small, medium, large
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
});
</script>

<style scoped>
.artistic-placeholder {
  @apply relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.placeholder-project {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.placeholder-blog {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.placeholder-featured {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.placeholder-content {
  @apply relative z-20 text-center;
}

.artistic-text {
  @apply text-white font-bold tracking-wider;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'Arial Black', sans-serif;
  background: linear-gradient(45deg, #ffffff, #f0f0f0, #ffffff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: textShimmer 3s ease-in-out infinite;
}

.artistic-subtitle {
  @apply text-white/80 text-xs font-medium tracking-widest mt-1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Size variants */
.small .artistic-text {
  @apply text-lg;
}

.small .artistic-subtitle {
  @apply text-xs;
}

.medium .artistic-text {
  @apply text-2xl;
}

.medium .artistic-subtitle {
  @apply text-sm;
}

.large .artistic-text {
  @apply text-4xl;
}

.large .artistic-subtitle {
  @apply text-base;
}

.placeholder-overlay {
  @apply absolute inset-0 z-10;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  animation: shimmer 3s ease-in-out infinite;
}

.floating-elements {
  @apply absolute inset-0 pointer-events-none z-10;
}

.floating-element {
  @apply absolute w-2 h-2 bg-white/20 rounded-full;
  animation: float 4s ease-in-out infinite;
}

.floating-element:nth-child(1) {
  top: 15%;
  left: 15%;
}

.floating-element:nth-child(2) {
  top: 25%;
  right: 20%;
}

.floating-element:nth-child(3) {
  top: 60%;
  left: 10%;
}

.floating-element:nth-child(4) {
  bottom: 25%;
  right: 15%;
}

.floating-element:nth-child(5) {
  bottom: 15%;
  left: 50%;
}

.geometric-shapes {
  @apply absolute inset-0 pointer-events-none z-0;
}

.shape {
  @apply absolute;
  animation: rotate 8s linear infinite;
}

.shape-1 {
  @apply w-8 h-8 border-2 border-white/10 rounded-full;
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.shape-2 {
  @apply w-6 h-6 bg-white/5 rotate-45;
  bottom: 30%;
  left: 15%;
  animation-delay: 2s;
}

.shape-3 {
  @apply w-4 h-4 border border-white/10 rounded;
  top: 70%;
  right: 25%;
  animation-delay: 4s;
}

.particle-system {
  @apply absolute inset-0 pointer-events-none z-0;
}

.particle {
  @apply absolute w-1 h-1 bg-white/30 rounded-full;
  animation: particleFloat 6s ease-in-out infinite;
}

.particle:nth-child(1) { top: 10%; left: 20%; }
.particle:nth-child(2) { top: 20%; right: 30%; }
.particle:nth-child(3) { top: 40%; left: 10%; }
.particle:nth-child(4) { top: 60%; right: 20%; }
.particle:nth-child(5) { bottom: 20%; left: 30%; }
.particle:nth-child(6) { bottom: 40%; right: 10%; }
.particle:nth-child(7) { bottom: 60%; left: 40%; }
.particle:nth-child(8) { bottom: 10%; right: 40%; }

@keyframes shimmer {
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px) scale(1.3);
    opacity: 0.8;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-10px) translateX(5px);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-5px) translateX(-5px);
    opacity: 0.8;
  }
  75% {
    transform: translateY(-15px) translateX(3px);
    opacity: 0.4;
  }
}

@keyframes textShimmer {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Hover effects */
.artistic-placeholder:hover .artistic-text {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.artistic-placeholder:hover .floating-element {
  animation-duration: 2s;
}

.artistic-placeholder:hover .shape {
  animation-duration: 4s;
}

.artistic-placeholder:hover .particle {
  animation-duration: 3s;
}

/* Glassmorphism effect */
.artistic-placeholder::before {
  content: '';
  @apply absolute inset-0 z-20;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: inherit;
}

/* Additional decorative elements */
.artistic-placeholder::after {
  content: '';
  @apply absolute top-0 left-0 w-full h-full z-0;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .medium .artistic-text {
    @apply text-xl;
  }
  
  .large .artistic-text {
    @apply text-3xl;
  }
  
  .floating-element {
    @apply w-1 h-1;
  }
  
  .shape-1 {
    @apply w-6 h-6;
  }
  
  .shape-2 {
    @apply w-4 h-4;
  }
  
  .shape-3 {
    @apply w-3 h-3;
  }
}
</style> 