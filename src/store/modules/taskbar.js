
import common from './swat/screens/common/common.js';

import _find from 'lodash/find';

import _filter from 'lodash/filter';

const state = {
  ...common.state(),
  groups: [

  ],
  items: [

  ],

  childMaxWidth: 500,
  enabled: true,

  taskbarGroupSize: 250,
  taskbarItemSize: 250,

  selectedItemID: '',
  activeGroupID: '',
  last_selected_group: '',
  defaultAvail: '',
  screensOpenedExternally: []
};

const mutations = {
  ...common.mutations,
  REMOVE_ITEM(state, item){
    if(item.id == state.selectedItemID) 
      state.selectedItemID = '';
        

    let group = _find(state.groups, { 'id': item.parentid });
    if (group) {
      const index = group.items.findIndex(x => x.id === item.id);
      group.items.splice(index, 1);
    }

    state.items.splice(state.items.indexOf(item), 1);
  },
  SET_ENABLED(state, enabled){
    state.enabled = enabled;
  },
  ADD_ITEM(state, item){

    state.items.push(item);
    let group = _find(state.groups, { 'id': item.parentid });
    if (group) 
      group.items.push(item);
        
  },
  ADD_GROUP(state, item){
    item.items = [];
    state.groups.push(item);
  },
  REMOVE_GROUP(state, item){
    state.groups.splice(state.groups.indexOf(item), 1);

  },
  SELECT_ITEM(state, id){
    state.selectedItemID = id;
  },
  SET_ITEMS_ORDER(state, item) {

    let group = _find(state.groups, { 'id': item.parentid });
    if (group) {
      const index = group.items.findIndex(x => x.id === item.id);

      if (index !== group.items.length-1) {
        const i = group.items.splice(index, 1);
        group.items.push(i[0]);
      }   
    }
  },
  SET_ACTIVE_GROUP(state, id){
    state.activeGroupID = id;
  },
  SET_LAST_SELECTED_GROUP(state, id){
    state.last_selected_group = id;
  },
  SET_DEFAULT(state, isAvail){
    state.defaultAvail = isAvail;
  },
  SET_ACTIVE_IN_GROUP(state, opts){
    let group = _find(state.groups, { 'id': opts.parentid });
    if (group) 
      group.item_active = opts.id;
        
  }, 
  SET_LAST_ACTIVE_IN_GROUP(state, opts){
    let group = _find(state.groups, { 'id': opts.parentid });
    if (group) 
      group.item_lastActive = opts.id;
        
  },
  PARSE_GROUPS(state, groups){
    state.groups = groups;
  },
  PARSE_ITEMS(state, items){
    state.items = items;
  },
  SET_HAS_CHANGES_ITEM(state, { hasChanges, id }){
    let item = _find(state.items, { id });
    if(item) 
      item.hasChanges = hasChanges;
        
  },
  SET_HAS_ERRORS_ITEM(state, { hasErrors, id }){
    let item = _find(state.items, { id });
    if(item) 
      item.hasErrors = hasErrors;
        
  },
  UPDATE_ITEM_TITLE(state, { id , title }){
    let item = _find(state.items, { id });
    if(item) 
      item.title = title;
        
  },
  UPDATE_GROUP_TITLE(state, { id , title }){
    let group = _find(state.groups, { id });
    if(group) 
      group.title = title;
        
  },
  ADD_EXTERNAL_SCREEN_OPENED(state, { id }){
    state.screensOpenedExternally.push(id);
  },
  REMOVE_EXTERNAL_SCREEN_OPENED(state, { id }){
    const index = state.screensOpenedExternally.indexOf(id);
    state.screensOpenedExternally.splice(index, 1);
  },
  CLEAR_EXTERNAL_SCREENS(state){
    state.screensOpenedExternally = [];

    let externalItems = _filter(state.items, { externalScreen: true });

    // state.items = state.items.filter();
    state.items = state.items.filter( function( el ) {
      return externalItems.indexOf( el ) < 0;
    } );
  }

};

