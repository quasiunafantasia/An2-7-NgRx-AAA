import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { A2Component } from './a2.component';

import { StoreModule } from '@ngrx/store';
import { A2Reducer } from './../../+store';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // StoreModule.forFeature('a2', A2Reducer),
  ],
  declarations: [
      A2Component
  ],
  exports: [
      A2Component
  ]
})
export class A2Module { }
