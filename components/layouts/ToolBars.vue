<template>
  <div
    class="tool-bar bg-black-90 dark:bg-white-90 w-12 rounded-md py-4 flex flex-col items-center justify-center gap-6"
  >
    <div
      class="tool-bar__icon text-white dark:text-cod-gray cursor-pointer"
      @click="$emit('scrollToTop')"
    >
      <InlineSvg class="h-6" src="/icons/arrow-up.svg" />
    </div>
    <div
      class="tool-bar__icon text-white dark:text-cod-gray cursor-pointer"
      @click="setTheme"
    >
      <InlineSvg class="h-6 w-6" src="/icons/light-mode.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ToolBars',

  methods: {
    setTheme() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
      } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.tool-bar {
  &__icon {
    transition: all 0.2s ease;

    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.2);
    }
  }
}
</style>
