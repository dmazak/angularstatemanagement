import { createReducer, on } from '@ngrx/store';
import * as commands from '../actions/counter.commands';
import * as documents from '../actions/counter.document';

// describe it with a type for TypeScript
export interface CountUIState {
  current: number;
  by: number;
}

// What should it be when the application starts up?
export const initialState: CountUIState = {
  current: 0,
  by: 1,
};

export const reducer = createReducer(
  initialState,
  on(commands.setCountBy, (s, a) => ({ ...s, by: a.payload })),
  on(
    documents.counterDocument,
    documents.blankCounterState,
    (_, a) => a.payload
  ),
  on(
    commands.incrementCounterCount,
    (s): CountUIState => ({
      ...s,
      current: s.current + s.by,
    })
  ),
  on(
    commands.decrementCounterCount,
    (s): CountUIState => ({
      ...s,
      current: s.current - s.by,
    })
  )
);
