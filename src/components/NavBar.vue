<template>
  <header :class="['navbar', { scrolled: isScrolled, 'menu-open': menuOpen }]">
    <div class="navbar__inner">
      <RouterLink to="/" class="navbar__logo" @click="goHome">
        <img src="../assets/images/logomb666.png" alt="Mountain Bee 666" class="logo-img" />
      </RouterLink>

      <nav class="navbar__nav" :class="{ open: menuOpen }">
        <RouterLink to="/nyepi" @click="closeMenu">Nyepi</RouterLink>
        <RouterLink to="/agustusan" @click="closeMenu">17 Agustus</RouterLink>
        <RouterLink to="/kegiatan-sosial" @click="closeMenu">Kegiatan Sosial</RouterLink>
        <a href="#gallery" @click.prevent="goSection('#gallery')">Galery</a>
        <a href="#merch" @click.prevent="goSection('#merch')">Merch</a>
        <a href="#" @click.prevent="closeMenu">Our Services</a>
        <a href="#" @click.prevent="closeMenu">About Us</a>
      </nav>

      <button class="hamburger" @click="toggleMenu" :aria-expanded="menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router     = useRouter()
const isScrolled = ref(false)
const menuOpen   = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 60
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

function goHome() {
  closeMenu()
  if (router.currentRoute.value.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // jika di halaman lain, RouterLink to="/" otomatis navigasi + scrollBehavior handle scroll ke top
}

async function goSection(hash) {
  closeMenu()
  if (router.currentRoute.value.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  } else {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 70%, transparent 100%);
  transition: background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease;
  padding: 0 2rem;
}

.navbar.scrolled,
.navbar.menu-open {
  background: rgba(10, 10, 10, 0.97);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(0,0,0,0.8);
}

.navbar__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 110px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo-img {
  height: 78px;
  width: auto;
  object-fit: contain;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
}

.navbar__nav a {
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white-80);
  transition: color 0.2s;
  white-space: nowrap;
}

.navbar__nav a:hover,
.navbar__nav .router-link-active {
  color: var(--color-gold);
}

.btn-cta {
  flex-shrink: 0;
  padding: 0.65rem 1.5rem;
  background: transparent;
  border: 1px solid var(--color-gold);
  color: var(--color-gold);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
}

.btn-cta:hover {
  background: var(--color-gold);
  color: #000;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  margin-left: auto;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-white);
  transition: transform 0.3s, opacity 0.3s;
}

@media (max-width: 900px) {
  .navbar__nav {
    position: fixed;
    inset: 110px 0 0 0;
    background: rgba(10,10,10,0.98);
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    font-size: 1.1rem;
    display: none;
  }

  .navbar__nav.open {
    display: flex;
  }

  .navbar__nav a {
    font-size: 1rem;
  }

  .btn-cta {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .menu-open .hamburger span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .menu-open .hamburger span:nth-child(2) {
    opacity: 0;
  }

  .menu-open .hamburger span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}
</style>
