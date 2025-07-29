<template>
  <div class="lore-page">
    <!-- Hero Section - Full Width -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-icon">🕯</div>
        <h1 class="hero-title">The Lore of Wacky Warlords</h1>
        <p class="hero-subtitle">Journey into the realm between life and death</p>
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
    </section>

    <!-- Ancient Game Section -->
    <section class="section ancient-game">
      <div class="container">
        <div class="section-header">
          <h2>The Ancient Game of Death</h2>
        </div>
        <div class="lore-content">
          <div class="narrative-text">
            <p class="opening-line">They say even Death tires of routine.</p>

            <p class="narrative-paragraph">
              For eons, it has harvested souls with dutiful precision. But every so often, when the void grows too quiet
              and the silence of eternity becomes unbearable… Death changes the rules.
            </p>

            <div class="highlight-box">
              <p>In these rare moments, Death summons forth a spectacle:</p>
              <h3 class="highlight-title">The Ancient Game of Death.</h3>
            </div>
          </div>

          <div class="visual-element">
            <div class="death-throne">
              <img src="https://place-hold.it/400x300/0a0a0a/4CAF50/png?text=Death's+Throne" alt="Death's Eternal Throne" />
              <div class="throne-overlay">
                <div class="throne-icon">💀</div>
                <h4>Death's Eternal Throne</h4>
                <p>Where the games are decreed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Realm of Calm Section -->
    <section class="section realm-section">
      <div class="container">
        <div class="section-header">
          <div class="section-icon">🌫</div>
          <h2>The Realm of Calm</h2>
        </div>

        <div class="realm-grid">
          <div class="realm-description">
            <div class="description-card">
              <p class="realm-intro">
                Some call it <em>purgatory</em>. Others, <em>limbo</em>. But its true name is
                <strong class="realm-name">The Realm of Calm</strong>—a world suspended between life and oblivion.
              </p>

              <p class="narrative-paragraph">
                It is here that Death gathers its unwilling audience: warriors, tyrants, champions, and rebels from every corner of history.
              </p>

              <div class="realm-truth">
                <p>Each one was once feared, loved, or hated. Now, they are but echoes of glory… until Death offers them a deal.</p>
              </div>
            </div>
          </div>

          <div class="realm-visual">
            <div class="mist-effect">
              <img src="https://place-hold.it/500x350/1a1a1a/D2691E/png?text=Realm+of+Calm" alt="The Realm of Calm" />
              <div class="warrior-silhouettes">
                <span class="silhouette">⚔️</span>
                <span class="silhouette">🏹</span>
                <span class="silhouette">🗡️</span>
                <span class="silhouette">🛡️</span>
              </div>
              <div class="mist-overlay">
                <h4>Echoes of forgotten warriors</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tournament Section -->
    <section class="section tournament-section">
      <div class="container">
        <div class="section-header">
          <div class="section-icon">⚔️</div>
          <h2>A Tournament Beyond Time</h2>
        </div>

        <div class="tournament-content">
          <div class="deal-box">
            <h3>The Deal is Simple:</h3>
            <p class="deal-description">
              <strong>Compete</strong> in a brutal contest of strategy and strength. Form uneasy alliances.
              Wield forgotten powers. Command forces born from myth and memory.
            </p>
          </div>

          <div class="outcomes-grid">
            <div class="outcome-card victory">
              <div class="outcome-icon">🏆</div>
              <h4>Those who win</h4>
              <p>
                Are granted what none else in the Realm of Calm possess—<strong>a second chance at life</strong>.
              </p>
            </div>

            <div class="outcome-card defeat">
              <div class="outcome-icon">👻</div>
              <h4>Those who lose?</h4>
              <p>
                They return to the shadows, fading into the mist of forgotten legend… or worse,
                they remain in Death's hands as pawns in the next game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Warriors Section -->
    <section class="section warriors-section">
      <div class="container">
        <div class="section-header">
          <div class="section-icon">🕰</div>
          <h2>Warriors From Every Era</h2>
        </div>

        <div class="era-showcase">
          <div class="era-grid">
            <div class="era-card">
              <div class="era-image">
                <img src="https://place-hold.it/250x180/1a1a1a/D2691E/png?text=Rome" alt="Ancient Rome" />
                <div class="era-overlay">
                  <div class="era-icon">🏛️</div>
                </div>
              </div>
              <div class="era-content">
                <h4>Ancient Rome</h4>
                <p>Blood-drenched coliseums</p>
              </div>
            </div>

            <div class="era-card">
              <div class="era-image">
                <img src="https://place-hold.it/250x180/1a1a1a/4CAF50/png?text=Japan" alt="Feudal Japan" />
                <div class="era-overlay">
                  <div class="era-icon">⛩️</div>
                </div>
              </div>
              <div class="era-content">
                <h4>Feudal Japan</h4>
                <p>Cursed samurai battlefields</p>
              </div>
            </div>

            <div class="era-card">
              <div class="era-image">
                <img src="https://place-hold.it/250x180/1a1a1a/D2691E/png?text=Medieval" alt="Medieval Europe" />
                <div class="era-overlay">
                  <div class="era-icon">🏰</div>
                </div>
              </div>
              <div class="era-content">
                <h4>Medieval Europe</h4>
                <p>Fortress strongholds</p>
              </div>
            </div>

            <div class="era-card">
              <div class="era-image">
                <img src="https://place-hold.it/250x180/1a1a1a/4CAF50/png?text=Future" alt="Future Wastelands" />
                <div class="era-overlay">
                  <div class="era-icon">🚀</div>
                </div>
              </div>
              <div class="era-content">
                <h4>Future Wastelands</h4>
                <p>Scorched tomorrow</p>
              </div>
            </div>
          </div>

          <div class="warriors-description">
            <div class="description-card">
              <p class="narrative-paragraph">
                Death pulls its champions from all timelines—mixing cultures, tactics, and chaos in a clash of impossible proportions.
              </p>
              <div class="warning-text">
                <div class="warning-item">No warrior is truly safe.</div>
                <div class="warning-item">No alliance is truly loyal.</div>
                <div class="warning-item">And no victory is ever permanent.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Death Section -->
    <section class="section death-section">
      <div class="container">
        <div class="section-header">
          <div class="section-icon">💀</div>
          <h2>Death, the Eternal Host</h2>
        </div>

        <div class="death-content">
          <div class="death-grid">
            <div class="death-description">
              <div class="death-traits">
                <div class="trait-item">Death does not speak.</div>
                <div class="trait-item">Death does not cheer.</div>
                <div class="trait-item">But it watches.</div>
              </div>

              <p class="death-smile">
                And sometimes, in the cracks of thunder or flickers of fire, it <strong>smiles</strong>.
              </p>

              <div class="mystery-box">
                <p>
                  No one knows why Death created this game. Some say it's entertainment. Others claim it's a cosmic test.
                  Maybe Death wants to understand humanity—or mock it.
                </p>

                <div class="truth-statement">
                  <p>But one truth remains:</p>
                  <p class="final-truth">
                    In the Ancient Game of Death, the only thing more terrifying than losing...<br>
                    is <strong class="winning-highlight">winning</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div class="death-visual">
              <div class="watching-eyes">
                <img src="https://place-hold.it/350x300/0a0a0a/4CAF50/png?text=Death+Watches" alt="Death watches all" />
                <div class="eye-overlay">
                  <div class="eye">👁️</div>
                  <h4>Death watches all</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Atmospheric Quote Section -->
    <section class="quote-section">
      <div class="container">
        <div class="quote-container">
          <blockquote class="atmospheric-quote">
            "In the Realm of Calm, legends are currency, glory is fleeting, and Death... Death always collects its due."
          </blockquote>
          <cite>— Ancient inscription found in the Tournament Grounds</cite>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Continue Your Journey</h2>
          <div class="cta-buttons">
            <router-link to="/what-is-wacky-warlords" class="btn btn-primary">
              <span>Discover the Game</span>
              <div class="btn-icon">🎮</div>
            </router-link>
            <router-link to="/support-us" class="btn btn-secondary">
              <span>Support the Legend</span>
              <div class="btn-icon">❤️</div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Lore page logic
