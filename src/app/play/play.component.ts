import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Logger} from "../services/logger";
import {ColorService} from "../services/ColorService";

@Component({
  moduleId: module.id,
  selector: 'play-component',
  templateUrl: 'play.component.html'
})

export class PlayComponent {
  public header: string = "app with new header";
  public  get colors(): string[] {
    return this.colorService.getAll();
  }
  public newColor: string = "";
  public randomNumber: number;
  public randomDate: Date;

  constructor(private logger: Logger,
              private colorService: ColorService) {

  }

  public addColor(): void {
    this.logger.log("Enter");
    this.colorService.addColor(this.newColor);
  }

  public addNumber(): void {
  }
}

  @Pipe({
    name: 'capitalize'
  })
  export class CapitalizePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const stringValue = value.toString();
    return stringValue.slice(0, stringValue.length - 1)+ stringValue.charAt(stringValue.length - 1).toUpperCase();
  }
}
