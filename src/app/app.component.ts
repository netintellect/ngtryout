import {Component, OnChanges, OnInit, Pipe, PipeTransform, SimpleChanges} from '@angular/core';
import {Logger} from "./services/logger";
import {ColorService} from "./services/ColorService";
import {User} from "./shared/models/user.model";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent
  implements OnInit, OnChanges
{
  //#region state
  public user: User;
  //#endregion
  //#region behavior
  ngOnInit(): void {
    this.user = User.create();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  //#endregion
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
