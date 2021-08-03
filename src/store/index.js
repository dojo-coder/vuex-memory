import { createStore } from 'vuex';
import swat from './modules/swat';
import taskbar from './modules/taskbar';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    swat,
    taskbar
  },
  strict: debug
});