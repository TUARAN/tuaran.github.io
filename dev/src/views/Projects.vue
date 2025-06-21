<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6">
          Mining Projects
        </h1>
        <p class="text-xl text-zinc-400 max-w-3xl mx-auto">
          Digging deep into the codebase, extracting value from every line. 
          These are the projects that keep me alive and the world decentralized.
        </p>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-header">
            <div class="project-icon">
              {{ project.icon }}
            </div>
            <div class="project-status" :class="project.status">
              {{ project.status }}
            </div>
          </div>
          
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          
          <div class="project-stats">
            <div class="stat">
              <span class="stat-number">{{ project.stars }}</span>
              <span class="stat-label">⭐</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ project.forks }}</span>
              <span class="stat-label">🔀</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ project.lines }}</span>
              <span class="stat-label">📝</span>
            </div>
          </div>
          
          <div class="tech-stack">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          
          <div class="project-actions">
            <a :href="project.github" target="_blank" class="btn-primary">
              <span class="mr-2">🐙</span>
              View Code
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank" class="btn-secondary">
              <span class="mr-2">🚀</span>
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <!-- Mining Stats -->
      <div class="mt-20">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Mining Statistics</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="mining-stat">
            <div class="mining-stat-icon">⚡</div>
            <div class="mining-stat-number" id="totalLines">0</div>
            <div class="mining-stat-label">Total Lines</div>
          </div>
          <div class="mining-stat">
            <div class="mining-stat-icon">🔧</div>
            <div class="mining-stat-number" id="totalProjects">0</div>
            <div class="mining-stat-label">Projects</div>
          </div>
          <div class="mining-stat">
            <div class="mining-stat-icon">🌐</div>
            <div class="mining-stat-number" id="totalCommits">0</div>
            <div class="mining-stat-label">Commits</div>
          </div>
          <div class="mining-stat">
            <div class="mining-stat-icon">🔥</div>
            <div class="mining-stat-number" id="streakDays">0</div>
            <div class="mining-stat-label">Day Streak</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projects = ref([
  {
    id: 1,
    title: "DeFi Protocol",
    description: "Decentralized finance protocol built on Ethereum. Enabling permissionless lending and borrowing.",
    icon: "💰",
    status: "active",
    stars: 1234,
    forks: 567,
    lines: 45000,
    tech: ["Solidity", "React", "Web3.js"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "AI Trading Bot",
    description: "Machine learning powered trading bot that mines market data for profitable opportunities.",
    icon: "🤖",
    status: "active",
    stars: 892,
    forks: 234,
    lines: 32000,
    tech: ["Python", "TensorFlow", "FastAPI"],
    github: "#",
    demo: null
  },
  {
    id: 3,
    title: "Blockchain Explorer",
    description: "Real-time blockchain explorer with advanced analytics and visualization tools.",
    icon: "🔍",
    status: "active",
    stars: 567,
    forks: 123,
    lines: 28000,
    tech: ["Vue.js", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Code Generator",
    description: "AI-powered code generator that pumps out 10k lines of production-ready code daily.",
    icon: "⚙️",
    status: "active",
    stars: 2345,
    forks: 789,
    lines: 15000,
    tech: ["TypeScript", "OpenAI", "Vite"],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "Decentralized Social",
    description: "Social media platform built on blockchain. No censorship, no centralization.",
    icon: "🌐",
    status: "active",
    stars: 678,
    forks: 345,
    lines: 52000,
    tech: ["IPFS", "React", "Solidity"],
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "Mining Dashboard",
    description: "Real-time dashboard for monitoring code mining operations and productivity metrics.",
    icon: "📊",
    status: "active",
    stars: 445,
    forks: 167,
    lines: 18000,
    tech: ["Vue.js", "D3.js", "WebSocket"],
    github: "#",
    demo: "#"
  }
])

onMounted(() => {
  // Animate mining stats
  const animateStat = (elementId, target, duration = 2000) => {
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

  setTimeout(() => {
    animateStat('totalLines', 180000)
    animateStat('totalProjects', 42)
    animateStat('totalCommits', 1337)
    animateStat('streakDays', 365)
  }, 1000)
})
</script>

<style scoped>
.project-card {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 transition-all duration-300 hover:bg-zinc-800/70 hover:border-cyan-500/50 hover:transform hover:scale-105;
}

.project-header {
  @apply flex items-center justify-between mb-4;
}

.project-icon {
  @apply text-3xl;
}

.project-status {
  @apply text-xs font-bold px-2 py-1 rounded-full;
}

.project-status.active {
  @apply bg-green-500/20 text-green-400 border border-green-500/30;
}

.project-title {
  @apply text-xl font-bold text-white mb-3;
}

.project-description {
  @apply text-zinc-400 text-sm mb-4 leading-relaxed;
}

.project-stats {
  @apply flex space-x-4 mb-4;
}

.stat {
  @apply flex items-center space-x-1;
}

.stat-number {
  @apply text-sm font-bold text-cyan-400;
}

.stat-label {
  @apply text-sm;
}

.tech-stack {
  @apply flex flex-wrap gap-2 mb-4;
}

.tech-tag {
  @apply bg-zinc-700 text-zinc-300 text-xs px-2 py-1 rounded-full;
}

.project-actions {
  @apply flex space-x-3;
}

.btn-primary {
  @apply bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center text-sm;
}

.btn-secondary {
  @apply bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center text-sm;
}

.mining-stat {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 text-center transition-all duration-300 hover:bg-zinc-800/70 hover:border-cyan-500/50;
}

.mining-stat-icon {
  @apply text-3xl mb-3;
}

.mining-stat-number {
  @apply text-3xl font-bold text-cyan-400 mb-2;
}

.mining-stat-label {
  @apply text-sm text-zinc-400 uppercase tracking-wider;
}
</style> 