</script>

<style scoped>
/* COMPLETELY CLEAN SYNTHWAVE STYLES - NO LEFTOVERS */

/* Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.lore-page {
  background: #0a0a0a;
  color: white;
  min-height: 100vh;
}

/* Hero Section - Synthwave Style */
.hero-section {
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 25%, #1a1a1a 50%, #2c2c2c 75%, #1a1a1a 100%);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-section::before {
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

.hero-container {
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

/* Container for content sections */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Styles */
.section {
  width: 100%;
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: bold;
}

/* Ancient Game Section */
.ancient-game {
  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
  color: white;
}

.lore-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.narrative-text {
  max-width: 100%;
}

.opening-line {
  font-size: 1.8rem;
  font-style: italic;
  margin-bottom: 2rem;
  color: #f39c12;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.narrative-paragraph {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.highlight-box {
  background: rgba(255,255,255,0.1);
  border: 2px solid #3498db;
  padding: 2rem;
  border-radius: 16px;
  margin-top: 3rem;
  text-align: center;
  backdrop-filter: blur(10px);
}

.highlight-box p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.highlight-title {
  color: #3498db;
  font-size: 1.8rem;
  text-shadow: 0 0 10px #3498db;
  margin: 0;
}

.visual-element {
  display: flex;
  justify-content: center;
}

.death-throne {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.3);
  transition: all 0.3s ease;
}

.death-throne:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.death-throne img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.throne-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.9));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  text-align: center;
}

