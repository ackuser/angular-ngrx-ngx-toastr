import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, displaySuccess, displayError, displayWarning } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
  on(displaySuccess, state => state),
  on(displayError, state => state),
  on(displayWarning, state => state)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/