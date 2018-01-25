import { AActionTypes, AActions } from './a.actions';
import * as fromRoot from '../app.reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const FEATURE_NAME = 'a';

interface AState {
  a: number;
}

const initialAState: AState = {
  a: 0
};

export interface State extends fromRoot.State {
  a: AState;
}


export function AReducer(state = initialAState, action: AActions): AState {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {

    case AActionTypes.AAction1: {
      console.log('AAction1 being handled!');
      const a = state.a + action.payload;
      return {
        ...state,
        a
      };
    }

    default: {
      console.log('UNKNOWN action being handled!');
      return state;
    }
  }
}

export const getAState = createFeatureSelector<AState>(FEATURE_NAME);


export const getAValue = createSelector(getAState, state => state.a);
