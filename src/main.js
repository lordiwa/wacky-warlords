import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the 80s magazine-style design system
import './assets/design-system.css'

// Create and mount the app
const app = createApp(App)

app.use(router)

// Add global 80s theme class to body
document.body.classList.add('retro-theme')

// Add some global 80s styling to the body
const globalStyles = `
  body.retro-theme {
    margin: 0;
    padding: 0;
    font-family: 'Electrolize', 'Courier New', monospace;
    background: var(--void-black);
    color: var(--electric-cyan);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Global 80s cursor */
  * {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><polygon points="0,0 0,16 6,11 11,20 13,19 8,10 20,8" fill="%2300FFFF" stroke="%23FF00FF" stroke-width="1"/></svg>'), auto;
  }

  a, button, .retro-btn {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><polygon points="0,0 0,16 6,11 11,20 13,19 8,10 20,8" fill="%23FF00FF" stroke="%2300FFFF" stroke-width="1"/></svg>'), pointer;
  }

  /* Remove default browser styling that conflicts with 80s theme */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Global scrollbar styling */
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

  /* Firefox scrollbar */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--neon-pink) var(--void-black);
  }

  /* Selection styling */
  ::selection {
    background: var(--neon-pink);
    color: var(--void-black);
    text-shadow: none;
  }

  ::-moz-selection {
    background: var(--neon-pink);
    color: var(--void-black);
    text-shadow: none;
  }

  /* Focus styling for accessibility */
  *:focus {
    outline: 2px solid var(--neon-green);
    outline-offset: 2px;
    box-shadow: 0 0 10px var(--neon-green);
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Add subtle screen flicker effect */
  @media (prefers-reduced-motion: no-preference) {
    body.retro-theme::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 255, 255, 0.03) 2px,
          rgba(0, 255, 255, 0.03) 4px
        );
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: overlay;
      animation: screen-flicker 0.15s linear infinite;
    }
  }

  @keyframes screen-flicker {
    0% { opacity: 1; }
    98% { opacity: 1; }
    99% { opacity: 0.98; }
    100% { opacity: 1; }
  }

  /* Router transition effects */
  .router-fade-enter-active,
  .router-fade-leave-active {
    transition: all 0.3s ease;
  }

  .router-fade-enter-from,
  .router-fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* Print styles */
  @media print {
    body.retro-theme::before {
      display: none;
    }
    
    .retro-nav,
    .mobile-menu-toggle,
    .ticker-content,
    .cta-footer {
      display: none !important;
    }

    * {
      color: black !important;
      background: white !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }
  }
`

// Inject global styles
const styleSheet = document.createElement('style')
styleSheet.textContent = globalStyles
document.head.appendChild(styleSheet)

// Add loading screen with 80s styling
const loadingScreen = document.createElement('div')
loadingScreen.id = 'loading-screen'
loadingScreen.innerHTML = `
  <div class="loading-content">
    <div class="loading-skull">💀</div>
    <div class="loading-text">WACKY WARLORDS</div>
    <div class="loading-subtext">INITIALIZING BATTLEFIELD...</div>
    <div class="loading-bar">
      <div class="loading-progress"></div>
    </div>
  </div>
`

