import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A1Module } from './a1/a1.module';
import { A2Module } from './a2/a2.module';

import { StoreModule } from '@ngrx/store';
import { AReducer } from './../+store';

@NgModule({
  imports: [
    CommonModule,
    A1Module,
    A2Module,
    StoreModule.forFeature('a', AReducer),
  ],
  exports: [
    A1Module,
    A2Module
  ]
})
export class AModule { }
