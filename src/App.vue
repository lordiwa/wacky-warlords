<template>
  <div id="app">
    <nav class="main-nav">
      <div class="nav-container">
        <div class="logo">
          <router-link to="/" class="logo-link">
            <span class="logo-skull">💀</span>
            Wacky Warlords
          </router-link>
        </div>

        <ul class="nav-menu" :class="{ 'nav-menu-open': isMenuOpen }">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/what-is-wacky-warlords" class="nav-link" @click="closeMenu">What is Wacky Warlords</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lore" class="nav-link" @click="closeMenu">Lore</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/support-us" class="nav-link" @click="closeMenu">Support Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact-about" class="nav-link" @click="closeMenu">Contact Us / About Us</router-link>
          </li>
        </ul>

        <!-- Mobile menu toggle -->
        <div class="mobile-menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="main-footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Wacky Warlords</h4>
            <p>Where legends battle for a second chance at life</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><router-link to="/what-is-wacky-warlords">Game Info</router-link></li>
              <li><router-link to="/lore">Lore</router-link></li>
              <li><router-link to="/support-us">Support</router-link></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="#" class="social-link">Discord</a></li>
              <li><a href="#" class="social-link">Twitter</a></li>
              <li><a href="#" class="social-link">Reddit</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Wacky Warlords. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
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
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--death-black);
  color: var(--bone-white);
}

/* Navigation Styles */
.main-nav {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 2px solid var(--mystic-green);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  position: relative;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-link {
  color: var(--bone-white);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-skull {
  font-size: 1.8rem;
  filter: drop-shadow(0 0 10px var(--mystic-green));
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { filter: drop-shadow(0 0 10px var(--mystic-green)); }
  to { filter: drop-shadow(0 0 20px var(--orange-glow)); }
}

.logo-link:hover {
  color: var(--orange-glow);
  transform: scale(1.05);
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

.nav-link {
  color: var(--bone-white);
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(76, 175, 80, 0.2), transparent);
  transition: left 0.5s;
  pointer-events: none;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  background: rgba(76, 175, 80, 0.1);
  color: var(--mystic-green);
  border-color: var(--mystic-green);
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background: var(--mystic-green);
  color: var(--death-black);
  border-color: var(--mystic-green);
  box-shadow: 0 0 15px rgba(76, 175, 80, 0.5);
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.mobile-menu-toggle:hover {
  background: rgba(76, 175, 80, 0.1);
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--bone-white);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

/* Main Content */
.main-content {
  flex: 1;
  min-height: calc(100vh - 140px);
}

/* Footer */
.main-footer {
  background: linear-gradient(135deg, var(--death-black) 0%, var(--ancient-brown) 100%);
  color: var(--bone-white);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  border-top: 2px solid var(--mystic-green);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: var(--orange-glow);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section p {
  color: var(--bone-white);
  opacity: 0.9;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--bone-white);
  text-decoration: none;
  transition: color 0.3s ease;
  opacity: 0.9;
}

.footer-section a:hover {
  color: var(--mystic-green);
  opacity: 1;
}

.social-link:hover {
  color: var(--orange-glow);
}

.footer-bottom {
  border-top: 1px solid var(--shadow-gray);
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  opacity: 0.8;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .nav-menu {
    gap: 0.5rem;
  }

  .nav-link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border-top: 1px solid var(--mystic-green);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    gap: 0;
  }

  .nav-menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
    padding: 1rem;
  }

  .nav-container {
    min-height: 60px;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 0.5rem;
  }

  .logo {
    font-size: 1.2rem;
  }

  .logo-skull {
    font-size: 1.5rem;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 0.8rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--death-black);
}

::-webkit-scrollbar-thumb {
  background: var(--mystic-green);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--orange-glow);
}

/* Focus styles for accessibility */
.nav-link:focus,
.logo-link:focus {
  outline: 2px solid var(--mystic-green);
  outline-offset: 2px;
}

/* Animation for mobile menu toggle */
.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>