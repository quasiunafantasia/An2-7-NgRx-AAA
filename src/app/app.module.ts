import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// @Ngrx
import { StoreModule } from '@ngrx/store';

import { AModule } from './a';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AModule,
    StoreModule.forRoot({}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