.throne-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px #f39c12);
}

.throne-overlay h4 {
  color: #f39c12;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.throne-overlay p {
  color: white;
  opacity: 0.9;
}

/* Realm Section */
.realm-section {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
  color: white;
}

.realm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.description-card {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.3);
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(15px);
}

.realm-intro {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.realm-name {
  color: #f39c12;
  font-size: 1.2em;
  text-shadow: 0 0 5px #f39c12;
}

.realm-truth {
  background: rgba(255,255,255,0.1);
  border-left: 4px solid #f39c12;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 0 12px 12px 0;
  font-style: italic;
  color: #f39c12;
}

.mist-effect {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.3);
}

.mist-effect img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.warrior-silhouettes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 2rem;
}

.silhouette {
  font-size: 2.5rem;
  opacity: 0.8;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 0 10px #f39c12);
}

.silhouette:nth-child(2) { animation-delay: 0.5s; }
.silhouette:nth-child(3) { animation-delay: 1s; }
.silhouette:nth-child(4) { animation-delay: 1.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.mist-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  padding: 2rem 1.5rem 1.5rem;
  text-align: center;
}

.mist-overlay h4 {
  color: #f39c12;
  font-size: 1.2rem;
  margin: 0;
}

/* Tournament Section */
.tournament-section {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  color: white;
}

.deal-box {
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.3);
  padding: 3rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  text-align: center;
  backdrop-filter: blur(15px);
}

.deal-box h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
}

.deal-description {
  font-size: 1.2rem;
  line-height: 1.7;
  margin: 0;
}

.outcomes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.outcome-card {
  background: rgba(255,255,255,0.15);
  border: 2px solid rgba(255,255,255,0.3);
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
}

.outcome-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.outcome-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
}

.outcome-card h4 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white;
}

.outcome-card p {
  line-height: 1.6;
  opacity: 0.95;
  font-size: 1.1rem;
}

/* Warriors Section */
.warriors-section {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
}

.era-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.era-card {
  background: rgba(255,255,255,0.15);
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
}

