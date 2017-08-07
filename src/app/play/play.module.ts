import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {DatePickerModule} from "@progress/kendo-angular-dateinputs";
import {LabelModule} from "@progress/kendo-angular-label";

import {PlayComponent} from './play.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LabelModule,
    DatePickerModule
  ],
  exports: [],
  declarations: [
    PlayComponent
  ],
  providers: [],
})
export class PlayModule {
}
