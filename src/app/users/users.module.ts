import {NgModule} from '@angular/core';

import {UsersComponent} from './users.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DatePickerModule} from "@progress/kendo-angular-dateinputs";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DatePickerModule
  ],
  exports: [

  ],
  declarations: [
    UsersComponent
  ],
  providers: [],
})
export class UsersModule {}
