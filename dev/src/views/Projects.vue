<template>
  <div class="container mx-auto px-6">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
        精选项目
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        展示前沿技术和创新解决方案的项目集合
      </p>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectedCategory = category"
        class="filter-btn"
        :class="{ 'filter-btn-active': selectedCategory === category }"
      >
        {{ category }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="project-card group"
      >
        <!-- Project Image -->
        <div class="project-image">
          <div class="project-overlay">
            <div class="project-actions">
              <a 
                :href="project.demo" 
                target="_blank" 
                rel="noopener noreferrer"
                class="action-btn"
                title="查看演示"
              >
                <ExternalLink class="w-4 h-4" />
              </a>
              <a 
                :href="project.github" 
                target="_blank" 
                rel="noopener noreferrer"
                class="action-btn"
                title="查看源码"
              >
                <Github class="w-4 h-4" />
              </a>
            </div>
          </div>
          <div class="project-category">{{ project.category }}</div>
        </div>

        <!-- Project Content -->
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          
          <!-- Project Tags -->
          <div class="project-tags">
            <span 
              v-for="tag in project.tags.slice(0, 3)" 
              :key="tag"
              class="project-tag"
            >
              {{ tag }}
            </span>
            <span v-if="project.tags.length > 3" class="project-tag-more">
              +{{ project.tags.length - 3 }}
            </span>
          </div>

          <!-- Project Stats -->
          <div class="project-stats">
            <div class="stat-item">
              <Star class="w-4 h-4 text-yellow-400" />
              <span>{{ formatNumber(project.stars) }}</span>
            </div>
            <div class="stat-item">
              <GitBranch class="w-4 h-4 text-blue-400" />
              <span>{{ formatNumber(project.forks) }}</span>
            </div>
            <div class="stat-item">
              <Clock class="w-4 h-4 text-gray-400" />
              <span>{{ formatDate(project.updated) }}</span>
            </div>
          </div>

          <!-- Project Status -->
          <div class="project-status">
            <div class="status-indicator active"></div>
            <span class="status-text">活跃</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="text-center mt-12">
      <button class="load-more-btn">
        <span>加载更多项目</span>
        <ArrowDown class="w-4 h-4 ml-2" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  ExternalLink, 
  Github, 
  Star, 
  GitBranch, 
  Clock, 
  ArrowDown 
} from 'lucide-vue-next';
import projectsData from '../data/projects.json';

const selectedCategory = ref('全部');
const projects = ref(projectsData);

const categories = ['全部', 'AI/ML', 'UI/UX', 'Web3', 'Web'];

const filteredProjects = computed(() => {
  if (selectedCategory.value === '全部') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === selectedCategory.value);
});

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return '1 天前';
  if (diffDays < 7) return `${diffDays} 天前`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} 周前`;
  return `${Math.floor(diffDays / 30)} 个月前`;
};
</script>

<style scoped>
.filter-btn {
  @apply px-6 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20;
}

.filter-btn-active {
  @apply bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg border-transparent;
}

.project-card {
  @apply bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20;
}

.project-image {
  @apply relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden;
}

.project-overlay {
  @apply absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center;
}

.project-actions {
  @apply flex space-x-4;
}

.action-btn {
  @apply w-10 h-10 bg-white/20 backdrop-blur-lg rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110;
}

.project-category {
  @apply absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-medium rounded-full;
}

.project-content {
  @apply p-6;
}

.project-title {
  @apply text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300;
}

.project-description {
  @apply text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2;
}

.project-tags {
  @apply flex flex-wrap gap-2 mb-4;
}

.project-tag {
  @apply px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20;
}

.project-tag-more {
  @apply px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full;
}

.project-stats {
  @apply flex items-center justify-between mb-4;
}

.stat-item {
  @apply flex items-center space-x-1 text-sm text-gray-400;
}

.project-status {
  @apply flex items-center space-x-2;
}

.status-indicator {
  @apply w-2 h-2 rounded-full;
}

.status-indicator.active {
  @apply bg-green-400 animate-pulse;
}

.status-text {
  @apply text-xs text-gray-400;
}

.load-more-btn {
  @apply px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center mx-auto;
}

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 