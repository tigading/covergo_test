<template>
  <div class="__layout">
    <div
      class="__nav-bar w-full h-24 fixed top-0 left-1/2 transform -translate-x-1/2 z-10"
    >
      <NavBar />
    </div>
    <div class="__container mt-24">
      <Nuxt />
    </div>
    <div class="__footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '~/components/layouts/NavBar.vue';
import Footer from '~/components/layouts/Footer.vue';

export default Vue.extend({
  name: 'DefaultLayout',
  components: { Footer, NavBar },
});
</script>
<style lang="scss" scoped>
.__nav-bar {
  background: rgba(white, 0.94);
}
</style>
