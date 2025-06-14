<template>
  <div class="support-page">
    <div class="container">
      <header class="page-header">
        <h1>Support Wacky Warlords</h1>
        <p class="page-subtitle">Help us continue developing this amazing game</p>
      </header>

      <section class="why-support">
        <div class="why-content">
          <h2>Why Support Us?</h2>
          <p>Your support helps us:</p>
          <ul class="support-benefits">
            <li>Continue game development and add new features</li>
            <li>Maintain and improve game servers</li>
            <li>Create new content and expansions</li>
            <li>Build a stronger gaming community</li>
            <li>Keep the game free for everyone</li>
          </ul>
        </div>
      </section>

      <section class="support-options">
        <h2 class="section-title">Ways to Support</h2>
        <div class="support-grid">
          <div class="support-card primary">
            <div class="card-header">
              <h3>Monthly Support</h3>
              <div class="support-badge">Most Popular</div>
            </div>
            <div class="card-content">
              <p>Join our Patreon community and get exclusive perks:</p>
              <ul class="perk-list">
                <li>Early access to new features</li>
                <li>Exclusive in-game content</li>
                <li>Direct communication with developers</li>
                <li>Monthly developer updates</li>
              </ul>
              <div class="support-amount">Starting at $5/month</div>
              <button class="btn btn-primary">Support on Patreon</button>
            </div>
          </div>

          <div class="support-card">
            <div class="card-header">
              <h3>One-Time Donation</h3>
            </div>
            <div class="card-content">
              <p>Make a one-time contribution to show your support:</p>
              <ul class="perk-list">
                <li>Supporter badge in-game</li>
                <li>Thank you message in credits</li>
                <li>Good karma points</li>
              </ul>
              <div class="donation-options">
                <button class="donation-btn">$10</button>
                <button class="donation-btn">$25</button>
                <button class="donation-btn">$50</button>
                <button class="donation-btn">Custom</button>
              </div>
              <button class="btn btn-secondary">Donate Now</button>
            </div>
          </div>

          <div class="support-card">
            <div class="card-header">
              <h3>Free Support</h3>
            </div>
            <div class="card-content">
              <p>Support us without spending money:</p>
              <ul class="perk-list">
                <li>Share the game with friends</li>
                <li>Rate us on gaming platforms</li>
                <li>Join our Discord community</li>
                <li>Provide feedback and bug reports</li>
                <li>Create content (streams, videos)</li>
              </ul>
              <button class="btn btn-outline">Share Game</button>
            </div>
          </div>
        </div>
      </section>

      <section class="supporter-recognition">
        <h2 class="section-title">Our Amazing Supporters</h2>
        <p class="recognition-text">
          We want to give a huge thanks to all our supporters who make Wacky Warlords possible!
        </p>
        <div class="supporter-tiers">
          <div class="tier">
            <h4>Legendary Warlords ($50+/month)</h4>
            <p class="tier-description">Names will be added here as supporters join...</p>
          </div>
          <div class="tier">
            <h4>Epic Warriors ($25+/month)</h4>
            <p class="tier-description">Names will be added here as supporters join...</p>
          </div>
          <div class="tier">
            <h4>Brave Fighters ($10+/month)</h4>
            <p class="tier-description">Names will be added here as supporters join...</p>
          </div>
        </div>
      </section>

      <section class="transparency">
        <h2 class="section-title">Financial Transparency</h2>
        <div class="transparency-content">
          <p>We believe in being transparent about how your support is used:</p>
          <div class="expense-breakdown">
            <div class="expense-item">
              <span class="expense-label">Development Tools & Software</span>
              <span class="expense-percent">40%</span>
            </div>
            <div class="expense-item">
              <span class="expense-label">Server Hosting & Infrastructure</span>
              <span class="expense-percent">30%</span>
            </div>
            <div class="expense-item">
              <span class="expense-label">Art & Audio Assets</span>
              <span class="expense-percent">20%</span>
            </div>
            <div class="expense-item">
              <span class="expense-label">Marketing & Community</span>
              <span class="expense-percent">10%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Support page logic
const shareGame = () => {
  // Share functionality will be implemented later
  console.log('Share game functionality coming soon!')
}

const makeDonation = (amount) => {
  // Donation functionality will be implemented later
  console.log(`Donation of $${amount} - integration coming soon!`)
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-header {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.why-support {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
}

.why-support h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.support-benefits {
  list-style: none;
  padding: 0;
}

.support-benefits li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
}

.support-benefits li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #27ae60;
  font-weight: bold;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.support-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.support-card:hover {
  transform: translateY(-5px);
}

.support-card.primary {
  border: 2px solid #3498db;
  position: relative;
}

.card-header {
  padding: 1.5rem;
  background-color: #f8f9fa;
  position: relative;
}

.card-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.3rem;
}

.support-badge {
  position: absolute;
  top: -10px;
  right: 1rem;
  background: #e74c3c;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
}

.card-content {
  padding: 1.5rem;
}

.perk-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.perk-list li {
  padding: 0.3rem 0;
  padding-left: 1rem;
  position: relative;
  color: #555;
  font-size: 0.9rem;
}

.perk-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #3498db;
}

.support-amount {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  margin: 1rem 0;
}

.donation-options {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.donation-btn {
  flex: 1;
  padding: 0.5rem;
  border: 2px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 60px;
}

.donation-btn:hover {
  background: #3498db;
  color: white;
}

.btn {
  width: 100%;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-secondary {
  background-color: #27ae60;
  color: white;
}

.btn-secondary:hover {
  background-color: #219a52;
}

.btn-outline {
  background-color: transparent;
  color: #3498db;
  border: 2px solid #3498db;
}

.btn-outline:hover {
  background-color: #3498db;
  color: white;
}

.supporter-recognition {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
  text-align: center;
}

.recognition-text {
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.supporter-tiers {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tier {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.tier h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.tier-description {
  margin: 0;
  color: #7f8c8d;
  font-style: italic;
}

.transparency {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.transparency-content p {
  color: #555;
  margin-bottom: 1.5rem;
}

.expense-breakdown {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.expense-label {
  color: #2c3e50;
  font-weight: 500;
}

.expense-percent {
  color: #3498db;
  font-weight: bold;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .support-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .donation-options {
    justify-content: center;
  }

  .expense-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>