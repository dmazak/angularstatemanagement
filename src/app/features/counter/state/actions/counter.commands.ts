import { createAction, props } from '@ngrx/store';

// Commands are when you want something to happen. Like loading data, saving data, etc.
// Events often turn into commands.
// So when we get an event of type incrementClicked we are going to say "Ok, increment the count"

export const incrementCounterCount = createAction(
  '[counter command] increment counter count'
);

export const decrementCounterCount = createAction(
  '[counter command] decrement counter count'
);

export const saveCounterData = createAction(
  '[counter command] save the counter data'
);

export const loadCounterData = createAction(
  '[counter command] load counter data'
);

export const resetCount = createAction('[counter command] reset count');

export const setCountBy = createAction(
  '[counter command] set the count by',
  props<{ payload: number }>()
);
