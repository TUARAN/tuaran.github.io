# 动效系统使用指南

本项目集成了丰富的动效系统，提供流畅的用户体验，同时保持优秀的性能表现。

## 🎨 动效组件

### 1. AnimatedBackground (动效背景)
提供全局的动态背景效果，包括：
- 渐变背景动画
- 浮动粒子效果
- 网格背景移动
- 光晕效果

```vue
<template>
  <AnimatedBackground />
</template>

<script setup>
import AnimatedBackground from './components/AnimatedBackground.vue'
</script>
```

### 2. MouseFollower (鼠标跟随)
提供自定义鼠标跟随效果：
- 平滑的鼠标跟随动画
- 移动端自动隐藏
- 性能优化

```vue
<template>
  <MouseFollower />
</template>

<script setup>
import MouseFollower from './components/MouseFollower.vue'
</script>
```

### 3. PageTransition (页面切换)
提供页面切换动画：
- 平滑的进入/退出动画
- 支持自定义动画类
- 性能优化

```vue
<template>
  <PageTransition>
    <router-view />
  </PageTransition>
</template>

<script setup>
import PageTransition from './components/PageTransition.vue'
</script>
```

### 4. LoadingSpinner (加载动画)
提供加载状态动画：
- 多环旋转动画
- 可自定义文本
- 支持显示/隐藏控制

```vue
<template>
  <LoadingSpinner :loading="isLoading" text="加载中..." />
</template>

<script setup>
import LoadingSpinner from './components/LoadingSpinner.vue'
</script>
```

## 🎯 CSS 动效类

### 基础动画类
- `.fade-in` - 淡入动画
- `.slide-up` - 向上滑入动画
- `.scale-in` - 缩放进入动画

### 悬停动效类
- `.hover-lift` - 悬停时上浮效果
- `.hover-glow` - 悬停时光晕效果
- `.card-animated` - 卡片悬停动效
- `.btn-animated` - 按钮悬停动效
- `.text-glow` - 文字发光效果

### 使用示例
```vue
<template>
  <div class="card card-animated hover-lift">
    <h2 class="text-glow">标题</h2>
    <button class="btn btn-animated">按钮</button>
  </div>
</template>
```

## 🛠️ 动效工具函数

### 数字计数动画
```javascript
import { animateCounter } from '@/utils/animations'

// 基础用法
animateCounter(element, 1000)

// 自定义选项
animateCounter(element, 1000, 3000, (val) => `$${val}`)
```

### 滚动到元素
```javascript
import { scrollToElement } from '@/utils/animations'

scrollToElement(element, {
  offset: 100,
  duration: 1000,
  easing: 'easeInOutCubic'
})
```

### 元素进入视口动画
```javascript
import { animateOnScroll } from '@/utils/animations'

animateOnScroll(element, 'fade-in', {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  once: true
})
```

### 批量元素动画
```javascript
import { animateElementsOnScroll } from '@/utils/animations'

animateElementsOnScroll('.card', 'slide-up')
```

### 鼠标跟随效果
```javascript
import { mouseFollower } from '@/utils/animations'

const cleanup = mouseFollower(element, {
  smoothness: 0.1,
  offsetX: 0,
  offsetY: 0
})

// 清理
cleanup()
```

### 打字机效果
```javascript
import { typewriter } from '@/utils/animations'

typewriter(element, 'Hello World!', {
  speed: 100,
  delay: 0,
  cursor: '|',
  cursorBlink: true
})
```

### 粒子效果
```javascript
import { createParticles } from '@/utils/animations'

const particles = createParticles(container, {
  count: 50,
  colors: ['#06b6d4', '#8b5cf6', '#ec4899'],
  size: { min: 2, max: 6 },
  speed: { min: 1, max: 3 }
})
```

## ⚡ 性能优化

### 1. GPU 加速
所有动画都使用 `transform` 和 `opacity` 属性，确保 GPU 加速：
```css
.element {
  transform: translateZ(0);
  will-change: transform, opacity;
}
```

### 2. 减少动画偏好
自动检测用户的动画偏好设置：
```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none !important;
    transition: none !important;
  }
}
```

### 3. 节流和防抖
提供节流和防抖函数优化性能：
```javascript
import { throttle, debounce } from '@/utils/animations'

const throttledHandler = throttle(handler, 16) // 60fps
const debouncedHandler = debounce(handler, 300)
```

### 4. 移动端优化
在移动端自动调整动画效果：
```css
@media (max-width: 768px) {
  .hover-lift:hover {
    transform: translateY(-2px);
  }
}
```

## 🎨 自定义动画

### 创建自定义动画类
```css
@keyframes customAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-animation {
  animation: customAnimation 0.6s ease-out;
}
```

### 使用工具函数创建动画
```javascript
import { animateOnScroll } from '@/utils/animations'

// 为自定义动画类添加滚动触发
animateOnScroll(element, 'custom-animation')
```

## 🔧 配置选项

### 全局动效配置
可以在 `App.vue` 中调整全局动效设置：
```javascript
// 动效开关
const enableAnimations = true

// 性能模式
const performanceMode = false

// 移动端动效
const mobileAnimations = true
```

### 组件级别配置
每个动效组件都支持自定义配置：
```vue
<AnimatedBackground 
  :particle-count="20"
  :animation-speed="1.5"
  :enable-glow="true"
/>
```

## 📱 移动端适配

- 自动检测移动设备
- 减少动画复杂度
- 优化触摸交互
- 保持流畅体验

## ♿ 无障碍支持

- 支持 `prefers-reduced-motion` 媒体查询
- 提供动画开关选项
- 保持键盘导航功能
- 屏幕阅读器友好

## 🚀 最佳实践

1. **适度使用** - 动效应该增强体验，而不是分散注意力
2. **性能优先** - 使用 GPU 加速的属性
3. **用户偏好** - 尊重用户的动画偏好设置
4. **渐进增强** - 动效应该是锦上添花，不是必需品
5. **一致性** - 保持动效风格的一致性

## 🐛 故障排除

### 动画不工作
1. 检查元素是否正确应用了动效类
2. 确认没有 `prefers-reduced-motion` 设置
3. 检查浏览器兼容性

### 性能问题
1. 减少同时运行的动画数量
2. 使用 `will-change` 属性优化
3. 检查是否有内存泄漏

### 移动端问题
1. 确认移动端动效已启用
2. 检查触摸事件处理
3. 优化动画复杂度

---

通过这些动效系统，你的网站将拥有流畅、现代的用户体验，同时保持优秀的性能表现！ 