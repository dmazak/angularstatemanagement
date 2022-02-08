import { Injectable } from '@angular/core';
import {
  Actions,
  concatLatestFrom,
  createEffect,
  ofType,
  OnInitEffects,
} from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { selectCountUiBranch } from '..';
import * as commands from '../actions/counter.commands';
import * as documents from '../actions/counter.document';
import * as events from '../actions/counter.events';
import { CountUIState } from '../reducers/count-ui.reducer';
@Injectable()
export class CounterEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return events.counterFeatureInitialized();
  }

  // Turn Events into Commands. "I" (the effect) decides what an event means, what has to happen when that event fires.

  // turn an event into a command

  // what does it mean when a count is reset?

  countBySet$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.countBySet),
      map((a) => commands.setCountBy({ payload: a.payload }))
    );
  });

  resetCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.countReset),
      map(() => commands.resetCount())
    );
  });
  // events.counterFeatureInitialized => commands.loadCounterData()

  loadCounterData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.counterFeatureInitialized),
      map(() => commands.loadCounterData())
    );
  });

  countIncremented$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.incrementClicked),
      map(() => commands.incrementCounterCount())
    );
  });

  countDecremented$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.decrementClicked),
      map(() => commands.decrementCounterCount())
    );
  });

  persistCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commands.decrementCounterCount, commands.incrementCounterCount),
      map(() => commands.saveCounterData())
    );
  });

  // these do some work on commands

  resetCountState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commands.resetCount),
      map(() => documents.blankCounterState())
    );
  });

  saveCounterData$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          commands.saveCounterData,
          documents.blankCounterState,
          commands.setCountBy
        ),
        concatLatestFrom(() => this.store.select(selectCountUiBranch)),
        tap(
          (
            [_, model] // the discarded paramater (_) is the action that caused this to happen (saveCounterData), the model is what the select returns.
          ) => localStorage.setItem('counter', JSON.stringify(model))
        ) // Whatever goes into a tap, comes out of it.
      );
    },
    { dispatch: false }
  );

  loadCounterState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commands.loadCounterData), // when we are told to do this command
      map(() => localStorage.getItem('counter')), // null | string
      map((stored: null | string) => {
        if (stored === null) {
          return documents.blankCounterState(); // we will say the document should be the initial state
        } else {
          const payload = JSON.parse(stored) as CountUIState; // this should be what was stored
          return documents.counterDocument({ payload });
        }
      })
    );
  });

  // demo$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(tap((a) => console.log(a.type)));
  //   },
  //   { dispatch: false }
  // );

  // This is where we decide if an event happens, what should happen with that event.

  constructor(private actions$: Actions, private store: Store) {}
}

// Observables are a "stream" of things.
// If we want to do something with that stream, we divert it through a "pipe"
// You can put operators in the pipe, they let you do things like change the thing map,
// just do something with that thing, "tap"
