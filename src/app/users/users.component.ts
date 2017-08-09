import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {User} from "../shared/models/users.model";

@Component({
  moduleId: module.id,
  selector: "app-users-component",
  templateUrl: "users.component.html",
  styleUrls: [ "users.component.scss" ]
})
export class UsersComponent implements OnInit, OnChanges {
  //#region state
  public model: User;
  public isReadOnly = true;
  //#endregion

  //#region behavior
  constructor() {
  }

  ngOnChanges(changes?: SimpleChanges): void {
    console.log(`changes detected: ${changes.toString()}.`);
  }

  ngOnInit() {
    this.model = this.createUser();
  }

  public saveUser(): void {
    console.log(`user saved ${this.model}`);
  }

  public reset(): void {
    this.model = this.createUser();
  }

  private createUser(): User {
    return new User(
      0,
      "",
      "",
      new Date(),
      "",
      "",
      true,
      ""
    );
  }

//#endregion
}
