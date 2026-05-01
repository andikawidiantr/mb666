<template>
  <main class="nyepi-page">

    <!-- Hero -->
    <section class="ny-hero">
      <div class="ny-hero__overlay"></div>
      <div class="ny-hero__pattern"></div>
      <div class="ny-hero__inner">
        <p class="ny-eyebrow">Mountain Bee 666 · Annual Event</p>
        <h1 class="ny-hero__title">Pengerupukan<br /><span class="gold">Nyepi</span></h1>
        <p class="ny-hero__desc">
          Setiap tahun, keluarga besar MB666 merayakan Pengerupukan — malam sebelum Nyepi —
          dengan membuat ogoh-ogoh dan pawai di seputar Jalan Gunung Lebah 3.
          Sebuah momen di mana tradisi, kreativitas, dan semangat kebersamaan hidup bersama.
        </p>
      </div>
    </section>

    <!-- Events list -->
    <section class="ny-events">
      <div class="ny-events__inner">

        <!-- Loading -->
        <div v-if="loading" class="ny-state">
          <div class="ny-spinner"></div>
          <p>Memuat data...</p>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="ny-state ny-state--error">
          <span class="ny-state__icon">⚠</span>
          <p>{{ error }}</p>
          <button class="ny-retry" @click="fetchEvents">Coba Lagi</button>
        </div>

        <!-- Empty -->
        <div v-else-if="!events.length" class="ny-state">
          <span class="ny-state__icon">📅</span>
          <p>Belum ada data kegiatan Nyepi.</p>
        </div>

        <!-- Events -->
        <template v-else>
          <div class="ny-section-header">
            <p class="ny-eyebrow">Dokumentasi Kegiatan</p>
            <h2 class="ny-section-title">Nyepi <span class="gold">Per Tahun</span></h2>
            <p class="ny-section-count">{{ events.length }} event </p>
          </div>

          <div class="ny-cards">
            <div
              class="ny-card"
              v-for="ev in events"
              :key="ev.id"
              :class="{ 'ny-card--open': selectedId === ev.id }"
            >
              <!-- Card header -->
              <button class="ny-card__head" @click="toggle(ev.id)">
                <div class="ny-card__head-left">
                  <span class="ny-card__name">{{ ev.name }}</span>
                </div>
                <span class="ny-card__chevron" :class="{ 'ny-card__chevron--open': selectedId === ev.id }">
                  ›
                </span>
              </button>

              <!-- Expanded body -->
              <Transition name="expand">
                <div class="ny-card__body" v-if="selectedId === ev.id">

                  <!-- Loading photos -->
                  <div v-if="loadingPhotos" class="ny-state ny-state--sm">
                    <div class="ny-spinner ny-spinner--sm"></div>
                    <p>Memuat foto...</p>
                  </div>

                  <!-- Slider -->
                  <div
                    v-else-if="photos.length"
                    class="ny-slider"
                    @mouseenter="stopAutoSlide"
                    @mouseleave="startAutoSlide"
                  >
                    <!-- Viewport -->
                    <div class="ny-slider__viewport">
                      <div class="ny-slider__track" :style="trackStyle">
                        <div
                          class="ny-slider__item"
                          v-for="(p, i) in photos"
                          :key="p.id"
                          :style="{ width: `calc(100% / ${photos.length})` }"
                          @click="openLight(p, i)"
                        >
                          <img :src="p.photo" :alt="`Foto ${ev.name} - ${i + 1}`" loading="lazy" />
                          <div class="ny-slide__overlay">
                            <span class="ny-slide__zoom">⤢</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Prev / Next -->
                    <template v-if="photos.length > 4">
                      <button class="ny-slider__btn ny-slider__btn--prev" @click.stop="prevSlide">‹</button>
                      <button class="ny-slider__btn ny-slider__btn--next" @click.stop="nextSlide">›</button>

                      <!-- Dots -->
                      <div class="ny-slider__dots">
                        <button
                          v-for="n in (maxSlide + 1)"
                          :key="n"
                          class="ny-slider__dot"
                          :class="{ active: currentSlide === n - 1 }"
                          @click.stop="goToSlide(n - 1)"
                        ></button>
                      </div>
                    </template>
                  </div>

                  <!-- No photos -->
                  <div v-else class="ny-no-photo">
                    <span>📷</span>
                    <p>Belum ada foto untuk event ini.</p>
                  </div>

                </div>
              </Transition>
            </div>
          </div>
        </template>

      </div>
    </section>

    <!-- Lightbox -->
    <Transition name="fade">
      <div class="lightbox" v-if="lightItem" @click="lightItem = null">
        <button class="lightbox__close" @click="lightItem = null">✕</button>

        <!-- Prev / Next -->
        <button
          v-if="lightIndex > 0"
          class="lightbox__nav lightbox__nav--prev"
          @click.stop="lightIndex--; lightItem = photos[lightIndex]"
        >‹</button>
        <button
          v-if="lightIndex < photos.length - 1"
          class="lightbox__nav lightbox__nav--next"
          @click.stop="lightIndex++; lightItem = photos[lightIndex]"
        >›</button>

        <div class="lightbox__content" @click.stop>
          <img :src="lightItem.photo" :alt="`Foto ${lightIndex + 1}`" />
          <p class="lightbox__counter">{{ lightIndex + 1 }} / {{ photos.length }}</p>
        </div>
      </div>
    </Transition>

  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { supabase } from '../lib/supabase'

