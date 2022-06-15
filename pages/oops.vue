<template>
  <div
    class="flex flex-col items-center justify-center py-24 w-full md-down:px-4 px-16 xl:px-0"
  >
    <div>
      <InlineSvg
        class="md-down:w-[100px] w-[200px] dark:text-white"
        src="/images/smile.svg"
      />
    </div>
    <div
      class="mt-6 uppercase tracking-wider font-bold text-2xl md:text-title--lg lg:text-title"
    >
      Oops!
    </div>
    <div
      class="mt-3 uppercase font-medium tracking-wider text-lg md:text-xl text-center"
    >
      {{ name }} is updating...
    </div>
    <div
      class="mt-[60px] cursor-pointer flex items-center gap-8 font-semibold uppercase tracking-widest transform transition-transform duration-150 hover:scale-105"
      @click="$router.push('/')"
    >
      <div class="right-left-animation">
        <InlineSvg class="h-6 transform -rotate-90" src="/icons/arrow-up.svg" />
      </div>
      <span>Go Home</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ComingPage',

  computed: {
    name() {
      return this.$route.query.name || 'Project';
    },
  },
});
</script>
