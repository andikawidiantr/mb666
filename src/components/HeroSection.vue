<template>
  <section id="home" class="hero">
    <div class="hero__bg">
      <div class="hero__overlay"></div>
      <div class="hero__pattern"></div>
    </div>

    <div class="hero__inner">
      <div class="hero__left">
        <h1 class="hero__title">

          <span class="gold">Mountain Bee 666 </span><br />
          MB 666<br />
        </h1>
        <p class="hero__subtitle">
          A brotherhood rooted in Jalan Gunung Lebah 3 since 2000<br class="desktop-only" />
          united by community, spread across Denpasar.
        </p>
        <p class="hero__eyebrow">Est. 2000 · Denpasar, Bali</p>
      </div>

      <div class="hero__right">
        <img src="../assets/images/remove_bg_images.png" alt="HBSC Bali Tattoo" class="hero__image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.75) 0%,
    rgba(0,0,0,0.55) 40%,
    rgba(0,0,0,0.80) 100%
  );
}

.hero__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(201,169,110,0.06) 1px, transparent 0);
  background-size: 40px 40px;
}

.hero__inner {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 250px 4rem 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.hero__left {
  flex: 0 0 52%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero__eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 0;
}

.hero__title {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 2.8vw, 2.6rem);
  font-weight: 900;
  line-height: 1.15;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: var(--color-white);
}

.hero__title .gold {
  color: var(--color-gold);
}

.hero__subtitle {
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  color: var(--color-white-80);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 0.9rem 2.5rem;
  background: var(--color-gold);
  color: #000;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: background 0.2s, transform 0.2s;
}

.btn-primary:hover {
  background: var(--color-gold-light);
  transform: translateY(-2px);
}

.btn-outline {
  padding: 0.9rem 2.5rem;
  border: 1px solid rgba(255,255,255,0.4);
  color: var(--color-white);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.btn-outline:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  transform: translateY(-2px);
}

.hero__right {
  flex: 0 0 48%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__image {
  width: 100%;
  max-width: 880px;
  height: auto;
  object-fit: contain;
  mix-blend-mode: multiply;
  filter: drop-shadow(0 10px 40px rgba(0,0,0,0.5));
}

.desktop-only {
  display: block;
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 100vh;
  }

  .hero__inner {
    flex-direction: column;
    padding: 110px 2rem 3rem;
    gap: 2rem;
    text-align: center;
  }

  .hero__left {
    align-items: center;
    order: 2;
  }

  .hero__right {
    order: 1;
  }

  .hero__image {
    max-width: 280px;
  }

  .desktop-only {
    display: none;
  }
}
</style>
