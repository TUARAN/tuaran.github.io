<template>
  <div class="container mx-auto px-6">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
        AI 编程仪表板
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        实时洞察 AI 驱动的代码生成和开发生产力
      </p>
    </div>

    <!-- Time Selector -->
    <div class="flex justify-center mb-12">
      <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
        <div class="flex space-x-2">
          <button 
            v-for="period in timePeriods" 
            :key="period.key"
            @click="selectedPeriod = period.key"
            class="time-selector-btn"
            :class="{ 'time-selector-btn-active': selectedPeriod === period.key }"
          >
            {{ period.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <!-- Generated Lines -->
      <div class="stat-card">
        <div class="stat-icon bg-gradient-to-br from-cyan-500 to-blue-600">
          <Code class="w-6 h-6" />
        </div>
        <div class="stat-content">
          <h3 class="stat-label">生成代码行数</h3>
          <p class="stat-value">{{ formatNumber(currentData.generated.lines) }}</p>
          <div class="stat-change positive">
            <TrendingUp class="w-4 h-4" />
            <span>+{{ Math.round((currentData.generated.lines / 1000) * 100) }}%</span>
          </div>
        </div>
      </div>

      <!-- Accepted Lines -->
      <div class="stat-card">
        <div class="stat-icon bg-gradient-to-br from-green-500 to-emerald-600">
          <CheckCircle class="w-6 h-6" />
        </div>
        <div class="stat-content">
          <h3 class="stat-label">接受代码行数</h3>
          <p class="stat-value">{{ formatNumber(currentData.accepted.lines) }}</p>
          <div class="stat-change positive">
            <TrendingUp class="w-4 h-4" />
            <span>+{{ Math.round((currentData.accepted.lines / 800) * 100) }}%</span>
          </div>
        </div>
      </div>

      <!-- Files Created -->
      <div class="stat-card">
        <div class="stat-icon bg-gradient-to-br from-purple-500 to-pink-600">
          <FileText class="w-6 h-6" />
        </div>
        <div class="stat-content">
          <h3 class="stat-label">创建文件数</h3>
          <p class="stat-value">{{ currentData.generated.files }}</p>
          <div class="stat-change positive">
            <TrendingUp class="w-4 h-4" />
            <span>+{{ Math.round((currentData.generated.files / 5) * 100) }}%</span>
          </div>
        </div>
      </div>

      <!-- Acceptance Rate -->
      <div class="stat-card">
        <div class="stat-icon bg-gradient-to-br from-orange-500 to-red-600">
          <Target class="w-6 h-6" />
        </div>
        <div class="stat-content">
          <h3 class="stat-label">接受率</h3>
          <p class="stat-value">{{ Math.round((currentData.accepted.lines / currentData.generated.lines) * 100) }}%</p>
          <div class="stat-change positive">
            <TrendingUp class="w-4 h-4" />
            <span>+5.2%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Code Volume Chart -->
      <div class="chart-card">
        <div class="chart-header">
          <h3 class="chart-title">代码量趋势</h3>
          <div class="chart-legend">
            <div class="legend-item">
              <div class="legend-color bg-cyan-500"></div>
              <span>生成</span>
            </div>
            <div class="legend-item">
              <div class="legend-color bg-purple-500"></div>
              <span>接受</span>
            </div>
          </div>
        </div>
        <div class="chart-content">
          <CodeVolumeChart :data="chartData" />
        </div>
      </div>

      <!-- Language Distribution -->
      <div class="chart-card">
        <div class="chart-header">
          <h3 class="chart-title">编程语言分布</h3>
          <p class="chart-subtitle">最常用的编程语言</p>
        </div>
        <div class="chart-content">
          <LanguagePieChart :data="languageChartData" />
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="mt-12">
      <div class="activity-card">
        <div class="activity-header">
          <h3 class="activity-title">最近活动</h3>
          <button class="activity-btn">查看全部</button>
        </div>
        <div class="activity-list">
          <div 
            v-for="activity in recentActivities" 
            :key="activity.id"
            class="activity-item"
          >
            <div class="activity-icon" :class="activity.type">
              <component :is="activity.icon" class="w-4 h-4" />
            </div>
            <div class="activity-content">
              <p class="activity-text">{{ activity.text }}</p>
              <p class="activity-time">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { 
  Code, 
  CheckCircle, 
  FileText, 
  Target, 
  TrendingUp, 
  BarChart3,
  GitCommit,
  GitBranch,
  Zap
} from 'lucide-vue-next';
import analyticsData from '../data/analytics.json';
import chartDataJson from '../data/chartData.json';
import CodeVolumeChart from '../components/CodeVolumeChart.vue';
import LanguagePieChart from '../components/LanguagePieChart.vue';

const selectedPeriod = ref('last7days');

const timePeriods = [
  { key: 'today', label: '今天' },
  { key: 'last7days', label: '7天' },
  { key: 'last30days', label: '30天' }
];

const currentData = computed(() => analyticsData[selectedPeriod.value]);

const chartData = computed(() => chartDataJson.codeVolumeTrend[selectedPeriod.value]);

const languageChartData = computed(() => {
  const languages = currentData.value.generated.languages;
  const data = {
    labels: Object.keys(languages),
    datasets: [
      {
        data: Object.values(languages),
        backgroundColor: [
          '#007bff',
          '#6c757d',
          '#dc3545',
          '#ffc107',
          '#28a745',
          '#17a2b8',
          '#6f42c1',
          '#e83e8c',
          '#fd7e14',
          '#20c997'
        ],
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  };
  return data;
});

const maxLanguageCount = computed(() => {
  return Math.max(...Object.values(currentData.value.generated.languages));
});

const recentActivities = [
  {
    id: 1,
    type: 'generated',
    icon: Code,
    text: '生成了 150 行 TypeScript 代码',
    time: '2 分钟前'
  },
  {
    id: 2,
    type: 'accepted',
    icon: CheckCircle,
    text: '接受了 120 行 Python 代码',
    time: '5 分钟前'
  },
  {
    id: 3,
    type: 'commit',
    icon: GitCommit,
    text: '提交了更改到主分支',
    time: '10 分钟前'
  },
  {
    id: 4,
    type: 'generated',
    icon: Zap,
    text: '生成了 80 行 Vue.js 代码',
    time: '15 分钟前'
  }
];

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

onMounted(() => {
  // Initialize with default data
});
</script>

<style scoped>
.stat-card {
  @apply bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105;
}

.stat-icon {
  @apply w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg;
}

.stat-label {
  @apply text-sm text-gray-400 mb-2;
}

.stat-value {
  @apply text-2xl font-bold text-white mb-2;
}

.stat-change {
  @apply flex items-center space-x-1 text-sm;
}

.stat-change.positive {
  @apply text-green-400;
}

.stat-change.negative {
  @apply text-red-400;
}

.time-selector-btn {
  @apply px-6 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all duration-300;
}

.time-selector-btn-active {
  @apply bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg;
}

.chart-card {
  @apply bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20;
}

.chart-header {
  @apply flex items-center justify-between mb-6;
}

.chart-title {
  @apply text-xl font-semibold text-white;
}

.chart-subtitle {
  @apply text-sm text-gray-400;
}

.chart-legend {
  @apply flex space-x-4;
}

.legend-item {
  @apply flex items-center space-x-2;
}

.legend-color {
  @apply w-3 h-3 rounded-full;
}

.chart-content {
  @apply h-80;
}

.activity-card {
  @apply bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20;
}

.activity-header {
  @apply flex items-center justify-between mb-6;
}

.activity-title {
  @apply text-xl font-semibold text-white;
}

.activity-btn {
  @apply px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-all duration-300;
}

.activity-list {
  @apply space-y-4;
}

.activity-item {
  @apply flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300;
}

.activity-icon {
  @apply w-8 h-8 rounded-lg flex items-center justify-center text-white;
}

.activity-icon.generated {
  @apply bg-gradient-to-br from-cyan-500 to-blue-600;
}

.activity-icon.accepted {
  @apply bg-gradient-to-br from-green-500 to-emerald-600;
}

.activity-icon.commit {
  @apply bg-gradient-to-br from-purple-500 to-pink-600;
}

.activity-content {
  @apply flex-1;
}

.activity-text {
  @apply text-white text-sm;
}

.activity-time {
  @apply text-gray-400 text-xs mt-1;
}
</style> 