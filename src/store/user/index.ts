import { Module } from 'vuex';
import { RootState } from '../root-state';
import { UserState } from './user-state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import * as _ from 'lodash';


let state;

const  defaultState: UserState = {
    name: "",
    email: "",
    password: ""
}

const userData: any = localStorage.getItem('user');
if (!_.isNull(userData)) {
    state = JSON.parse(userData);
} else {
    state = defaultState;
}


export const user: Module<UserState, RootState> = {
    state,
    getters,
    mutations,
    actions
}
