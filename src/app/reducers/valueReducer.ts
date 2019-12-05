import { createReducer, on } from '@ngrx/store';
import * as setValueAction from '../actions/setValue.action';


export const initialState = 'initialState';

export function valueReducer(state: string = initialState, action: setValueAction.Actions) {
    switch (action.type) {
        case setValueAction.SET_VALUE:
            //return Object.assign({}, state, action.payload);
            return action.payload;
        default:
            return state;
    }
}
