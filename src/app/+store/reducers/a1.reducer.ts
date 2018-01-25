import { A1ActionTypes, A1Actions } from './../actions/a1.actions';
import { A1State, initialA1State } from './../state/a1.state';

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
