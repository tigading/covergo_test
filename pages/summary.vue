<template>
  <div class="_info-page">
    <div
      class="flex flex-col items-center justify-center p-40 gap-10 bg-neutral-50"
    >
      <div class="capitalize font-bold text-3xl text-center">
        {{ $t('info.summary') }}
      </div>
      <div v-if="hasData" class="text-center">
        <div class="font-bold text-2xl">
          {{ insurance.name }}
        </div>
        <div class="mt-4">
          <span class="capitalize">{{ $t('info.name') }}:</span>
          <span class="capitalize">{{ insurance.name }}</span>
        </div>
        <div class="mt-4">
          <span class="capitalize">{{ $t('info.age') }}:</span>
          <span class="capitalize">{{ insurance.age }}</span>
        </div>
        <div class="mt-4">
          <span>{{ $t('info.whereDoYouLive') }}:</span>
          <span class="capitalize">{{ insurance.country.name }}</span>
        </div>
        <div class="mt-4">
          <span class="capitalize">{{ $t('info.package') }}:</span>
          <span class="capitalize">{{ insurance.package.name }}</span>
        </div>
        <div class="mt-4">
          <span class="capitalize">{{ $t('info.premium') }}:</span>
          <span class="capitalize">{{ premium }}</span>
        </div>
      </div>
      <div class="space-x-8">
        <button class="btn-outline-custom" @click="back">
          {{ $t('info.back') }}
        </button>
        <button class="btn-custom" @click="buy">{{ $t('info.buy') }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import { Insurance } from '~/types/Insurance';

export default Vue.extend({
  name: 'SummaryPage',

  head() {
    return {
      title: String(this.$t('info.summary') || ''),
    };
  },

  computed: {
    ...mapState('insurance', ['insuranceSelected']),
    ...mapGetters('insurance', ['premium']),

    premium(): string {
      return (
        this.insurance.age * 10 * this.insurance.package.id +
        this.insurance.country.currency
      );
    },

    insurance(): Insurance {
      const { name, age, country, package: pkg } = this.$route.query;
      return this.insuranceSelected.hasData
        ? this.insuranceSelected
        : {
            name: name ?? '',
            age: age ?? 0,
            package: pkg ?? {
              id: 1,
              name: '',
              label: '',
            },
            country: country ?? {
              id: 1,
              name: '',
              currency: '',
            },
          };
    },

    hasData(): boolean {
      return this.insurance && Object.keys(this.insurance).length !== 0;
    },
  },

  created() {
    if (!this.hasData) {
      this.$router.push('/');
    }
  },

  methods: {
    buy() {
      this.$router.push('/');
    },

    back() {
      this.$router.back();
    },
  },
});
</script>
