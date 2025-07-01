<template>
  <div class="container mx-auto px-6">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
        AI 编程仪表板
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        如果每天不让大模型生成万行代码，我都会觉得难受
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
        <div class="chart-tip">
          <p class="tip-text">💡 数据来源: Cursor 等代码生成平台，不定期更新</p>
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
  BarChart3
} from 'lucide-vue-next';
import analyticsData from '../data/analytics.json';
import { processAnalyticsData, generateChartData } from '../utils/analyticsProcessor.js';
import CodeVolumeChart from '../components/CodeVolumeChart.vue';
import LanguagePieChart from '../components/LanguagePieChart.vue';

const selectedPeriod = ref('last7days');

const timePeriods = [
  { key: 'today', label: '今天' },
  { key: 'last7days', label: '7天' },
  { key: 'last30days', label: '30天' }
];

// 使用工具函数处理数据
const processedData = computed(() => processAnalyticsData(analyticsData.agent_edits));

const currentData = computed(() => processedData.value[selectedPeriod.value]);

const chartData = computed(() => generateChartData(analyticsData.agent_edits, selectedPeriod.value));

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

.chart-tip {
  @apply mt-4 pt-4 border-t border-white/10;
}

.tip-text {
  @apply text-xs text-gray-400 text-center;
}


</style> 