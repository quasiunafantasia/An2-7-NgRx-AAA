import { ActionReducerMap } from '@ngrx/store';

import { AState } from './a.state';
import { A1State } from './a1.state';
import { A2State } from './a2.state';
import { AReducer, A1Reducer, A2Reducer } from './../reducers';

export interface AppState {
  a: AState;
  a1: A1State;
  a2: A2State;
}

export const reducers: ActionReducerMap<AppState> = {
  a: AReducer,
  a1: A1Reducer,
  a2: A2Reducer
};

