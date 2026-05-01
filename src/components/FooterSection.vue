<template>
  <footer class="footer" ref="target" :class="{ 'in-view': inView }">
    <!-- Gold decorative top bar -->
    <div class="footer__deco"></div>

    <div class="footer__main">
      <div class="footer__brand anim-left">
        <a href="#home" class="footer__logo-wrap">
          <img src="../assets/images/logomb666.png" alt="Mountain Bee 666" class="footer__logo-img" />
        </a>
        <p class="footer__tagline">
          Brotherhood rooted in Gunung Lebah 3<br />since 2000 · Denpasar, Bali
        </p>
        <div class="footer__social">
          <a v-for="s in socials" :key="s.label" :href="s.url" target="_blank" rel="noopener" :aria-label="s.label">
            <component :is="'span'" v-html="s.icon" class="social-icon"></component>
          </a>
        </div>
        <address class="footer__address">
          <p>Jl. Gunung Lebah 3, Denpasar</p>
          <p>Bali, Indonesia</p>
        </address>
      </div>

      <div class="footer__links anim-up" style="--i:1">
        <div class="footer__col">
          <h4>Kegiatan</h4>
          <a href="#nyepi">Pengerupukan Nyepi</a>
          <a href="#activities">17 Agustus</a>
          <a href="#activities">Kegiatan Sosial</a>
        </div>
        <div class="footer__col">
          <h4>Komunitas</h4>
          <a href="#gallery">Gallery</a>
          <a href="#merch">Merch</a>
          <a href="#home">About Us</a>
        </div>
        <div class="footer__col">
          <h4>Layanan Anggota</h4>
          <a href="#home">Our Service</a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p>© {{ year }} Mountain Bee 666 (MB666). All rights reserved.</p>
      <div class="footer__legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useInView } from '../composables/useInView'
const { target, inView } = useInView(0.05)

const year = new Date().getFullYear()

const socials = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  },
]
</script>

<style scoped>
.footer {
  position: relative;
  background: var(--color-bg);
  border-top: 1px solid rgba(201,169,110,0.15);
}

.footer__deco {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
  opacity: 0.6;
}

.footer__main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2rem 3rem;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 5rem;
}

/* Brand */
.footer__logo-wrap {
  display: inline-block;
  margin-bottom: 1.25rem;
}

.footer__logo-img {
  height: 64px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.9);
  opacity: 0.9;
}

.footer__tagline {
  font-size: 0.82rem;
  color: var(--color-white-60);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.footer__social {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.footer__social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(201,169,110,0.25);
  color: var(--color-white-60);
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.footer__social a:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background: rgba(201,169,110,0.08);
}

.footer__address {
  font-style: normal;
  font-size: 0.8rem;
  color: var(--color-white-60);
  line-height: 1.8;
}

/* Links */
.footer__links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-top: 0.5rem;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__col h4 {
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 0.35rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(201,169,110,0.2);
}

.footer__col a {
  font-size: 0.84rem;
  color: var(--color-white-60);
  transition: color 0.2s, padding-left 0.2s;
}

.footer__col a:hover {
  color: var(--color-white);
  padding-left: 4px;
}

/* Bottom bar */
.footer__bottom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer__bottom p {
  font-size: 0.72rem;
  color: var(--color-white-60);
  letter-spacing: 0.04em;
}

.footer__legal {
  display: flex;
  gap: 1.5rem;
}

.footer__legal a {
  font-size: 0.7rem;
  color: var(--color-white-60);
  transition: color 0.2s;
}

.footer__legal a:hover {
  color: var(--color-gold);
}

/* ── Scroll animations ── */
.anim-left {
  opacity: 0;
  transform: translateX(-36px);
  transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
}

.anim-up {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity   0.8s cubic-bezier(0.16,1,0.3,1) calc(var(--i,0) * 0.12s),
    transform 0.8s cubic-bezier(0.16,1,0.3,1) calc(var(--i,0) * 0.12s);
}

.in-view .anim-left,
.in-view .anim-up {
  opacity: 1;
  transform: none;
}

/* Responsive */
@media (max-width: 900px) {
  .footer__main {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer__links {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 540px) {
  .footer__links {
    grid-template-columns: 1fr 1fr;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer__legal {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
