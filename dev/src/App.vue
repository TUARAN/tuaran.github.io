<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient Orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-30 bg-grid-pattern"></div>
      
      <!-- Particles Background -->
      <div class="particles"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <Navbar />
      <main class="pt-24 pb-8">
        <RouterView v-slot="{ Component }">
          <transition 
            name="page" 
            mode="out-in"
            appear
          >
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
      <Footer />
    </div>
  </div>
</template>

<style>
/* CSS Variables for theming */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f1f5f9;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --accent-primary: #06b6d4;
  --accent-secondary: #8b5cf6;
}

.dark {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --accent-primary: #06b6d4;
  --accent-secondary: #8b5cf6;
}

/* Grid Pattern Background */
.bg-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0);
  background-size: 60px 60px;
}

/* Particles Background */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, .4) 0%, transparent 50%), 
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, .4) 0%, transparent 50%), 
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, .4) 0%, transparent 50%),
    radial-gradient(circle at 60% 60%, rgba(255, 182, 193, .3) 0%, transparent 50%),
    radial-gradient(circle at 10% 50%, rgba(173, 216, 230, .3) 0%, transparent 50%);
  animation: particleFloat 25s ease-in-out infinite;
  z-index: 1;
  will-change: transform, opacity;
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0px) scale(1) rotate(0deg);
    opacity: 0.4;
  }
  16.66% {
    transform: translateY(-15px) scale(1.1) rotate(60deg);
    opacity: 0.6;
  }
  33.33% {
    transform: translateY(-8px) scale(1.05) rotate(120deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) scale(1.15) rotate(180deg);
    opacity: 0.5;
  }
  66.66% {
    transform: translateY(-12px) scale(1.08) rotate(240deg);
    opacity: 0.6;
  }
  83.33% {
    transform: translateY(-18px) scale(1.12) rotate(300deg);
    opacity: 0.4;
  }
}

/* Optimized Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.99);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.99);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #0891b2, #7c3aed);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Selection */
::selection {
  background: rgba(6, 182, 212, 0.3);
  color: white;
}

/* Focus styles */
*:focus {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Performance optimizations */
* {
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .particles {
    animation: none;
  }
  
  .animate-pulse {
    animation: none;
  }
}
</style>
