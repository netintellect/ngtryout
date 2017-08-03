import {Component, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public header: string = "app with new header";
  public lines : string[] = [
    "red", "white", "blue",
  ];
  public newColor: string = "";
  public randomNumber: number;
  public randomDate: Date;

  public addColor(): void {
    this.lines.push(this.newColor);
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


