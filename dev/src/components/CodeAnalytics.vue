<template>
  <div class="analytics-container">
    <!-- 标题和统计 -->
    <div class="header">
      <div class="title-section">
        <h3 class="title">代码分析</h3>
        <div class="stats">
          <div class="stat">
            <span class="stat-number">{{ totalGenerated }}</span>
            <span class="stat-label">生成代码</span>
          </div>
          <div class="stat">
            <span class="stat-number">{{ totalAccepted }}</span>
            <span class="stat-label">接受代码</span>
          </div>
        </div>
      </div>
      
      <!-- 时间选择器 -->
      <div class="controls">
        <div class="period-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.value"
            @click="selectPeriod(tab.value)"
            :class="['tab-btn', { active: currentPeriod === tab.value }]"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="date-info">{{ currentDateRange }}</div>
      </div>
    </div>

    <!-- 图表容器 -->
    <div class="chart-wrapper">
      <Line 
        :data="chartData" 
        :options="chartOptions"
        :height="300"
      />
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'CodeAnalytics',
  components: { Line },
  
  data() {
    return {
      currentPeriod: '7d',
      tabs: [
        { label: '今天', value: '1d' },
        { label: '7天', value: '7d' },
        { label: '30天', value: '30d' }
      ],
      
      // 模拟数据
      dataSets: {
        '1d': {
          labels: ['今天'],
          generated: [15000],
          accepted: [12000],
          dateRange: '今天'
        },
        '7d': {
          labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          generated: [2500, 7500, 2500, 13000, 15500, 1000, 8000],
          accepted: [1000, 5000, 2000, 11000, 9000, 0, 6000],
          dateRange: '本周'
        },
        '30d': {
          labels: ['第1周', '第2周', '第3周', '第4周'],
          generated: [8000, 12000, 15000, 18000],
          accepted: [6000, 9000, 11000, 14000],
          dateRange: '本月'
        }
      }
    }
  },

  computed: {
    chartData() {
      const data = this.dataSets[this.currentPeriod]
      return {
        labels: data.labels,
        datasets: [
          {
            label: 'AI生成代码',
            data: data.generated,
            borderColor: '#67e8f9',
            backgroundColor: 'rgba(103, 232, 249, 0.1)',
            borderWidth: 3,
            fill: false,
            tension: 0.4,
            pointBackgroundColor: '#67e8f9',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
          },
          {
            label: '接受代码',
            data: data.accepted,
            borderColor: '#a78bfa',
            backgroundColor: 'rgba(167, 139, 250, 0.1)',
            borderWidth: 3,
            fill: false,
            tension: 0.4,
            pointBackgroundColor: '#a78bfa',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
          }
        ]
      }
    },

    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: '#67e8f9',
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: true,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} 行`
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
              font: { size: 12 }
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
              font: { size: 12 },
              callback: function(value) {
                if (value >= 1000) {
                  return (value / 1000).toFixed(1) + 'k'
                }
                return value
              }
            },
            beginAtZero: true
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        }
      }
    },

    totalGenerated() {
      const data = this.dataSets[this.currentPeriod]
      return data.generated.reduce((sum, val) => sum + val, 0).toLocaleString()
    },

    totalAccepted() {
      const data = this.dataSets[this.currentPeriod]
      return data.accepted.reduce((sum, val) => sum + val, 0).toLocaleString()
    },

    currentDateRange() {
      return this.dataSets[this.currentPeriod].dateRange
    }
  },

  methods: {
    selectPeriod(period) {
      this.currentPeriod = period
    }
  }
}
</script>

<style scoped>
.analytics-container {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6;
}

.header {
  @apply flex justify-between items-start mb-6;
}

.title-section {
  @apply flex-1;
}

.title {
  @apply text-sm text-zinc-400 mb-3;
}

.stats {
  @apply flex space-x-8;
}

.stat {
  @apply text-center;
}

.stat-number {
  @apply block text-3xl font-bold text-cyan-400;
}

.stat-label {
  @apply text-sm text-zinc-400;
}

.controls {
  @apply flex flex-col items-end space-y-3;
}

.period-tabs {
  @apply flex bg-zinc-700 rounded-lg p-1;
}

.tab-btn {
  @apply px-4 py-2 text-sm font-medium rounded-md transition-all duration-200;
  @apply text-zinc-300 hover:text-white;
}

.tab-btn.active {
  @apply bg-cyan-500 text-white shadow-lg;
}

.date-info {
  @apply text-sm text-zinc-400 bg-zinc-700 px-3 py-1 rounded;
}

.chart-wrapper {
  @apply relative h-80;
}

/* 响应式 */
@media (max-width: 768px) {
  .header {
    @apply flex-col space-y-4;
  }
  
  .controls {
    @apply items-start w-full;
  }
  
  .period-tabs {
    @apply w-full justify-center;
  }
  
  .date-info {
    @apply w-full text-center;
  }
  
  .chart-wrapper {
    @apply h-64;
  }
}
</style> 