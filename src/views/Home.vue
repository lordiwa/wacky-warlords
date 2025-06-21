<template>
  <div class="home">
    <!-- 80s Style Hero Section -->
    <section class="retro-hero cyber-grid" ref="heroSection">
      <div class="retro-hero__content">
        <div class="retro-hero__icon">💀</div>
        <h1 class="retro-hero__title glitch" data-text="WACKY WARLORDS">
          WACKY WARLORDS
        </h1>
        <p class="retro-hero__subtitle">WHERE LEGENDS BATTLE FOR A SECOND CHANCE AT LIFE</p>
        <p class="retro-hero__description">
          Death has grown bored of routine. Now, warriors from across time clash in the ultimate tournament
          for the prize of resurrection. Strategy meets madness in this epic real-time battle arena.
        </p>
        <div class="retro-hero__actions">
          <router-link to="/what-is-wacky-warlords" class="retro-btn retro-btn--neon retro-btn--large">
            <span class="btn-icon">🎮</span>
            PLAY NOW
          </router-link>
          <router-link to="/lore" class="retro-btn retro-btn--cyber retro-btn--large">
            <span class="btn-icon">📖</span>
            DISCOVER LORE
          </router-link>
        </div>
      </div>
    </section>

    <div class="retro-container">
      <!-- Support Banner with 80s Style -->
      <section class="support-banner neon-border">
        <div class="banner-bg-grid"></div>
        <div class="banner-content">
          <div class="banner-left">
            <div class="banner-icon text-neon">🚀</div>
            <div class="banner-text">
              <h2 class="retro-title">SUPPORT THE REVOLUTION</h2>
              <p>Help us build the ultimate strategy game and join thousands of supporters shaping the future of Wacky Warlords!</p>
              <div class="banner-features">
                <span class="feature-tag">🎁 EXCLUSIVE PERKS</span>
                <span class="feature-tag">⚡ EARLY ACCESS</span>
                <span class="feature-tag">💬 DIRECT DEV CONTACT</span>
              </div>
            </div>
          </div>
          <div class="banner-right">
            <router-link to="/support-us" class="retro-btn retro-btn--neon">
              <span class="btn-text">SUPPORT DEVELOPMENT</span>
              <span class="btn-arrow">→</span>
            </router-link>
            <div class="support-stats">
              <div class="stat-item">
                <span class="stat-icon text-neon">👥</span>
                <span class="neon-text">2,847 SUPPORTERS</span>
              </div>
              <div class="stat-item">
                <span class="stat-icon text-cyber">💰</span>
                <span class="text-cyber">85% FUNDED</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Neon Progress Bar -->
        <div class="funding-progress">
          <div class="neon-progress-bar">
            <div class="neon-progress-fill" style="width: 85%"></div>
          </div>
          <div class="progress-stats">
            <span class="current-amount text-neon">$12,450</span>
            <span class="goal-amount text-cyber">/ $15,000 GOAL</span>
          </div>
        </div>
      </section>

      <!-- Lore Section with 80s Style -->
      <section class="cyber-section lore-section">
        <div class="section-header">
          <div class="section-icon text-neon">🕯️</div>
          <h2 class="cyber-heading">KNOW THE LORE</h2>
          <p class="text-cyber">Discover the dark tale behind the Ancient Game of Death</p>
        </div>

        <div class="lore-showcase">
          <div class="lore-content">
            <div class="retro-card retro-card--neon lore-quote">
              <blockquote class="neon-text">
                "They say even Death tires of routine. In these rare moments, Death summons forth a spectacle:
                The Ancient Game of Death."
              </blockquote>
              <cite class="text-cyber">— From the Chronicles of the Realm</cite>
            </div>

            <div class="lore-features retro-grid">
              <div class="retro-card lore-feature">
                <div class="feature-icon text-neon">🌫️</div>
                <h4 class="cyber-heading">THE REALM OF CALM</h4>
                <p>A world suspended between life and oblivion where warriors await their fate</p>
              </div>
              <div class="retro-card lore-feature">
                <div class="feature-icon text-cyber">⚔️</div>
                <h4 class="cyber-heading">EPIC TOURNAMENT</h4>
                <p>Warriors compete in brutal contests for a second chance at life</p>
              </div>
              <div class="retro-card lore-feature">
                <div class="feature-icon text-pink">🕰️</div>
                <h4 class="cyber-heading">TIMELESS WARRIORS</h4>
                <p>Champions pulled from every era of history to battle</p>
              </div>
            </div>

            <div class="lore-cta-section">
              <router-link to="/lore" class="retro-btn retro-btn--cyber">
                <span>EXPLORE THE FULL STORY</span>
                <span class="cta-arrow">→</span>
              </router-link>
            </div>
          </div>

          <div class="lore-visual">
            <div class="cyber-orb">
              <div class="orb-core"></div>
              <div class="orb-ring ring-1"></div>
              <div class="orb-ring ring-2"></div>
              <div class="orb-ring ring-3"></div>
              <div class="orb-particles">
                <span class="particle text-neon">✨</span>
                <span class="particle text-pink">💀</span>
                <span class="particle text-cyber">⚔️</span>
                <span class="particle text-neon">🔮</span>
              </div>
            </div>
            <div class="orb-description">
              <h5 class="cyber-heading">THE NEXUS OF SOULS</h5>
              <p class="text-cyber">Where all warriors' destinies converge</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sport Section with 80s Style -->
      <section class="cyber-section sport-section">
        <div class="section-header">
          <div class="section-icon text-cyber">🎯</div>
          <h2 class="retro-title">UNDERSTAND THE SPORT</h2>
          <p class="text-cyber">Master the art of strategic warfare in real-time battles</p>
        </div>

        <div class="sport-showcase">
          <div class="retro-card retro-card--cyber sport-intro">
            <h3 class="cyber-heading">REAL-TIME STRATEGY MEETS TACTICAL DEPTH</h3>
            <p>
              Wacky Warlords combines lightning-fast decision making with deep strategic planning.
              Build your army, deploy your forces, and outmaneuver opponents in intense tug-of-war battles.
            </p>
          </div>

          <div class="retro-grid retro-grid--auto-fit sport-grid">
            <div class="retro-card sport-card">
              <div class="card-header">
                <div class="card-icon text-neon">🎯</div>
                <h3 class="cyber-heading">REAL-TIME STRATEGY</h3>
              </div>
              <div class="card-content">
                <p>Deploy units, control lanes, and destroy enemy strongholds in fast-paced tactical combat.</p>
                <ul class="card-features">
                  <li class="text-cyber">INSTANT DECISION MAKING</li>
                  <li class="text-cyber">DYNAMIC BATTLEFIELD CONTROL</li>
                  <li class="text-cyber">MOMENTUM-BASED COMBAT</li>
                </ul>
              </div>
            </div>

            <div class="retro-card sport-card">
              <div class="card-header">
                <div class="card-icon text-pink">🧙</div>
                <h3 class="cyber-heading">LEGENDARY HEROES</h3>
              </div>
              <div class="card-content">
                <p>Command powerful Warlords with unique abilities and build synergistic armies.</p>
                <ul class="card-features">
                  <li class="text-cyber">DIVERSE HERO ROSTER</li>
                  <li class="text-cyber">RACIAL SYNERGIES</li>
                  <li class="text-cyber">CUSTOMIZABLE LOADOUTS</li>
                </ul>
              </div>
            </div>

            <div class="retro-card sport-card">
              <div class="card-header">
                <div class="card-icon text-neon">🏆</div>
                <h3 class="cyber-heading">COMPETITIVE LEAGUES</h3>
              </div>
              <div class="card-content">
                <p>Climb ranked ladders, join tournaments, and prove your tactical supremacy.</p>
                <ul class="card-features">
                  <li class="text-cyber">SEASONAL COMPETITIONS</li>
                  <li class="text-cyber">GLOBAL LEADERBOARDS</li>
                  <li class="text-cyber">EXCLUSIVE REWARDS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="sport-cta">
          <router-link to="/what-is-wacky-warlords" class="retro-btn retro-btn--neon retro-btn--large">
            <span>LEARN GAME MECHANICS</span>
            <span class="btn-icon">🎮</span>
          </router-link>
        </div>
      </section>

      <!-- Contact Banner with 80s Style -->
      <section class="contact-banner cyber-section">
        <div class="retro-card retro-card--cyber contact-content">
          <div class="contact-left">
            <h2 class="retro-title">JOIN OUR GROWING COMMUNITY</h2>
            <p>Connect with fellow warlords, share strategies, and get direct access to our development team.
              Be part of shaping the future of Wacky Warlords!</p>

            <div class="community-highlights retro-grid">
              <div class="highlight-item">
                <span class="highlight-icon text-neon">💬</span>
                <div class="highlight-text">
                  <strong class="cyber-heading">ACTIVE DISCORD</strong>
                  <small class="text-cyber">Real-time chat with devs</small>
                </div>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon text-pink">📢</span>
                <div class="highlight-text">
                  <strong class="cyber-heading">WEEKLY UPDATES</strong>
                  <small class="text-cyber">Behind-the-scenes content</small>
                </div>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon text-neon">🎯</span>
                <div class="highlight-text">
                  <strong class="cyber-heading">BETA ACCESS</strong>
                  <small class="text-cyber">Test new features first</small>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-right">
            <div class="contact-actions">
              <a href="#" class="retro-btn retro-btn--cyber social-link discord">
                <span class="social-icon">💬</span>
                <span class="btn-text">JOIN DISCORD</span>
                <span class="social-arrow">→</span>
              </a>
              <router-link to="/contact-about" class="retro-btn retro-btn--neon social-link contact">
                <span class="social-icon">📧</span>
                <span class="btn-text">CONTACT TEAM</span>
                <span class="social-arrow">→</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- News Ticker with 80s Style -->
      <section class="cyber-news-ticker">
        <div class="ticker-header">
          <span class="ticker-icon text-neon">📢</span>
          <span class="ticker-title neon-text">LATEST UPDATES</span>
          <span class="ticker-live bg-neon">LIVE</span>
        </div>
        <div class="ticker-content">
          <div class="ticker-items">
            <span class="ticker-item">🎮 NEW HERO "PHARAOH OF PLAGUES" COMING JANUARY 20TH</span>
            <span class="ticker-item">🏆 RANKED SEASON 1 STARTS FEBRUARY 17TH - REGISTRATION OPEN</span>
            <span class="ticker-item">🎭 MASQUERADE COURT RACE REVEALED FOR MARCH RELEASE</span>
            <span class="ticker-item">💰 SUPPORT GOAL 85% COMPLETE - HELP US REACH 100%!</span>
            <span class="ticker-item">🔥 WEEKEND TOURNAMENT THIS SATURDAY - PRIZE POOL $500</span>
            <span class="ticker-item">⚡ SERVER MAINTENANCE COMPLETE - BETTER PERFORMANCE</span>
          </div>
        </div>
      </section>

      <!-- Call to Action with 80s Style -->
      <section class="retro-cta-footer cyber-section">
        <div class="retro-card retro-card--neon cta-content">
          <h2 class="retro-title glitch" data-text="READY TO ENTER THE ARENA?">
            READY TO ENTER THE ARENA?
          </h2>
          <p class="text-cyber">Join thousands of players in the ultimate test of strategy and wit</p>
          <div class="cta-buttons">
            <router-link to="/what-is-wacky-warlords" class="retro-btn retro-btn--cyber retro-btn--large">
              <span class="btn-icon">⚔️</span>
              <span>START PLAYING</span>
            </router-link>
            <router-link to="/support-us" class="retro-btn retro-btn--neon retro-btn--large">
              <span class="btn-icon">❤️</span>
              <span>SUPPORT US</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroSection = ref(null)

