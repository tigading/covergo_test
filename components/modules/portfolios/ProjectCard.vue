<template>
  <div class="project-card">
    <component
      :is="data.url ? 'a' : 'nuxt-link'"
      :href="data.url"
      :target="{ _blank: data.url }"
      to="/coming"
    >
      <div class="w-full aspect-[3/2] relative overflow-hidden">
        <img
          :alt="data.name"
          :src="data.cover"
          :title="data.name"
          class="h-full w-full bg-cover"
        />
      </div>
      <div class="mt-[50px]">
        <div
          class="project-card__title tracking-wider hover:text-egg-blue font-bold text-2xl md:text-title--lg lg:text-title"
        >
          {{ data.name }}
        </div>
        <div
          class="md-down:flex-col md-down:items-start md-down:gap-[80px] flex items-center justify-between mt-[40px]"
        >
          <div
            class="font-semibold text-neutral-500 dark:text-neutral-300 md:text-lg pl-4 border-[3px] border-y-0 border-r-0 border-l-egg-blue"
          >
            {{ data.description }}
          </div>
          <div
            class="project-card__link flex items-center pr-2 gap-8 font-semibold text-sm uppercase tracking-widest transform transition-transform duration-150 hover:scale-105"
          >
            <span>View Project</span>
            <div class="right-left-animation">
              <InlineSvg
                class="h-6 transform rotate-90"
                src="/icons/arrow-up.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectCard',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.project-card {
  &:hover {
    .project-card__title {
      @apply text-egg-blue;
    }
  }
}
</style>
