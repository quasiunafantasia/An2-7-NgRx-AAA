import { Action } from '@ngrx/store';


// Actions for A2
// [A2] - namespace
export class A2ActionTypes {
  static readonly A2Action1 = '[A2] Action1';
}

// Action Creators
export class A2Action1 implements Action {
  readonly type = A2ActionTypes.A2Action1;
  constructor(public payload?: any) { }
}

export type A2Actions = A2Action1;
