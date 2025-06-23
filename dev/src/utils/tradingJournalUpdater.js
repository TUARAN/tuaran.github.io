import fs from 'fs';
import path from 'path';

/**
 * 更新交易日志数据
 * @param {Object} newData - 新的交易数据
 */
export function updateTradingJournal(newData) {
  const filePath = path.join(process.cwd(), 'dev/src/data/trading-journal.json');
  
  try {
    // 读取现有数据
    const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // 更新数据
    const updatedData = {
      ...existingData,
      ...newData,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    // 如果添加新交易，更新统计信息
    if (newData.trades && newData.trades.length > 0) {
      updatedData.trades = [...existingData.trades, ...newData.trades];
      updatedData.summary = calculateSummary(updatedData.trades);
    }
    
    // 如果添加新心得，更新心得列表
    if (newData.insights && newData.insights.length > 0) {
      updatedData.insights = [...existingData.insights, ...newData.insights];
    }
    
    // 写入文件
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    
    console.log('✅ 交易日志更新成功');
    return true;
  } catch (error) {
    console.error('❌ 更新交易日志失败:', error);
    return false;
  }
}

/**
 * 计算交易统计信息
 * @param {Array} trades - 交易记录数组
 */
function calculateSummary(trades) {
  const closedTrades = trades.filter(trade => trade.status === 'closed');
  const totalTrades = closedTrades.length;
  
  if (totalTrades === 0) {
    return {
      totalTrades: 0,
      winRate: 0,
      totalProfit: 0,
      bestTrade: null,
      worstTrade: null,
      currentStreak: 0,
      monthlyStats: getEmptyMonthlyStats()
    };
  }
  
  const profitableTrades = closedTrades.filter(trade => trade.profit > 0);
  const winRate = Math.round((profitableTrades.length / totalTrades) * 100);
  const totalProfit = closedTrades.reduce((sum, trade) => sum + trade.profit, 0);
  
  const bestTrade = closedTrades.reduce((best, trade) => 
    trade.profit > best.profit ? trade : best, closedTrades[0]);
  
  const worstTrade = closedTrades.reduce((worst, trade) => 
    trade.profit < worst.profit ? trade : worst, closedTrades[0]);
  
  const currentStreak = calculateCurrentStreak(closedTrades);
  const monthlyStats = calculateMonthlyStats(closedTrades);
  
  return {
    totalTrades,
    winRate,
    totalProfit,
    bestTrade: bestTrade.id,
    worstTrade: worstTrade.id,
    currentStreak,
    monthlyStats
  };
}

/**
 * 计算连续盈利次数
 * @param {Array} trades - 已关闭的交易记录
 */
function calculateCurrentStreak(trades) {
  let streak = 0;
  for (let i = trades.length - 1; i >= 0; i--) {
    if (trades[i].profit > 0) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

/**
 * 计算月度统计
 * @param {Array} trades - 已关闭的交易记录
 */
function calculateMonthlyStats(trades) {
  const monthlyStats = getEmptyMonthlyStats();
  
  trades.forEach(trade => {
    const date = new Date(trade.date);
    const month = date.toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
    
    if (monthlyStats[month]) {
      monthlyStats[month].trades++;
      monthlyStats[month].profit += trade.profit;
      
      const profitableTrades = trades.filter(t => {
        const tDate = new Date(t.date);
        const tMonth = tDate.toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
        return tMonth === month && t.profit > 0;
      });
      
      monthlyStats[month].winRate = Math.round((profitableTrades.length / monthlyStats[month].trades) * 100);
    }
  });
  
  return monthlyStats;
}

/**
 * 获取空的月度统计对象
 */
function getEmptyMonthlyStats() {
  return {
    january: { trades: 0, profit: 0, winRate: 0 },
    february: { trades: 0, profit: 0, winRate: 0 },
    march: { trades: 0, profit: 0, winRate: 0 },
    april: { trades: 0, profit: 0, winRate: 0 },
    may: { trades: 0, profit: 0, winRate: 0 },
    june: { trades: 0, profit: 0, winRate: 0 },
    july: { trades: 0, profit: 0, winRate: 0 },
    august: { trades: 0, profit: 0, winRate: 0 },
    september: { trades: 0, profit: 0, winRate: 0 },
    october: { trades: 0, profit: 0, winRate: 0 },
    november: { trades: 0, profit: 0, winRate: 0 },
    december: { trades: 0, profit: 0, winRate: 0 }
  };
}

/**
 * 添加新交易记录
 * @param {Object} trade - 交易记录对象
 */
export function addTrade(trade) {
  const newTrade = {
    id: Date.now(), // 使用时间戳作为ID
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    }),
    ...trade
  };
  
  return updateTradingJournal({
    trades: [newTrade]
  });
}

/**
 * 添加新心得总结
 * @param {Object} insight - 心得总结对象
 */
export function addInsight(insight) {
  const newInsight = {
    id: Date.now(),
    date: new Date().toISOString().split('T')[0],
    ...insight
  };
  
  return updateTradingJournal({
    insights: [newInsight]
  });
}

/**
 * 更新交易记录
 * @param {number} tradeId - 交易ID
 * @param {Object} updates - 更新的字段
 */
export function updateTrade(tradeId, updates) {
  const filePath = path.join(process.cwd(), 'dev/src/data/trading-journal.json');
  
  try {
    const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    const tradeIndex = existingData.trades.findIndex(trade => trade.id === tradeId);
    if (tradeIndex === -1) {
      throw new Error('交易记录不存在');
    }
    
    existingData.trades[tradeIndex] = {
      ...existingData.trades[tradeIndex],
      ...updates
    };
    
    existingData.summary = calculateSummary(existingData.trades);
    existingData.lastUpdated = new Date().toISOString().split('T')[0];
    
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    
    console.log('✅ 交易记录更新成功');
    return true;
  } catch (error) {
    console.error('❌ 更新交易记录失败:', error);
    return false;
  }
} 