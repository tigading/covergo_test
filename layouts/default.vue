<template>
  <div>
    <!-- Fixed -->
    <div
      class="__nav-bar bg-white-94 dark:bg-black-94 text-cod-gray dark:text-white w-full h-24 fixed top-0 left-1/2 transform -translate-x-1/2 z-10"
    >
      <NavBar />
    </div>
    <div
      class="fixed text-cod-gray dark:text-white rounded-md right-2.5 bottom-[10%] opacity-[0.15] hover:opacity-100 z-10 transition-all duration-100"
    >
      <ToolBars @scrollToTop="scrollToTop" />
    </div>
    <!-- Fixed -->
    <div
      class="__layout bg-white dark:bg-black text-cod-gray dark:text-white"
      data-scroll-container
    >
      <div class="__container pt-24">
        <Nuxt />
      </div>
      <div class="__footer">
        <Footer />
      </div>
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

  data() {
    return {
      scroll: undefined as any,
    };
  },

  watch: {
    '$route.fullPath': {
      handler() {
        if (typeof this.scroll !== 'undefined') {
          this.scroll.destroy();
          this.scroll = undefined;
          setTimeout(() => {
            this.$nextTick(() => {
              this.enableLocomotiveScroll();
            });
          }, 500);
        }
      },
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.enableLocomotiveScroll();
    });
  },

  methods: {
    enableLocomotiveScroll() {
      if (
        process.client &&
        typeof this.scroll === 'undefined' &&
        document.querySelector(`[data-scroll-container]`)
      ) {
        // eslint-disable-next-line new-cap
        this.scroll = new (this as any).locomotiveScroll({
          el: document.querySelector(`[data-scroll-container]`),
          smooth: true,
        });

        setTimeout(() => {
          this.scroll.update();
        }, 100);
      }
    },

    scrollToTop() {
      this.scroll.scrollTo('.__layout');
    },
  },
});
</script>
