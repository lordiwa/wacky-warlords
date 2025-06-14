<template>
  <div class="what-is-page">
    <!-- Hero Section - Full Width -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-icon">🏰</div>
        <h1 class="hero-title">What Is Wacky Warlords?</h1>
        <p class="hero-subtitle">⚔️ A Battle Across Time and Death</p>
        <p class="hero-description">
          Wacky Warlords is a fast-paced, real-time strategy game where the world's most legendary warriors—revived by Death itself—clash in chaotic skirmishes for a chance to return to life.
        </p>
        <div class="hero-tags">
          <span class="tag">Strategy</span>
          <span class="tag">Madness</span>
          <span class="tag">War with a twist</span>
        </div>
        <div class="hero-actions">
          <router-link to="/lore" class="btn btn-primary">
            <span class="btn-icon">🎮</span>
            Play Now
          </router-link>
          <router-link to="/lore" class="btn btn-secondary">
            <span class="btn-icon">📖</span>
            Discover Lore
          </router-link>
        </div>
      </div>
    </section>

    <!-- Game Loop Section - Full Width -->
    <section class="section game-loop-section">
      <div class="container">
        <div class="section-header">
          <div class="section-icon">🎮</div>
          <h2>The Game Loop: Strategy Meets Speed</h2>
          <p class="section-description">
            In Wacky Warlords, players command squads of units chosen before battle. Matches play out in real time,
            with tug-of-war mechanics that turn every second into a high-stakes decision.
          </p>
        </div>

        <div class="game-flow">
          <div class="flow-step">
            <div class="step-number">1</div>
            <h3>Deploy your army from your base</h3>
            <p>Choose your formation and timing carefully</p>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">
            <div class="step-number">2</div>
            <h3>Push your forces across narrow lanes</h3>
            <p>Control the battlefield momentum</p>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">
            <div class="step-number">3</div>
            <h3>Shatter your opponent's stronghold</h3>
            <p>Before they crush yours</p>
          </div>
        </div>

        <p class="flow-conclusion">
          The battlefield is always in motion, and the line between victory and defeat shifts with every decision.
        </p>
      </div>
    </section>

    <!-- Strategy Section - Full Width -->
    <section class="section strategy-section">
      <div class="container">
        <div class="content-grid">
          <div class="content-main">
            <div class="section-icon">🧠</div>
            <h2>Build, Adapt, Outsmart</h2>
            <p class="large-text">
              Forget waiting around. Wacky Warlords is built for instant tactical gameplay.
              Before each match, players build a customized team from an expanding roster of heroes, races, and units.
              Once the game begins, it's all about timing, placement, and momentum.
            </p>

            <div class="strategy-points">
              <div class="point-item">
                <div class="point-icon">⚡</div>
                <h4>Will you rush early with fast skirmishers?</h4>
              </div>
              <div class="point-item">
                <div class="point-icon">🛡️</div>
                <h4>Hold the line with tanks and traps?</h4>
              </div>
              <div class="point-item">
                <div class="point-icon">🎯</div>
                <h4>Save resources for a surprise final push?</h4>
              </div>
            </div>

            <p class="highlight-text">
              Outthink your rival and bend the battlefield to your will.
            </p>
          </div>

          <div class="content-media">
            <div class="media-card">
              <img src="https://place-hold.it/500x350/1a1a1a/4CAF50/png?text=Tactical+Battle" alt="Tactical Battle Screenshot" />
              <div class="media-overlay">
                <h4>Tactical Battle Screenshot</h4>
                <p>Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid - Full Width -->
    <section class="section features-section">
      <div class="container">
        <div class="section-header">
          <div class="section-icon">🧙</div>
          <h2>Warlords, Races, and Synergies</h2>
          <p class="section-description">
            Each unit belongs to a Race, and every hero is a Warlord with unique abilities.
            Synergies between units, buffs from booster cards, and map-specific advantages create endless tactical possibilities.
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="card-media">
              <img src="https://place-hold.it/300x200/1a1a1a/D2691E/png?text=Warlords" alt="Legendary Warlords" />
            </div>
            <div class="card-content">
              <div class="card-icon">👑</div>
              <h3>Legendary Warlords</h3>
              <p>Each with unique abilities and command styles that define your strategic approach</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="card-media">
              <img src="https://place-hold.it/300x200/1a1a1a/4CAF50/png?text=Races" alt="Ancient Races" />
            </div>
            <div class="card-content">
              <div class="card-icon">🏺</div>
              <h3>Ancient Races</h3>
              <p>From Vikings to future mechs - each with special synergies and playstyles</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="card-media">
              <img src="https://place-hold.it/300x200/1a1a1a/D2691E/png?text=Cards" alt="Booster Cards" />
            </div>
            <div class="card-content">
              <div class="card-icon">🃏</div>
              <h3>Booster Cards</h3>
              <p>Enhance and customize your army's capabilities with powerful modifiers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PvP Section - Full Width -->
    <section class="section pvp-section">
      <div class="container">
        <div class="section-header">
          <div class="section-icon">🏆</div>
          <h2>PvP Mayhem & Competitive Leagues</h2>
        </div>

        <div class="pvp-grid">
          <div class="pvp-card">
            <div class="pvp-icon">⚔️</div>
            <h3>1v1 Ranked Duels</h3>
            <p>Climb the ladder and prove your tactical supremacy in intense head-to-head battles</p>
          </div>
          <div class="pvp-card">
            <div class="pvp-icon">🏆</div>
            <h3>Seasonal Tournaments</h3>
            <p>Compete for glory and exclusive rewards in limited-time competitive events</p>
          </div>
          <div class="pvp-card">
            <div class="pvp-icon">⚡</div>
            <h3>Faction-Based Events</h3>
            <p>Join forces with your chosen race in massive community-wide battles</p>
          </div>
          <div class="pvp-card">
            <div class="pvp-icon">🎮</div>
            <h3>Custom Game Modes</h3>
            <p>Experiment with community-created battles and unique rule sets</p>
          </div>
        </div>

        <div class="pvp-highlight">
          <p>
            Whether you're here to crush the ladder, collect rare units, or just cause chaos with friends,
            Wacky Warlords offers something for every kind of strategist.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Wacky Section - Full Width -->
    <section class="section wacky-section">
      <div class="container">
        <div class="section-header">
          <div class="section-icon">😈</div>
          <h2>Why Wacky?</h2>
        </div>

        <div class="wacky-content">
          <p class="large-text">
            Sure, it's a game about Death. But don't expect grim silence.
          </p>
          <p>
            Wacky Warlords is packed with over-the-top characters, unpredictable battlefield twists,
            and tongue-in-cheek humor. It's a celebration of absurdity wrapped in tactical depth—where
            a Viking berserker might team up with a futuristic mech monk to destroy a pyramid fortress
            guarded by ghostly jesters.
          </p>

          <div class="example-battle">
            <div class="battle-combo">
              <span class="combo-unit">🛡️ Viking Berserker</span>
              <span class="combo-plus">+</span>
              <span class="combo-unit">🤖 Mech Monk</span>
              <span class="combo-vs">vs</span>
              <span class="combo-target">🏺 Pyramid Fortress</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Evolution Section - Full Width -->
    <section class="section evolution-section">
      <div class="container">
        <div class="section-header">
          <div class="section-icon">🧪</div>
          <h2>Always Evolving</h2>
          <p class="section-description">
            With frequent updates, new races, fresh Warlords, seasonal booster packs, and community tournaments,
            Wacky Warlords is more than a game—it's an ever-expanding battlefield where strategy meets style.
          </p>
        </div>

        <div class="evolution-grid">
          <div class="evolution-item">
            <div class="evolution-icon">🆕</div>
            <h4>Regular Content Updates</h4>
          </div>
          <div class="evolution-item">
            <div class="evolution-icon">🏁</div>
            <h4>New Races & Warlords</h4>
          </div>
          <div class="evolution-item">
            <div class="evolution-icon">📦</div>
            <h4>Seasonal Booster Packs</h4>
          </div>
          <div class="evolution-item">
            <div class="evolution-icon">🎪</div>
            <h4>Community Tournaments</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action - Full Width -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Build your army. Break the balance. Conquer the Calm.</h2>
          <div class="cta-buttons">
            <router-link to="/lore" class="btn btn-primary">
              <span>Explore the Lore</span>
              <div class="btn-icon">📖</div>
            </router-link>
            <router-link to="/support-us" class="btn btn-secondary">
              <span>Support Development</span>
              <div class="btn-icon">❤️</div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// What is Wacky Warlords page logic
