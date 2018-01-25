import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { A1Component } from './a1.component';

import { StoreModule } from '@ngrx/store';
import * as fromA1 from './a1.reducer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(fromA1.FEATURE_NAME, fromA1.A1Reducer),
  ],
  declarations: [
      A1Component
  ],
  exports: [
      A1Component
  ]
})
export class A1Module { }
