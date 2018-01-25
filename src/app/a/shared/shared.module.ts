import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponent } from './common.component';

import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule
  ],
  declarations: [
      CommonComponent
  ],
  exports: [
      CommonComponent
  ]
})
export class SharedModule { }
