<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 py-16 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6">
          About the Miner
        </h1>
        <p class="text-xl text-zinc-400 max-w-2xl mx-auto">
          The story of a developer who mines code like there's no tomorrow, 
          building the decentralized future one line at a time.
        </p>
      </div>

      <!-- Hero Section -->
      <div class="hero-section mb-16">
        <div class="hero-content">
          <div class="hero-text">
            <h2 class="hero-title">TUARAN</h2>
            <p class="hero-subtitle">Code Miner & Decentralization Advocate</p>
            <p class="hero-description">
              I'm not just a developer - I'm a code miner. Every day, I extract thousands of lines 
              of production-ready code from the depths of my imagination and the vast resources 
              of the open source community. My mission? To decentralize the damn world, one 
              blockchain at a time.
            </p>
            <div class="hero-stats">
              <div class="hero-stat">
                <span class="hero-stat-number">10k+</span>
                <span class="hero-stat-label">Lines/Day</span>
              </div>
              <div class="hero-stat">
                <span class="hero-stat-number">365</span>
                <span class="hero-stat-label">Day Streak</span>
              </div>
              <div class="hero-stat">
                <span class="hero-stat-number">42</span>
                <span class="hero-stat-label">Projects</span>
              </div>
            </div>
          </div>
          <div class="hero-avatar">
            <div class="avatar-container">
              <div class="avatar">👨‍💻</div>
              <div class="status-indicator"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Philosophy Section -->
      <div class="philosophy-section mb-16">
        <h2 class="section-title">The Code Mining Philosophy</h2>
        <div class="philosophy-grid">
          <div class="philosophy-card">
            <div class="philosophy-icon">⚡</div>
            <h3 class="philosophy-title">Code Like Hell</h3>
            <p class="philosophy-description">
              When you're mining code, there's no time for breaks. Every second counts, 
              every line matters. Push your limits, break your boundaries, and never settle 
              for less than your absolute best.
            </p>
          </div>
          <div class="philosophy-card">
            <div class="philosophy-icon">🔓</div>
            <h3 class="philosophy-title">Open Source or Die</h3>
            <p class="philosophy-description">
              Proprietary software is the enemy of progress. True innovation happens in 
              the open, where ideas can be shared, improved, and built upon by the entire 
              community. Open source isn't just a choice - it's a way of life.
            </p>
          </div>
          <div class="philosophy-card">
            <div class="philosophy-icon">🌐</div>
            <h3 class="philosophy-title">Decentralize the World</h3>
            <p class="philosophy-description">
              Centralization is the root of all evil in technology. Every application I build, 
              every line I write, is aimed at creating a more decentralized, more equitable 
              digital future for everyone.
            </p>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="skills-section mb-16">
        <h2 class="section-title">Mining Tools & Technologies</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-category-title">Frontend Mining</h3>
            <div class="skill-tags">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">Tailwind CSS</span>
              <span class="skill-tag">Next.js</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Backend Extraction</h3>
            <div class="skill-tags">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">FastAPI</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">Redis</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Blockchain Mining</h3>
            <div class="skill-tags">
              <span class="skill-tag">Solidity</span>
              <span class="skill-tag">Web3.js</span>
              <span class="skill-tag">Ethereum</span>
              <span class="skill-tag">IPFS</span>
              <span class="skill-tag">DeFi</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">AI/ML Tools</h3>
            <div class="skill-tags">
              <span class="skill-tag">TensorFlow</span>
              <span class="skill-tag">OpenAI API</span>
              <span class="skill-tag">LangChain</span>
              <span class="skill-tag">Pandas</span>
              <span class="skill-tag">Scikit-learn</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="contact-section">
        <h2 class="section-title">Join the Mining Revolution</h2>
        <p class="contact-description">
          Ready to start mining code? Let's connect and build the decentralized future together.
        </p>
        <div class="contact-grid">
          <a href="#" class="contact-card">
            <span class="contact-icon">🐙</span>
            <span class="contact-label">GitHub</span>
          </a>
          <a href="#" class="contact-card">
            <span class="contact-icon">🐦</span>
            <span class="contact-label">Twitter</span>
          </a>
          <a href="#" class="contact-card">
            <span class="contact-icon">💼</span>
            <span class="contact-label">LinkedIn</span>
          </a>
          <a href="#" class="contact-card">
            <span class="contact-icon">📧</span>
            <span class="contact-label">Email</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-8;
}

.hero-content {
  @apply flex flex-col lg:flex-row items-center gap-8;
}

.hero-text {
  @apply flex-1;
}

.hero-title {
  @apply text-4xl font-black text-white mb-2;
}

.hero-subtitle {
  @apply text-xl text-cyan-400 font-semibold mb-4;
}

.hero-description {
  @apply text-zinc-400 text-lg leading-relaxed mb-6;
}

.hero-stats {
  @apply flex space-x-8;
}

.hero-stat {
  @apply text-center;
}

.hero-stat-number {
  @apply block text-2xl font-bold text-cyan-400;
}

.hero-stat-label {
  @apply text-sm text-zinc-500 uppercase tracking-wider;
}

.hero-avatar {
  @apply flex-shrink-0;
}

.avatar-container {
  @apply relative;
}

.avatar {
  @apply text-8xl bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-32 h-32 flex items-center justify-center;
}

.status-indicator {
  @apply absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-900 animate-pulse;
}

.section-title {
  @apply text-3xl font-bold text-white text-center mb-12;
}

.philosophy-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-8;
}

.philosophy-card {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 text-center transition-all duration-300 hover:bg-zinc-800/70 hover:border-cyan-500/50;
}

.philosophy-icon {
  @apply text-4xl mb-4;
}

.philosophy-title {
  @apply text-xl font-bold text-white mb-3;
}

.philosophy-description {
  @apply text-zinc-400 text-sm leading-relaxed;
}

.skills-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8;
}

.skill-category {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6;
}

.skill-category-title {
  @apply text-lg font-bold text-white mb-4;
}

.skill-tags {
  @apply flex flex-wrap gap-2;
}

.skill-tag {
  @apply bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full border border-cyan-500/30;
}

.contact-description {
  @apply text-zinc-400 text-center mb-8 max-w-2xl mx-auto;
}

.contact-grid {
  @apply grid grid-cols-2 md:grid-cols-4 gap-4;
}

.contact-card {
  @apply bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 text-center transition-all duration-300 hover:bg-zinc-800/70 hover:border-cyan-500/50 hover:transform hover:scale-105 flex flex-col items-center;
}

.contact-icon {
  @apply text-3xl mb-2;
}

.contact-label {
  @apply text-sm text-zinc-400;
}
</style> 