import { MutationTree } from 'vuex';
import { LanguageState } from './language-state';
import i18n from '../../plugins/i18n';

export const mutations: MutationTree<LanguageState> = {    
    setLocale(state, locale: string) {
        state.locale = locale;
        i18n.locale = locale;        
    }    
}