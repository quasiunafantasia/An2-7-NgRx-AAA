import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponent } from './common.component';

import { StoreModule } from '@ngrx/store';
import { AReducer } from './../../+store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('a', AReducer),
  ],
  declarations: [
      CommonComponent
  ],
  exports: [
      CommonComponent
  ]
})
export class SharedModule { }
