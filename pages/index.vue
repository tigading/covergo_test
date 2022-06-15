<template>
  <div class="_portfolio">
    <div class="max-w-[1200px] md-down:px-4 px-16 xl:px-0 mx-auto">
      <HeroSection />
    </div>
    <div
      class="portfolio max-w-[1200px] mt-[100px] md-down:px-4 px-16 xl:px-0 mx-auto text-cod-gray dark:text-white"
    >
      <div
        class="portfolio__title text-title--md tracking-wider tracking-wider md:text-title font-bold text-center"
        data-scroll-call="portfolio"
      >
        PORTFOLIO <span class="text-egg-blue">.</span>
      </div>
      <div class="portfolio__list mt-[60px] md:mt-[100px]">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :data="project"
          class="mb-[160px] md:mb-[300px]"
        />
      </div>
    </div>
    <div class="all-work mb-[220px] md:mb-[360px]">
      <div
        class="all-work__title text-title--md tracking-wider tracking-wider md:text-title font-bold text-center"
      >
        ALL WORK <span class="text-egg-blue">.</span>
      </div>
      <div class="all-work__list mt-[60px] md:mt-[100px]">
        <FlickityProjects :data="secondProjects" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeroSection from '~/components/modules/portfolios/HeroSection.vue';
import ProjectCard from '~/components/modules/portfolios/ProjectCard.vue';
import FlickityProjects from '~/components/modules/portfolios/FlickityProjects.vue';
import { projects, secondProjects } from '~/data/projects';

export default Vue.extend({
  name: 'PortfolioPage',

  components: { FlickityProjects, ProjectCard, HeroSection },

  data() {
    return {
      projects,
      secondProjects,
    };
  },

  head() {
    return {
      title: 'TIGA | Portfolio',
    };
  },
});
</script>
