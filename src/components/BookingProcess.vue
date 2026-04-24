<template>
  <section id="booking" class="booking">
    <div class="booking__inner">
      <div class="section-header">
        <p class="section-eyebrow">How To Get Inked</p>
        <h2 class="section-title">The Booking <span class="gold">Process</span></h2>
        <p class="section-desc">Three simple steps to your perfect tattoo.</p>
      </div>

      <div class="booking__steps">
        <div class="step" v-for="(step, i) in steps" :key="step.title">
          <div class="step__number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="step__content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
            <ul v-if="step.details">
              <li v-for="d in step.details" :key="d">
                <span class="arrow">→</span> {{ d }}
              </li>
            </ul>
          </div>
          <div class="step__connector" v-if="i < steps.length - 1"></div>
        </div>
      </div>

      <div class="booking__faq">
        <h3 class="faq__title">Frequently Asked Questions</h3>
        <div
          class="faq-item"
          v-for="faq in faqs"
          :key="faq.q"
          :class="{ open: faq.open }"
          @click="faq.open = !faq.open"
        >
          <div class="faq-item__question">
            <span>{{ faq.q }}</span>
            <span class="faq-icon">{{ faq.open ? '−' : '+' }}</span>
          </div>
          <Transition name="slide">
            <div class="faq-item__answer" v-show="faq.open">
              <p>{{ faq.a }}</p>
            </div>
          </Transition>
        </div>
      </div>

      <div class="booking__cta">
        <div class="cta-box">
          <h3>Ready to Get Started?</h3>
          <p>Reach out via Instagram DM, email, or book directly through our Calendly link.</p>
          <div class="cta-box__actions">
            <a href="https://www.instagram.com/hbscbali/" target="_blank" rel="noopener" class="btn-gold">
              Instagram DM
            </a>
            <a href="mailto:info@hbscbali.com" class="btn-outline-gold">
              Send Email
            </a>
          </div>
        </div>
        <div class="payment-info">
          <p class="payment-info__title">Accepted Payments</p>
          <div class="payment-info__methods">
            <span v-for="m in payments" :key="m">{{ m }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const steps = [
  {
    title: 'Initial Consultation',
    desc: 'Share your tattoo idea with us. We\'ll discuss placement, size, style, and design direction to bring your vision to life.',
    details: [
      'Contact via Instagram DM or email',
      'Or visit us in-studio for a walk-in consultation',
      'Reference images always welcome',
    ],
  },
  {
    title: 'Book Your Appointment',
    desc: 'Once we\'ve agreed on your design concept, we\'ll schedule your session. A deposit secures your spot.',
    details: [
      '30% non-refundable deposit required',
      'Deposit credited toward your final price',
      'Flexible scheduling available',
    ],
  },
  {
    title: 'Your Tattoo Session',
    desc: 'Come in, relax, and let our artists work their magic. We provide full aftercare guidance so your tattoo heals beautifully.',
    details: [
      'Hospital-grade sterilization',
      'Single-use needles, always',
      'Full aftercare kit & instructions',
    ],
  },
]

const faqs = reactive([
  {
    q: 'How much does a tattoo cost at HBSC?',
    a: 'Pricing varies based on size, complexity, and placement. Contact us for a custom quote — we\'ll give you an honest estimate during your consultation.',
    open: false,
  },
  {
    q: 'Is the deposit refundable?',
    a: 'The 30% deposit is non-refundable but is fully credited toward your total tattoo price. It secures your appointment time and covers initial design work.',
    open: false,
  },
  {
    q: 'How do I prepare for my tattoo session?',
    a: 'Get a good night\'s sleep, eat a full meal before your appointment, stay hydrated, and avoid alcohol for 24 hours prior. Wear comfortable clothing that provides easy access to the tattoo area.',
    open: false,
  },
  {
    q: 'What safety measures do you follow?',
    a: 'We use single-use needles, hospital-grade sterilization for all equipment, fresh ink caps for every session, and maintain the highest studio hygiene standards. Your safety is our top priority.',
    open: false,
  },
  {
    q: 'Can I walk in without an appointment?',
    a: 'Walk-ins are welcome for consultations! However, we recommend booking in advance for your actual tattoo session to ensure artist availability and adequate preparation time.',
    open: false,
  },
])

const payments = ['Cash', 'Credit Card', 'Bank Transfer']
</script>

<style scoped>
.booking {
  background: var(--color-bg-secondary);
  padding: 7rem 2rem;
}

.booking__inner {
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
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
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 0.75rem;
}

.section-desc {
  color: var(--color-white-60);
}

.gold { color: var(--color-gold); }

.booking__steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-bottom: 5rem;
  position: relative;
}

