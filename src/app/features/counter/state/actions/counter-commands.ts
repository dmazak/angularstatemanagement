import { createAction } from '@ngrx/store';

export const incrementCounterCount = createAction(
  '[counter command] increment counter count'
);

export const decrementCounterCount = createAction(
  '[counter command] decrement counter count'
);

export const saveCounterData = createAction(
  '[counter command] save the counter data'
);
