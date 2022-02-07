import { createAction } from '@ngrx/store';

export const incrementClicked = createAction(
  '[counter event] increment button clicked'
);

export const decrementClicked = createAction(
  '[counter event] decrement button clicked'
);
