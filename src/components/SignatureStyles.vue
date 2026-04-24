<template>
  <section id="styles" class="styles">
    <div class="section-header">
      <p class="section-eyebrow">Our Specialties</p>
      <h2 class="section-title">Signature <span class="gold">Styles</span></h2>
      <p class="section-desc">
        Each style is mastered through years of dedicated practice,<br class="d-br" />
        ensuring every piece is a true work of art.
      </p>
    </div>

    <div class="styles__grid">
      <div class="style-card" v-for="style in styles" :key="style.title">
        <div class="style-card__image-wrap">
          <img :src="style.image" :alt="style.title" loading="lazy" />
          <div class="style-card__overlay"></div>
          <span class="style-card__badge">{{ style.badge }}</span>
        </div>
        <div class="style-card__body">
          <h3>{{ style.title }}</h3>
          <p>{{ style.desc }}</p>
          <ul>
            <li v-for="feat in style.features" :key="feat">
              <span class="arrow">→</span> {{ feat }}
            </li>
          </ul>
          <a :href="style.link" class="style-card__cta">Explore Style</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const styles = [
  {
    title: 'American Traditional',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80',
    desc: 'Bold, iconic imagery defined by thick black outlines and vibrant primary colors. Rooted in sailor tattoo heritage, this timeless art form has stood the test of time.',
    features: [
      'Thick black outlines',
      'Vibrant primary colors',
      'Iconic classic imagery',
      'Exceptional longevity',
    ],
    link: '#booking',
  },
  {
    title: 'Fine Line',
    badge: 'Modern',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80',
    desc: 'Minimalist precision work for those who prefer subtle elegance. From meaningful symbols to botanical designs and elegant script — beauty in simplicity.',
    features: [
      'Delicate, precise linework',
      'Elegant script & lettering',
      'Botanical & floral designs',
      'Minimalist compositions',
    ],
    link: '#booking',
  },
]
</script>

<style scoped>
.styles {
  padding: 7rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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
  margin-bottom: 1rem;
}

.section-desc {
  color: var(--color-white-60);
  font-size: 1rem;
  line-height: 1.7;
}

.gold { color: var(--color-gold); }

.styles__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}

.style-card {
  background: var(--color-bg-card);
  overflow: hidden;
  transition: transform 0.35s ease;
}

.style-card:hover {
  transform: translateY(-4px);
}

.style-card__image-wrap {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.style-card__image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.style-card:hover .style-card__image-wrap img {
  transform: scale(1.04);
}

.style-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
}

.style-card__badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background: var(--color-gold);
  color: #000;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
}

.style-card__body {
  padding: 2rem;
}

.style-card__body h3 {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-white);
}

.style-card__body p {
  font-size: 0.9rem;
  color: var(--color-white-60);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.style-card__body ul {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.75rem;
}

.style-card__body li {
  font-size: 0.85rem;
  color: var(--color-white-80);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.arrow {
  color: var(--color-gold);
  font-size: 0.9rem;
}

.style-card__cta {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  border-bottom: 1px solid var(--color-gold);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}

.style-card__cta:hover {
  color: var(--color-gold-light);
  border-color: var(--color-gold-light);
}

.d-br { display: block; }

@media (max-width: 768px) {
  .styles__grid {
    grid-template-columns: 1fr;
  }

  .d-br { display: none; }
}
</style>
