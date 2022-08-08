import { InsuranceState } from '~/types/Insurance';

const state = (): InsuranceState => ({
  insuranceSelected: {
    name: '',
    age: 0,
    country: {
      id: 1,
      name: '',
      currency: '',
    },
    package: {
      id: 1,
      name: '',
      label: '',
    },
    hasData: false,
  },
});

export default state;
