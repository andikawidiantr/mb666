import { ref, onMounted, onUnmounted } from 'vue'

export function useInView(threshold = 0.12) {
  const target = ref(null)
  const inView = ref(false)
  let obs

  onMounted(() => {
    obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView.value = true
          obs.disconnect()
        }
      },
      { threshold }
    )
    if (target.value) obs.observe(target.value)
  })

  onUnmounted(() => obs?.disconnect())

  return { target, inView }
}
