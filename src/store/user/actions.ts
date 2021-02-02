import { ActionTree } from 'vuex';
import { UserState } from './user-state';
import { RootState } from '../root-state';

export const actions: ActionTree<UserState, RootState> = {
    login({ commit }, user: UserState) {
        commit('setUser', user);
        localStorage.setItem('user', JSON.stringify(user));
    },
    logout({ commit }) {
        const emptyState: UserState = {
            name: "",
            password: "",
            email: ""
        }
        commit('setUser', {emptyState});
        localStorage.removeItem('user');
    }
}
