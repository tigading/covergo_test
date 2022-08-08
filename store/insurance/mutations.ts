import { Insurance, InsuranceState } from '~/types/Insurance';

const mutations = {
  SET_INSURANCE(state: InsuranceState, payload: Insurance) {
    state.insuranceSelected = payload;
  },
};

export default mutations;
