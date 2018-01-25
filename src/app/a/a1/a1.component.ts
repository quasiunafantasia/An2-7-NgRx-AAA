import {Component, OnInit} from '@angular/core';
import * as fromA1 from './a1.reducer';
import * as fromA from '../a.reducer';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {A1Action1} from "./a1.actions";

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html'
})
export class A1Component implements OnInit {
  aValue$: Observable<number>;
  a1Value$: Observable<number>;

  constructor(private store: Store<fromA1.State>) {
  }

  ngOnInit() {
    this.aValue$ = this.store.select(fromA.getAValue);
    this.a1Value$ = this.store.select(fromA1.getA1Value);
    this.store.select(state => state).subscribe(state => console.log('A1 subscription', state));
  }

  dispatch() {
    this.store.dispatch(new A1Action1());
  }
}