.step {
  position: relative;
  padding: 2.5rem;
  background: var(--color-bg-card);
  border-top: 2px solid var(--color-gold);
  margin-right: 2px;
}

.step:last-child {
  margin-right: 0;
}

.step__number {
  font-family: var(--font-serif);
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--color-gold);
  opacity: 0.25;
  line-height: 1;
  margin-bottom: 1rem;
}

.step__content h3 {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-white);
}

.step__content p {
  font-size: 0.875rem;
  color: var(--color-white-60);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.step__content ul {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.step__content li {
  font-size: 0.82rem;
  color: var(--color-white-80);
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.arrow { color: var(--color-gold); }

/* FAQ */
.booking__faq {
  margin-bottom: 4rem;
}

.faq__title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-white);
}

.faq-item {
  border-bottom: 1px solid var(--color-white-20);
  cursor: pointer;
  transition: border-color 0.2s;
}

.faq-item:first-of-type {
  border-top: 1px solid var(--color-white-20);
}

.faq-item.open {
  border-color: rgba(201,169,110,0.35);
}

.faq-item__question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-white-80);
  transition: color 0.2s;
}

.faq-item:hover .faq-item__question,
.faq-item.open .faq-item__question {
  color: var(--color-white);
}

.faq-icon {
  font-size: 1.25rem;
  color: var(--color-gold);
  flex-shrink: 0;
  line-height: 1;
}

.faq-item__answer {
  padding-bottom: 1.25rem;
}

.faq-item__answer p {
  font-size: 0.875rem;
  color: var(--color-white-60);
  line-height: 1.75;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s, max-height 0.3s ease;
  max-height: 200px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
}

/* CTA */
.booking__cta {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  background: var(--color-bg-card);
  padding: 3rem;
  border-left: 3px solid var(--color-gold);
}

.cta-box h3 {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.cta-box p {
  font-size: 0.875rem;
  color: var(--color-white-60);
  margin-bottom: 1.5rem;
  line-height: 1.65;
}

.cta-box__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-gold {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--color-gold);
  color: #000;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: background 0.2s;
}

.btn-gold:hover { background: var(--color-gold-light); }

.btn-outline-gold {
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 1px solid var(--color-gold);
  color: var(--color-gold);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s;
}

.btn-outline-gold:hover {
  background: var(--color-gold);
  color: #000;
}

.payment-info {
  text-align: right;
}

.payment-info__title {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-white-60);
  margin-bottom: 0.75rem;
}

.payment-info__methods {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.payment-info__methods span {
  font-size: 0.8rem;
  color: var(--color-white-80);
  font-weight: 500;
}

@media (max-width: 900px) {
  .booking__steps {
    grid-template-columns: 1fr;
  }

  .step {
    margin-right: 0;
    margin-bottom: 2px;
  }

  .booking__cta {
    grid-template-columns: 1fr;
  }

  .payment-info {
    text-align: left;
  }

  .payment-info__methods {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .payment-info__methods span::after {
    content: ' ·';
    color: var(--color-gold);
  }

  .payment-info__methods span:last-child::after {
    content: '';
  }
}
</style>
