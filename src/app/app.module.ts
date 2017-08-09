import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { NgModule } from "@angular/core";
import {LabelModule} from "@progress/kendo-angular-label";

import {AppComponent, CapitalizePipe} from "./app.component";
import {Logger} from "./services/logger";
import {ColorService} from "./services/ColorService";
import {AppSettingsToken, AppSettings} from "./settings/settings";
import {UsersComponent} from "./users/users.component";
import {PlayComponent} from "./play/play.component";
import {DatePickerModule} from "@progress/kendo-angular-dateinputs";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PlayComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LabelModule,
    DatePickerModule
  ],
  providers: [
    { provide: Logger, useClass: Logger},
    { provide: ColorService, useClass: ColorService },
    { provide: AppSettingsToken, useClass: AppSettings}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
