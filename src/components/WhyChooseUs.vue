<template>
  <section class="why" ref="target" :class="{ 'in-view': inView }">
    <div class="why__overlay"></div>
    <div class="why__pattern"></div>
    <div class="why__inner">
      <div class="why__text anim-left">
        <p class="section-eyebrow">Our Members' Services</p>
        <h2 class="section-title">
          What We<br />
          <span class="gold">Offer You</span>
        </h2>
        <p class="why__lead">
          Beyond community, MB666 members bring real skills and professional services to the table —
          from creative arts to automotive and tech, with even more talent spread across Denpasar.
        </p>
        <a href="#" class="btn-gold">Book Your Session</a>
      </div>

      <div class="why__features anim-right">
        <div class="why__counter">
          <span class="why__counter-num">4</span>
          <span class="why__counter-sep">/</span>
          <span class="why__counter-total">12+ Services</span>
        </div>

        <div class="feature anim-up" v-for="(f, i) in features" :key="f.title" :style="{ '--i': i }">
          <div class="feature__icon">{{ f.icon }}</div>
          <div class="feature__content">
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useInView } from '../composables/useInView'
const { target, inView } = useInView()

const features = [
  {
    icon: '◆',
    title: 'Genggonk Paint',
    desc: 'Specialist motorcycle painting and full restoration service — bringing your bike back to life with flawless finish and color.',
  },
  {
    icon: '◈',
    title: 'Yadriart',
    desc: 'Custom tattoo artistry specializing in bold traditional designs and fine line work, every piece tailored to your story.',
  },
  {
    icon: '◉',
    title: 'Jo Dealer',
    desc: 'Trusted car buying and selling service — helping you find the right vehicle or sell yours quickly and hassle-free.',
  },
  {
    icon: '✦',
    title: 'Andikawidiantr',
    desc: 'Professional web and software development — turning your ideas into clean, modern digital solutions that actually work.',
  },
]
</script>

<style scoped>
.why {
  position: relative;
  background: transparent;
  overflow: hidden;
}

.why__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.75) 100%,
    rgba(0,0,0,0.55) 100%,
    rgba(0,0,0,0.80) 100%
  );
  pointer-events: none;
}

.why__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(201,169,110,0.06) 1px, transparent 0);
  background-size: 40px 40px;
  pointer-events: none;
}

.why__inner {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 7rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
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

.why__lead {
  font-size: 0.95rem;
  color: var(--color-white-60);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.btn-gold {
  display: inline-block;
  padding: 0.85rem 2.25rem;
  background: var(--color-gold);
  color: #000;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: background 0.2s, transform 0.2s;
}

.btn-gold:hover {
  background: var(--color-gold-light);
  transform: translateY(-2px);
}

.why__features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.why__counter {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 0.3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-white-20);
}

.why__counter-num {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--color-gold);
  line-height: 1;
}

.why__counter-sep {
  font-size: 1.5rem;
  color: var(--color-white-20);
}

.why__counter-total {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-white-60);
}

.why__more {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.5rem;
  flex-wrap: wrap;
}

.why__more-text {
  font-size: 0.82rem;
  color: var(--color-white-60);
  font-style: italic;
}

.why__more-btn {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  white-space: nowrap;
  transition: color 0.2s;
}

.why__more-btn:hover {
  color: var(--color-gold-light);
}

.feature {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--color-white-20);
}

.feature:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.feature__icon {
  font-size: 1.25rem;
  color: var(--color-gold);
  flex-shrink: 0;
  margin-top: 2px;
  width: 28px;
  text-align: center;
}

.feature__content h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--color-white);
}

.feature__content p {
  font-size: 0.875rem;
  color: var(--color-white-60);
  line-height: 1.7;
}



/* ── Scroll animations ── */
.anim-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
}

.anim-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s;
}

.anim-up {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity   0.65s cubic-bezier(0.16,1,0.3,1) calc(0.2s + var(--i,0) * 0.1s),
    transform 0.65s cubic-bezier(0.16,1,0.3,1) calc(0.2s + var(--i,0) * 0.1s);
}

.in-view .anim-left,
.in-view .anim-right,
.in-view .anim-up {
  opacity: 1;
  transform: none;
}

@media (max-width: 900px) {
  .why__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 5rem 2rem;
  }
}

@media (max-width: 540px) {
  .why__banner {
    flex-wrap: wrap;
  }
}
</style>
