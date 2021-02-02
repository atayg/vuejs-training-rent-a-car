import { GetterTree } from 'vuex';
import { RootState } from '../root-state';
import { LanguageState } from './language-state';

export const getters: GetterTree<LanguageState, RootState> = {   
    getLocale(state): string {
        return state.locale;
    }    
}