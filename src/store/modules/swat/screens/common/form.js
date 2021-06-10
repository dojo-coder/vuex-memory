import common from './common.js';

import Vue from 'vue';

const state = () => {
  return {
    ...common.state(),
    hasError: false,
    children: {},
    fieldsChanged: [],
    formInitialEnabled: null,
    type: 'form'
  };

};


const mutations = {
  ...common.mutations,
  ADD_FORM_FIELD(state, field){
        
  },
  SET_HAS_CHANGES_FIELD(state, { hasChanges, id }){
  },
  SET_HAS_ERRORS_FIELD(state, { hasErrors, id }){
  },
  SET_ENABLED_FIELDS(state, bEnabled){

  },
  SET_ENABLED(state, enabled){
    
  },
  SET_INITIAL_ENABLED(state, enabled){
  },
  SET_ENABLED_FIELD(state, { enabled, id }){
    
  },
  SET_MANDATORY(state, { mandatory, id }){
   
        
  },
  SET_ERROR_FIELD(state, { hasError, id, msg }){
    
  },
  SET_ERROR(state, hasError) {
  },
  SET_FORM_FIELD_CUSTOM_STATE(state, {id, name, options, namespace}) {
    
  },
  CLEAR_FORM_FIELD_CUSTOM_STATE(state, {id, name}) {
    
  }
};

const actions = {
  ...common.actions,
  setFormFieldDirty({ state, commit, dispatch }, { value }){
  },
  setFormFieldEnabled({ state, commit, dispatch }, { value }){
  },
  setEnabled({ state, commit, dispatch }, { value }){
    
  },
  setFormFieldMandatory({ state, commit, dispatch }, { value }){
  },
  setFormFieldErrorState({ state, getters, commit, dispatch }, { value }){
    

  },
  setFormEnabled({ state, commit, dispatch }, { value }){


  },
  setFormFieldCustomState({commit}, {value, namespace}) {
    
  },
  clearFormFieldCustomState({commit}, {value}) {
    
  }

};

const getters = {
  ...common.getters,
  getFormFieldState: (state) => ( id ) => {
    
  },
  getFormFieldEnabled: (state) => (id) => {
    

  },
  getFormFieldsDirty: (state) => () => {
    
  },
  getFormFieldMandatory: (state) => (id) => {
    
  },
  getFormFieldsMandatory: (state) => () => {
    
  },
  getFormFieldError: (state) => (id) => {
    
  },
  getFormFieldErrorMsg: (state) => (id) => {
    
  },
  getFormFieldsError: (state) => () => {
    
  },
  getCustomStates: (state) => (id) => {
    
  },
};


export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
};
