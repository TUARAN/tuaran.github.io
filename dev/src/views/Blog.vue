<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 py-16 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6">
          代码挖矿日志
        </h1>
        <p class="text-xl text-zinc-400 max-w-2xl mx-auto">
          来自代码库深处的思考、见解和发现。
          每一行都讲述一个故事，每一次提交都在构建未来。
        </p>
      </div>

      <!-- Featured Post -->
      <div class="mb-16">
        <div class="featured-post">
          <div class="featured-badge">精选</div>
          <h2 class="featured-title">代码挖矿的艺术：如何每天提取1万行代码</h2>
          <p class="featured-excerpt">
            深入探讨实现大规模代码生成的技术和工具。
            从AI辅助开发到自动化测试，发现如何保持
            真正代码矿工的节奏。
          </p>
          <div class="featured-meta">
            <span class="meta-item">📅 2024年12月15日</span>
            <span class="meta-item">⏱️ 8分钟阅读</span>
            <span class="meta-item">🔥 1.2k阅读</span>
          </div>
          <button class="btn-primary mt-6">
            <span class="mr-2">📖</span>
            阅读全文
          </button>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div v-for="post in blogPosts" :key="post.id" class="blog-card">
          <div class="blog-card-header">
            <div class="blog-category">{{ post.category }}</div>
            <div class="blog-date">{{ post.date }}</div>
          </div>
          
          <h3 class="blog-title">{{ post.title }}</h3>
          <p class="blog-excerpt">{{ post.excerpt }}</p>
          
          <div class="blog-meta">
            <div class="blog-stats">
              <span class="stat">👁️ {{ post.views }}</span>
              <span class="stat">💬 {{ post.comments }}</span>
              <span class="stat">❤️ {{ post.likes }}</span>
            </div>
            <div class="blog-tags">
              <span v-for="tag in post.tags" :key="tag" class="blog-tag">
                {{ tag }}
              </span>
            </div>
          </div>
          
          <button class="btn-secondary mt-4">
            <span class="mr-2">📖</span>
            阅读更多
          </button>
        </div>
      </div>

      <!-- Newsletter Signup -->
      <div class="newsletter-section">
        <div class="newsletter-content">
          <h3 class="newsletter-title">加入挖矿团队</h3>
          <p class="newsletter-description">
            当发现新的代码矿藏时获得通知。
            及时了解去中心化和开源的最新动态。
          </p>
          <div class="newsletter-form">
            <input 
              type="email" 
              placeholder="输入您的邮箱地址" 
              class="newsletter-input"
            >
            <button class="btn-primary">
              <span class="mr-2">⚡</span>
              订阅
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const blogPosts = ref([
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
  },
  {
    id: 4,
    title: "优化开发工作流程以实现最大产出",
    excerpt: "工具、技术和策略，最大化您的编码生产力并保持真正矿工的节奏。",
    category: "生产力",
    date: "2024年12月6日",
    views: "1.5k",
    comments: "28",
    likes: "87",
    tags: ["生产力", "工具", "工作流程"]
  },
  {
    id: 5,
    title: "智能合约安全：在DeFi中安全挖矿",
    excerpt: "在DeFi生态系统中开发和部署智能合约的基本安全实践。",
    category: "安全",
    date: "2024年12月4日",
    views: "2.7k",
    comments: "53",
    likes: "142",
    tags: ["安全", "智能合约", "DeFi"]
  },
  {
    id: 6,
    title: "代码挖矿心理学：在技术中保持活力",
    excerpt: "保持现代开发无情节奏的心理框架和心理策略。",
    category: "心态",
    date: "2024年12月2日",
    views: "1.9k",
    comments: "41",
    likes: "103",
    tags: ["心态", "心理学", "动机"]
  }
])
</script>

<style scoped>
.featured-post {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-8 relative overflow-hidden;
}

.featured-post::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600;
}

.featured-badge {
  @apply inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4;
}

.featured-title {
  @apply text-3xl font-bold text-white mb-4 leading-tight;
}

.featured-excerpt {
  @apply text-zinc-400 text-lg leading-relaxed mb-6;
}

.featured-meta {
  @apply flex flex-wrap gap-4 text-sm text-zinc-500;
}

.meta-item {
  @apply flex items-center;
}

.blog-card {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 transition-all duration-300 hover:bg-zinc-800/70 hover:border-cyan-500/50 hover:transform hover:scale-105;
}

.blog-card-header {
  @apply flex items-center justify-between mb-4;
}

.blog-category {
  @apply bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-1 rounded-full;
}

.blog-date {
  @apply text-zinc-500 text-sm;
}

.blog-title {
  @apply text-xl font-bold text-white mb-3 leading-tight;
}

.blog-excerpt {
  @apply text-zinc-400 text-sm mb-4 leading-relaxed;
}

.blog-meta {
  @apply flex flex-col space-y-3;
}

.blog-stats {
  @apply flex space-x-4 text-sm text-zinc-500;
}

.stat {
  @apply flex items-center;
}

.blog-tags {
  @apply flex flex-wrap gap-2;
}

.blog-tag {
  @apply bg-zinc-700 text-zinc-300 text-xs px-2 py-1 rounded-full;
}

.btn-primary {
  @apply bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center;
}

.btn-secondary {
  @apply bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center text-sm;
}

.newsletter-section {
  @apply bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl p-8;
}

.newsletter-content {
  @apply text-center;
}

.newsletter-title {
  @apply text-2xl font-bold text-white mb-4;
}

.newsletter-description {
  @apply text-zinc-400 mb-6 max-w-md mx-auto;
}

.newsletter-form {
  @apply flex flex-col sm:flex-row gap-4 max-w-md mx-auto;
}

.newsletter-input {
  @apply flex-1 bg-zinc-800 border border-zinc-600 text-white placeholder-zinc-400 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors;
}
</style> 