const EVENT_TYPE_NYEPI = 1
const VISIBLE = 4

const events        = ref([])
const photos        = ref([])
const selectedId    = ref(null)
const loading       = ref(true)
const loadingPhotos = ref(false)
const error         = ref(null)
const lightItem     = ref(null)
const lightIndex    = ref(0)

/* ── Slider ── */
const currentSlide = ref(0)
let autoSlideTimer = null

const maxSlide = computed(() => Math.max(0, photos.value.length - VISIBLE))

const trackStyle = computed(() => ({
  width: `${photos.value.length * (100 / VISIBLE)}%`,
  transform: `translateX(-${currentSlide.value * (100 / photos.value.length)}%)`,
}))

function nextSlide() {
  currentSlide.value = currentSlide.value >= maxSlide.value ? 0 : currentSlide.value + 1
}

function prevSlide() {
  currentSlide.value = currentSlide.value <= 0 ? maxSlide.value : currentSlide.value - 1
}

function goToSlide(n) {
  currentSlide.value = n
}

function startAutoSlide() {
  stopAutoSlide()
  if (photos.value.length > VISIBLE) {
    autoSlideTimer = setInterval(nextSlide, 3500)
  }
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer)
  autoSlideTimer = null
}

onUnmounted(stopAutoSlide)

/* ── Convert Google Drive share URL → direct thumbnail URL ── */
function resolvePhotoUrl(url) {
  if (!url) return ''
  // handles: /file/d/FILE_ID/view  OR  /file/d/FILE_ID
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (match) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1200`
  }
  // handles: id=FILE_ID (already uc?export= format)
  const uc = url.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (uc) {
    return `https://drive.google.com/thumbnail?id=${uc[1]}&sz=w1200`
  }
  return url // non-Drive URL → pakai langsung
}

/* ── Fetch all Nyepi events from m_event where type = 1 ── */
async function fetchEvents() {
  loading.value = true
  error.value   = null

  const { data, error: err } = await supabase
    .from('m_event')
    .select('id, name, type, created_at')
    .eq('type', EVENT_TYPE_NYEPI)
    .order('created_at', { ascending: false })

  if (err) {
    console.error('[NyepiPage] fetchEvents error:', err)
    error.value = `Gagal memuat data: ${err.message} (${err.code})`
  } else {
    console.log('[NyepiPage] events fetched:', data)
    events.value = data ?? []
    if (events.value.length) selectedId.value = events.value[0].id
  }
  loading.value = false
}

/* ── Fetch photos from tb_nyepi_detail by id_m_event ── */
async function fetchPhotos(eventId) {
  loadingPhotos.value = true
  photos.value = []

  const { data, error: err } = await supabase
    .from('m_event_detail')
    .select('id, photo, created_at')
    .eq('id_m_event', eventId)
    .order('created_at', { ascending: true })

  if (err) {
    console.error('[NyepiPage] fetchPhotos error:', err)
  } else {
    console.log('[NyepiPage] photos fetched:', data)
    photos.value = (data ?? []).map(p => ({ ...p, photo: resolvePhotoUrl(p.photo) }))
  }
  loadingPhotos.value = false
}

function toggle(id) {
  selectedId.value = selectedId.value === id ? null : id
}

function openLight(item, index) {
  lightItem.value  = item
  lightIndex.value = index
}


watch(selectedId, (id) => {
  if (id) fetchPhotos(id)
  else { photos.value = []; stopAutoSlide() }
})

watch(photos, (list) => {
  currentSlide.value = 0
  stopAutoSlide()
  if (list.length > VISIBLE) startAutoSlide()
})

onMounted(fetchEvents)
</script>

<style scoped>
.nyepi-page {
  background: var(--color-bg);
  min-height: 100vh;
}

/* ── Hero ── */
.ny-hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.ny-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.88) 100%);
}

.ny-hero__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(201,169,110,0.07) 1px, transparent 0);
  background-size: 40px 40px;
}

.ny-hero__inner {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10rem 4rem 6rem;
  width: 100%;
}

.ny-eyebrow {
  font-size: 0.68rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 1rem;
}

.ny-hero__title {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both;
}

