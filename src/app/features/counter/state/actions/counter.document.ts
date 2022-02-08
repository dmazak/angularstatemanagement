import { createAction, props } from '@ngrx/store';
import { CountUIState, initialState } from '../reducers/count-ui.reducer';

export const counterDocument = createAction(
  '[counter document] counter counter document',
  props<{ payload: CountUIState }>()
);

export const blankCounterState = createAction(
  '[counter document] initial state',
  () => ({
    payload: initialState,
  })
);
