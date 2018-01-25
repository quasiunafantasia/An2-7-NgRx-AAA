import { Action } from '@ngrx/store';


// Actions for A1
// [A1] - namespace
export class A1ActionTypes {
  static readonly A1Action1 = '[A1] Action1';
}

// Action Creators
export class A1Action1 implements Action {
  readonly type = A1ActionTypes.A1Action1;
  constructor(public payload?: any) { }
}

export type A1Actions = A1Action1;
