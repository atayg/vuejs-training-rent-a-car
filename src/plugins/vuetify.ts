import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import '@fortawesome/fontawesome-free/css/all.css';
import i18n from './i18n';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'fa',
    lang: {
      t: (key: string, ...params: Array<string | number>) => i18n.t(key, params).toString(),
    },
  });
