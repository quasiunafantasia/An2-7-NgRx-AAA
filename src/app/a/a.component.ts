import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromA from './a.reducer';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-a',
  template: `
    <div>
      A component value: {{aValue$ | async}}
      <app-a1></app-a1>
      <app-a2></app-a2>
      <!--<app-common></app-common>-->
    </div>
  `
})
export class AComponent implements OnInit {
  aValue$: Observable<number>;

  constructor(private store: Store<fromA.State>) {
  }

  ngOnInit() {
    this.aValue$ = this.store.select(fromA.getAValue);
    this.store.select(state => state).subscribe(state => console.log('A subscriber', state));
  }
}
