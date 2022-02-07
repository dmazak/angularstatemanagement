export const featureName = 'counterFeature';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCountUi from './reducers/count-ui.reducer';

export interface CounterState {
  countUi: fromCountUi.CountUIState;
}

export const reducers = {
  countUi: fromCountUi.reducer,
};

// Selector Functions - We'll refactor this later to clean it up a bit.
// 1. Create a Feature Selector
const selectFeature = createFeatureSelector<CounterState>(featureName);

// 2. Create a selector per "branch" of our state.
const selectCountUiBranch = createSelector(selectFeature, (f) => f.countUi);

// 3. (optional) Create any intermediate or "helper" selectors
// 4.  create the selectors the components need.

// TODO: Our CountUIComponent needs a number (the current)

export const selectCountUiCurrent = createSelector(
  selectCountUiBranch,
  (b) => b.current
);
