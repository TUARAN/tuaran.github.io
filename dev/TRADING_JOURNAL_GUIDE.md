# ETH 交易日志使用指南

## 概述
这是一个私密的ETH交易日志系统，用于记录你的交易记录和心得总结。系统包含密码保护功能，确保你的交易数据安全。

## 访问方式
1. 在导航栏点击"博客"
2. 在分类筛选中选择"交易"
3. 点击"ETH 交易日志"卡片
4. 输入密码：`trading2025`
5. 进入交易日志页面

## 功能特性

### 1. 交易统计面板
- **总交易次数**：显示已完成的交易数量
- **胜率**：盈利交易占总交易的百分比
- **总盈亏**：所有交易的累计盈亏
- **连续盈利**：当前连续盈利的次数

### 2. 交易心得总结
- 记录重要的交易心得和策略改进
- 支持标签分类
- 按时间顺序展示

### 3. 交易时间线
- 按时间顺序展示所有交易记录
- 支持做多/做空标识
- 显示入场价格、出场价格、盈亏等信息
- 交易状态标识（进行中/已结束/待执行）

## 数据结构

### 交易记录字段
```json
{
  "id": 1,
  "date": "2025-01-15",
  "time": "14:30",
  "type": "long", // "long" 或 "short"
  "entryPrice": 2500,
  "exitPrice": 2600,
  "quantity": 1.5,
  "profit": 150,
  "profitPercentage": 6,
  "status": "closed", // "open", "closed", "pending"
  "notes": "交易记录和观察",
  "emotions": "neutral", // "excited", "neutral", "worried"
  "strategy": "趋势跟踪",
  "tags": ["ETH", "趋势"],
  "screenshots": [],
  "lessons": "这次交易学到的经验"
}
```

### 心得总结字段
```json
{
  "id": 1,
  "date": "2025-01-15",
  "title": "交易心得总结",
  "content": "这里是你的交易心得和总结",
  "tags": ["心得", "策略", "总结"],
  "type": "insight"
}
```

## 如何添加新交易记录

### 方法1：直接编辑JSON文件
编辑 `dev/src/data/trading-journal.json` 文件，在 `trades` 数组中添加新的交易记录。

### 方法2：使用工具函数（推荐）
```javascript
import { addTrade } from './src/utils/tradingJournalUpdater.js';

// 添加新交易
addTrade({
  type: 'long',
  entryPrice: 2500,
  exitPrice: 2600,
  quantity: 1.5,
  profit: 150,
  profitPercentage: 6,
  status: 'closed',
  notes: 'ETH突破2500阻力位，做多成功',
  emotions: 'excited',
  strategy: '突破交易',
  tags: ['ETH', '突破', '趋势'],
  lessons: '突破交易需要确认成交量配合'
});
```

## 如何添加心得总结

```javascript
import { addInsight } from './src/utils/tradingJournalUpdater.js';

// 添加新心得
addInsight({
  title: '本周交易总结',
  content: '本周主要学习了突破交易策略，发现成交量确认是关键...',
  tags: ['心得', '策略', '总结']
});
```

## 更新交易记录

```javascript
import { updateTrade } from './src/utils/tradingJournalUpdater.js';

// 更新交易记录
updateTrade(1, {
  exitPrice: 2650,
  profit: 225,
  profitPercentage: 9,
  status: 'closed'
});
```

## 安全注意事项

1. **密码保护**：默认密码是 `trading2025`，建议定期更换
2. **数据备份**：定期备份 `trading-journal.json` 文件
3. **隐私保护**：不要在心得中记录敏感的个人信息
4. **访问控制**：确保只有你能访问这个页面

## 自定义配置

### 修改访问密码
编辑 `dev/src/data/trading-journal.json` 文件中的 `accessPassword` 字段。

### 修改统计计算
编辑 `dev/src/utils/tradingJournalUpdater.js` 文件中的计算函数。

## 每日使用建议

1. **记录交易**：每次交易后及时记录
2. **总结心得**：每周或每月总结交易心得
3. **分析数据**：定期查看统计面板，分析交易表现
4. **调整策略**：根据数据反馈调整交易策略

## 技术支持

如果遇到问题，可以：
1. 检查浏览器控制台是否有错误信息
2. 确认JSON文件格式正确
3. 重启开发服务器

---

**记住**：交易日志的目的是帮助你改进交易策略，保持客观记录，不要因为亏损而回避记录。 