<template>
  <div class="_info-page">
    <div
      class="flex flex-col items-center justify-center p-40 gap-10 bg-neutral-50"
    >
      <div class="capitalize font-bold text-3xl text-center">
        {{ $t('info.tellUsAboutYourself') }}!
      </div>
      <div class="w-full">
        <div class="max-w-md mx-auto">
          <label
            class="block text-sm font-medium text-gray-700 capitalize"
            for="name"
            >{{ $t('info.name') }}</label
          >
          <div class="mt-2">
            <input
              id="name"
              v-model="name"
              class="input-custom"
              name="name"
              placeholder="Ex: tigading"
              type="text"
            />
          </div>
        </div>
        <div class="max-w-md mx-auto mt-8">
          <label
            class="block text-sm font-medium text-gray-700 capitalize"
            for="age"
            >{{ $t('info.age') }}</label
          >
          <div class="mt-2">
            <input
              id="age"
              v-model="age"
              class="input-custom"
              name="age"
              placeholder="Ex: 20"
              type="number"
            />
          </div>
        </div>
        <div class="max-w-md mx-auto mt-8">
          <label
            class="block text-sm font-medium text-gray-700"
            for="country"
            >{{ $t('info.whereDoYouLive') }}</label
          >
          <div class="mt-2">
            <select
              id="country"
              v-model="country"
              class="input-custom"
              name="country"
            >
              <option
                v-for="country in countries"
                :key="country.id"
                :value="country"
              >
                {{ country.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="max-w-md mx-auto mt-8">
          <fieldset class="mt-4">
            <div class="space-y-4">
              <div
                v-for="pkg in packages"
                :key="pkg.id"
                class="flex items-center"
                @click="packageSelected = pkg.id"
              >
                <input
                  :checked="pkg.id === packageSelected"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  name="notification-method"
                  type="radio"
                />
                <label class="ml-3 block text-sm font-medium text-gray-700">
                  {{ pkg.label }}
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="font-bold text-2xl text-center">
        {{ $t('info.yourPremiumIs') }}:
        <span class="ml-4">{{ premium + country.currency }}</span>
      </div>
      <div class="space-x-6">
        <button class="btn-outline-custom" @click="back">
          {{ $t('info.back') }}
        </button>
        <button class="btn-custom" @click="next">{{ $t('info.next') }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Country } from '~/types/Country';
import { Package } from '~/types/Package';
import { Insurance } from '~/types/Insurance';
import countries from '~/data/options';

export default Vue.extend({
  name: 'InfoPage',

  data() {
    return {
      name: '' as string,
      age: 20 as number,
      country: countries[0] as Country,
      packageSelected: 1 as number,
      countries,
    };
  },

  head() {
    return {
      title: String(this.$t('info.insuranceInfo') || ''),
    };
  },

  computed: {
    premium(): number {
      return this.age * this.packageSelected * 10;
    },
    packages(): Package[] {
      return [
        {
          id: 1,
          name: 'Standard',
          label: 'Standard',
        },
        {
          id: 2,
          name: 'Safe',
          label: `Safe (+${this.age * 5 * this.country.id}${
            this.country.currency
          }, 50%)`,
        },
        {
          id: 3,
          name: 'Super Safe',
          label: `Super Safe (+${this.age * 7.5 * this.country.id}${
            this.country.currency
          }, 75%)`,
        },
      ];
    },
  },

  methods: {
    next() {
      if (this.age >= 100) {
        this.$router.push('/error');
      } else {
        const payload = {
          name: this.name,
          age: this.age,
          country: this.country,
          package: this.packages.find((pkg) => pkg.id === this.packageSelected),
          hasData: true,
        } as Insurance;
        this.$store.dispatch('insurance/setInsurance', payload);
        this.$router.push({
          path: '/summary',
          query: payload,
        });
      }
    },

    back() {
      this.$router.back();
    },
  },
});
</script>
