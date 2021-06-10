
import common from '@/store/modules/swat/screens/common/common.js';

const state =  () => {
  return {
    ...common.state(),
    changedRows: []

  };
};

const mutations = {
  ...common.mutations,
  ADD_CHANGED_ROW(state, rowID){
        
  },
  REMOVE_CHANGED_ROW(state, rowID){
  },
  CLEAR_CHANGED_ROWS(state){
  }
};

const actions = {
  ...common.actions
};

const getters = {
  ...common.getters
};


export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
};