import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A1Module } from './a1/a1.module';
import { A2Module } from './a2/a2.module';

import { StoreModule } from '@ngrx/store';
import {AComponent} from './a.component';
import * as fromA from './a.reducer';

@NgModule({
  imports: [
    CommonModule,
    A1Module,
    A2Module,
    StoreModule.forFeature(fromA.FEATURE_NAME, fromA.AReducer),
  ],
  declarations: [AComponent],
  exports: [
    AComponent,
    A1Module,
    A2Module
  ]
})
export class AModule { }
