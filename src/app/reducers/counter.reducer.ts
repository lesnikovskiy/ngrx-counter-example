import { Action } from '@ngrx/store';
import * as counterActions from '../actions/counter.actions';

export interface CounterState {
    count: number;
    up: boolean;
    down: boolean;
    initial: boolean;
}

const initialState: CounterState = {
    count: 0,
    up: false,
    down: false,
    initial: true
};

export function counterReducer(state = initialState, action: counterActions.CounterActionsUnion) {
    switch (action.type) {
        case counterActions.INCREMENT:
            return Object.assign({}, state, {
                count: action.payload + 1,
                up: true,
                initial: false
            });
        case counterActions.DECREMENT:
            return Object.assign({}, state, {
                count: action.payload - 1,
                up: false,
                down: true,
                initial: false
            });
        case counterActions.RESET:
            return Object.assign({}, state, {
                count: 0,
                up: false,
                down: false,
                initial: true
            });
        default:
            return state;
    }
}
