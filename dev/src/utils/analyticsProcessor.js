/**
 * 基于 agent_edits 数据聚合计算统计数据
 * @param {Array} agentEdits - agent_edits 数组
 * @returns {Object} 聚合后的统计数据
 */
export function processAnalyticsData(agentEdits) {
  // 找到数据中的最新日期
  const sortedDates = agentEdits.map(item => item.date).sort();
  const latestDate = sortedDates[sortedDates.length - 1];
  
  // 获取最新日期的数据
  const latestData = agentEdits.find(item => item.date === latestDate) || { generated: 0, accepted: 0 };
  
  // 计算最近7天的数据（基于数据中的日期）
  const last7DaysData = getLastNDaysFromData(agentEdits, 7, latestDate);
  
  // 计算最近30天的数据（基于数据中的日期）
  const last30DaysData = getLastNDaysFromData(agentEdits, 30, latestDate);
  
  // 模拟语言分布数据（基于生成代码量的比例）
  const languageDistribution = {
    TypeScript: 0.4, // 40%
    JavaScript: 0.3, // 30%
    Python: 0.2,     // 20%
    Vue: 0.1         // 10%
  };
  
  return {
    today: {
      generated: {
        lines: latestData.generated,
        files: Math.ceil(latestData.generated / 750), // 假设平均每个文件750行
        languages: calculateLanguageDistribution(latestData.generated, languageDistribution)
      },
      accepted: {
        lines: latestData.accepted,
        files: Math.ceil(latestData.accepted / 750),
        languages: calculateLanguageDistribution(latestData.accepted, languageDistribution)
      }
    },
    last7days: {
      generated: {
        lines: last7DaysData.generated,
        files: Math.ceil(last7DaysData.generated / 750),
        languages: calculateLanguageDistribution(last7DaysData.generated, languageDistribution)
      },
      accepted: {
        lines: last7DaysData.accepted,
        files: Math.ceil(last7DaysData.accepted / 750),
        languages: calculateLanguageDistribution(last7DaysData.accepted, languageDistribution)
      }
    },
    last30days: {
      generated: {
        lines: last30DaysData.generated,
        files: Math.ceil(last30DaysData.generated / 750),
        languages: calculateLanguageDistribution(last30DaysData.generated, languageDistribution)
      },
      accepted: {
        lines: last30DaysData.accepted,
        files: Math.ceil(last30DaysData.accepted / 750),
        languages: calculateLanguageDistribution(last30DaysData.accepted, languageDistribution)
      }
    }
  };
}

/**
 * 从数据中获取最近N天的日期数组
 * @param {Array} agentEdits - agent_edits 数组
 * @param {number} days - 天数
 * @param {string} latestDate - 最新日期
 * @returns {Object} 聚合后的数据
 */
function getLastNDaysFromData(agentEdits, days, latestDate) {
  const latest = new Date(latestDate);
  let totalGenerated = 0;
  let totalAccepted = 0;
  
  for (let i = 0; i < days; i++) {
    const date = new Date(latest);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    
    const dayData = agentEdits.find(item => item.date === dateStr);
    if (dayData) {
      totalGenerated += dayData.generated;
      totalAccepted += dayData.accepted;
    }
  }
  
  return {
    generated: totalGenerated,
    accepted: totalAccepted
  };
}

/**
 * 获取最近N天的日期数组
 * @param {number} days - 天数
 * @returns {Array} 日期数组
 */
function getLastNDays(days) {
  const dates = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
}

/**
 * 根据日期范围聚合数据
 * @param {Array} agentEdits - agent_edits 数组
 * @param {Array} dateRange - 日期范围
 * @returns {Object} 聚合后的数据
 */
function aggregateDataByDateRange(agentEdits, dateRange) {
  let totalGenerated = 0;
  let totalAccepted = 0;
  
  dateRange.forEach(date => {
    const dayData = agentEdits.find(item => item.date === date);
    if (dayData) {
      totalGenerated += dayData.generated;
      totalAccepted += dayData.accepted;
    }
  });
  
  return {
    generated: totalGenerated,
    accepted: totalAccepted
  };
}

/**
 * 计算语言分布
 * @param {number} totalLines - 总行数
 * @param {Object} distribution - 语言分布比例
 * @returns {Object} 各语言的行数
 */
function calculateLanguageDistribution(totalLines, distribution) {
  const result = {};
  Object.keys(distribution).forEach(language => {
    result[language] = Math.round(totalLines * distribution[language]);
  });
  return result;
}

