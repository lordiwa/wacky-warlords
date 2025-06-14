<!-- src/views/Lore.vue -->
<template>
  <div class="lore-page">
    <div class="container">
      <header class="page-header">
        <h1>Lore & Story</h1>
        <p class="page-subtitle">Dive deep into the world of Wacky Warlords</p>
      </header>

      <section class="lore-content">
        <div class="lore-sections">
          <div class="lore-section">
            <h2>The Beginning</h2>
            <p>The lore content will be added here in Step 3...</p>
          </div>

          <div class="lore-section">
            <h2>The Great War</h2>
            <p>Epic tales of battles and heroes will be detailed here...</p>
          </div>

          <div class="lore-section">
            <h2>Current Era</h2>
            <p>The present state of the Wacky Warlords universe...</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Lore page logic
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

.lore-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.lore-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.lore-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.lore-section p {
  line-height: 1.6;
  color: #555;
}
</style>