// Add some 80s visual effects
onMounted(() => {
  // Add scan line effect
  const scanLine = document.createElement('div')
  scanLine.className = 'scan-line'
  scanLine.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--electric-cyan), transparent);
    z-index: 9999;
    pointer-events: none;
    animation: scan 3s linear infinite;
  `

  document.body.appendChild(scanLine)

  // Clean up on unmount
  onUnmounted(() => {
    if (document.body.contains(scanLine)) {
      document.body.removeChild(scanLine)
    }
  })
})

// Add scan line animation
const style = document.createElement('style')
style.textContent = `
  @keyframes scan {
    0% { top: 0; opacity: 1; }
    100% { top: 100vh; opacity: 0; }
  }
`
document.head.appendChild(style)
</script>

<style scoped>
.home {
  background: var(--void-black);
  color: var(--electric-cyan);
}

/* Support Banner Styling */
.support-banner {
  background: linear-gradient(135deg, var(--void-black) 0%, var(--dark-purple) 100%);
  padding: 3rem 2rem;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
}

.banner-bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
      linear-gradient(var(--neon-pink) 1px, transparent 1px),
      linear-gradient(90deg, var(--neon-pink) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.1;
  animation: grid-move 15s linear infinite;
}

.banner-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.banner-icon {
  font-size: 4rem;
  filter: drop-shadow(0 0 15px currentColor);
  animation: icon-pulse 3s ease-in-out infinite;
}

.banner-text h2 {
  margin-bottom: 1rem;
}

.banner-text p {
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--electric-cyan);
}

.banner-features {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.feature-tag {
  background: rgba(255, 0, 255, 0.2);
  border: 2px solid var(--neon-pink);
  padding: 0.5rem 1rem;
  border-radius: var(--retro-radius);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--neon-pink);
  text-shadow: 0 0 10px var(--neon-pink);
  backdrop-filter: blur(10px);
}

.banner-right {
  text-align: center;
}

.support-stats {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-icon {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 5px currentColor);
}

/* Neon Progress Bar */
.funding-progress {
  margin-top: 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
}

.neon-progress-bar {
  background: var(--void-black);
  border: 2px solid var(--electric-cyan);
  height: 12px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
}

.neon-progress-fill {
  background: var(--neon-gradient);
  height: 100%;
  border-radius: 4px;
  position: relative;
  box-shadow: var(--neon-glow);
  animation: progress-glow 2s ease-in-out infinite alternate;
}

@keyframes progress-glow {
  from { box-shadow: 0 0 10px var(--neon-green); }
  to { box-shadow: 0 0 20px var(--neon-green), 0 0 30px var(--electric-cyan); }
}

.progress-stats {
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Lore Section */
.lore-section {
  margin: 4rem 0;
  padding: 4rem 0;
}

.lore-showcase {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.lore-quote {
  text-align: center;
  margin-bottom: 3rem;
}

.lore-quote blockquote {
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px currentColor;
}

.lore-quote cite {
  font-size: 1rem;
  opacity: 0.8;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.lore-features {
  gap: 1.5rem;
  margin: 2rem 0;
}

.lore-feature {
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;
}

.lore-feature:hover {
  transform: translateY(-5px);
  box-shadow: var(--neon-glow);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px currentColor);
}

.lore-feature h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.lore-feature p {
  opacity: 0.9;
  line-height: 1.5;
}

.lore-cta-section {
  margin-top: 2rem;
  text-align: center;
}

/* Cyber Orb */
.cyber-orb {
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
  background: radial-gradient(circle, var(--neon-pink), var(--electric-cyan));
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: var(--neon-glow);
  animation: orb-pulse 3s ease-in-out infinite;
}

@keyframes orb-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 20px var(--neon-pink);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 40px var(--electric-cyan), 0 0 60px var(--neon-pink);
  }
}

.orb-ring {
position: absolute;
top: 50%;
left: 50%;
border: 2px solid;
border-radius: 50%;
transform: translate(-50%, -50%);
animation: rotate 10s linear infinite;
}

.ring-1 {
width: 120px;
height: 120px;
border-color: var(--electric-cyan);
animation-duration: 8s;
}

.ring-2 {
width: 160px;
height: 160px;
border-color: var(--neon-green);
animation-duration: 12s;
animation-direction: reverse;
}

.ring-3 {
width: 200px;
height: 200px;
border-color: var(--neon-pink);
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
animation: orbit 8s linear infinite;
filter: drop-shadow(0 0 10px currentColor);
}

.particle:nth-child(1) { animation-delay: 0s; }
.particle:nth-child(2) { animation-delay: 2s; }
.particle:nth-child(3) { animation-delay: 4s; }
.particle:nth-child(4) { animation-delay: 6s; }

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
margin-bottom: 0.5rem;
font-size: 1.1rem;
}

.orb-description p {
opacity: 0.8;
font-size: 0.9rem;
}

/* Sport Section */
.sport-section {
margin: 4rem 0;
padding: 4rem 0;
}

.sport-intro {
text-align: center;
margin-bottom: 3rem;
padding: 2rem;
}

.sport-intro h3 {
margin-bottom: 1rem;
font-size: 1.8rem;
}

.sport-intro p {
font-size: 1.1rem;
line-height: 1.6;
opacity: 0.9;
}

.sport-grid {
margin: 3rem 0;
}

.sport-card {
transition: all 0.3s ease;
}

.sport-card:hover {
transform: translateY(-10px);
box-shadow: var(--neon-glow);
}

.card-header {
text-align: center;
padding: 2rem;
background: rgba(0, 255, 255, 0.1);
border-bottom: 2px solid var(--electric-cyan);
}

.card-icon {
font-size: 3rem;
margin-bottom: 1rem;
filter: drop-shadow(0 0 10px currentColor);
}

.card-header h3 {
font-size: 1.5rem;
margin: 0;
}

.card-content {
padding: 2rem;
}

.card-content p {
line-height: 1.6;
margin-bottom: 1.5rem;
opacity: 0.9;
}

.card-features {
list-style: none;
padding: 0;
}

.card-features li {
padding: 0.5rem 0;
position: relative;
padding-left: 1.5rem;
font-weight: 600;
font-size: 0.9rem;
letter-spacing: 0.05em;
}

.card-features li::before {
content: "▶";
position: absolute;
left: 0;
color: var(--neon-green);
font-size: 0.8rem;
text-shadow: 0 0 5px currentColor;
}

.sport-cta {
text-align: center;
margin-top: 3rem;
}

/* Contact Banner */
.contact-banner {
margin: 4rem 0;
padding: 4rem 0;
}

.contact-content {
padding: 3rem;
display: grid;
grid-template-columns: 1.5fr 1fr;
gap: 3rem;
align-items: start;
}

.contact-left h2 {
margin-bottom: 1.5rem;
}

.contact-left p {
opacity: 0.9;
line-height: 1.6;
margin-bottom: 2.5rem;
font-size: 1.1rem;
}

.community-highlights {
margin-bottom: 2rem;
gap: 1rem;
}

.highlight-item {
display: flex;
align-items: center;
gap: 1rem;
padding: 1rem;
background: rgba(0, 255, 255, 0.1);
border: 1px solid var(--electric-cyan);
border-radius: var(--retro-radius);
transition: all 0.3s ease;
}

.highlight-item:hover {
background: rgba(0, 255, 255, 0.2);
transform: translateX(5px);
}

.highlight-icon {
font-size: 1.8rem;
filter: drop-shadow(0 0 10px currentColor);
}

.highlight-text strong {
display: block;
font-size: 1rem;
margin-bottom: 0.2rem;
}

.highlight-text small {
opacity: 0.8;
font-size: 0.85rem;
}

.contact-actions {
display: flex;
flex-direction: column;
gap: 1rem;
}

.social-link {
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 1.5rem;
text-decoration: none;
}

.social-icon {
font-size: 1.2rem;
}

.social-arrow {
font-size: 1.2rem;
transition: transform 0.3s ease;
}

.social-link:hover .social-arrow {
transform: translateX(5px);
}

/* News Ticker */
.cyber-news-ticker {
background: linear-gradient(135deg, var(--void-black) 0%, var(--dark-purple) 100%);
border: 3px solid var(--electric-cyan);
border-radius: var(--retro-radius);
padding: 1.5rem;
margin: 3rem 0;
overflow: hidden;
position: relative;
}

.cyber-news-ticker::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background:
repeating-linear-gradient(
0deg,
transparent,
transparent 3px,
var(--neon-pink) 5px,
var(--neon-pink) 7px
);
opacity: 0.1;
pointer-events: none;
}

.ticker-header {
display: flex;
align-items: center;
gap: 1rem;
margin-bottom: 1rem;
position: relative;
z-index: 2;
}

.ticker-icon {
font-size: 1.5rem;
filter: drop-shadow(0 0 10px currentColor);
}

.ticker-title {
font-family: 'Orbitron', sans-serif;
font-weight: 700;
font-size: 1.2rem;
text-transform: uppercase;
letter-spacing: 0.1em;
}

.ticker-live {
padding: 0.3rem 0.8rem;
border-radius: 4px;
font-size: 0.8rem;
font-weight: 700;
color: var(--void-black);
animation: live-pulse 2s infinite;
}

@keyframes live-pulse {
0%, 50% { opacity: 1; }
25%, 75% { opacity: 0.7; }
}

.ticker-content {
overflow: hidden;
white-space: nowrap;
position: relative;
z-index: 2;
}

.ticker-items {
display: inline-flex;
animation: ticker-scroll 60s linear infinite;
gap: 4rem;
}

.ticker-item {
color: var(--electric-cyan);
font-size: 1rem;
white-space: nowrap;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
}

@keyframes ticker-scroll {
0% { transform: translateX(100%); }
100% { transform: translateX(-100%); }
}

/* CTA Footer */
.retro-cta-footer {
margin: 4rem 0 2rem;
padding: 4rem 0;
}

.cta-content {
text-align: center;
padding: 4rem 2rem;
}

.cta-content h2 {
margin-bottom: 1rem;
font-size: clamp(2rem, 5vw, 3rem);
}

.cta-content p {
font-size: 1.3rem;
margin-bottom: 3rem;
opacity: 0.9;
max-width: 600px;
margin-left: auto;
margin-right: auto;
}

.cta-buttons {
display: flex;
gap: 2rem;
justify-content: center;
flex-wrap: wrap;
}

/* Section Headers */
.section-header {
text-align: center;
margin-bottom: 3rem;
}

.section-icon {
font-size: 3rem;
margin-bottom: 1rem;
filter: drop-shadow(0 0 15px currentColor);
animation: icon-pulse 3s ease-in-out infinite;
}

.section-header h2 {
font-size: clamp(2rem, 5vw, 3rem);
margin-bottom: 1rem;
text-transform: uppercase;
letter-spacing: 0.1em;
}

.section-header p {
font-size: 1.2rem;
opacity: 0.9;
max-width: 600px;
margin: 0 auto;
text-transform: uppercase;
letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 1200px) {
.lore-showcase,
.banner-content,
.contact-content {
grid-template-columns: 1fr;
gap: 3rem;
}

.contact-content {
text-align: center;
}

.contact-actions {
max-width: 400px;
margin: 0 auto;
}
}

@media (max-width: 768px) {
.banner-left {
flex-direction: column;
text-align: center;
gap: 1rem;
}

.banner-features {
justify-content: center;
gap: 0.5rem;
}

.feature-tag {
font-size: 0.8rem;
padding: 0.4rem 0.8rem;
}

.community-highlights {
grid-template-columns: 1fr;
}

.contact-actions {
gap: 0.5rem;
}

.cyber-orb {
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

.sport-grid {
grid-template-columns: 1fr;
}

.ticker-items {
gap: 2rem;
}

.ticker-item {
font-size: 0.9rem;
}

.retro-hero__actions {
flex-direction: column;
align-items: center;
gap: 1rem;
}

.section-header {
margin-bottom: 2rem;
}

.lore-section,
.sport-section,
.contact-banner,
.retro-cta-footer {
margin: 2rem 0;
padding: 2rem 0;
}
}

@media (max-width: 480px) {
.banner-icon {
font-size: 2.5rem;
}

.support-stats {
gap: 0.5rem;
}

.highlight-item {
flex-direction: column;
text-align: center;
gap: 0.5rem;
}

.card-header,
.card-content {
padding: 1.5rem;
}

.cta-buttons {
flex-direction: column;
align-items: center;
}

.cyber-orb {
width: 150px;
height: 150px;
}

.orb-core {
width: 40px;
height: 40px;
}

.ring-1 { width: 70px; height: 70px; }
.ring-2 { width: 100px; height: 100px; }
.ring-3 { width: 130px; height: 130px; }

.support-banner,
.lore-quote,
.sport-intro,
.contact-content,
.cta-content {
padding: 2rem 1rem;
}

.retro-container {
padding: 0 0.5rem;
}

.ticker-header {
flex-wrap: wrap;
justify-content: center;
gap: 0.5rem;
}

.ticker-title {
font-size: 1rem;
}

.retro-hero__title {
font-size: clamp(2rem, 8vw, 3rem);
}

.retro-hero__subtitle {
font-size: clamp(1rem, 4vw, 1.5rem);
}
}

/* Performance optimizations for 80s effects */
@media (prefers-reduced-motion: reduce) {
.glitch,
.icon-pulse,
.orb-pulse,
.rotate,
.orbit,
.grid-move,
.progress-glow,
.live-pulse,
.ticker-scroll {
animation: none !important;
}

.retro-hero__title {
color: var(--electric-cyan);
}

.banner-bg-grid {
animation: none;
}

.scan-line {
display: none;
}
}

/* High contrast adjustments */
@media (prefers-contrast: high) {
.retro-card,
.neon-border,
.cyber-news-ticker {
border-width: 4px;
}

.ticker-header,
.banner-features,
.community-highlights {
filter: contrast(1.5);
}

.feature-tag,
.stat-item {
border-width: 3px;
}
}

/* Additional animations and effects */
@keyframes icon-pulse {
0%, 100% {
transform: scale(1);
filter: drop-shadow(0 0 15px currentColor) hue-rotate(0deg);
}
50% {
transform: scale(1.1);
filter: drop-shadow(0 0 25px currentColor) hue-rotate(60deg);
}
}

@keyframes grid-move {
0% { transform: translate(0, 0); }
100% { transform: translate(30px, 30px); }
}

/* Ensure proper stacking and visibility */
.retro-container {
position: relative;
z-index: 1;
}

.cyber-section {
position: relative;
z-index: 1;
}

.neon-border {
position: relative;
z-index: 2;
}

/* Add subtle glow to interactive elements */
.retro-btn:hover,
.retro-card:hover,
.highlight-item:hover {
filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.3));
}

/* Ensure text remains readable on all backgrounds */
.banner-text p,
.contact-left p,
.card-content p,
.lore-feature p {
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

/* Loading states for better UX */
.retro-card {
animation: fadeInUp 0.6s ease-out;
}

.retro-card:nth-child(2) {
animation-delay: 0.2s;
}

.retro-card:nth-child(3) {
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

/* Improved focus states */
.retro-btn:focus,
.social-link:focus {
outline: 3px solid var(--neon-green);
outline-offset: 3px;
box-shadow: 0 0 20px var(--neon-green);
}

/* Print styles */
@media print {
.cyber-news-ticker,
.retro-hero,
.banner-bg-grid,
.cyber-orb,
.scan-line {
display: none !important;
}

.retro-card,
.support-banner,
.contact-content {
  border: 2px solid black !important;
  background: white !important;
  color: black !important;
  }
}
</style>