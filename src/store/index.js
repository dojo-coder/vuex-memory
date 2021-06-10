import Vue from 'vue';
import Vuex from 'vuex';
import swat from './modules/swat';
import taskbar from './modules/taskbar';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    swat,
    taskbar
  },
  strict: debug
});