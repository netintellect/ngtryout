import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import {AppComponent, CapitalizePipe} from './app.component';
import {Logger} from "./services/logger";
import {ColorService} from "./services/ColorService";
import {APP_SETTINGS, AppSettings} from "./settings/settings";

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: Logger, useClass: Logger},
    { provide: ColorService, useClass: ColorService },
    { provide: APP_SETTINGS, useValue: new AppSettings()}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
