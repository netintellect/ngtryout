import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {User} from "../shared/models/user.model";

@Component({
  moduleId: module.id,
  selector: "app-users-component",
  templateUrl: "users.component.html",
  styleUrls: [ "users.component.scss" ]
})
export class UsersComponent implements OnInit, OnChanges {
  //#region state
  @Input() public model: User;
  public isReadOnly = true;
  //#endregion

  //#region behavior
  constructor() {
  }

  ngOnChanges(changes?: SimpleChanges): void {
    console.log(`changes detected: ${changes.toString()}.`);
  }

  ngOnInit() {

  }

  public saveUser(): void {
    console.log(`user saved ${this.model}`);
  }

  public reset(): void {
    this.model.reset();
  }

  private createUser(): User {
    return new User(
      0,
      "",
      "",
      new Date(),
      ""
    );
  }

//#endregion
}
