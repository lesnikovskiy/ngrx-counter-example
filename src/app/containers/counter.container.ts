import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterActions from '../actions/counter.actions';
import { AppState } from '../app.state';

@Component({
    selector: 'app-counter-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-counter-controls [count]="count$ | async"
            (increment)="increment($event)"
            (decrement)="decrement($event)"
            (reset)="reset()"></app-counter-controls>
        <app-counter-link-controls [count]="count$ | async"
            (increment)="increment($event)"
            (decrement)="decrement($event)"
            (reset)="reset()"></app-counter-link-controls>
        <app-counter [count]="count$ | async"
            [up]="up$ | async"
            [down]="down$ | async"
            [initial]="initial$ | async"></app-counter>
        <app-counter-display [count]="count$ | async"
            [up]="up$ | async"
            [down]="down$ | async"
            [initial]="initial$ | async"></app-counter-display>
         <app-counter [count]="count$ | async"
            [up]="up$ | async"
            [down]="down$ | async"
            [initial]="initial$ | async"></app-counter>
        <app-counter-display [count]="count$ | async"
            [up]="up$ | async"
            [down]="down$ | async"
            [initial]="initial$ | async"></app-counter-display>
    `
})
export class CounterContainerComponent {
    count$: Observable<number>;
    up$: Observable<boolean>;
    down$: Observable<boolean>;
    initial$: Observable<boolean>;

    constructor(private readonly store: Store<AppState>) {
        this.count$ = this.store.select(state => state.counter.count);
        this.up$ = this.store.select(state => state.counter.up);
        this.down$ = this.store.select(state => state.counter.down);
        this.initial$ = this.store.select(state => state.counter.initial);
    }

    increment(count: number) {
        this.store.dispatch(new counterActions.IncrementAction(count));
    }

    decrement(count: number) {
        this.store.dispatch(new counterActions.DecrementAction(count));
    }

    reset() {
        this.store.dispatch(new counterActions.ResetAction());
    }
}
