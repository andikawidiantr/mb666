<template>
  <section id="artists" class="artists">
    <div class="artists__inner">
      <div class="section-header">
        <p class="section-eyebrow">Meet The Team</p>
        <h2 class="section-title">Our <span class="gold">Artists</span></h2>
        <p class="section-desc">
          Each artist brings a unique voice and technical mastery<br class="d-br" />
          to their chosen styles.
        </p>
      </div>

      <div class="artists__grid">
        <div class="artist-card" v-for="artist in artists" :key="artist.name">
          <div class="artist-card__photo">
            <img :src="artist.photo" :alt="artist.name" loading="lazy" />
            <div class="artist-card__photo-overlay"></div>
          </div>
          <div class="artist-card__info">
            <h3>{{ artist.name }}</h3>
            <p class="artist-card__specialty">{{ artist.specialty }}</p>
            <p class="artist-card__bio">{{ artist.bio }}</p>
            <a :href="artist.ig" target="_blank" rel="noopener" class="artist-card__ig">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @{{ artist.igHandle }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const artists = [
  {
    name: 'Aris',
    specialty: 'American Traditional',
    bio: 'With over 8 years specializing in American Traditional, Aris brings bold lines and vibrant color to every piece.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    ig: 'https://www.instagram.com/hbscbali/',
    igHandle: 'hbscbali',
  },
  {
    name: 'Zio',
    specialty: 'Fine Line & Blackwork',
    bio: 'Zio\'s mastery of fine line tattooing creates intricate, delicate artwork that tells deeply personal stories.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    ig: 'https://www.instagram.com/hbscbali/',
    igHandle: 'hbscbali',
  },
  {
    name: 'Yadri',
    specialty: 'American Traditional',
    bio: 'A lifelong student of tattoo history, Yadri\'s work honors the rich tradition of sailor tattoo iconography.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    ig: 'https://www.instagram.com/hbscbali/',
    igHandle: 'hbscbali',
  },
  {
    name: 'Wawan',
    specialty: 'Fine Line & Script',
    bio: 'Wawan\'s precision and patience shine through in his script work and minimalist fine line compositions.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    ig: 'https://www.instagram.com/hbscbali/',
    igHandle: 'hbscbali',
  },
]
</script>

<style scoped>
.artists {
  background: var(--color-bg-secondary);
  padding: 7rem 2rem;
}

.artists__inner {
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
  margin-bottom: 0.75rem;
}

.section-desc {
  color: var(--color-white-60);
  line-height: 1.7;
}

.gold { color: var(--color-gold); }

.artists__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

.artist-card {
  background: var(--color-bg-card);
  overflow: hidden;
  transition: transform 0.3s;
}

.artist-card:hover {
  transform: translateY(-4px);
}

.artist-card__photo {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
}

.artist-card__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(30%);
  transition: filter 0.4s, transform 0.5s;
}

.artist-card:hover .artist-card__photo img {
  filter: grayscale(0%);
  transform: scale(1.04);
}

.artist-card__photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
}

.artist-card__info {
  padding: 1.5rem;
  border-top: 2px solid var(--color-gold);
}

.artist-card__info h3 {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.artist-card__specialty {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 0.75rem;
}

.artist-card__bio {
  font-size: 0.82rem;
  color: var(--color-white-60);
  line-height: 1.65;
  margin-bottom: 1rem;
}

.artist-card__ig {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: var(--color-white-60);
  transition: color 0.2s;
}

.artist-card__ig:hover {
  color: var(--color-gold);
}

.d-br { display: block; }

@media (max-width: 1024px) {
  .artists__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .artists__grid {
    grid-template-columns: 1fr;
  }

  .d-br { display: none; }
}
</style>
