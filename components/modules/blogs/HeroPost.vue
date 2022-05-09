<template>
  <div class="hero-post relative">
    <div class="w-full aspect-[1200/750] relative">
      <img
        :alt="data.url"
        :src="data.thumbnail"
        :title="data.title"
        class="h-full w-full bg-cover"
      />
      <div
        v-if="data.type === TYPES.VIDEO"
        class="lg-down:hidden h-[90px] w-[90px] pl-2 rounded-full bg-white-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <span class="text-egg-blue">
          <InlineSvg class="h-[40px] md:w-[38px]" src="/icons/play.svg" />
        </span>
      </div>
    </div>
    <div
      class="hero-post__des bg-white-90 dark:bg-black-94 absolute xl:w-[600px] bottom-0 p-6 md:p-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[60px]"
    >
      <div
        class="flex items-center font-semibold text-neutral-500 dark:text-neutral-300 md-down:text-sm"
      >
        {{ data.publishAt }}
        <span class="text-red-500 mx-4">
          <InlineSvg height="6" src="/icons/dot.svg" width="6" />
        </span>
        {{ data.category }}
      </div>
      <div
        class="hero-post__title cursor-pointer hover:text-egg-blue font-bold text-title--md md:text-title mt-4 md:mt-6 max-h-[120px]"
      >
        {{ data.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Types } from '~/data/posts';

export default Vue.extend({
  name: 'HeroPost',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    TYPES() {
      return Types;
    },
  },
});
</script>
<style lang="scss" scoped>
.hero-post {
  &__des {
    @include media-breakpoint-down(md) {
      width: calc(100% - 32px);
    }
  }

  &__title {
    @include truncate-multiline(2);
  }
}
</style>
