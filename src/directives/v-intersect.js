export default {
  mounted(el, binding) {
    const callback = binding.value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback() // Run the callback
          observer.unobserve(el) // Only trigger once
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
  },
}