/**
 * 基于 agent_edits 生成图表数据
 * @param {Array} agentEdits - agent_edits 数组
 * @param {string} period - 时间周期 ('today', 'last7days', 'last30days')
 * @returns {Object} 图表数据
 */
export function generateChartData(agentEdits, period) {
  switch (period) {
    case 'today':
      return generateTodayChartData(agentEdits);
    case 'last7days':
      return generateLast7DaysChartData(agentEdits);
    case 'last30days':
      return generateLast30DaysChartData(agentEdits);
    default:
      return generateLast7DaysChartData(agentEdits);
  }
}

/**
 * 生成今天的图表数据（按小时）
 * @param {Array} agentEdits - agent_edits 数组
 * @returns {Object} 图表数据
 */
function generateTodayChartData(agentEdits) {
  // 找到数据中的最新日期
  const sortedDates = agentEdits.map(item => item.date).sort();
  const latestDate = sortedDates[sortedDates.length - 1];
  const todayData = agentEdits.find(item => item.date === latestDate);
  
  // 模拟按小时分布的数据
  const hourlyDistribution = [0.1, 0.05, 0.15, 0.2, 0.25, 0.15, 0.1];
  const generated = hourlyDistribution.map(ratio => 
    Math.round((todayData?.generated || 0) * ratio)
  );
  const accepted = hourlyDistribution.map(ratio => 
    Math.round((todayData?.accepted || 0) * ratio)
  );
  
  return {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [
      {
        label: '生成代码',
        data: generated,
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: '接受代码',
        data: accepted,
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };
}

/**
 * 生成最近7天的图表数据
 * @param {Array} agentEdits - agent_edits 数组
 * @returns {Object} 图表数据
 */
function generateLast7DaysChartData(agentEdits) {
  // 找到数据中的最新日期
  const sortedDates = agentEdits.map(item => item.date).sort();
  const latestDate = sortedDates[sortedDates.length - 1];
  
  // 获取最近7天的数据
  const last7Days = [];
  const latest = new Date(latestDate);
  for (let i = 6; i >= 0; i--) {
    const date = new Date(latest);
    date.setDate(date.getDate() - i);
    last7Days.push(date.toISOString().split('T')[0]);
  }
  
  const labels = last7Days.map(date => {
    const d = new Date(date);
    return `${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
  });
  
  const generated = last7Days.map(date => {
    const dayData = agentEdits.find(item => item.date === date);
    return dayData?.generated || 0;
  });
  
  const accepted = last7Days.map(date => {
    const dayData = agentEdits.find(item => item.date === date);
    return dayData?.accepted || 0;
  });
  
  return {
    labels,
    datasets: [
      {
        label: '生成代码',
        data: generated,
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: '接受代码',
        data: accepted,
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };
}

/**
 * 生成最近30天的图表数据（按周聚合）
 * @param {Array} agentEdits - agent_edits 数组
 * @returns {Object} 图表数据
 */
function generateLast30DaysChartData(agentEdits) {
  // 找到数据中的最新日期
  const sortedDates = agentEdits.map(item => item.date).sort();
  const latestDate = sortedDates[sortedDates.length - 1];
  
  // 获取最近30天的数据
  const last30Days = [];
  const latest = new Date(latestDate);
  for (let i = 29; i >= 0; i--) {
    const date = new Date(latest);
    date.setDate(date.getDate() - i);
    last30Days.push(date.toISOString().split('T')[0]);
  }
  
  // 按周聚合数据
  const weeklyData = [];
  for (let i = 0; i < 4; i++) {
    const weekStart = i * 7;
    const weekEnd = weekStart + 7;
    const weekDates = last30Days.slice(weekStart, weekEnd);
    
    let weekGenerated = 0;
    let weekAccepted = 0;
    
    weekDates.forEach(date => {
      const dayData = agentEdits.find(item => item.date === date);
      if (dayData) {
        weekGenerated += dayData.generated;
        weekAccepted += dayData.accepted;
      }
    });
    
    weeklyData.push({
      generated: weekGenerated,
      accepted: weekAccepted
    });
  }
  
  return {
    labels: ['第1周', '第2周', '第3周', '第4周'],
    datasets: [
      {
        label: '生成代码',
        data: weeklyData.map(week => week.generated),
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: '接受代码',
        data: weeklyData.map(week => week.accepted),
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };
} 