<template>
  <div id="app">
    <nav class="retro-nav">
      <div class="retro-nav__container">
        <router-link to="/" class="retro-nav__logo">
          <span class="retro-nav__logo-icon">💀</span>
          Wacky Warlords
        </router-link>

        <ul class="retro-nav__menu" :class="{ 'nav-menu-open': isMenuOpen }">
          <li class="nav-item">
            <router-link to="/what-is-wacky-warlords" class="retro-nav__link" @click="closeMenu">What is Wacky Warlords</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lore" class="retro-nav__link" @click="closeMenu">Lore</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/support-us" class="retro-nav__link" @click="closeMenu">Support Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact-about" class="retro-nav__link" @click="closeMenu">Meet Us</router-link>
          </li>
        </ul>

        <!-- Mobile menu toggle -->
        <div class="mobile-menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="retro-footer">
      <div class="retro-container">
        <div class="footer-content">
          <div class="footer-section">
            <h4 class="cyber-heading">Wacky Warlords</h4>
            <p>Where legends battle for a second chance at life</p>
          </div>
          <div class="footer-section">
            <h4 class="cyber-heading">Quick Links</h4>
            <ul>
              <li><router-link to="/what-is-wacky-warlords">Game Info</router-link></li>
              <li><router-link to="/lore">Lore</router-link></li>
              <li><router-link to="/support-us">Support</router-link></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4 class="cyber-heading">Community</h4>
            <ul>
              <li><a href="#" class="neon-link">Discord</a></li>
              <li><a href="#" class="neon-link">Twitter</a></li>
              <li><a href="#" class="neon-link">Reddit</a></li>
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
import { ref, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value

  if (isMenuOpen.value) {
    document.body.classList.add('menu-open')
  } else {
    document.body.classList.remove('menu-open')
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.classList.remove('menu-open')
}

onUnmounted(() => {
  document.body.classList.remove('menu-open')
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--void-black);
  color: var(--electric-cyan);
}

/* Main Content */
.main-content {
  flex: 1;
  min-height: calc(100vh - 140px);
}

/* Footer with 80s styling */
.retro-footer {
  background: linear-gradient(135deg, var(--void-black) 0%, var(--dark-purple) 100%);
  color: var(--electric-cyan);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  border-top: 3px solid var(--neon-pink);
  position: relative;
}

.retro-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
      repeating-linear-gradient(
          90deg,
          transparent,
          transparent 48px,
          var(--electric-cyan) 50px,
          var(--electric-cyan) 52px
      );
  opacity: 0.05;
  pointer-events: none;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.footer-section h4 {
  color: var(--neon-pink);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-shadow: 0 0 10px var(--neon-pink);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-section p {
  color: var(--electric-cyan);
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
  color: var(--electric-cyan);
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.8;
  border-bottom: 1px solid transparent;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
}

.footer-section a:hover {
  color: var(--neon-green);
  opacity: 1;
  text-shadow: 0 0 5px var(--neon-green);
  border-bottom-color: var(--neon-green);
}

.neon-link:hover {
  color: var(--neon-pink);
  text-shadow: 0 0 10px var(--neon-pink);
  border-bottom-color: var(--neon-pink);
}

.footer-bottom {
  border-top: 1px solid var(--electric-cyan);
  padding-top: 1rem;
  text-align: center;
  position: relative;
  z-index: 2;
}

.footer-bottom p {
  margin: 0;
  opacity: 0.7;
  font-size: 0.9rem;
  color: var(--electric-cyan);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--retro-radius);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.mobile-menu-toggle:hover {
  border-color: var(--neon-pink);
  box-shadow: 0 0 10px var(--neon-pink);
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--electric-cyan);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
  box-shadow: 0 0 5px var(--electric-cyan);
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
  background: var(--neon-pink);
  box-shadow: 0 0 10px var(--neon-pink);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
  background: var(--neon-pink);
  box-shadow: 0 0 10px var(--neon-pink);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .retro-nav__menu {
    gap: 0.5rem;
  }

  .retro-nav__link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .retro-nav__link {
    padding: 1rem 2rem;
    margin: 2px 0;
  }
  .mobile-menu-toggle {
    display: flex;
    z-index: 1001;
  }

  .retro-nav__container {
    position: relative;
  }

  .retro-nav__menu {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    width: 100vw;
    background: linear-gradient(135deg, var(--void-black) 0%, var(--dark-purple) 100%);
    display: flex;
    flex-direction: column; /* Ensure vertical stacking */
    gap: 0; /* Remove any unintended gaps */
    padding: 1rem 0;
    border-top: 3px solid var(--electric-cyan);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    gap: 0;
    z-index: 1000;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    backdrop-filter: blur(10px);
  }

  .retro-nav__menu::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        repeating-linear-gradient(
            0deg,
            transparent,
            transparent 8px,
            var(--neon-pink) 10px,
            var(--neon-pink) 12px
        );
    opacity: 0.1;
    pointer-events: none;
  }

  .nav-menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  /* Fix for navigation links */
  .nav-item {
    position: relative;
    z-index: 1;
    margin: 0; /* Ensure no extra spacing between items */
  }

  .retro-nav__link::before {
    background: linear-gradient(90deg, transparent, var(--electric-cyan), transparent);
    opacity: 0.3;
  }

  .retro-nav__link:last-child {
    border-bottom: none;
  }

  .retro-nav__container {
    min-height: 80px;
    overflow: visible;
  }

  /* Prevent body scroll when menu is open */
  body.menu-open {
    overflow: hidden;
  }
}