</script>

<style scoped>
:root {
  --death-black: #0a0a0a;
  --dark-stone: #1a1a1a;
  --ancient-brown: #2d1f17;
  --mystic-green: #4CAF50;
  --death-green: #2e7d32;
  --bone-white: #f5f5dc;
  --orange-glow: #D2691E;
  --shadow-gray: #2c2c2c;
  --card-radius: 24px;
  --section-spacing: 4rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.what-is-page {
  width: 100%;
  margin: 0;
  padding: 0;
  background: var(--death-black);
  color: var(--bone-white);
  min-height: 100vh;
}

.section {
  width: 100%;
  padding: var(--section-spacing) 0;
  margin: 0;
}

/* Hero Section - Full Width like Home */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--death-black) 0%, var(--ancient-brown) 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 30%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
  radial-gradient(circle at 70% 70%, rgba(210, 105, 30, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 20px var(--mystic-green));
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--orange-glow);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 4vw, 2rem);
  margin-bottom: 2rem;
  font-weight: 600;
  color: var(--mystic-green);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-tags {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.tag {
  background: rgba(76, 175, 80, 0.15);
  border: 2px solid var(--mystic-green);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  color: var(--bone-white);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(76, 175, 80, 0.25);
  transform: translateY(-2px);
}

.hero-actions {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}



.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px var(--mystic-green));
}