const actions = {
  ...common.actions,
  removeItem: (store,item) => {

    let grchildren = store.getters.getItemsForGroup(item.parentid);
    if(grchildren.length == 1){
      let gritem = store.getters.getGroupById(item.parentid);

      // reset default block
      if(gritem.id == store.state.defaultAvail) 
        store.commit('SET_DEFAULT', '');
            

      for(let it of grchildren) 
        store.commit('REMOVE_ITEM', it);
            

      // remove empty group
      store.dispatch('removeGroup', gritem);

    }else 
      store.commit('REMOVE_ITEM', item);
        

    store.dispatch('setGroup_active_lastActive', item.parentid);
        

  },

  removeItemById: (store, id) => {
    for(let childItem of store.state.items) {
      if(childItem.id == id) 
        store.dispatch('removeItem', childItem);
            
    }

  },
  addItem: (store, item) => {

    if(item.parentid == '' && store.state.defaultAvail == ''){
      let defitem = { id: Date.now(), title: '', color: '#f3f3f3', type: 'group'};
      store.commit('SET_DEFAULT', defitem.id);
      store.commit('ADD_GROUP', defitem);
      item.parentid =  store.state.defaultAvail;
    }else if(item.parentid == '' && store.state.defaultAvail != '') 
      item.parentid =  store.state.defaultAvail;
        

    store.commit('ADD_ITEM', item);

  },
  removeGroup: (store,item) => {

    let gritem = store.getters.getGroupById(item.id);

    if(gritem){
      let childrenOfGroup = store.getters.getItemsForGroup(gritem.id);
      for(let it of childrenOfGroup) 
        store.commit('REMOVE_ITEM', it);
            
      store.commit('REMOVE_GROUP', gritem);
    }


    if(item.id == store.state.defaultAvail) 
      store.commit('SET_DEFAULT', '');
        

    // select last available group and item
    if(store.state.groups.length > 0){
      const group = store.getters.getGroupById(store.state.last_selected_group) || store.getters.getGroupById(store.state.activeGroupID);
      if(group) 
        store.dispatch('selectItem', group.item_active);
            
    }

  },
  removeExternalScreenOpened: (store, { id }) => {
    store.commit('REMOVE_EXTERNAL_SCREEN_OPENED', { 
      id: `${id}_extern` 
    });
  },
  addExternalScreenOpened: (store, { id }) => {
    store.commit('ADD_EXTERNAL_SCREEN_OPENED', { 
      id: `${id}_extern` 
    });
  },

  addExternalScreenTaskbarItem: (store, { id, title, icon }) => {
    // add new external screen opened
    store.dispatch('addExternalScreenOpened', { id });
    const currentTaskbarItemID = store.state.selectedItemID;
    const currentItem = store.getters.getItemById(currentTaskbarItemID);
    store.dispatch('addItem', {
      id: currentTaskbarItemID + '_extern',
      hasChanges: false,
      type: 'item',
      externalScreen: true,
      icon,
      title,
      parentid: currentItem.parentid
    });
  },
  clearAllExternalScreens: (store) => {
    store.commit('CLEAR_EXTERNAL_SCREENS');
  },
  addSampleData: () => {

    // store.commit('PARSE_GROUPS', DummyData.groups);

    // store.commit('PARSE_ITEMS', DummyData.items);

  },
  selectItem: (store, id) => {        
    for(let item of store.state.items) {
      if(item.id == id && store.state.selectedItemID !== id){
        store.commit('SELECT_ITEM', id);
        // akioma.VueTaskbar.$emit("taskbar:selectItem", item);
        store.commit('SET_LAST_SELECTED_GROUP', item.parentid);
        store.commit('SET_ACTIVE_GROUP', item.parentid);
        store.commit('SET_ITEMS_ORDER', item);

        store.dispatch('setGroup_active_lastActive', item.parentid);
      }
    }

  },
  setLastSelected: (store, parentid) => {
    for(let group of store.state.groups) {
      if(group.id == parentid){
        store.commit('SELECT_ITEM', group.last_selected);
        store.commit('SET_LAST_SELECTED_GROUP', group.id);
      }
    }
  },
  setGroup_active_lastActive: (store, parentid) => {
    const items = store.getters.getItemsOrdered(parentid);
    if (items && items.length > 0) {
      const currentActive = items[items.length-1];
      const lastActive    = (items.length > 1) ? items[items.length-2] : items[items.length-1];
      store.commit('SET_ACTIVE_IN_GROUP', {
        parentid: currentActive.parentid,
        id: currentActive.id
      });
        
      store.commit('SET_LAST_ACTIVE_IN_GROUP', {
        parentid: lastActive.parentid,
        id: lastActive.id
      });
    }
  }
};

