<template>
  <div
    class="_blog max-w-[1200px] mx-auto mb-[160px] md:mb-[300px] text-cod-gray dark:text-white"
  >
    <HeroPost v-if="heroPost" :data="heroPost" />
    <div
      v-for="(post, index) in posts"
      :key="post.id"
      class="mt-[160px] md:mt-[300px] md-down:px-4 px-16 xl:px-0"
    >
      <nuxt-link to="/blog/bai-viet">
        <PostCard :data="post" :reverse="index % 2 === 0" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeroPost from '~/components/modules/blogs/HeroPost.vue';
import { Post, posts } from '~/data/posts';
import PostCard from '~/components/modules/blogs/PostCard.vue';

export default Vue.extend({
  name: 'PostsPage',

  components: { PostCard, HeroPost },

  data() {
    return {
      posts,
    };
  },

  head() {
    return {
      title: 'TIGA | Blog',
    };
  },

  computed: {
    heroPost(): Post {
      return this.posts[0];
    },
  },
});
</script>
