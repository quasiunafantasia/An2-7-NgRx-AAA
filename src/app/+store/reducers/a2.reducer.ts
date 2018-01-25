import { A2ActionTypes, A2Actions } from './../actions/a2.actions';
import { A2State, initialA2State } from './../state/a2.state';

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