.era-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.era-image {
  position: relative;
  height: 180px;
}

.era-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.era-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.era-icon {
  font-size: 3rem;
  filter: drop-shadow(0 0 15px rgba(0,0,0,0.5));
  animation: float 4s ease-in-out infinite;
}

.era-content {
  padding: 2rem;
  text-align: center;
}

.era-content h4 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.era-content p {
  color: white;
  font-style: italic;
  opacity: 0.8;
}

.warning-text {
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.3);
  padding: 2rem;
  border-radius: 16px;
  margin-top: 2rem;
  backdrop-filter: blur(10px);
}

.warning-item {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: center;
}

.warning-item:last-child {
  margin-bottom: 0;
}

/* Death Section */
.death-section {
  background: linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%);
  color: white;
}

.death-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.death-traits {
  margin: 2rem 0;
}

.trait-item {
  font-size: 1.5rem;
  margin: 1.5rem 0;
  opacity: 0.9;
  font-weight: 500;
  text-align: center;
  padding: 1rem;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
}

.death-smile {
  font-size: 1.4rem;
  color: #f39c12;
  margin: 3rem 0;
  font-style: italic;
  text-align: center;
}

.mystery-box {
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.3);
  padding: 3rem;
  border-radius: 20px;
  margin: 3rem 0;
  backdrop-filter: blur(15px);
}

.mystery-box p {
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.95;
  font-size: 1.1rem;
}

.truth-statement {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #f39c12;
  text-align: center;
}

.final-truth {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 1rem;
  line-height: 1.5;
}

.winning-highlight {
  color: #f39c12;
  font-size: 1.5em;
  text-shadow: 0 0 15px #f39c12;
}

.watching-eyes {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.3);
  transition: all 0.3s ease;
}

.watching-eyes:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.watching-eyes img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.eye-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.eye {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: blink 4s infinite;
  filter: drop-shadow(0 0 20px #f39c12);
}

@keyframes blink {
  0%, 90%, 100% { opacity: 1; }
  95% { opacity: 0.1; }
}

.eye-overlay h4 {
  color: #f39c12;
  font-size: 1.3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

/* Quote Section */
.quote-section {
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
}

.atmospheric-quote {
  font-size: 2.5rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;
  color: white;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.atmospheric-quote::before,
.atmospheric-quote::after {
  content: '"';
  font-size: 4rem;
  opacity: 0.3;
  position: absolute;
  color: #f39c12;
}

.atmospheric-quote::before {
  top: -1rem;
  left: -3rem;
}

.atmospheric-quote::after {
  bottom: -2rem;
  right: -3rem;
}

cite {
  font-size: 1.1rem;
  opacity: 0.8;
  font-style: normal;
  color: #f39c12;
  text-align: center;
  display: block;
}

/* Call to Action */
.cta-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
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
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
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

.cta-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    padding: 0 1.5rem;
  }

  .lore-content,
  .realm-grid,
  .death-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 0 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .description-card,
  .deal-box,
  .mystery-box {
    padding: 2rem;
  }

  .era-grid {
    grid-template-columns: 1fr;
  }

  .outcomes-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons,
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .warrior-silhouettes {
    gap: 1rem;
  }

  .atmospheric-quote::before,
  .atmospheric-quote::after {
    font-size: 3rem;
  }

  .atmospheric-quote::before {
    left: -1.5rem;
  }

  .atmospheric-quote::after {
    right: -1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 0 0.5rem;
  }

  .container {
    padding: 0 0.5rem;
  }

  .description-card,
  .deal-box,
  .mystery-box {
    padding: 1.5rem;
  }

  .outcome-card {
    padding: 2rem 1.5rem;
  }

  .atmospheric-quote::before,
  .atmospheric-quote::after {
    display: none;
  }

  .btn {
    padding: 1rem 2rem;
    width: 100%;
    max-width: 300px;
  }

  .era-content {
    padding: 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }
}
</style>