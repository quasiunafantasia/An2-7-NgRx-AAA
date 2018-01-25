import { AActionTypes, AActions } from './../actions/a.actions';
import { AState, initialAState } from './../state/a.state';

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
