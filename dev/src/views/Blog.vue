<template>
  <div class="container mx-auto px-6">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
        博客与见解
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        关于技术、交易策略和开发者生活的思考
      </p>
    </div>

    <!-- Category Filters -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectedCategory = category"
        class="category-btn"
        :class="{ 'category-btn-active': selectedCategory === category }"
      >
        <component :is="getCategoryIcon(category)" class="w-4 h-4 mr-2" />
        {{ category }}
      </button>
    </div>

    <!-- Featured Post -->
    <div v-if="featuredPost" class="mb-12">
      <div class="featured-post">
        <div class="featured-layout">
          <div class="featured-content">
            <div class="featured-meta">
              <span class="featured-category">{{ featuredPost.category }}</span>
              <span class="featured-date">{{ formatDate(featuredPost.id) }}</span>
            </div>
            <h2 class="featured-title">{{ featuredPost.title }}</h2>
            <p class="featured-excerpt">{{ featuredPost.summary }}</p>
            <div class="featured-stats">
              <div class="stat">
                <Eye class="w-4 h-4" />
                <span>{{ formatNumber(featuredPost.views) }} 阅读</span>
              </div>
              <div class="stat">
                <Clock class="w-4 h-4" />
                <span>{{ featuredPost.readTime }} 分钟阅读</span>
              </div>
            </div>
            <div class="featured-tags">
              <span 
                v-for="tag in featuredPost.tags.slice(0, 3)" 
                :key="tag"
                class="featured-tag"
              >
                {{ tag }}
              </span>
            </div>
            <button class="featured-btn">
              <span>阅读全文</span>
              <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </div>
          <div class="featured-image">
            <ArtisticPlaceholder 
              :text="featuredPost.title" 
              :subtitle="featuredPost.category.toUpperCase()"
              type="featured"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="post in filteredPosts" 
        :key="post.id"
        class="blog-card group"
        v-show="post.id !== featuredPost?.id"
      >
        <!-- Post Header -->
        <div class="post-header">
          <div class="post-category">{{ post.category }}</div>
          <div class="post-date">{{ formatDate(post.id) }}</div>
        </div>

        <!-- Post Image Placeholder -->
        <div class="post-image-placeholder">
          <ArtisticPlaceholder 
            :text="post.title" 
            :subtitle="post.category.toUpperCase()"
            type="blog"
            size="small"
          />
        </div>

        <!-- Post Content -->
        <div class="post-content">
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-excerpt">{{ post.summary }}</p>
          
          <!-- Post Tags -->
          <div class="post-tags">
            <span 
              v-for="tag in post.tags.slice(0, 2)" 
              :key="tag"
              class="post-tag"
            >
              {{ tag }}
            </span>
            <span v-if="post.tags.length > 2" class="post-tag-more">
              +{{ post.tags.length - 2 }}
            </span>
          </div>

          <!-- Post Stats -->
          <div class="post-stats">
            <div class="post-stat">
              <Eye class="w-4 h-4" />
              <span>{{ formatNumber(post.views) }}</span>
            </div>
            <div class="post-stat">
              <Clock class="w-4 h-4" />
              <span>{{ post.readTime }}分钟</span>
            </div>
            <div class="post-stat">
              <Heart class="w-4 h-4" />
              <span>{{ Math.floor(post.views / 100) }}</span>
            </div>
          </div>
        </div>

        <!-- Post Actions -->
        <div class="post-actions">
          <button class="read-btn">
            <span>阅读更多</span>
            <ArrowRight class="w-4 h-4 ml-2" />
          </button>
          <button class="bookmark-btn">
            <Bookmark class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Load More -->
    <div class="text-center mt-12">
      <button class="load-more-btn">
        <span>加载更多文章</span>
        <ArrowDown class="w-4 h-4 ml-2" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  Code, 
  TrendingUp, 
  Heart, 
  Eye, 
  Clock, 
  ArrowRight, 
  ArrowDown, 
  Bookmark, 
  FileText 
} from 'lucide-vue-next';
import ArtisticPlaceholder from '../components/ArtisticPlaceholder.vue';
import blogsData from '../data/blogs.json';

const selectedCategory = ref('全部');
const posts = ref(blogsData);

const categories = ['全部', '技术', '交易', '生活'];

const getCategoryIcon = (category) => {
  const icons = {
    '技术': Code,
    '交易': TrendingUp,
    '生活': Heart,
    '全部': FileText
  };
  return icons[category] || FileText;
};

const filteredPosts = computed(() => {
  if (selectedCategory.value === '全部') {
    return posts.value;
  }
  return posts.value.filter(post => post.category === selectedCategory.value);
});

const featuredPost = computed(() => {
  return filteredPosts.value[0];
});

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const formatDate = (id) => {
  const dates = ['2 天前', '1 周前', '2 周前', '1 个月前'];
  return dates[id - 1] || '最近';
};
</script>

<style scoped>
.category-btn {
  @apply flex items-center px-6 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20;
}

.category-btn-active {
  @apply bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg border-transparent;
}

.featured-post {
  @apply bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500;
}

.featured-layout {
  @apply flex flex-col lg:flex-row;
}

.featured-content {
  @apply p-8 lg:p-12 lg:flex-1;
}

.featured-meta {
  @apply flex items-center space-x-4 mb-4;
}

.featured-category {
  @apply px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-medium rounded-full;
}

.featured-date {
  @apply text-gray-400 text-sm;
}

.featured-title {
  @apply text-3xl font-bold text-white mb-4 leading-tight;
}

.featured-excerpt {
  @apply text-gray-300 text-lg leading-relaxed mb-6;
}

.featured-stats {
  @apply flex space-x-6 mb-6;
}

.stat {
  @apply flex items-center space-x-2 text-gray-400 text-sm;
}

.featured-tags {
  @apply flex flex-wrap gap-2 mb-6;
}

.featured-tag {
  @apply px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20;
}

.featured-btn {
  @apply px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 flex items-center;
}

.featured-image {
  @apply lg:w-1/3 lg:flex-shrink-0;
}

.post-image-placeholder {
  @apply h-32 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center;
}

.blog-card {
  @apply bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20;
}

.post-header {
  @apply flex items-center justify-between p-6 pb-4;
}

.post-category {
  @apply px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-medium rounded-full;
}

.post-date {
  @apply text-gray-400 text-xs;
}

.post-content {
  @apply px-6 pb-4;
}

.post-title {
  @apply text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2;
}

.post-excerpt {
  @apply text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3;
}

.post-tags {
  @apply flex flex-wrap gap-2 mb-4;
}

.post-tag {
  @apply px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20;
}

.post-tag-more {
  @apply px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full;
}

.post-stats {
  @apply flex items-center space-x-4;
}

.post-stat {
  @apply flex items-center space-x-1 text-gray-400 text-xs;
}

.post-actions {
  @apply flex items-center justify-between p-6 pt-4 border-t border-white/10;
}

.read-btn {
  @apply flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300;
}

.bookmark-btn {
  @apply p-2 text-gray-400 hover:text-white transition-colors duration-300;
}

.load-more-btn {
  @apply px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center mx-auto;
}

/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 