const getters = {
  ...common.getters,
  getItemById: (state) => (id) => {
    for(let childItem of state.items) {
      if(childItem.id == id) 
        return childItem;
            
    }

  },

  taskbarGroups(state){
    return state.groups;
  },
  taskbarItems: (state) => (activeGroupId) => {
    let taskbaritems = [];
    for(let taskbaritem of state.items) {
      if(activeGroupId === taskbaritem.parentid) 
        taskbaritems.push(taskbaritem);
            
    }



    return taskbaritems;
  },
  getItemsForGroup: (state) => (parentid) => {
    let items = [];
    for(let item of state.items) {
      if(item.parentid == parentid) 
        items.push(item);
            
    }


    return items;
  },

  getItemsOrdered: (state) => (id) => {
    for(let group of state.groups) {
      if(group.id == id) 
        return group.items;
            

    }
    return null;
  },
  getGroupById: (state) => (_id) => {
    for(let group of state.groups) {
      if(group.id == _id) 
        return group;
            
    }



    return null;
  },
    
  getActiveItemInGroup: (state, getters) => (parentid) => {
    const group = getters.getGroupById(parentid);
    if (group && group.item_active) 
      return getters.getItemById(group.item_active);
        
    return null;
  },

  getLastActiveItemInGroup: (state, getters) => (parentid) => {
    const group = getters.getGroupById(parentid);
    if (group && group.item_lastActive) 
      return getters.getItemById(group.item_lastActive);
        
    return null;
  },

  isSelected: (state) => (_id) => {
    if(!state.enabled)
      return false;
        
    return state.selectedItemID === _id;
  },
  getEnabled(state){
    return state.enabled;
  },
  isGroupActive: (state) => (groupid) => {
    if(!state.enabled)
      return false;
        

    if(state.activeGroupID == groupid) 
      return true;
    else 
      return false;
        
  },
  getActiveGroup(state){
    return state.activeGroupID;
  },
  defaultGroup(state){
    return state.defaultAvail;
  },
  getHasChangesItem: (state) => (id) => {
    let item = _find(state.items, { id });

    if(item) 
      return item.hasChanges;
    else 
      return false;
        

  },
  getHasChangesGroup: (state, getters) => (id) => {
    let items = getters.getItemsForGroup(id);

    if(items.length > 0) {
      for(let index in items){
        let el = items[index];
        if(el && el.hasChanges) 
          return true;
                
      }
    }



    return false;
  },
  getHasErrorsItem: (state) => (id) => {
    let item = _find(state.items, { id });

    if(item) 
      return item.hasErrors;
    else 
      return false;
        

  },
  getHasErrorsGroup: (state, getters) => (id) => {
    let items = getters.getItemsForGroup(id);

    if(items.length > 0) {
      for(let index in items){
        let el = items[index];
        if(el && el.hasErrors) 
          return true;
                
      }
    }



    return false;
  },
  hasExternalScreenOpened: (state) => (id) => {
    return state.screensOpenedExternally.indexOf(id) >= 0;
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};




