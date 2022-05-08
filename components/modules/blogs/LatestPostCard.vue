<template>
  <div class="latest-post-card">
    <div class="w-full aspect-[3/2] relative">
      <img
        :alt="data.url"
        :src="data.thumbnail"
        :title="data.title"
        class="h-full w-full bg-cover"
      />
      <div
        v-if="data.type === TYPES.VIDEO"
        class="h-[70px] w-[70px] lg:h-[90px] lg:w-[90px] pl-1.5 rounded-full bg-white-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <span class="text-egg-blue">
          <InlineSvg
            class="h-[32px] w-[28px] lg:h-[40px] lg:w-[38px]"
            src="/icons/play.svg"
          />
        </span>
      </div>
    </div>
    <div class="mt-4 md:mt-6">
      <div
        class="flex items-center font-semibold text-neutral-500 lg-down:text-sm"
      >
        {{ data.publishAt }}
        <span class="text-red-500 mx-4">
          <InlineSvg height="6" src="/icons/dot.svg" width="6" />
        </span>
        {{ data.category }}
      </div>
      <div
        class="cursor-pointer hover:text-egg-blue font-bold text-title--md lg:text-title--lg mt-4 lg:mt-6 max-h-[170px]"
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
  name: 'LatestPostCard',

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
