<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Responsive',

  computed: {
    isMdScreen() {
      if (process.client) {
        return window.innerWidth <= 768;
      }
      return false;
    },
  },
});
</script>
