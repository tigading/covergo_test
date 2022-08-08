import { Insurance } from '~/types/Insurance';

const actions = {
  setInsurance({ commit }: any, payload: Insurance) {
    commit('SET_INSURANCE', payload);
  },
};

export default actions;
