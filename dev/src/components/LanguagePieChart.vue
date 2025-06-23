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
  }
});

const chartCanvas = ref(null);
let chart = null;

const createChart = () => {
  if (chart) {
    chart.destroy();
  }

  const ctx = chartCanvas.value.getContext('2d');
  
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: props.data.labels,
      datasets: [{
        data: props.data.datasets[0].data,
        backgroundColor: props.data.datasets[0].backgroundColor,
        borderColor: props.data.datasets[0].borderColor,
        borderWidth: props.data.datasets[0].borderWidth,
        hoverBorderWidth: 3,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#e2e8f0',
            font: {
              size: 11,
              weight: '500'
            },
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 15
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
            size: 13,
            weight: '600'
          },
          bodyFont: {
            size: 12
          },
          padding: 10,
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: ${context.parsed}% (${percentage}%)`;
            }
          }
        }
      },
      cutout: '60%',
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