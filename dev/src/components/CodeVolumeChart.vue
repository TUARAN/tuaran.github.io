<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { Chart, registerables } from 'chart.js';

// 注册 Chart.js 组件
Chart.register(...registerables);

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    default: 'line'
  }
});

const chartCanvas = ref(null);
let chart = null;

const createChart = () => {
  if (chart) {
    chart.destroy();
  }

  const ctx = chartCanvas.value.getContext('2d');
  
  // 自定义渐变背景
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(6, 182, 212, 0.2)');
  gradient.addColorStop(1, 'rgba(6, 182, 212, 0.05)');

  const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
  gradient2.addColorStop(1, 'rgba(139, 92, 246, 0.05)');

  // 更新数据集背景色
  const datasets = props.data.datasets.map((dataset, index) => ({
    ...dataset,
    backgroundColor: index === 0 ? gradient : gradient2,
    borderWidth: 2,
    pointBackgroundColor: dataset.borderColor,
    pointBorderColor: '#ffffff',
    pointBorderWidth: 2,
    pointRadius: 4,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: dataset.borderColor,
    pointHoverBorderColor: '#ffffff',
    pointHoverBorderWidth: 3
  }));

  chart = new Chart(ctx, {
    type: props.type,
    data: {
      labels: props.data.labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#e2e8f0',
            font: {
              size: 12,
              weight: '500'
            },
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 20
          }
        },
        tooltip: {
          backgroundColor: 'rgba(30, 41, 59, 0.95)',
          titleColor: '#ffffff',
          bodyColor: '#e2e8f0',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: true,
          titleFont: {
            size: 14,
            weight: '600'
          },
          bodyFont: {
            size: 13
          },
          padding: 12,
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} 行`;
            }
          }
        }
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false
          },
          ticks: {
            color: '#94a3b8',
            font: {
              size: 11
            }
          },
          border: {
            display: false
          }
        },
        y: {
          display: true,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#94a3b8',
            font: {
              size: 11
            },
            callback: function(value) {
              if (value >= 1000) {
                return (value / 1000).toFixed(1) + 'k';
              }
              return value;
            }
          },
          border: {
            display: false
          }
        }
      },
      elements: {
        line: {
          tension: 0.4
        }
      },
      animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
      }
    }
  });
};

onMounted(() => {
  nextTick(() => {
    createChart();
  });
});

watch(() => props.data, () => {
  nextTick(() => {
    createChart();
  });
}, { deep: true });

// 组件卸载时清理图表
onUnmounted(() => {
  if (chart) {
    chart.destroy();
  }
});
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px;
  width: 100%;
}
</style> 