<template>
  <div
    class="_contact min-h-screen w-full py-[120px] md-down:px-4 px-16 xl:px-0"
  >
    <div class="max-w-[1200px] mx-auto">
      <div
        class="_contact-info bg-white dark:bg-black w-full md:w-[90%] md:max-w-[600px] p-[60px]"
      >
        <div
          class="_contact-info__title text-title--md tracking-wider md:text-title font-bold"
        >
          CONTACT <span class="text-egg-blue">.</span>
        </div>
        <div class="_contact-info__content mt-10">
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div class="uppercase font-semibold">NAME</div>
            <div class="opacity-50 dark:opacity-90 sm:text-right font-medium">
              Dinh Hoang Tuan
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 gap-4"
          >
            <div class="uppercase font-semibold">ADDRESS</div>
            <div class="opacity-50 dark:opacity-90 sm:text-right font-medium">
              Can Tho, Viet Nam
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 gap-4"
          >
            <div class="uppercase font-semibold">EMAIL</div>
            <div class="opacity-50 dark:opacity-90 sm:text-right font-medium">
              tuandh7x@gmail.com
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 gap-4"
          >
            <div class="uppercase font-semibold">SOCIALS</div>
            <div class="flex items-center sm:justify-end gap-[30px]">
              <a href="https://facebook.com/tigading7" target="_blank">
                <div
                  class="social__icon flex items-center justify-center opacity-50 dark:opacity-90 hover:opacity-100 dark:hover:opacity-100"
                >
                  <InlineSvg class="h-4" src="/icons/facebook-icon.svg" />
                </div>
              </a>
              <a href="https://instagram.com/tigading7" target="_blank">
                <div
                  class="social__icon flex items-center justify-center opacity-50 dark:opacity-90 hover:opacity-100 dark:hover:opacity-100"
                >
                  <InlineSvg class="h-4" src="/icons/instagram-icon.svg" />
                </div>
              </a>
              <a href="https://twitter.com/tigading7" target="_blank">
                <div
                  class="social__icon flex items-center justify-center opacity-50 dark:opacity-90 hover:opacity-100 dark:hover:opacity-100"
                >
                  <InlineSvg class="h-4" src="/icons/twitter-icon.svg" />
                </div>
              </a>
              <a href="https://linkedin.com/in/dinh-hoang-tuan" target="_blank">
                <div
                  class="social__icon flex items-center justify-center opacity-50 dark:opacity-90 hover:opacity-100 dark:hover:opacity-100"
                >
                  <InlineSvg class="h-4" src="/icons/linkedin-icon.svg" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactPage',

  head() {
    return {
      title: 'TIGA | Contact',
    };
  },
});
</script>
<style lang="scss" scoped>
._contact {
  background: url('~/assets/images/backgrounds/contact.svg') center center
    no-repeat;
}

.social__icon {
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    transform: rotate(16deg);
  }
}
</style>
