<template>
  <div class="container mx-auto px-6">
    <!-- Password Protection -->
    <div v-if="!isAuthenticated" class="min-h-screen flex items-center justify-center">
      <div class="max-w-md w-full">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            交易日志
          </h1>
          <p class="text-gray-300">请输入访问密码</p>
        </div>
        
        <div class="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">密码</label>
              <input 
                v-model="password" 
                type="password" 
                @keyup.enter="authenticate"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="输入访问密码"
              />
            </div>
            <button 
              @click="authenticate"
              class="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
            >
              进入交易日志
            </button>
            <p v-if="errorMessage" class="text-red-400 text-sm text-center">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Trading Journal Content -->
    <div v-else>
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          ETH 交易日志
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          记录每一次交易，总结每一次经验
        </p>
        <div class="mt-4 text-sm text-gray-400">
          最后更新: {{ formatDate(journalData.lastUpdated) }}
        </div>
      </div>

      <!-- Trading Summary -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div class="stat-card">
          <div class="stat-icon bg-gradient-to-r from-green-500 to-emerald-500">
            <TrendingUp class="w-6 h-6" />
          </div>
          <div class="stat-content">
            <h3 class="stat-value">{{ journalData.summary.totalTrades }}</h3>
            <p class="stat-label">总交易次数</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon bg-gradient-to-r from-blue-500 to-cyan-500">
            <Target class="w-6 h-6" />
          </div>
          <div class="stat-content">
            <h3 class="stat-value">{{ journalData.summary.winRate }}%</h3>
            <p class="stat-label">胜率</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon bg-gradient-to-r from-purple-500 to-pink-500">
            <DollarSign class="w-6 h-6" />
          </div>
          <div class="stat-content">
            <h3 class="stat-value" :class="journalData.summary.totalProfit >= 0 ? 'text-green-400' : 'text-red-400'">
              {{ formatProfit(journalData.summary.totalProfit) }}
            </h3>
            <p class="stat-label">总盈亏</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon bg-gradient-to-r from-orange-500 to-red-500">
            <Zap class="w-6 h-6" />
          </div>
          <div class="stat-content">
            <h3 class="stat-value">{{ journalData.summary.currentStreak }}</h3>
            <p class="stat-label">连续盈利</p>
          </div>
        </div>
      </div>

      <!-- Trading Insights -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-6">交易心得总结</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div 
            v-for="insight in journalData.insights" 
            :key="insight.id"
            class="insight-card"
          >
            <div class="insight-header">
              <h3 class="insight-title">{{ insight.title }}</h3>
              <span class="insight-date">{{ formatDate(insight.date) }}</span>
            </div>
            <p class="insight-content">{{ insight.content }}</p>
            <div class="insight-tags">
              <span 
                v-for="tag in insight.tags" 
                :key="tag"
                class="insight-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Trading Timeline -->
      <div>
        <h2 class="text-3xl font-bold text-white mb-6">交易时间线</h2>
        <div class="timeline">
          <div 
            v-for="(trade, index) in journalData.trades" 
            :key="trade.id"
            class="timeline-item"
          >
            <div class="timeline-marker" :class="getTradeStatusClass(trade.status)">
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
              <div class="trade-card">
                <div class="trade-header">
                  <div class="trade-type" :class="getTradeTypeClass(trade.type)">
                    {{ trade.type === 'long' ? '做多' : '做空' }}
                  </div>
                  <div class="trade-date">
                    {{ formatDate(trade.date) }} {{ trade.time }}
                  </div>
                </div>
                
                <div class="trade-details">
                  <div class="trade-prices">
                    <div class="price-item">
                      <span class="price-label">入场价格:</span>
                      <span class="price-value">${{ trade.entryPrice }}</span>
                    </div>
                    <div v-if="trade.exitPrice" class="price-item">
                      <span class="price-label">出场价格:</span>
                      <span class="price-value">${{ trade.exitPrice }}</span>
                    </div>
                  </div>
                  
                  <div class="trade-profit" :class="trade.profit >= 0 ? 'text-green-400' : 'text-red-400'">
                    <span class="profit-label">盈亏:</span>
                    <span class="profit-value">{{ formatProfit(trade.profit) }} ({{ trade.profitPercentage }}%)</span>
                  </div>
                </div>
                
                <div class="trade-notes">
                  <p class="notes-text">{{ trade.notes }}</p>
                </div>
                
                <div class="trade-footer">
                  <div class="trade-tags">
                    <span 
                      v-for="tag in trade.tags" 
                      :key="tag"
                      class="trade-tag"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  <div class="trade-status" :class="getStatusClass(trade.status)">
                    {{ getStatusText(trade.status) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Zap,
  Lock
} from 'lucide-vue-next';
import tradingJournalData from '../data/trading-journal.json';

const isAuthenticated = ref(false);
const password = ref('');
const errorMessage = ref('');
const journalData = reactive(tradingJournalData);

const authenticate = () => {
  if (password.value === journalData.accessPassword) {
    isAuthenticated.value = true;
    errorMessage.value = '';
  } else {
    errorMessage.value = '密码错误，请重试';
    password.value = '';
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const formatProfit = (profit) => {
  if (profit >= 0) {
    return `+$${profit.toFixed(2)}`;
  }
  return `-$${Math.abs(profit).toFixed(2)}`;
};

const getTradeStatusClass = (status) => {
  const classes = {
    'open': 'status-open',
    'closed': 'status-closed',
    'pending': 'status-pending'
  };
  return classes[status] || 'status-pending';
};

const getTradeTypeClass = (type) => {
  return type === 'long' ? 'type-long' : 'type-short';
};

const getStatusClass = (status) => {
  const classes = {
    'open': 'status-open-text',
    'closed': 'status-closed-text',
    'pending': 'status-pending-text'
  };
  return classes[status] || 'status-pending-text';
};

const getStatusText = (status) => {
  const texts = {
    'open': '进行中',
    'closed': '已结束',
    'pending': '待执行'
  };
  return texts[status] || '未知';
};
</script>

<style scoped>
/* Performance optimizations */
.stat-card {
  @apply bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300;
  will-change: transform, opacity;
}

.stat-card:hover {
  @apply transform scale-105;
}

.stat-icon {
  @apply w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4;
  will-change: transform;
}

.stat-value {
  @apply text-2xl font-bold text-white mb-1;
}

.stat-label {
  @apply text-gray-400 text-sm;
}

.insight-card {
  @apply bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300;
  will-change: transform, opacity;
}

.insight-card:hover {
  @apply transform scale-105;
}

.insight-header {
  @apply flex items-center justify-between mb-4;
}

.insight-title {
  @apply text-xl font-bold text-white;
}

.insight-date {
  @apply text-gray-400 text-sm;
}

.insight-content {
  @apply text-gray-300 leading-relaxed mb-4;
}

.insight-tags {
  @apply flex flex-wrap gap-2;
}

.insight-tag {
  @apply px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20;
  transition: all 0.2s ease;
}

.insight-tag:hover {
  @apply bg-white/20 transform scale-105;
}

.timeline {
  @apply relative;
}

.timeline::before {
  content: '';
  @apply absolute left-6 top-0 bottom-0 w-0.5 bg-white/20;
}

.timeline-item {
  @apply relative flex mb-8;
  will-change: transform, opacity;
}

.timeline-marker {
  @apply flex-shrink-0 w-12 h-12 flex items-center justify-center;
}

.timeline-dot {
  @apply w-4 h-4 rounded-full bg-white/20 border-2 border-white/40;
  will-change: background-color, border-color;
}

.status-open .timeline-dot {
  @apply bg-yellow-500 border-yellow-400;
}

.status-closed .timeline-dot {
  @apply bg-green-500 border-green-400;
}

.status-pending .timeline-dot {
  @apply bg-gray-500 border-gray-400;
}

.timeline-content {
  @apply flex-1 ml-6;
}

.trade-card {
  @apply bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300;
  will-change: transform, opacity;
}

.trade-card:hover {
  @apply transform scale-105;
}

.trade-header {
  @apply flex items-center justify-between mb-4;
}

.trade-type {
  @apply px-3 py-1 text-xs font-medium rounded-full;
  will-change: background-color, color;
}

.type-long {
  @apply bg-green-500/20 text-green-400 border border-green-500/30;
}

.type-short {
  @apply bg-red-500/20 text-red-400 border border-red-500/30;
}

.trade-date {
  @apply text-gray-400 text-sm;
}

.trade-details {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4 mb-4;
}

.trade-prices {
  @apply space-y-2;
}

.price-item {
  @apply flex items-center justify-between;
}

.price-label {
  @apply text-gray-400 text-sm;
}

.price-value {
  @apply text-white font-medium;
}

.trade-profit {
  @apply flex items-center justify-between font-medium;
}

.profit-label {
  @apply text-gray-400 text-sm;
}

.profit-value {
  @apply font-bold;
}

.trade-notes {
  @apply mb-4;
}

.notes-text {
  @apply text-gray-300 text-sm leading-relaxed;
}

.trade-footer {
  @apply flex items-center justify-between;
}

.trade-tags {
  @apply flex flex-wrap gap-2;
}

.trade-tag {
  @apply px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20;
  transition: all 0.2s ease;
}

.trade-tag:hover {
  @apply bg-white/20 transform scale-105;
}

.trade-status {
  @apply px-3 py-1 text-xs font-medium rounded-full;
  will-change: background-color, color;
}

.status-open-text {
  @apply bg-yellow-500/20 text-yellow-400 border border-yellow-500/30;
}

.status-closed-text {
  @apply bg-green-500/20 text-green-400 border border-green-500/30;
}

.status-pending-text {
  @apply bg-gray-500/20 text-gray-400 border border-gray-500/30;
}
</style> 