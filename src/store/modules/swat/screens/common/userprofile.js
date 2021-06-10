import _find from 'lodash/find';
import _findIndex from 'lodash/findIndex';
const state = () => {
  return {
    layout: {
      settings: [] 
    },
    grid: {
      settings: []
    },
    form: {
      settings: []
    },
    theme: {
      key: '',
      selfhdl: ''
    }
  };
};


const mutations = {
    
  REMOVE_LAYOUT_SETTING(state, { id }){
    
  },
  ADD_LAYOUT_SETTING(state, obj){
  },
  UPDATE_LAYOUT_SETTING(state, { id, newSettings}){
    
  },
  ADD_GRID_SETTING(state, obj){
  },
  UPDATE_GRID_SETTING(state, { id, newSettings}){
    
  },
  ADD_FORM_SETTING(state, obj){
  },
  UPDATE_FORM_SETTING(state, { id, newSettings}){
    
  },
  LOAD_SETTINGS(state, settings){

  },
  LOAD_LAYOUT_SETTINGS(state, settings){
  },
  LOAD_GRID_SETTINGS(state, settings){
  },
  LOAD_FORM_SETTINGS(state, settings){
  },
  SET_USER_ACTIVE_THEME(state, theme) {
  }
};

const actions = {
  setLayoutObjectSettings({ state, commit }, objSettings){
    
  },
  setGridObjectSettings({ state, commit }, objSettings){
    
  },
  setFormObjectSettings({ state, commit }, objSettings){
    
  }
};

const getters = {
  getUserProfileLayoutSettings: (state) => () => {
  },
  getLayoutObjectSetting: (state) => ( id ) => {

  },
  getGridProfileLayoutSettings: (state) => () => {
  },
  getGridObjectSetting: (state) => ( id ) => {

  },
  getFormObjectSetting: (state) => ( id ) => {

  },
  getUserActiveTheme(state) {
  }
};


export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
};