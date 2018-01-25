import { Component, OnInit } from '@angular/core';

import {Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppState, AState } from './../../+store';
import { AAction1 } from './../../+store';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html'
})
export class CommonComponent implements OnInit {
  data$: Observable<number>;
  aState$: Store<AState>;
  content: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    console.log(this.store);
    this.aState$ = this.store.select('a');
    this.aState$.subscribe(data => this.content = data.a);
  }

  onClick() {
    this.store.dispatch(new AAction1(10));
  }
}
