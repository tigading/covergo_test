<template>
  <div class="__layout relative">
    <div class="fixed right-2.5 bottom-[10%]">
      <ToolBars />
    </div>
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
import ToolBars from '~/components/layouts/ToolBars.vue';

export default Vue.extend({
  name: 'DefaultLayout',
  components: { ToolBars, Footer, NavBar },
});
</script>
<style lang="scss" scoped>
.__nav-bar {
  background: rgba(white, 0.94);
}
</style>
