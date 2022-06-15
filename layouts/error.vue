<template>
  <div></div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ErrorPage',

  created() {
    this.$router.push('/');
  },
});
</script>
