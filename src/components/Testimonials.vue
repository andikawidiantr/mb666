<template>
  <section class="testimonials">
    <div class="testimonials__inner">
      <div class="section-header">
        <p class="section-eyebrow">Client Stories</p>
        <h2 class="section-title">What Our <span class="gold">Clients Say</span></h2>
        <p class="section-desc">Real words from our community of 23,000+ satisfied clients.</p>
      </div>

      <div class="testimonials__grid">
        <div class="review-card" v-for="r in reviews" :key="r.name">
          <div class="review-card__stars">
            <span v-for="n in 5" :key="n">★</span>
          </div>
          <p class="review-card__text">"{{ r.text }}"</p>
          <div class="review-card__author">
            <div class="author-avatar">{{ r.name[0] }}</div>
            <div>
              <strong>{{ r.name }}</strong>
              <span>{{ r.location }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonials__rating">
        <div class="rating__stars">★★★★★</div>
        <p>Rated <strong>4.9/5</strong> from 500+ reviews across Google and Instagram</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Sarah M.',
    location: 'Australia',
    text: 'Aris was absolutely amazing — the most professional tattoo experience I\'ve ever had. The studio is spotless, the team is welcoming, and my American Traditional sleeve turned out beyond my wildest dreams.',
  },
  {
    name: 'James T.',
    location: 'United Kingdom',
    text: 'Got a fine line piece from Zio and I couldn\'t be happier. The level of precision and attention to detail is unmatched. Feel completely safe knowing how seriously they take hygiene.',
  },
  {
    name: 'Mika L.',
    location: 'Japan',
    text: 'Visited HBSC during my Bali trip and it was the best decision. Yadri understood exactly what I wanted and delivered a traditional rose that is simply stunning.',
  },
  {
    name: 'Tom B.',
    location: 'United States',
    text: 'Wawan\'s script work is next level. Clean, precise, and exactly what I envisioned. The whole booking process was smooth and professional from start to finish.',
  },
  {
    name: 'Emma R.',
    location: 'Netherlands',
    text: 'The atmosphere at HBSC made me feel completely at ease for my first tattoo. The team\'s experience and warmth are evident from the moment you walk in.',
  },
  {
    name: 'Carlos P.',
    location: 'Spain',
    text: 'Came back for my third tattoo and the quality only gets better. The artists here truly care about their craft. Single-use needles and hospital-grade sterilization — you can trust them completely.',
  },
  {
    name: 'Yui K.',
    location: 'South Korea',
    text: 'Booked via Instagram and the consultation was thorough and reassuring. The final piece is exactly what I wanted — Aris has an incredible eye for color and composition.',
  },
  {
    name: 'Anna F.',
    location: 'Germany',
    text: 'My fine line botanical tattoo from HBSC is the most compliment-generating thing I own. Zio\'s work is genuinely artistry at the highest level.',
  },
  {
    name: 'Luke D.',
    location: 'Canada',
    text: 'Did my research before choosing a studio in Bali and HBSC was the clear choice. 10+ years, thousands of clients, impeccable safety — my experience confirmed every positive review.',
  },
]
</script>

<style scoped>
.testimonials {
  padding: 7rem 2rem;
  background: var(--color-bg);
}

.testimonials__inner {
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
}

.gold { color: var(--color-gold); }

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5px;
  margin-bottom: 3rem;
}

.review-card {
  background: var(--color-bg-card);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.25s, transform 0.25s;
}

.review-card:hover {
  border-bottom-color: var(--color-gold);
  transform: translateY(-3px);
}

.review-card__stars {
  color: var(--color-gold);
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.review-card__text {
  font-size: 0.875rem;
  color: var(--color-white-80);
  line-height: 1.75;
  flex: 1;
  font-style: italic;
}

.review-card__author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-gold);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.review-card__author strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-white);
}

.review-card__author span {
  font-size: 0.72rem;
  color: var(--color-white-60);
  letter-spacing: 0.05em;
}

.testimonials__rating {
  text-align: center;
  padding: 2rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-white-20);
}

.rating__stars {
  font-size: 1.5rem;
  color: var(--color-gold);
  letter-spacing: 4px;
  margin-bottom: 0.5rem;
}

.testimonials__rating p {
  font-size: 0.9rem;
  color: var(--color-white-60);
}

.testimonials__rating strong {
  color: var(--color-white);
}

@media (max-width: 900px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .testimonials__grid {
    grid-template-columns: 1fr;
  }
}
</style>
