<template>
  <div class="dashboard-card">
    <div class="card-header">
      <h3 class="card-title">项目看板</h3>
      <div class="card-subtitle">GitHub 项目概览</div>
    </div>
    
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-item">
        <div class="project-header">
          <div class="project-icon">{{ project.icon }}</div>
          <div class="project-status" :class="project.status">
            {{ project.status }}
          </div>
        </div>
        
        <h4 class="project-name">{{ project.name }}</h4>
        <p class="project-desc">{{ project.description }}</p>
        
        <div class="project-stats">
          <div class="stat">
            <span class="stat-icon">⭐</span>
            <span class="stat-value">{{ project.stars }}</span>
          </div>
          <div class="stat">
            <span class="stat-icon">🔀</span>
            <span class="stat-value">{{ project.forks }}</span>
          </div>
          <div class="stat">
            <span class="stat-icon">📝</span>
            <span class="stat-value">{{ project.lines }}</span>
          </div>
        </div>
        
        <div class="project-tech">
          <span v-for="tech in project.tech" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
    
    <div class="card-footer">
      <button class="view-all-btn">
        <span class="mr-2">🐙</span>
        查看所有项目
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDashboard',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "DeFi协议",
          description: "基于以太坊的去中心化金融协议",
          icon: "💰",
          status: "活跃",
          stars: 1234,
          forks: 567,
          lines: "45k",
          tech: ["Solidity", "React", "Web3"]
        },
        {
          id: 2,
          name: "AI交易机器人",
          description: "机器学习驱动的交易系统",
          icon: "🤖",
          status: "活跃",
          stars: 892,
          forks: 234,
          lines: "32k",
          tech: ["Python", "TensorFlow", "FastAPI"]
        },
        {
          id: 3,
          name: "区块链浏览器",
          description: "实时区块链数据可视化",
          icon: "🔍",
          status: "活跃",
          stars: 567,
          forks: 123,
          lines: "28k",
          tech: ["Vue.js", "Node.js", "PostgreSQL"]
        }
      ]
    }
  }
}
</script>

<style scoped>
.dashboard-card {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6;
}

.card-header {
  @apply mb-6;
}

.card-title {
  @apply text-xl font-bold text-white mb-1;
}

.card-subtitle {
  @apply text-sm text-zinc-400;
}

.projects-grid {
  @apply space-y-4 mb-6;
}

.project-item {
  @apply bg-zinc-700/50 rounded-lg p-4 border border-zinc-600 hover:border-cyan-500/50 transition-all duration-300;
}

.project-header {
  @apply flex justify-between items-center mb-3;
}

.project-icon {
  @apply text-2xl;
}

.project-status {
  @apply text-xs px-2 py-1 rounded-full;
}

.project-status.活跃 {
  @apply bg-green-500/20 text-green-400;
}

.project-name {
  @apply text-white font-semibold mb-2;
}

.project-desc {
  @apply text-zinc-400 text-sm mb-3;
}

.project-stats {
  @apply flex space-x-4 mb-3;
}

.stat {
  @apply flex items-center space-x-1;
}

.stat-icon {
  @apply text-sm;
}

.stat-value {
  @apply text-sm text-zinc-300;
}

.project-tech {
  @apply flex flex-wrap gap-2;
}

.tech-tag {
  @apply bg-zinc-600 text-zinc-300 text-xs px-2 py-1 rounded;
}

.card-footer {
  @apply flex justify-center;
}

.view-all-btn {
  @apply bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-white px-4 py-2 rounded-lg transition-colors flex items-center;
}
</style> 