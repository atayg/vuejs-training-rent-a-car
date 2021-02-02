import { Module } from 'vuex';
import { RootState } from '../root-state';
import { getters } from './getters';
import { mutations } from './mutations';
import { LanguageState } from './language-state';

const state: LanguageState = {
    locale: 'tr'
}

export const language: Module<LanguageState, RootState> = {
    state,
    getters,
    mutations,
}
