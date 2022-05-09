<template>
  <div class="_portfolio dark:bg-black">
    <div class="max-w-[1200px] md-down:px-4 px-16 xl:px-0 mx-auto">
      <HeroSection />
    </div>
    <div
      class="portfolio max-w-[1200px] mt-[100px] md-down:px-4 px-16 xl:px-0 mx-auto"
    >
      <div
        class="portfolio__title text-title--md tracking-wider tracking-wider md:text-title font-bold text-center"
      >
        PORTFOLIO <span class="text-egg-blue">.</span>
      </div>
      <div class="portfolio__list mt-[60px] md:mt-[100px]">
        <ProjectCard
          v-for="index in 10"
          :key="index"
          class="mb-[160px] md:mb-[300px]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeroSection from '~/components/modules/portfolios/HeroSection.vue';
import ProjectCard from '~/components/modules/portfolios/ProjectCard.vue';

export default Vue.extend({
  name: 'PortfolioPage',
  components: { ProjectCard, HeroSection },
});
</script>
