<template>
  <section id="activities" class="activities">
    <div class="activities__fade activities__fade--top"></div>
    <div class="activities__inner">

      <div class="activities__left">
        <h2 class="activities__title">Our Routine Activities</h2>
        <p class="activities__desc">
          <strong>Mountain Bee 666 (MB666)</strong> holds two signature annual events —
          <strong>Indonesian Independence Day</strong> and <strong>Pengerupukan Nyepi</strong>.
          Each activity is shaped by the ideas and creativity of the youth of Gunung Lebah 3,
          crafted to build lasting experiences for the next generation while bringing our
          community closer together in unity and harmony.
        </p>
        <!-- <a href="#" class="activities__cta">EXPLORE OUR WORK →</a> -->
      </div>

      <div class="activities__right">
        <div class="activity-card" v-for="item in items" :key="item.title">
          <div class="activity-card__header">
            <span class="activity-card__title">{{ item.title }}</span>
            <span class="activity-card__arrow">→</span>
          </div>
          <p class="activity-card__desc">{{ item.desc }}</p>
        </div>
      </div>

    </div>
    <div class="activities__panels">
      <div class="panel" v-for="panel in panels" :key="panel.label">
        <img :src="panel.img" :alt="panel.label" class="panel__img" />
        <div class="panel__overlay"></div>
        <span class="panel__label">{{ panel.label }}</span>
      </div>
    </div>

    <div class="activities__fade activities__fade--bottom"></div>
  </section>
</template>

<script setup>
const panels = [
  { label: 'About', img: new URL('../assets/images/4_1.png', import.meta.url).href },
  { label: 'Social Activities', img: new URL('../assets/images/3_1.png', import.meta.url).href },
  { label: 'Contact', img: new URL('../assets/images/5_1.png', import.meta.url).href },
]

const items = [
  {
    title: 'Pengerupukan Nyepi',
    desc: 'Every year we celebrate Pengerupukan — the eve of Nyepi — by crafting ogoh-ogoh and parading through the streets of Gunung Lebah 3. It is a moment where tradition, creativity, and community spirit come alive together.',
  },
  {
    title: 'Indonesian Independence Day',
    desc: 'On August 17th we honor Indonesia\'s independence with a series of fun competitions and celebrations for all ages. A joyful day that strengthens the bond between residents and keeps the spirit of unity burning bright.',
  },
]
</script>

<style scoped>
.activities {
  position: relative;
  background: var(--color-bg-secondary);
  padding: 6rem 2rem;
}

.activities__fade {
  position: absolute;
  left: 0;
  right: 0;
  height: 120px;
  pointer-events: none;
  z-index: 1;
}

.activities__fade--top {
  top: 0;
  background: linear-gradient(to bottom, var(--color-bg) 0%, transparent 100%);
}

.activities__fade--bottom {
  bottom: 0;
  background: linear-gradient(to top, var(--color-bg) 0%, transparent 100%);
}

.activities__inner {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 6rem;
  align-items: flex-start;
}

.activities__left {
  flex: 0 0 38%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.activities__title {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 900;
  line-height: 1.1;
  color: var(--color-white);
  text-transform: uppercase;
}

.activities__desc {
  font-size: 0.9rem;
  color: var(--color-white-60);
  line-height: 1.75;
}

.activities__desc strong {
  color: var(--color-white-80);
  font-weight: 600;
}

.activities__cta {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-gold);
  text-transform: uppercase;
  transition: color 0.2s;
  width: fit-content;
}

.activities__cta:hover {
  color: var(--color-gold-light);
}

.activities__right {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.activity-card {
  border: 1px solid rgba(255,255,255,0.15);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.2s;
}

.activity-card:hover {
  border-color: var(--color-gold);
}

.activity-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.activity-card__title {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white);
}

.activity-card__arrow {
  color: var(--color-gold);
  font-size: 1rem;
  flex-shrink: 0;
}

.activity-card__desc {
  font-size: 0.85rem;
  color: var(--color-white-60);
  line-height: 1.7;
}

.activities__panels {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
}

.panel {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
}

.panel__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: transform 0.5s ease, filter 0.4s ease;
}

.panel:hover .panel__img {
  transform: scale(1.05);
  filter: grayscale(60%);
}

.panel__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  transition: background 0.4s ease;
}

.panel:hover .panel__overlay {
  background: rgba(0, 0, 0, 0.35);
}

.panel__label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white);
}

@media (max-width: 900px) {
  .activities__inner {
    flex-direction: column;
    gap: 3rem;
  }

  .activities__left {
    flex: none;
    width: 100%;
  }

  .activities__right {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .activities__panels {
    grid-template-columns: 1fr;
  }
}
</style>
