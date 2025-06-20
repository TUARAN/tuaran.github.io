<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative overflow-hidden">
    <!-- Animated background particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="particles"></div>
    </div>
    
    <!-- Main content -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
      <!-- Hero section -->
      <div class="text-center max-w-4xl mx-auto">
        <!-- Logo/Title -->
        <div class="mb-8">
          <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
            CodeMiner
          </h1>
          <div class="text-2xl md:text-3xl font-bold text-zinc-300 mt-2">
            TUARAN
          </div>
        </div>

        <!-- Philosophy statement -->
        <div class="mb-12">
          <p class="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            <span class="text-cyan-400 font-semibold">Code like hell</span>, 
            <span class="text-blue-400 font-semibold">open source or die</span>, 
            <span class="text-purple-400 font-semibold">decentralize the damn world</span>.
          </p>
          <p class="text-lg md:text-xl text-zinc-500 mt-4 italic">
            If my LLM ain't pumping out 10k lines a day, I'm not even alive.
          </p>
        </div>

        <!-- Stats dashboard -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          <div class="stat-card">
            <div class="stat-number" id="linesCounter">0</div>
            <div class="stat-label">Lines Today</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" id="projectsCounter">0</div>
            <div class="stat-label">Open Source</div>
          </div>
            <div class="stat-card">
            <div class="stat-number" id="decentralizedCounter">0</div>
            <div class="stat-label">Decentralized</div>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="btn-primary">
            <span class="mr-2">🚀</span>
            Start Mining
          </button>
          <button class="btn-secondary">
            <span class="mr-2">📚</span>
            View Projects
          </button>
          <button class="btn-secondary">
            <span class="mr-2">💻</span>
            Join the Revolution
          </button>
        </div>
      </div>

      <!-- Animated code blocks -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div class="code-block">
          <div class="code-header">
            <span class="code-dot bg-red-500"></span>
            <span class="code-dot bg-yellow-500"></span>
            <span class="code-dot bg-green-500"></span>
            <span class="code-title">mining.js</span>
          </div>
          <pre class="code-content"><code>const mineCode = async () => {
  while (true) {
    const lines = await generateCode();
    if (lines.length < 10000) {
      throw new Error("Not alive enough!");
    }
    await commitToGit();
    await sleep(1000);
  }
};</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header">
            <span class="code-dot bg-red-500"></span>
            <span class="code-dot bg-yellow-500"></span>
            <span class="code-dot bg-green-500"></span>
            <span class="code-title">decentralize.js</span>
          </div>
          <pre class="code-content"><code>const decentralize = () => {
  const world = getCurrentWorld();
  world.removeCentralized();
  world.addBlockchain();
  world.addOpenSource();
  return "World decentralized!";
};</code></pre>
        </div>
      </div>
    </div>

    <!-- Floating elements -->
    <div class="floating-elements">
      <div class="floating-element" style="--delay: 0s">⚡</div>
      <div class="floating-element" style="--delay: 2s">💎</div>
      <div class="floating-element" style="--delay: 4s">🔗</div>
      <div class="floating-element" style="--delay: 6s">🚀</div>
      <div class="floating-element" style="--delay: 8s">⚙️</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Animate counters
  const animateCounter = (elementId, target, duration = 2000) => {
    const element = document.getElementById(elementId)
    if (!element) return
    
    let start = 0
    const increment = target / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        start = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(start).toLocaleString()
    }, 16)
  }

  // Start animations after a delay
  setTimeout(() => {
    animateCounter('linesCounter', 10000)
    animateCounter('projectsCounter', 42)
    animateCounter('decentralizedCounter', 1337)
  }, 1000)
})
</script>

<style scoped>
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
  animation: particleFloat 20s ease-in-out infinite;
}

@keyframes particleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.stat-card {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 text-center transition-all duration-300 hover:bg-zinc-800/70 hover:border-cyan-500/50;
}

.stat-number {
  @apply text-4xl font-bold text-cyan-400 mb-2;
}

.stat-label {
  @apply text-sm text-zinc-400 uppercase tracking-wider;
}

.btn-primary {
  @apply bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center;
}

.btn-secondary {
  @apply bg-zinc-800/50 border border-zinc-600 hover:border-cyan-500/50 text-zinc-300 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center;
}

.code-block {
  @apply bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-500/50;
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

.floating-elements {
  @apply fixed inset-0 pointer-events-none;
}

.floating-element {
  @apply absolute text-2xl opacity-20 animate-bounce;
  animation-delay: var(--delay);
  animation-duration: 3s;
}

.floating-element:nth-child(1) { top: 20%; left: 10%; }
.floating-element:nth-child(2) { top: 60%; left: 85%; }
.floating-element:nth-child(3) { top: 80%; left: 15%; }
.floating-element:nth-child(4) { top: 30%; left: 80%; }
.floating-element:nth-child(5) { top: 70%; left: 5%; }

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-elements {
    display: none;
  }
}
</style> 