import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { A2Component } from './a2.component';

import { StoreModule } from '@ngrx/store';

import * as fromA2 from './a2.reducer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(fromA2.FEATURE_NAME, fromA2.A2Reducer),
  ],
  declarations: [
      A2Component
  ],
  exports: [
      A2Component
  ]
})
export class A2Module { }
