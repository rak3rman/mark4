<template>
  <slot />
</template>

<script>
const isElemVisible = (el) => {
  let rect = el.getBoundingClientRect()
  let elemTop = rect.top + 140 // 200 = buffer
  let elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

const handleScroll = (evt) => {
  let elements = Array.from(document.getElementsByClassName('fade-in'))
  for (let i = 0; i < elements.length; i++) {
    let elem = elements[i]
    if (isElemVisible(elem)) {
      elem.style.opacity = '1'
      elem.style.transform = 'scale(1)'
    }
  }
}

const showOnloads = (evt) => {
  let elements = Array
      .from(document.getElementsByClassName('fade-in-nav'))
      .concat(Array.from(document.getElementsByClassName('fade-in-hero')))
  for (let i = 0; i < elements.length; i++) {
    let elem = elements[i]
    elem.style.opacity = '1'
    elem.style.transform = 'scale(1)'
  }
}

export default {
  mounted() {
    // Add event listeners for scroll events
    document.addEventListener('scroll', handleScroll)
    setTimeout(handleScroll, 400)
    // Now that we are mounted, trigger onload fadein elements
    setTimeout(showOnloads, 400)
  },
  unmounted() {
    document.removeEventListener('scroll', handleScroll)
  }
}
</script>
