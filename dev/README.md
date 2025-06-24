# tuaran 开发者主页

一个现代化的开发者个人主页，使用 Vue 3 + Tailwind CSS 构建，具有玻璃态设计和响应式布局。

## 🚀 功能特性

- 📊 **AI 编程仪表板** - 实时代码生成统计和趋势分析
- 🎯 **项目展示** - 精选项目集合，支持分类筛选
- 📝 **博客系统** - 技术文章和见解分享
- 👤 **个人介绍** - 技能展示和工作经历
- 🌙 **深色主题** - 现代化的深色主题设计
- 📱 **响应式设计** - 完美适配各种设备
- ⚡ **性能优化** - 懒加载和代码分割

## 📁 项目结构

```
dev/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Navbar.vue      # 导航栏
│   │   ├── Footer.vue      # 页脚
│   │   ├── CodeVolumeChart.vue    # 代码量趋势图表
│   │   ├── LanguagePieChart.vue   # 语言分布饼图
│   │   └── CodeAnalytics.vue      # 代码分析组件
│   ├── views/              # 页面组件
│   │   ├── Dashboard.vue   # 仪表板
│   │   ├── Projects.vue    # 项目页面
│   │   ├── Blog.vue        # 博客页面
│   │   └── About.vue       # 关于页面
│   ├── data/               # 数据文件
│   │   ├── analytics.json  # 分析数据（基于 agent_edits）
│   │   ├── projects.json   # 项目数据
│   │   └── blogs.json      # 博客数据
│   ├── utils/              # 工具函数
│   │   └── analyticsProcessor.js  # 数据分析处理工具
│   ├── router/             # 路由配置
│   └── style.css           # 全局样式
├── public/                 # 静态资源
└── package.json           # 项目配置
```

## 📊 数据分析说明

### 数据聚合处理

项目使用 `analyticsProcessor.js` 工具函数基于 `agent_edits` 数据动态计算统计信息：

- **today**: 基于当天数据计算
- **last7days**: 聚合最近7天的数据
- **last30days**: 聚合最近30天的数据

### 图表数据生成

图表数据由 `generateChartData()` 函数动态生成：

```javascript
// 基于 agent_edits 生成图表数据
const chartData = generateChartData(agentEdits, 'last7days');
```

### 数据结构说明

- **labels**: 时间轴标签（X轴）
- **datasets**: 数据集数组
  - **label**: 数据系列名称
  - **data**: 数值数组
  - **borderColor**: 线条颜色
  - **backgroundColor**: 填充颜色
  - **fill**: 是否填充
  - **tension**: 线条曲度 (0-1)

### 自定义数据

1. **修改时间周期**：
   - `today`: 今天的数据（按小时）
   - `last7days`: 最近7天数据
   - `last30days`: 最近30天数据

2. **更新 agent_edits 数据**：
   ```json
   {
     "agent_edits": [
       { "date": "2025-06-23", "generated": 9000, "accepted": 4500 },
       { "date": "2025-06-24", "generated": 12000, "accepted": 8000 }
     ]
   }
   ```

3. **语言分布数据**：
   语言分布基于生成代码量的比例自动计算：
   - TypeScript: 40%
   - JavaScript: 30%
   - Python: 20%
   - Vue: 10%

## 🛠️ 技术栈

- **前端框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **图表库**: Chart.js + vue-chartjs
- **图标库**: Lucide Vue Next
- **路由**: Vue Router 4

## 🚀 快速开始

1. **安装依赖**：
   ```bash
   npm install
   ```

2. **启动开发服务器**：
   ```bash
   npm run dev
   ```

3. **构建生产版本**：
   ```bash
   npm run build
   ```

4. **预览生产版本**：
   ```bash
   npm run preview
   ```

## 🎨 自定义主题

### 颜色配置

主要使用的颜色变量：
- 青色: `#06b6d4` (cyan-500)
- 紫色: `#8b5cf6` (purple-600)
- 绿色: `#10b981` (emerald-500)
- 背景: `#0f172a` (slate-900)

### 玻璃态效果

```css
.glass-effect {
  @apply bg-white/10 backdrop-blur-lg border border-white/20;
}
```

## 📱 响应式断点

- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 🔧 开发指南

### 添加新页面

1. 在 `src/views/` 创建新的 Vue 组件
2. 在 `src/router/index.js` 添加路由配置
3. 在导航栏中添加链接

### 添加新图表

1. 在 `src/components/` 创建图表组件
2. 在 `src/utils/analyticsProcessor.js` 中添加数据处理逻辑
3. 在页面中引入并使用

### 数据更新

- **分析数据**: 编辑 `src/data/analytics.json` 中的 `agent_edits` 数组
- **项目数据**: 编辑 `src/data/projects.json`
- **博客数据**: 编辑 `src/data/blogs.json`

### 自定义数据处理

如需修改数据聚合逻辑，编辑 `src/utils/analyticsProcessor.js` 文件：

```javascript
// 修改语言分布比例
const languageDistribution = {
  TypeScript: 0.4, // 40%
  JavaScript: 0.3, // 30%
  Python: 0.2,     // 20%
  Vue: 0.1         // 10%
};
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**注意**: 这是一个演示项目，实际使用时请根据你的真实数据替换示例数据。 