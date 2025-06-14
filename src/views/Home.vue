<template>
  <div class="home">
    <!-- Parallax Hero Section with Title -->
    <section class="parallax-hero" ref="parallaxSection">
      <div class="parallax-bg"></div>
      <div class="parallax-content">
        <div class="hero-content">
          <div class="hero-icon">💀</div>
          <h1 class="hero-title">Wacky Warlords</h1>
          <p class="hero-subtitle">Where legends battle for a second chance at life</p>
          <p class="hero-description">
            Death has grown bored of routine. Now, warriors from across time clash in the ultimate tournament
            for the prize of resurrection. Strategy meets madness in this epic real-time battle arena.
          </p>
          <div class="hero-actions">
            <router-link to="/what-is-wacky-warlords" class="btn btn-primary">
              <span class="btn-icon">🎮</span>
              Play Now
            </router-link>
            <router-link to="/lore" class="btn btn-secondary">
              <span class="btn-icon">📖</span>
              Discover Lore
            </router-link>
          </div>
        </div>

        <!-- Floating Elements -->
        <div class="floating-elements">
          <div class="floating-item sword">⚔️</div>
          <div class="floating-item shield">🛡️</div>
          <div class="floating-item crown">👑</div>
          <div class="floating-item skull">💀</div>
          <div class="floating-item fire">🔥</div>
          <div class="floating-item magic">✨</div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="scroll-arrow">↓</div>
        <span>Scroll to explore</span>
      </div>
    </section>

    <div class="container">
      <!-- Promotional Banner Leading to Support Us -->
      <section class="promo-banner">
        <div class="banner-bg-elements">
          <div class="bg-element">💰</div>
          <div class="bg-element">🚀</div>
          <div class="bg-element">⭐</div>
        </div>

        <div class="banner-content">
          <div class="banner-left">
            <div class="banner-icon">🚀</div>
            <div class="banner-text">
              <h2>Support the Revolution</h2>
              <p>Help us build the ultimate strategy game and join thousands of supporters shaping the future of Wacky Warlords!</p>
              <div class="banner-features">
                <span class="feature-tag">🎁 Exclusive Perks</span>
                <span class="feature-tag">⚡ Early Access</span>
                <span class="feature-tag">💬 Direct Dev Contact</span>
              </div>
            </div>
          </div>
          <div class="banner-right">
            <router-link to="/support-us" class="banner-btn">
              <span class="btn-text">Support Development</span>
              <span class="btn-arrow">→</span>
            </router-link>
            <div class="support-preview">
              <div class="preview-item">
                <span class="preview-icon">👥</span>
                <span>2,847 Supporters</span>
              </div>
              <div class="preview-item">
                <span class="preview-icon">💰</span>
                <span>85% Funded</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="funding-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 85%"></div>
          </div>
          <div class="progress-stats">
            <span class="current-amount">$12,450</span>
            <span class="goal-amount">/ $15,000 Goal</span>
          </div>
        </div>
      </section>

      <!-- Know the Lore Section -->
      <section class="lore-section">
        <div class="section-header">
          <div class="section-icon">🕯️</div>
          <h2>Know the Lore</h2>
          <p>Discover the dark tale behind the Ancient Game of Death</p>
        </div>

        <div class="lore-showcase">
          <div class="lore-content">
            <div class="lore-quote">
              <blockquote>
                "They say even Death tires of routine. In these rare moments, Death summons forth a spectacle:
                The Ancient Game of Death."
              </blockquote>
              <cite>— From the Chronicles of the Realm</cite>
            </div>

            <div class="lore-features">
              <div class="lore-feature">
                <div class="feature-icon">🌫️</div>
                <h4>The Realm of Calm</h4>
                <p>A world suspended between life and oblivion where warriors await their fate</p>
              </div>
              <div class="lore-feature">
                <div class="feature-icon">⚔️</div>
                <h4>Epic Tournament</h4>
                <p>Warriors compete in brutal contests for a second chance at life</p>
              </div>
              <div class="lore-feature">
                <div class="feature-icon">🕰️</div>
                <h4>Timeless Warriors</h4>
                <p>Champions pulled from every era of history to battle</p>
              </div>
            </div>

            <div class="lore-cta-section">
              <router-link to="/lore" class="lore-cta">
                <span>Explore the Full Story</span>
                <span class="cta-arrow">→</span>
              </router-link>
            </div>
          </div>

          <div class="lore-visual">
            <div class="mystical-orb">
              <div class="orb-core"></div>
              <div class="orb-ring ring-1"></div>
              <div class="orb-ring ring-2"></div>
              <div class="orb-ring ring-3"></div>
              <div class="orb-particles">
                <span class="particle">✨</span>
                <span class="particle">💀</span>
                <span class="particle">⚔️</span>
                <span class="particle">🔮</span>
              </div>
            </div>
            <div class="orb-description">
              <h5>The Nexus of Souls</h5>
              <p>Where all warriors' destinies converge</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Understand the Sport Section -->
      <section class="sport-section">
        <div class="section-header">
          <div class="section-icon">🎯</div>
          <h2>Understand the Sport</h2>
          <p>Master the art of strategic warfare in real-time battles</p>
        </div>

        <div class="sport-showcase">
          <div class="sport-intro">
            <h3>Real-Time Strategy Meets Tactical Depth</h3>
            <p>
              Wacky Warlords combines lightning-fast decision making with deep strategic planning.
              Build your army, deploy your forces, and outmaneuver opponents in intense tug-of-war battles.
            </p>
          </div>

          <div class="sport-grid">
            <div class="sport-card">
              <div class="card-header">
                <div class="card-icon">🎯</div>
                <h3>Real-Time Strategy</h3>
              </div>
              <div class="card-content">
                <p>Deploy units, control lanes, and destroy enemy strongholds in fast-paced tactical combat.</p>
                <ul class="card-features">
                  <li>Instant decision making</li>
                  <li>Dynamic battlefield control</li>
                  <li>Momentum-based combat</li>
                </ul>
              </div>
            </div>

            <div class="sport-card">
              <div class="card-header">
                <div class="card-icon">🧙</div>
                <h3>Legendary Heroes</h3>
              </div>
              <div class="card-content">
                <p>Command powerful Warlords with unique abilities and build synergistic armies.</p>
                <ul class="card-features">
                  <li>Diverse hero roster</li>
                  <li>Racial synergies</li>
                  <li>Customizable loadouts</li>
                </ul>
              </div>
            </div>

            <div class="sport-card">
              <div class="card-header">
                <div class="card-icon">🏆</div>
                <h3>Competitive Leagues</h3>
              </div>
              <div class="card-content">
                <p>Climb ranked ladders, join tournaments, and prove your tactical supremacy.</p>
                <ul class="card-features">
                  <li>Seasonal competitions</li>
                  <li>Global leaderboards</li>
                  <li>Exclusive rewards</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="gameplay-preview">
            <div class="preview-box">
              <div class="preview-icon">🎮</div>
              <h4>Experience the Gameplay</h4>
              <p>Fast-paced battles where every second counts and strategy determines victory</p>
            </div>
          </div>
        </div>

        <div class="sport-cta">
          <router-link to="/what-is-wacky-warlords" class="sport-btn">
            <span>Learn Game Mechanics</span>
            <span class="btn-icon">🎮</span>
          </router-link>
        </div>
      </section>

      <!-- Contact Us Banner -->
      <section class="contact-banner">
        <div class="contact-bg-pattern">
          <div class="pattern-element">⚔️</div>
          <div class="pattern-element">🛡️</div>
          <div class="pattern-element">👑</div>
          <div class="pattern-element">💀</div>
          <div class="pattern-element">🔥</div>
          <div class="pattern-element">✨</div>
        </div>

        <div class="contact-content">
          <div class="contact-left">
            <h2>Join Our Growing Community</h2>
            <p>Connect with fellow warlords, share strategies, and get direct access to our development team.
              Be part of shaping the future of Wacky Warlords!</p>

            <div class="community-highlights">
              <div class="highlight-item">
                <span class="highlight-icon">💬</span>
                <div class="highlight-text">
                  <strong>Active Discord</strong>
                  <small>Real-time chat with devs</small>
                </div>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">📢</span>
                <div class="highlight-text">
                  <strong>Weekly Updates</strong>
                  <small>Behind-the-scenes content</small>
                </div>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">🎯</span>
                <div class="highlight-text">
                  <strong>Beta Access</strong>
                  <small>Test new features first</small>
                </div>
              </div>
            </div>

            <div class="contact-stats">
              <div class="stat-item">
                <div class="stat-icon">👥</div>
                <div class="stat-info">
                  <span class="stat-number">2,847</span>
                  <span class="stat-label">Discord Members</span>
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">💬</div>
                <div class="stat-info">
                  <span class="stat-number">24/7</span>
                  <span class="stat-label">Community Support</span>
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">🌍</div>
                <div class="stat-info">
                  <span class="stat-number">45+</span>
                  <span class="stat-label">Countries</span>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-right">
            <div class="contact-actions">
              <a href="#" class="social-link discord">
                <span class="social-icon">💬</span>
                <div class="social-text">
                  <strong>Join Discord</strong>
                  <small>Chat with the community</small>
                </div>
                <span class="social-arrow">→</span>
              </a>
              <router-link to="/contact-about" class="social-link contact">
                <span class="social-icon">📧</span>
                <div class="social-text">
                  <strong>Contact Team</strong>
                  <small>Get in touch directly</small>
                </div>
                <span class="social-arrow">→</span>
              </router-link>
              <a href="#" class="social-link newsletter">
                <span class="social-icon">📮</span>
                <div class="social-text">
                  <strong>Newsletter</strong>
                  <small>Weekly game updates</small>
                </div>
                <span class="social-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest News/Updates Ticker -->
      <section class="news-ticker">
        <div class="ticker-header">
          <span class="ticker-icon">📢</span>
          <span class="ticker-title">Latest Updates</span>
          <span class="ticker-live">LIVE</span>
        </div>
        <div class="ticker-content">
          <div class="ticker-items">
            <span class="ticker-item">🎮 New Hero "Pharaoh of Plagues" coming January 20th</span>
            <span class="ticker-item">🏆 Ranked Season 1 starts February 17th - Registration open</span>
            <span class="ticker-item">🎭 Masquerade Court race revealed for March release</span>
            <span class="ticker-item">💰 Support goal 85% complete - help us reach 100%!</span>
            <span class="ticker-item">🔥 Weekend tournament this Saturday - Prize pool $500</span>
            <span class="ticker-item">⚡ Server maintenance complete - better performance</span>
          </div>
        </div>
      </section>

      <!-- Call to Action Footer -->
      <section class="cta-footer">
        <div class="cta-content">
          <h2>Ready to Enter the Arena?</h2>
          <p>Join thousands of players in the ultimate test of strategy and wit</p>
          <div class="cta-buttons">
            <router-link to="/what-is-wacky-warlords" class="cta-btn primary">
              <span class="btn-icon">⚔️</span>
              <span>Start Playing</span>
            </router-link>
            <router-link to="/support-us" class="cta-btn secondary">
              <span class="btn-icon">❤️</span>
              <span>Support Us</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const parallaxSection = ref(null)

