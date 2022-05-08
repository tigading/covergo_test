<template>
  <div
    class="_footer flex flex-col items-center justify-center text-center gap-[30px] pt-[120px] pb-[60px] bg-neutral-100 text-cod-gray"
  >
    <div class="text-title--md md:text-title--lg font-semibold">
      DINH HOANG TUAN
    </div>
    <div class="_footer__email">
      <a href="mailto:tuandh7x@gmail.com">tuandh7x@gmail.com</a>
    </div>
    <div class="flex items-center justify-center gap-5">
      <a href="https://facebook.com/tigading7" target="_blank">
        <div
          class="social__icon h-[50px] w-[50px] flex items-center justify-center text-cod-gray"
        >
          <InlineSvg class="h-4 md:h-5" src="/icons/facebook-icon.svg" />
        </div>
      </a>
      <a href="https://instagram.com/tigading7" target="_blank">
        <div
          class="social__icon h-[50px] w-[50px] flex items-center justify-center text-cod-gray"
        >
          <InlineSvg class="h-4 md:h-5" src="/icons/instagram-icon.svg" />
        </div>
      </a>
      <a href="https://twitter.com/tigading7" target="_blank">
        <div
          class="social__icon h-[50px] w-[50px] flex items-center justify-center text-cod-gray"
        >
          <InlineSvg class="h-4 md:h-5" src="/icons/twitter-icon.svg" />
        </div>
      </a>
      <a href="https://linkedin.com/in/dinh-hoang-tuan" target="_blank">
        <div
          class="social__icon h-[50px] w-[50px] flex items-center justify-center text-cod-gray"
        >
          <InlineSvg class="h-4 md:h-5" src="/icons/linkedin-icon.svg" />
        </div>
      </a>
    </div>
    <div class="text-sm text-neutral-500">
      <div>Designed & Developed by Tiga Ding</div>
      <div class="mt-2">All rights reserved 2022</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
});
</script>
<style lang="scss" scoped>
._footer__email {
  font-size: 2.4rem;
  font-family: Sacramento, sans-serif;
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    transform: scale(1.05);
  }

  @include media-breakpoint-up(md) {
    font-size: 3.6rem;
  }
}

.social__icon {
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    transform: rotate(16deg);
  }
}
</style>
