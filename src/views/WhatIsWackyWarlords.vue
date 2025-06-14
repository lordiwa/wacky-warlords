<template>
  <div class="what-is-page">
    <div class="container">
      <header class="page-header">
        <h1>What is Wacky Warlords?</h1>
        <p class="page-subtitle">Discover the game that's taking the world by storm</p>
      </header>

      <section class="content-section">
        <div class="content-grid">
          <div class="content-text">
            <h2>Game Overview</h2>
            <p>Content about the game will be added here in Step 3...</p>

            <h3>Key Features</h3>
            <ul class="feature-list">
              <li>Feature 1 - Details coming soon</li>
              <li>Feature 2 - Details coming soon</li>
              <li>Feature 3 - Details coming soon</li>
            </ul>
          </div>

          <div class="content-media">
            <div class="placeholder-image">
              <p>Game Screenshot/Video Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Page logic will go here
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
}

.page-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.content-section {
  padding: 2rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.content-text h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.content-text h3 {
  color: #34495e;
  margin: 2rem 0 1rem 0;
}

.content-text p {
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style-type: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #ecf0f1;
  color: #555;
}

.placeholder-image {
  background-color: #ecf0f1;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }
}
</style>