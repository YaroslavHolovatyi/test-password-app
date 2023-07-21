import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordBlockComponent } from './organism/password-block/password-block.component';
import { PasswordInputComponent } from './molecula/password-input/password-input.component';
import { PasswordHintsComponent } from './molecula/password-hints/password-hints.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    PasswordBlockComponent,
    PasswordInputComponent,
    PasswordHintsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
