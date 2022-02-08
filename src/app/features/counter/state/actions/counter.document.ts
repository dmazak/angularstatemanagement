import { createAction, props } from '@ngrx/store';
import { CountUIState } from '../reducers/count-ui.reducer';

export const counterDocument = createAction(
  '[counter document] counter counter document',
  props<{ payload: CountUIState }>()
);
