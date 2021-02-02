import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);

import en from '../resources/en/en';
import tr from '../resources/tr/tr';
import * as vuetifyMessages from 'vuetify/src/locale';

const messages: LocaleMessages = {
  tr: { ...tr, $vuetify: { ...vuetifyMessages.tr } },
  en: { ...en, $vuetify: { ...vuetifyMessages.en } },
};


const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
});

//setMomentLanguage(i18n);

export default i18n;
