<template>
  <section id="contact" class="contact">
    <div class="contact__inner">
      <div class="contact__info">
        <p class="section-eyebrow">Get In Touch</p>
        <h2 class="section-title">
          Start Your<br />
          <span class="gold">Tattoo Journey</span>
        </h2>
        <p class="contact__lead">
          Whether you know exactly what you want or just have a vague idea, we're here to help bring your vision to life.
        </p>

        <div class="contact__details">
          <div class="contact-item" v-for="item in contactItems" :key="item.label">
            <span class="contact-item__icon">{{ item.icon }}</span>
            <div>
              <p class="contact-item__label">{{ item.label }}</p>
              <a :href="item.href" class="contact-item__value" target="_blank" rel="noopener">
                {{ item.value }}
              </a>
            </div>
          </div>
        </div>

        <div class="contact__hours">
          <p class="hours__title">Studio Hours</p>
          <div class="hours__grid">
            <span>Monday – Saturday</span><span>10:00 AM – 8:00 PM</span>
            <span>Sunday</span><span>12:00 PM – 6:00 PM</span>
          </div>
        </div>
      </div>

      <form class="contact__form" @submit.prevent="submitForm">
        <h3>Send Us a Message</h3>

        <div class="form-group">
          <label for="name">Full Name</label>
          <input id="name" v-model="form.name" type="text" placeholder="Your name" required />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input id="email" v-model="form.email" type="email" placeholder="your@email.com" required />
        </div>

        <div class="form-group">
          <label for="style">Tattoo Style</label>
          <select id="style" v-model="form.style">
            <option value="">Select a style...</option>
            <option>American Traditional</option>
            <option>Fine Line</option>
            <option>Not Sure / Consultation</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">Your Idea</label>
          <textarea id="message" v-model="form.message" rows="4" placeholder="Describe your tattoo idea, placement, size..."></textarea>
        </div>

        <button type="submit" class="btn-submit" :disabled="submitted">
          {{ submitted ? 'Message Sent! ✓' : 'Send Message' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  style: '',
  message: '',
})

function submitForm() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.style = ''
    form.message = ''
  }, 3000)
}

const contactItems = [
  {
    icon: '◈',
    label: 'Location',
    value: 'Jl. Petitenget No.21, Seminyak, Bali',
    href: 'https://maps.google.com/?q=Seminyak+Bali',
  },
  {
    icon: '◉',
    label: 'Instagram',
    value: '@hbscbali',
    href: 'https://www.instagram.com/hbscbali/',
  },
  {
    icon: '✦',
    label: 'Email',
    value: 'info@hbscbali.com',
    href: 'mailto:info@hbscbali.com',
  },
]
</script>

<style scoped>
.contact {
  padding: 7rem 2rem;
  background: var(--color-bg);
}

.contact__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.section-eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 0.75rem;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.25rem;
}

.gold { color: var(--color-gold); }

.contact__lead {
  font-size: 0.95rem;
  color: var(--color-white-60);
  line-height: 1.75;
  margin-bottom: 2.5rem;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-item__icon {
  font-size: 1rem;
  color: var(--color-gold);
  margin-top: 1px;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}

.contact-item__label {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-white-60);
  margin-bottom: 0.2rem;
}

.contact-item__value {
  font-size: 0.9rem;
  color: var(--color-white-80);
  transition: color 0.2s;
}

.contact-item__value:hover {
  color: var(--color-gold);
}

.contact__hours {
  padding: 1.5rem;
  background: var(--color-bg-card);
  border-left: 2px solid var(--color-gold);
}

.hours__title {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 0.75rem;
}

.hours__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem 1rem;
  font-size: 0.82rem;
  color: var(--color-white-80);
}

/* Form */
.contact__form {
  background: var(--color-bg-card);
  padding: 2.5rem;
}

.contact__form h3 {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.75rem;
  color: var(--color-white);
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-white-60);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--color-white-20);
  color: var(--color-white);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255,255,255,0.25);
}

.form-group select option {
  background: #1a1a1a;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--color-gold);
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background: var(--color-gold);
  color: #000;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: background 0.2s, opacity 0.2s;
}

.btn-submit:hover:not(:disabled) {
  background: var(--color-gold-light);
}

.btn-submit:disabled {
  background: #4a3a1a;
  color: var(--color-gold);
  cursor: default;
}

@media (max-width: 900px) {
  .contact__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
