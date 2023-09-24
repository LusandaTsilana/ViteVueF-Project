<template>

<button @click="scrollToTop" id="scroll-to-top-button" aria-label="scroll"><i class="bi bi-arrow-up-square"></i></button>

</template>

<style scoped>

#scroll-to-top-button{
    position: fixed;
   
}

#scroll-to-top-button.show {
  display: block;
}

</style>

<script>

export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
      });
    }
  }
}
</script>