@media (max-width: 480px) {
  .retro-nav__container {
    padding: 0 0.5rem;
  }

  .retro-nav__logo {
    font-size: var(--text-lg);
  }

  .retro-nav__logo-icon {
    font-size: var(--text-xl);
  }

  .retro-nav__link {
    font-size: 0.9rem;
    padding: 0.8rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
}

/* Custom scrollbar with 80s style */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--void-black);
  border: 1px solid var(--electric-cyan);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, var(--neon-pink), var(--electric-cyan));
  border-radius: 6px;
  box-shadow: 0 0 10px var(--neon-pink);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, var(--electric-cyan), var(--neon-green));
  box-shadow: 0 0 15px var(--electric-cyan);
}

/* Focus styles for accessibility */
.retro-nav__link:focus,
.retro-nav__logo:focus {
  outline: 3px solid var(--neon-green);
  outline-offset: 2px;
  box-shadow: 0 0 15px var(--neon-green);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

.retro-nav__link {
  display: block; /* Ensure the link spans the full width of the parent */
  padding: 0.6rem 1rem; /* Adjust padding for better click area */
  text-decoration: none;
  color: var(--electric-cyan);
  background: none;
  border: none;
  box-shadow: none;
  transition: none;
}

.retro-nav__link:hover {
  color: var(--neon-pink); /* Change color on hover */
}

.retro-nav__link.router-link-active {
  background: var(--electric-cyan);
  color: var(--void-black);
  border-color: var(--electric-cyan);
  box-shadow: none;
}

.retro-nav__link.router-link-active::before {
  display: none;
}

/* Additional hover effects for navigation */
.retro-nav__link:not(.router-link-active):hover {
  border-color: var(--neon-pink);
}

/* Logo hover effect */
.retro-nav__logo:hover {
  color: var(--electric-cyan);
  text-shadow: 0 0 20px var(--electric-cyan);
  transform: scale(1.05);
}

.retro-nav__logo:hover .retro-nav__logo-icon {
  filter: hue-rotate(120deg);
  transform: rotate(10deg);
}

/* Add subtle animation to footer links */
.footer-section a {
  position: relative;
  overflow: hidden;
}

.footer-section a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
  opacity: 0.2;
  transition: left 0.5s;
}

.footer-section a:hover::before {
  left: 100%;
}

/* Add grid pattern to footer */
.retro-footer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
      linear-gradient(var(--neon-pink) 1px, transparent 1px),
      linear-gradient(90deg, var(--neon-pink) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.03;
  pointer-events: none;
}

/* Ensure proper z-index stacking */
.retro-nav {
  position: relative;
  z-index: 1000;
}

.main-content {
  position: relative;
  z-index: 1;
}

.retro-footer {
  position: relative;
  z-index: 2;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
}
</style>