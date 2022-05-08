<template>
  <div class="latest-post">
    <div
      class="latest-post__title text-title--md tracking-wider md:text-title font-bold text-center"
    >
      LATEST POST <span class="text-egg-blue">.</span>
    </div>
    <div class="latest-post__list mt-[60px] md:mt-[100px]">
      <div class="grid sm:grid-cols-2 gap-y-[120px] sm:gap-[60px]">
        <LatestPostCard :data="post" />
        <LatestPostCard :data="post" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LatestPostCard from '~/components/modules/blogs/LatestPostCard.vue';

export default Vue.extend({
  name: 'LatestPost',
  components: { LatestPostCard },
  data() {
    return {
      post: {
        id: 0,
        title: 'Chuẩn bị hành trang săn Job ở Singapore.',
        thumbnail:
          'https://drive.google.com/uc?export=view&id=18TGmwMYzcvTL_cjl8Y-ZC0oJw4BK-mLp',
        category: 'Chuyện khởi nghiệp',
        publishAt: '20 Janury 2022',
        type: 'video',
      },
    };
  },
});
</script>
