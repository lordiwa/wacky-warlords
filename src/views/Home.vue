<template>
  <div class="home">
    <div class="container">
      <section class="hero">
        <h1>Welcome to Wacky Warlords</h1>
        <p class="hero-subtitle">An epic gaming experience awaits you</p>
        <div class="hero-actions">
          <router-link to="/what-is-wacky-warlords" class="btn btn-primary">Learn More</router-link>
          <router-link to="/support-us" class="btn btn-secondary">Support Us</router-link>
        </div>
      </section>

      <section class="features">
        <h2>Game Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Epic Battles</h3>
            <p>Engage in strategic warfare</p>
          </div>
          <div class="feature-card">
            <h3>Rich Lore</h3>
            <p>Discover an immersive world</p>
          </div>
          <div class="feature-card">
            <h3>Community</h3>
            <p>Join fellow warlords</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Home page logic will go here
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background-color: white;
  color: #667eea;
}

.features {
  text-align: center;
}

.features h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>