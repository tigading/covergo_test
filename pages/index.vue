<template>
  <div class="_home-page">
    <div
      class="flex flex-col items-center justify-center p-40 text-center gap-10 bg-neutral-50"
    >
      <div class="capitalize font-bold text-5xl">
        {{ $t('home.helloThere') }}!
      </div>
      <div>{{ $t('home.homeEyebrow') }}.</div>
      <div>
        <nuxt-link to="/info">
          <button class="btn-custom">{{ $t('home.start') }}</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomePage',

  data() {
    return {};
  },

  head() {
    return {
      title: String(this.$t('home.helloThere') || ''),
    };
  },
});
</script>
