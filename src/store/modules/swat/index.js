import screens from './screens/index.js';

const state = {
  refresh: ''
};

const mutations = {
  REFRESH(state){
    state.refresh = '';
  }
};

export default {
  state,
  mutations,
  namespaced: true,
  modules:{
    screens
  }
};