<template>
  <div
    class="_nav-bar max-w-[1200px] md-down:px-4 px-16 xl:px-0 relative mx-auto h-full flex items-center justify-between relative"
  >
    <div
      class="_brand uppercase font-extrabold text-brand cursor-pointer"
      @click="$router.push('/')"
    >
      TIGA<span class="text-egg-blue">.</span>
    </div>
    <div>
      <div class="hidden md:flex items-center gap-8">
        <ul
          class="flex items-center justify-end list-none capitalize font-semibold gap-14"
        >
          <li v-for="menuItem in menu" :key="menuItem.name">
            <nuxt-link
              :class="{ 'home-router': menuItem.link === '/' }"
              :to="menuItem.link"
              class="hover:text-egg-blue"
            >
              {{ $t(`navBar.${menuItem.name}`) }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div
        class="text-cod-gray hover:text-egg-blue md:hidden cursor-pointer"
        @click="isMenuShow = true"
      >
        <InlineSvg class="h-4" src="/icons/bars.svg" />
      </div>
    </div>
    <div
      :class="isMenuShow ? '-translate-x-full' : 'translate-x-0'"
      class="md:hidden fixed h-screen w-screen bg-white -right-full top-0 flex items-center justify-center transition-all duration-500"
    >
      <div
        class="absolute top-10 right-10 text-neutral-400 hover:text-egg-blue md:hidden cursor-pointer"
      >
        <InlineSvg
          class="h-4"
          src="/icons/close.svg"
          @click="isMenuShow = false"
        />
      </div>
      <ul class="list-none capitalize font-bold text-center">
        <li v-for="menuItem in menu" :key="menuItem.name" class="text-2xl mb-8">
          <nuxt-link :to="menuItem.link" class="hover:text-egg-blue">
            {{ $t(`navBar.${menuItem.name}`) }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Menu } from '~/data/menu';

export default Vue.extend({
  name: 'NavBar',

  data() {
    return {
      isMenuShow: false,
    };
  },

  computed: {
    menu() {
      return Menu;
    },
  },
});
</script>
