<template>
  <div class="project-card">
    <div class="w-full aspect-[3/2] relative">
      <img
        :alt="project.url"
        :src="project.cover"
        :title="project.name"
        class="h-full w-full bg-cover"
      />
    </div>
    <div class="mt-[30px]">
      <div
        class="project-card__title cursor-pointer tracking-wider hover:text-egg-blue font-bold text-title--lg"
      >
        {{ project.name }}
      </div>
      <div
        class="font-semibold text-neutral-500 md:text-lg mt-[20px] pl-4 border-[3px] border-y-0 border-r-0 border-l-egg-blue"
      >
        {{ project.category }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectCard',

  data() {
    return {
      project: {
        id: 0,
        name: 'Luca Education',
        url: '#',
        cover:
          'https://drive.google.com/uc?export=view&id=18TGmwMYzcvTL_cjl8Y-ZC0oJw4BK-mLp',
        category: 'Education Application',
      },
    };
  },
});
</script>
