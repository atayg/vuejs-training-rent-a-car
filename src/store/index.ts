import Vue from "vue";
import Vuex, {StoreOptions} from "vuex";
import {RootState} from './root-state';
import { user } from './user';
import { language } from './language';
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    user,
    language
  }
};

export default new Vuex.Store<RootState>(store);
