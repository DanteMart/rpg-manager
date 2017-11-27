import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { CharacterModule } from './character/character.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CharacterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
