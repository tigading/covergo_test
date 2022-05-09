<template>
  <div>
    <Flickity ref="flickity" :options="flickityOptions">
      <div
        v-for="index in 10"
        :key="index"
        class="carousel-cell w-[70vw] sm:w-[47vw] xl:w-[25vw] aspect-[45/67] mr-[3vw]"
      >
        <div class="w-full h-full relative">
          <img
            :alt="project.url"
            :src="project.cover"
            :title="project.name"
            class="h-full w-full bg-cover"
          />
        </div>
        <div class="mt-[30px]">
          <div
            class="project-card__title cursor-pointer tracking-wider hover:text-egg-blue font-semibold text-title--md"
          >
            {{ project.name }}
          </div>
        </div>
      </div>
    </Flickity>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FlickityProjects',

  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
      },
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