.ny-hero__desc {
  max-width: 620px;
  font-size: clamp(0.88rem, 1.2vw, 1rem);
  color: var(--color-white-80);
  line-height: 1.8;
  animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.45s both;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.gold { color: var(--color-gold); }

/* ── Events section ── */
.ny-events {
  padding: 6rem 2rem;
}

.ny-events__inner {
  max-width: 860px;
  margin: 0 auto;
}

.ny-section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.ny-section-title {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.ny-section-count {
  font-size: 0.75rem;
  color: var(--color-white-60);
  letter-spacing: 0.1em;
}

/* ── States ── */
.ny-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 2rem;
  color: var(--color-white-60);
  font-size: 0.9rem;
}

.ny-state--sm {
  padding: 2rem 1rem;
}

.ny-state--error { color: #e07070; }

.ny-state__icon { font-size: 2rem; }

.ny-retry {
  margin-top: 0.5rem;
  padding: 0.6rem 1.5rem;
  border: 1px solid var(--color-gold);
  color: var(--color-gold);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s;
}

.ny-retry:hover {
  background: var(--color-gold);
  color: #000;
}

/* Spinner */
.ny-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(201,169,110,0.2);
  border-top-color: var(--color-gold);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.ny-spinner--sm {
  width: 22px;
  height: 22px;
  border-width: 2px;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ── Cards (accordion) ── */
.ny-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ny-card {
  background: var(--color-bg-card);
  border: 1px solid rgba(201,169,110,0.1);
  overflow: hidden;
  transition: border-color 0.25s;
}

.ny-card--open {
  border-color: rgba(201,169,110,0.35);
}

.ny-card__head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.6rem 2rem;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s;
}

.ny-card__head:hover {
  background: rgba(201,169,110,0.04);
}

.ny-card__head-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  min-width: 0;
}

.ny-card__name {
  font-family: var(--font-serif);
  font-size: clamp(1.2rem, 2.5vw, 1.7rem);
  font-weight: 900;
  color: var(--color-gold);
  line-height: 1.1;
}

.ny-card__chevron {
  color: var(--color-gold);
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
  transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
}

.ny-card__chevron--open {
  transform: rotate(90deg);
}

/* Expand transition */
.expand-enter-active {
  transition: max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease 0.05s;
  max-height: 3000px;
  overflow: hidden;
}

.expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.2s ease;
  max-height: 3000px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0 !important;
  opacity: 0;
}

/* Card body */
.ny-card__body {
  padding: 1.75rem 2rem 2rem;
  border-top: 1px solid rgba(201,169,110,0.12);
}

/* No photo */
.ny-no-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2.5rem 1rem;
  color: var(--color-white-60);
  font-size: 0.85rem;
  font-style: italic;
}

.ny-no-photo span { font-size: 1.8rem; }

/* ── Slider ── */
.ny-slider {
  position: relative;
}

.ny-slider__viewport {
  overflow: hidden;
  width: 100%;
}

.ny-slider__track {
  display: flex;
  transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.ny-slider__item {
  flex-shrink: 0;
  padding-right: 4px;
  cursor: pointer;
  aspect-ratio: 4/3;
  position: relative;
  overflow: hidden;
  background: var(--color-bg-secondary);
}

.ny-slider__item:last-child { padding-right: 0; }

.ny-slider__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), filter 0.3s;
  filter: grayscale(15%);
}

.ny-slider__item:hover img {
  transform: scale(1.06);
  filter: grayscale(0%);
}

.ny-slide__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.38);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
}

.ny-slider__item:hover .ny-slide__overlay { opacity: 1; }

.ny-slide__zoom {
  font-size: 1.4rem;
  color: var(--color-gold);
}

/* Prev / Next buttons */
.ny-slider__btn {
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% - 16px)); /* above dots */
  width: 36px;
  height: 36px;
  background: rgba(0,0,0,0.7);
  border: 1px solid rgba(201,169,110,0.3);
  color: var(--color-gold);
  font-size: 1.4rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background 0.2s, border-color 0.2s;
}

.ny-slider__btn:hover {
  background: rgba(201,169,110,0.15);
  border-color: var(--color-gold);
}

.ny-slider__btn--prev { left: 6px; }
.ny-slider__btn--next { right: 6px; }

/* Dots */
.ny-slider__dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 14px;
}

.ny-slider__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(201,169,110,0.25);
  border: none;
  padding: 0;
  transition: background 0.25s, transform 0.25s;
}

.ny-slider__dot.active {
  background: var(--color-gold);
  transform: scale(1.4);
}

/* ── Lightbox ── */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  max-width: 90vw;
  padding: 2rem;
}

.lightbox__content img {
  max-width: 88vw;
  max-height: 84vh;
  object-fit: contain;
}

.lightbox__counter {
  font-size: 0.75rem;
  color: var(--color-white-60);
  letter-spacing: 0.1em;
}

.lightbox__close {
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  color: var(--color-white);
  font-size: 1.3rem;
  opacity: 0.6;
  transition: opacity 0.2s;
  padding: 0.5rem;
}

.lightbox__close:hover { opacity: 1; }

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: var(--color-white-80);
  padding: 1rem 1.25rem;
  transition: color 0.2s;
}

.lightbox__nav:hover { color: var(--color-gold); }

.lightbox__nav--prev { left: 1rem; }
.lightbox__nav--next { right: 1rem; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .ny-hero__inner {
    padding: 8rem 1.5rem 4rem;
  }

  .ny-card__head {
    padding: 1.25rem 1.25rem;
  }

  .ny-card__body {
    padding: 1.25rem;
  }

  .ny-card__num {
    font-size: 1.5rem;
    min-width: 55px;
  }

  .lightbox__nav { display: none; }
}
</style>
