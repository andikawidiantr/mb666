<template>
  <section id="merch" class="artists">
    <div class="artists__overlay"></div>
    <div class="artists__pattern"></div>
    <div class="artists__inner">
      <div class="section-header">
        <!-- <p class="section-eyebrow">Look</p> -->
        <h2 class="section-title">Our <span class="gold">Merch</span></h2>
        <p class="section-desc">
          Wear your pride. Our merch is designed by and for the MB666 community —<br class="d-br" />
          limited pieces, real identity.
        </p>
        <a href="#" class="merch-cta">EXPLORE OUR Merch →</a>
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const artists = [
  {
    name: "T-Shirt Nyepi Caka 1945",
    specialty: 'The First Logo MB666',
    bio: 'Our very first limited edition tee, released to commemorate Nyepi Caka 1945. A piece of MB666 history you can wear.',
    photo: new URL('../assets/images/1st_shirt.png', import.meta.url).href,
  },
  {
    name: "T-Shirt Nyepi Caka 1946",
    specialty: 'The Gray Chapter',
    bio: 'Our very first limited edition tee, released to commemorate Nyepi Caka 1945. A piece of MB666 history you can wear.',
    photo: new URL('../assets/images/1st_shirt.png', import.meta.url).href,
  },
  {
    name: "T-Shirt Nyepi Caka 1947",
    specialty: 'The First Logo MB666',
    bio: 'Our very first limited edition tee, released to commemorate Nyepi Caka 1945. A piece of MB666 history you can wear.',
    photo: new URL('../assets/images/3rd_tshirt.jpeg', import.meta.url).href,
  },
  {
    name: "T-Shirt Nyepi Caka 1948",
    specialty: 'The White Fang',
    bio: 'Our very first limited edition tee, released to commemorate Nyepi Caka 1945. A piece of MB666 history you can wear.',
    photo: new URL('../assets/images/4th_tshirt.jpeg', import.meta.url).href,
  },
]
</script>

<style scoped>
.artists {
  position: relative;
  background: transparent;
  overflow: hidden;
  padding: 7rem 2rem;
}

.artists__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.75) 0%,
    rgba(0,0,0,0.55) 40%,
    rgba(0,0,0,0.80) 100%
  );
  pointer-events: none;
}

.artists__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(201,169,110,0.06) 1px, transparent 0);
  background-size: 40px 40px;
  pointer-events: none;
}

.artists__inner {
  position: relative;
  z-index: 2;
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

.merch-cta {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-gold);
  text-transform: uppercase;
  transition: color 0.2s;
}

.merch-cta:hover {
  color: var(--color-gold-light);
}

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
