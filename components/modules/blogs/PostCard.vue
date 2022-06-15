<template>
  <div
    :class="{ 'flex-row-reverse': reverse }"
    class="post-card xl-down:flex-col flex gap-[30px] md:gap-[60px]"
  >
    <div
      class="w-full aspect-[710/500] xl:max-w-[710px] overflow-hidden relative"
    >
      <img
        :alt="data.url"
        :src="data.thumbnail"
        :title="data.title"
        class="h-full w-full bg-cover"
      />
      <div
        v-if="data.type === TYPES.VIDEO"
        class="h-[70px] w-[70px] md:h-[90px] md:w-[90px] pl-1.5 rounded-full bg-white-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <span class="text-egg-blue">
          <InlineSvg
            class="h-[32px] w-[28px] md:h-[40px] md:w-[38px]"
            src="/icons/play.svg"
          />
        </span>
      </div>
    </div>
    <div
      :class="{ 'md:text-center xl:text-right': reverse }"
      class="pt-2.5 xl:w-[450px]"
    >
      <div
        :class="{ 'xl:justify-end': reverse }"
        class="flex items-center md:justify-center xl:justify-start font-semibold text-neutral-500 dark:text-neutral-300 md-down:text-sm"
      >
        {{ data.publishAt }}
        <span class="text-red-500 mx-4">
          <InlineSvg height="6" src="/icons/dot.svg" width="6"></InlineSvg>
        </span>
        {{ data.category }}
      </div>
      <div
        class="post-card__title cursor-pointer hover:text-egg-blue font-bold text-title--md md:text-title mt-4 md:mt-6 max-h-[170px]"
      >
        {{ data.title }}
      </div>
      <div class="md:flex md:justify-center xl:block">
        <button class="da-btn mt-8 text-xs md:mt-16">VIEW MORE</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Types } from '~/data/posts';

export default Vue.extend({
  name: 'PostCard',

  props: {
    data: {
      type: Object,
      required: true,
    },

    reverse: {
      type: Boolean,
      default: false,
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
.post-card {
  &__title {
    @include truncate-multiline(3);
  }
}
</style>
