<template>
  <div class="_error-page">
    <div
      class="flex flex-col items-center justify-center p-40 text-center gap-10 bg-neutral-50"
    >
      <div class="capitalize font-bold text-5xl">{{ $t('error.ooops') }}!</div>
      <div>
        <div>{{ $t('error.errorAgeOver') }}.</div>
        <div>{{ $t('error.errorSorry') }}.</div>
      </div>
      <div>
        <nuxt-link to="/">
          <button class="btn-custom">{{ $t('error.ok') }} :(</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ErrorPage',

  head() {
    return {
      title: String(this.$t('error.ooops') || ''),
    };
  },
});
</script>