.section-header h2 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--orange-glow);
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.section-description {
  font-size: 1.2rem;
  color: var(--bone-white);
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
}

.large-text {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--bone-white);
}

.highlight-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--orange-glow);
  margin-top: 2rem;
}

/* Game Loop Section - Background */
.game-loop-section {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  border-top: 1px solid var(--shadow-gray);
  border-bottom: 1px solid var(--shadow-gray);
}

.game-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 4rem 0;
  flex-wrap: wrap;
}

.flow-step {
  background: rgba(76, 175, 80, 0.1);
  border: 2px solid var(--mystic-green);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  max-width: 280px;
  position: relative;
  transition: all 0.3s ease;
}

.flow-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.2);
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--mystic-green);
  color: var(--death-black);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
}

.flow-step h3 {
  color: var(--bone-white);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.flow-step p {
  color: var(--bone-white);
  opacity: 0.8;
  font-size: 1rem;
  line-height: 1.5;
}

.flow-arrow {
  font-size: 2.5rem;
  color: var(--orange-glow);
  font-weight: bold;
  text-shadow: 0 0 10px var(--orange-glow);
}

.flow-conclusion {
  text-align: center;
  font-style: italic;
  color: var(--bone-white);
  font-size: 1.2rem;
  margin-top: 3rem;
  opacity: 0.9;
}

/* Strategy Section */
.strategy-section {
  background: var(--death-black);
}

.content-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.content-main {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  padding: 3rem;
  border-radius: var(--card-radius);
  border: 1px solid var(--shadow-gray);
}

.strategy-points {
  margin: 3rem 0;
}

.point-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: rgba(76, 175, 80, 0.1);
  border-left: 4px solid var(--mystic-green);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.point-item:hover {
  transform: translateX(10px);
  background: rgba(76, 175, 80, 0.15);
}

.point-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 5px var(--orange-glow));
}

.point-item h4 {
  color: var(--bone-white);
  font-size: 1.1rem;
  margin: 0;
}

.content-media {
  display: flex;
  justify-content: center;
}

.media-card {
  position: relative;
  border-radius: var(--card-radius);
  overflow: hidden;
  border: 2px solid var(--mystic-green);
  transition: all 0.3s ease;
}

.media-card:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.3);
}

.media-card img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.media-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
}

.media-overlay h4 {
  color: var(--orange-glow);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

/* Features Section */
.features-section {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  border-top: 1px solid var(--shadow-gray);
  border-bottom: 1px solid var(--shadow-gray);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--mystic-green);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.2);
}

.card-media img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 2rem;
  text-align: center;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 5px var(--orange-glow));
}

