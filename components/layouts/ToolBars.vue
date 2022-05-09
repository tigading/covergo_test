<template>
  <div
    class="tool-bar w-12 rounded-md py-4 flex flex-col items-center justify-center gap-6 opacity-20 hover:opacity-100"
  >
    <div class="tool-bar__icon text-white cursor-pointer" @click="toTop">
      <InlineSvg class="h-6" src="/icons/arrow-up.svg" />
    </div>
    <div class="tool-bar__icon text-white cursor-pointer">
      <InlineSvg class="h-6 w-6" src="/icons/light-mode.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ToolBars',

  methods: {
    toTop() {
      window.scrollTo(0, 0);
    },
  },
});
</script>
<style lang="scss" scoped>
.tool-bar {
  background-color: rgba(0, 0, 0, 0.9);
  transition: all 0.1s ease;

  &__icon {
    transition: all 0.2s ease;

    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.2);
    }
  }
}
</style>
