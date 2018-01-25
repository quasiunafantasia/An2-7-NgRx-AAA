import { A2ActionTypes, A2Actions } from './a2.actions';
import * as fromA from '../a.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const FEATURE_NAME = 'a2';

export interface A2State {
  a2: number;
}

export const initialA2State: A2State = {
  a2: 0
};


export interface State extends fromA.State {
  a2: A2State;
}


export function A2Reducer(state = initialA2State, action: A2Actions): A2State {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {

    case A2ActionTypes.A2Action1: {
      console.log('A2Action1 being handled!');
      const a2 = state.a2 + 1;
      return {
        ...state,
        a2
      };
    }

    default: {
      console.log('UNKNOWN action being handled!');
      return state;
    }
  }
}

export const getA1State = createFeatureSelector<A2State>(FEATURE_NAME);


export const getA2Value = createSelector(getA1State, state => state.a2);



