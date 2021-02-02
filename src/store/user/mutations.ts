import { MutationTree } from 'vuex';
import { UserState } from './user-state';
import { RootState } from '../root-state';

export const mutations: MutationTree<UserState> = {
    setUser(state, UserState) {        
        state.name = UserState.name;
        state.email = UserState.email;
        state.password = UserState.password;
    }
}