<template>
  <div id="app-root">
    <NavBar />
    <main>
      <HeroSection />
      <RoutineActivities />
      <WhyChooseUs />
      <GallerySection />
      <MerchSection />
      <Testimonials />
      <BookingProcess />
      <ContactSection />
    </main>
    <FooterSection />

    <Transition name="fade">
      <button v-if="showBackTop" class="back-to-top" @click="scrollTop" aria-label="Back to top">
        <img src="./assets/images/fab-removebg-preview.png" alt="Back to top" />
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import RoutineActivities from './components/RoutineActivities.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import GallerySection from './components/GallerySection.vue'
import MerchSection from './components/MerchSection.vue'
// import Testimonials from './components/Testimonials.vue'
// import BookingProcess from './components/BookingProcess.vue'
// import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const showBackTop = ref(false)

function onScroll() {
  showBackTop.value = window.scrollY > 600
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
#app-root {
  min-height: 100vh;
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  width: 60px;
  height: 60px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s, filter 0.2s;
  filter: brightness(0) invert(1) drop-shadow(0 4px 12px rgba(0,0,0,0.6));
}

.back-to-top img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.back-to-top:hover {
  transform: translateY(-4px);
  filter: brightness(0) invert(1) drop-shadow(0 8px 20px rgba(0,0,0,0.8));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
