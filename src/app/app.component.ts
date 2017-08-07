import {Component, Pipe, PipeTransform} from '@angular/core';
import {Logger} from "./services/logger";
import {ColorService} from "./services/ColorService";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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
