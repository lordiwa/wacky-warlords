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

    <!-- Ancient Game Section - Full Width -->
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

    <!-- Realm of Calm Section - Full Width -->
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

    <!-- Tournament Section - Full Width -->
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

    <!-- Warriors Section - Full Width -->
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

    <!-- Death Section - Full Width -->
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

    <!-- Atmospheric Quote Section - Full Width -->
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

    <!-- Call to Action - Full Width -->
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

.lore-page {
  background: var(--death-black);
  color: var(--bone-white);
  min-height: 100vh;
}

/* Hero Section - Full Width */
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
  background: radial-gradient(circle at 20% 20%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
  radial-gradient(circle at 80% 80%, rgba(210, 105, 30, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  text-align: center;
  max-width: 1200px;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 20px var(--orange-glow));
  animation: flicker 3s ease-in-out infinite;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
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

.hero-actions {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Container for content sections */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Styles - Full Width Backgrounds */
.section {
  width: 100%;
  padding: var(--section-spacing) 0;
  margin: 0;
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
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Ancient Game Section */
.ancient-game {
  background: linear-gradient(135deg, var(--death-black) 0%, var(--ancient-brown) 100%);
  border-top: 1px solid var(--shadow-gray);
  border-bottom: 1px solid var(--shadow-gray);
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
  color: var(--orange-glow);
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
  background: rgba(76, 175, 80, 0.1);
  border: 2px solid var(--mystic-green);
  padding: 2rem;
  border-radius: 16px;
  margin-top: 3rem;
  text-align: center;
}

.highlight-box p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.highlight-title {
  color: var(--mystic-green);
  font-size: 1.8rem;
  text-shadow: 0 0 10px var(--mystic-green);
  margin: 0;
}

.visual-element {
  display: flex;
  justify-content: center;
}

.death-throne {
  position: relative;
  border-radius: var(--card-radius);
  overflow: hidden;
  border: 2px solid var(--mystic-green);
  transition: all 0.3s ease;
}

.death-throne:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.3);
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
  filter: drop-shadow(0 0 10px var(--orange-glow));
}

.throne-overlay h4 {
  color: var(--orange-glow);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.throne-overlay p {
  color: var(--bone-white);
  opacity: 0.9;
}

/* Realm Section */
.realm-section {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  border-top: 1px solid var(--shadow-gray);
  border-bottom: 1px solid var(--shadow-gray);
}

.realm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.description-card {
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--mystic-green);
  padding: 3rem;
  border-radius: 20px;
}

.realm-intro {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.realm-name {
  color: var(--mystic-green);
  font-size: 1.2em;
  text-shadow: 0 0 5px var(--mystic-green);
}

.realm-truth {
  background: rgba(210, 105, 30, 0.1);
  border-left: 4px solid var(--orange-glow);
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 0 12px 12px 0;
  font-style: italic;
  color: var(--orange-glow);
}

.mist-effect {
  position: relative;
  border-radius: var(--card-radius);
  overflow: hidden;
  border: 2px solid var(--mystic-green);
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
  filter: drop-shadow(0 0 10px var(--orange-glow));
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
  color: var(--orange-glow);
  font-size: 1.2rem;
  margin: 0;
}

/* Tournament Section */
.tournament-section {
  background: linear-gradient(135deg, var(--death-black) 0%, var(--ancient-brown) 100%);
  border-top: 2px solid var(--mystic-green);
  border-bottom: 2px solid var(--mystic-green);
}

.deal-box {
  background: rgba(76, 175, 80, 0.1);
  border: 2px solid var(--mystic-green);
  padding: 3rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  text-align: center;
}

.deal-box h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--orange-glow);
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
  background: rgba(76, 175, 80, 0.1);
  border: 2px solid var(--mystic-green);
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.outcome-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.2);
}

.outcome-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px var(--orange-glow));
}

.outcome-card h4 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: var(--orange-glow);
}

.outcome-card p {
  line-height: 1.6;
  opacity: 0.95;
  font-size: 1.1rem;
}

/* Warriors Section */
.warriors-section {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  border-top: 1px solid var(--shadow-gray);
  border-bottom: 1px solid var(--shadow-gray);
}

.era-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.era-card {
  background: rgba(76, 175, 80, 0.1);
  border: 2px solid var(--mystic-green);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.era-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.2);
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
  filter: drop-shadow(0 0 15px var(--orange-glow));
  animation: float 4s ease-in-out infinite;
}

.era-content {
  padding: 2rem;
  text-align: center;
}

.era-content h4 {
  color: var(--orange-glow);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.era-content p {
  color: var(--bone-white);
  font-style: italic;
  opacity: 0.8;
}

.warning-text {
  background: rgba(210, 105, 30, 0.1);
  border: 2px solid var(--orange-glow);
  padding: 2rem;
  border-radius: 16px;
  margin-top: 2rem;
}

.warning-item {
  color: var(--orange-glow);
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
  background: linear-gradient(135deg, var(--death-black) 0%, var(--ancient-brown) 100%);
  border-top: 2px solid var(--mystic-green);
  border-bottom: 2px solid var(--mystic-green);
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
  background: rgba(76, 175, 80, 0.1);
  border-radius: 12px;
  border: 1px solid var(--mystic-green);
}

.death-smile {
  font-size: 1.4rem;
  color: var(--orange-glow);
  margin: 3rem 0;
  font-style: italic;
  text-align: center;
}

.mystery-box {
  background: rgba(76, 175, 80, 0.1);
  border: 2px solid var(--mystic-green);
  padding: 3rem;
  border-radius: 20px;
  margin: 3rem 0;
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
  border-top: 2px solid var(--orange-glow);
  text-align: center;
}

.final-truth {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 1rem;
  line-height: 1.5;
}

.winning-highlight {
  color: var(--mystic-green);
  font-size: 1.5em;
  text-shadow: 0 0 15px var(--mystic-green);
}

.watching-eyes {
  position: relative;
  border-radius: var(--card-radius);
  overflow: hidden;
  border: 2px solid var(--mystic-green);
  transition: all 0.3s ease;
}

.watching-eyes:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.3);
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
  filter: drop-shadow(0 0 20px var(--mystic-green));
}

@keyframes blink {
  0%, 90%, 100% { opacity: 1; }
  95% { opacity: 0.1; }
}

.eye-overlay h4 {
  color: var(--orange-glow);
  font-size: 1.3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

/* Quote Section */
.quote-section {
  background: linear-gradient(135deg, var(--death-black) 0%, var(--ancient-brown) 100%);
  border-top: 2px solid var(--orange-glow);
  border-bottom: 2px solid var(--orange-glow);
}

.atmospheric-quote {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;
  color: var(--bone-white);
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
  color: var(--orange-glow);
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
  color: var(--orange-glow);
  text-align: center;
  display: block;
}

/* Call to Action */
.cta-section {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  border-top: 2px solid var(--mystic-green);
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--orange-glow);
  margin-bottom: 3rem;
  font-weight: 700;
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

  .lore-content,
  .realm-grid,
  .death-grid {
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
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .hero-icon,
  .silhouette,
  .era-icon,
  .eye,
  .btn {
    animation: none;
    transition: none;
  }

  .btn::before {
    display: none;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .description-card,
  .deal-box,
  .outcome-card,
  .era-card,
  .mystery-box {
    border-width: 3px;
  }

  .btn {
    border-width: 3px;
  }
}
</style>