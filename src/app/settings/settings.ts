import {InjectionToken} from "@angular/core";

export const APP_SETTINGS = new InjectionToken<AppSettings>("AppSettings");

export class AppSettings {
  public connectionString: string;

  constructor() {
    this.connectionString = "someconnection";
  }
}
