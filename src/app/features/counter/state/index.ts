export const featureName = 'counterFeature';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountUIViewModel } from '../models';
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
export const selectCountUiBranch = createSelector(
  selectFeature,
  (f) => f.countUi
);

// 3. (optional) Create any intermediate or "helper" selectors
// 4.  create the selectors the components need.

// TODO: Our CountUIComponent needs a number (the current)

export const selectCountUiCurrent = createSelector(
  selectCountUiBranch,
  // (b:fromCountUi.CountUIState): CountUIViewModel => ({ current: b.current })
  getCountUiViewModel
);

export const selectResetDisabled = createSelector(
  selectCountUiBranch,
  (c) => c.current === 0
);

export const selectCountingBy = createSelector(
  selectCountUiBranch,
  (b) => b.by
);
// IF this is easier for you to understand and write, do it.
// if some snooty code reviewer says something like "uhm, you should use an anonymous function"
// Just say "I feel this is more intention revealing and it allows me to unit test this."

function getCountUiViewModel(vm: fromCountUi.CountUIState): CountUIViewModel {
  return {
    current: vm.current,
  };
}
