import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { darkModeReducer } from './reducers/dark-mode.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ theme: darkModeReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
