<template>
  <div class="funding-page">
    <!-- Funding Strategy Section -->
    <section class="funding-strategy-section">
      <div class="container">
        <h1 class="section-title">Funding Strategy</h1>
        <div class="funding-content">
          <p>Our funding strategy has two clear phases:</p>
          <div class="funding-phase">
            <h2>Phase 1: Crowdfunding (Q1–Q2 2026)</h2>
            <p>
              We seek to validate market interest and build a solid community from day one.
              In 2023, 64% of video game campaigns on Kickstarter were successful.
              2024 was the best year for independent gaming since 2015.
            </p>
          </div>
          <div class="funding-phase">
            <h2>Phase 2: Seed Round (Q3 2026)</h2>
            <p>
              With an active community and validated traction, we open a round to scale development, marketing, and distribution.
              In Q3 2024 alone, VCs invested $517 million in gaming, focusing on studios with early execution.
            </p>
          </div>
          <h2>What do we allocate initial capital to?</h2>
          <ul class="capital-allocation">
            <li>Developing a functional MVP that contains:</li>
            <ul>
              <li>1 competitive map</li>
              <li>6 heroes with distinct styles</li>
              <li>Basic progression system</li>
              <li>Online PvP mode</li>
              <li>First customization set</li>
            </ul>
            <li>
              Community infrastructure: Discord, content for streamers, early access, and architecture to scale with recurring content.
            </li>
          </ul>
          <p>
            This allows us to test retention, engagement, and monetization with real users.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.funding-page {
  background: #0a0a0a;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #f39c12;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.funding-content {
  color: white;
  font-size: 1.1rem;
  line-height: 1.6;
}

.funding-phase h2 {
  color: #e74c3c;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.funding-phase p {
  margin-bottom: 1.5rem;
}

.capital-allocation {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.capital-allocation > li {
  margin-bottom: 1rem;
  font-weight: bold;
}

.capital-allocation ul {
  list-style: disc;
  padding-left: 2rem;
  margin-top: 0.5rem;
}

.capital-allocation ul li {
  font-weight: normal;
}

p {
  margin-bottom: 1.5rem;
}
</style>