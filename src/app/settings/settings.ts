import {InjectionToken} from "@angular/core";

export const AppSettingsToken = new InjectionToken<AppSettings>("AppSettings");

export class AppSettings {
  public connectionString: string;

  constructor() {
    this.connectionString = "someconnection";
  }
}
