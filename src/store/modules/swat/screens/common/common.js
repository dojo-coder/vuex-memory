import children from './children.js';
import Vue from 'vue';

const state =  () => {
  return {
    attributes:{
      enabled: false,
      visible: true,
      hasChanges: false,
      hasErrors: false,
      changes: 0,
      errors: 0,
      hasChangesStyle: '',
      panelMSG: [],
      hasErrorsStyle: '',
      customStates: [],
      customStateChanges: 0
    }
  };
    
};

const mutations = {
  SET_ENABLED(state, enabled){
  },
  SET_VISIBLE(state, visible){
  },
  SET_HASCHANGES(state, hasChanges){
  },
  SET_HASERRORS(state, hasErrors){
  },
  INCREMENT_CHANGES(state, value){
  },
  DECREMENT_CHANGES(state, value){
  },
  INCREMENT_ERRORS(state, value){
  },
  DECREMENT_ERRORS(state, value){
  },
  SET_HASCHANGES_STYLE(state, hasChangesStyle){
    
  },
  SET_PANEL_MSG(state, {text, type, options}) {
    
  },
  REMOVE_PANEL_MSG_BY_ID(state, id) {
    
  },
  CLEAR_PANEL_MSG(state) {
    
  },
  SET_HASERRORS_STYLE(state, hasErrorsStyle){
    
  },
  SET_CUSTOM_STATE_FIELD(state, {id, name, options}) {
    
  },
  SET_CUSTOM_STATE(state, {id, name, options, namespace}) {
    
  },
  CLEAR_CUSTOM_STATE_FIELD(state, {id, name}) {
    
  },
  CLEAR_CUSTOM_STATE(state, {id, name}) {
    
  },
  CLEAR_ALL_CUSTOM_STATES(state) {
    
  },
  INCREMENT_CUSTOM_STATE(state, {getters, value, payload}) {
    
  },
  DECREMENT_CUSTOM_STATE(state, {getters, value, payload}) {
    
  }
};

const getters = {
  getVisible:(state) => () => {
  },
  hasChanges:(state) => () => {
  },
  hasChildChanges: (state) => () => {
        
  },
  getPanelMSG: (state) => () => {
  },
  getCustomStates: (state) => (id) => {
        
  },
  getCustomState: (state) => ({ id, name}) => {
    
  },
  getCustomStateByName: (state) => ({name}) => {
    
  },
  getCustomStateWithNamespace: (state) => ({id, name, namespace}) => {
    
  }
};

const actions = {
  setHasChangesStyle({ state, commit, dispatch }, { value, namespace }){
    
  },
  decrementHasChanges({ state, commit, dispatch }, { value, namespace }){
    

  },
  incrementHasChanges({ commit, dispatch }, { value, namespace }){

    

  },

  setHasChanges({ state, commit, dispatch }, { value, namespace}){

    
        
  },

  setHasErrorsStyle({ state, commit, dispatch }, { value, namespace }){
    
  },

  decrementHasErrors({ state, commit, dispatch }, { value, namespace }){
    

  },
  incrementHasErrors({ commit, dispatch }, { value, namespace }){
        
    

  },
  setHasErrors({ state, commit, dispatch }, { value, namespace}){

    
        
  },
  setPanelMSG({commit}, {value} ) {
         
  },
  removePanelMsgById({commit}, {value}) {
  },
  clearPanelMsg({commit}) {
  },
  setCustomState({getters, commit, dispatch}, {value, namespace}) {
    

  },
  clearCustomState({getters, state, commit, dispatch}, {value, namespace}) {
    
  },
  clearAllCustomStates({commit}) {
  }
};

export default {
  namespaced:true,
  state,
  mutations,
  getters,
  actions,
  modules:{
    children
  }
};
