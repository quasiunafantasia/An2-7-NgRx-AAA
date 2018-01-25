import {A1ActionTypes, A1Actions} from './a1.actions';
import * as fromA from '../a.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const FEATURE_NAME = 'a1';

export interface A1State {
  a1: number;
}

export const initialA1State: A1State = {
  a1: 0
};


export interface State extends fromA.State {
  a1: A1State;
}


export function A1Reducer(state = initialA1State, action: A1Actions): A1State {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {

    case A1ActionTypes.A1Action1: {
      console.log('A1Action1 being handled!');
      const a1 = state.a1 + 1;
      return {
        ...state,
        a1
      };
    }

    default: {
      console.log('UNKNOWN action being handled!');
      return state;
    }
  }
}

export const getA1State = createFeatureSelector<A1State>(FEATURE_NAME);


export const getA1Value = createSelector(getA1State, state => state.a1);
