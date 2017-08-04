import {Inject, Injectable} from "@angular/core";
import {Logger} from "./logger";
import {AppSettingsToken, AppSettings} from "../settings/settings";

@Injectable()
export class ColorService {
  //#region state
  private colorList: string[] = [];
   //#endregion

  //#region behavior
  constructor(private logger: Logger,
              @Inject(AppSettingsToken) private appSettings: AppSettings) {
    this.addColor("red");
    this.addColor( "blue");
    this.addColor( "orange");
  }

  public getAll(): string[] {
    this.logger.log("retrieved color list with " + this.appSettings.connectionString);
    return this.colorList;
  }

  public addColor(color: string) {
    this.logger.log("added color to color list");
    this.colorList.push(color);
  }
  //#endregion
}
