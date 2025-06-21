# TUARAN - 开发者主页

一个现代化的个人开发者主页，展示代码分析、项目管理和博客内容。

## ✨ 功能特性

### 📊 数据仪表板
- **代码分析图表**: 展示AI生成代码和接受代码的统计
- **时间周期选择**: 支持今天、7天、30天的数据查看
- **实时数据更新**: 动态加载和显示代码生成趋势

### 🚀 项目管理
- **GitHub项目展示**: 展示个人开源项目
- **项目分类**: 按技术栈和功能分类
- **项目统计**: 显示star、fork等关键指标

### 📝 博客系统
- **文章列表**: 展示技术博客和开发心得
- **分类标签**: 按主题和技术分类
- **阅读统计**: 显示文章阅读量和发布时间

## 🛠️ 技术栈

- **前端框架**: Vue 3 + Composition API
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **图表库**: Chart.js + vue-chartjs
- **路由**: Vue Router
- **部署**: GitHub Pages

## 📁 项目结构

```
tuaran.github.io/
├── index.html              # 生产环境主页
├── assets/                 # 构建资源文件
├── dev/                    # 开发源码
│   ├── src/
│   │   ├── components/     # Vue组件
│   │   ├── views/          # 页面视图
│   │   ├── router/         # 路由配置
│   │   └── data/           # 数据文件
│   ├── public/             # 静态资源
│   └── vite.config.js      # Vite配置
└── README.md
```

## 🚀 快速开始

### 开发环境

```bash
# 进入开发目录
cd dev

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 构建部署

```bash
# 构建生产版本
npm run build

# 提交到GitHub
git add .
git commit -m "更新网站"
git push
```

## 📊 数据配置

项目数据存储在 `dev/src/data/` 目录下：

- `analytics.json` - 代码分析数据
- 其他数据文件可根据需要添加

## 🎨 自定义

### 修改主题
在 `dev/src/style.css` 中修改Tailwind CSS配置

### 更新数据
编辑 `dev/src/data/` 目录下的JSON文件

### 添加新页面
1. 在 `dev/src/views/` 创建新组件
2. 在 `dev/src/router/index.js` 添加路由
3. 在导航组件中添加链接

## 🌐 部署

本项目使用GitHub Pages自动部署：

1. 推送代码到GitHub仓库
2. GitHub Pages会自动构建并部署
3. 访问 `https://[username].github.io` 查看网站

## 📱 响应式设计

- 支持桌面端、平板和移动端
- 自适应布局和交互
- 优化的移动端体验

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 📄 许可证

MIT License

---

**TUARAN** - 用代码构建美好世界 ✨
