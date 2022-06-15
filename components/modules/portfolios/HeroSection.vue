<template>
  <div
    class="hero-section text-cod-gray dark:text-white w-full pt-[80px] md:pt-[100px] pb-[100px] flex flex-col-reverse md:flex-row items-center justify-between"
  >
    <div>
      <div
        class="text-brand-hero--md lg:text-brand-hero font-extrabold md-down:mt-8"
      >
        <div class="capitalize md-down:text-center">
          Hello<span class="text-egg-blue">.</span>
        </div>
        <div class="uppercase md-down:text-center" data-aos-duration="1200">
          I'm DINH
        </div>
        <div class="uppercase md-down:text-center" data-aos-duration="1400">
          HOANG TUAN<span class="text-egg-blue">.</span>
        </div>
      </div>
      <div
        class="mt-[50px] lg:mt-[80px] md-down:flex md-down:items-center md-down:justify-center"
      >
        <nuxt-link to="/contact">
          <button class="mx-auto da-btn text-xs">GET IN TOUCH</button>
        </nuxt-link>
      </div>
    </div>
    <div
      class="w-[80%] md:w-1/2 aspect-[29/30] md:p-4 lg:p-10"
      data-aos-duration="600"
    >
      <img
        alt="tiga-ding "
        class="h-full w-full bg-cover not-hover"
        src="@/assets/images/backgrounds/tiga.svg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Responsive from '~/mixins/Responsive.vue';

export default Vue.extend({
  name: 'HeroSection',

  mixins: [Responsive],
});
</script>
