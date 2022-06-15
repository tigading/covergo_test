<template>
  <div>
    <client-only>
      <Flickity ref="flickity" :options="flickityOptions">
        <div
          v-for="project in data"
          :key="project.id"
          class="carousel-cell w-[70vw] sm:w-[47vw] xl:w-[25vw] aspect-[45/67] mr-[3vw]"
        >
          <component
            :is="project.url ? 'a' : 'nuxt-link'"
            :href="project.url"
            :target="{ _blank: project.url }"
            :to="`/oops?name=${project.name.toLowerCase()}`"
          >
            <div class="w-full h-full relative overflow-hidden">
              <img
                :alt="project.name"
                :src="project.cover"
                :title="project.name"
                class="h-full w-full bg-cover"
              />
            </div>
            <div class="mt-[30px]">
              <div
                class="carousel-cell__title cursor-pointer tracking-wider hover:text-egg-blue font-semibold text-title--md"
              >
                {{ project.name }}
              </div>
            </div>
          </component>
        </div>
      </Flickity>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FlickityProjects',

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.carousel-cell {
  &:hover {
    .carousel-cell__title {
      @apply text-egg-blue;
    }
  }
}
</style>
