<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 border-b border-white/10">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3 group">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <span class="text-white font-bold text-lg">T</span>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div>
            <h1 class="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              tuaran
            </h1>
            <p class="text-xs text-gray-400">开发者 & 设计师</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <RouterLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path" 
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === item.path }"
          >
            <component :is="item.icon" class="w-4 h-4 mr-2" />
            {{ item.label }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center">
          <button 
            @click="toggleMobileMenu"
            class="mobile-menu-btn md:hidden"
            :title="isMenuOpen ? '关闭菜单' : '打开菜单'"
          >
            <Menu v-if="!isMenuOpen" class="w-5 h-5 text-white" />
            <X v-else class="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/10">
        <div class="flex flex-col space-y-1 pt-4">
          <RouterLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path" 
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.path === item.path }"
            @click="closeMobileMenu"
          >
            <component :is="item.icon" class="w-4 h-4 mr-3" />
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { 
  BarChart3, 
  FolderOpen, 
  FileText, 
  User, 
  Menu, 
  X,
  Globe
} from 'lucide-vue-next';

const route = useRoute();
const isMenuOpen = ref(false);

const navItems = [
  { path: '/', label: '仪表板', icon: BarChart3 },
  { path: '/projects', label: '项目', icon: FolderOpen },
  { path: '/websites', label: '网站', icon: Globe },
  { path: '/blog', label: '博客', icon: FileText },
  { path: '/about', label: '关于', icon: User },
];

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMobileMenu = () => {
  isMenuOpen.value = false;
};

// 监听路由变化，自动关闭移动端菜单
watch(() => route.path, () => {
  if (isMenuOpen.value) {
    closeMobileMenu();
  }
});
</script>

<style scoped>
.nav-link {
  @apply flex items-center px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10;
}

.nav-link-active {
  @apply text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30;
}

.mobile-menu-btn {
  @apply p-2 rounded-lg bg-white/10 hover:bg-white/20;
}

.mobile-nav-link {
  @apply flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10;
}

.mobile-nav-link-active {
  @apply text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20;
}

/* Performance optimizations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Disable animations for better performance */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style> 