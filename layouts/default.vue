<template>
  <div>
    <div
      class="__layout bg-white dark:bg-black text-black dark:text-white max-w-[1280px] mx-auto relative"
    >
      <div class="__nav-bar">
        <NavBar />
      </div>
      <div class="__container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '~/components/layouts/NavBar.vue';

export default Vue.extend({
  name: 'DefaultLayout',
  components: { NavBar },
});
</script>
