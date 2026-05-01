import { createRouter, createWebHistory } from 'vue-router'
import HomePage           from '../pages/HomePage.vue'
import NyepiPage          from '../pages/NyepiPage.vue'
import AgustusanPage      from '../pages/AgustusanPage.vue'
import KegiatanSosialPage from '../pages/KegiatanSosialPage.vue'

const routes = [
  { path: '/',                component: HomePage,           name: 'home' },
  { path: '/nyepi',           component: NyepiPage,          name: 'nyepi' },
  { path: '/agustusan',       component: AgustusanPage,      name: 'agustusan' },
  { path: '/kegiatan-sosial', component: KegiatanSosialPage, name: 'kegiatan-sosial' },
]

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'instant' }
  },
})
