import { GetterTree } from 'vuex';
import { UserState } from './user-state';
import { RootState } from '../root-state';
import * as _ from 'lodash';

export const getters: GetterTree<UserState, RootState> = {
    isAuthenticated(state): boolean {
        return (!!state && !_.isEmpty(state.name) && !_.isEmpty(state.password));
    },
    getName(state): string {
        return state.name;
    },
    getEmail(state): string {
        return state.email;
    },
    getPassword(state): string {
        return state.password;
    },
}