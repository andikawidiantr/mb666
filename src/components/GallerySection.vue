<template>
  <section id="gallery" class="gallery">
    <div class="gallery__inner">
      <div class="section-header">
        <p class="section-eyebrow">Our Work</p>
        <h2 class="section-title">The <span class="gold">Gallery</span></h2>
        <p class="section-desc">A glimpse into the art that defines us.</p>
      </div>

      <div class="gallery__grid">
        <div
          class="gallery__item"
          v-for="(img, i) in images"
          :key="i"
          :class="img.size"
          @click="openLight(img)"
        >
          <img :src="img.src" :alt="img.alt" loading="lazy" />
          <div class="gallery__item-overlay">
            <span class="gallery__item-label">{{ img.label }}</span>
          </div>
        </div>
      </div>

      <div class="gallery__cta">
        <a href="https://www.instagram.com/hbscbali/" target="_blank" rel="noopener" class="btn-outline-gold">
          View Full Gallery
        </a>
      </div>
    </div>

    <Transition name="fade">
      <div class="lightbox" v-if="lightImg" @click="lightImg = null">
        <button class="lightbox__close" @click="lightImg = null">✕</button>
        <img :src="lightImg.src" :alt="lightImg.alt" @click.stop />
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const lightImg = ref(null)

function openLight(img) {
  lightImg.value = img
}

const images = [
  { src: 'https://images.unsplash.com/photo-1590246815117-005e900af13f?w=800&q=80', alt: 'American Traditional Eagle', label: 'American Traditional', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80', alt: 'Fine Line Floral', label: 'Fine Line', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1617625802912-cde586faf331?w=600&q=80', alt: 'Traditional Rose', label: 'American Traditional', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80', alt: 'Fine Line Portrait', label: 'Fine Line', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=600&q=80', alt: 'Black Traditional', label: 'American Traditional', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&q=80', alt: 'Minimal Fine Line', label: 'Fine Line', size: 'small' },
]
</script>

<style scoped>
.gallery {
  background: var(--color-bg-secondary);
}

.gallery__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 7rem 2rem;
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
  margin-bottom: 0.75rem;
}

.section-desc {
  color: var(--color-white-60);
}

.gold { color: var(--color-gold); }

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 280px;
  gap: 3px;
}

.gallery__item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.gallery__item.large {
  grid-column: span 1;
  grid-row: span 2;
}

.gallery__item.medium {
  grid-column: span 1;
  grid-row: span 1;
}

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery__item:hover img {
  transform: scale(1.06);
}

.gallery__item-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0);
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
  transition: background 0.3s;
}

.gallery__item:hover .gallery__item-overlay {
  background: rgba(0,0,0,0.45);
}

.gallery__item-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s, transform 0.3s;
}

.gallery__item:hover .gallery__item-label {
  opacity: 1;
  transform: translateY(0);
}

.gallery__cta {
  text-align: center;
  margin-top: 3rem;
}

.btn-outline-gold {
  display: inline-block;
  padding: 0.85rem 2.25rem;
  border: 1px solid var(--color-gold);
  color: var(--color-gold);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s;
}

.btn-outline-gold:hover {
  background: var(--color-gold);
  color: #000;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
}

.lightbox__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: var(--color-white);
  font-size: 1.25rem;
  opacity: 0.7;
  transition: opacity 0.2s;
  background: none;
  border: none;
  cursor: pointer;
}

.lightbox__close:hover { opacity: 1; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }

  .gallery__item.large {
    grid-column: span 2;
  }
}

@media (max-width: 480px) {
  .gallery__grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
  }

  .gallery__item.large {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
