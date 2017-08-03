import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import {AppComponent, CapitalizePipe} from './app.component';
import {Logger} from "./services/logger";


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ Logger ],
  bootstrap: [AppComponent]
})
export class AppModule { }
