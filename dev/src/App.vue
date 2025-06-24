<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
    <!-- Simple static background -->
    <div class="absolute inset-0">
      <div class="simple-bg"></div>
    </div>

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

/* Simple static background */
.simple-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(6, 182, 212, 0.03) 0%,
    rgba(147, 51, 234, 0.02) 50%,
    rgba(59, 130, 246, 0.03) 100%
  );
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Disable all animations for better performance */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
