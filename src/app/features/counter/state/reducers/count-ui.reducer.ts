import { createReducer, on } from '@ngrx/store';
import * as commands from '../actions/counter.commands';
import * as documents from '../actions/counter.document';

// describe it with a type for TypeScript
export interface CountUIState {
  current: number;
}

// What should it be when the application starts up?
export const initialState: CountUIState = {
  current: 0,
};

export const reducer = createReducer(
  initialState,
  on(documents.counterDocument, (_, a) => a.payload),
  on(
    commands.incrementCounterCount,
    (s): CountUIState => ({
      ...s,
      current: s.current + 1,
    })
  ),
  on(
    commands.decrementCounterCount,
    (s): CountUIState => ({
      ...s,
      current: s.current - 1,
    })
  )
);
