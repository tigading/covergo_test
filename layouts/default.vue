<template>
  <div class="__layout bg-white dark:bg-black text-cod-gray dark:text-white">
    <div
      class="fixed rounded-md right-2.5 bottom-[10%] opacity-[0.15] hover:opacity-100 z-10 transition-all duration-100"
    >
      <ToolBars />
    </div>
    <div
      class="__nav-bar bg-white-94 dark:bg-black-94 w-full h-24 fixed top-0 left-1/2 transform -translate-x-1/2 z-10"
    >
      <NavBar />
    </div>
    <div class="__container pt-24">
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
