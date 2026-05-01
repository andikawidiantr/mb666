<template>
  <main>
    <HeroSection />
    <RoutineActivities />
    <WhyChooseUs />
    <GallerySection />
    <MerchSection />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroSection       from '../components/HeroSection.vue'
import RoutineActivities from '../components/RoutineActivities.vue'
import WhyChooseUs       from '../components/WhyChooseUs.vue'
import GallerySection    from '../components/GallerySection.vue'
import MerchSection      from '../components/MerchSection.vue'

onMounted(() => window.scrollTo(0, 0))
</script>
