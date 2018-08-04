import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';

export class IncrementAction implements Action {
    readonly type = INCREMENT;

    constructor(public payload: number) { }
}

export class DecrementAction implements Action {
    readonly type = DECREMENT;

    constructor(public payload: number) { }
}

export class ResetAction implements Action {
    readonly type = RESET;
}

export type CounterActionsUnion = IncrementAction | DecrementAction | ResetAction;