.card-content h3 {
  color: var(--orange-glow);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.card-content p {
  color: var(--bone-white);
  line-height: 1.6;
  opacity: 0.9;
}

/* PvP Section */
.pvp-section {
  background: var(--death-black);
}

.pvp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.pvp-card {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  border: 2px solid var(--mystic-green);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.pvp-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.3);
  border-color: var(--orange-glow);
}

.pvp-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px var(--mystic-green));
}

.pvp-card h3 {
  color: var(--orange-glow);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.pvp-card p {
  color: var(--bone-white);
  line-height: 1.6;
  opacity: 0.9;
}

.pvp-highlight {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 16px;
  border: 1px solid var(--mystic-green);
}

.pvp-highlight p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--bone-white);
  margin: 0;
}

/* Wacky Section */
.wacky-section {
  background: linear-gradient(135deg, var(--death-black) 0%, var(--ancient-brown) 100%);
  border-top: 2px solid var(--orange-glow);
  border-bottom: 2px solid var(--orange-glow);
}

.wacky-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.wacky-content p {
  margin-bottom: 2rem;
  line-height: 1.7;
}

.example-battle {
  margin-top: 3rem;
}

.battle-combo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  background: rgba(76, 175, 80, 0.1);
  padding: 2rem;
  border-radius: 16px;
  font-weight: 600;
  border: 1px solid var(--mystic-green);
}

.combo-unit {
  background: rgba(210, 105, 30, 0.2);
  border: 2px solid var(--orange-glow);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
}

.combo-plus, .combo-vs {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--mystic-green);
}

.combo-target {
  background: rgba(210, 105, 30, 0.2);
  border: 2px solid var(--orange-glow);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
}

/* Evolution Section */
.evolution-section {
  background: var(--death-black);
}

.evolution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.evolution-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--mystic-green);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.evolution-item:hover {
  transform: translateY(-5px);
  background: rgba(76, 175, 80, 0.15);
}

.evolution-icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 5px var(--orange-glow));
}

.evolution-item h4 {
  color: var(--bone-white);
  font-size: 1.1rem;
  margin: 0;
}

/* Call to Action */
.cta-section {
  background: linear-gradient(135deg, var(--death-black) 0%, var(--ancient-brown) 100%);
  border-top: 2px solid var(--mystic-green);
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 3rem;
  font-weight: 700;
  color: var(--orange-glow);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  line-height: 1.2;
}

.cta-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
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
  background: var(--mystic-green);
  color: var(--death-black);
  border-color: var(--mystic-green);
}

.btn-primary:hover {
  background: var(--death-green);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--orange-glow);
  border-color: var(--orange-glow);
}

.btn-secondary:hover {
  background: var(--orange-glow);
  color: var(--death-black);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(210, 105, 30, 0.4);
}

.btn-icon {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    padding: 0 1.5rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  :root {
    --section-spacing: 3rem;
  }

  .hero-container {
    padding: 0 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .content-main {
    padding: 2rem;
  }

  .game-flow {
    flex-direction: column;
    gap: 2rem;
  }

  .flow-arrow {
    transform: rotate(90deg);
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .pvp-grid {
    grid-template-columns: 1fr;
  }

  .evolution-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons,
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .battle-combo {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-tags {
    gap: 0.5rem;
  }

  .tag {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 0 0.5rem;
  }

  .container {
    padding: 0 0.5rem;
  }

  .content-main {
    padding: 1.5rem;
  }

  .flow-step {
    padding: 2rem 1.5rem;
  }

  .pvp-card {
    padding: 2rem 1.5rem;
  }

  .evolution-item {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .point-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .btn {
    padding: 1rem 2rem;
    width: 100%;
    max-width: 300px;
  }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .hero-icon,
  .flow-step,
  .feature-card,
  .pvp-card,
  .evolution-item,
  .btn {
    animation: none;
    transition: none;
  }

  .btn::before {
    display: none;
  }
}

/* High contrast mode */
@media (prefers-contrast: more) {
  .flow-step,
  .feature-card,
  .pvp-card {
    border-width: 3px;
  }

  .tag,
  .btn {
    border-width: 3px;
  }
}
</style>