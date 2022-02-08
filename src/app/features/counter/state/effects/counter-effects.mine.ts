import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import * as events from '../actions/counter.events';
import * as commands from '../actions/counter-commands';
import { Store } from '@ngrx/store';
import { selectCountUiCurrent } from '..';
@Injectable()
export class CounterEffects {
  // demo$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(tap((a) => console.log(a.type)));
  //   },
  //   { dispatch: false }
  // );

  countIncremented$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.incrementClicked),
      map((a) => commands.incrementCounterCount())
    );
  });

  countDecremented$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.decrementClicked),
      map((a) => commands.decrementCounterCount())
    );
  });
  persistCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commands.decrementCounterCount, commands.incrementCounterCount),
      map(() => commands.saveCounterData())
    );
  });

  saveCounterData$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(commands.saveCounterData),
        concatLatestFrom(() => this.store.select(selectCountUiCurrent)),
        tap(([_, model]) => {
          localStorage.setItem('counter', JSON.stringify(model));
        })
      );
    },
    { dispatch: false }
  );
  constructor(private actions$: Actions, private store: Store) {}
}

// Observables are a "stream" of things.
// If we want to do something with that stream, we divert it through a "pipe"
// You can put operators in the pipe, they let you do things like change the thing map,
// just do something with that thing, "tap"
