<template>
  <div class="artistic-placeholder" :class="[`placeholder-${type}`, size]">
    <div class="placeholder-content">
      <div class="artistic-text">{{ text }}</div>
      <div class="artistic-subtitle">{{ subtitle }}</div>
    </div>
    <div class="subtle-overlay"></div>
    <div class="minimal-elements">
      <div class="element" v-for="i in 3" :key="i"></div>
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
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
}

.placeholder-project {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
}

.placeholder-blog {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
}

.placeholder-featured {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.placeholder-content {
  @apply relative z-20 text-center;
}

.artistic-text {
  @apply text-white font-bold tracking-wider;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'Inter', 'Arial', sans-serif;
  background: linear-gradient(45deg, #ffffff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.artistic-subtitle {
  @apply text-gray-300 text-xs font-medium tracking-widest mt-2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
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

.subtle-overlay {
  @apply absolute inset-0 z-10;
  background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.05) 50%, transparent 60%);
  opacity: 0.3;
}

.minimal-elements {
  @apply absolute inset-0 pointer-events-none z-0;
}

.element {
  @apply absolute w-1 h-1 bg-white/20 rounded-full;
  animation: gentleFloat 8s ease-in-out infinite;
}

.element:nth-child(1) {
  top: 25%;
  left: 20%;
  animation-delay: 0s;
}

.element:nth-child(2) {
  top: 60%;
  right: 25%;
  animation-delay: 2s;
}

.element:nth-child(3) {
  bottom: 30%;
  left: 60%;
  animation-delay: 4s;
}

@keyframes gentleFloat {
  0%, 100% {
    transform: translateY(0px);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-8px);
    opacity: 0.4;
  }
}

/* Hover effects */
.artistic-placeholder:hover .artistic-text {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.artistic-placeholder:hover .element {
  animation-duration: 6s;
}

/* Glassmorphism effect */
.artistic-placeholder::before {
  content: '';
  @apply absolute inset-0 z-20;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(1px);
  border-radius: inherit;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .medium .artistic-text {
    @apply text-xl;
  }
  
  .large .artistic-text {
    @apply text-3xl;
  }
  
  .element {
    @apply w-0.5 h-0.5;
  }
}
</style> 