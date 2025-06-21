<template>
  <div class="dashboard-card">
    <div class="card-header">
      <h3 class="card-title">博文日记</h3>
      <div class="card-subtitle">最新技术分享</div>
    </div>
    
    <div class="blog-list">
      <div v-for="post in blogPosts" :key="post.id" class="blog-item">
        <div class="blog-meta">
          <span class="blog-category">{{ post.category }}</span>
          <span class="blog-date">{{ post.date }}</span>
        </div>
        
        <h4 class="blog-title">{{ post.title }}</h4>
        <p class="blog-excerpt">{{ post.excerpt }}</p>
        
        <div class="blog-stats">
          <div class="stat">
            <span class="stat-icon">👁️</span>
            <span class="stat-value">{{ post.views }}</span>
          </div>
          <div class="stat">
            <span class="stat-icon">💬</span>
            <span class="stat-value">{{ post.comments }}</span>
          </div>
          <div class="stat">
            <span class="stat-icon">❤️</span>
            <span class="stat-value">{{ post.likes }}</span>
          </div>
        </div>
        
        <div class="blog-tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    
    <div class="card-footer">
      <button class="view-all-btn">
        <span class="mr-2">📚</span>
        阅读更多
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDashboard',
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "构建去中心化应用：完整指南",
          excerpt: "创建真正去中心化世界的DApp的逐步指南。从智能合约到前端集成。",
          category: "区块链",
          date: "2024年12月12日",
          views: "2.3k",
          comments: "45",
          likes: "128",
          tags: ["Solidity", "Web3", "DApp"]
        },
        {
          id: 2,
          title: "AI驱动的代码生成：超越每天1万行",
          excerpt: "探索先进AI技术，以前所未有的速度生成生产就绪的代码。",
          category: "AI/ML",
          date: "2024年12月10日",
          views: "1.8k",
          comments: "32",
          likes: "95",
          tags: ["AI", "代码生成", "生产力"]
        },
        {
          id: 3,
          title: "开源的未来：为什么是生死攸关的选择",
          excerpt: "为什么开源不仅仅是选择，而是技术和未来社会的必需品。",
          category: "哲学",
          date: "2024年12月8日",
          views: "3.1k",
          comments: "67",
          likes: "156",
          tags: ["开源", "哲学", "未来"]
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

.blog-list {
  @apply space-y-4 mb-6;
}

.blog-item {
  @apply bg-zinc-700/50 rounded-lg p-4 border border-zinc-600 hover:border-cyan-500/50 transition-all duration-300;
}

.blog-meta {
  @apply flex justify-between items-center mb-2;
}

.blog-category {
  @apply bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded;
}

.blog-date {
  @apply text-xs text-zinc-500;
}

.blog-title {
  @apply text-white font-semibold mb-2 text-sm;
}

.blog-excerpt {
  @apply text-zinc-400 text-xs mb-3 leading-relaxed;
}

.blog-stats {
  @apply flex space-x-4 mb-3;
}

.stat {
  @apply flex items-center space-x-1;
}

.stat-icon {
  @apply text-xs;
}

.stat-value {
  @apply text-xs text-zinc-300;
}

.blog-tags {
  @apply flex flex-wrap gap-1;
}

.tag {
  @apply bg-zinc-600 text-zinc-300 text-xs px-2 py-1 rounded;
}

.card-footer {
  @apply flex justify-center;
}

.view-all-btn {
  @apply bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-white px-4 py-2 rounded-lg transition-colors flex items-center;
}
</style> 