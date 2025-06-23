<template>
  <footer class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-white/10 mt-20">
    <div class="container mx-auto px-6 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <span class="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h3 class="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                tuaran
              </h3>
              <p class="text-sm text-gray-400">开发者 & 设计师</p>
            </div>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed max-w-md">
            创建美观、功能强大且以用户为中心的应用程序。专注于现代网络技术和创新解决方案。
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">快速链接</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <RouterLink 
                :to="link.path" 
                class="footer-link"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">社交媒体</h4>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              :title="social.name"
              class="social-link"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/10">
        <div class="text-center">
          <h4 class="text-white font-semibold mb-2">订阅我的通讯</h4>
          <p class="text-gray-300 text-sm mb-4">
            获取最新的技术见解、项目更新和开发技巧
          </p>
          <div class="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="输入您的邮箱地址"
              class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
            >
            <button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-r-xl transition-all duration-300 hover:scale-105">
              订阅
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
        <p class="text-gray-400 text-sm">
          © 2024 tuaran. 保留所有权利。
        </p>
        <div class="flex items-center space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            隐私政策
          </a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            服务条款
          </a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            Cookie 政策
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Globe 
} from 'lucide-vue-next';

const quickLinks = [
  { name: '仪表板', path: '/' },
  { name: '项目', path: '/projects' },
  { name: '博客', path: '/blog' },
  { name: '关于', path: '/about' }
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/tuaran' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/tuaran' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/tuaran' },
  { name: '邮箱', icon: Mail, url: 'mailto:hello@tuaran.dev' },
  { name: '个人网站', icon: Globe, url: 'https://tuaran.dev' }
];
</script>

<style scoped>
.footer-link {
  @apply text-gray-400 hover:text-white transition-colors duration-300 text-sm;
}

.social-link {
  @apply w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110;
}
</style> 