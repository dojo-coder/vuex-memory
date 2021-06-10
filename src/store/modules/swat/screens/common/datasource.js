
import common from '@/store/modules/swat/screens/common/common.js';

const state = () => {
  return {
    ...common.state(),
    jsdo: [],
    cursor: ''
  };
};

const mutations = {
  ...common.mutations,
  PARSE(state, records){
  },
  ADD(state, record){
  },
  DELETE(state, id) {
    
        
  },
  SET_CURSOR(state, cursor) {
  }
};

const actions = {
  ...common.actions
};

const getters = {
  ...common.getters,
  getCurrentRecord: (state) => () => {
    
  },
  getCursor: (state) => {
  }

};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};