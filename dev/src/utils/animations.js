// 动效工具函数

/**
 * 数字计数动画
 * @param {HTMLElement} element - 目标元素
 * @param {number} target - 目标数值
 * @param {number} duration - 动画持续时间(ms)
 * @param {function} formatter - 格式化函数
 */
export function animateCounter(element, target, duration = 2000, formatter = (val) => val.toLocaleString()) {
  if (!element) return
  
  const start = 0
  const startTime = performance.now()
  
  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // 使用缓动函数
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const current = Math.floor(start + (target - start) * easeOutQuart)
    
    element.textContent = formatter(current)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      element.textContent = formatter(target)
    }
  }
  
  requestAnimationFrame(update)
}

/**
 * 滚动到元素位置
 * @param {HTMLElement} element - 目标元素
 * @param {object} options - 滚动选项
 */
export function scrollToElement(element, options = {}) {
  const {
    offset = 0,
    duration = 800,
    easing = 'easeInOutCubic'
  } = options
  
  if (!element) return
  
  const targetPosition = element.offsetTop - offset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const startTime = performance.now()
  
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }
  
  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    const easedProgress = easing === 'easeInOutCubic' ? easeInOutCubic(progress) : progress
    const currentPosition = startPosition + distance * easedProgress
    
    window.scrollTo(0, currentPosition)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }
  
  requestAnimationFrame(update)
}

/**
 * 元素进入视口动画
 * @param {HTMLElement} element - 目标元素
 * @param {string} animationClass - 动画类名
 * @param {object} options - 选项
 */
export function animateOnScroll(element, animationClass = 'fade-in', options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass)
        if (once) {
          observer.unobserve(entry.target)
        }
      } else if (!once) {
        entry.target.classList.remove(animationClass)
      }
    })
  }, { threshold, rootMargin })
  
  observer.observe(element)
  return observer
}

/**
 * 批量元素进入视口动画
 * @param {string} selector - 元素选择器
 * @param {string} animationClass - 动画类名
 * @param {object} options - 选项
 */
export function animateElementsOnScroll(selector, animationClass = 'fade-in', options = {}) {
  const elements = document.querySelectorAll(selector)
  const observers = []
  
  elements.forEach(element => {
    const observer = animateOnScroll(element, animationClass, options)
    observers.push(observer)
  })
  
  return observers
}

/**
 * 鼠标跟随效果
 * @param {HTMLElement} element - 跟随元素
 * @param {object} options - 选项
 */
export function mouseFollower(element, options = {}) {
  const {
    smoothness = 0.1,
    offsetX = 0,
    offsetY = 0
  } = options
  
  if (!element) return
  
  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0
  
  const handleMouseMove = (e) => {
    mouseX = e.clientX + offsetX
    mouseY = e.clientY + offsetY
  }
  
  const animate = () => {
    currentX += (mouseX - currentX) * smoothness
    currentY += (mouseY - currentY) * smoothness
    
    element.style.transform = `translate(${currentX}px, ${currentY}px)`
    requestAnimationFrame(animate)
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  animate()
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove)
  }
}

/**
 * 打字机效果
 * @param {HTMLElement} element - 目标元素
 * @param {string} text - 要显示的文本
 * @param {object} options - 选项
 */
export function typewriter(element, text, options = {}) {
  const {
    speed = 100,
    delay = 0,
    cursor = '|',
    cursorBlink = true
  } = options
  
  if (!element) return
  
  let index = 0
  element.textContent = ''
  
  if (cursorBlink) {
    element.textContent = cursor
  }
  
  setTimeout(() => {
    const type = () => {
      if (index < text.length) {
        element.textContent = text.substring(0, index + 1) + (cursorBlink ? cursor : '')
        index++
        setTimeout(type, speed)
      } else {
        if (cursorBlink) {
          element.textContent = text
        }
      }
    }
    
    type()
  }, delay)
}

/**
 * 粒子效果
 * @param {HTMLElement} container - 容器元素
 * @param {object} options - 选项
 */
export function createParticles(container, options = {}) {
  const {
    count = 50,
    colors = ['#06b6d4', '#8b5cf6', '#ec4899'],
    size = { min: 2, max: 6 },
    speed = { min: 1, max: 3 }
  } = options
  
  if (!container) return
  
  const particles = []
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div')
    const color = colors[Math.floor(Math.random() * colors.length)]
    const particleSize = Math.random() * (size.max - size.min) + size.min
    const particleSpeed = Math.random() * (speed.max - speed.min) + speed.min
    
    particle.style.cssText = `
      position: absolute;
      width: ${particleSize}px;
      height: ${particleSize}px;
      background: ${color};
      border-radius: 50%;
      opacity: 0.6;
      pointer-events: none;
      animation: float ${particleSpeed}s ease-in-out infinite;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
    `
    
    container.appendChild(particle)
    particles.push(particle)
  }
  
  return particles
}

/**
 * 检查是否支持减少动画偏好
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * 节流函数
 * @param {function} func - 要节流的函数
 * @param {number} delay - 延迟时间
 */
export function throttle(func, delay) {
  let timeoutId
  let lastExecTime = 0
  
  return function (...args) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

/**
 * 防抖函数
 * @param {function} func - 要防抖的函数
 * @param {number} delay - 延迟时间
 */
export function debounce(func, delay) {
  let timeoutId
  
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
} 