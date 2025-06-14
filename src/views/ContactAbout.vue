<template>
  <div class="contact-about-page">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <div class="header-icon">📧</div>
        <h1>Contact Us & About Us</h1>
        <p class="page-subtitle">Meet the team behind Wacky Warlords and get in touch</p>
      </header>

      <!-- About Section -->
      <section class="about-section">
        <div class="about-content">
          <h2>About Wacky Warlords Team</h2>
          <div class="about-grid">
            <div class="about-text">
              <p>
                We are a passionate indie game development team dedicated to creating
                engaging and innovative gaming experiences. Founded in 2024, our mission
                is to bring unique and entertaining games to players worldwide.
              </p>

              <h3>Our Mission</h3>
              <p>
                To create games that bring joy, excitement, and memorable experiences
                to players of all ages. We believe in community-driven development
                and listen closely to our players' feedback.
              </p>

              <h3>Our Values</h3>
              <ul class="values-list">
                <li><strong>Community First:</strong> Players are at the heart of everything we do</li>
                <li><strong>Quality:</strong> We strive for excellence in every aspect of game development</li>
                <li><strong>Innovation:</strong> We're not afraid to try new ideas and push boundaries</li>
                <li><strong>Transparency:</strong> Open communication with our community</li>
                <li><strong>Fun:</strong> Games should be enjoyable for both players and creators</li>
              </ul>
            </div>

            <div class="team-photo">
              <div class="placeholder-image">
                <img src="https://place-hold.it/400x300/1a1a1a/4CAF50/png?text=Team+Photo" alt="Team Photo" />
                <div class="placeholder-icon">📸</div>
                <p>Team Photo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Members Section -->
      <section class="team-section">
        <h2 class="section-title">Meet the Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-photo">
              <img src="https://place-hold.it/150x150/1a1a1a/D2691E/png?text=GD" alt="Game Director" />
              <div class="placeholder-avatar">
                <span>👨‍💻</span>
              </div>
            </div>
            <div class="member-info">
              <h4>Game Director</h4>
              <p class="member-role">Lead Developer & Game Designer</p>
              <p class="member-bio">
                Visionary behind Wacky Warlords with 10+ years in game development.
                Passionate about creating strategic experiences that bring players together.
              </p>
            </div>
          </div>

          <div class="team-member">
            <div class="member-photo">
              <img src="https://place-hold.it/150x150/1a1a1a/4CAF50/png?text=AD" alt="Art Director" />
              <div class="placeholder-avatar">
                <span>🎨</span>
              </div>
            </div>
            <div class="member-info">
              <h4>Art Director</h4>
              <p class="member-role">Visual Design & Animation</p>
              <p class="member-bio">
                Creative force behind the visual identity of Wacky Warlords.
                Specializes in bringing characters and worlds to life through stunning art.
              </p>
            </div>
          </div>

          <div class="team-member">
            <div class="member-photo">
              <img src="https://place-hold.it/150x150/1a1a1a/D2691E/png?text=TL" alt="Technical Lead" />
              <div class="placeholder-avatar">
                <span>🔧</span>
              </div>
            </div>
            <div class="member-info">
              <h4>Technical Lead</h4>
              <p class="member-role">Programming & Infrastructure</p>
              <p class="member-bio">
                Technical wizard ensuring smooth gameplay and robust systems.
                Expert in real-time strategy mechanics and server architecture.
              </p>
            </div>
          </div>

          <div class="team-member">
            <div class="member-photo">
              <img src="https://place-hold.it/150x150/1a1a1a/4CAF50/png?text=AUD" alt="Audio Designer" />
              <div class="placeholder-avatar">
                <span>🎵</span>
              </div>
            </div>
            <div class="member-info">
              <h4>Audio Designer</h4>
              <p class="member-role">Sound Effects & Music</p>
              <p class="member-bio">
                Sound architect creating the epic audio landscape of battles.
                Crafts immersive soundscapes that enhance every strategic moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <h2 class="section-title">Get in Touch</h2>
        <div class="contact-grid">
          <!-- Contact Methods -->
          <div class="contact-methods">
            <h3>Contact Methods</h3>

            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h4>Email</h4>
                <p>contact@wackywarlords.com</p>
                <small>We respond within 24-48 hours</small>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">💬</div>
              <div class="contact-details">
                <h4>Discord Server</h4>
                <p>Join our community</p>
                <small>Real-time chat with players and developers</small>
                <button class="btn btn-discord">Join Discord</button>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">🐦</div>
              <div class="contact-details">
                <h4>Social Media</h4>
                <div class="social-links">
                  <button class="social-btn twitter">Twitter</button>
                  <button class="social-btn reddit">Reddit</button>
                  <button class="social-btn youtube">YouTube</button>
                </div>
                <small>Follow for updates and announcements</small>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">💼</div>
              <div class="contact-details">
                <h4>Business Inquiries</h4>
                <p>business@wackywarlords.com</p>
                <small>Press, partnerships, and collaborations</small>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-container">
            <h3>Send us a Message</h3>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Name *</label>
                <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    placeholder="Your name"
                >
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    placeholder="your.email@example.com"
                >
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Select a topic</option>
                  <option value="general">General Question</option>
                  <option value="bug">Bug Report</option>
                  <option value="feedback">Feedback/Suggestion</option>
                  <option value="support">Technical Support</option>
                  <option value="business">Business Inquiry</option>
                  <option value="press">Press/Media</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="5"
                    placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <h4>{{ faq.question }}</h4>
              <span class="faq-toggle">{{ faq.isOpen ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="faq.isOpen">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Office/Studio Info -->
      <section class="studio-info">
        <h2 class="section-title">Studio Information</h2>
        <div class="studio-grid">
          <div class="studio-details">
            <h3>Studio Location</h3>
            <p>
              <strong>Wacky Warlords Studio</strong><br>
              Remote-first development team<br>
              Building the future of strategy gaming from around the world
            </p>

            <h4>Working Hours</h4>
            <p>
              Monday - Friday: 9:00 AM - 6:00 PM (EST)<br>
              Community support available 24/7 via Discord
            </p>

            <h4>Founded</h4>
            <p>2024</p>

            <h4>Team Size</h4>
            <p>4-6 core developers + community contributors</p>

            <h4>Languages Supported</h4>
            <p>English, Spanish, French (community translations)</p>
          </div>

          <div class="studio-map">
            <div class="placeholder-map">
              <img src="https://place-hold.it/350x250/1a1a1a/4CAF50/png?text=Global+Team" alt="Global Remote Team" />
              <div class="map-icon">🌍</div>
              <p><strong>Global Remote Team</strong></p>
              <p>Developers from around the world</p>
              <div class="location-dots">
                <span class="dot">🇺🇸</span>
                <span class="dot">🇪🇸</span>
                <span class="dot">🇫🇷</span>
                <span class="dot">🇩🇪</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Contact form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// FAQ data
const faqs = ref([
  {
    question: 'How can I report a bug in the game?',
    answer: 'You can report bugs through our Discord server, email us directly, or use the contact form above with "Bug Report" as the subject.',
    isOpen: false
  },
  {
    question: 'Do you accept game suggestions from players?',
    answer: 'Absolutely! We love hearing from our community. Send us your ideas through any of our contact methods.',
    isOpen: false
  },
  {
    question: 'How often do you release updates?',
    answer: 'We aim to release updates regularly based on community feedback and development progress. Follow our social media for announcements.',
    isOpen: false
  },
  {
    question: 'Can I join the development team?',
    answer: 'We occasionally look for contributors! Send us your portfolio and what you\'d like to contribute to business@wackywarlords.com.',
    isOpen: false
  },
  {
    question: 'Is the game free to play?',
    answer: 'Yes! Wacky Warlords is free to play, supported by our amazing community through optional donations.',
    isOpen: false
  },
  {
    question: 'What platforms will the game be available on?',
    answer: 'Initially launching on PC (Windows, Mac, Linux) with mobile versions planned for the future.',
    isOpen: false
  },
  {
    question: 'How can I stay updated on development progress?',
    answer: 'Join our Discord, follow our social media, or subscribe to our newsletter for regular updates.',
    isOpen: false
  }
])

// Methods
const submitForm = async () => {
  isSubmitting.value = true

  // Simulate form submission (replace with actual implementation in production)
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log('Form submitted:', form)
  alert('Thank you for your message! We\'ll get back to you soon.')

  // Reset form
  Object.keys(form).forEach(key => form[key] = '')
  isSubmitting.value = false
}

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
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

.container {
  max-width: 1200px;
  min-width:  120vh;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-header {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--death-black) 0%, var(--ancient-brown) 100%);
  color: var(--bone-white);
  border-radius: 16px;
  margin-bottom: 4rem;
  border: 2px solid var(--mystic-green);
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 30%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
  radial-gradient(circle at 70% 70%, rgba(210, 105, 30, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.header-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px var(--orange-glow));
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--orange-glow);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  position: relative;
  z-index: 1;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  color: var(--bone-white);
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: var(--orange-glow);
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* About Section */
.about-section {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin-bottom: 4rem;
  border: 1px solid var(--shadow-gray);
}

.about-section h2 {
  color: var(--orange-glow);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.about-text h3 {
  color: var(--orange-glow);
  margin: 2rem 0 1rem 0;
  font-size: 1.3rem;
}

.about-text p {
  line-height: 1.6;
  color: var(--bone-white);
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.values-list {
  list-style: none;
  padding: 0;
}

.values-list li {
  padding: 1rem 0;
  color: var(--bone-white);
  line-height: 1.5;
  border-bottom: 1px solid var(--shadow-gray);
  opacity: 0.9;
}

.values-list li:last-child {
  border-bottom: none;
}

.values-list strong {
  color: var(--mystic-green);
}

.placeholder-image {
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--mystic-green);
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: var(--bone-white);
  position: relative;
}

.placeholder-image img {
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.placeholder-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.placeholder-image p {
  color: var(--orange-glow);
  font-weight: bold;
  margin: 0;
}

/* Team Section */
.team-section {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin-bottom: 4rem;
  border: 1px solid var(--shadow-gray);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;
  padding: 2rem;
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--mystic-green);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(76, 175, 80, 0.2);
}

.member-photo {
  position: relative;
  margin-bottom: 1.5rem;
}

.member-photo img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  border: 3px solid var(--mystic-green);
}

.placeholder-avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: rgba(210, 105, 30, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.member-info h4 {
  color: var(--orange-glow);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.member-role {
  color: var(--mystic-green);
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.member-bio {
  color: var(--bone-white);
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
}

/* Contact Section */
.contact-section {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin-bottom: 4rem;
  border: 1px solid var(--shadow-gray);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-methods h3 {
  color: var(--orange-glow);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--mystic-green);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
}

.contact-icon {
  font-size: 2rem;
  width: 50px;
  text-align: center;
  flex-shrink: 0;
  filter: drop-shadow(0 0 5px var(--orange-glow));
}

.contact-details h4 {
  color: var(--orange-glow);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contact-details p {
  color: var(--bone-white);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.contact-details small {
  color: var(--bone-white);
  font-size: 0.85rem;
  display: block;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 0.5rem;
  margin: 0.8rem 0;
  flex-wrap: wrap;
}

.social-btn {
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 6px;
  color: var(--death-black);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.twitter {
  background: #1da1f2;
}

.twitter:hover {
  background: #1991da;
  transform: translateY(-2px);
}

.reddit {
  background: #ff4500;
}

.reddit:hover {
  background: #e03d00;
  transform: translateY(-2px);
}

.youtube {
  background: #ff0000;
}

.youtube:hover {
  background: #cc0000;
  transform: translateY(-2px);
}

.btn-discord {
  background: #7289da;
  color: var(--bone-white);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-discord:hover {
  background: #5b73c4;
  transform: translateY(-2px);
}

/* Contact Form */
.contact-form-container h3 {
  color: var(--orange-glow);
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: var(--orange-glow);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--shadow-gray);
  background: var(--death-black);
  color: var(--bone-white);
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--mystic-green);
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-primary {
  background-color: var(--mystic-green);
  color: var(--death-black);
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--death-green);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* FAQ Section */
.faq-section {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin-bottom: 4rem;
  border: 1px solid var(--shadow-gray);
}

.faq-item {
  border: 1px solid var(--mystic-green);
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--orange-glow);
}

.faq-question {
  padding: 1.5rem;
  background: rgba(76, 175, 80, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background: rgba(76, 175, 80, 0.2);
}

.faq-question h4 {
  margin: 0;
  color: var(--bone-white);
  font-size: 1.1rem;
}

.faq-toggle {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--orange-glow);
  transition: transform 0.3s ease;
}

.faq-item:hover .faq-toggle {
  transform: scale(1.2);
}

.faq-answer {
  padding: 1.5rem;
  background: var(--death-black);
  border-top: 1px solid var(--shadow-gray);
}

.faq-answer p {
  margin: 0;
  color: var(--bone-white);
  line-height: 1.6;
  opacity: 0.9;
}

/* Studio Info */
.studio-info {
  background: linear-gradient(135deg, var(--dark-stone) 0%, var(--ancient-brown) 100%);
  padding: 3rem 2rem;
  border-radius: 16px;
  border: 1px solid var(--shadow-gray);
}

.studio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.studio-details h3,
.studio-details h4 {
  color: var(--orange-glow);
  margin-bottom: 0.8rem;
}

.studio-details h3 {
  font-size: 1.4rem;
}

.studio-details h4 {
  font-size: 1.1rem;
  margin-top: 2rem;
}

.studio-details p {
  color: var(--bone-white);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.studio-details strong {
  color: var(--mystic-green);
}

.placeholder-map {
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--mystic-green);
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: var(--bone-white);
  text-align: center;
  padding: 2rem;
  position: relative;
}

.placeholder-map img {
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.map-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px var(--mystic-green));
}

.placeholder-map p {
  margin: 0.5rem 0;
  color: var(--orange-glow);
}

.placeholder-map p:first-of-type {
  font-weight: bold;
}

.location-dots {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
}

.dot {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

.dot:nth-child(2) { animation-delay: 0.5s; }
.dot:nth-child(3) { animation-delay: 1s; }
.dot:nth-child(4) { animation-delay: 1.5s; }

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-grid,
  .contact-grid,
  .studio-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .social-links {
    justify-content: center;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
  }

  .contact-icon {
    width: auto;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.5rem;
  }

  .page-header {
    padding: 2rem 1rem;
  }

  .page-header h1 {
    font-size: 1.8rem;
  }

  .about-section,
  .team-section,
  .contact-section,
  .faq-section,
  .studio-info {
    padding: 2rem 1rem;
  }

  .team-member {
    padding: 1.5rem;
  }

  .member-photo img {
    width: 100px;
    height: 100px;
  }

  .placeholder-avatar {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }

  .faq-question {
    padding: 1rem;
  }

  .faq-answer {
    padding: 1rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.8rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>