// Parallax scroll effect
const handleScroll = () => {
  if (parallaxSection.value) {
    const scrolled = window.pageYOffset
    const parallax = parallaxSection.value.querySelector('.parallax-bg')
    const speed = 0.5
    parallax.style.transform = `translateY(${scrolled * speed}px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Reset and base styles */
* {
  box-sizing: border-box;
}

/* Parallax Hero Section */
.parallax-hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax-bg {
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 25%, #1a1a1a 50%, #2c2c2c 75%, #1a1a1a 100%);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.parallax-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 20%, rgba(231, 76, 60, 0.1) 0%, transparent 40%),
  radial-gradient(circle at 80% 80%, rgba(142, 68, 173, 0.1) 0%, transparent 40%),
  radial-gradient(circle at 40% 60%, rgba(52, 152, 219, 0.1) 0%, transparent 40%);
}

.parallax-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 0 2rem;
}

.hero-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  background: linear-gradient(45deg, #e74c3c, #f39c12, #e74c3c);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  to { background-position: 200% center; }
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  font-style: italic;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.85;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
}

.btn-secondary {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4);
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-item {
  position: absolute;
  font-size: 2rem;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.floating-item.sword { top: 20%; left: 10%; animation-delay: 0s; }
.floating-item.shield { top: 30%; right: 15%; animation-delay: 1s; }
.floating-item.crown { bottom: 30%; left: 20%; animation-delay: 2s; }
.floating-item.skull { top: 60%; right: 10%; animation-delay: 3s; }
.floating-item.fire { bottom: 20%; right: 25%; animation-delay: 4s; }
.floating-item.magic { top: 40%; left: 30%; animation-delay: 5s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  opacity: 0.7;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

.scroll-arrow {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.section-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: bold;
}

.section-header p {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 1200px;
  margin: 0 auto;
}

/* Promotional Banner */
.promo-banner {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
  color: white;
}

.banner-bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  pointer-events: none;
}

.bg-element {
  position: absolute;
  font-size: 3rem;
  animation: float 8s ease-in-out infinite;
}

.bg-element:nth-child(1) { top: 20%; right: 10%; animation-delay: 0s; }
.bg-element:nth-child(2) { bottom: 20%; left: 15%; animation-delay: 2s; }
.bg-element:nth-child(3) { top: 60%; right: 20%; animation-delay: 4s; }

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
}

.banner-icon {
  font-size: 4rem;
  filter: drop-shadow(0 0 15px rgba(0,0,0,0.3));
}

.banner-text h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.banner-text p {
  opacity: 0.95;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.banner-features {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.feature-tag {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.banner-right {
  text-align: center;
}

.banner-btn {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(15px);
  padding: 1.2rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  border: 2px solid rgba(255,255,255,0.3);
  margin-bottom: 1.5rem;
}

.banner-btn:hover {
  background: rgba(255,255,255,0.25);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.support-preview {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.preview-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

.funding-progress {
  margin-top: 2rem;
  text-align: center;
}

.progress-bar {
  background: rgba(255,255,255,0.2);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  background: linear-gradient(90deg, #27ae60, #2ecc71);
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s infinite;
}

.progress-stats {
  font-size: 1.1rem;
  font-weight: 600;
}

.current-amount {
  color: #2ecc71;
  font-size: 1.3rem;
}

.goal-amount {
  opacity: 0.8;
}

/* Lore Section */
.lore-section {
  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
  border-radius: 20px;
  padding: 4rem 2rem;
  margin: 4rem 0;
  color: white;
  position: relative;
  overflow: hidden;
}

.lore-section .section-header h2 {
  color: #ecf0f1;
}

.lore-section .section-header p {
  color: rgba(255,255,255,0.8);
}

.lore-showcase {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.lore-quote {
  margin-bottom: 3rem;
}

.lore-quote blockquote {
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding-left: 2rem;
  border-left: 4px solid #e74c3c;
  opacity: 0.95;
}

.lore-quote cite {
  font-size: 1rem;
  opacity: 0.7;
  font-style: normal;
}

.lore-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

.lore-feature {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.lore-feature:hover {
  background: rgba(255,255,255,0.15);
  transform: translateX(10px);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.lore-feature h4 {
  margin-bottom: 0.5rem;
  color: #ecf0f1;
  font-size: 1.2rem;
}

.lore-feature p {
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.5;
}

.lore-cta-section {
  margin-top: 2rem;
}

.lore-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #f39c12;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 1rem 2rem;
  border: 2px solid #f39c12;
  border-radius: 8px;
  background: rgba(243, 156, 18, 0.1);
}

.lore-cta:hover {
  color: #e67e22;
  border-color: #e67e22;
  background: rgba(230, 126, 34, 0.2);
  gap: 1rem;
}

/* Mystical Orb */
.mystical-orb {
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 auto 2rem;
}

.orb-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, #e74c3c, #c0392b);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 40px rgba(231, 76, 60, 0.8);
  animation: pulse 2s ease-in-out infinite;
}

.orb-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid rgba(231, 76, 60, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 8s linear infinite;
}

.ring-1 {
  width: 120px;
  height: 120px;
  animation-duration: 8s;
}

.ring-2 {
  width: 160px;
  height: 160px;
  animation-duration: 12s;
  animation-direction: reverse;
}

.ring-3 {
  width: 200px;
  height: 200px;
  animation-duration: 16s;
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.orb-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  font-size: 1.2rem;
  animation: orbit 6s linear infinite;
}

.particle:nth-child(1) { animation-delay: 0s; }
.particle:nth-child(2) { animation-delay: 1.5s; }
.particle:nth-child(3) { animation-delay: 3s; }
.particle:nth-child(4) { animation-delay: 4.5s; }

@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
}

.orb-description {
  text-align: center;
}

.orb-description h5 {
  color: #f39c12;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.orb-description p {
  opacity: 0.8;
  font-size: 0.9rem;
}

/* Sport Section */
.sport-section {
  padding: 4rem 0;
  margin: 4rem 0;
}

.sport-showcase {
  max-width: 1000px;
  margin: 0 auto;
}

.sport-intro {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ecf0f1, #bdc3c7);
  border-radius: 16px;
}

.sport-intro h3 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.sport-intro p {
  color: #34495e;
  font-size: 1.1rem;
  line-height: 1.6;
}

.sport-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.sport-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.sport-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.15);
  border-color: #3498db;
}

.card-header {
  background: linear-gradient(135deg, #3498db, #2980b9);
  padding: 2rem;
  text-align: center;
  color: white;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
}

.card-header h3 {
  font-size: 1.5rem;
  margin: 0;
}

.card-content {
  padding: 2rem;
}

.card-content p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-features {
  list-style: none;
  padding: 0;
}

.card-features li {
  padding: 0.5rem 0;
  color: #2c3e50;
  position: relative;
  padding-left: 1.5rem;
}

.card-features li::before {
  content: "⚡";
  position: absolute;
  left: 0;
  color: #f39c12;
}

.gameplay-preview {
  margin: 3rem 0;
  text-align: center;
}

.preview-box {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.preview-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.preview-box h4 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.preview-box p {
  opacity: 0.9;
  line-height: 1.6;
}

.sport-cta {
  text-align: center;
  margin-top: 3rem;
}

.sport-btn {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.sport-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4);
}

/* Contact Banner */
.contact-banner {
  background: linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%);
  border-radius: 20px;
  padding: 4rem 2rem;
  margin: 4rem 0;
  color: white;
  position: relative;
  overflow: hidden;
}

.contact-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  pointer-events: none;
}

.pattern-element {
  position: absolute;
  font-size: 2rem;
  animation: float 10s ease-in-out infinite;
}

.pattern-element:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.pattern-element:nth-child(2) { top: 60%; right: 20%; animation-delay: 2s; }
.pattern-element:nth-child(3) { bottom: 30%; left: 30%; animation-delay: 4s; }
.pattern-element:nth-child(4) { top: 40%; right: 10%; animation-delay: 6s; }
.pattern-element:nth-child(5) { bottom: 60%; right: 30%; animation-delay: 8s; }
.pattern-element:nth-child(6) { top: 70%; left: 50%; animation-delay: 10s; }

.contact-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: start;
  position: relative;
  z-index: 2;
}

.contact-left h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.contact-left p {
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.community-highlights {
  margin-bottom: 3rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.highlight-icon {
  font-size: 1.8rem;
}

.highlight-text strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

.highlight-text small {
  opacity: 0.8;
  font-size: 0.9rem;
}

.contact-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  font-size: 2rem;
}

.stat-number {
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(15px);
  padding: 1.2rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  border: 2px solid rgba(255,255,255,0.2);
}

.social-link:hover {
  background: rgba(255,255,255,0.25);
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.4);
}

.social-icon {
  font-size: 1.5rem;
}

.social-text {
  flex: 1;
}

.social-text strong {
  display: block;
  font-size: 1rem;
}

.social-text small {
  opacity: 0.8;
  font-size: 0.85rem;
}

.social-arrow {
  font-size: 1.2rem;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.social-link:hover .social-arrow {
  opacity: 1;
  transform: translateX(5px);
}

.social-link.discord {
  background: rgba(114, 137, 218, 0.2);
  border-color: rgba(114, 137, 218, 0.4);
}

.social-link.contact {
  background: rgba(52, 152, 219, 0.2);
  border-color: rgba(52, 152, 219, 0.4);
}

.social-link.newsletter {
  background: rgba(230, 126, 34, 0.2);
  border-color: rgba(230, 126, 34, 0.4);
}

/* News Ticker */
.news-ticker {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  border-radius: 16px;
  padding: 1.5rem;
  margin: 3rem 0;
  overflow: hidden;
  position: relative;
  border: 2px solid #3498db;
}

.ticker-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.ticker-icon {
  font-size: 1.5rem;
}

.ticker-title {
  background: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
}

.ticker-live {
  background: #27ae60;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  animation: pulse 2s infinite;
}

.ticker-content {
  overflow: hidden;
  white-space: nowrap;
}

.ticker-items {
  display: inline-flex;
  animation: scroll-ticker 40s linear infinite;
  gap: 4rem;
}

.ticker-item {
  color: white;
  font-size: 1.1rem;
  white-space: nowrap;
  opacity: 0.95;
  font-weight: 500;
}

@keyframes scroll-ticker {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* CTA Footer */
.cta-footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
  border-radius: 20px;
  padding: 4rem 2rem;
  margin: 4rem 0 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 30%, rgba(231, 76, 60, 0.1), transparent 50%),
  radial-gradient(circle at 70% 70%, rgba(52, 152, 219, 0.1), transparent 50%);
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-content h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  background: linear-gradient(45deg, #e74c3c, #f39c12, #3498db);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}

.cta-content p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 1.5rem 3rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-btn.primary {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.cta-btn.secondary {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

.cta-btn:hover {
  transform: translateY(-4px);
}

.cta-btn.primary:hover {
  box-shadow: 0 10px 30px rgba(52, 152, 219, 0.5);
}

.cta-btn.secondary:hover {
  box-shadow: 0 10px 30px rgba(231, 76, 60, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .banner-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .banner-left {
    flex-direction: column;
    gap: 1rem;
  }

  .lore-showcase {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .sport-grid {
    grid-template-columns: 1fr;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .contact-stats {
    justify-content: center;
  }

  .floating-elements {
    display: none;
  }

  .parallax-hero {
    height: 80vh;
  }

  .hero-description {
    font-size: 1rem;
  }

  .mystical-orb {
    width: 200px;
    height: 200px;
  }

  .orb-core {
    width: 60px;
    height: 60px;
  }

  .ring-1 { width: 90px; height: 90px; }
  .ring-2 { width: 130px; height: 130px; }
  .ring-3 { width: 170px; height: 170px; }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .parallax-content {
    padding: 0 1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .card-header {
    padding: 1.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .banner-icon {
    font-size: 2.5rem;
  }

  .contact-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .feature-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .ticker-items {
    gap: 2rem;
  }

  .ticker-item {
    font-size: 1rem;
  }
}

/* Performance optimizations */
@media (prefers-reduced-motion: reduce) {
  .parallax-bg,
  .floating-item,
  .orb-ring,
  .particle,
  .ticker-items {
    animation: none;
  }

  .hero-title {
    background: #e74c3c;
    -webkit-text-fill-color: white;
  }
}

/* Loading animations for better UX */
@media (prefers-reduced-motion: no-preference) {
  .sport-card {
    animation: fadeInUp 0.6s ease-out;
  }

  .sport-card:nth-child(2) {
    animation-delay: 0.2s;
  }

  .sport-card:nth-child(3) {
    animation-delay: 0.4s;
  }

  .lore-feature {
    animation: fadeInLeft 0.6s ease-out;
  }

  .lore-feature:nth-child(2) {
    animation-delay: 0.2s;
  }

  .lore-feature:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>