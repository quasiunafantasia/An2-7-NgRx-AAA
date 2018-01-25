import { Action } from '@ngrx/store';


// Actions for A
// [A] - namespace
export class AActionTypes {
  static readonly AAction1 = '[A] Action1';
}

// Action Creators
export class AAction1 implements Action {
  readonly type = AActionTypes.AAction1;
  constructor(public payload?: any) { }
}

export type AActions = AAction1;
