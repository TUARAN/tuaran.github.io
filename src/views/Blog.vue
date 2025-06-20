<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 py-16 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6">
          Code Mining Log
        </h1>
        <p class="text-xl text-zinc-400 max-w-2xl mx-auto">
          Thoughts, insights, and discoveries from the depths of the codebase. 
          Every line tells a story, every commit builds the future.
        </p>
      </div>

      <!-- Featured Post -->
      <div class="mb-16">
        <div class="featured-post">
          <div class="featured-badge">Featured</div>
          <h2 class="featured-title">The Art of Code Mining: How to Extract 10k Lines Daily</h2>
          <p class="featured-excerpt">
            Deep dive into the techniques and tools that enable massive code generation. 
            From AI-assisted development to automated testing, discover how to maintain 
            the pace of a true code miner.
          </p>
          <div class="featured-meta">
            <span class="meta-item">📅 Dec 15, 2024</span>
            <span class="meta-item">⏱️ 8 min read</span>
            <span class="meta-item">🔥 1.2k views</span>
          </div>
          <button class="btn-primary mt-6">
            <span class="mr-2">📖</span>
            Read Full Article
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
            Read More
          </button>
        </div>
      </div>

      <!-- Newsletter Signup -->
      <div class="newsletter-section">
        <div class="newsletter-content">
          <h3 class="newsletter-title">Join the Mining Crew</h3>
          <p class="newsletter-description">
            Get notified when new code mines are discovered. 
            Stay updated with the latest in decentralization and open source.
          </p>
          <div class="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              class="newsletter-input"
            >
            <button class="btn-primary">
              <span class="mr-2">⚡</span>
              Subscribe
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
    title: "Building Decentralized Applications: A Complete Guide",
    excerpt: "Step-by-step guide to creating DApps that truly decentralize the world. From smart contracts to frontend integration.",
    category: "Blockchain",
    date: "Dec 12, 2024",
    views: "2.3k",
    comments: "45",
    likes: "128",
    tags: ["Solidity", "Web3", "DApp"]
  },
  {
    id: 2,
    title: "AI-Powered Code Generation: Beyond 10k Lines/Day",
    excerpt: "Exploring advanced AI techniques for generating production-ready code at unprecedented speeds.",
    category: "AI/ML",
    date: "Dec 10, 2024",
    views: "1.8k",
    comments: "32",
    likes: "95",
    tags: ["AI", "CodeGen", "Productivity"]
  },
  {
    id: 3,
    title: "The Future of Open Source: Why It's Do or Die",
    excerpt: "Why open source is not just a choice but a necessity for the future of technology and society.",
    category: "Philosophy",
    date: "Dec 8, 2024",
    views: "3.1k",
    comments: "67",
    likes: "156",
    tags: ["OpenSource", "Philosophy", "Future"]
  },
  {
    id: 4,
    title: "Optimizing Your Development Workflow for Maximum Output",
    excerpt: "Tools, techniques, and strategies to maximize your coding productivity and maintain the pace of a true miner.",
    category: "Productivity",
    date: "Dec 6, 2024",
    views: "1.5k",
    comments: "28",
    likes: "87",
    tags: ["Productivity", "Tools", "Workflow"]
  },
  {
    id: 5,
    title: "Smart Contract Security: Mining Safely in DeFi",
    excerpt: "Essential security practices for developing and deploying smart contracts in the DeFi ecosystem.",
    category: "Security",
    date: "Dec 4, 2024",
    views: "2.7k",
    comments: "53",
    likes: "142",
    tags: ["Security", "SmartContracts", "DeFi"]
  },
  {
    id: 6,
    title: "The Psychology of Code Mining: Staying Alive in Tech",
    excerpt: "Mental frameworks and psychological strategies to maintain the relentless pace of modern development.",
    category: "Mindset",
    date: "Dec 2, 2024",
    views: "1.9k",
    comments: "41",
    likes: "103",
    tags: ["Mindset", "Psychology", "Motivation"]
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