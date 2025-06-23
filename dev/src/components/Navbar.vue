<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border-b border-white/10">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3 group">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-110">
              <span class="text-white font-bold text-lg">T</span>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
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

        <!-- Theme Toggle & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button 
            @click="toggleTheme"
            class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
          >
            <Sun v-if="isDark" class="w-5 h-5 text-yellow-400 group-hover:rotate-90 transition-transform duration-300" />
            <Moon v-else class="w-5 h-5 text-blue-400 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <!-- Mobile Menu Button -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <Menu v-if="!isMenuOpen" class="w-5 h-5 text-white" />
            <X v-else class="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/10">
          <div class="flex flex-col space-y-2 pt-4">
            <RouterLink 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path" 
              class="mobile-nav-link"
              :class="{ 'mobile-nav-link-active': $route.path === item.path }"
              @click="isMenuOpen = false"
            >
              <component :is="item.icon" class="w-4 h-4 mr-3" />
              {{ item.label }}
            </RouterLink>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { 
  BarChart3, 
  FolderOpen, 
  FileText, 
  User, 
  Sun, 
  Moon, 
  Menu, 
  X 
} from 'lucide-vue-next';

const route = useRoute();
const isMenuOpen = ref(false);
const isDark = ref(false);

const navItems = [
  { path: '/', label: '仪表板', icon: BarChart3 },
  { path: '/projects', label: '项目', icon: FolderOpen },
  { path: '/blog', label: '博客', icon: FileText },
  { path: '/about', label: '关于', icon: User },
];

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
  // 保存主题偏好到本地存储
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  // 检查本地存储的主题偏好
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } else {
    // 检查系统主题偏好
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark.value = true;
      document.documentElement.classList.add('dark');
    }
  }
});
</script>

<style scoped>
.nav-link {
  @apply flex items-center px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative overflow-hidden;
}

.nav-link::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300;
}

.nav-link:hover::before {
  @apply opacity-100;
}

.nav-link-active {
  @apply text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30;
}

.mobile-nav-link {
  @apply flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300;
}

.mobile-nav-link-active {
  @apply text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20;
}
</style> 