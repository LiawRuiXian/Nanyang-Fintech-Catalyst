<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from './component/Header.vue'
import Footer from './component/Footer.vue'

export default { components: { Header, Footer } }
</script>