loadingScreen.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--void-black), var(--dark-purple));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  transition: all 0.5s ease;
`

const loadingContentStyle = `
  .loading-content {
    text-align: center;
    color: var(--electric-cyan);
  }

  .loading-skull {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: loading-pulse 2s ease-in-out infinite;
    filter: drop-shadow(0 0 20px var(--neon-pink));
  }

  .loading-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    color: var(--neon-pink);
    text-shadow: 0 0 20px var(--neon-pink);
    margin-bottom: 0.5rem;
    letter-spacing: 0.2em;
  }

  .loading-subtext {
    font-family: 'Electrolize', monospace;
    font-size: 0.9rem;
    color: var(--electric-cyan);
    margin-bottom: 2rem;
    letter-spacing: 0.1em;
    opacity: 0.8;
  }

  .loading-bar {
    width: 300px;
    height: 4px;
    background: var(--void-black);
    border: 2px solid var(--electric-cyan);
    border-radius: 2px;
    overflow: hidden;
    margin: 0 auto;
  }

  .loading-progress {
    height: 100%;
    background: linear-gradient(90deg, var(--neon-pink), var(--electric-cyan));
    width: 0%;
    animation: loading-progress 3s ease-out forwards;
    box-shadow: 0 0 10px var(--electric-cyan);
  }

  @keyframes loading-pulse {
    0%, 100% { transform: scale(1); filter: hue-rotate(0deg) drop-shadow(0 0 20px var(--neon-pink)); }
    50% { transform: scale(1.1); filter: hue-rotate(60deg) drop-shadow(0 0 30px var(--electric-cyan)); }
  }

  @keyframes loading-progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }

  @media (max-width: 480px) {
    .loading-text {
      font-size: 1.5rem;
    }
    
    .loading-bar {
      width: 250px;
    }
  }
`

const loadingStyleSheet = document.createElement('style')
loadingStyleSheet.textContent = loadingContentStyle
document.head.appendChild(loadingStyleSheet)

document.body.appendChild(loadingScreen)

// Remove loading screen after app mounts
app.mount('#app')

// Simulate loading time and remove screen
setTimeout(() => {
    loadingScreen.style.opacity = '0'
    loadingScreen.style.transform = 'scale(0.8)'

    setTimeout(() => {
        if (document.body.contains(loadingScreen)) {
            document.body.removeChild(loadingScreen)
        }
        if (document.head.contains(loadingStyleSheet)) {
            document.head.removeChild(loadingStyleSheet)
        }
    }, 500)
}, 3000)

// Add some interactive 80s effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click effect
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div')
        ripple.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, var(--electric-cyan), transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      animation: click-ripple 0.6s ease-out forwards;
    `
        ripple.style.left = (e.clientX - 10) + 'px'
        ripple.style.top = (e.clientY - 10) + 'px'

        document.body.appendChild(ripple)

        setTimeout(() => {
            if (document.body.contains(ripple)) {
                document.body.removeChild(ripple)
            }
        }, 600)
    })

    // Add click ripple animation
    const clickStyle = document.createElement('style')
    clickStyle.textContent = `
    @keyframes click-ripple {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
  `
    document.head.appendChild(clickStyle)
})

// Add router transition handling
router.beforeEach((to, from, next) => {
    document.body.style.opacity = '0.8'
    next()
})

router.afterEach(() => {
    setTimeout(() => {
        document.body.style.opacity = '1'
    }, 150)
})

console.log(`
╔══════════════════════════════════════════════════════════════╗
║  ██╗    ██╗ █████╗  ██████╗██╗  ██╗██╗   ██╗                ║
║  ██║    ██║██╔══██╗██╔════╝██║ ██╔╝╚██╗ ██╔╝                ║
║  ██║ █╗ ██║███████║██║     █████╔╝  ╚████╔╝                 ║
║  ██║███╗██║██╔══██║██║     ██╔═██╗   ╚██╔╝                  ║
║  ╚███╔███╔╝██║  ██║╚██████╗██║  ██╗   ██║                   ║
║   ╚══╝╚══╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝                   ║
║                                                              ║
║  ██╗    ██╗ █████╗ ██████╗ ██╗      ██████╗ ██████╗ ██████╗ ║
║  ██║    ██║██╔══██╗██╔══██╗██║     ██╔═══██╗██╔══██╗██╔══██╗║
║  ██║ █╗ ██║███████║██████╔╝██║     ██║   ██║██████╔╝██║  ██║║
║  ██║███╗██║██╔══██║██╔══██╗██║     ██║   ██║██╔══██╗██║  ██║║
║  ╚███╔███╔╝██║  ██║██║  ██║███████╗╚██████╔╝██║  ██║██████╔╝║
║   ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ║
║                                                              ║
║                    🎮 Game Initialized 🎮                   ║
║              Where Legends Battle for Second Life            ║
╚══════════════════════════════════════════════════════════════╝
`)