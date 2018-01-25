import { Component, OnInit } from '@angular/core';

import {Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AAction1 } from '../a.actions';
import * as fromA from '../a.reducer';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html'
})
export class CommonComponent implements OnInit {
  aValue$: Observable<any>;

  constructor(private store: Store<fromA.State>) {
  }

  ngOnInit() {
    this.aValue$ = this.store.select(fromA.getAValue);
    // this.aState$.subscribe(data => this.content = data.a);
  }

  onClick() {
    this.store.dispatch(new AAction1(10));
  }
}
