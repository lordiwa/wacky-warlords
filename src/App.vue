<template>
  <div id="app">
    <nav class="main-nav">
      <div class="nav-container">
        <div class="logo">
          <router-link to="/" class="logo-link">Wacky Warlords</router-link>
        </div>

        <ul class="nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/what-is-wacky-warlords" class="nav-link">What is Wacky Warlords</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lore" class="nav-link">Lore</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/support-us" class="nav-link">Support Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact-about" class="nav-link">Contact Us / About Us</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="main-footer">
      <div class="footer-container">
        <p>&copy; 2025 Wacky Warlords. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navigation Styles */
.main-nav {
  background-color: #2c3e50;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-link {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo-link:hover {
  color: #3498db;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background-color: #34495e;
  color: #3498db;
}

.nav-link.router-link-active {
  background-color: #3498db;
  color: white;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 2rem 0;
}

/* Footer */
.main-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 1rem 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    padding: 1rem;
  }

  .nav-menu {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    text-align: center;
  }

  .nav-link {
    display: block;
    width: 100%;
  }
}
</style>